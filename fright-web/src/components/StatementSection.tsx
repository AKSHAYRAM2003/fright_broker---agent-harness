"use client";

import React from "react";

export const StatementSection: React.FC = () => {
  return (
    <section className="border-b border-hr-line bg-gradient-to-b from-white to-[#f7f6f4] py-20 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-12">
        <div className="max-w-[1000px]">
          <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-emerald-800 font-semibold">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-600"></span>
            The Reality of India&apos;s ₹10 Lakh Crore Road Freight Economy
          </div>

          <h2 className="font-body text-[28px] font-bold leading-[1.2] tracking-[-0.02em] text-hr-ink-strong md:text-[42px] lg:text-[46px]">
            90% of India&apos;s 1.2 crore commercial trucks are owned by small operators with under 5 vehicles. You cannot run this market with rigid web forms or hallucinating chatbots.
          </h2>

          <p className="mt-8 text-[16px] leading-[1.7] text-hr-ink-3 md:text-[18px]">
            Generic LLMs invent rates, miscalculate highway toll fees, and miss street logistics slang like <em>chakka</em>, <em>tauras</em>, or <em>mamool</em>. VahanaAI combines multilingual voice understanding with <strong>deterministic finite-state machines (FSM)</strong> and <strong>mathematical margin guardrails</strong>. Every freight inquiry is type-checked, every carrier quote is audited, and every profit margin is safeguarded before a single booking slip is generated.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-8 border-t border-hr-line pt-6 text-[13px] font-mono text-hr-ink-4">
            <div className="flex items-center gap-2">
              <span className="text-emerald-700 font-bold">✓</span>
              <span>Zero LLM Hallucinated Rates</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-700 font-bold">✓</span>
              <span>100% Deterministic State Machine</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-700 font-bold">✓</span>
              <span>Mathematical Margin Guardrails</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
