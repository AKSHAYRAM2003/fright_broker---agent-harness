"use client";

import React, { useState } from "react";

export const Hero: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [actionTaken, setActionTaken] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#faf9f6] pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background Soft Glow & Subtle Ambient Elements (No harsh black grid) */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(#d4d4d8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />
      <div 
        className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-emerald-100/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          
          {/* Left Column: Headline, Value Proposition & Pilot Form */}
          <div className="lg:col-span-7">
            
            {/* Live Operational Ticker Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/25 bg-emerald-50 px-3.5 py-1.5 font-mono text-[11px] font-medium text-emerald-800 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>Deterministic FSM Active • NH-48 &amp; NH-44 Corridors Live</span>
            </div>

            {/* Main Headline (Clean typography, wide max-width, no squishing) */}
            <h1 className="mt-6 font-display text-[36px] font-bold leading-[1.08] tracking-[-0.035em] text-neutral-900 sm:text-[48px] md:text-[56px] lg:text-[62px]">
              The Autonomous Operations Harness for{" "}
              <span className="text-emerald-700">Indian Freight Brokers.</span>
            </h1>

            {/* Description Subtext */}
            <p className="mt-5 max-w-[620px] text-[16px] leading-[1.65] text-neutral-600 md:text-[17px]">
              Ingest chaotic WhatsApp voice notes in Kannada, Hindi &amp; Hinglish. Protect your{" "}
              <strong className="text-neutral-900 font-semibold">₹2,500 profit floor</strong> with
              Type-Safe guardrails. From truck sourcing to FASTag tracking and photo Bilty POD
              settlement—without margin leaks.
            </p>

            {/* Inbound Pilot Trigger Form */}
            <div className="mt-8 max-w-[540px]">
              {submitted ? (
                <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-4 font-mono text-[13px] text-emerald-900">
                  <div className="font-bold">✓ Corridor Pilot Request Received</div>
                  <div className="mt-1 text-emerald-800 text-[12px]">
                    Our operations engineer will connect on WhatsApp ({phoneNumber}) within 15 minutes.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <div className="flex flex-1 items-center rounded-lg border border-neutral-300 bg-white px-3.5 py-3 shadow-xs focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-600/20">
                    <span className="mr-2 font-mono text-[13px] font-semibold text-neutral-400">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="WhatsApp Mobile Number"
                      className="w-full bg-transparent font-mono text-[13.5px] text-neutral-900 outline-none placeholder:text-neutral-400"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-emerald-700 px-6 py-3.5 font-mono text-[12px] font-semibold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-emerald-800 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                  >
                    <span>Request Corridor Pilot</span>
                    <span className="text-emerald-300">→</span>
                  </button>
                </form>
              )}
            </div>

            {/* Fast Stats Row */}
            <div className="mt-10 grid max-w-[540px] grid-cols-3 gap-6 border-t border-neutral-200/80 pt-6">
              <div>
                <div className="font-mono text-[24px] font-bold text-neutral-900">9 Mins</div>
                <div className="mt-0.5 font-mono text-[11px] uppercase tracking-wider text-neutral-500">
                  Quote Sourcing
                </div>
              </div>
              <div>
                <div className="font-mono text-[24px] font-bold text-emerald-700">₹2,500</div>
                <div className="mt-0.5 font-mono text-[11px] uppercase tracking-wider text-neutral-500">
                  Min Margin Floor
                </div>
              </div>
              <div>
                <div className="font-mono text-[24px] font-bold text-neutral-900">94.7%</div>
                <div className="mt-0.5 font-mono text-[11px] uppercase tracking-wider text-neutral-500">
                  Vernacular Audio
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Live Interactive Type-Safe Action Card Preview */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-xl shadow-neutral-200/50">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-neutral-100 pb-3.5">
                <div className="flex items-center gap-2">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-amber-500 animate-pulse" />
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-neutral-900">
                    HITL Priority Action Queue
                  </span>
                </div>
                <span className="rounded bg-amber-100 px-2 py-0.5 font-mono text-[10px] font-bold text-amber-900">
                  REQUIRES BROKER REVIEW
                </span>
              </div>

              {/* Inquiry Meta Box */}
              <div className="mt-4 rounded-xl border border-neutral-100 bg-[#f9f8f6] p-3.5">
                <div className="flex items-center justify-between font-mono text-[11.5px] text-neutral-500">
                  <span>RFQ-2026-9812 • Peenya Ind Area</span>
                  <span className="text-emerald-700 font-medium">WhatsApp Voice Note</span>
                </div>
                <div className="mt-2 text-[14.5px] font-semibold text-neutral-900">
                  Bengaluru, KA ➔ Bhiwandi, MH (NH-48)
                </div>
                <div className="mt-1 text-[12.5px] text-neutral-600">
                  32ft Multi-Axle Container (MXL) • 22.0 MT Auto Components
                </div>
              </div>

              {/* Rate Math & Margin Protection Breakdown */}
              <div className="mt-4 space-y-2 font-mono text-[12.5px]">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500">Shipper Budget (Max Target):</span>
                  <span className="font-semibold text-neutral-900">₹48,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500">Lowest Carrier Quote (Patel Logistics):</span>
                  <span className="font-semibold text-neutral-900">₹46,500</span>
                </div>
                <div className="flex items-center justify-between border-t border-dashed border-neutral-200 pt-2 text-rose-600">
                  <span className="font-semibold">Calculated Broker Gross Profit:</span>
                  <span className="font-bold">₹1,500 (3.1%)</span>
                </div>
              </div>

              {/* Financial Guardrail Alert Box */}
              <div className="mt-3.5 rounded-lg border border-rose-200 bg-rose-50/70 p-3 text-[12px] text-rose-900">
                <div className="flex items-center gap-1.5 font-semibold">
                  <span>⚠️</span>
                  <span>Financial Guardrail Triggered:</span>
                </div>
                <div className="mt-1 leading-snug text-[11.5px] text-rose-800">
                  Gross profit ₹1,500 violates your mandatory <strong>₹2,500 floor policy</strong>. Autonomous booking blocked.
                </div>
              </div>

              {/* Recommended 1-Click Action */}
              <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50/70 p-3.5">
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
              <div className="mt-4">
                {actionTaken ? (
                  <div className="rounded-lg bg-emerald-100 p-2.5 text-center font-mono text-[11px] font-semibold text-emerald-800">
                    {actionTaken}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setActionTaken("✓ Approved Counter ₹49K — Shipper Notified")}
                      className="rounded-lg bg-emerald-700 py-2.5 font-mono text-[11px] font-bold uppercase tracking-wider text-white shadow-xs transition-colors hover:bg-emerald-800 cursor-pointer"
                    >
                      ✓ Approve Counter ₹49K
                    </button>
                    <button
                      type="button"
                      onClick={() => setActionTaken("Carrier Patel Logistics Counter ₹45,500 Requested")}
                      className="rounded-lg border border-neutral-200 bg-white py-2.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-neutral-800 transition-colors hover:bg-neutral-50 cursor-pointer"
                    >
                      Negotiate Carrier
                    </button>
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
