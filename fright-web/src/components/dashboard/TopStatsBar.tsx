"use client";

import React from "react";
import { TrendingUp, AlertTriangle, Clock, Zap, ArrowUpRight } from "lucide-react";

export const TopStatsBar: React.FC = () => {
  return (
    <section aria-label="Operational Key Metrics" className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {/* 1. Active Shipments */}
      <div className="relative overflow-hidden bg-white border border-neutral-200/90 rounded-xl p-4 shadow-xs hover:border-neutral-300 transition-all flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div>
            <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider font-semibold">
              Active Shipments
            </span>
            <div className="flex items-baseline gap-1.5 mt-1">
              <span className="font-display text-2xl font-bold tracking-tight text-neutral-900">
                28
              </span>
              <span className="font-sans text-xs text-neutral-500 font-medium">loads</span>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded font-mono text-[11px] font-semibold">
            <TrendingUp className="w-3 h-3" />
            +4 today
          </span>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between text-[11px] font-mono text-neutral-600 mb-1.5">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600"></span>
              18 in-transit
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
              6 loading
            </span>
            <span className="flex items-center gap-1.5 text-neutral-400">
              <span className="h-1.5 w-1.5 rounded-full bg-neutral-300"></span>
              4 unassigned
            </span>
          </div>
          <div className="w-full h-1.5 bg-neutral-100 rounded-full overflow-hidden flex">
            <div className="bg-emerald-500 h-full" style={{ width: "64%" }} title="18 In-Transit (64%)"></div>
            <div className="bg-amber-400 h-full" style={{ width: "22%" }} title="6 Loading (22%)"></div>
            <div className="bg-neutral-300 h-full" style={{ width: "14%" }} title="4 Unassigned (14%)"></div>
          </div>
        </div>
      </div>

      {/* 2. Quotes Under Review */}
      <div className="relative overflow-hidden bg-white border border-neutral-200/90 rounded-xl p-4 shadow-xs hover:border-neutral-300 transition-all flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider font-semibold">
                Quotes Under Review
              </span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
            </div>
            <div className="flex items-baseline gap-1.5 mt-1">
              <span className="font-display text-2xl font-bold tracking-tight text-neutral-900">
                5
              </span>
              <span className="font-sans text-xs text-neutral-500 font-medium">live biddings</span>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-50 text-amber-800 border border-amber-200 rounded font-mono text-[11px] font-semibold">
            <Clock className="w-3 h-3 text-amber-600" />
            Avg: 4.2m
          </span>
        </div>

        <div className="mt-4 flex items-end justify-between gap-1 h-5 pt-1">
          <div className="w-full bg-amber-200 h-2 rounded-t-xs"></div>
          <div className="w-full bg-amber-300 h-3 rounded-t-xs"></div>
          <div className="w-full bg-amber-300 h-4 rounded-t-xs"></div>
          <div className="w-full bg-amber-400 h-2.5 rounded-t-xs"></div>
          <div className="w-full bg-amber-500 h-5 rounded-t-xs"></div>
          <div className="w-full bg-amber-400 h-3.5 rounded-t-xs"></div>
          <div className="w-full bg-amber-500 h-5 rounded-t-xs animate-pulse"></div>
        </div>
      </div>

      {/* 3. Action Items (HITL) */}
      <div className="relative overflow-hidden bg-white border border-[#ff462d]/30 bg-gradient-to-r from-red-50/20 to-white rounded-xl p-4 shadow-xs hover:border-[#ff462d]/50 transition-all flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider font-semibold">
                Action Items (HITL)
              </span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff462d] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff462d]"></span>
              </span>
            </div>
            <div className="flex items-baseline gap-1.5 mt-1">
              <span className="font-display text-2xl font-bold tracking-tight text-[#ff462d]">
                3
              </span>
              <span className="font-sans text-xs text-neutral-500 font-medium">interventions</span>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-red-100/70 text-[#ff462d] border border-red-200 rounded font-mono text-[11px] font-bold">
            <AlertTriangle className="w-3 h-3" />
            Decision Needed
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between font-mono text-[11px]">
          <span className="text-[#ff462d] font-semibold">1 Margin Breach</span>
          <span className="text-emerald-700 font-semibold">1 Ready to Lock</span>
          <span className="text-amber-700 font-semibold">1 Payload Deficit</span>
        </div>
      </div>

      {/* 4. Gross Margin Locked */}
      <div className="relative overflow-hidden bg-white border border-neutral-200/90 rounded-xl p-4 shadow-xs hover:border-neutral-300 transition-all flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div>
            <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider font-semibold">
              Gross Margin Locked
            </span>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="font-display text-2xl font-bold tracking-tight text-emerald-700">
                ₹1,84,500
              </span>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded font-mono text-[11px] font-semibold">
            <ArrowUpRight className="w-3 h-3" />
            +12.4%
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between font-mono text-[11px] pt-1 border-t border-neutral-100">
          <span className="text-neutral-500">Avg / Dispatch:</span>
          <span className="font-bold text-neutral-900">
            ₹6,589 <span className="text-neutral-400 font-normal">| 11.2%</span>
          </span>
        </div>
      </div>
    </section>
  );
};

