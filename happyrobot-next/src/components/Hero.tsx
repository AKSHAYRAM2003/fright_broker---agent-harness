"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export const Hero: React.FC = () => {
  const [contactInput, setContactInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactInput.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="relative min-h-[720px] overflow-hidden bg-hr-surface pt-28 pb-16 md:pt-36 md:pb-24 border-b border-hr-line">
      {/* Subtle light background grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(#dad5cc 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16">
          
          {/* Left Column: Hero Text & Slogan */}
          <div className="flex-1 max-w-[760px]">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-hr-line bg-hr-surface-2 text-[12px] font-mono uppercase tracking-[0.06em] text-hr-ink-strong mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Domain-Specific Agent Harness for Indian Logistics</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-[42px] leading-[1.02] tracking-[-0.04em] text-hr-ink-strong md:text-[68px] lg:text-[76px]">
              Turn Chaotic Freight Chats into <span className="underline decoration-emerald-500/40 underline-offset-8">High-Margin</span> Bookings.
            </h1>

            {/* Subheading */}
            <p className="mt-6 max-w-[580px] text-[17px] leading-[1.65] text-hr-ink-1">
              Stop drowning in 500 WhatsApp messages, lost bilties, and rate calculation errors. 
              <strong> VahanaAI</strong> gives SME transport brokers an autonomous back-office copilot—extracting messy Hinglish &amp; Kannada voice notes, enforcing a ₹2,500 margin floor, and verifying VAHAN compliance before every dispatch.
            </p>

            {/* Quick Feature Badges */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-[13px] text-hr-ink-3">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> WhatsApp Native (Zero App Installs)
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" /> ₹0 Margin Hallucination Guarantee
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-600" /> Kannada, Hindi &amp; Hinglish Voice
              </span>
            </div>

            {/* Pilot Signup Form */}
            <div className="mt-8">
              {submitted ? (
                <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-[14px] flex items-center gap-2 max-w-[480px]">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Thank you! Our transport operations lead will reach out on WhatsApp within 15 minutes.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="max-w-[520px]">
                  <div className="flex flex-col sm:flex-row sm:items-stretch gap-2 sm:gap-0 shadow-sm rounded-lg overflow-hidden border border-hr-line-strong bg-white">
                    <input
                      type="text"
                      required
                      value={contactInput}
                      onChange={(e) => setContactInput(e.target.value)}
                      placeholder="Enter WhatsApp number or company email"
                      className="min-w-0 flex-1 px-4 py-3.5 text-[14px] text-hr-ink-strong outline-none placeholder:text-hr-ink-4 bg-transparent"
                    />
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center font-body text-[12px] uppercase tracking-[0.1em] font-semibold bg-hr-cta-solid-bg text-hr-cta-solid-fg px-6 py-3.5 hover:bg-neutral-800 transition-colors shrink-0 gap-2 cursor-pointer"
                    >
                      <span>Book Live Pilot</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="mt-2 text-[12px] text-hr-ink-4">
                    Pilot with 3-5 real shipments. No credit card or software installation required.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Interactive Card Preview of the Type-Safe Decision Card */}
          <div className="flex-1 max-w-[560px]">
            <div className="relative rounded-2xl border border-hr-line bg-white/95 p-6 shadow-xl backdrop-blur-md">
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-hr-line pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="font-mono text-[11px] uppercase tracking-wider text-hr-ink-2">Live Action Queue</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300">
                    Safe Margin (+₹7,000)
                  </span>
                </div>
                <span className="text-[12px] font-mono text-hr-ink-4">Load #BLR-BHW-1042</span>
              </div>

              {/* Route & Cargo Specs */}
              <div className="mt-4 flex items-center justify-between text-[13.5px]">
                <div>
                  <div className="font-semibold text-hr-ink-strong">Peenya, Bengaluru ➔ Bhiwandi, MH</div>
                  <div className="text-[12px] text-hr-ink-3">14 MT Pharma Cartons • 32ft MXL Container</div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] uppercase tracking-wider text-hr-ink-4">Shipper Budget</div>
                  <div className="font-bold text-[15px] text-hr-ink-strong">₹52,000.00</div>
                </div>
              </div>

              {/* Sourced Bids Comparison */}
              <div className="mt-4 space-y-2">
                <div className="p-3 rounded-lg border border-emerald-500/40 bg-emerald-50/50 flex items-center justify-between">
                  <div>
                    <div className="text-[13px] font-semibold text-emerald-950 flex items-center gap-1.5">
                      <span>Karnataka-Maharashtra Freightways</span>
                      <span className="text-[10px] font-bold px-1.5 py-0.2 bg-emerald-200 text-emerald-800 rounded">Best Bid</span>
                    </div>
                    <div className="text-[11.5px] text-emerald-800">₹44,500 freight + ₹500 loading mamool • 4.8★ rating</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-emerald-900 text-[14px]">₹45,000.00</div>
                    <div className="text-[11px] font-medium text-emerald-700">+₹7,000 Margin (13.5%)</div>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg border border-hr-line bg-hr-surface-2 flex items-center justify-between opacity-75 text-[12px]">
                  <div>
                    <span className="font-medium text-hr-ink-strong">Sharma Road Carriers</span>
                    <span className="text-hr-ink-4 ml-1.5">₹46,000 (Tolls included)</span>
                  </div>
                  <span className="text-hr-ink-3">+₹6,000 Margin</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 pt-4 border-t border-hr-line flex items-center justify-between gap-3">
                <div className="text-[11.5px] text-hr-ink-3 font-mono">
                  VAHAN Permit: <span className="text-emerald-600 font-semibold">Active ✅</span>
                </div>
                <button
                  type="button"
                  className="px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-[12px] font-semibold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
                >
                  1-Click Confirm Booking
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
