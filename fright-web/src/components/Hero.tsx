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
              className="absolute left-1/2 top-1/2 h-auto w-full max-w-none -translate-x-1/2 -translate-y-1/2"
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
        {/* Dark Overlay on Hero Video */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[3]"
          style={{
            background:
              "linear-gradient(to right, rgba(0, 0, 0, 0.82) 0%, rgba(0, 0, 0, 0.65) 50%, rgba(0, 0, 0, 0.50) 100%), linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 40%)",
          }}
        ></div>
        <div className="relative z-[4] flex min-h-[100svh] flex-col justify-center px-5 pt-28 pb-14 sm:pt-32 md:px-12 md:pt-20 md:pb-14">
          <div className="hero-enter mx-auto w-full max-w-[1440px]">
            <h1 className="max-w-[18ch] font-display text-[38px] leading-[1.0] tracking-[-0.04em] text-white sm:text-[52px] sm:leading-[0.96] md:text-[68px] md:leading-[0.94] lg:text-[82px] drop-shadow-md">
              Autonomous Operations for Indian Freight Brokers.
            </h1>
            <div className="mt-6 sm:mt-8 flex flex-col gap-8 md:mt-[34px] lg:flex-row lg:items-end lg:justify-between lg:gap-14">
              <div className="min-w-0 flex-1 max-w-[560px]">
                <p
                  className="max-w-[480px] text-[15px] sm:text-[16px] leading-[1.6] drop-shadow-sm text-hr-surface-2"
                  style={{ color: "var(--hr-surface-2, #f7f6f4)" }}
                >
                  Putting AI agents to work across India&apos;s freight corridors
                  — ingesting chaotic WhatsApp voice notes, enforcing strict ₹2,500 margin floors,
                  and automating load coordination that improves with every dispatch.
                </p>
                <div id="hero-agent" className="mt-6 sm:mt-[30px] scroll-mt-32">
                  <form noValidate className="w-full max-w-[480px]">
                    <div className="flex flex-col gap-2.5 sm:flex-row sm:items-stretch sm:gap-0 rounded-lg overflow-hidden border border-white/25 bg-black/60 backdrop-blur-md shadow-2xl transition-colors focus-within:border-white/50">
                      <label htmlFor="hero-email" className="sr-only">
                        Work email or WhatsApp
                      </label>
                      <input
                        id="hero-email"
                        type="text"
                        required
                        placeholder="Enter your WhatsApp number or email"
                        className="min-w-0 flex-1 bg-transparent px-5 sm:px-6 py-[14px] font-body text-[14px] text-white placeholder:text-white/50 outline-none"
                        defaultValue=""
                      />
                      <button
                        type="submit"
                        className="hero-cta-btn group inline-flex w-full sm:w-auto lg:min-w-max lg:whitespace-nowrap items-center justify-center gap-2 overflow-hidden bg-hr-stone px-6 py-[14px] font-body text-[12px] uppercase leading-none tracking-[0.1em] text-[#070707] font-semibold no-underline transition-colors duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] hover:text-white group-hover:text-white active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hr-rust shrink-0 cursor-pointer"
                      >
                        <span
                          aria-hidden="true"
                          className="btn-curtain bg-[#070707]"
                        ></span>
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                          Book a demo
                        </span>
                        <span aria-hidden="true" className="relative z-10 text-hr-rust transition-colors duration-300 group-hover:text-white">
                          →
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
