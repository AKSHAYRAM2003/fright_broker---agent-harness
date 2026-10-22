"use client";

import React from "react";
import { ShieldCheck, Zap, AlertTriangle, CheckCircle2 } from "lucide-react";

export const SuperintelligenceSection: React.FC = () => {
  return (
    <section className="border-t border-hr-line bg-white py-16 md:py-[120px]" id="deep-dive">
      <div className="mx-auto max-w-[1440px] px-5 md:px-12">
        <div className="mb-12 flex flex-wrap items-start justify-between gap-8 md:mb-14 md:gap-10">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-emerald-700 font-bold block mb-2">
              The Technology Moat
            </span>
            <h2 className="font-body text-[32px] leading-tight tracking-[-0.02em] text-hr-ink-strong md:text-[46px]">
              Type-Safe Autonomy vs. <br />
              <span className="text-hr-ink-3">Brittle WhatsApp Chatbots</span>
            </h2>
          </div>
          <div className="max-w-[460px]">
            <p className="text-[15.5px] leading-[1.65] text-hr-ink-2">
              Generic chatbot tools make catastrophic pricing mistakes and crash on noisy voice notes. VahanaAI interposes deterministic math gates and state verification before every real-world action.
            </p>
          </div>
        </div>

        {/* Side-by-Side Comparison Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: The Generic Chatbot / Naive AI (Bad) */}
          <div className="p-8 rounded-2xl border border-rose-200 bg-rose-50/40">
            <div className="flex items-center gap-2 text-rose-700 font-mono text-[12px] uppercase tracking-wider font-bold mb-3">
              <AlertTriangle className="w-4 h-4" /> Generic LLMs &amp; Basic Chatbots
            </div>
            <h3 className="font-display text-[22px] font-bold text-rose-950 mb-3">
              Why Naive AI Loses Brokers Money
            </h3>
            <ul className="space-y-3.5 text-[14px] text-rose-900/80">
              <li className="flex items-start gap-2.5">
                <span className="text-rose-600 font-bold shrink-0">✕</span>
                <span><strong>Rate Hallucination:</strong> Promises ₹40k when market rate is ₹48k, burning broker commission out of pocket.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-600 font-bold shrink-0">✕</span>
                <span><strong>No Regulatory Check:</strong> Books trucks with expired fitness certificates or missing National Permits.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-600 font-bold shrink-0">✕</span>
                <span><strong>Language Breakdown:</strong> Fails completely on road noise, Kannada script numerals (೧೬ ಟನ್), or Hinglish slang.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-600 font-bold shrink-0">✕</span>
                <span><strong>Spam Banning:</strong> Blasts 50 WhatsApp contacts at once, getting the broker’s primary business number banned by Meta.</span>
              </li>
            </ul>
          </div>

          {/* Right: The VahanaAI Harness (Good) */}
          <div className="p-8 rounded-2xl border border-emerald-300 bg-emerald-50/50 shadow-sm">
            <div className="flex items-center gap-2 text-emerald-800 font-mono text-[12px] uppercase tracking-wider font-bold mb-3">
              <ShieldCheck className="w-4 h-4 text-emerald-700" /> VahanaAI Operations Harness
            </div>
            <h3 className="font-display text-[22px] font-bold text-emerald-950 mb-3">
              Deterministic, Guaranteed Execution
            </h3>
            <ul className="space-y-3.5 text-[14px] text-emerald-950">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Hard Margin Guardrails:</strong> Automatic ₹2,500 or 5% profit floor calculation. Impossible to finalize a loss.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Government VAHAN Gate:</strong> Automatically verifies RC, fitness, national permit, and tonnage match before dispatch.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Street-Tested Vernacular:</strong> 100% benchmark accuracy across Kannada, Kanglish, Hindi, Hinglish, and English.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Human-in-the-Loop Action Queue:</strong> Prioritized cards with 1-click approvals keeping the broker in 100% control.</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};
