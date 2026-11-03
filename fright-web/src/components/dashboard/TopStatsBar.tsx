"use client";

import React from "react";

export const TopStatsBar: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto no-scrollbar pb-1">
      <section
        aria-label="Operational Key Metrics"
        className="grid grid-cols-2 lg:grid-cols-4 min-w-[640px] md:min-w-full gap-3 sm:gap-4 w-full"
      >
        {/* Stat Card 1: Active Shipments */}
        <div className="bg-white border border-[#e7e5e4] hover:border-[#d6d3cd] rounded-xl p-4 sm:p-5 shadow-2xs transition-all flex flex-col justify-between">
          <div className="flex items-start justify-between gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#52525b] font-semibold">
              Active Shipments
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#ecfdf5] text-[#047857] border border-[#a7f3d0] rounded font-mono text-xs font-semibold shrink-0">
              <span className="material-symbols-outlined text-xs">trending_up</span>
              +4 today
            </span>
          </div>

          <div className="my-2.5">
            <div className="flex items-baseline gap-1.5">
              <span className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-[#18181b]">
                28
              </span>
              <span className="font-sans text-xs text-[#71717a] font-medium">loads in network</span>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2 border-t border-[#f5f4f0] text-xs font-mono text-[#52525b]">
            <span className="text-[#047857] font-semibold">18 in-transit</span>
            <span className="text-[#d6d3cd]">•</span>
            <span className="text-[#b45309] font-semibold">6 loading</span>
            <span className="text-[#d6d3cd]">•</span>
            <span className="text-[#71717a]">4 unassigned</span>
          </div>
        </div>

        {/* Stat Card 2: Quotes Under Review */}
        <div className="bg-white border border-[#e7e5e4] hover:border-[#d6d3cd] rounded-xl p-4 sm:p-5 shadow-2xs transition-all flex flex-col justify-between">
          <div className="flex items-start justify-between gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#52525b] font-semibold">
              Quotes Under Review
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#fef3c7] text-[#b45309] border border-[#fde68a] rounded font-mono text-xs font-semibold shrink-0">
              <span className="material-symbols-outlined text-xs">speed</span>
              Avg 4.2m
            </span>
          </div>

          <div className="my-2.5">
            <div className="flex items-baseline gap-1.5">
              <span className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-[#18181b]">
                5
              </span>
              <span className="font-sans text-xs text-[#71717a] font-medium">live transporter biddings</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-[#f5f4f0] text-xs font-mono text-[#52525b]">
            <span>Fast-track response target</span>
            <span className="text-[#047857] font-semibold">&lt; 15 min SLA</span>
          </div>
        </div>

        {/* Stat Card 3: Action Items HITL */}
        <div className="bg-white border border-[#be3420]/30 rounded-xl p-4 sm:p-5 shadow-2xs transition-all flex flex-col justify-between bg-gradient-to-br from-[#fef2f0]/50 via-white to-white">
          <div className="flex items-start justify-between gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#be3420] font-bold">
              Decisions Required
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#fef2f0] text-[#be3420] border border-[#fecaca] rounded font-mono text-xs font-bold shrink-0">
              <span className="material-symbols-outlined text-xs">error_outline</span>
              Immediate action
            </span>
          </div>

          <div className="my-2.5">
            <div className="flex items-baseline gap-1.5">
              <span className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-[#be3420]">
                3
              </span>
              <span className="font-sans text-xs text-[#be3420]/80 font-medium">pending in AI queue</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-[#fecaca]/50 text-xs font-mono text-[#52525b]">
            <span className="text-[#be3420] font-semibold">1 Margin Floor</span>
            <span className="text-[#d6d3cd]">•</span>
            <span className="text-[#047857] font-semibold">1 Fast Book</span>
            <span className="text-[#d6d3cd]">•</span>
            <span className="text-[#b45309] font-semibold">1 Incomplete</span>
          </div>
        </div>

        {/* Stat Card 4: Gross Margin Locked */}
        <div className="bg-white border border-[#e7e5e4] hover:border-[#d6d3cd] rounded-xl p-4 sm:p-5 shadow-2xs transition-all flex flex-col justify-between">
          <div className="flex items-start justify-between gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#52525b] font-semibold">
              Gross Margin Locked
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#ecfdf5] text-[#047857] border border-[#a7f3d0] rounded font-mono text-xs font-semibold shrink-0">
              <span className="material-symbols-outlined text-xs">north_east</span>
              +12.4% vs target
            </span>
          </div>

          <div className="my-2.5">
            <div className="flex items-baseline gap-1.5">
              <span className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-[#18181b]">
                ₹1,84,500
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-[#f5f4f0] text-xs font-mono text-[#52525b]">
            <span>Average per dispatch:</span>
            <span className="text-[#18181b] font-semibold">
              ₹6,589 <span className="text-[#047857] font-bold">(11.2%)</span>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
