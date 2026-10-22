"use client";

import React from "react";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[640px] overflow-hidden bg-gradient-to-b from-[#fcfcfc] via-[#f7f6f4] to-emerald-50/20 py-20 md:py-28">
      {/* Background Grid Pattern */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
      ></div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          
          {/* Left Column: Headline & Value Prop */}
          <div className="lg:col-span-7">
            {/* Live Operational Ticker Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/30 bg-emerald-50/80 px-3.5 py-1.5 font-mono text-[11px] font-medium text-emerald-800 shadow-sm backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-600 animate-pulse"></span>
              <span>Deterministic FSM Active • NH-48 & NH-44 Corridors Live</span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-6 font-body text-[38px] font-bold leading-[1.05] tracking-[-0.03em] text-hr-ink-strong md:text-[54px] lg:text-[62px]">
              The Autonomous Operations Harness for <span className="text-emerald-700">Indian Freight Brokers.</span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-[580px] text-[16px] leading-[1.65] text-hr-ink-3 md:text-[17px]">
              Ingest chaotic WhatsApp voice notes in Kannada, Hindi & Hinglish. Protect your <strong>₹2,500 profit floor</strong> with Type-Safe guardrails. From truck sourcing to FASTag tracking and photo Bilty POD settlement—without margin leaks.
            </p>

            {/* Inbound Pilot Trigger Form */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex rounded-lg border border-hr-line bg-white px-4 py-3 shadow-sm focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-600/20">
                <span className="font-mono text-[13px] text-hr-ink-4 mr-2.5">+91</span>
                <input
                  type="tel"
                  placeholder="WhatsApp Mobile Number"
                  className="w-full bg-transparent font-mono text-[13.5px] text-hr-ink-strong focus:outline-none"
                />
              </div>
              <a
                href="#cta"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-700 px-6 py-3.5 font-mono text-[12px] font-semibold uppercase tracking-wider text-white shadow-md hover:bg-emerald-800 transition-all hover:scale-[1.01]"
              >
                <span>Request Corridor Pilot</span>
                <span className="text-emerald-300">→</span>
              </a>
            </div>

            {/* Fast Stats Row */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-hr-line/70 pt-6 max-w-[540px]">
              <div>
                <div className="font-mono text-[22px] font-bold text-hr-ink-strong">9 Mins</div>
                <div className="font-mono text-[11px] text-hr-ink-4 uppercase tracking-wider mt-0.5">Quote Sourcing</div>
              </div>
              <div>
                <div className="font-mono text-[22px] font-bold text-emerald-700">₹2,500</div>
                <div className="font-mono text-[11px] text-hr-ink-4 uppercase tracking-wider mt-0.5">Min Margin Floor</div>
              </div>
              <div>
                <div className="font-mono text-[22px] font-bold text-hr-ink-strong">94.7%</div>
                <div className="font-mono text-[11px] text-hr-ink-4 uppercase tracking-wider mt-0.5">Vernacular Audio</div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Type-Safe Action Card Preview */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-hr-line bg-white p-6 shadow-xl shadow-stone-900/5">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-hr-line pb-3.5">
                <div className="flex items-center gap-2">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-amber-500"></span>
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-hr-ink-strong">
                    HITL Priority Action Queue
                  </span>
                </div>
                <span className="rounded bg-amber-100 px-2 py-0.5 font-mono text-[10px] font-bold text-amber-900">
                  REQUIRES BROKER REVIEW
                </span>
              </div>

              {/* Inquiry Meta */}
              <div className="mt-4 rounded-xl bg-hr-surface p-3.5 border border-hr-line/60">
                <div className="flex items-center justify-between text-[11.5px] font-mono text-hr-ink-4">
                  <span>RFQ-2026-9812 • Peenya Ind Area</span>
                  <span>WhatsApp Voice Note</span>
                </div>
                <div className="mt-2 text-[14px] font-semibold text-hr-ink-strong">
                  Bengaluru, KA ➔ Bhiwandi, MH (NH-48)
                </div>
                <div className="mt-1 text-[12px] text-hr-ink-3">
                  32ft Multi-Axle Container (MXL) • 22.0 MT Auto Components
                </div>
              </div>

              {/* Rate Math & Margin Protection Breakdown */}
              <div className="mt-4 space-y-2 text-[12.5px] font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-hr-ink-3">Shipper Budget (Max Target):</span>
                  <span className="font-bold text-hr-ink-strong">₹48,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-hr-ink-3">Lowest Carrier Quote (Patel Logistics):</span>
                  <span className="font-bold text-hr-ink-strong">₹46,500</span>
                </div>
                <div className="flex items-center justify-between border-t border-dashed border-hr-line pt-2 text-red-600">
                  <span className="font-semibold">Calculated Broker Gross Profit:</span>
                  <span className="font-bold">₹1,500 (3.1%)</span>
                </div>
              </div>

              {/* Financial Guardrail Alert */}
              <div className="mt-3 rounded-lg border border-red-200 bg-red-50/70 p-3 text-[11.5px] text-red-900">
                <div className="flex items-center gap-1.5 font-bold">
                  <span>⚠️</span>
                  <span>Financial Guardrail Triggered:</span>
                </div>
                <div className="mt-0.5 leading-snug">
                  Gross profit ₹1,500 violates your mandatory <strong>₹2,500 floor policy</strong>. Autonomous booking blocked.
                </div>
              </div>

              {/* Recommended 1-Click Action */}
              <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50/60 p-3.5">
                <div className="font-mono text-[10px] font-semibold uppercase tracking-wider text-emerald-800">
                  Recommended Counter-Offer Strategy
                </div>
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-[13px] font-bold text-emerald-950">
                    Counter Shipper at ₹49,000 (Locks ₹2,500 Margin)
                  </span>
                </div>
              </div>

              {/* Interactive Broker Decision Buttons */}
              <div className="mt-4 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  className="rounded-lg bg-emerald-700 py-2.5 font-mono text-[11px] font-bold uppercase tracking-wider text-white shadow-sm hover:bg-emerald-800 transition-colors"
                >
                  ✓ Approve Counter ₹49K
                </button>
                <button
                  type="button"
                  className="rounded-lg border border-hr-line bg-white py-2.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-hr-ink-strong hover:bg-hr-surface transition-colors"
                >
                  Negotiate Carrier
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
