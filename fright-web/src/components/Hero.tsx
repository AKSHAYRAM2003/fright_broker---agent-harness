"use client";

import React from "react";

export const Hero: React.FC = () => {
  return (
    <>
      <section className="relative min-h-[100svh] w-full overflow-hidden bg-hr-surface flex flex-col justify-center">
        {/* Neutral Base Background Layer */}
        <div className="absolute inset-0 h-full w-full bg-hr-surface" />

        {/* Fully Responsive Video & Fallback Container */}
        <div
          className="pointer-events-none absolute inset-0 z-[2] select-none overflow-hidden"
          aria-hidden="true"
        >
          {/* Static high-resolution poster fallback */}
          <img
            src="/images/cdn/hero_still.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
          />

          {/* Autoplaying Background Video with object-cover on all viewports */}
          <video
            poster="/images/redesign/hero-loop-poster.webp"
            muted
            loop
            playsInline
            preload="auto"
            autoPlay
            className="absolute inset-0 h-full w-full object-cover object-center"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
            <source src="/videos/HR_Landing_Hero_Loop_HD169_Lumen_v1.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Responsive Scrim Overlay for WCAG Contrast across all viewports */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[3]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.78) 100%), linear-gradient(to right, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.65) 55%, rgba(0, 0, 0, 0.55) 100%), linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 45%)",
          }}
        />

        {/* Hero Foreground Content */}
        <div className="relative z-[4] flex min-h-[100svh] w-full flex-col justify-center px-5 pt-32 pb-16 sm:px-8 sm:pt-36 md:px-12 md:pt-40 md:pb-20 lg:pt-36">
          <div className="hero-enter mx-auto w-full max-w-[1440px]">
            <h1
              className="max-w-[20ch] font-display text-[32px] xs:text-[38px] sm:text-[50px] md:text-[66px] lg:text-[80px] xl:text-[86px] leading-[1.05] sm:leading-[0.98] md:leading-[0.93] tracking-[-0.035em] sm:tracking-[-0.04em] text-white drop-shadow-md"
              style={{ textWrap: "balance" }}
            >
              Autonomous Operations for Indian Freight Brokers.
            </h1>

            <div className="mt-5 sm:mt-8 flex flex-col gap-6 sm:gap-8 md:mt-[34px] lg:flex-row lg:items-end lg:justify-between lg:gap-14">
              <div className="min-w-0 flex-1 max-w-[580px]">
                <p
                  className="max-w-[500px] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.6] drop-shadow-sm"
                  style={{ color: "var(--hr-surface-2, #f7f6f4)", textWrap: "pretty" }}
                >
                  Putting AI agents to work across India&apos;s freight corridors
                  — ingesting chaotic WhatsApp voice notes, enforcing strict ₹2,500 margin floors,
                  and automating load coordination that improves with every dispatch.
                </p>

                <div id="hero-agent" className="mt-6 sm:mt-[30px] scroll-mt-32">
                  <form noValidate className="w-full max-w-[500px]">
                    <div className="flex flex-col sm:flex-row sm:items-stretch rounded-lg overflow-hidden border border-white/30 bg-black/65 backdrop-blur-md shadow-2xl transition-all focus-within:border-white/60 divide-y divide-white/15 sm:divide-y-0 sm:divide-x">
                      <label htmlFor="hero-email" className="sr-only">
                        Work email or WhatsApp
                      </label>
                      <input
                        id="hero-email"
                        type="text"
                        required
                        placeholder="Enter your WhatsApp number or email"
                        className="min-w-0 flex-1 bg-transparent px-4 sm:px-6 py-[14px] font-body text-[14px] text-white placeholder:text-white/75 outline-none"
                        defaultValue=""
                      />
                      <button
                        type="submit"
                        className="hero-cta-btn inline-flex w-full sm:w-auto lg:min-w-max lg:whitespace-nowrap items-center justify-center gap-2 overflow-hidden px-6 py-[14px] font-body text-[12px] uppercase leading-none tracking-[0.1em] font-semibold no-underline active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hr-rust shrink-0 cursor-pointer"
                      >
                        <span
                          aria-hidden="true"
                          className="btn-curtain"
                        />
                        <span className="btn-text">
                          Book a demo
                        </span>
                        <span aria-hidden="true" className="btn-arrow">
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
