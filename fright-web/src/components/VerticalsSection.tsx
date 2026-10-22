"use client";

import React, { useState } from "react";
import { VERTICALS } from "@/data/site-data";

export const VerticalsSection: React.FC = () => {
  const [activeVerticalId, setActiveVerticalId] = useState<string>(VERTICALS[0].id);
  const activeVertical = VERTICALS.find((v) => v.id === activeVerticalId) || VERTICALS[0];

  return (
    <section id="solutions" className="scroll-mt-24 border-t border-hr-line bg-hr-surface-2 py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-5 md:px-12">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.08em] text-emerald-700">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-600"></span>
              Operational Capabilities
            </div>
            <h2 className="font-body text-[32px] font-bold leading-[1.08] tracking-[-0.02em] text-hr-ink-strong md:text-[46px]">
              Engineered for the daily chaos of <span className="text-emerald-700">Indian transport desks.</span>
            </h2>
          </div>
          <p className="max-w-[440px] text-[15px] leading-relaxed text-hr-ink-3">
            Every module addresses a concrete operational bottleneck: unorganized phone calls, pricing disputes, late loading, and lost Bilties.
          </p>
        </div>

        {/* 8 Capability Cards Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {VERTICALS.map((v) => {
            const isSelected = v.id === activeVerticalId;
            return (
              <div
                key={v.id}
                onClick={() => setActiveVerticalId(v.id)}
                className={`cursor-pointer rounded-xl border p-5 transition-all ${
                  isSelected
                    ? "border-emerald-600 bg-white shadow-md ring-2 ring-emerald-600/10"
                    : "border-hr-line bg-white hover:border-emerald-600/40"
                }`}
              >
                <div className="font-body text-[16px] font-bold text-hr-ink-strong">
                  {v.name}
                </div>
                <div className="mt-1 text-[12.5px] leading-snug text-hr-ink-3">
                  {v.tagline}
                </div>
                <ul className="mt-4 space-y-1.5 border-t border-hr-line/60 pt-3 text-[11.5px] text-hr-ink-strong font-mono">
                  {v.workflows.slice(0, 2).map((w, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="text-emerald-600">›</span>
                      <span className="truncate">{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Active Deep Dive Detail Box */}
        <div className="mt-8 rounded-2xl border border-hr-line bg-white p-6 md:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-hr-line pb-4">
            <div>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-emerald-800">
                Capability In Focus
              </span>
              <h3 className="mt-1 text-[22px] font-bold text-hr-ink-strong">
                {activeVertical.name}
              </h3>
            </div>
            <span className="rounded-full bg-emerald-100 px-3 py-1 font-mono text-[11px] font-semibold text-emerald-800 w-fit">
              Deterministic Execution
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeVertical.workflows.map((wf, idx) => (
              <div key={idx} className="flex items-start gap-3 rounded-lg bg-hr-surface p-3.5 border border-hr-line/50">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white font-mono text-[10px] font-bold">
                  {idx + 1}
                </span>
                <span className="text-[13.5px] text-hr-ink-strong font-medium">
                  {wf}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
