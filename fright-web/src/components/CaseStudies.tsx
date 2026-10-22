"use client";

import React, { useState } from "react";
import { CASE_STUDIES } from "@/data/site-data";

export const CaseStudies: React.FC = () => {
  const [activeCase, setActiveCase] = useState<string>(CASE_STUDIES[0].id);
  const current = CASE_STUDIES.find((c) => c.id === activeCase) || CASE_STUDIES[0];

  return (
    <section id="case-studies" className="scroll-mt-24 border-t border-hr-line bg-hr-surface">
      <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-12 md:py-[120px]">
        {/* Header */}
        <div className="mb-12 flex flex-wrap items-end justify-between gap-8 md:mb-16 md:gap-10">
          <div>
            <div className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.08em] text-emerald-700">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-600"></span>
              Field Proven Across Indian Freight Corridors
            </div>
            <h2 className="font-body text-[32px] leading-[1.08] tracking-[-0.02em] text-hr-ink-strong md:text-[46px]">
              Battle-tested where <span className="text-emerald-700">reality is messy.</span>
            </h2>
          </div>
          <p className="max-w-[460px] text-[15px] leading-[1.65] text-hr-ink-3">
            Real brokers running high-stakes interstate freight on NH-48, NH-44, and NH-16. From handwritten Bilties to Hindi voice notes, see how VahanaAI protects margins and accelerates dispatches.
          </p>
        </div>

        {/* 3 Case Study Preview Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {CASE_STUDIES.map((item) => {
            const isSelected = item.id === activeCase;
            return (
              <div
                key={item.id}
                onClick={() => setActiveCase(item.id)}
                className={`group cursor-pointer rounded-xl border p-6 transition-all duration-300 ${
                  isSelected
                    ? "border-emerald-600 bg-white shadow-lg shadow-emerald-950/5 ring-2 ring-emerald-600/20"
                    : "border-hr-line bg-hr-surface-2 hover:border-hr-stone hover:bg-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-hr-ink-4">
                    {item.company.split("(")[0]}
                  </span>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 font-mono text-[12px] font-bold text-emerald-700">
                    {item.metric}
                  </span>
                </div>

                <h3 className="mt-4 font-body text-[19px] font-semibold leading-[1.25] text-hr-ink-strong group-hover:text-emerald-800">
                  {item.highlight}
                </h3>

                <p className="mt-3 line-clamp-3 text-[13.5px] leading-[1.55] text-hr-ink-3">
                  {item.summary}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5 pt-4 border-t border-hr-line/60">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-hr-cell px-2 py-0.5 font-mono text-[10px] text-hr-ink-strong"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Deep Dive Narrative & Verified Quote */}
        <div className="mt-10 rounded-2xl border border-hr-line bg-gradient-to-br from-white via-hr-surface to-emerald-50/20 p-8 md:p-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100/80 px-3 py-1 font-mono text-[11px] font-medium text-emerald-800">
                <span>Verified Brokerage Case Study</span>
                <span>•</span>
                <span>{current.company}</span>
              </div>

              <blockquote className="mt-6 text-[18px] md:text-[22px] font-normal leading-[1.4] text-hr-ink-strong italic">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-700 font-mono text-[14px] font-bold text-white shadow-sm">
                  {current.author.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="font-body text-[15px] font-semibold text-hr-ink-strong">
                    {current.author}
                  </div>
                  <div className="text-[13px] text-hr-ink-4">
                    {current.role}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-hr-line/80 bg-white p-6 shadow-sm md:col-span-4">
              <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-hr-ink-4">
                Operational Outcome
              </div>
              <div className="mt-2 font-display text-[44px] leading-none text-emerald-700">
                {current.metric}
              </div>
              <div className="mt-2 text-[14px] font-medium text-hr-ink-strong">
                {current.highlight}
              </div>
              <div className="mt-4 pt-4 border-t border-hr-line text-[12.5px] leading-relaxed text-hr-ink-3">
                {current.summary}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
