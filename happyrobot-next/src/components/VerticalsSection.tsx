"use client";

import React from "react";
import { VERTICALS } from "@/data/site-data";
import { ArrowUpRight } from "lucide-react";

export const VerticalsSection: React.FC = () => {
  return (
    <section id="verticals" className="scroll-mt-24 bg-hr-surface border-b border-hr-line">
      <div className="mx-auto max-w-[1440px] px-5 pb-12 pt-16 md:px-12 md:pt-[110px]">
        <div className="mb-12 flex flex-wrap items-start justify-between gap-8 md:mb-14 md:gap-10">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-emerald-700 font-bold block mb-2">
              Capabilities
            </span>
            <h2 className="max-w-[20ch] font-body text-[32px] leading-tight tracking-[-0.02em] text-hr-ink-strong md:text-[48px]">
              One Unified Harness. <br />
              <span className="text-emerald-700 font-medium">Every Broker Workflow.</span>
            </h2>
          </div>
          <div className="max-w-[480px]">
            <p className="text-[15.5px] leading-[1.65] text-hr-ink-2">
              Engineered specifically for Indian road transport. Every module enforces strict domain invariants, protects broker profit margins, and eliminates manual follow-up calls.
            </p>
          </div>
        </div>

        {/* 8-Card Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VERTICALS.map((item, index) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl border border-hr-line bg-white hover:border-hr-line-strong hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-hr-ink-4 mb-3 font-mono text-[11px]">
                  <span>0{index + 1}</span>
                  <ArrowUpRight className="w-4 h-4 text-hr-ink-3" />
                </div>
                <h3 className="font-display font-semibold text-[18px] text-hr-ink-strong mb-2">
                  {item.name}
                </h3>
                <p className="text-[13px] text-hr-ink-3 leading-relaxed mb-4">
                  {item.tagline}
                </p>
              </div>

              <div className="border-t border-hr-line/70 pt-3">
                <div className="text-[11px] font-mono uppercase tracking-wider text-hr-ink-4 mb-2">
                  Key Automations
                </div>
                <ul className="space-y-1.5 text-[12px] text-hr-ink-2">
                  {item.workflows.slice(0, 3).map((wf, idx) => (
                    <li key={idx} className="flex items-center gap-1.5 truncate">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span className="truncate">{wf}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
