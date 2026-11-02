"use client";

import React, { useState } from "react";

export const ActionQueueSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "margin" | "instant" | "incomplete">("all");
  const [approvedCards, setApprovedCards] = useState<Record<string, boolean>>({});
  const [counterOpen, setCounterOpen] = useState(false);
  const [counterAmount, setCounterAmount] = useState("₹46,000");

  const handleApprove = (id: string) => {
    setApprovedCards((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="flex flex-col gap-3.5 sm:gap-4">
      {/* Queue Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 bg-surface-container-low border border-surface-container-high px-3.5 sm:px-4 py-2.5 rounded-xl">
        <div className="flex items-center gap-2.5">
          <div className="h-2 w-2 rounded-full bg-primary animate-ping"></div>
          <h2 className="font-headline-md text-base sm:text-lg text-on-surface font-semibold tracking-tight">
            AI Action Queue
          </h2>
          <span className="px-2 py-0.5 rounded bg-primary-container text-on-primary-container font-mono text-[11px] font-bold">
            3 Decisions Required
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-surface-container-high rounded text-on-surface-variant font-mono text-[11px]">
            <span className="material-symbols-outlined text-sm text-primary">pause_circle</span>
            <span>Auto-pilot: Paused for HITL</span>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-0.5 bg-surface-container-high p-0.5 rounded-lg font-mono text-[11px] overflow-x-auto">
            <button
              onClick={() => setActiveFilter("all")}
              type="button"
              className={`px-2.5 py-1 rounded transition-colors ${
                activeFilter === "all"
                  ? "bg-surface text-on-surface font-semibold shadow-xs"
                  : "text-outline hover:text-on-surface"
              }`}
            >
              All (3)
            </button>
            <button
              onClick={() => setActiveFilter("margin")}
              type="button"
              className={`px-2 py-1 rounded transition-colors ${
                activeFilter === "margin"
                  ? "bg-surface text-on-surface font-semibold shadow-xs"
                  : "text-outline hover:text-on-surface"
              }`}
            >
              Margin (1)
            </button>
            <button
              onClick={() => setActiveFilter("instant")}
              type="button"
              className={`px-2 py-1 rounded transition-colors ${
                activeFilter === "instant"
                  ? "bg-surface text-on-surface font-semibold shadow-xs"
                  : "text-outline hover:text-on-surface"
              }`}
            >
              Instant Book (1)
            </button>
            <button
              onClick={() => setActiveFilter("incomplete")}
              type="button"
              className={`px-2 py-1 rounded transition-colors ${
                activeFilter === "incomplete"
                  ? "bg-surface text-on-surface font-semibold shadow-xs"
                  : "text-outline hover:text-on-surface"
              }`}
            >
              Incomplete (1)
            </button>
          </div>
        </div>
      </div>

      {/* HITL CARD 1: URGENT Margin Floor Alert */}
      {(activeFilter === "all" || activeFilter === "margin") && (
        <article className="relative overflow-hidden bg-surface-container border border-primary/30 rounded-xl p-4 sm:p-5 shadow-xs flex flex-col gap-3.5 sm:gap-4 bg-gradient-to-r from-primary-container/20 via-surface-container to-surface-container transition-all">
          {/* Card Top Row */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-surface-container-high pb-2.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-error-container text-on-error-container border border-primary/20 rounded font-mono text-[10px] font-bold uppercase tracking-wider">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-ping"></span>
                Critical Margin Floor Alert
              </span>
              <span className="font-mono text-xs text-on-surface font-bold">#BLR-BHW-1042</span>
              <span className="px-1.5 py-0.5 rounded bg-surface-container-low text-on-surface-variant font-mono text-[10px]">
                GST Verified Indent
              </span>
            </div>
            <div className="flex items-center gap-1 text-primary font-mono text-[11px] font-bold">
              <span className="material-symbols-outlined text-sm animate-pulse">timer</span>
              <span>SLA: 07:44 remaining</span>
            </div>
          </div>

          {/* Corridor Route Block */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 bg-surface-container-low p-3 sm:p-3.5 rounded-lg border border-surface-container-high">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-outline">Origin Hub</span>
                <span className="font-headline-sm text-xs sm:text-sm text-on-surface font-semibold">
                  Bengaluru (Peenya Ind.)
                </span>
                <span className="font-mono text-[11px] text-on-surface-variant">KA Depot #04</span>
              </div>

              <div className="flex sm:flex-col items-center gap-1.5 sm:gap-0 px-1 sm:px-2">
                <span className="font-mono text-[11px] text-primary font-semibold tracking-tight">980 km</span>
                <div className="flex items-center gap-0.5 text-primary">
                  <span className="h-0.5 w-4 sm:w-6 bg-primary/40"></span>
                  <span className="material-symbols-outlined text-sm">local_shipping</span>
                  <span className="h-0.5 w-4 sm:w-6 bg-primary/40"></span>
                </div>
                <span className="font-mono text-[10px] text-outline">NH 48 Corridor</span>
              </div>

              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-outline">Destination Hub</span>
                <span className="font-headline-sm text-xs sm:text-sm text-on-surface font-semibold">
                  Bhiwandi (Mumbai Hub)
                </span>
                <span className="font-mono text-[11px] text-on-surface-variant">MH Bhiwandi Logistics Park</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 font-mono text-[10px] sm:text-[11px]">
              <span className="px-2 py-0.5 rounded bg-surface border border-surface-container-high text-on-surface font-medium">
                21 MT Coils
              </span>
              <span className="px-2 py-0.5 rounded bg-surface border border-surface-container-high text-on-surface font-medium">
                Multi-Axle Trailer (40ft)
              </span>
              <span className="px-2 py-0.5 rounded bg-secondary-container/50 border border-secondary/20 text-on-secondary-container font-medium">
                FASTag Linked
              </span>
            </div>
          </div>

          {/* 4 Financial Metric Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 bg-surface-container-low p-3 sm:p-3.5 rounded-lg border border-surface-container-high">
            <div className="flex flex-col">
              <span className="font-mono text-[10px] text-outline">Shipper Target Rate</span>
              <span className="font-headline-sm text-sm sm:text-base text-on-surface font-semibold mt-0.5">₹50,000</span>
              <span className="font-mono text-[10px] text-outline">₹2,380 / MT</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[10px] text-outline">Best Transporter Quote</span>
              <span className="font-headline-sm text-sm sm:text-base text-on-surface font-semibold mt-0.5">₹48,500</span>
              <span className="font-mono text-[11px] text-on-surface-variant truncate">Ghatge Patil Transports</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[10px] text-outline">Projected Net Margin</span>
              <span className="font-headline-sm text-sm sm:text-base text-primary font-bold mt-0.5">₹1,500 (3.0%)</span>
              <span className="font-mono text-[10px] text-primary font-bold">-₹1,000 vs Min Floor</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[10px] text-outline">Market Spot Benchmark</span>
              <span className="font-headline-sm text-sm sm:text-base text-secondary font-semibold mt-0.5">₹47,200</span>
              <span className="font-mono text-[10px] text-secondary font-medium">94% AI Confidence</span>
            </div>
          </div>

          {/* AI Dispatch Synthesis */}
          <div className="flex items-start gap-2.5 p-3 bg-primary-container/40 rounded-lg text-on-primary-container font-sans text-xs border border-primary/20 leading-relaxed">
            <span className="material-symbols-outlined text-base flex-shrink-0 mt-0.5 text-primary">
              psychology
            </span>
            <div>
              <strong className="font-semibold text-on-surface">AI Dispatch Synthesis: </strong>
              Ghatge Patil quoted ₹48,500 citing diesel surge in Kolhapur-Pune stretch. Historical negotiation engine indicates an{" "}
              <span className="font-bold text-secondary bg-secondary-container/60 px-1 py-0.5 rounded">
                81% acceptance probability
              </span>{" "}
              for counter-bid at ₹46,000 on this specific lane within 12 minutes.
            </div>
          </div>

          {/* Action Button Row */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 pt-1">
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setCounterOpen(!counterOpen)}
                className="flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-lg bg-primary hover:bg-[#e03a22] text-on-primary font-headline-sm text-xs font-semibold shadow-xs transition-all active:scale-95 w-full sm:w-auto"
              >
                <span className="material-symbols-outlined text-base">forum</span>
                <span>Counter Transporter @ {counterAmount}</span>
              </button>

              <button
                type="button"
                className="flex items-center justify-center gap-1 px-3 sm:px-3.5 py-2 rounded-lg bg-surface-container-low border border-surface-container-high text-on-surface hover:bg-surface-container-high font-sans text-xs transition-all w-full sm:w-auto"
              >
                <span className="material-symbols-outlined text-base text-outline">request_quote</span>
                <span>Request Shipper Rate Hike (+₹2,000)</span>
              </button>

              <button
                type="button"
                className="flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container-low font-sans text-xs transition-all w-full sm:w-auto"
              >
                <span>Manual Override &amp; Accept</span>
              </button>
            </div>

            <button
              type="button"
              className="flex items-center gap-1 text-primary hover:underline font-mono text-xs ml-auto sm:ml-0 font-semibold"
            >
              <span>View 4 Quotes</span>
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </button>
          </div>

          {/* Interactive Counter Offer Drawer */}
          {counterOpen && (
            <div className="mt-2 p-3 bg-neutral-900 text-white rounded-lg flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 animate-fadeIn">
              <span className="font-mono text-xs text-neutral-300 font-semibold">
                Set WhatsApp Counter Rate:
              </span>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={counterAmount}
                  onChange={(e) => setCounterAmount(e.target.value)}
                  className="bg-neutral-800 border border-neutral-700 px-3 py-1.5 rounded text-white font-mono text-xs font-bold w-28 focus:outline-none focus:border-primary"
                />
                <button
                  type="button"
                  onClick={() => {
                    alert(`Counter offer of ${counterAmount} dispatched to Ghatge Patil via WhatsApp!`);
                    setCounterOpen(false);
                  }}
                  className="px-3.5 py-1.5 bg-primary text-on-primary font-mono text-xs font-bold rounded hover:bg-[#e03a22]"
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
        <article className="relative overflow-hidden bg-surface-container border border-secondary/30 rounded-xl p-4 sm:p-5 shadow-xs flex flex-col gap-3.5 sm:gap-4 bg-gradient-to-r from-secondary-container/20 via-surface-container to-surface-container transition-all">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-secondary/15 pb-2.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-secondary-container text-on-secondary-container rounded font-mono text-[10px] font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-xs">verified</span>
                1-Click Fast-Track Ready
              </span>
              <span className="font-mono text-xs text-on-surface font-bold">#BLR-HYD-1039</span>
              <span className="px-1.5 py-0.5 rounded bg-surface-container-low text-secondary font-mono text-[10px]">
                Vahan + FASTag Checked
              </span>
            </div>
            <span className="text-secondary font-mono text-[11px] font-semibold">Optimal Margin (+15.5%)</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 bg-surface-container-low p-3 sm:p-3.5 rounded-lg border border-surface-container-high">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-outline">Loading Origin</span>
                <span className="font-headline-sm text-xs sm:text-sm text-on-surface font-semibold">Peenya (BLR)</span>
                <span className="font-mono text-[11px] text-on-surface-variant">Pharma Cold Hub</span>
              </div>
              <div className="flex sm:flex-col items-center gap-1.5 sm:gap-0 px-1 sm:px-2">
                <span className="font-mono text-[11px] text-secondary font-medium tracking-tight">575 km</span>
                <div className="flex items-center gap-0.5 text-secondary">
                  <span className="h-0.5 w-4 sm:w-6 bg-secondary/40"></span>
                  <span className="material-symbols-outlined text-sm">alt_route</span>
                  <span className="h-0.5 w-4 sm:w-6 bg-secondary/40"></span>
                </div>
                <span className="font-mono text-[10px] text-outline">NH 44 Express</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-outline">Unloading Destination</span>
                <span className="font-headline-sm text-xs sm:text-sm text-on-surface font-semibold">
                  Cherlapally (Hyderabad)
                </span>
                <span className="font-mono text-[11px] text-on-surface-variant">Pharma Special SEZ</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 font-mono text-[10px] sm:text-[11px]">
              <span className="px-2 py-0.5 rounded bg-surface border border-surface-container-high text-on-surface">
                14 MT Formulation
              </span>
              <span className="px-2 py-0.5 rounded bg-surface border border-surface-container-high text-on-surface">
                32ft MXL Closed Container
              </span>
              <span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-medium">
                KA-04-E-8821 (12 km away)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 bg-surface-container-low p-3 sm:p-3.5 rounded-lg border border-surface-container-high">
            <div className="flex flex-col">
              <span className="font-mono text-[10px] text-outline">Transporter Quote</span>
              <span className="font-headline-sm text-sm sm:text-base text-on-surface font-semibold mt-0.5">₹38,000</span>
              <span className="font-mono text-[11px] text-secondary truncate font-medium">Sri Balaji Roadlines</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[10px] text-outline">Shipper Contract</span>
              <span className="font-headline-sm text-sm sm:text-base text-on-surface font-semibold mt-0.5">₹45,000</span>
              <span className="font-mono text-[10px] text-outline">Pre-approved PO</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[10px] text-outline">Gross Margin</span>
              <span className="font-headline-sm text-sm sm:text-base text-secondary font-semibold mt-0.5">₹7,000 (15.5%)</span>
              <span className="font-mono text-[10px] text-secondary font-medium">+₹2,000 over Target</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[10px] text-outline">Transporter Rating</span>
              <span className="font-headline-sm text-sm sm:text-base text-on-surface font-semibold mt-0.5">4.9 / 5.0</span>
              <span className="font-mono text-[10px] text-outline">98% On-Time (42 Trips)</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2.5 pt-1">
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => handleApprove("BLR-HYD-1039")}
                disabled={approvedCards["BLR-HYD-1039"]}
                className={`flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-lg font-headline-sm text-xs font-semibold shadow-xs transition-all w-full sm:w-auto ${
                  approvedCards["BLR-HYD-1039"]
                    ? "bg-secondary/70 text-on-secondary cursor-default"
                    : "bg-secondary text-on-secondary hover:opacity-90 active:scale-95"
                }`}
              >
                <span className="material-symbols-outlined text-base">task_alt</span>
                <span>
                  {approvedCards["BLR-HYD-1039"] ? "Trip Booked (FSM: Locked)" : "Approve & Book Now (1-Click)"}
                </span>
              </button>

              <button
                type="button"
                className="flex items-center justify-center gap-1 px-3 sm:px-3.5 py-2 rounded-lg bg-surface-container-low border border-surface-container-high text-on-surface hover:bg-surface-container-high font-sans text-xs transition-all w-full sm:w-auto"
              >
                <span>View All 3 Bids</span>
              </button>

              <button
                type="button"
                className="flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-outline hover:text-on-surface font-sans text-xs transition-all w-full sm:w-auto"
              >
                <span>Hold 15m</span>
              </button>
            </div>

            <span className="font-mono text-[11px] text-outline ml-auto sm:ml-0">
              Driver Contact: Suresh Y. (+91 97412 XXXXX)
            </span>
          </div>
        </article>
      )}

      {/* HITL CARD 3: Amber Incomplete Inquiry */}
      {(activeFilter === "all" || activeFilter === "incomplete") && (
        <article className="relative overflow-hidden bg-surface-container border border-surface-container-high rounded-xl p-4 sm:p-5 shadow-xs flex flex-col gap-3.5 sm:gap-4 bg-gradient-to-r from-surface-container-low via-surface-container to-surface-container transition-all">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-surface-container-high pb-2.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-primary-container text-on-primary-container rounded font-mono text-[10px] font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-xs">help_outline</span>
                Incomplete Load Inquiry
              </span>
              <span className="font-mono text-xs text-on-surface font-semibold">Shipper: Micro Labs Ltd</span>
            </div>
            <span className="font-mono text-[11px] text-outline font-medium">
              Source: WhatsApp Group &quot;Bangalore Pharma Freight&quot;
            </span>
          </div>

          <div className="bg-surface-container-low p-3 sm:p-3.5 rounded-lg flex flex-col gap-1.5 border border-surface-container-high">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-on-surface font-sans text-xs">
              <span><strong>Origin:</strong> Bommasandra Industrial</span>
              <span className="text-outline">•</span>
              <span><strong>Destination:</strong> Changodar, Ahmedabad</span>
              <span className="text-outline">•</span>
              <span><strong>Placement:</strong> Tomorrow 06:00 AM IST</span>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 mt-0.5 font-mono text-[10px]">
              <span className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-medium">
                ⚠️ Missing: Total Weight (MT)
              </span>
              <span className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-medium">
                ⚠️ Missing: Truck Category (Closed / Tarpaulin)
              </span>
            </div>
          </div>

          <div className="p-3 sm:p-3.5 bg-surface-container-low rounded-lg font-sans text-xs flex flex-col gap-1.5 border border-surface-container-high">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-outline font-semibold">
                AI PRE-GENERATED CLARIFICATION (READY TO DISPATCH)
              </span>
              <span className="font-mono text-[10px] text-secondary font-medium">
                Hinglish / English Dual Parse
              </span>
            </div>
            <p className="text-on-surface-variant italic bg-surface p-2.5 rounded border border-surface-container-high leading-relaxed">
              &quot;Namaste Micro Labs logistics team, please confirm the total MT weight and whether container closed body is mandatory for tomorrow&apos;s Ahmedabad indent? Fast indents waiting.&quot;
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2.5 pt-1">
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => alert("Clarification WhatsApp draft dispatched to Micro Labs Ltd!")}
                className="flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white font-headline-sm text-xs font-semibold shadow-xs transition-all active:scale-95 w-full sm:w-auto"
              >
                <span className="material-symbols-outlined text-base text-primary">send</span>
                <span>Send WhatsApp Clarification Draft</span>
              </button>

              <button
                type="button"
                className="flex items-center justify-center gap-1 px-3 sm:px-3.5 py-2 rounded-lg bg-surface-container-low border border-surface-container-high text-on-surface hover:bg-surface-container-high font-sans text-xs transition-all w-full sm:w-auto"
              >
                <span>Edit Message Manually</span>
              </button>
            </div>

            <button
              type="button"
              className="text-outline hover:text-primary font-mono text-xs transition-colors ml-auto sm:ml-0"
            >
              Dismiss Inquiry
            </button>
          </div>
        </article>
      )}
    </div>
  );
};
