"""
Human-in-the-Loop (HITL) Action Queue Manager.
Maintains prioritized, high-stakes decisions for the broker operations team.
"""

from datetime import datetime
from typing import Dict, List, Optional
from ..core.schemas import ActionItem, ActionPriority, Load, LoadStatus, Quote, Trip, VehicleCompliance
from ..core.state_machine import LoadStateMachine
from ..guardrails.financial import FinancialGuardrail


class ActionQueueManager:
    """
    Manages operational tasks requiring human confirmation before execution.
    """

    def __init__(self, tenant_id: str):
        self.tenant_id = tenant_id
        self.actions: Dict[str, ActionItem] = {}

    def get_pending_actions(self) -> List[ActionItem]:
        """Returns pending actions sorted by priority (URGENT first)."""
        pending = [a for a in self.actions.values() if a.status == "PENDING"]
        priority_order = {ActionPriority.URGENT: 0, ActionPriority.NORMAL: 1, ActionPriority.INFO: 2}
        return sorted(pending, key=lambda x: (priority_order[x.priority], x.created_at))

    def create_incomplete_load_action(self, load_id: str, missing_fields: List[str], clarification_prompt: str) -> ActionItem:
        """Surfaces an action when an inbound load inquiry is missing mandatory fields."""
        action_id = f"ACT_INCOMPLETE_{load_id}"
        item = ActionItem(
            id=action_id,
            tenant_id=self.tenant_id,
            load_id=load_id,
            priority=ActionPriority.NORMAL,
            title="⚠️ Incomplete Load Inquiry",
            description=f"Missing: {', '.join(missing_fields)}. Send 1-click clarification prompt to shipper?",
            proposed_action="SEND_CLARIFICATION_PROMPT",
            data_payload={
                "missing_fields": missing_fields,
                "draft_message": clarification_prompt,
            },
            options=["Send WhatsApp Clarification", "Edit Manually", "Dismiss"],
            status="PENDING",
        )
        self.actions[action_id] = item
        return item

    def create_quote_approval_action(
        self,
        load: Load,
        ranked_quotes: List[Dict],
        best_quote: Quote,
        transporter_name: str,
    ) -> ActionItem:
        """
        Creates an Action Card when quotes have been collected.
        Applies FinancialGuardrail to decide if it's routine or an URGENT margin violation.
        """
        action_id = f"ACT_QUOTE_{load.id}"
        margin_eval = FinancialGuardrail.evaluate_margin(
            customer_rate=load.shipper_target_rate or 0.0,
            transporter_quote=best_quote.quoted_amount,
            estimated_accessorials=best_quote.loading_unloading_charges,
        )

        customer_rate = load.shipper_target_rate or 0.0
        best_cost = best_quote.quoted_amount + best_quote.loading_unloading_charges
        gross_margin = margin_eval["gross_margin"]
        margin_pct = margin_eval["margin_percentage"]

        if margin_eval["is_safe"]:
            priority = ActionPriority.NORMAL
            title = f"🟢 Confirm Booking: {load.origin_city} ➔ {load.destination_city}"
            desc = (
                f"Best Quote: {transporter_name} @ ₹{best_cost:,.2f}.\n"
                f"Customer Rate: ₹{customer_rate:,.2f} | Net Margin: ₹{gross_margin:,.2f} ({margin_pct:.1f}%)."
            )
            options = ["Approve & Book", "Counter-Offer", "Reject"]
            proposed = "CONFIRM_BOOKING"
        else:
            priority = ActionPriority.URGENT
            title = f"🔴 Margin Alert: {load.origin_city} ➔ {load.destination_city}"
            reasons = "; ".join(margin_eval["rejection_reasons"])
            desc = (
                f"Margin Warning: {reasons}\n"
                f"Customer Rate: ₹{customer_rate:,.2f} vs Best Quote: ₹{best_cost:,.2f} (Margin: ₹{gross_margin:,.2f})."
            )
            suggested_counter = max(0.0, customer_rate - 3000.0)
            options = [
                f"Counter Transporter @ ₹{suggested_counter:,.2f}",
                "Request Rate Increase from Shipper",
                "Manual Override & Book",
            ]
            proposed = "COUNTER_OR_OVERRIDE"

        item = ActionItem(
            id=action_id,
            tenant_id=self.tenant_id,
            load_id=load.id,
            priority=priority,
            title=title,
            description=desc,
            proposed_action=proposed,
            data_payload={
                "load_id": load.id,
                "quote_id": best_quote.id,
                "transporter_id": best_quote.transporter_id,
                "customer_rate": customer_rate,
                "transporter_cost": best_cost,
                "gross_margin": gross_margin,
                "margin_pct": margin_pct,
                "is_safe": margin_eval["is_safe"],
                "ranked_quotes": ranked_quotes,
            },
            options=options,
            status="PENDING",
        )
        self.actions[action_id] = item
        return item

    def resolve_action(self, action_id: str, selected_option: str, user_id: str = "broker_admin") -> ActionItem:
        """
        Executes the human broker's choice and marks the action card as resolved.
        """
        if action_id not in self.actions:
            raise KeyError(f"Action '{action_id}' not found.")

        action = self.actions[action_id]
        action.status = "APPROVED" if "Approve" in selected_option or "Confirm" in selected_option else "RESOLVED"
        return action
