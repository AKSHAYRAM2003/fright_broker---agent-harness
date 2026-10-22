"use client";

import React from "react";

export const SuperintelligenceSection: React.FC = () => {
  return (
    <section className="border-t border-hr-line bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-5 md:px-12">
        <div className="mb-12 max-w-[800px]">
          <div className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.08em] text-emerald-700">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-600"></span>
            Deterministic Safety vs Generic LLMs
          </div>
          <h2 className="font-body text-[32px] font-bold leading-[1.08] tracking-[-0.02em] text-hr-ink-strong md:text-[46px]">
            Why standard chatbots fail on <span className="text-emerald-700">freight corridors.</span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-hr-ink-3">
            In freight brokerage, an AI error is not a typo—it is a ₹25,000 lost margin or a stolen container. Here is how VahanaAI protects your business.
          </p>
        </div>

        {/* Side-by-Side Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Failure Modes: Unconstrained Chatbots */}
          <div className="rounded-2xl border border-red-200 bg-red-50/40 p-7">
            <div className="flex items-center gap-2 font-mono text-[12px] font-bold uppercase tracking-wider text-red-800">
              <span>✕</span>
              <span>Generic Prompt-Engineered Chatbots</span>
            </div>

            <ul className="mt-6 space-y-4 text-[13.5px] text-red-950">
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 font-bold shrink-0">•</span>
                <span><strong>Hallucinates Pricing:</strong> Agrees to unviable quotes without cross-referencing diesel rates, axle load permits, or toll plaza expenses.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 font-bold shrink-0">•</span>
                <span><strong>No Profit Floors:</strong> Concludes loads below the broker&apos;s cost floor, destroying profitability on high-volume lanes.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 font-bold shrink-0">•</span>
                <span><strong>Unchecked Commitments:</strong> Books unverified carriers without checking VAHAN RC status, fitness validity, or blacklists.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 font-bold shrink-0">•</span>
                <span><strong>Zero Accountability:</strong> No audit trail or state machine to reconstruct what went wrong when a shipment is delayed.</span>
              </li>
            </ul>
          </div>

          {/* Solution: VahanaAI Type-Safe Harness */}
          <div className="rounded-2xl border border-emerald-300 bg-emerald-50/50 p-7 ring-1 ring-emerald-500/20">
            <div className="flex items-center gap-2 font-mono text-[12px] font-bold uppercase tracking-wider text-emerald-800">
              <span>✓</span>
              <span>The VahanaAI Type-Safe Harness</span>
            </div>

            <ul className="mt-6 space-y-4 text-[13.5px] text-emerald-950">
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold shrink-0">✓</span>
                <span><strong>Deterministic Margin Guardrail:</strong> Mathematical floor enforcement (₹2,500 / 5%). Unprofitable quotes cannot proceed without human approval.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold shrink-0">✓</span>
                <span><strong>Government Gateway Interlock:</strong> Live MoRTH VAHAN & Sarathi checks automatically block blacklisted or unfitness-certified trucks.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold shrink-0">✓</span>
                <span><strong>Priority Action Queue:</strong> Unresolvable edge cases automatically surface as 1-click decision cards on the broker&apos;s desk.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold shrink-0">✓</span>
                <span><strong>Multi-Modal Vision POD OCR:</strong> Photos of physical rubber-stamped Bilties are inspected before triggering final 30% carrier balance payouts.</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};
