import React from "react";

/**
 * Mobile Drawer Navigation
 * Slides open below the header when the hamburger menu is toggled.
 * Contains accordion dropdowns for Harness and Corridors, plus direct links.
 */
export const MobileDrawer: React.FC = () => {
  return (
    <div
      className="grid overflow-hidden transition-all duration-300 ease-out lg:hidden pointer-events-none grid-rows-[0fr] opacity-0 border-b border-hr-line bg-white/98 backdrop-blur-xl shadow-2xl"
      id="mobile-drawer"
    >
      <div className="min-h-0 overflow-hidden">
        <div className="overflow-y-auto overscroll-contain border-b border-hr-line-strong bg-hr-surface px-5 py-4">
          <div className="flex flex-col font-body text-[13px] uppercase tracking-[0.12em] text-hr-ink-1">
            
            {/* 1. HARNESS ACCORDION */}
            <div className="border-b border-hr-line/60">
              <button
                aria-expanded="false"
                className="flex w-full items-center justify-between py-3.5 uppercase transition-colors hover:text-hr-ink-strong cursor-pointer"
                id="mobile-acc-btn-platform"
                tabIndex={0}
                type="button"
              >
                <span>Harness</span>
                <svg
                  aria-hidden="true"
                  className="shrink-0 transition-transform duration-300"
                  fill="none"
                  height="9"
                  viewBox="0 0 12 12"
                  width="9"
                >
                  <path
                    d="M2.5 4.5 6 8l3.5-3.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.3"
                  />
                </svg>
              </button>
              <div className="grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] grid-rows-[0fr] opacity-0">
                <div className="min-h-0 overflow-hidden">
                  <div className="hr-hover-dim flex flex-col gap-6 pb-5 pl-1">
                    <div>
                      <a
                        className="group flex w-full items-center gap-2 no-underline"
                        href="#platform"
                      >
                        <span className="relative font-body text-[15px] normal-case tracking-[0.01em] text-hr-ink-strong">
                          Harness Architecture Overview
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
                          Voice Ingestion
                        </span>
                      </a>
                      <p className="mt-1.5 font-body text-[12.5px] normal-case leading-snug tracking-normal text-hr-ink-4">
                        Multilingual WhatsApp voice parser (Kannada, Hindi &amp; Hinglish)
                      </p>
                    </div>
                    <div>
                      <a
                        className="group flex w-full items-center gap-2 no-underline"
                        href="#platform"
                      >
                        <span className="relative font-body text-[15px] normal-case tracking-[0.01em] text-hr-ink-strong">
                          Deterministic Guardrails
                        </span>
                      </a>
                      <p className="mt-1.5 font-body text-[12.5px] normal-case leading-snug tracking-normal text-hr-ink-4">
                        ₹2,500 profit floor &amp; anti-hallucination rate FSM
                      </p>
                    </div>
                    <div>
                      <a
                        className="group flex w-full items-center gap-2 no-underline"
                        href="#platform"
                      >
                        <span className="relative font-body text-[15px] normal-case tracking-[0.01em] text-hr-ink-strong">
                          Freight Context &amp; HITL Queue
                        </span>
                      </a>
                      <p className="mt-1.5 font-body text-[12.5px] normal-case leading-snug tracking-normal text-hr-ink-4">
                        VAHAN RC registry, FASTag tracking &amp; broker exception review
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. CORRIDORS ACCORDION */}
            <div className="border-b border-hr-line/60">
              <button
                aria-expanded="false"
                className="flex w-full items-center justify-between py-3.5 uppercase transition-colors hover:text-hr-ink-strong cursor-pointer"
                id="mobile-acc-btn-solutions"
                tabIndex={0}
                type="button"
              >
                <span>Corridors</span>
                <svg
                  aria-hidden="true"
                  className="shrink-0 transition-transform duration-300"
                  fill="none"
                  height="9"
                  viewBox="0 0 12 12"
                  width="9"
                >
                  <path
                    d="M2.5 4.5 6 8l3.5-3.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.3"
                  />
                </svg>
              </button>
              <div className="grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] grid-rows-[0fr] opacity-0">
                <div className="min-h-0 overflow-hidden">
                  <div className="hr-hover-dim flex flex-col gap-6 pb-5 pl-1">
                    <div>
                      <div className="mb-2.5 text-[10px] font-mono uppercase tracking-[0.16em] text-hr-ink-4">
                        By Corridor &amp; Fleet
                      </div>
                      <div className="flex flex-col gap-3">
                        <a className="text-[13px] text-hr-ink-2 no-underline hover:text-hr-ink-strong" href="#case-studies">
                          NH-48 (Bengaluru - Mumbai)
                        </a>
                        <a className="text-[13px] text-hr-ink-2 no-underline hover:text-hr-ink-strong" href="#case-studies">
                          NH-44 (Delhi - Chennai)
                        </a>
                        <a className="text-[13px] text-hr-ink-2 no-underline hover:text-hr-ink-strong" href="#case-studies">
                          32ft MXL Containers &amp; Trailers
                        </a>
                      </div>
                    </div>
                    <div>
                      <div className="mb-2.5 text-[10px] font-mono uppercase tracking-[0.16em] text-hr-ink-4">
                        Operations Workflow
                      </div>
                      <div className="flex flex-col gap-3">
                        <a className="text-[13px] text-hr-ink-2 no-underline hover:text-hr-ink-strong" href="#case-studies">
                          RFQ Voice Quoting &amp; Bidding
                        </a>
                        <a className="text-[13px] text-hr-ink-2 no-underline hover:text-hr-ink-strong" href="#case-studies">
                          FASTag Transit Tracking &amp; Alerts
                        </a>
                        <a className="text-[13px] text-hr-ink-2 no-underline hover:text-hr-ink-strong" href="#case-studies">
                          POD &amp; Photo Bilty Settlement
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Links */}
            <div className="border-b border-hr-line/60">
              <a
                className="block py-3.5 uppercase transition-colors hover:text-hr-ink-strong no-underline"
                href="#case-studies"
              >
                Brokers
              </a>
            </div>
            <div className="border-b border-hr-line/60">
              <a
                className="block py-3.5 uppercase transition-colors hover:text-hr-ink-strong no-underline"
                href="#platform"
              >
                Benchmarks
              </a>
            </div>
            <div className="border-b border-hr-line/60">
              <a
                className="block py-3.5 uppercase transition-colors hover:text-hr-ink-strong no-underline"
                href="#careers"
              >
                Live Fleet
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Login Button */}
        <div className="p-5">
          <a
            className="group flex w-full items-center justify-center font-body text-[13px] uppercase leading-none tracking-[0.1em] no-underline transition-all bg-hr-cta-solid-bg text-hr-cta-solid-fg py-3.5 rounded-lg font-semibold"
            href="#hero-agent"
          >
            <span>Login</span>
          </a>
        </div>
      </div>
    </div>
  );
};
