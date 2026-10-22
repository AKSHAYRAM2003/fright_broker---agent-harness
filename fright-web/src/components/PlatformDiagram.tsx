"use client";

import React from "react";

export const PlatformDiagram: React.FC = () => {
  return (
    <>
      <div
        data-mode="light"
        className="hr-landing font-body text-hr-ink-strong"
        id="platform-diagram"
      >
        <section
          id="platform-diagram"
          className="scroll-mt-24 border-t border-[#dad5cc] bg-hr-signal hrlight:border-hr-stone"
        >
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-14 px-5 py-20 md:px-12 md:py-[150px] lg:grid-cols-[0.85fr_1fr] lg:gap-20">
            <div>
              <h2 className="font-body text-[29px] leading-[1.04] tracking-[-0.02em] text-hr-canvas md:text-[46px]">
                Brokers need <span className="text-hr-ink-4">an operating harness.</span>
              </h2>
              <a
                className="mt-7 inline-flex items-center bg-hr-canvas px-6 py-[14px] font-body text-[12px] uppercase leading-none tracking-[0.1em] text-hr-lumen no-underline transition-opacity hover:opacity-85"
                href="#platform"
              >
                Harness architecture
              </a>
              <div className="mt-12 flex flex-col md:mt-14">
                <div className="border-t border-[#c9c4b9] py-[26px] hrlight:border-hr-stone">
                  <div className="mb-2.5 font-body text-[16px] text-hr-canvas">
                    Every decision is deterministically verified
                  </div>
                  <p className="max-w-[38ch] font-body text-[14px] leading-[1.6] text-hr-ink-5">
                    Unstructured WhatsApp voice notes and rates are evaluated against strict corridor benchmarks, vehicle limits, and a ₹2,500 margin floor.
                  </p>
                </div>
                <div className="border-t border-[#c9c4b9] py-[26px] hrlight:border-hr-stone">
                  <div className="mb-2.5 font-body text-[16px] text-hr-canvas">
                    Continuous learning from live highway state
                  </div>
                  <p className="max-w-[38ch] font-body text-[14px] leading-[1.6] text-hr-ink-5">
                    Real-time corridor memory synthesizes mandi truck availability, FASTag toll transit times, and unwritten driver conventions.
                  </p>
                </div>
                <div className="border-t border-[#c9c4b9] py-[26px] hrlight:border-hr-stone border-b">
                  <div className="mb-2.5 font-body text-[16px] text-hr-canvas">
                    Brokers supervise via priority action queues
                  </div>
                  <p className="max-w-[38ch] font-body text-[14px] leading-[1.6] text-hr-ink-5">
                    High-conviction quotes execute autonomously. Edge cases, driver disputes, and rate exceptions route instantly to dispatchers with one-click approvals.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full items-center justify-center lg:justify-end">
              <img
                src="/images/harness_systems.png"
                alt="VahanaAI Freight Broker Harness Architecture"
                className="h-auto w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[540px] xl:max-w-[600px] lg:ml-auto object-contain rounded-xl"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
