import React from "react";

/**
 * Desktop Mega Menu Component
 * Contains the two large dropdown panels:
 * 1. #panel-platform: Platform overview, Agents, Governance, Context, Interfaces, Security, Developer tools
 * 2. #panel-solutions: Solutions by industry & by function
 */
export const DesktopMegaMenu: React.FC = () => {
  return (
    <div
      className="absolute inset-x-0 top-full overflow-hidden bg-[#070707]/95 border-b border-[#2e2e2e] shadow-2xl backdrop-blur-xl transition-all duration-300 ease-out z-[55]"
      id="desktop-mega-menu"
      style={{
        maxHeight: "0",
        opacity: "0",
        pointerEvents: "none",
      }}
    >
      {/* ---------------- PANEL 1: PLATFORM ---------------- */}
      <div
        className="inset-x-0 top-0 transition-opacity duration-300 pointer-events-none opacity-0"
        id="panel-platform"
      >
        <div className="mx-auto max-w-[1440px] px-5 py-10 md:px-12">
          {/* Main platform overview link */}
          <a
            className="group mb-8 flex items-center gap-3 border-b border-hr-line-strong pb-5 no-underline"
            href="/product/platform-overview"
          >
            <span className="relative font-body text-[20px] leading-none tracking-[-0.01em] text-hr-ink-strong">
              Platform overview
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
              {/* Pillar 1: Agents */}
              <div>
                <a
                  className="group flex w-full items-center gap-2 no-underline"
                  href="/product/agents/agents-overview"
                >
                  <span className="relative font-body text-[15px] normal-case tracking-[0.01em] text-hr-ink-strong">
                    Agents
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:origin-left group-hover:scale-x-100"
                    />
                  </span>
                </a>
                <p className="mt-1.5 font-body text-[12.5px] normal-case leading-snug tracking-normal text-hr-ink-4">
                  The core of the platform
                </p>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  <a
                    className="hr-chip-draw relative border border-hr-line px-2.5 py-1 font-body text-[11.5px] normal-case tracking-normal text-hr-ink-2 no-underline transition-colors hover:text-hr-ink-strong"
                    href="/product/agents/agentic-tools"
                  >
                    Agentic tools
                  </a>
                  <a
                    className="hr-chip-draw relative border border-hr-line px-2.5 py-1 font-body text-[11.5px] normal-case tracking-normal text-hr-ink-2 no-underline transition-colors hover:text-hr-ink-strong"
                    href="/product/agents/voice-ai"
                  >
                    Voice AI
                  </a>
                  <a
                    className="hr-chip-draw relative border border-hr-line px-2.5 py-1 font-body text-[11.5px] normal-case tracking-normal text-hr-ink-2 no-underline transition-colors hover:text-hr-ink-strong"
                    href="/product/agents/workflow-logic"
                  >
                    Workflow logic
                  </a>
                </div>
              </div>

              {/* Pillar 2: Governance */}
              <div>
                <a
                  className="group flex w-full items-center gap-2 no-underline"
                  href="/product/governance"
                >
                  <span className="relative font-body text-[15px] normal-case tracking-[0.01em] text-hr-ink-strong">
                    Governance
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:origin-left group-hover:scale-x-100"
                    />
                  </span>
                </a>
                <p className="mt-1.5 font-body text-[12.5px] normal-case leading-snug tracking-normal text-hr-ink-4">
                  Evaluating agent behavior
                </p>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  <a
                    className="hr-chip-draw relative border border-hr-line px-2.5 py-1 font-body text-[11.5px] normal-case tracking-normal text-hr-ink-2 no-underline transition-colors hover:text-hr-ink-strong"
                    href="/product/governance/northstars"
                  >
                    Northstars
                  </a>
                  <a
                    className="hr-chip-draw relative border border-hr-line px-2.5 py-1 font-body text-[11.5px] normal-case tracking-normal text-hr-ink-2 no-underline transition-colors hover:text-hr-ink-strong"
                    href="/product/governance/adversarial-agents"
                  >
                    Adversarial agents
                  </a>
                  <a
                    className="hr-chip-draw relative border border-hr-line px-2.5 py-1 font-body text-[11.5px] normal-case tracking-normal text-hr-ink-2 no-underline transition-colors hover:text-hr-ink-strong"
                    href="/product/governance/audits-and-tests"
                  >
                    Audits &amp; tests
                  </a>
                </div>
              </div>

              {/* Pillar 3: Context */}
              <div>
                <a
                  className="group flex w-full items-center gap-2 no-underline"
                  href="/product/context/context-overview"
                >
                  <span className="relative font-body text-[15px] normal-case tracking-[0.01em] text-hr-ink-strong">
                    Context
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:origin-left group-hover:scale-x-100"
                    />
                  </span>
                </a>
                <p className="mt-1.5 font-body text-[12.5px] normal-case leading-snug tracking-normal text-hr-ink-4">
                  What agents generate &amp; learn from
                </p>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  <a
                    className="hr-chip-draw relative border border-hr-line px-2.5 py-1 font-body text-[11.5px] normal-case tracking-normal text-hr-ink-2 no-underline transition-colors hover:text-hr-ink-strong"
                    href="/product/agents/integrations"
                  >
                    Integrations
                  </a>
                  <a
                    className="hr-chip-draw relative border border-hr-line px-2.5 py-1 font-body text-[11.5px] normal-case tracking-normal text-hr-ink-2 no-underline transition-colors hover:text-hr-ink-strong"
                    href="/product/governance/agentic-data"
                  >
                    Agentic data
                  </a>
                </div>
              </div>

              {/* Pillar 4: Interfaces */}
              <div>
                <a
                  className="group flex w-full items-center gap-2 no-underline"
                  href="/product/interfaces"
                >
                  <span className="relative font-body text-[15px] normal-case tracking-[0.01em] text-hr-ink-strong">
                    Interfaces
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:origin-left group-hover:scale-x-100"
                    />
                  </span>
                </a>
                <p className="mt-1.5 font-body text-[12.5px] normal-case leading-snug tracking-normal text-hr-ink-4">
                  How humans interact with agents
                </p>
              </div>
            </div>

            {/* Right sidebar of platform links */}
            <div className="flex w-[240px] shrink-0 flex-col gap-6 border-l border-hr-line pl-12">
              <div>
                <a
                  className="group flex w-full items-center gap-2 no-underline"
                  href="/product/security-and-reliability"
                >
                  <span className="relative font-body text-[15px] normal-case tracking-[0.01em] text-hr-ink-strong">
                    Security &amp; reliability
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
                  href="/product/developer-tools"
                >
                  <span className="relative font-body text-[15px] normal-case tracking-[0.01em] text-hr-ink-strong">
                    Developer tools
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

      {/* ---------------- PANEL 2: SOLUTIONS ---------------- */}
      <div
        className="inset-x-0 top-0 transition-opacity duration-300 pointer-events-none opacity-0 hidden"
        id="panel-solutions"
      >
        <div className="mx-auto flex max-w-[1440px] justify-between gap-12 px-5 py-10 md:px-12">
          <div className="hr-hover-dim flex gap-x-12">
            {/* By Industry */}
            <div className="flex flex-col">
              <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-hr-ink-4">
                By industry
              </div>
              <div className="grid grid-cols-[184px_184px] gap-x-10">
                {[
                  { name: "Logistics", href: "/solutions/industries/logistics-providers" },
                  { name: "Utilities", href: "/solutions/industries/utilities" },
                  { name: "Airlines", href: "/solutions/industries/airlines" },
                  { name: "Finance", href: "/solutions/industries/financial-services" },
                  { name: "Insurance", href: "/solutions/industries/insurance" },
                  { name: "Manufacturing", href: "/solutions/industries/manufacturers-suppliers" },
                  { name: "Retail", href: "/solutions/industries/retail" },
                  { name: "Telecom", href: "/solutions/industries/telecom" },
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

            {/* By Function */}
            <div className="flex flex-col">
              <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-hr-ink-4">
                By function
              </div>
              <div className="flex w-[184px] flex-col">
                {[
                  { name: "Customer support", href: "/solutions/functions/customer-support" },
                  { name: "Sales", href: "/solutions/functions/sales" },
                  { name: "Finance", href: "/solutions/functions/finance" },
                  { name: "Operations", href: "/solutions/functions/operations" },
                  { name: "HR & recruiting", href: "/solutions/functions/hr-recruiting" },
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
            className="group flex w-[300px] flex-col justify-between gap-8 border border-hr-line-strong p-6 no-underline transition-colors duration-300 hover:border-hr-line-warm"
            href="#case-studies"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-hr-ink-6">
              Solutions
            </div>
            <div>
              <div className="relative inline-flex font-body text-[21px] normal-case leading-[1.15] text-hr-ink-strong">
                Built for the real economy
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:origin-left group-hover:scale-x-100"
                />
              </div>
              <p className="mt-2.5 text-[12.5px] normal-case leading-relaxed tracking-normal text-hr-ink-3">
                AI workers deployed into the operations that move goods, keep the lights on, and settle transactions — across eight industries.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
