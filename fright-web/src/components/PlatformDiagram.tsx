"use client";

import React from "react";

export const PlatformDiagram: React.FC = () => {
  return (
    <section id="platform" className="scroll-mt-24 border-t border-hr-line bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-5 md:px-12">
        <div className="mb-12 md:mb-16">
          <div className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.08em] text-emerald-700">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-600"></span>
            System Architecture
          </div>
          <h2 className="max-w-[24ch] font-body text-[32px] font-bold leading-[1.08] tracking-[-0.02em] text-hr-ink-strong md:text-[46px]">
            The 4-Stage Autonomous <span className="text-emerald-700">Freight Pipeline.</span>
          </h2>
          <p className="mt-4 max-w-[620px] text-[15px] leading-relaxed text-hr-ink-3">
            How unstructured Indian freight conversations are converted into verified, executed, and settled trips with deterministic safety.
          </p>
        </div>

        {/* 4 Pipeline Stages */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Stage 1 */}
          <div className="rounded-xl border border-hr-line bg-hr-surface p-6">
            <div className="font-mono text-[11px] font-bold text-emerald-700">STAGE 01</div>
            <h3 className="mt-2 text-[17px] font-bold text-hr-ink-strong">Vernacular Audio Ingestion</h3>
            <p className="mt-2 text-[13px] text-hr-ink-3 leading-relaxed">
              Accepts 15-second WhatsApp voice notes with highway truck engine noise. Normalizes Kannada (ಕನ್ನಡ), Hindi & Hinglish into typed RFQ Pydantic schemas.
            </p>
            <div className="mt-4 pt-3 border-t border-hr-line/70 font-mono text-[11px] text-hr-ink-4">
              Output: Structured Load Ingestion
            </div>
          </div>

          {/* Stage 2 */}
          <div className="rounded-xl border border-hr-line bg-hr-surface p-6">
            <div className="font-mono text-[11px] font-bold text-emerald-700">STAGE 02</div>
            <h3 className="mt-2 text-[17px] font-bold text-hr-ink-strong">Deterministic FSM</h3>
            <p className="mt-2 text-[13px] text-hr-ink-3 leading-relaxed">
              Enforces a strict 9-state finite state machine. Prevents booking confirmations without driver assignment, loading slips, or verified E-Way bills.
            </p>
            <div className="mt-4 pt-3 border-t border-hr-line/70 font-mono text-[11px] text-hr-ink-4">
              Status: DRAFT ➔ DISPATCHED
            </div>
          </div>

          {/* Stage 3 */}
          <div className="rounded-xl border border-emerald-300 bg-emerald-50/40 p-6 ring-1 ring-emerald-500/10">
            <div className="font-mono text-[11px] font-bold text-emerald-800">STAGE 03</div>
            <h3 className="mt-2 text-[17px] font-bold text-emerald-950">Financial & VAHAN Guardrails</h3>
            <p className="mt-2 text-[13px] text-emerald-900 leading-relaxed">
              Mathematical ₹2,500 absolute margin floor interlock. VAHAN RC vehicle status validation, insurance check, and 70% advance loading payment cap.
            </p>
            <div className="mt-4 pt-3 border-t border-emerald-200 font-mono text-[11px] text-emerald-800 font-medium">
              Zero Margin Leakage
            </div>
          </div>

          {/* Stage 4 */}
          <div className="rounded-xl border border-hr-line bg-hr-surface p-6">
            <div className="font-mono text-[11px] font-bold text-emerald-700">STAGE 04</div>
            <h3 className="mt-2 text-[17px] font-bold text-hr-ink-strong">Broker HITL & Vision POD</h3>
            <p className="mt-2 text-[13px] text-hr-ink-3 leading-relaxed">
              Priority Action Queue packages pricing exceptions for 1-click counter-offers. Multimodal vision agent inspects physical rubber-stamped POD photos.
            </p>
            <div className="mt-4 pt-3 border-t border-hr-line/70 font-mono text-[11px] text-hr-ink-4">
              Output: Same-Day Settlement
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
