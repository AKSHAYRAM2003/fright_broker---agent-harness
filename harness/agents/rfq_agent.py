"""
Smart RFQ Sourcing & Quote Comparison Agent.
Coordinates carrier outreach, formats personalized WhatsApp messages, and ranks quotes.
"""

from typing import Dict, List, Optional
from ..core.schemas import Load, Transporter, Quote, VehicleCategory
from ..guardrails.financial import FinancialGuardrail


# User-friendly Indian vehicle label map
VEHICLE_DISPLAY_NAMES = {
    VehicleCategory.LCV_SMALL: "Tata Ace / Bolero Pickup (1.5-2.5T)",
    VehicleCategory.ICV: "14ft - 19ft (Eicher / ICV)",
    VehicleCategory.MCV_6W: "6-Wheeler Open Truck (9-10T)",
    VehicleCategory.HCV_10W_TAURUS: "10-Wheeler Taurus (16-18T)",
    VehicleCategory.HCV_MULTI_AXLE: "Multi-Axle Truck (21-28T)",
    VehicleCategory.CONTAINER_32_SXL: "32ft Single-Axle Container (7.5T)",
    VehicleCategory.CONTAINER_32_MXL: "32ft Multi-Axle Container (14-18T)",
    VehicleCategory.CONTAINER_32_HQ: "32ft High-Cube Container",
    VehicleCategory.CONTAINER_40_HQ: "40ft High-Cube Container",
}


class RFQAgent:
    """
    Handles carrier RFQ dispatching and quote comparison ranking.
    """

    @classmethod
    def generate_rfq_messages(cls, load: Load, candidates: List[Transporter]) -> List[Dict]:
        """
        Creates personalized WhatsApp RFQ messages for matched transporters.
        """
        vehicle_name = VEHICLE_DISPLAY_NAMES.get(load.vehicle_required, load.vehicle_required.value)
        pickup_str = load.target_pickup_date.strftime("%d %b %I:%M %p") if hasattr(load.target_pickup_date, "strftime") else str(load.target_pickup_date)

        dispatched_rfqs = []
        for t in candidates:
            # Generate respectful Indian transport vernacular message
            message_body = (
                f"Namaste {t.contact_name} Ji ({t.business_name}),\n"
                f"We have an urgent confirmed load available:\n\n"
                f"📍 Route: {load.origin_city} ➔ {load.destination_city}\n"
                f"🚛 Truck: {vehicle_name}\n"
                f"📦 Cargo: {load.material_type} ({load.weight_tonnes} Tonnes)\n"
                f"⏰ Loading: {pickup_str}\n\n"
                f"Please reply with your best freight rate and vehicle availability. (Tolls & loading terms please mention)."
            )

            dispatched_rfqs.append({
                "transporter_id": t.id,
                "transporter_name": t.business_name,
                "phone_number": t.phone_number,
                "whatsapp_message": message_body,
            })

        return dispatched_rfqs

    @classmethod
    def rank_quotes(cls, quotes: List[Quote], customer_rate: Optional[float] = None) -> List[Dict]:
        """
        Ranks quotes by net profit margin and reliability score.
        Enforces FinancialGuardrail check on every quote.
        """
        ranked = []

        for q in quotes:
            total_transporter_cost = q.quoted_amount + q.loading_unloading_charges
            margin_info = None

            if customer_rate:
                margin_info = FinancialGuardrail.evaluate_margin(
                    customer_rate=customer_rate,
                    transporter_quote=q.quoted_amount,
                    estimated_accessorials=q.loading_unloading_charges,
                )

            ranked.append({
                "quote_id": q.id,
                "transporter_id": q.transporter_id,
                "base_quoted_rate": q.quoted_amount,
                "loading_charges": q.loading_unloading_charges,
                "total_cost": total_transporter_cost,
                "includes_tolls": q.includes_tolls,
                "margin_eval": margin_info,
                "is_selected": q.is_selected,
                "created_at": q.created_at,
            })

        # Sort primarily by lowest total cost (highest margin for broker)
        ranked.sort(key=lambda x: x["total_cost"])
        return ranked
