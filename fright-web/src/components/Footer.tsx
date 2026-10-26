"use client";

import React from "react";

export const Footer: React.FC = () => {
  return (
    <>
      <footer className="hr-hover-dim overflow-x-clip border-y border-hr-line bg-hr-surface-2 text-hr-ink-4">
        <div className="mx-auto max-w-[1440px] px-5 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.1fr_1fr_1fr_1fr_1.3fr]">
            <div className="flex items-center justify-center border-b border-hr-line p-10 sm:col-span-2 md:col-span-1 md:border-b-0 md:border-r">
              <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="HappyFreight"
                className="h-16 w-auto text-hr-ink-strong md:h-20"
              >
                <path
                  d="M24 0H16V12.0632C15.9663 14.2434 14.1885 16 12.0005 16H0V24H8.68629C10.808 24 12.8429 23.1571 14.3431 21.6569L21.6569 14.3431C23.1571 12.8429 24 10.808 24 8.68629V0Z"
                  fill="currentColor"
                />
                <path
                  d="M16 40H24V27.9368C24.0337 25.7566 25.8115 24 27.9995 24H40V16H31.3137C29.192 16 27.1571 16.8429 25.6569 18.3431L18.3431 25.6569C16.8429 27.1571 16 29.192 16 31.3137V40Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="border-b border-hr-line p-6 md:border-b-0 md:border-r md:p-7">
              <div className="mb-3.5 font-mono text-[10px] uppercase tracking-[0.16em] text-hr-ink-7 hrlight:text-hr-carbon">
                Product
              </div>
              <div className="flex flex-col gap-[11px] font-body">
                <a
                  className="group relative inline-flex w-fit text-[13px] no-underline transition-colors hover:text-hr-ink-strong text-hr-ink-2"
                  href="/product/platform-overview"
                >
                  Platform overview
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:origin-left group-hover:scale-x-100"
                  ></span>
                </a>
                <a
                  className="group relative inline-flex w-fit text-[13px] no-underline transition-colors hover:text-hr-ink-strong text-hr-ink-2"
                  href="/product/agents/agents-overview"
                >
                  Agents
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:origin-left group-hover:scale-x-100"
                  ></span>
                </a>
                <a
                  className="group relative inline-flex w-fit text-[13px] no-underline transition-colors hover:text-hr-ink-strong text-hr-ink-2"
                  href="/product/context/context-overview"
                >
                  Context
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:origin-left group-hover:scale-x-100"
                  ></span>
                </a>
                <a
                  className="group relative inline-flex w-fit text-[13px] no-underline transition-colors hover:text-hr-ink-strong text-hr-ink-2"
                  href="/product/governance"
                >
                  Governance
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:origin-left group-hover:scale-x-100"
                  ></span>
                </a>
                <a
                  className="group relative inline-flex w-fit text-[13px] no-underline transition-colors hover:text-hr-ink-strong text-hr-ink-2"
                  href="/product/interfaces"
                >
                  Interfaces
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:origin-left group-hover:scale-x-100"
                  ></span>
                </a>
                <a
                  className="group relative inline-flex w-fit text-[13px] no-underline transition-colors hover:text-hr-ink-strong text-hr-ink-2"
                  href="/product/security-and-reliability"
                >
                  Security & reliability
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:origin-left group-hover:scale-x-100"
                  ></span>
                </a>
                <a
                  className="group relative inline-flex w-fit text-[13px] no-underline transition-colors hover:text-hr-ink-strong text-hr-ink-2"
                  href="/product/developer-tools"
                >
                  Developer tools
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:origin-left group-hover:scale-x-100"
                  ></span>
                </a>
              </div>
            </div>
            <div className="border-b border-hr-line p-6 md:border-b-0 md:border-r md:p-7">
              <div className="mb-3.5 font-mono text-[10px] uppercase tracking-[0.16em] text-hr-ink-7 hrlight:text-hr-carbon">
                Company
              </div>
              <div className="flex flex-col gap-[11px] font-body">
                <a
                  className="group relative inline-flex w-fit text-[13px] no-underline transition-colors hover:text-hr-ink-strong text-hr-ink-2"
                  href="/blog"
                >
                  Blog
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:origin-left group-hover:scale-x-100"
                  ></span>
                </a>
                <a
                  className="group relative inline-flex w-fit text-[13px] no-underline transition-colors hover:text-hr-ink-strong text-hr-ink-2"
                  href="/customers"
                >
                  Customers
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:origin-left group-hover:scale-x-100"
                  ></span>
                </a>
                <a
                  className="group relative inline-flex w-fit text-[13px] no-underline transition-colors hover:text-hr-ink-strong text-hr-ink-2"
                  href="/press"
                >
                  Newsroom
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:origin-left group-hover:scale-x-100"
                  ></span>
                </a>
                <a
                  className="group relative inline-flex w-fit text-[13px] no-underline transition-colors hover:text-hr-ink-strong text-hr-ink-2"
                  href="/hub"
                >
                  Hub
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:origin-left group-hover:scale-x-100"
                  ></span>
                </a>
                <a
                  className="group relative inline-flex w-fit text-[13px] no-underline transition-colors hover:text-hr-ink-strong text-hr-ink-2"
                  href="/careers"
                >
                  Careers
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:origin-left group-hover:scale-x-100"
                  ></span>
                </a>
                <a
                  className="group relative inline-flex w-fit text-[13px] no-underline transition-colors hover:text-hr-ink-strong text-hr-ink-2"
                  href="/blog/happyrobot-media-kit"
                >
                  Media Kit
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:origin-left group-hover:scale-x-100"
                  ></span>
                </a>
              </div>
            </div>
            <div className="border-b border-hr-line p-6 md:border-b-0 md:border-r md:p-7">
              <div className="mb-3.5 font-mono text-[10px] uppercase tracking-[0.16em] text-hr-ink-7 hrlight:text-hr-carbon">
                Connect
              </div>
              <div className="flex flex-col gap-[11px] font-body">
                <a
                  className="group relative inline-flex w-fit text-[13px] no-underline transition-colors hover:text-hr-ink-strong text-hr-ink-2"
                  href="/contact/demo"
                >
                  Book a demo
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:origin-left group-hover:scale-x-100"
                  ></span>
                </a>
                <a
                  className="group relative inline-flex w-fit text-[13px] no-underline transition-colors hover:text-hr-ink-strong text-hr-ink-2"
                  href="/contact"
                >
                  Contact
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:origin-left group-hover:scale-x-100"
                  ></span>
                </a>
                <a
                  className="group relative inline-flex w-fit text-[13px] no-underline transition-colors hover:text-hr-ink-strong text-hr-ink-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/company/happyrobot/"
                >
                  LinkedIn
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:origin-left group-hover:scale-x-100"
                  ></span>
                </a>
                <a
                  className="group relative inline-flex w-fit text-[13px] no-underline transition-colors hover:text-hr-ink-strong text-hr-ink-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://x.com/happyrobot"
                >
                  X
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:origin-left group-hover:scale-x-100"
                  ></span>
                </a>
                <a
                  href="#newsletter"
                  className="group relative inline-flex w-fit text-[13px] no-underline transition-colors hover:text-hr-ink-strong text-hr-ink-2 cursor-pointer"
                >
                  Newsletter
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:origin-left group-hover:scale-x-100"
                  ></span>
                </a>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="p-6 md:p-7">
                <span
                  className="mb-4 block h-[5px] w-[5px] bg-hr-rust"
                  aria-hidden="true"
                ></span>
                <p className="max-w-[22ch] font-body text-[13px] leading-[1.3] text-hr-ink-strong">
                  Achieving Enterprise Superintelligence.
                </p>
                <p className="mt-1.5 max-w-[24ch] font-body text-[13px] leading-[1.45] text-hr-ink-3">
                  The AI operating system for the real economy.
                </p>
              </div>
              <div className="relative p-6 md:p-7">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-0 top-0 h-px w-[200vw] bg-hr-line"
                ></span>
                <div className="mb-3.5 font-mono text-[10px] uppercase tracking-[0.16em] text-hr-ink-7 hrlight:text-hr-carbon">
                  Terms & Policies
                </div>
                <div className="flex flex-col gap-[11px] font-body">
                  <a
                    className="group relative inline-flex w-fit text-[13px] no-underline transition-colors hover:text-hr-ink-strong text-hr-ink-4"
                    href="/legal/terms-and-conditions"
                  >
                    Terms of service
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:origin-left group-hover:scale-x-100"
                    ></span>
                  </a>
                  <a
                    className="group relative inline-flex w-fit text-[13px] no-underline transition-colors hover:text-hr-ink-strong text-hr-ink-4"
                    href="/legal/privacy-policy"
                  >
                    Privacy policy
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:origin-left group-hover:scale-x-100"
                    ></span>
                  </a>
                  <a
                    className="group relative inline-flex w-fit text-[13px] no-underline transition-colors hover:text-hr-ink-strong text-hr-ink-4"
                    href="/legal/cookie-policy"
                  >
                    Cookie policy
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:origin-left group-hover:scale-x-100"
                    ></span>
                  </a>
                  <a
                    href="#"
                    className="group relative inline-flex w-fit text-[13px] no-underline transition-colors hover:text-hr-ink-strong text-hr-ink-4 cursor-pointer"
                  >
                    Consent Preferences
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:origin-left group-hover:scale-x-100"
                    ></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-hr-line">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-4 md:flex-row md:items-center md:justify-between md:px-12">
            <div className="font-body text-[11px] tracking-[0.04em] text-hr-ink-4 hrlight:text-hr-carbon">
              © 2026 HappyFright, Inc.
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="border border-hr-line px-[11px] py-[5px] font-body text-[10px] tracking-[0.06em] text-[#6f675c] hrlight:text-hr-carbon">
                SOC 2
              </span>
              <span className="border border-hr-line px-[11px] py-[5px] font-body text-[10px] tracking-[0.06em] text-[#6f675c] hrlight:text-hr-carbon">
                ISO 27001
              </span>
              <span className="border border-hr-line px-[11px] py-[5px] font-body text-[10px] tracking-[0.06em] text-[#6f675c] hrlight:text-hr-carbon">
                GDPR
              </span>
              <span className="border border-hr-line px-[11px] py-[5px] font-body text-[10px] tracking-[0.06em] text-[#6f675c] hrlight:text-hr-carbon">
                HIPAA
              </span>
              <span className="border border-hr-line px-[11px] py-[5px] font-body text-[10px] tracking-[0.06em] text-[#6f675c] hrlight:text-hr-carbon">
                EU AI ACT
              </span>
              <span className="border border-hr-line px-[11px] py-[5px] font-body text-[10px] tracking-[0.06em] text-[#6f675c] hrlight:text-hr-carbon">
                NIST CSF
              </span>
              <span className="border border-hr-line px-[11px] py-[5px] font-body text-[10px] tracking-[0.06em] text-[#6f675c] hrlight:text-hr-carbon">
                DORA
              </span>
              <span
                aria-hidden="true"
                className="mx-2 h-6 w-px shrink-0 bg-hr-line"
              ></span>
              <div className="relative inline-block">
                <button
                  type="button"
                  aria-haspopup="listbox"
                  aria-expanded="false"
                  aria-controls="_R_t8ltaivb_"
                  aria-label="Language"
                  className="border border-hr-line px-[11px] py-[5px] font-body text-[10px] tracking-[0.06em] no-underline transition-colors inline-flex items-center gap-2 text-hr-ink-strong hover:text-hr-ink-strong"
                >
                  <span>English</span>
                  <span aria-hidden="true" className="text-[8px] leading-none">
                    ▼
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
