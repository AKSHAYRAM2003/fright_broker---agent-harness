"use client";

import React from "react";
import { ArrowRight, Bot, ShieldCheck, Cpu, UserCheck } from "lucide-react";

export const PlatformDiagram: React.FC = () => {
  return (
    <div data-mode="light" className="hr-landing font-body text-hr-ink-strong" id="platform-diagram">
      <section className="scroll-mt-24 border-t border-[#dad5cc] bg-white py-20 md:py-[130px]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-14 px-5 md:px-12 lg:grid-cols-[0.85fr_1fr] lg:gap-20">
          
          {/* Left Column: Key Features */}
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-emerald-700 font-bold block mb-3">
              Core Architecture
            </span>
            <h2 className="font-body text-[32px] leading-[1.08] tracking-[-0.02em] text-hr-ink-strong md:text-[48px]">
              Why Generic LLMs Fail. <br />
              <span className="text-hr-ink-3">Why You Need a Harness.</span>
            </h2>
            <p className="mt-4 text-[16px] leading-[1.6] text-hr-ink-2 max-w-[500px]">
              If a generic AI bot misquotes ₹40,000 instead of ₹48,000 on a 16-tonner, the broker loses cash out of pocket. VahanaAI wraps probabilistic AI inside an unbreakable deterministic harness.
            </p>

            <div className="mt-10 flex flex-col border-t border-hr-line">
              {/* Item 1 */}
              <div className="border-b border-hr-line py-5 flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-1">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-body font-semibold text-[16px] text-hr-ink-strong">
                    1. Vernacular Ingestion &amp; Noise Filtering
                  </div>
                  <p className="mt-1 max-w-[42ch] text-[13.5px] leading-[1.6] text-hr-ink-3">
                    Highway background diesel rumble filtering with native parsing across Kannada, Hindi, Kanglish, and transport jargon (tauras, chakka, mamool).
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="border-b border-hr-line py-5 flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-1">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-body font-semibold text-[16px] text-hr-ink-strong">
                    2. Deterministic State Machine (FSM)
                  </div>
                  <p className="mt-1 max-w-[42ch] text-[13.5px] leading-[1.6] text-hr-ink-3">
                    Loads follow strict life-of-a-load invariants. An inquiry can never advance to in-transit without driver assignment and VAHAN compliance.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="border-b border-hr-line py-5 flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-1">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-body font-semibold text-[16px] text-hr-ink-strong">
                    3. Hard Margin Guardrail (Floor Engine)
                  </div>
                  <p className="mt-1 max-w-[42ch] text-[13.5px] leading-[1.6] text-hr-ink-3">
                    Any quote leaving less than ₹2,500 or 5% broker profit is physically blocked from booking, triggering an automatic counter-bid strategy.
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="border-b border-hr-line py-5 flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-1">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-body font-semibold text-[16px] text-hr-ink-strong">
                    4. Human-in-the-Loop Action Queue
                  </div>
                  <p className="mt-1 max-w-[42ch] text-[13.5px] leading-[1.6] text-hr-ink-3">
                    High-stakes financial commitments are surfaced as prioritized 1-click decision cards. The broker remains in 100% control of their money.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Architecture Flow Box */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-[500px] rounded-2xl border border-hr-line bg-hr-surface-2 p-6 shadow-md">
              <div className="font-mono text-[11px] uppercase tracking-wider text-hr-ink-4 mb-4">
                System Execution Architecture
              </div>

              {/* Stage Flow Nodes */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl border border-hr-line bg-white shadow-2xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] font-mono text-emerald-700 font-bold">01 INTAKE</span>
                    <span className="text-[11px] bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded border border-emerald-200">Multilingual</span>
                  </div>
                  <div className="text-[13.5px] font-semibold text-hr-ink-strong mt-1">WhatsApp &amp; Voice Note Ingestion</div>
                  <div className="text-[12px] text-hr-ink-3 mt-0.5">Extracts Origin, Destination, Tonnage &amp; Truck Class</div>
                </div>

                <div className="flex justify-center">
                  <span className="text-hr-ink-4 text-[14px]">↓</span>
                </div>

                <div className="p-3.5 rounded-xl border border-hr-line bg-white shadow-2xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] font-mono text-indigo-700 font-bold">02 SOURCING</span>
                    <span className="text-[11px] bg-indigo-50 text-indigo-800 px-2 py-0.5 rounded border border-indigo-200">Lane Memory</span>
                  </div>
                  <div className="text-[13.5px] font-semibold text-hr-ink-strong mt-1">Autonomous Carrier RFQ Dispatch</div>
                  <div className="text-[12px] text-hr-ink-3 mt-0.5">Pings top 3-5 verified lane specialists on WhatsApp</div>
                </div>

                <div className="flex justify-center">
                  <span className="text-hr-ink-4 text-[14px]">↓</span>
                </div>

                <div className="p-3.5 rounded-xl border border-emerald-400 bg-emerald-50/70 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] font-mono text-emerald-800 font-bold">03 GUARDRAIL &amp; HITL</span>
                    <span className="text-[11px] bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded font-bold">Safe Floor</span>
                  </div>
                  <div className="text-[13.5px] font-bold text-emerald-950 mt-1">Broker Action Queue Decision</div>
                  <div className="text-[12px] text-emerald-800 mt-0.5">Enforces ₹2,500 margin floor &amp; VAHAN compliance check</div>
                </div>

                <div className="flex justify-center">
                  <span className="text-hr-ink-4 text-[14px]">↓</span>
                </div>

                <div className="p-3.5 rounded-xl border border-hr-line bg-white shadow-2xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] font-mono text-neutral-700 font-bold">04 CLOSURE</span>
                    <span className="text-[11px] bg-neutral-100 text-neutral-800 px-2 py-0.5 rounded border border-neutral-300">Vision OCR</span>
                  </div>
                  <div className="text-[13.5px] font-semibold text-hr-ink-strong mt-1">FASTag Tracking &amp; POD Verification</div>
                  <div className="text-[12px] text-hr-ink-3 mt-0.5">Automated settlement of 70% advance &amp; balance on clean POD</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
