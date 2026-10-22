"use client";

import React from "react";

export const CareersSection: React.FC = () => {
  return (
    <section id="why-vahana" className="scroll-mt-24 border-t border-hr-line bg-hr-surface-2">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-5 py-16 md:px-12 md:py-[104px] lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <div>
          <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.08em] text-emerald-700">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-600"></span>
            Built by Freight Operators for Freight Operators
          </div>
          <h2 className="max-w-[22ch] font-body text-[30px] leading-[1.08] tracking-[-0.02em] text-hr-ink-strong md:text-[44px]">
            Why India&apos;s leading logistics brokers run on VahanaAI.
          </h2>
          <p className="mt-5 max-w-[500px] text-[15px] leading-[1.65] text-hr-ink-3">
            Traditional TMS systems treat Indian road transport like a sanitized American railway with spreadsheets and clean APIs. We embrace the messy reality of Indian highways: WhatsApp group chaos, fluctuating diesel rates, driver phone calls, and handwritten Bilties.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                ✓
              </div>
              <div>
                <strong className="text-[14px] text-hr-ink-strong font-semibold">Zero Training Required:</strong>
                <p className="text-[13px] text-hr-ink-3">Your fleet coordinators don&apos;t change their habits. They continue sending voice notes on WhatsApp; VahanaAI parses everything in the background.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                ✓
              </div>
              <div>
                <strong className="text-[14px] text-hr-ink-strong font-semibold">No Margin Leaks Ever:</strong>
                <p className="text-[13px] text-hr-ink-3">The AI engine mathematically enforces your ₹2,500 / 5% margin floor. No dispatcher can accidentally commit below cost.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                ✓
              </div>
              <div>
                <strong className="text-[14px] text-hr-ink-strong font-semibold">You Retain 100% Control:</strong>
                <p className="text-[13px] text-hr-ink-3">High-risk actions, carrier assignments, and counter-offers enter your Broker Action Queue for quick 1-tap confirmation.</p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-700 px-6 py-3 font-mono text-[12px] uppercase tracking-wider text-white shadow-sm hover:bg-emerald-800 transition-colors"
            >
              <span>Schedule Corridor Assessment</span>
              <span>→</span>
            </a>
            <a
              href="#deep-dive"
              className="inline-flex items-center gap-2 rounded-lg border border-hr-line bg-white px-5 py-3 font-mono text-[12px] uppercase tracking-wider text-hr-ink-strong hover:bg-hr-surface transition-colors"
            >
              <span>Explore Architecture</span>
            </a>
          </div>
        </div>

        {/* Feature comparison card */}
        <div className="rounded-2xl border border-hr-line bg-white p-7 shadow-sm">
          <div className="font-mono text-[11px] uppercase tracking-wider text-emerald-800 font-semibold mb-4">
            Dispatch Velocity Comparison
          </div>
          <div className="space-y-4">
            <div className="rounded-xl border border-red-100 bg-red-50/50 p-4">
              <div className="text-[12px] font-mono font-bold text-red-800 uppercase">Legacy Brokerage Workflow</div>
              <ul className="mt-2 space-y-1 text-[12px] text-red-950">
                <li>• 45 mins manually typing quotes across 12 WhatsApp groups</li>
                <li>• Frequent margin calculation errors and toll omission</li>
                <li>• Late night calls chasing drivers for delivery confirmation</li>
                <li>• 3 to 5 days delay waiting for physical POD couriers</li>
              </ul>
            </div>

            <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-4">
              <div className="text-[12px] font-mono font-bold text-emerald-800 uppercase">With VahanaAI Harness</div>
              <ul className="mt-2 space-y-1 text-[12px] text-emerald-950">
                <li>• 9 mins automated sourcing, ranking & carrier match</li>
                <li>• Type-safe ₹2,500 profit floor automatically protected</li>
                <li>• Automated FASTag toll gate milestone notifications</li>
                <li>• Instant Vision OCR on photo POD for same-day settlement</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
