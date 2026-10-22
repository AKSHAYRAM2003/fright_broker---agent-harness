"use client";

import React, { useState } from "react";

export const Hero: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [actionStatus, setActionStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="relative overflow-hidden bg-hr-surface pt-28 pb-16 sm:pt-36 sm:pb-20 md:pt-40 md:pb-24 lg:pt-44 lg:pb-28">
      {/* Background Video Loop (Subtle HappyRobot Aesthetic) */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-[0.20] select-none"
      >
        <video
          poster="/images/redesign/hero-loop-poster.webp"
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover"
        >
          <source src="/videos/HR_Landing_Hero_Loop_HD169_Lumen_v1.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Subtle Ambient Radial Wash */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-[500px] w-[500px] rounded-full bg-emerald-100/30 blur-3xl"
      />
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/4 h-[350px] w-[350px] rounded-full bg-amber-50/40 blur-2xl"
      />

      {/* Main Container - Aligned exactly with Header (max-w-[1440px] px-5 md:px-12) */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-12">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          
          {/* Left Column: Core Value Proposition & Pilot Inbound Trigger */}
          <div className="flex flex-col lg:col-span-7">
            
            {/* Live Operational Ticker Badge */}
            <div className="inline-flex w-fit max-w-full items-center gap-2 rounded-full border border-emerald-600/30 bg-emerald-50/90 px-3.5 py-1.5 font-mono text-[11px] font-medium text-emerald-800 shadow-xs backdrop-blur-xs">
              <span className="flex h-2 w-2 shrink-0 rounded-full bg-emerald-600 animate-pulse" />
              <span className="truncate">
                Deterministic FSM Active • NH-48 &amp; NH-44 Corridors Live
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-5 font-display text-[34px] font-bold leading-[1.08] tracking-[-0.035em] text-hr-ink-strong sm:text-[46px] md:text-[54px] lg:text-[60px] xl:text-[64px]">
              The Autonomous Operations Harness for{" "}
              <span className="text-emerald-700">Indian Freight Brokers.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-5 max-w-[620px] text-[15.5px] leading-[1.65] text-hr-ink-1 sm:text-[17px]">
              Ingest chaotic WhatsApp voice notes in Kannada, Hindi &amp; Hinglish. Protect your{" "}
              <strong className="font-semibold text-hr-ink-strong">₹2,500 profit floor</strong> with
              Type-Safe guardrails. From truck sourcing to FASTag tracking and photo Bilty POD
              settlement—without margin leaks.
            </p>

            {/* Inbound Pilot Trigger Form */}
            <div className="mt-8 w-full max-w-[520px]">
              {submitted ? (
                <div className="rounded-xl border border-emerald-300 bg-emerald-50/90 p-4 font-mono text-[13px] text-emerald-950 shadow-xs">
                  <div className="flex items-center gap-2 font-bold text-emerald-800">
                    <span className="text-base">✓</span>
                    <span>Corridor Pilot Request Registered</span>
                  </div>
                  <div className="mt-1.5 text-[12px] leading-relaxed text-emerald-800">
                    Our Bangalore operations lead will dispatch a demo voice note on WhatsApp (+91 {phoneNumber}) within 15 minutes.
                  </div>
                </div>
              ) : (
                <form 
                  onSubmit={handleSubmit} 
                  className="flex flex-col gap-2.5 sm:flex-row sm:items-stretch sm:gap-0"
                >
                  <div className="flex flex-1 items-center rounded-lg sm:rounded-r-none border border-hr-line bg-white px-3.5 py-3 shadow-xs focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-600/20">
                    <span className="mr-2.5 font-mono text-[13px] font-semibold text-hr-ink-4">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="WhatsApp Mobile Number"
                      className="w-full bg-transparent font-mono text-[13.5px] text-hr-ink-strong outline-none placeholder:text-hr-ink-4"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg sm:rounded-l-none bg-emerald-700 px-6 py-3.5 font-mono text-[12px] font-semibold uppercase tracking-wider text-white shadow-xs transition-all hover:bg-emerald-800 active:scale-[0.99] cursor-pointer"
                  >
                    <span>Request Corridor Pilot</span>
                    <span className="text-emerald-300">→</span>
                  </button>
                </form>
              )}
              <p className="mt-2 text-[12px] font-mono text-hr-ink-4">
                Active on Peenya, Bhiwandi, Hosur &amp; Manesar corridors. Zero app installation required.
              </p>
            </div>

            {/* Fast Stats Row */}
            <div className="mt-10 grid w-full max-w-[520px] grid-cols-3 gap-3 sm:gap-6 border-t border-hr-line/70 pt-6">
              <div>
                <div className="font-mono text-[20px] sm:text-[24px] font-bold text-hr-ink-strong">
                  9 Mins
                </div>
                <div className="mt-0.5 font-mono text-[10.5px] sm:text-[11px] uppercase tracking-wider text-hr-ink-4">
                  Quote Sourcing
                </div>
              </div>
              <div>
                <div className="font-mono text-[20px] sm:text-[24px] font-bold text-emerald-700">
                  ₹2,500
                </div>
                <div className="mt-0.5 font-mono text-[10.5px] sm:text-[11px] uppercase tracking-wider text-hr-ink-4">
                  Min Margin Floor
                </div>
              </div>
              <div>
                <div className="font-mono text-[20px] sm:text-[24px] font-bold text-hr-ink-strong">
                  94.7%
                </div>
                <div className="mt-0.5 font-mono text-[10.5px] sm:text-[11px] uppercase tracking-wider text-hr-ink-4">
                  Vernacular Audio
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Live Interactive Type-Safe Action Card Preview */}
          <div className="w-full max-w-[560px] mx-auto lg:max-w-none lg:col-span-5">
            <div className="rounded-2xl border border-hr-line bg-white/95 p-5 sm:p-6 shadow-xl shadow-stone-900/5 backdrop-blur-xs">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-hr-line pb-3.5 gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="flex h-2.5 w-2.5 shrink-0 rounded-full bg-amber-500 animate-pulse" />
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-hr-ink-strong truncate">
                    HITL Priority Action Queue
                  </span>
                </div>
                <span className="shrink-0 rounded bg-amber-100/90 border border-amber-300/50 px-2 py-0.5 font-mono text-[10px] font-bold text-amber-900">
                  REQUIRES BROKER REVIEW
                </span>
              </div>

              {/* Inquiry Meta Box */}
              <div className="mt-4 rounded-xl border border-hr-line/60 bg-hr-surface-2 p-3.5">
                <div className="flex items-center justify-between font-mono text-[11.5px] text-hr-ink-4">
                  <span className="truncate">RFQ-2026-9812 • Peenya Ind Area</span>
                  <span className="shrink-0 text-emerald-700 font-medium">WhatsApp Voice Note</span>
                </div>
                <div className="mt-2 text-[14px] sm:text-[14.5px] font-semibold text-hr-ink-strong">
                  Bengaluru, KA ➔ Bhiwandi, MH (NH-48)
                </div>
                <div className="mt-1 text-[12px] text-hr-ink-3">
                  32ft Multi-Axle Container (MXL) • 22.0 MT Auto Components
                </div>
              </div>

              {/* Rate Math & Margin Protection Breakdown */}
              <div className="mt-4 space-y-2 font-mono text-[12px] sm:text-[12.5px]">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-hr-ink-3 truncate">Shipper Target Budget:</span>
                  <span className="font-semibold text-hr-ink-strong shrink-0">₹48,000</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-hr-ink-3 truncate">Lowest Carrier Quote (Patel Logistics):</span>
                  <span className="font-semibold text-hr-ink-strong shrink-0">₹46,500</span>
                </div>
                <div className="flex items-center justify-between border-t border-dashed border-hr-line pt-2 text-rose-600">
                  <span className="font-semibold truncate">Calculated Broker Gross Profit:</span>
                  <span className="font-bold shrink-0">₹1,500 (3.1%)</span>
                </div>
              </div>

              {/* Financial Guardrail Alert Box */}
              <div className="mt-3.5 rounded-lg border border-rose-200 bg-rose-50/70 p-3 text-[11.5px] text-rose-900">
                <div className="flex items-center gap-1.5 font-semibold">
                  <span aria-hidden="true">⚠️</span>
                  <span>Financial Guardrail Triggered:</span>
                </div>
                <div className="mt-1 leading-snug text-rose-800">
                  Gross profit ₹1,500 violates your mandatory <strong>₹2,500 floor policy</strong>. Autonomous booking blocked.
                </div>
              </div>

              {/* Recommended 1-Click Action */}
              <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50/70 p-3.5">
                <div className="font-mono text-[10px] font-semibold uppercase tracking-wider text-emerald-800">
                  Recommended Counter-Offer Strategy
                </div>
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-[12.5px] sm:text-[13px] font-bold text-emerald-950">
                    Counter Shipper at ₹49,000 (Locks ₹2,500 Margin)
                  </span>
                </div>
              </div>

              {/* Interactive Broker Decision Buttons */}
              <div className="mt-4">
                {actionStatus ? (
                  <div className="rounded-lg border border-emerald-300 bg-emerald-100/80 p-2.5 text-center font-mono text-[11px] font-bold text-emerald-900">
                    {actionStatus}
                  </div>
                ) : (
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <button
                      type="button"
                      onClick={() => setActionStatus("✓ Approved Counter ₹49K — WhatsApp Dispatched to Shipper")}
                      className="flex-1 rounded-lg bg-emerald-700 py-2.5 px-3 text-center font-mono text-[11px] font-bold uppercase tracking-wider text-white shadow-xs transition-colors hover:bg-emerald-800 cursor-pointer"
                    >
                      ✓ Approve Counter ₹49K
                    </button>
                    <button
                      type="button"
                      onClick={() => setActionStatus("Negotiating Patel Logistics: Counter ₹45,500 Sent")}
                      className="flex-1 rounded-lg border border-hr-line bg-white py-2.5 px-3 text-center font-mono text-[11px] font-semibold uppercase tracking-wider text-hr-ink-strong transition-colors hover:bg-hr-surface-2 cursor-pointer"
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
