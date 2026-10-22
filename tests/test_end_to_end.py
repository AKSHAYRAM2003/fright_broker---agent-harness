"""
End-to-End Integration Test for Freight Broker AI Operations Harness.
Simulates real-world workflows from inbound WhatsApp messages to quote comparison,
guardrail enforcement, HITL broker approval, and trip booking.
"""

import os
import sys

# Ensure root directory is in sys.path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from harness.orchestrator import FreightOperationsOrchestrator
from harness.core.schemas import ActionPriority, LoadStatus


def run_e2e_simulation():
    print("=" * 85)
    print(" 🚀 STARTING END-TO-END LIFE-OF-A-LOAD SIMULATION (PHASE 4)")
    print("=" * 85)

    orchestrator = FreightOperationsOrchestrator(tenant_id="test_broker_01")

    # -------------------------------------------------------------------------
    # SCENARIO 1: Incomplete Load Inquiry (Missing Weight & Truck Class)
    # -------------------------------------------------------------------------
    print("\n[STEP 1] Testing Incomplete Load Inquiry Handling...")
    inquiry_incomplete = "Need truck from Whitefield to Hyderabad tomorrow evening for machinery parts."
    res_incomplete = orchestrator.handle_shipper_inquiry(
        shipper_name="Bosch Auto Parts",
        shipper_phone="+919845011111",
        raw_message=inquiry_incomplete,
    )
    print(f"  Load ID: {res_incomplete['load_id']} | Status: {res_incomplete['status']}")
    print(f"  Missing Fields Detected: {res_incomplete['missing_fields']}")
    print(f"  AI Clarification Prompt: \"{res_incomplete['clarification_prompt']}\"")
    assert res_incomplete["status"] == LoadStatus.INQUIRY_INCOMPLETE.value
    assert "weight_tonnes" in res_incomplete["missing_fields"]
    print("  ✅ Step 1 Passed: Incomplete load halted safely in queue.")

    # -------------------------------------------------------------------------
    # SCENARIO 2: Complete Load Inquiry in Hinglish
    # -------------------------------------------------------------------------
    print("\n[STEP 2] Ingesting Complete Hinglish Load Inquiry...")
    inquiry_complete = "Need 32ft MXL Container from Peenya, Bengaluru to Bhiwandi, Maharashtra tomorrow 2 PM. Cargo: 14 MT Pharmaceutical goods. Target rate is 52k."
    res_load = orchestrator.handle_shipper_inquiry(
        shipper_name="Micro Labs Pharma",
        shipper_phone="+919845099999",
        raw_message=inquiry_complete,
    )
    load_id = res_load["load_id"]
    print(f"  Created Load: {load_id} | Status: {res_load['status']}")
    print(f"  Route: {res_load['extracted_specs']['origin']} ➔ {res_load['extracted_specs']['destination']}")
    print(f"  Truck: {res_load['extracted_specs']['vehicle']} | Weight: {res_load['extracted_specs']['weight_tonnes']}T | Target Rate: ₹{res_load['extracted_specs']['target_rate_inr']:,.2f}")
    print(f"  Matched Transporters for Lane: {res_load['matched_transporters_count']}")
    assert res_load["status"] == LoadStatus.RFQ_DISPATCHED.value
    assert len(res_load["dispatched_rfqs"]) > 0

    print("\n  Sample Dispatched WhatsApp RFQ:")
    sample_rfq = res_load["dispatched_rfqs"][0]
    print("  -------------------------------------------------------------")
    print("  " + sample_rfq["whatsapp_message"].replace("\n", "\n  "))
    print("  -------------------------------------------------------------")
    print("  ✅ Step 2 Passed: RFQ dispatched to matched candidate carriers.")

    # -------------------------------------------------------------------------
    # SCENARIO 3: Incoming Transporter Quotes on WhatsApp
    # -------------------------------------------------------------------------
    print("\n[STEP 3] Transporters Replying with Quotes on WhatsApp...")

    # Quote 1 from Sharma Road Carriers (TR_01)
    q1_msg = "Sharma ji BLR-BHW 32ft MXL ke liye 46k final ho payega. Loading extra nahi hai, tolls included."
    q1_res = orchestrator.handle_transporter_quote(
        load_id=load_id,
        transporter_id="TR_01",
        raw_quote_message=q1_msg,
    )
    print(f"  Transporter 1 (Sharma Road Carriers) quoted: ₹46,000 | Status: {q1_res['status']}")

    # Quote 2 from Karnataka-Maharashtra Freightways (TR_03)
    q2_msg = "Bhaiya 32ft MXL 44.5k ho jayega, 500 mamool loading alag se lagega."
    q2_res = orchestrator.handle_transporter_quote(
        load_id=load_id,
        transporter_id="TR_03",
        raw_quote_message=q2_msg,
    )
    print(f"  Transporter 2 (Karnataka-Maharashtra) quoted: ₹44,500 + ₹500 mamool = ₹45,000 | Status: {q2_res['status']}")

    # Check Quote Rankings
    ranked_quotes = q2_res["ranked_quotes"]
    print("\n  Quote Comparison Table (Ranked by Profit Margin):")
    for idx, rk in enumerate(ranked_quotes, 1):
        m_eval = rk["margin_eval"]
        print(f"    {idx}. Transporter {rk['transporter_id']}: ₹{rk['total_cost']:,.2f} | Broker Margin: ₹{m_eval['gross_margin']:,.2f} ({m_eval['margin_percentage']}%) | Safe: {m_eval['is_safe']}")

    assert ranked_quotes[0]["total_cost"] == 45000.0
    assert ranked_quotes[0]["margin_eval"]["gross_margin"] == 7000.0  # 52,000 - 45,000
    print("  ✅ Step 3 Passed: Multi-quote ranking and margin calculations verified.")

    # -------------------------------------------------------------------------
    # SCENARIO 4: Broker Action Queue (HITL Review)
    # -------------------------------------------------------------------------
    print("\n[STEP 4] Inspecting Broker Action Queue...")
    pending_actions = orchestrator.action_queue.get_pending_actions()
    quote_action = next(a for a in pending_actions if a.load_id == load_id)
    print(f"  Action Card: [{quote_action.priority.value}] {quote_action.title}")
    print(f"  Description: {quote_action.description}")
    print(f"  Options Available: {quote_action.options}")
    assert quote_action.priority == ActionPriority.NORMAL  # Safe margin (₹7,000 > ₹2,500)
    print("  ✅ Step 4 Passed: Safe quote surfaced for 1-click confirmation.")

    # -------------------------------------------------------------------------
    # SCENARIO 5: Broker Approves Booking & Generates Trip Slip
    # -------------------------------------------------------------------------
    print("\n[STEP 5] Broker Clicks [Approve & Book]...")
    booking_res = orchestrator.approve_and_book_transporter(
        action_id=quote_action.id,
        choice="Approve & Book",
        driver_name="Suresh Yadav",
        driver_phone="+919845077777",
        vehicle_number="KA04MF5678",
    )
    print(f"  Trip Booked! Trip ID: {booking_res['trip_id']} | Status: {booking_res['status']}")
    print(f"  Financial Breakdown:")
    print(f"    • Customer Receivable: ₹{booking_res['financial_summary']['customer_rate']:,.2f}")
    print(f"    • Transporter Payable:  ₹{booking_res['financial_summary']['transporter_rate']:,.2f}")
    print(f"    • Broker Net Margin:    ₹{booking_res['financial_summary']['gross_margin']:,.2f}")
    print(f"    • 70% Advance on Loading: ₹{booking_res['financial_summary']['advance_on_loading']:,.2f}")
    print(f"    • Balance upon POD:       ₹{booking_res['financial_summary']['balance_on_pod']:,.2f}")

    print("\n  Generated WhatsApp Confirmation Slip:")
    print("  -------------------------------------------------------------")
    print("  " + booking_res["whatsapp_booking_slip"].replace("\n", "\n  "))
    print("  -------------------------------------------------------------")
    assert booking_res["status"] == LoadStatus.BOOKED.value
    assert booking_res["financial_summary"]["gross_margin"] == 7000.0
    print("  ✅ Step 5 Passed: Rate locked, trip registered, FSM transitioned to BOOKED.")

    # -------------------------------------------------------------------------
    # SCENARIO 6: Margin Floor Violation Guardrail Test
    # -------------------------------------------------------------------------
    print("\n[STEP 6] Testing Margin Floor Guardrail Violation...")
    # Customer pays 40k, but transporter quotes 39k (Margin ₹1,000 < ₹2,500 floor)
    inquiry_low_budget = "Need 10-Wheeler Taurus from Bellary to Chennai. 18 tons steel coils. Budget 40k."
    res_low = orchestrator.handle_shipper_inquiry(
        shipper_name="Jindal Steel",
        shipper_phone="+919888800000",
        raw_message=inquiry_low_budget,
    )
    low_load_id = res_low["load_id"]

    q_low_res = orchestrator.handle_transporter_quote(
        load_id=low_load_id,
        transporter_id="TR_02",
        raw_quote_message="Bellary to Chennai 10 wheeler 39,000 final.",
    )

    low_action = orchestrator.action_queue.actions[q_low_res["broker_action_required"]["action_id"]]
    print(f"  Action Card: [{low_action.priority.value}] {low_action.title}")
    print(f"  Description: {low_action.description}")
    print(f"  Guardrail Options: {low_action.options}")
    assert low_action.priority == ActionPriority.URGENT
    assert "Counter Transporter" in low_action.options[0]
    print("  ✅ Step 6 Passed: Margin floor violation caught and flagged as URGENT.")

    print("\n" + "=" * 85)
    print(" 🎯 ALL END-TO-END SCENARIOS PASSED WITH ZERO ERRORS!")
    print("=" * 85)


if __name__ == "__main__":
    run_e2e_simulation()
