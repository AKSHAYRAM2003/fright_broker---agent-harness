"""
Freight Broker Operations Orchestrator.
Coordinates the end-to-end Life-of-a-Load lifecycle, agent reasoning,
deterministic guardrails, and the Human-in-the-Loop broker action queue.
"""

from datetime import datetime, timedelta
import uuid
from typing import Dict, List, Optional

from .core.schemas import (
    Load,
    LoadStatus,
    Quote,
    Trip,
    VehicleCategory,
    VehicleCompliance,
)
from .core.state_machine import LoadStateMachine
from .core.memory import BrokerMemoryStore
from .agents.intake_agent import LoadIntakeAgent
from .agents.rfq_agent import RFQAgent
from .hitl.queue import ActionQueueManager
from .guardrails.financial import FinancialGuardrail
from .guardrails.compliance import ComplianceGuardrail


class FreightOperationsOrchestrator:
    """
    Central control plane for a broker's operations.
    """

    def __init__(self, tenant_id: str = "brokerage_blr_01"):
        self.tenant_id = tenant_id
        self.memory = BrokerMemoryStore(tenant_id=tenant_id)
        self.action_queue = ActionQueueManager(tenant_id=tenant_id)

    def handle_shipper_inquiry(
        self,
        shipper_name: str,
        shipper_phone: str,
        raw_message: str,
    ) -> Dict:
        """
        Processes inbound load request from shipper (WhatsApp text or voice transcription).
        """
        # Step 1: Ingest & Parse
        parsed = LoadIntakeAgent.parse_load_inquiry(raw_message)
        load_id = f"LOAD_{uuid.uuid4().hex[:6].upper()}"

        if not parsed["is_complete"]:
            # Load is incomplete: record and trigger action queue
            load = Load(
                id=load_id,
                tenant_id=self.tenant_id,
                shipper_name=shipper_name,
                shipper_phone=shipper_phone,
                origin_city=parsed["origin"] or "Unknown",
                destination_city=parsed["destination"] or "Unknown",
                material_type=parsed["material_type"] or "General Cargo",
                weight_tonnes=parsed["weight_tonnes"] or 0.0,
                vehicle_required=VehicleCategory.HCV_10W_TAURUS,  # placeholder
                target_pickup_date=datetime.now() + timedelta(days=1),
                status=LoadStatus.INQUIRY_INCOMPLETE,
            )
            self.memory.save_load(load)

            action = self.action_queue.create_incomplete_load_action(
                load_id=load_id,
                missing_fields=parsed["missing_fields"],
                clarification_prompt=parsed["clarification_prompt"],
            )

            return {
                "load_id": load_id,
                "status": load.status.value,
                "is_complete": False,
                "missing_fields": parsed["missing_fields"],
                "clarification_prompt": parsed["clarification_prompt"],
                "action_item_id": action.id,
            }

        # Step 2: Complete Load Creation
        vehicle_cat = VehicleCategory(parsed["vehicle_category"])
        load = Load(
            id=load_id,
            tenant_id=self.tenant_id,
            shipper_name=shipper_name,
            shipper_phone=shipper_phone,
            origin_city=parsed["origin"],
            destination_city=parsed["destination"],
            material_type=parsed["material_type"] or "General Freight",
            weight_tonnes=parsed["weight_tonnes"],
            vehicle_required=vehicle_cat,
            target_pickup_date=datetime.now() + timedelta(days=1),
            shipper_target_rate=parsed["target_rate_inr"],
            status=LoadStatus.INQUIRY_RECEIVED,
        )
        self.memory.save_load(load)

        # Step 3: Match Transporters by Lane Affinity
        candidates = self.memory.get_transporters_for_route(load.origin_city, load.destination_city)

        # Step 4: Generate Personalized WhatsApp RFQs
        rfq_messages = RFQAgent.generate_rfq_messages(load, candidates)

        # Step 5: Advance FSM to RFQ_DISPATCHED
        load.status = LoadStateMachine.transition(load.status, LoadStatus.RFQ_DISPATCHED)
        self.memory.save_load(load)

        return {
            "load_id": load_id,
            "status": load.status.value,
            "is_complete": True,
            "extracted_specs": {
                "origin": load.origin_city,
                "destination": load.destination_city,
                "weight_tonnes": load.weight_tonnes,
                "vehicle": load.vehicle_required.value,
                "target_rate_inr": load.shipper_target_rate,
            },
            "matched_transporters_count": len(candidates),
            "dispatched_rfqs": rfq_messages,
        }

    def handle_transporter_quote(
        self,
        load_id: str,
        transporter_id: str,
        raw_quote_message: str,
    ) -> Dict:
        """
        Ingests an incoming transporter quote, ranks options, and pushes to Broker Action Queue.
        """
        load = self.memory.get_load(load_id)
        if not load:
            raise KeyError(f"Load '{load_id}' not found.")

        # Step 1: Parse informal quote
        parsed_quote = LoadIntakeAgent.parse_transporter_quote(raw_quote_message)
        quote_id = f"Q_{uuid.uuid4().hex[:6].upper()}"

        quote = Quote(
            id=quote_id,
            load_id=load_id,
            transporter_id=transporter_id,
            quoted_amount=parsed_quote["quoted_amount"] or 0.0,
            includes_tolls=parsed_quote["includes_tolls"],
            loading_unloading_charges=parsed_quote["loading_unloading_charges"],
            raw_message=raw_quote_message,
        )
        self.memory.save_quote(quote)

        # Advance FSM from RFQ_DISPATCHED -> QUOTES_RECEIVED
        if load.status == LoadStatus.RFQ_DISPATCHED:
            load.status = LoadStateMachine.transition(load.status, LoadStatus.QUOTES_RECEIVED)

        # Step 2: Rank all quotes collected so far
        all_quotes = self.memory.get_quotes_for_load(load_id)
        ranked = RFQAgent.rank_quotes(all_quotes, customer_rate=load.shipper_target_rate)

        # Step 3: Identify best quote and transporter name
        best_ranked = ranked[0]
        best_quote_obj = next(q for q in all_quotes if q.id == best_ranked["quote_id"])
        transporter_obj = self.memory.transporters.get(transporter_id)
        transporter_name = transporter_obj.business_name if transporter_obj else "Transporter"

        # Step 4: Advance FSM to PENDING_BROKER_APPROVAL
        if load.status == LoadStatus.QUOTES_RECEIVED:
            load.status = LoadStateMachine.transition(load.status, LoadStatus.PENDING_BROKER_APPROVAL)
        self.memory.save_load(load)

        # Step 5: Surface to Broker Action Queue
        action_item = self.action_queue.create_quote_approval_action(
            load=load,
            ranked_quotes=ranked,
            best_quote=best_quote_obj,
            transporter_name=transporter_name,
        )

        return {
            "load_id": load_id,
            "status": load.status.value,
            "quote_id": quote_id,
            "ranked_quotes": ranked,
            "broker_action_required": {
                "action_id": action_item.id,
                "priority": action_item.priority.value,
                "title": action_item.title,
                "options": action_item.options,
            },
        }

    def approve_and_book_transporter(
        self,
        action_id: str,
        choice: str,
        driver_name: str = "Ramesh Kumar",
        driver_phone: str = "+919876543210",
        vehicle_number: str = "KA04AB1234",
    ) -> Dict:
        """
        Executes broker's approval, locks rate, and creates the Booked Trip record.
        """
        # Resolve action in queue
        action = self.action_queue.resolve_action(action_id, selected_option=choice)
        load_id = action.load_id
        load = self.memory.get_load(load_id)

        if not load:
            raise KeyError(f"Load '{load_id}' not found.")

        # Invariant check: Advance FSM from PENDING_BROKER_APPROVAL -> BOOKED
        load.status = LoadStateMachine.transition(load.status, LoadStatus.BOOKED)
        self.memory.save_load(load)

        # Calculate financial split
        transporter_cost = action.data_payload["transporter_cost"]
        customer_rate = action.data_payload["customer_rate"]
        gross_margin = action.data_payload["gross_margin"]
        margin_pct = action.data_payload["margin_pct"]

        split = FinancialGuardrail.calculate_payment_split(agreed_transporter_rate=transporter_cost)

        # Compliance mock verification
        compliance = VehicleCompliance(
            vehicle_number=vehicle_number,
            is_vahan_verified=True,
            rc_status="ACTIVE",
            fitness_valid=True,
            national_permit_valid=True,
            insurance_valid=True,
            registered_gvw_kg=18000,
        )

        trip_id = f"TRIP_{uuid.uuid4().hex[:6].upper()}"
        trip = Trip(
            id=trip_id,
            load_id=load_id,
            transporter_id=action.data_payload["transporter_id"],
            agreed_transporter_rate=transporter_cost,
            customer_rate=customer_rate,
            gross_margin=gross_margin,
            margin_percentage=margin_pct,
            advance_payable=split["advance_payable"],
            balance_payable=split["balance_payable"],
            driver_name=driver_name,
            driver_phone=driver_phone,
            vehicle_number=vehicle_number,
            compliance=compliance,
            status=LoadStatus.BOOKED,
        )
        self.memory.save_trip(trip)

        # Confirmation slip message for WhatsApp
        booking_slip = (
            f"✅ BOOKING CONFIRMED!\n"
            f"Trip ID: {trip.id}\n"
            f"Route: {load.origin_city} ➔ {load.destination_city}\n"
            f"Truck: {vehicle_number} (Driver: {driver_name} - {driver_phone})\n"
            f"Agreed Freight: ₹{trip.agreed_transporter_rate:,.2f}\n"
            f"Advance Payable (70%): ₹{trip.advance_payable:,.2f} on loading completion.\n"
            f"Balance: ₹{trip.balance_payable:,.2f} upon verified POD submission."
        )

        return {
            "trip_id": trip_id,
            "load_id": load_id,
            "status": load.status.value,
            "financial_summary": {
                "customer_rate": customer_rate,
                "transporter_rate": transporter_cost,
                "gross_margin": gross_margin,
                "advance_on_loading": trip.advance_payable,
                "balance_on_pod": trip.balance_payable,
            },
            "whatsapp_booking_slip": booking_slip,
        }
