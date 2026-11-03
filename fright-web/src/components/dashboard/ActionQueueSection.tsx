"use client";

import React, { useState } from "react";

interface ActionQueueSectionProps {
  onOpenIngest?: () => void;
}

export const ActionQueueSection: React.FC<ActionQueueSectionProps> = ({ onOpenIngest }) => {
  const [activeFilter, setActiveFilter] = useState<"all" | "margin" | "instant" | "incomplete">("all");
  const [approvedCards, setApprovedCards] = useState<Record<string, boolean>>({});
  const [counterOpen, setCounterOpen] = useState(false);
  const [counterAmount, setCounterAmount] = useState("₹46,000");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleApprove = (id: string) => {
    setApprovedCards((prev) => ({ ...prev, [id]: true }));
    showToast(`Trip #${id} booked with carrier! Driver & VAHAN lock engaged.`);
  };

  const handleUndo = (id: string) => {
    setApprovedCards((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
    showToast(`Trip #${id} booking cancelled. Restored to pending queue.`);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Toast Notification Container */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#18181b] text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-neutral-700 animate-slideUp font-sans text-xs">
          <span className="material-symbols-outlined text-[#047857] text-lg">check_circle</span>
          <span className="font-medium">{toastMessage}</span>
          <button
            type="button"
            onClick={() => setToastMessage(null)}
            className="text-neutral-400 hover:text-white ml-2 text-xs font-mono"
          >
            ✕
          </button>
        </div>
      )}

      {/* Queue Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white border border-[#e7e5e4] px-4 py-3 rounded-xl shadow-2xs">
        <div className="flex items-center gap-2.5">
          <h2 className="font-headline-md text-base sm:text-lg text-[#18181b] font-bold tracking-tight">
            AI Action Queue
          </h2>
          <span className="px-2.5 py-0.5 rounded-full bg-[#fef2f0] text-[#be3420] border border-[#fecaca] font-mono text-xs font-bold">
            3 Pending Decisions
          </span>
          <button
            onClick={onOpenIngest}
            type="button"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-[#f7f6f4] text-[#18181b] border border-[#d6d3cd] hover:border-[#a8a29e] font-mono text-xs font-semibold shadow-2xs transition-all active:scale-95 ml-1"
          >
            <span className="material-symbols-outlined text-sm text-[#be3420]">add_box</span>
            <span>+ Ingest Indent</span>
          </button>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-[#f5f4f0] rounded-lg text-[#52525b] font-mono text-xs">
            <span className="material-symbols-outlined text-sm text-[#be3420]">pause_circle</span>
            <span>Auto-pilot: Paused for HITL Review</span>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1 bg-[#eae7e1]/80 p-0.5 rounded-lg border border-[#dfdbd5] font-mono text-xs overflow-x-auto">
            <button
              onClick={() => setActiveFilter("all")}
              type="button"
              className={`px-3 py-1 rounded transition-colors ${
                activeFilter === "all"
                  ? "bg-white text-[#18181b] font-bold shadow-xs border border-black/[0.08]"
                  : "text-[#71717a] hover:text-[#18181b] border border-transparent"
              }`}
            >
              All (3)
            </button>
            <button
              onClick={() => setActiveFilter("margin")}
              type="button"
              className={`px-3 py-1 rounded transition-colors ${
                activeFilter === "margin"
                  ? "bg-white text-[#18181b] font-bold shadow-xs border border-black/[0.08]"
                  : "text-[#71717a] hover:text-[#18181b] border border-transparent"
              }`}
            >
              Margin Alert (1)
            </button>
            <button
              onClick={() => setActiveFilter("instant")}
              type="button"
              className={`px-3 py-1 rounded transition-colors ${
                activeFilter === "instant"
                  ? "bg-white text-[#18181b] font-bold shadow-xs border border-black/[0.08]"
                  : "text-[#71717a] hover:text-[#18181b] border border-transparent"
              }`}
            >
              Instant Book (1)
            </button>
            <button
              onClick={() => setActiveFilter("incomplete")}
              type="button"
              className={`px-3 py-1 rounded transition-colors ${
                activeFilter === "incomplete"
                  ? "bg-white text-[#18181b] font-bold shadow-xs border border-black/[0.08]"
                  : "text-[#71717a] hover:text-[#18181b] border border-transparent"
              }`}
            >
              Incomplete (1)
            </button>
          </div>
        </div>
      </div>

      {/* HITL CARD 1: URGENT Margin Floor Alert */}
      {(activeFilter === "all" || activeFilter === "margin") && (
        <article className="bg-white border border-[#be3420]/30 rounded-xl p-5 shadow-xs flex flex-col gap-4 bg-gradient-to-r from-[#fef2f0]/30 via-white to-white transition-all">
          {/* Card Top Row: Route & Urgency */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#f5f4f0]">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#fef2f0] text-[#be3420] border border-[#fecaca] rounded-full font-mono text-xs font-bold uppercase tracking-wider">
                <span className="h-1.5 w-1.5 rounded-full bg-[#be3420] animate-ping"></span>
                Margin Floor Breach
              </span>
              <span className="font-mono text-sm text-[#18181b] font-bold">#BLR-BHW-1042</span>
              <span className="text-[#71717a]">•</span>
              <span className="font-sans text-xs text-[#52525b] font-semibold">
                Bengaluru (Peenya) ➔ Bhiwandi (Mumbai Hub)
              </span>
              <span className="text-[#d6d3cd]">•</span>
              <span className="font-mono text-xs text-[#71717a]">980 km via NH 48</span>
            </div>

            <div className="flex items-center gap-1.5 text-[#be3420] font-mono text-xs font-bold bg-[#fef2f0] px-2.5 py-1 rounded-lg border border-[#fecaca]">
              <span className="material-symbols-outlined text-sm animate-pulse">timer</span>
              <span>SLA: 07:44 remaining</span>
            </div>
          </div>

          {/* Load Equipment Specifications Strip */}
          <div className="flex items-center justify-between flex-wrap gap-2 text-xs font-mono text-[#52525b]">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-[#f5f4f0] text-[#18181b] font-medium border border-[#e7e5e4]">
                21 MT Industrial Steel Coils
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#f5f4f0] text-[#18181b] font-medium border border-[#e7e5e4]">
                40ft Multi-Axle Trailer
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#ecfdf5] text-[#047857] font-semibold border border-[#a7f3d0]">
                FASTag Telemetry Active
              </span>
            </div>
            <span className="text-[#71717a]">Carrier: Ghatge Patil Transports (MH-12)</span>
          </div>

          {/* FINANCIAL RECONCILIATION COMMAND BAR (Clear Hero Numbers) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-4 bg-[#faf9f7] rounded-xl border border-[#e7e5e4]">
            {/* 1. Shipper Ceiling */}
            <div className="flex flex-col justify-between">
              <span className="font-mono text-xs uppercase tracking-wider text-[#71717a] font-semibold">
                Shipper Target Max
              </span>
              <div className="mt-1">
                <span className="font-mono text-2xl font-bold text-[#18181b]">₹50,000</span>
                <span className="block font-mono text-xs text-[#71717a] mt-0.5">₹2,380 / MT ceiling</span>
              </div>
            </div>

            {/* 2. Best Carrier Quote */}
            <div className="flex flex-col justify-between sm:border-l sm:border-[#e7e5e4] sm:pl-4">
              <span className="font-mono text-xs uppercase tracking-wider text-[#71717a] font-semibold">
                Best Carrier Quote
              </span>
              <div className="mt-1">
                <span className="font-mono text-2xl font-bold text-[#18181b]">₹48,500</span>
                <span className="block font-mono text-xs text-[#71717a] mt-0.5">Spot market rate</span>
              </div>
            </div>

            {/* 3. HERO NUMBER: Current Projected Margin (The Problem) */}
            <div className="flex flex-col justify-between lg:border-l lg:border-[#e7e5e4] lg:pl-4">
              <span className="font-mono text-xs uppercase tracking-wider text-[#be3420] font-bold">
                Projected Net Margin
              </span>
              <div className="mt-1">
                <span className="font-mono text-2xl font-bold text-[#be3420]">
                  ₹1,500 <span className="text-base font-semibold">(3.0%)</span>
                </span>
                <span className="block font-mono text-xs text-[#be3420] font-semibold mt-0.5">
                  ⚠️ ₹1,000 below 8.0% floor
                </span>
              </div>
            </div>

            {/* 4. HERO NUMBER: Recommended Counter (The Solution) */}
            <div className="flex flex-col justify-between lg:border-l lg:border-[#e7e5e4] lg:pl-4">
              <span className="font-mono text-xs uppercase tracking-wider text-[#047857] font-bold">
                AI Optimal Counter
              </span>
              <div className="mt-1">
                <span className="font-mono text-2xl font-bold text-[#047857]">
                  ₹46,000 <span className="text-base font-semibold">(8.0%)</span>
                </span>
                <span className="block font-mono text-xs text-[#047857] font-semibold mt-0.5">
                  81% carrier acceptance
                </span>
              </div>
            </div>
          </div>

          {/* AI Dispatch Synthesis Narrative */}
          <div className="flex items-start gap-3 p-3.5 bg-[#fef2f0]/60 rounded-xl text-[#18181b] font-sans text-xs border border-[#fecaca] leading-relaxed">
            <span className="material-symbols-outlined text-lg flex-shrink-0 text-[#be3420] mt-0.5">
              psychology
            </span>
            <div>
              <strong className="font-semibold text-[#be3420]">Negotiation Synthesis: </strong>
              Ghatge Patil quoted ₹48,500 citing diesel surge in Kolhapur-Pune stretch. Autonomous pricing model indicates countering at{" "}
              <strong className="text-[#047857]">₹46,000</strong> recovers your full 8.0% margin floor (₹4,000 net) with an 81% win probability within 12 minutes.
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={() => setCounterOpen(!counterOpen)}
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white hover:bg-[#fef2f0] text-[#be3420] border border-[#fecaca] hover:border-[#be3420]/40 font-mono text-xs font-bold shadow-2xs transition-all active:scale-95"
              >
                <span className="material-symbols-outlined text-base text-[#be3420]">forum</span>
                <span>Counter Transporter @ {counterAmount}</span>
              </button>

              <button
                type="button"
                onClick={() => showToast("Rate hike request draft sent to shipper account manager (+₹2,000).")}
                className="flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-white hover:bg-[#f7f6f4] border border-[#d6d3cd] text-[#52525b] hover:text-[#18181b] font-mono text-xs font-medium transition-all"
              >
                <span className="material-symbols-outlined text-base text-[#71717a]">request_quote</span>
                <span>Request Shipper Hike (+₹2,000)</span>
              </button>

              <button
                type="button"
                onClick={() => showToast("Manual override accepted at ₹1,500 margin. Compliance logged.")}
                className="px-3 py-2 text-[#71717a] hover:text-[#18181b] font-mono text-xs transition-colors"
              >
                Manual Override
              </button>
            </div>

            <button
              type="button"
              onClick={() => showToast("Opening quote comparison matrix (4 verified bids).")}
              className="flex items-center gap-1 text-[#be3420] hover:underline font-mono text-xs font-semibold ml-auto sm:ml-0"
            >
              <span>View All 4 Carrier Quotes</span>
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </button>
          </div>

          {/* Interactive Counter Offer Drawer */}
          {counterOpen && (
            <div className="p-3.5 bg-[#fef2f0] border border-[#be3420]/30 rounded-xl flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 animate-fadeIn">
              <span className="font-mono text-xs text-[#52525b] font-semibold">
                Set WhatsApp Counter Offer Amount:
              </span>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={counterAmount}
                  onChange={(e) => setCounterAmount(e.target.value)}
                  className="bg-white border border-[#d6d3cd] px-3 py-1.5 rounded-lg text-[#18181b] font-mono text-xs font-bold w-32 focus:outline-none focus:border-[#be3420]"
                />
                <button
                  type="button"
                  onClick={() => {
                    showToast(`Counter offer of ${counterAmount} dispatched to Ghatge Patil via WhatsApp!`);
                    setCounterOpen(false);
                  }}
                  className="px-4 py-1.5 bg-white hover:bg-[#f7f6f4] text-[#18181b] border border-[#d6d3cd] hover:border-[#18181b] font-mono text-xs font-bold rounded-lg shadow-2xs transition-all"
                >
                  Send RFQ Counter
                </button>
              </div>
            </div>
          )}
        </article>
      )}

      {/* HITL CARD 2: Fast-Track 1-Click Booking */}
      {(activeFilter === "all" || activeFilter === "instant") && (
        <article className="bg-white border border-[#a7f3d0] rounded-xl p-5 shadow-xs flex flex-col gap-4 bg-gradient-to-r from-[#ecfdf5]/30 via-white to-white transition-all">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#f5f4f0]">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#ecfdf5] text-[#047857] border border-[#a7f3d0] rounded-full font-mono text-xs font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-xs">verified</span>
                1-Click Fast-Track Ready
              </span>
              <span className="font-mono text-sm text-[#18181b] font-bold">#BLR-HYD-1039</span>
              <span className="text-[#71717a]">•</span>
              <span className="font-sans text-xs text-[#52525b] font-semibold">
                Peenya (Bengaluru) ➔ Cherlapally (Hyderabad Pharma SEZ)
              </span>
              <span className="text-[#d6d3cd]">•</span>
              <span className="font-mono text-xs text-[#71717a]">575 km via NH 44</span>
            </div>

            <span className="font-mono text-xs font-bold text-[#047857] bg-[#ecfdf5] px-2.5 py-1 rounded-lg border border-[#a7f3d0]">
              Optimal Margin (+15.5%)
            </span>
          </div>

          {/* Load Equipment Specifications */}
          <div className="flex items-center justify-between flex-wrap gap-2 text-xs font-mono text-[#52525b]">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-[#f5f4f0] text-[#18181b] font-medium border border-[#e7e5e4]">
                14 MT Pharma Formulations
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#f5f4f0] text-[#18181b] font-medium border border-[#e7e5e4]">
                32ft Closed Container
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#ecfdf5] text-[#047857] font-semibold border border-[#a7f3d0]">
                Vehicle KA-04-E-8821 (12 km away)
              </span>
            </div>
            <span className="text-[#71717a]">Carrier: Sri Balaji Roadlines (4.9★ rating)</span>
          </div>

          {/* FINANCIAL RECONCILIATION COMMAND BAR */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-4 bg-[#faf9f7] rounded-xl border border-[#e7e5e4]">
            {/* 1. Shipper Pre-Approved PO */}
            <div className="flex flex-col justify-between">
              <span className="font-mono text-xs uppercase tracking-wider text-[#71717a] font-semibold">
                Shipper Contract PO
              </span>
              <div className="mt-1">
                <span className="font-mono text-2xl font-bold text-[#18181b]">₹45,000</span>
                <span className="block font-mono text-xs text-[#71717a] mt-0.5">Pre-authorized rate</span>
              </div>
            </div>

            {/* 2. Transporter Quote */}
            <div className="flex flex-col justify-between sm:border-l sm:border-[#e7e5e4] sm:pl-4">
              <span className="font-mono text-xs uppercase tracking-wider text-[#71717a] font-semibold">
                Carrier Binding Bid
              </span>
              <div className="mt-1">
                <span className="font-mono text-2xl font-bold text-[#18181b]">₹38,000</span>
                <span className="block font-mono text-xs text-[#047857] font-semibold mt-0.5">Sri Balaji Roadlines</span>
              </div>
            </div>

            {/* 3. HERO NET MARGIN (LOCKED PROFIT) */}
            <div className="flex flex-col justify-between lg:border-l lg:border-[#e7e5e4] lg:pl-4 col-span-1 sm:col-span-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[#047857] font-bold">
                Locked Broker Margin
              </span>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="font-mono text-2xl font-bold text-[#047857]">
                  ₹7,000 <span className="text-base font-semibold">(15.5%)</span>
                </span>
                <span className="font-mono text-xs text-[#047857] font-semibold">
                  +₹2,000 above standard margin target
                </span>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={() => handleApprove("BLR-HYD-1039")}
                disabled={approvedCards["BLR-HYD-1039"]}
                className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-mono text-xs font-bold shadow-2xs transition-all active:scale-95 ${
                  approvedCards["BLR-HYD-1039"]
                    ? "bg-[#ecfdf5] text-[#047857] border border-[#a7f3d0] cursor-default"
                    : "bg-white hover:bg-[#ecfdf5] text-[#047857] border border-[#a7f3d0] hover:border-[#047857]/50"
                }`}
              >
                <span className="material-symbols-outlined text-base text-[#047857]">task_alt</span>
                <span>
                  {approvedCards["BLR-HYD-1039"] ? "Trip Booked (FSM: Locked)" : "Approve & Book Now (1-Click)"}
                </span>
              </button>

              {approvedCards["BLR-HYD-1039"] && (
                <button
                  type="button"
                  onClick={() => handleUndo("BLR-HYD-1039")}
                  className="px-3 py-1.5 text-[#be3420] hover:underline font-mono text-xs font-semibold"
                >
                  Undo Booking
                </button>
              )}

              <button
                type="button"
                onClick={() => showToast("Opening 3 competitive bids for #BLR-HYD-1039.")}
                className="flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-white hover:bg-[#f7f6f4] border border-[#d6d3cd] text-[#52525b] hover:text-[#18181b] font-mono text-xs font-medium transition-all"
              >
                <span>View All 3 Bids</span>
              </button>

              <button
                type="button"
                onClick={() => showToast("Trip put on 15m hold. SLA paused.")}
                className="px-3 py-2 text-[#71717a] hover:text-[#18181b] font-mono text-xs transition-colors"
              >
                Hold 15m
              </button>
            </div>

            <span className="font-mono text-xs text-[#52525b]">
              Driver: Suresh Y. (+91 97412 XXXXX)
            </span>
          </div>
        </article>
      )}

      {/* HITL CARD 3: Incomplete Indent Inquiry */}
      {(activeFilter === "all" || activeFilter === "incomplete") && (
        <article className="bg-white border border-[#fde68a] rounded-xl p-5 shadow-xs flex flex-col gap-4 bg-gradient-to-r from-[#fef3c7]/20 via-white to-white transition-all">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#f5f4f0]">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#fef3c7] text-[#b45309] border border-[#fde68a] rounded-full font-mono text-xs font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-xs">help_outline</span>
                Incomplete Load Inquiry
              </span>
              <span className="font-mono text-sm text-[#18181b] font-bold">Shipper: Micro Labs Ltd</span>
              <span className="text-[#71717a]">•</span>
              <span className="font-sans text-xs text-[#52525b] font-semibold">
                Bommasandra (BLR) ➔ Changodar (Ahmedabad)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-mono text-sm font-bold text-[#18181b]">₹42,000</span>
              <span className="font-mono text-xs text-[#71717a]">Est. Value</span>
            </div>
          </div>

          {/* Missing Specifications Warning Strip */}
          <div className="flex items-center justify-between flex-wrap gap-2 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-[#fef2f0] text-[#be3420] font-semibold border border-[#fecaca]">
                ⚠️ Missing: Total Weight (MT)
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#fef2f0] text-[#be3420] font-semibold border border-[#fecaca]">
                ⚠️ Missing: Truck Category (Closed / Tarpaulin)
              </span>
            </div>
            <span className="text-[#52525b]">Placement: Tomorrow 06:00 AM IST</span>
          </div>

          {/* AI Pre-composed Clarification Draft */}
          <div className="p-4 bg-[#faf9f7] rounded-xl border border-[#e7e5e4] flex flex-col gap-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#71717a] uppercase font-semibold">
                AI PRE-GENERATED CLARIFICATION (READY TO DISPATCH)
              </span>
              <span className="text-[#047857] font-semibold">Hinglish / English Dual Parse</span>
            </div>
            <p className="text-[#18181b] italic bg-white p-3 rounded-lg border border-[#e7e5e4] font-sans text-xs leading-relaxed">
              &quot;Namaste Micro Labs logistics team, please confirm the total MT weight and whether container closed body is mandatory for tomorrow&apos;s Ahmedabad indent? Fast indents waiting.&quot;
            </p>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={() => showToast("WhatsApp clarification draft dispatched to Micro Labs logistics team!")}
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white hover:bg-[#f7f6f4] text-[#18181b] border border-[#d6d3cd] hover:border-[#18181b] font-mono text-xs font-bold shadow-2xs transition-all active:scale-95"
              >
                <span className="material-symbols-outlined text-base text-[#be3420]">send</span>
                <span>Send WhatsApp Clarification Draft</span>
              </button>

              <button
                type="button"
                onClick={() => showToast("Opening custom draft editor.")}
                className="px-3.5 py-2 rounded-lg bg-white hover:bg-[#f7f6f4] border border-[#d6d3cd] text-[#52525b] hover:text-[#18181b] font-mono text-xs font-medium transition-all"
              >
                Edit Message Manually
              </button>
            </div>

            <button
              type="button"
              onClick={() => showToast("Inquiry dismissed from active queue.")}
              className="text-[#71717a] hover:text-[#be3420] font-mono text-xs transition-colors"
            >
              Dismiss Inquiry
            </button>
          </div>
        </article>
      )}
    </div>
  );
};
