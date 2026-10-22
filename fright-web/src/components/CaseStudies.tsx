"use client";

import React from "react";

export const CaseStudies: React.FC = () => {
  return (
    <>
      <section
        id="case-studies"
        className="scroll-mt-24 border-t border-hr-line bg-hr-surface"
      >
        <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-12 md:py-[150px]">
          <div className="mb-12 flex flex-wrap items-start justify-between gap-8 md:mb-14 md:gap-10">
            <div>
              <h2 className="font-body text-[29px] leading-[1.04] tracking-[-0.02em] text-hr-ink-strong md:text-[46px]">
                Deployed on <span className="text-hr-accent">India&apos;s highways.</span>
              </h2>
            </div>
            <p className="max-w-[420px] text-[15.5px] leading-[1.65] text-hr-ink-3">
              Battle-tested across high-density freight corridors full of vernacular voice notes, toll exceptions, and real broker margin stakes.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-px border-y border-hr-line bg-hr-line sm:grid-cols-3">
            <div>
              <a
                className="group relative block aspect-square overflow-hidden bg-hr-cell no-underline"
                href="#corridors"
              >
                <div className="relative h-full w-full overflow-hidden bg-hr-cell">
                  <picture>
                    <source
                      srcSet="/images/redesign/home-photos/case-dhl-fcf21c81.avif"
                      type="image/avif"
                    />
                    <img
                      alt="Delhi to Mumbai NH-48 Freight Corridor"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:scale-[1.04]"
                      style={
                        {
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: "0",
                          top: "0",
                          right: "0",
                          bottom: "0",
                          color: "transparent",
                        } as React.CSSProperties
                      }
                      sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 767px) calc((100vw - 40px) / 3), (max-width: 1439px) calc((100vw - 96px) / 3), 448px"
                      src="/images/redesign/case-studies/dhl-1.webp"
                    />
                  </picture>
                </div>
                <div
                  className="pointer-events-none absolute inset-0"
                  style={
                    {
                      background:
                        "linear-gradient(180deg, rgba(18,16,14,0.05) 40%, rgba(18,16,14,0.88) 100%)",
                    } as React.CSSProperties
                  }
                ></div>
                <div className="pointer-events-none absolute left-6 top-6 font-body text-[14px] tracking-[0.02em] text-hr-lumen">
                  NH-48 • Delhi – Mumbai
                </div>
                <div className="pointer-events-none absolute bottom-6 left-6 right-6">
                  <div className="max-w-[22ch] font-body text-[19px] leading-[1.2] text-hr-lumen">
                    Automating 1,200+ monthly loads with zero rate hallucination
                  </div>
                  <span className="mt-4 inline-flex items-center gap-2 border border-hr-border-cta px-4 py-[9px] font-mono text-[11px] uppercase tracking-[0.08em] text-hr-signal transition-colors group-hover:border-hr-stone">
                    Explore corridor
                    <span aria-hidden="true" className="text-hr-rust">
                      →
                    </span>
                  </span>
                </div>
              </a>
            </div>
            <div>
              <a
                className="group relative block aspect-square overflow-hidden bg-hr-cell no-underline"
                href="#corridors"
              >
                <div className="relative h-full w-full overflow-hidden bg-hr-cell">
                  <picture>
                    <source
                      srcSet="/images/redesign/home-photos/case-naturgy-c7e9671c.avif"
                      type="image/avif"
                    />
                    <img
                      alt="Bengaluru to Hyderabad NH-44 Freight Corridor"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:scale-[1.04]"
                      style={
                        {
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: "0",
                          top: "0",
                          right: "0",
                          bottom: "0",
                          color: "transparent",
                        } as React.CSSProperties
                      }
                      sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 767px) calc((100vw - 40px) / 3), (max-width: 1439px) calc((100vw - 96px) / 3), 448px"
                      src="/images/redesign/case-studies/naturgy-1.webp"
                    />
                  </picture>
                </div>
                <div
                  className="pointer-events-none absolute inset-0"
                  style={
                    {
                      background:
                        "linear-gradient(180deg, rgba(18,16,14,0.05) 40%, rgba(18,16,14,0.88) 100%)",
                    } as React.CSSProperties
                  }
                ></div>
                <div className="pointer-events-none absolute left-6 top-6 font-body text-[14px] tracking-[0.02em] text-hr-lumen">
                  NH-44 • Bengaluru – Hyderabad
                </div>
                <div className="pointer-events-none absolute bottom-6 left-6 right-6">
                  <div className="max-w-[22ch] font-body text-[19px] leading-[1.2] text-hr-lumen">
                    Vernacular Hindi & Kannada voice ingestion with margin guardrails
                  </div>
                  <span className="mt-4 inline-flex items-center gap-2 border border-hr-border-cta px-4 py-[9px] font-mono text-[11px] uppercase tracking-[0.08em] text-hr-signal transition-colors group-hover:border-hr-stone">
                    Explore corridor
                    <span aria-hidden="true" className="text-hr-rust">
                      →
                    </span>
                  </span>
                </div>
              </a>
            </div>
            <div>
              <a
                className="group relative block aspect-square overflow-hidden bg-hr-cell no-underline"
                href="#corridors"
              >
                <div className="relative h-full w-full overflow-hidden bg-hr-cell">
                  <picture>
                    <source
                      srcSet="/images/redesign/home-photos/case-kuehne-nagel-fbe2c745.avif"
                      type="image/avif"
                    />
                    <img
                      alt="JNPT and Mundra Port Container Drayage"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:scale-[1.04]"
                      style={
                        {
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: "0",
                          top: "0",
                          right: "0",
                          bottom: "0",
                          color: "transparent",
                        } as React.CSSProperties
                      }
                      sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 767px) calc((100vw - 40px) / 3), (max-width: 1439px) calc((100vw - 96px) / 3), 448px"
                      src="/images/redesign/case-studies/kuehne-nagel-1.webp"
                    />
                  </picture>
                </div>
                <div
                  className="pointer-events-none absolute inset-0"
                  style={
                    {
                      background:
                        "linear-gradient(180deg, rgba(18,16,14,0.05) 40%, rgba(18,16,14,0.88) 100%)",
                    } as React.CSSProperties
                  }
                ></div>
                <div className="pointer-events-none absolute left-6 top-6 font-body text-[14px] tracking-[0.02em] text-hr-lumen">
                  JNPT & Mundra • Port Drayage
                </div>
                <div className="pointer-events-none absolute bottom-6 left-6 right-6">
                  <div className="max-w-[22ch] font-body text-[19px] leading-[1.2] text-hr-lumen">
                    94% autonomous WhatsApp RFQ matching and instant POD clearance
                  </div>
                  <span className="mt-4 inline-flex items-center gap-2 border border-hr-border-cta px-4 py-[9px] font-mono text-[11px] uppercase tracking-[0.08em] text-hr-signal transition-colors group-hover:border-hr-stone">
                    Explore corridor
                    <span aria-hidden="true" className="text-hr-rust">
                      →
                    </span>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
