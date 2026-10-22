import React from "react";

/**
 * Mobile Drawer Navigation
 * Slides open below the header when the hamburger menu is toggled.
 * Contains accordion dropdowns for Platform and Solutions, plus direct links.
 */
export const MobileDrawer: React.FC = () => {
  return (
    <div
      className="grid overflow-hidden transition-all duration-300 ease-out lg:hidden pointer-events-none grid-rows-[0fr] opacity-0 border-b border-[#2e2e2e] bg-[#070707]/98 backdrop-blur-xl shadow-2xl"
      id="mobile-drawer"
    >
      <div className="min-h-0 overflow-hidden">
        <div className="overflow-y-auto overscroll-contain border-b border-hr-line-strong bg-hr-surface px-5 py-4">
          <div className="flex flex-col font-body text-[13px] uppercase tracking-[0.12em] text-hr-ink-1">
            {/* 1. PLATFORM ACCORDION */}
            <div className="border-b border-hr-line/60">
              <button
                aria-expanded="false"
                className="flex w-full items-center justify-between py-3.5 uppercase transition-colors hover:text-hr-ink-strong cursor-pointer"
                id="mobile-acc-btn-platform"
                tabIndex={0}
                type="button"
              >
                <span>Platform</span>
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
                        href="/product/platform-overview"
                      >
                        <span className="relative font-body text-[15px] normal-case tracking-[0.01em] text-hr-ink-strong">
                          Platform overview
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
                </div>
              </div>
            </div>

            {/* 2. SOLUTIONS ACCORDION */}
            <div className="border-b border-hr-line/60">
              <button
                aria-expanded="false"
                className="flex w-full items-center justify-between py-3.5 uppercase transition-colors hover:text-hr-ink-strong cursor-pointer"
                id="mobile-acc-btn-solutions"
                tabIndex={0}
                type="button"
              >
                <span>Solutions</span>
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
                    {/* By Industry */}
                    <div>
                      <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-hr-ink-4">
                        By industry
                      </div>
                      <div className="flex flex-col gap-2">
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
                            className="group flex w-full normal-case tracking-[0.01em] text-hr-ink-2 no-underline transition-colors hover:text-hr-ink-strong"
                            href={item.href}
                            tabIndex={-1}
                          >
                            <span className="relative inline-flex w-fit">
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
                    <div>
                      <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-hr-ink-4">
                        By function
                      </div>
                      <div className="flex flex-col gap-2">
                        {[
                          { name: "Customer support", href: "/solutions/functions/customer-support" },
                          { name: "Sales", href: "/solutions/functions/sales" },
                          { name: "Finance", href: "/solutions/functions/finance" },
                          { name: "Operations", href: "/solutions/functions/operations" },
                          { name: "HR & recruiting", href: "/solutions/functions/hr-recruiting" },
                        ].map((item) => (
                          <a
                            key={item.name}
                            className="group flex w-full normal-case tracking-[0.01em] text-hr-ink-2 no-underline transition-colors hover:text-hr-ink-strong"
                            href={item.href}
                            tabIndex={-1}
                          >
                            <span className="relative inline-flex w-fit">
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

                    {/* Spotlight link */}
                    <a
                      className="group flex w-full normal-case tracking-[0.01em] text-hr-ink-strong no-underline"
                      href="#case-studies"
                      tabIndex={-1}
                    >
                      <span className="relative inline-flex w-fit">
                        Built for the real economy
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:origin-left group-hover:scale-x-100"
                        />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. DIRECT LINKS */}
            <div className="hr-hover-dim flex flex-col">
              {[
                { label: "Customers", href: "#case-studies" },
                { label: "Newsroom", href: "#newsroom" },
                { label: "Careers", href: "#careers" },
              ].map((link) => (
                <div key={link.label} className="border-b border-hr-line/60">
                  <a
                    className="group flex w-full py-3.5 uppercase no-underline transition-colors hover:text-hr-ink-strong"
                    href={link.href}
                    tabIndex={-1}
                  >
                    <span className="relative inline-flex w-fit">
                      {link.label}
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:origin-left group-hover:scale-x-100"
                      />
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
