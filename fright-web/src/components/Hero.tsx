"use client";

import React from "react";

export const Hero: React.FC = () => {
  return (
    <>
      <section className="relative min-h-[680px] overflow-hidden bg-hr-surface h-[100svh]">
        <div className="h-full w-full overflow-hidden absolute inset-0 bg-hr-surface"></div>
        <div
          className="pointer-events-none absolute inset-0 z-[2] hidden select-none md:block"
          aria-hidden="true"
        >
          <div className="relative h-full w-full overflow-hidden">
            <video
              poster="/images/redesign/hero-loop-poster.webp"
              muted
              loop
              playsInline
              preload="metadata"
              className="hero-video-element absolute left-1/2 top-1/2 min-h-full min-w-full h-auto w-auto max-w-none -translate-x-1/2 -translate-y-1/2 object-cover"
              autoPlay
            >
              <source
                src="/videos/hero.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <picture
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[2] md:hidden"
        >
          <source
            media="(min-width: 768px)"
            srcSet="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
          />
          <img
            alt=""
            decoding="async"
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
            sizes="100vw"
            srcSet="/images/cdn/hero_still.png"
            src="/images/cdn/hero_still.png"
            fetchPriority="high"
            className="object-cover object-center"
          />
        </picture>
        {/* Readability Overlays for Hero Video & Text Contrast */}
        <div
          aria-hidden="true"
          className="hero-video-overlay"
        ></div>
        <div className="relative z-[4] flex min-h-[100svh] flex-col justify-center px-5 pt-28 pb-14 sm:pt-32 md:px-12 md:pt-20 md:pb-14">
          <div className="hero-enter mx-auto w-full max-w-[1440px]">
            {/* Live Operational Status Chip */}
            <div className="mb-4 sm:mb-5 inline-flex items-center gap-2.5 rounded-full border border-hr-line bg-white/90 px-3.5 py-1.5 shadow-xs backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600"></span>
              </span>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.06em] text-hr-ink-strong">
                Autonomous Freight Operations
              </span>
              <span className="text-hr-line-strong">•</span>
              <span className="font-mono text-[11px] text-hr-concrete">
                Live on 8 Freight Corridors
              </span>
            </div>

            <h1 className="max-w-[17ch] font-display text-[38px] leading-[1.0] tracking-[-0.03em] text-hr-ink-strong sm:text-[52px] sm:leading-[0.96] md:text-[66px] md:leading-[0.95] lg:text-[78px]">
              Autonomous Operations for{" "}
              <span className="bg-gradient-to-r from-hr-ink-strong via-hr-rust to-amber-700 bg-clip-text text-transparent">
                Indian Freight Brokers.
              </span>
            </h1>

            <div className="mt-6 sm:mt-8 flex flex-col gap-8 md:mt-[32px] lg:flex-row lg:items-center lg:justify-between lg:gap-12">
              {/* Left Column: Mission Description & Fast CTA */}
              <div className="min-w-0 flex-1 max-w-[560px]">
                <p className="max-w-[500px] text-[15px] sm:text-[16.5px] font-normal leading-[1.65] text-hr-ink-2">
                  Putting AI agents to work across India&apos;s freight corridors
                  — ingesting chaotic WhatsApp voice notes, enforcing strict ₹2,500 margin floors,
                  and automating load coordination that improves with every dispatch.
                </p>

                <div id="hero-agent" className="mt-6 sm:mt-[28px] scroll-mt-32">
                  <form noValidate className="w-full max-w-[500px]">
                    <div className="flex flex-col gap-2.5 sm:flex-row sm:items-stretch sm:gap-0 rounded-lg shadow-lg border border-hr-line/80 bg-white overflow-hidden">
                      <label htmlFor="hero-email" className="sr-only">
                        Work email or WhatsApp
                      </label>
                      <input
                        id="hero-email"
                        type="text"
                        required
                        placeholder="Enter your WhatsApp number or email"
                        className="min-w-0 flex-1 bg-white px-4 py-[14px] font-body text-[14px] text-hr-ink-strong outline-none transition-colors placeholder:text-hr-ink-4 sm:border-r-0"
                        defaultValue=""
                      />
                      <button
                        type="submit"
                        className="group inline-flex w-full sm:w-auto items-center justify-center font-body text-[12px] uppercase leading-none tracking-[0.1em] no-underline transition-[opacity,transform,background-color] active:scale-[0.98] bg-hr-cta-solid-bg px-6 py-[14px] text-hr-cta-solid-fg duration-[250ms] hover:bg-hr-rust shrink-0 gap-2 cursor-pointer font-semibold"
                      >
                        <span>Book a demo</span>
                        <span aria-hidden="true" className="text-hr-rust group-hover:text-white transition-colors">
                          →
                        </span>
                      </button>
                    </div>
                  </form>
                </div>

                {/* Proof & Value Props */}
                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] text-hr-concrete">
                  <span className="flex items-center gap-1.5">
                    <span className="text-emerald-600 font-bold">✓</span> ₹2,500 Margin Floor
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-emerald-600 font-bold">✓</span> 9-Min Average Indent
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-emerald-600 font-bold">✓</span> ULIP & VAHAN Checked
                  </span>
                </div>
              </div>

              {/* Right Column: Live Dispatch Copilot Card */}
              <div className="hidden lg:block w-full max-w-[440px] shrink-0">
                <div className="relative rounded-2xl border border-hr-line/80 bg-white/90 p-5 shadow-2xl backdrop-blur-md transition-all hover:border-hr-stone/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
                  {/* Card Header */}
                  <div className="flex items-center justify-between border-b border-hr-line/60 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                      </span>
                      <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-hr-ink-strong">
                        Live Broker Engine
                      </span>
                    </div>
                    <span className="rounded bg-hr-stone/15 px-2 py-0.5 font-mono text-[10px] font-medium text-hr-concrete">
                      NH-48 • GURUGRAM → JNPT
                    </span>
                  </div>

                  {/* Telemetry Body */}
                  <div className="mt-3.5 space-y-2.5 font-mono text-[12px]">
                    <div className="flex items-center justify-between">
                      <span className="text-hr-concrete">Commodity</span>
                      <span className="font-semibold text-hr-ink-strong">Auto Components (21T)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-hr-concrete">Truck Type</span>
                      <span className="font-semibold text-hr-ink-strong">32ft Multi-Axle Container</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-hr-concrete">WhatsApp RFQ</span>
                      <span className="inline-flex items-center gap-1 font-medium text-emerald-700">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                        Hindi Voice Note Parsed
                      </span>
                    </div>

                    <div className="border-t border-hr-line/40 pt-2">
                      <div className="flex items-center justify-between text-[11.5px]">
                        <span className="text-hr-concrete">Shipper Quote Target</span>
                        <span className="font-semibold text-hr-ink-strong">₹78,000</span>
                      </div>
                      <div className="mt-1 flex items-center justify-between text-[11.5px]">
                        <span className="text-hr-concrete">Matched Carrier Rate</span>
                        <span className="font-semibold text-hr-ink-strong">₹74,800</span>
                      </div>
                    </div>

                    {/* Margin Floor Callout */}
                    <div className="flex items-center justify-between rounded-lg bg-emerald-500/10 px-3 py-2 border border-emerald-500/25">
                      <span className="text-[11px] font-bold uppercase tracking-wide text-emerald-800">
                        Protected Margin
                      </span>
                      <span className="font-bold text-[13.5px] text-emerald-700">
                        +₹3,200 <span className="text-[10px] font-normal text-emerald-600">(₹2.5K floor)</span>
                      </span>
                    </div>
                  </div>

                  {/* Verification Badges */}
                  <div className="mt-3.5 flex items-center justify-between border-t border-hr-line/60 pt-3 text-[11px] font-mono text-hr-concrete">
                    <span className="flex items-center gap-1 text-emerald-700 font-medium">
                      <span>✓</span> VAHAN Checked
                    </span>
                    <span className="flex items-center gap-1 text-emerald-700 font-medium">
                      <span>✓</span> FASTag Active
                    </span>
                    <span className="flex items-center gap-1 text-emerald-700 font-medium">
                      <span>✓</span> E-Way Auto-Linked
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
