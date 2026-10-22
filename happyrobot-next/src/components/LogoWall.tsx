"use client";

import React from "react";
import { PARTNER_LOGOS } from "@/data/site-data";

export const LogoWall: React.FC = () => {
  return (
    <section className="hr-logo-wall border-y border-hr-line bg-hr-surface py-12 md:py-16">
      <div className="mx-auto max-w-[1440px] px-5 md:px-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-emerald-800 font-semibold">
              Ecosystem & Compliance Interoperability
            </div>
            <p className="text-[13.5px] text-hr-ink-3 mt-1">
              Integrated with Indian logistics digital infrastructure, enterprise shippers, and major transport corridors.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-mono text-[11px] text-emerald-800 font-medium">ULIP & VAHAN Live Sync</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {PARTNER_LOGOS.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center rounded-lg border border-hr-line bg-white p-4 transition-all duration-200 hover:border-emerald-600/40 hover:shadow-sm"
            >
              <span className="font-body text-[13px] font-semibold text-hr-ink-strong text-center">
                {item.name}
              </span>
              <span className="mt-1 font-mono text-[10px] uppercase text-hr-ink-4 tracking-wider">
                Certified Gateway
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
