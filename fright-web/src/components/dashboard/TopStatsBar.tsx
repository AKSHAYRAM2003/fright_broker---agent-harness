"use client";

import React from "react";

export const TopStatsBar: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto no-scrollbar pb-0.5">
      <section
        aria-label="Operational Key Metrics"
        className="grid grid-cols-4 min-w-[740px] md:min-w-full gap-2.5 sm:gap-3 lg:gap-4 w-full"
      >
        {/* Stat Card 1: Active Shipments */}
        <div className="relative overflow-hidden bg-white border border-[#e7e5e4] hover:border-[#be3420]/30 rounded-xl p-3 sm:p-3.5 lg:p-4 shadow-2xs transition-all flex flex-col justify-between group">
          <div className="flex items-start justify-between gap-1.5">
            <div className="flex flex-col">
              <span className="font-mono text-[9px] sm:text-[10px] text-[#71717a] uppercase tracking-wider font-semibold">
                Active Shipments
              </span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-[#18181b]">
                  28
                </span>
                <span className="font-mono text-[11px] text-[#71717a] font-medium">loads</span>
              </div>
            </div>
            <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-[#ecfdf5] text-[#047857] border border-[#a7f3d0] rounded font-mono text-[9px] sm:text-[10px] font-bold shrink-0">
              <span className="material-symbols-outlined text-[11px]">trending_up</span>
              +4 today
            </span>
          </div>

          <div className="mt-2.5 sm:mt-3">
            <div className="flex items-center justify-between text-[#71717a] font-mono text-[9px] sm:text-[10px] mb-1">
              <span className="flex items-center gap-1 text-[#047857] font-medium truncate">
                <span className="h-1.5 w-1.5 rounded-full bg-[#047857] shrink-0"></span>18 in-transit
              </span>
              <span className="flex items-center gap-1 text-[#be3420] font-medium truncate">
                <span className="h-1.5 w-1.5 rounded-full bg-[#be3420] shrink-0"></span>6 loading
              </span>
              <span className="flex items-center gap-1 text-[#a1a1aa] truncate">
                <span className="h-1.5 w-1.5 rounded-full bg-[#e7e5e4] shrink-0"></span>4 unassigned
              </span>
            </div>
            <div className="w-full h-1.5 bg-[#f5f4f0] rounded-full overflow-hidden flex">
              <div className="bg-[#047857] h-full" style={{ width: "64.2%" }} title="18 In-Transit (64%)"></div>
              <div className="bg-[#be3420] h-full" style={{ width: "21.4%" }} title="6 Loading (21%)"></div>
              <div className="bg-[#e7e5e4] h-full" style={{ width: "14.4%" }} title="4 Unassigned (15%)"></div>
            </div>
          </div>
        </div>

        {/* Stat Card 2: Quotes Under Review */}
        <div className="relative overflow-hidden bg-white border border-[#e7e5e4] hover:border-[#be3420]/30 rounded-xl p-3 sm:p-3.5 lg:p-4 shadow-2xs transition-all flex flex-col justify-between group">
          <div className="flex items-start justify-between gap-1.5">
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-[9px] sm:text-[10px] text-[#71717a] uppercase tracking-wider font-semibold">
                  Quotes Under Review
                </span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b45309] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#b45309]"></span>
                </span>
              </div>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-[#18181b]">
                  5
                </span>
                <span className="font-mono text-[11px] text-[#71717a] font-medium">live biddings</span>
              </div>
            </div>
            <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-[#fef3c7] text-[#b45309] border border-[#fde68a] rounded font-mono text-[9px] sm:text-[10px] font-bold shrink-0">
              <span className="material-symbols-outlined text-[11px]">speed</span>
              Avg resp: 4.2m
            </span>
          </div>

          {/* Calibrated Burnt Rust Mini Barchart */}
          <div className="mt-2.5 sm:mt-3 flex items-end justify-between gap-1.5 h-4 sm:h-5 pt-0.5">
            <div className="w-full bg-[#be3420]/20 h-1.5 rounded-t-xs" title="10m ago"></div>
            <div className="w-full bg-[#be3420]/30 h-2.5 rounded-t-xs" title="8m ago"></div>
            <div className="w-full bg-[#be3420]/45 h-3.5 rounded-t-xs" title="6m ago"></div>
            <div className="w-full bg-[#be3420]/60 h-2 rounded-t-xs" title="4m ago"></div>
            <div className="w-full bg-[#be3420]/75 h-4.5 rounded-t-xs" title="2m ago"></div>
            <div className="w-full bg-[#be3420] h-3.5 rounded-t-xs" title="1m ago"></div>
            <div className="w-full bg-[#be3420] h-5 rounded-t-xs animate-pulse" title="Now"></div>
          </div>
        </div>

        {/* Stat Card 3: Action Items HITL */}
        <div className="relative overflow-hidden bg-white border border-[#be3420]/25 bg-gradient-to-r from-[#fef2f0]/60 via-white to-white rounded-xl p-3 sm:p-3.5 lg:p-4 shadow-2xs transition-all flex flex-col justify-between group">
          <div className="flex items-start justify-between gap-1.5">
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-[9px] sm:text-[10px] text-[#be3420] uppercase tracking-wider font-bold">
                  Action Items (HITL)
                </span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#be3420] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#be3420]"></span>
                </span>
              </div>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-[#be3420]">
                  3
                </span>
                <span className="font-mono text-[11px] text-[#71717a] font-medium">critical interventions</span>
              </div>
            </div>
            <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-[#fef2f0] text-[#be3420] border border-[#fecaca] rounded font-mono text-[9px] sm:text-[10px] font-bold shrink-0">
              <span className="material-symbols-outlined text-[11px] animate-bounce">priority_high</span>
              Action needed
            </span>
          </div>

          <div className="mt-2.5 sm:mt-3 flex items-center justify-between font-mono text-[9px] sm:text-[10px] pt-1 border-t border-[#f5f4f0]">
            <span className="text-[#be3420] font-bold">1 Margin Breach</span>
            <span className="text-[#047857] font-bold">1 Ready to Lock</span>
            <span className="text-[#b45309] font-bold">1 Payload Deficit</span>
          </div>
        </div>

        {/* Stat Card 4: Gross Margin Locked */}
        <div className="relative overflow-hidden bg-white border border-[#e7e5e4] hover:border-[#047857]/40 rounded-xl p-3 sm:p-3.5 lg:p-4 shadow-2xs transition-all flex flex-col justify-between group">
          <div className="flex items-start justify-between gap-1.5">
            <div className="flex flex-col">
              <span className="font-mono text-[9px] sm:text-[10px] text-[#71717a] uppercase tracking-wider font-semibold">
                Gross Margin Locked
              </span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="font-sans text-lg sm:text-2xl font-bold tracking-tight text-[#18181b]">
                  ₹1,84,500
                </span>
              </div>
            </div>
            <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-[#ecfdf5] text-[#047857] border border-[#a7f3d0] rounded font-mono text-[9px] sm:text-[10px] font-bold shrink-0">
              <span className="material-symbols-outlined text-[11px]">north_east</span>
              +12.4%
            </span>
          </div>

          <div className="mt-2.5 sm:mt-3 flex items-center justify-between font-mono text-[9px] sm:text-[10px] pt-1 border-t border-[#f5f4f0]">
            <span className="text-[#71717a]">Avg / Dispatch:</span>
            <span className="text-[#18181b] font-bold tracking-tight">
              ₹6,589 <span className="text-[#047857] font-medium">| 11.2%</span>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
