"use client";

import React, { useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  HelpCircle,
  Timer,
  Truck,
  ArrowRight,
  Send,
  ExternalLink,
  Brain,
  SlidersHorizontal,
  PauseCircle,
  FileText,
  ShieldCheck,
} from "lucide-react";

export const ActionQueueSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "margin" | "instant" | "incomplete">("all");
  const [approvedCards, setApprovedCards] = useState<Record<string, boolean>>({});
  const [counterOpen, setCounterOpen] = useState(false);
  const [customCounterRate, setCustomCounterRate] = useState("₹46,000");

  const handleApprove = (cardId: string) => {
    setApprovedCards((prev) => ({ ...prev, [cardId]: true }));
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Queue Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white border border-neutral-200/90 px-4 py-3 rounded-xl shadow-xs">
        <div className="flex items-center gap-3">
          <div className="h-2.5 w-2.5 rounded-full bg-[#ff462d] animate-ping"></div>
          <h2 className="font-sans text-base font-bold text-neutral-900 tracking-tight">
            AI Action Queue
          </h2>
          <span className="px-2 py-0.5 rounded-full bg-neutral-900 text-white font-mono text-[10px] font-bold">
            3 Decisions Required
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-neutral-100 rounded-md text-neutral-600 font-mono text-[11px]">
            <PauseCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>Auto-pilot: Paused for HITL</span>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1 bg-neutral-100 p-1 rounded-lg font-mono text-[11px]">
            <button
              onClick={() => setActiveFilter("all")}
              type="button"
              className={`px-2.5 py-1 rounded-md transition-all ${
                activeFilter === "all"
                  ? "bg-white text-neutral-900 font-bold shadow-xs"
                  : "text-neutral-500 hover:text-neutral-800"
              }`}
            >
              All (3)
            </button>
            <button
              onClick={() => setActiveFilter("margin")}
              type="button"
              className={`px-2.5 py-1 rounded-md transition-all ${
                activeFilter === "margin"
                  ? "bg-white text-neutral-900 font-bold shadow-xs"
                  : "text-neutral-500 hover:text-neutral-800"
              }`}
            >
              Margin (1)
            </button>
            <button
              onClick={() => setActiveFilter("instant")}
              type="button"
              className={`px-2.5 py-1 rounded-md transition-all ${
                activeFilter === "instant"
                  ? "bg-white text-neutral-900 font-bold shadow-xs"
                  : "text-neutral-500 hover:text-neutral-800"
              }`}
            >
              Instant Book (1)
            </button>
            <button
              onClick={() => setActiveFilter("incomplete")}
              type="button"
              className={`px-2.5 py-1 rounded-md transition-all ${
                activeFilter === "incomplete"
                  ? "bg-white text-neutral-900 font-bold shadow-xs"
                  : "text-neutral-500 hover:text-neutral-800"
              }`}
            >
              Incomplete (1)
            </button>
          </div>
        </div>
      </div>

      {/* HITL CARD 1: URGENT Margin Floor Alert */}
      {(activeFilter === "all" || activeFilter === "margin") && (
        <article className="relative overflow-hidden bg-white border border-[#ff462d]/40 rounded-xl p-5 shadow-xs flex flex-col gap-4 bg-gradient-to-r from-red-50/20 via-white to-white transition-all">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-red-100 pb-3">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-red-100 text-[#ff462d] border border-red-200 rounded font-mono text-[10px] font-bold uppercase tracking-wider">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ff462d] animate-ping"></span>
                Critical Margin Floor Alert
              </span>
              <span className="font-mono text-xs text-neutral-900 font-bold">
                #BLR-BHW-1042
              </span>
              <span className="px-2 py-0.5 rounded bg-neutral-100 text-neutral-600 font-mono text-[10px]">
                GST Verified Indent
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-[#ff462d] font-mono text-[11px] font-bold">
              <Timer className="w-3.5 h-3.5 animate-pulse" />
              <span>SLA: 07:44 remaining</span>
            </div>
          </div>

          {/* Route & Vehicle Meta */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 bg-neutral-50/80 p-3.5 rounded-xl border border-neutral-200/70">
            <div className="flex items-center gap-4">
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-neutral-400 uppercase">Origin Hub</span>
                <span className="font-sans text-sm text-neutral-900 font-bold">Bengaluru (Peenya Ind.)</span>
                <span className="font-mono text-[11px] text-neutral-500">KA Depot #04</span>
              </div>
              <div className="flex flex-col items-center px-2">
                <span className="font-mono text-[11px] text-[#ff462d] font-semibold">980 km</span>
                <div className="flex items-center gap-1 text-[#ff462d]">
                  <span className="h-0.5 w-5 bg-[#ff462d]/40"></span>
                  <Truck className="w-3.5 h-3.5" />
                  <span className="h-0.5 w-5 bg-[#ff462d]/40"></span>
                </div>
                <span className="font-mono text-[10px] text-neutral-400">NH 48 Corridor</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-neutral-400 uppercase">Destination Hub</span>
                <span className="font-sans text-sm text-neutral-900 font-bold">Bhiwandi (Mumbai Hub)</span>
                <span className="font-mono text-[11px] text-neutral-500">MH Bhiwandi Logistics Park</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px]">
              <span className="px-2 py-1 rounded bg-white border border-neutral-200 text-neutral-800 font-medium">
                21 MT Coils
              </span>
              <span className="px-2 py-1 rounded bg-white border border-neutral-200 text-neutral-800 font-medium">
                Multi-Axle Trailer (40ft)
              </span>
              <span className="px-2 py-1 rounded bg-emerald-50 border border-emerald-200 text-emerald-800 font-medium">
                FASTag Linked
              </span>
            </div>
          </div>

          {/* Financial Breakdown Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-neutral-50/80 p-3.5 rounded-xl border border-neutral-200/70">
            <div className="flex flex-col">
              <span className="font-mono text-[10px] text-neutral-400 uppercase">Shipper Target Rate</span>
              <span className="font-mono text-base font-bold text-neutral-900 mt-0.5">₹50,000</span>
              <span className="font-mono text-[10px] text-neutral-400">₹2,380 / MT</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[10px] text-neutral-400 uppercase">Best Transporter Quote</span>
              <span className="font-mono text-base font-bold text-amber-700 mt-0.5">₹48,500</span>
              <span className="font-sans text-[11px] text-neutral-600 truncate font-medium">Ghatge Patil Transports</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[10px] text-neutral-400 uppercase">Projected Net Margin</span>
              <span className="font-mono text-base font-bold text-[#ff462d] mt-0.5">₹1,500 (3.0%)</span>
              <span className="font-mono text-[10px] text-[#ff462d] font-bold">-₹1,000 vs Min Floor</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[10px] text-neutral-400 uppercase">Market Spot Benchmark</span>
              <span className="font-mono text-base font-bold text-emerald-700 mt-0.5">₹47,200</span>
              <span className="font-mono text-[10px] text-emerald-700 font-medium">94% AI Confidence</span>
            </div>
          </div>

          {/* AI Dispatch Synthesis */}
          <div className="flex items-start gap-2.5 p-3 bg-amber-50/70 border border-amber-200/80 rounded-xl text-neutral-800 text-xs leading-relaxed">
            <Brain className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold text-neutral-900 font-sans">AI Dispatch Synthesis: </strong>
              Ghatge Patil quoted ₹48,500 citing diesel surge in Kolhapur-Pune stretch. Historical negotiation engine indicates an{" "}
              <span className="font-bold text-emerald-800 bg-emerald-100/60 px-1 py-0.5 rounded">
                81% acceptance probability
              </span>{" "}
              for counter-bid at ₹46,000 on this specific lane within 12 minutes.
            </div>
          </div>

          {/* Action Button Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={() => setCounterOpen(!counterOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#ff462d] hover:bg-[#e03a22] text-white font-mono text-xs font-bold transition-all active:scale-95 shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Counter Transporter @ {customCounterRate}</span>
              </button>

              <button
                type="button"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 border border-neutral-300/80 text-neutral-800 font-mono text-xs font-semibold transition-all"
              >
                <FileText className="w-3.5 h-3.5 text-neutral-500" />
                <span>Request Shipper Rate Hike (+₹2,000)</span>
              </button>

              <button
                type="button"
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 font-mono text-xs transition-all"
              >
                <span>Manual Override & Accept</span>
              </button>
            </div>

            <button
              type="button"
              className="flex items-center gap-1 text-[#ff462d] hover:underline font-mono text-xs font-semibold"
            >
              <span>View 4 Quotes</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Inline Counter Drawer */}
          {counterOpen && (
            <div className="mt-2 p-3 bg-neutral-900 text-white rounded-xl flex items-center justify-between gap-3 animate-fadeIn">
              <span className="font-mono text-xs text-neutral-300">Set WhatsApp Counter Rate:</span>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={customCounterRate}
                  onChange={(e) => setCustomCounterRate(e.target.value)}
                  className="bg-neutral-800 border border-neutral-700 px-3 py-1 rounded text-white font-mono text-xs font-bold w-28"
                />
                <button
                  type="button"
                  onClick={() => {
                    alert(`Counter offer of ${customCounterRate} dispatched to Ghatge Patil via WhatsApp!`);
                    setCounterOpen(false);
                  }}
                  className="px-3 py-1 bg-[#ff462d] text-white font-mono text-xs font-bold rounded hover:bg-[#e03a22]"
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
        <article className="relative overflow-hidden bg-white border border-emerald-300 rounded-xl p-5 shadow-xs flex flex-col gap-4 bg-gradient-to-r from-emerald-50/20 via-white to-white transition-all">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-emerald-100 pb-3">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-emerald-100 text-emerald-800 border border-emerald-200 rounded font-mono text-[10px] font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                1-Click Fast-Track Ready
              </span>
              <span className="font-mono text-xs text-neutral-900 font-bold">
                #BLR-HYD-1039
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-mono text-[10px] font-semibold border border-emerald-200">
                VAHAN + FASTag Checked
              </span>
            </div>

            <span className="text-emerald-700 font-mono text-[11px] font-bold">
              Optimal Margin (+15.5%)
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 bg-neutral-50/80 p-3.5 rounded-xl border border-neutral-200/70">
            <div className="flex items-center gap-4">
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-neutral-400 uppercase">Loading Origin</span>
                <span className="font-sans text-sm text-neutral-900 font-bold">Peenya (BLR)</span>
                <span className="font-mono text-[11px] text-neutral-500">Pharma Cold Hub</span>
              </div>
              <div className="flex flex-col items-center px-2">
                <span className="font-mono text-[11px] text-emerald-700 font-semibold">575 km</span>
                <div className="flex items-center gap-1 text-emerald-600">
                  <span className="h-0.5 w-5 bg-emerald-300"></span>
                  <Truck className="w-3.5 h-3.5" />
                  <span className="h-0.5 w-5 bg-emerald-300"></span>
                </div>
                <span className="font-mono text-[10px] text-neutral-400">NH 44 Express</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-neutral-400 uppercase">Unloading Destination</span>
                <span className="font-sans text-sm text-neutral-900 font-bold">Cherlapally (Hyderabad)</span>
                <span className="font-mono text-[11px] text-neutral-500">Pharma Special SEZ</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px]">
              <span className="px-2 py-1 rounded bg-white border border-neutral-200 text-neutral-800 font-medium">
                14 MT Formulation
              </span>
              <span className="px-2 py-1 rounded bg-white border border-neutral-200 text-neutral-800 font-medium">
                32ft MXL Container
              </span>
              <span className="px-2 py-1 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold">
                KA-04-E-8821 (12 km away)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-neutral-50/80 p-3.5 rounded-xl border border-neutral-200/70">
            <div className="flex flex-col">
              <span className="font-mono text-[10px] text-neutral-400 uppercase">Transporter Quote</span>
              <span className="font-mono text-base font-bold text-neutral-900 mt-0.5">₹38,000</span>
              <span className="font-sans text-[11px] text-emerald-700 font-bold truncate">Sri Balaji Roadlines</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[10px] text-neutral-400 uppercase">Shipper Contract</span>
              <span className="font-mono text-base font-bold text-neutral-900 mt-0.5">₹45,000</span>
              <span className="font-mono text-[10px] text-neutral-500">Pre-approved PO</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[10px] text-neutral-400 uppercase">Gross Margin</span>
              <span className="font-mono text-base font-bold text-emerald-700 mt-0.5">₹7,000 (15.5%)</span>
              <span className="font-mono text-[10px] text-emerald-700 font-bold">+₹2,000 over Target</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[10px] text-neutral-400 uppercase">Transporter Rating</span>
              <span className="font-mono text-base font-bold text-neutral-900 mt-0.5">4.9 / 5.0</span>
              <span className="font-mono text-[10px] text-neutral-500">98% On-Time (42 Trips)</span>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={() => handleApprove("BLR-HYD-1039")}
                disabled={approvedCards["BLR-HYD-1039"]}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs font-bold transition-all shadow-xs ${
                  approvedCards["BLR-HYD-1039"]
                    ? "bg-emerald-600 text-white cursor-default"
                    : "bg-emerald-700 hover:bg-emerald-800 text-white active:scale-95"
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                <span>
                  {approvedCards["BLR-HYD-1039"]
                    ? "Trip Booked & Rate Locked!"
                    : "Approve & Book Now (1-Click)"}
                </span>
              </button>

              <button
                type="button"
                className="flex items-center gap-1 px-3.5 py-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 border border-neutral-300/80 text-neutral-800 font-mono text-xs font-medium transition-all"
              >
                <span>View All 3 Bids</span>
              </button>

              <button
                type="button"
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-neutral-500 hover:text-neutral-900 font-mono text-xs transition-all"
              >
                <span>Hold 15m</span>
              </button>
            </div>

            <span className="font-mono text-[11px] text-neutral-500">
              Driver Contact: Suresh Y. (+91 97412 XXXXX)
            </span>
          </div>
        </article>
      )}

      {/* HITL CARD 3: Amber Incomplete Inquiry */}
      {(activeFilter === "all" || activeFilter === "incomplete") && (
        <article className="relative overflow-hidden bg-white border border-amber-300 rounded-xl p-5 shadow-xs flex flex-col gap-4 bg-gradient-to-r from-amber-50/20 via-white to-white transition-all">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-100 pb-3">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-amber-100 text-amber-900 border border-amber-200 rounded font-mono text-[10px] font-bold uppercase tracking-wider">
                <HelpCircle className="w-3 h-3 text-amber-600" />
                Incomplete Load Inquiry
              </span>
              <span className="font-mono text-xs text-neutral-900 font-bold">
                Shipper: Micro Labs Ltd
              </span>
            </div>

            <span className="font-mono text-[11px] text-amber-800 font-medium">
              Source: WhatsApp Group &quot;Bangalore Pharma Freight&quot;
            </span>
          </div>

          <div className="bg-neutral-50/80 p-3.5 rounded-xl flex flex-col gap-2 border border-neutral-200/70">
            <div className="flex flex-wrap items-center gap-3 text-neutral-900 text-xs font-sans">
              <span><strong>Origin:</strong> Bommasandra Industrial</span>
              <span className="text-neutral-300">•</span>
              <span><strong>Destination:</strong> Changodar, Ahmedabad</span>
              <span className="text-neutral-300">•</span>
              <span><strong>Placement:</strong> Tomorrow 06:00 AM IST</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 mt-0.5">
              <span className="px-2 py-0.5 rounded bg-red-50 border border-red-200 text-[#ff462d] font-mono text-[10px] font-bold">
                ⚠️ Missing: Total Weight (MT)
              </span>
              <span className="px-2 py-0.5 rounded bg-red-50 border border-red-200 text-[#ff462d] font-mono text-[10px] font-bold">
                ⚠️ Missing: Truck Category (Closed / Tarpaulin)
              </span>
            </div>
          </div>

          {/* AI Pre-generated Clarification */}
          <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-200/80 flex flex-col gap-1.5 text-xs">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-amber-900 font-bold uppercase tracking-wider">
                AI Pre-Generated Clarification (Ready to Dispatch)
              </span>
              <span className="font-mono text-[10px] text-emerald-700 font-bold">
                Hinglish / English Dual Parse
              </span>
            </div>
            <p className="text-neutral-800 italic bg-white p-2.5 rounded-lg border border-amber-200/60 font-sans leading-relaxed">
              &quot;Namaste Micro Labs logistics team, please confirm the total MT weight and whether container closed body is mandatory for tomorrow&apos;s Ahmedabad indent? Fast indents waiting.&quot;
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={() => alert("Clarification WhatsApp message dispatched to Micro Labs Ltd!")}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-mono text-xs font-bold transition-all active:scale-95 shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send WhatsApp Clarification Draft</span>
              </button>

              <button
                type="button"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 border border-neutral-300/80 text-neutral-800 font-mono text-xs font-medium transition-all"
              >
                <span>Edit Message Manually</span>
              </button>
            </div>

            <button
              type="button"
              className="text-neutral-400 hover:text-red-600 font-mono text-xs transition-colors"
            >
              Dismiss Inquiry
            </button>
          </div>
        </article>
      )}
    </div>
  );
};

