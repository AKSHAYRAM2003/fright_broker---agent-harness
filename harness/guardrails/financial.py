"""
Deterministic Financial Guardrails Engine.
Protects the freight broker against margin leakage, negative profits, and math errors.
"""

from typing import Dict, Optional


class FinancialGuardrail:
    """
    Evaluates pricing quotes, gross margins, and payment milestones.
    """

    DEFAULT_MIN_MARGIN_INR: float = 2500.0  # Minimum absolute profit per load
    DEFAULT_MIN_MARGIN_PCT: float = 5.0     # Minimum margin percentage
    DEFAULT_ADVANCE_PCT: float = 70.0       # 70% advance on loading

    @classmethod
    def evaluate_margin(
        cls,
        customer_rate: float,
        transporter_quote: float,
        estimated_accessorials: float = 0.0,
        min_margin_inr: Optional[float] = None,
        min_margin_pct: Optional[float] = None,
    ) -> Dict:
        """
        Calculates gross margin and evaluates against broker safety floor.
        """
        floor_inr = min_margin_inr if min_margin_inr is not None else cls.DEFAULT_MIN_MARGIN_INR
        floor_pct = min_margin_pct if min_margin_pct is not None else cls.DEFAULT_MIN_MARGIN_PCT

        total_transporter_cost = transporter_quote + estimated_accessorials
        gross_margin = customer_rate - total_transporter_cost
        margin_pct = (gross_margin / customer_rate * 100.0) if customer_rate > 0 else 0.0

        is_safe = (gross_margin >= floor_inr) and (margin_pct >= floor_pct)

        reasons = []
        if gross_margin < 0:
            reasons.append(f"Negative margin! Broker would lose ₹{abs(gross_margin):,.2f}.")
        elif gross_margin < floor_inr:
            reasons.append(f"Gross margin ₹{gross_margin:,.2f} is below minimum floor of ₹{floor_inr:,.2f}.")
        if margin_pct < floor_pct:
            reasons.append(f"Margin {margin_pct:.1f}% is below minimum threshold of {floor_pct:.1f}%.")

        return {
            "customer_rate": customer_rate,
            "transporter_cost": total_transporter_cost,
            "gross_margin": round(gross_margin, 2),
            "margin_percentage": round(margin_pct, 2),
            "is_safe": is_safe,
            "requires_hitl_approval": True,  # Financial commitments always require human confirmation
            "rejection_reasons": reasons,
        }

    @classmethod
    def calculate_payment_split(
        cls,
        agreed_transporter_rate: float,
        advance_percentage: Optional[float] = None,
        mamool_deduction: float = 0.0,
        tds_percentage: float = 1.0,
    ) -> Dict:
        """
        Calculates driver advance payable on loading and final balance payable upon POD receipt.
        """
        adv_pct = advance_percentage if advance_percentage is not None else cls.DEFAULT_ADVANCE_PCT
        advance_amount = round(agreed_transporter_rate * (adv_pct / 100.0), 2)
        tds_amount = round(agreed_transporter_rate * (tds_percentage / 100.0), 2)
        balance_amount = round(
            agreed_transporter_rate - advance_amount - mamool_deduction - tds_amount, 2
        )

        return {
            "agreed_rate": agreed_transporter_rate,
            "advance_payable": advance_amount,
            "advance_percentage": adv_pct,
            "tds_deduction": tds_amount,
            "mamool_deduction": mamool_deduction,
            "balance_payable": balance_amount,
        }
