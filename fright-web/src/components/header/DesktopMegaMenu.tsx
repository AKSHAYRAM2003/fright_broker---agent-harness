import React from "react";

/**
 * Desktop Mega Menu Component
 * Contains the two large dropdown panels customized for Indian Freight Brokerage Harness:
 * 1. #panel-platform: Harness architecture (Voice Ingestion, Deterministic Guardrails, Freight Context, HITL Queue)
 * 2. #panel-solutions: Corridors & Fleet types, plus Operations Workflows
 */
export const DesktopMegaMenu: React.FC = () => {
  return (
    <div
      className="absolute inset-x-0 top-full overflow-hidden bg-white/98 border-b border-hr-line shadow-2xl backdrop-blur-xl transition-all duration-300 ease-out z-[55]"
      id="desktop-mega-menu"
      style={{
        maxHeight: "0",
        opacity: "0",
        pointerEvents: "none",
      }}
    >
      {/* ---------------- PANEL 1: HARNESS ARCHITECTURE ---------------- */}
      <div
        className="inset-x-0 top-0 transition-opacity duration-300 pointer-events-none opacity-0"
        id="panel-platform"
      >
        <div className="mx-auto max-w-[1440px] px-5 py-10 md:px-12">
          {/* Main harness overview link */}
          <a
            className="group mb-8 flex items-center gap-3 border-b border-hr-line-strong pb-5 no-underline"
            href="#platform"
          >
            <span className="relative font-body text-[20px] leading-none tracking-[-0.01em] text-hr-ink-strong">
              Harness Architecture Overview
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:origin-left group-hover:scale-x-100"
              />
            </span>
            <span
              aria-hidden="true"
              className="text-hr-ink-strong transition-transform duration-300 group-hover:translate-x-0.5"
            >
              →
            </span>
          </a>

          <div className="flex gap-12">
            {/* Left grid of 4 core pillars */}
            <div className="grid flex-1 grid-cols-4 gap-x-10 gap-y-8">
              
              {/* Pillar 1: Voice & Ingestion */}
              <div>
                <a
                  className="group flex w-full items-center gap-2 no-underline"
                  href="#platform"
                >
                  <span className="relative font-body text-[15px] normal-case tracking-[0.01em] text-hr-ink-strong">
                    Voice &amp; Ingestion
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:origin-left group-hover:scale-x-100"
                    />
                  </span>
                </a>
                <p className="mt-1.5 font-body text-[12.5px] normal-case leading-snug tracking-normal text-hr-ink-4">
                  Multilingual WhatsApp voice parser
                </p>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  <a
                    className="hr-chip-draw relative border border-hr-line px-2.5 py-1 font-body text-[11.5px] normal-case tracking-normal text-hr-ink-2 no-underline transition-colors hover:text-hr-ink-strong"
                    href="#platform"
                  >
                    Kannada &amp; Hindi ASR
                  </a>
                  <a
                    className="hr-chip-draw relative border border-hr-line px-2.5 py-1 font-body text-[11.5px] normal-case tracking-normal text-hr-ink-2 no-underline transition-colors hover:text-hr-ink-strong"
                    href="#platform"
                  >
                    Audio Ingestion
                  </a>
                  <a
                    className="hr-chip-draw relative border border-hr-line px-2.5 py-1 font-body text-[11.5px] normal-case tracking-normal text-hr-ink-2 no-underline transition-colors hover:text-hr-ink-strong"
                    href="#platform"
                  >
                    NER Rate Parser
                  </a>
                </div>
              </div>

              {/* Pillar 2: Deterministic Guardrails */}
              <div>
                <a
                  className="group flex w-full items-center gap-2 no-underline"
                  href="#platform"
                >
                  <span className="relative font-body text-[15px] normal-case tracking-[0.01em] text-hr-ink-strong">
                    Deterministic Guardrails
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:origin-left group-hover:scale-x-100"
                    />
                  </span>
                </a>
                <p className="mt-1.5 font-body text-[12.5px] normal-case leading-snug tracking-normal text-hr-ink-4">
                  Margin protection &amp; policies
                </p>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  <a
                    className="hr-chip-draw relative border border-hr-line px-2.5 py-1 font-body text-[11.5px] normal-case tracking-normal text-hr-ink-2 no-underline transition-colors hover:text-hr-ink-strong"
                    href="#platform"
                  >
                    ₹2,500 Profit Floor
                  </a>
                  <a
                    className="hr-chip-draw relative border border-hr-line px-2.5 py-1 font-body text-[11.5px] normal-case tracking-normal text-hr-ink-2 no-underline transition-colors hover:text-hr-ink-strong"
                    href="#platform"
                  >
                    Rate Benchmark FSM
                  </a>
                  <a
                    className="hr-chip-draw relative border border-hr-line px-2.5 py-1 font-body text-[11.5px] normal-case tracking-normal text-hr-ink-2 no-underline transition-colors hover:text-hr-ink-strong"
                    href="#platform"
                  >
                    Anti-Hallucination
                  </a>
                </div>
              </div>

              {/* Pillar 3: Freight Context */}
              <div>
                <a
                  className="group flex w-full items-center gap-2 no-underline"
                  href="#platform"
                >
                  <span className="relative font-body text-[15px] normal-case tracking-[0.01em] text-hr-ink-strong">
                    Freight Context
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:origin-left group-hover:scale-x-100"
                    />
                  </span>
                </a>
                <p className="mt-1.5 font-body text-[12.5px] normal-case leading-snug tracking-normal text-hr-ink-4">
                  Live transport telemetry
                </p>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  <a
                    className="hr-chip-draw relative border border-hr-line px-2.5 py-1 font-body text-[11.5px] normal-case tracking-normal text-hr-ink-2 no-underline transition-colors hover:text-hr-ink-strong"
                    href="#platform"
                  >
                    VAHAN RC Registry
                  </a>
                  <a
                    className="hr-chip-draw relative border border-hr-line px-2.5 py-1 font-body text-[11.5px] normal-case tracking-normal text-hr-ink-2 no-underline transition-colors hover:text-hr-ink-strong"
                    href="#platform"
                  >
                    FASTag Geofence
                  </a>
                  <a
                    className="hr-chip-draw relative border border-hr-line px-2.5 py-1 font-body text-[11.5px] normal-case tracking-normal text-hr-ink-2 no-underline transition-colors hover:text-hr-ink-strong"
                    href="#platform"
                  >
                    Photo Bilty OCR
                  </a>
                </div>
              </div>

              {/* Pillar 4: HITL Action Queue */}
              <div>
                <a
                  className="group flex w-full items-center gap-2 no-underline"
                  href="#platform"
                >
                  <span className="relative font-body text-[15px] normal-case tracking-[0.01em] text-hr-ink-strong">
                    HITL Action Queue
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:origin-left group-hover:scale-x-100"
                    />
                  </span>
                </a>
                <p className="mt-1.5 font-body text-[12.5px] normal-case leading-snug tracking-normal text-hr-ink-4">
                  Broker exception approvals
                </p>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  <a
                    className="hr-chip-draw relative border border-hr-line px-2.5 py-1 font-body text-[11.5px] normal-case tracking-normal text-hr-ink-2 no-underline transition-colors hover:text-hr-ink-strong"
                    href="#platform"
                  >
                    Margin Alerts
                  </a>
                  <a
                    className="hr-chip-draw relative border border-hr-line px-2.5 py-1 font-body text-[11.5px] normal-case tracking-normal text-hr-ink-2 no-underline transition-colors hover:text-hr-ink-strong"
                    href="#platform"
                  >
                    WhatsApp Bot UI
                  </a>
                  <a
                    className="hr-chip-draw relative border border-hr-line px-2.5 py-1 font-body text-[11.5px] normal-case tracking-normal text-hr-ink-2 no-underline transition-colors hover:text-hr-ink-strong"
                    href="#platform"
                  >
                    Broker Dispatch
                  </a>
                </div>
              </div>
            </div>

            {/* Right sidebar of platform links */}
            <div className="flex w-[240px] shrink-0 flex-col gap-6 border-l border-hr-line pl-12">
              <div>
                <a
                  className="group flex w-full items-center gap-2 no-underline"
                  href="#platform"
                >
                  <span className="relative font-body text-[15px] normal-case tracking-[0.01em] text-hr-ink-strong">
                    Corridor SLA &amp; Safety
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:origin-left group-hover:scale-x-100"
                    />
                  </span>
                  <span
                    aria-hidden="true"
                    className="ml-auto shrink-0 text-hr-ink-strong transition-[transform,color] duration-300 group-hover:translate-x-0.5 group-hover:text-hr-ink-strong"
                  >
                    →
                  </span>
                </a>
              </div>
              <div>
                <a
                  className="group flex w-full items-center gap-2 no-underline"
                  href="#platform"
                >
                  <span className="relative font-body text-[15px] normal-case tracking-[0.01em] text-hr-ink-strong">
                    Broker API &amp; Webhooks
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:origin-left group-hover:scale-x-100"
                    />
                  </span>
                  <span
                    aria-hidden="true"
                    className="ml-auto shrink-0 text-hr-ink-strong transition-[transform,color] duration-300 group-hover:translate-x-0.5 group-hover:text-hr-ink-strong"
                  >
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- PANEL 2: CORRIDORS & WORKFLOWS ---------------- */}
      <div
        className="inset-x-0 top-0 transition-opacity duration-300 pointer-events-none opacity-0 hidden"
        id="panel-solutions"
      >
        <div className="mx-auto flex max-w-[1440px] justify-between gap-12 px-5 py-10 md:px-12">
          <div className="hr-hover-dim flex gap-x-12">
            {/* By Corridor & Fleet */}
            <div className="flex flex-col">
              <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-hr-ink-4">
                By Corridor &amp; Fleet
              </div>
              <div className="grid grid-cols-[200px_200px] gap-x-10">
                {[
                  { name: "NH-48 (Bengaluru - Mumbai)", href: "#case-studies" },
                  { name: "NH-44 (Delhi - Chennai)", href: "#case-studies" },
                  { name: "NH-16 (Kolkata - Chennai)", href: "#case-studies" },
                  { name: "NH-19 (Delhi - Kolkata)", href: "#case-studies" },
                  { name: "32ft MXL Containers", href: "#case-studies" },
                  { name: "20ft Open Body Trucks", href: "#case-studies" },
                  { name: "Trailer & Multi-Axle", href: "#case-studies" },
                  { name: "Part-Truckload (PTL/LTL)", href: "#case-studies" },
                ].map((item) => (
                  <a
                    key={item.name}
                    className="group flex w-full flex-col gap-0.5 py-2 no-underline"
                    href={item.href}
                  >
                    <span className="relative inline-flex w-fit text-[13.5px] normal-case tracking-[0.01em] text-hr-ink-strong">
                      {item.name}
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:origin-left group-hover:scale-x-100"
                      />
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* By Operations Workflow */}
            <div className="flex flex-col">
              <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-hr-ink-4">
                By Operations Workflow
              </div>
              <div className="flex w-[200px] flex-col">
                {[
                  { name: "RFQ Voice Quoting", href: "#case-studies" },
                  { name: "Truck Sourcing & Bids", href: "#case-studies" },
                  { name: "Driver Mamool & Advances", href: "#case-studies" },
                  { name: "FASTag Transit Tracking", href: "#case-studies" },
                  { name: "POD & Bilty Settlement", href: "#case-studies" },
                ].map((item) => (
                  <a
                    key={item.name}
                    className="group flex w-full flex-col gap-0.5 py-2 no-underline"
                    href={item.href}
                  >
                    <span className="relative inline-flex w-fit text-[13.5px] normal-case tracking-[0.01em] text-hr-ink-strong">
                      {item.name}
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:origin-left group-hover:scale-x-100"
                      />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right spotlight card */}
          <a
            className="group flex w-[320px] flex-col justify-between gap-8 border border-hr-line-strong p-6 no-underline transition-colors duration-300 hover:border-hr-line-warm bg-hr-surface-2"
            href="#case-studies"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-emerald-800 font-semibold">
              CORRIDOR ENGINE
            </div>
            <div>
              <div className="relative inline-flex font-body text-[20px] font-semibold normal-case leading-[1.18] text-hr-ink-strong">
                Engineered for Indian Logistics
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:origin-left group-hover:scale-x-100"
                />
              </div>
              <p className="mt-2.5 text-[12.5px] normal-case leading-relaxed tracking-normal text-hr-ink-3">
                Autonomous back-office agents deployed directly into WhatsApp to source trucks, enforce ₹2,500 profit floors, and eliminate freight broker margin leaks across high-volume corridors.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
