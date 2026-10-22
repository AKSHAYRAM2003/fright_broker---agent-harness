"use client";

import React from "react";
import { CountUp } from "@/components/CountUp";

export const PlatformDeepDive: React.FC = () => {
  return (
    <div data-mode="light" className="hr-landing font-body text-hr-ink-strong">
      <section id="platform" className="scroll-mt-24 bg-hr-stone">
        <div aria-hidden="true" className="h-px bg-hr-lumen"></div>
        <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-12 md:py-[120px]">
          <div>
            <h2 className="mb-12 max-w-[20ch] font-body text-[29px] leading-none tracking-[-0.02em] text-hr-canvas md:mb-[72px] md:text-[46px]">
              We handle the work that matters most.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-px border border-[#a59a8d] hrlight:border-hr-stone bg-[#a59a8d] hrlight:bg-hr-stone md:grid-cols-3">
            <div className="bg-hr-signal p-[30px_20px] md:p-[44px_36px]">
              <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.04em] text-hr-concrete md:mb-7">
                <span
                  aria-hidden="true"
                  className="inline-block shrink-0 bg-hr-rust"
                  style={{ width: "7px", height: "7px" }}
                ></span>
                Depth
              </div>
              <h3 className="mb-2.5 font-body text-[20px] leading-[1.15] tracking-[-0.01em] text-hr-canvas md:mb-4 md:text-[21px]">
                Complex workflows
              </h3>
              <p className="text-[14px] leading-[1.65] text-hr-ink-6 md:text-[14.5px]">
                Workflows built for the messiness of reality, supporting granular logic and capability.
              </p>
            </div>
            <div className="bg-hr-signal p-[30px_20px] md:p-[44px_36px]">
              <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.04em] text-hr-concrete md:mb-7">
                <span
                  aria-hidden="true"
                  className="inline-block shrink-0 bg-hr-rust"
                  style={{ width: "7px", height: "7px" }}
                ></span>
                Ownership
              </div>
              <h3 className="mb-2.5 font-body text-[20px] leading-[1.15] tracking-[-0.01em] text-hr-canvas md:mb-4 md:text-[21px]">
                Entirely yours
              </h3>
              <p className="text-[14px] leading-[1.65] text-hr-ink-6 md:text-[14.5px]">
                A fully custom and transparent platform integrated with your systems and ways of working.
              </p>
            </div>
            <div className="bg-hr-signal p-[30px_20px] md:p-[44px_36px]">
              <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.04em] text-hr-concrete md:mb-7">
                <span
                  aria-hidden="true"
                  className="inline-block shrink-0 bg-hr-rust"
                  style={{ width: "7px", height: "7px" }}
                ></span>
                Breadth
              </div>
              <h3 className="mb-2.5 font-body text-[20px] leading-[1.15] tracking-[-0.01em] text-hr-canvas md:mb-4 md:text-[21px]">
                Across functions
              </h3>
              <p className="text-[14px] leading-[1.65] text-hr-ink-6 md:text-[14.5px]">
                When one agent learns and improves anywhere, every agent gets better everywhere.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-px border border-t-0 border-[#a59a8d] hrlight:border-hr-stone bg-[#a59a8d] hrlight:bg-hr-stone md:grid-cols-4">
            <div className="bg-hr-signal p-[26px_20px] md:p-[34px_36px]">
              <div className="font-body text-[34px] tracking-[0.005em] text-hr-canvas md:text-[40px]">
                <CountUp value={10} suffix="M+" />
              </div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.1em] text-hr-ink-6 md:mt-2.5">
                Interactions / month
              </div>
            </div>
            <div className="bg-hr-signal p-[26px_20px] md:p-[34px_36px]">
              <div className="font-body text-[34px] tracking-[0.005em] text-hr-canvas md:text-[40px]">
                <CountUp value={70} suffix="%+" />
              </div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.1em] text-hr-ink-6 md:mt-2.5">
                Autonomous resolution
              </div>
            </div>
            <div className="bg-hr-signal p-[26px_20px] md:p-[34px_36px]">
              <div className="font-body text-[34px] tracking-[0.005em] text-hr-canvas md:text-[40px]">
                <CountUp value={75} suffix="%" />
              </div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.1em] text-hr-ink-6 md:mt-2.5">
                Cost reduction
              </div>
            </div>
            <div className="bg-hr-signal p-[26px_20px] md:p-[34px_36px]">
              <div className="font-body text-[34px] tracking-[0.005em] text-hr-canvas md:text-[40px]">
                <CountUp value={10} suffix="X" />
              </div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.1em] text-hr-ink-6 md:mt-2.5">
                Capacity increase
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
