"use client";

import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-hr-line bg-white text-hr-ink-4">
      <div className="mx-auto max-w-[1440px] px-5 py-12 md:px-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr]">
          {/* Brand Col */}
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-700 text-white font-mono font-bold text-sm">
                V
              </span>
              <span className="font-body text-[20px] font-bold text-hr-ink-strong tracking-tight">
                Vahana<span className="text-emerald-700">AI</span>
              </span>
            </div>
            <p className="mt-4 text-[13.5px] leading-relaxed text-hr-ink-3 max-w-[280px]">
              The autonomous AI operations harness for Indian road freight brokerages. Type-safe decision making from WhatsApp voice notes to FASTag delivery settlement.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-600"></span>
              <span className="font-mono text-[11px] text-emerald-800">
                Operating on NH-48, NH-44 & Golden Quadrilateral
              </span>
            </div>
          </div>

          {/* Product */}
          <div>
            <div className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-wider text-hr-ink-strong">
              Harness
            </div>
            <ul className="space-y-2.5 text-[13.5px]">
              <li><a href="#platform" className="hover:text-emerald-700 transition-colors">Vernacular Intake Agent</a></li>
              <li><a href="#platform" className="hover:text-emerald-700 transition-colors">FSM Trip State Machine</a></li>
              <li><a href="#deep-dive" className="hover:text-emerald-700 transition-colors">₹2,500 Margin Guardrail</a></li>
              <li><a href="#deep-dive" className="hover:text-emerald-700 transition-colors">Broker Action Queue</a></li>
              <li><a href="#deep-dive" className="hover:text-emerald-700 transition-colors">Vision POD OCR</a></li>
            </ul>
          </div>

          {/* Corridors */}
          <div>
            <div className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-wider text-hr-ink-strong">
              Corridors
            </div>
            <ul className="space-y-2.5 text-[13.5px]">
              <li><span className="text-hr-ink-3">Bengaluru ➔ Mumbai</span></li>
              <li><span className="text-hr-ink-3">Delhi NCR ➔ Ahmedabad</span></li>
              <li><span className="text-hr-ink-3">Hyderabad ➔ Chennai</span></li>
              <li><span className="text-hr-ink-3">Pune ➔ JNPT Port</span></li>
              <li><span className="text-hr-ink-3">Kolkata ➔ Raipur</span></li>
            </ul>
          </div>

          {/* Compliance & Gateways */}
          <div>
            <div className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-wider text-hr-ink-strong">
              Gateways
            </div>
            <ul className="space-y-2.5 text-[13.5px]">
              <li><span className="text-hr-ink-3">ULIP (Logistics Data Bank)</span></li>
              <li><span className="text-hr-ink-3">VAHAN & Sarathi MoRTH</span></li>
              <li><span className="text-hr-ink-3">FASTag National Tolling</span></li>
              <li><span className="text-hr-ink-3">GST E-Way Bill System</span></li>
              <li><span className="text-hr-ink-3">WhatsApp Cloud API</span></li>
            </ul>
          </div>

          {/* Contact & Regional Desks */}
          <div>
            <div className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-wider text-hr-ink-strong">
              Hubballi & Bengaluru
            </div>
            <p className="text-[13px] leading-relaxed text-hr-ink-3">
              Indiranagar, Bengaluru, Karnataka 560038<br />
              Peenya Industrial Area Logistics Desk<br />
              support@vahanai.in
            </p>
            <div className="mt-4">
              <a
                href="#cta"
                className="inline-block rounded-md bg-emerald-50 border border-emerald-200 px-3 py-1.5 font-mono text-[11px] font-semibold text-emerald-800 hover:bg-emerald-100 transition-colors"
              >
                Request Corridor Access
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-hr-line pt-6 text-[12px] text-hr-ink-4">
          <div>
            © 2026 VahanaAI Technologies Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="font-mono text-[11px]">DPDP Act 2023 Compliant</span>
            <span className="font-mono text-[11px]">ISO 27001 Certified</span>
            <span className="font-mono text-[11px]">MoRTH / ULIP Registered</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
