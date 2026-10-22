"use client";

import React, { useState } from "react";

export const CtaSection: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [corridor, setCorridor] = useState("Bengaluru - Mumbai (NH-48)");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.trim().length >= 10) {
      setSubmitted(true);
    }
  };

  return (
    <div data-mode="light" className="hr-landing font-body text-hr-ink-strong">
      <section id="cta" className="relative scroll-mt-24 overflow-hidden border-t border-hr-line bg-gradient-to-b from-hr-surface via-white to-emerald-50/30">
        <div className="mx-auto max-w-[1440px] px-5 py-20 text-center md:px-12 md:py-[130px]">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-emerald-100/80 px-3.5 py-1 font-mono text-[11px] font-semibold text-emerald-800">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-600 animate-ping"></span>
            Now Accepting High-Volume Corridor Pilots
          </div>

          <h2 className="mx-auto mt-6 max-w-[20ch] font-body text-[34px] font-bold leading-[1.05] text-hr-ink-strong md:text-[56px]">
            Put autonomous agents to work on your <span className="text-emerald-700">freight corridors.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[580px] text-[15.5px] leading-relaxed text-hr-ink-3">
            Deploy VahanaAI in parallel with your current dispatch team in under 48 hours. Connect your existing WhatsApp groups and see instant automated RFQs and margin protection.
          </p>

          {/* WhatsApp Pilot Form */}
          <div className="mx-auto mt-10 max-w-[520px] rounded-2xl border border-hr-line bg-white p-6 shadow-md md:p-8">
            {submitted ? (
              <div className="rounded-xl bg-emerald-50 p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-lg">
                  ✓
                </div>
                <h3 className="mt-3 font-body text-[18px] font-bold text-emerald-950">
                  Pilot Request Received!
                </h3>
                <p className="mt-1 text-[13.5px] text-emerald-800">
                  Our corridor deployment engineer will reach out on WhatsApp to connect your test number within 2 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div>
                  <label className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-hr-ink-strong">
                    WhatsApp Business Mobile Number
                  </label>
                  <div className="mt-1.5 flex rounded-lg border border-hr-line bg-hr-surface px-3 py-2.5 focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-600/20">
                    <span className="font-mono text-[13px] text-hr-ink-4 mr-2">+91</span>
                    <input
                      type="tel"
                      required
                      placeholder="98765 43210"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full bg-transparent font-mono text-[13px] text-hr-ink-strong focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-hr-ink-strong">
                    Primary Freight Corridor
                  </label>
                  <select
                    value={corridor}
                    onChange={(e) => setCorridor(e.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-hr-line bg-hr-surface px-3 py-2.5 font-body text-[13px] text-hr-ink-strong focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
                  >
                    <option>Bengaluru - Mumbai (NH-48)</option>
                    <option>Delhi NCR - Ahmedabad / Mumbai (NH-48)</option>
                    <option>Hyderabad - Chennai (NH-16)</option>
                    <option>Pune - Bhiwandi / JNPT Port</option>
                    <option>Kolkata - Raipur / Nagpur</option>
                    <option>Other Interstate Industrial Corridors</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-emerald-700 py-3 font-mono text-[12px] font-bold uppercase tracking-wider text-white shadow hover:bg-emerald-800 transition-colors"
                >
                  Request WhatsApp Corridor Pilot
                </button>

                <p className="text-center font-mono text-[10px] text-hr-ink-4">
                  Free 14-day parallel corridor test • No credit card or software install required
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
