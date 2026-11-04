"use client";

import React from "react";
import { DashboardStats } from "@/types/load";
import { NumberRoll } from "@/components/stageshow/NumberRoll";
import { TrendingUp, Zap, AlertTriangle, ShieldCheck } from "lucide-react";

interface TopStatsBarProps {
  stats?: Partial<DashboardStats>;
}

export const TopStatsBar: React.FC<TopStatsBarProps> = ({ stats }) => {
  const activeShipments = stats?.activeShipments ?? 28;
  const inTransit = stats?.inTransit ?? 18;
  const loading = stats?.loading ?? 6;
  const unassigned = stats?.unassigned ?? 4;
  const quotesUnderReview = stats?.quotesUnderReview ?? 5;
  const avgResponseTime = stats?.avgResponseTime ?? "4.2m";
  const actionItemsHitl = stats?.actionItemsHitl ?? 3;
  const marginBreaches = stats?.marginBreaches ?? 1;
  const readyToLock = stats?.readyToLock ?? 1;
  const payloadDeficits = stats?.payloadDeficits ?? 1;
  const grossMarginLocked = stats?.grossMarginLocked ?? 184500;
  const avgMarginPerDispatch = stats?.avgMarginPerDispatch ?? 6589;
  const avgMarginPct = stats?.avgMarginPct ?? 11.2;

  // Percentage calculations for status bar
  const totalLoads = activeShipments || 1;
  const inTransitPct = Math.min(100, Math.round((inTransit / totalLoads) * 100));
  const loadingPct = Math.min(100 - inTransitPct, Math.round((loading / totalLoads) * 100));
  const unassignedPct = Math.max(0, 100 - inTransitPct - loadingPct);

  return (
    <div className="w-full overflow-x-auto no-scrollbar pb-0.5">
      <section
        aria-label="Operational Key Performance Indicators"
        className="grid grid-cols-4 min-w-[760px] md:min-w-full gap-2.5 sm:gap-3.5 w-full"
      >
        {/* KPI 1: Active In-Transit Fleet */}
        <div className="relative overflow-hidden bg-white border border-[#dfdbd5] hover:border-[#a8a29e] rounded-xl p-3.5 sm:p-4 shadow-2xs transition-all duration-300 flex flex-col justify-between group">
          <div>
            <div className="flex items-start justify-between gap-1.5">
              <span className="font-sans text-[11px] text-[#78716c] uppercase tracking-wider font-semibold">
                Active Shipments
              </span>
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-[#ecfdf5] text-[#047857] border border-[#a7f3d0] rounded font-sans text-[11px] font-semibold shrink-0">
                <TrendingUp className="w-3 h-3" />
                +4 today
              </span>
            </div>

            {/* Hero Number */}
            <div className="flex items-baseline gap-1.5 mt-1">
              <span className="font-sans text-2xl sm:text-[28px] font-bold tracking-tight text-[#070707] leading-none">
                <NumberRoll value={activeShipments} />
              </span>
              <span className="font-sans text-xs text-[#78716c] font-medium">loads on corridor</span>
            </div>
          </div>

          {/* Segmented Pipeline Track */}
          <div className="mt-3 pt-2.5 border-t border-[#f5f4f0] flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-[#78716c] font-sans text-[11px]">
              <span className="flex items-center gap-1 text-[#047857] font-semibold truncate">
                <span className="h-1.5 w-1.5 rounded-full bg-[#047857] shrink-0" />
                {inTransit} in-transit
              </span>
              <span className="flex items-center gap-1 text-[#be3420] font-semibold truncate">
                <span className="h-1.5 w-1.5 rounded-full bg-[#be3420] shrink-0" />
                {loading} loading
              </span>
              <span className="flex items-center gap-1 text-[#a8a29e] font-medium truncate">
                <span className="h-1.5 w-1.5 rounded-full bg-[#d6d3cd] shrink-0" />
                {unassigned} unassigned
              </span>
            </div>

            {/* Smooth Tri-color Track */}
            <div className="w-full h-1.5 bg-[#eae7e1] rounded-full overflow-hidden flex shadow-inner">
              <div
                className="bg-[#047857] h-full transition-all duration-700 ease-out"
                style={{ width: `${inTransitPct}%` }}
                title={`${inTransit} In-Transit (${inTransitPct}%)`}
              />
              <div
                className="bg-[#be3420] h-full transition-all duration-700 ease-out"
                style={{ width: `${loadingPct}%` }}
                title={`${loading} Loading (${loadingPct}%)`}
              />
              <div
                className="bg-[#d6d3cd] h-full transition-all duration-700 ease-out"
                style={{ width: `${unassignedPct}%` }}
                title={`${unassigned} Unassigned (${unassignedPct}%)`}
              />
            </div>
          </div>
        </div>

        {/* KPI 2: WhatsApp Spot Biddings */}
        <div className="relative overflow-hidden bg-white border border-[#dfdbd5] hover:border-[#a8a29e] rounded-xl p-3.5 sm:p-4 shadow-2xs transition-all duration-300 flex flex-col justify-between group">
          <div>
            <div className="flex items-start justify-between gap-1.5">
              <div className="flex items-center gap-1.5">
                <span className="font-sans text-[11px] text-[#78716c] uppercase tracking-wider font-semibold">
                  Quotes Under Review
                </span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b45309] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#b45309]" />
                </span>
              </div>
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-[#fef3c7] text-[#b45309] border border-[#fde68a] rounded font-sans text-[11px] font-semibold shrink-0">
                <Zap className="w-3 h-3 text-[#b45309]" />
                {avgResponseTime} resp
              </span>
            </div>

            {/* Hero Number */}
            <div className="flex items-baseline gap-1.5 mt-1">
              <span className="font-sans text-2xl sm:text-[28px] font-bold tracking-tight text-[#070707] leading-none">
                <NumberRoll value={quotesUnderReview} />
              </span>
              <span className="font-sans text-xs text-[#78716c] font-medium">live biddings</span>
            </div>
          </div>

          {/* Stageshow Mini Barchart Rhythm */}
          <div className="mt-3 pt-2.5 border-t border-[#f5f4f0] flex items-end justify-between gap-1.5 h-6">
            <div className="flex-1 bg-[#be3420]/25 hover:bg-[#be3420]/40 transition-colors h-2 rounded-t-xs" title="12m ago: 1 quote" />
            <div className="flex-1 bg-[#be3420]/35 hover:bg-[#be3420]/50 transition-colors h-3.5 rounded-t-xs" title="9m ago: 2 quotes" />
            <div className="flex-1 bg-[#be3420]/45 hover:bg-[#be3420]/60 transition-colors h-5 rounded-t-xs" title="6m ago: 4 quotes" />
            <div className="flex-1 bg-[#be3420]/60 hover:bg-[#be3420]/75 transition-colors h-3 rounded-t-xs" title="4m ago: 2 quotes" />
            <div className="flex-1 bg-[#be3420]/75 hover:bg-[#be3420]/90 transition-colors h-5.5 rounded-t-xs" title="2m ago: 5 quotes" />
            <div className="flex-1 bg-[#be3420] h-4 rounded-t-xs" title="1m ago: 3 quotes" />
            <div className="flex-1 bg-[#be3420] h-6 rounded-t-xs animate-pulse" title="Now: Active incoming quote" />
          </div>
        </div>

        {/* KPI 3: Action Items HITL (Focal Alert Card) */}
        <div className="relative overflow-hidden bg-[#fefcfb] border border-[#be3420]/30 hover:border-[#be3420]/50 rounded-xl p-3.5 sm:p-4 shadow-2xs transition-all duration-300 flex flex-col justify-between group bg-gradient-to-br from-[#fef2f0]/60 via-white to-white">
          <div>
            <div className="flex items-start justify-between gap-1.5">
              <div className="flex items-center gap-1.5">
                <span className="font-sans text-[11px] text-[#be3420] uppercase tracking-wider font-bold">
                  Action Items (HITL)
                </span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#be3420] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#be3420]" />
                </span>
              </div>
              <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-[#fef2f0] text-[#be3420] border border-[#fecaca] rounded font-sans text-[11px] font-bold shrink-0">
                <AlertTriangle className="w-3 h-3 text-[#be3420]" />
                Action needed
              </span>
            </div>

            {/* Hero Number */}
            <div className="flex items-baseline gap-1.5 mt-1">
              <span className="font-sans text-2xl sm:text-[28px] font-bold tracking-tight text-[#be3420] leading-none">
                <NumberRoll value={actionItemsHitl} />
              </span>
              <span className="font-sans text-xs text-[#78716c] font-medium">interventions required</span>
            </div>
          </div>

          {/* Tri-Pill Sub-Metrics */}
          <div className="mt-3 pt-2.5 border-t border-[#fecaca]/40 flex items-center justify-between font-sans text-[11px]">
            <span className="text-[#be3420] font-semibold flex items-center gap-0.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#be3420]" />
              {marginBreaches} Margin
            </span>
            <span className="text-[#047857] font-semibold flex items-center gap-0.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#047857]" />
              {readyToLock} Ready
            </span>
            <span className="text-[#b45309] font-semibold flex items-center gap-0.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#b45309]" />
              {payloadDeficits} Deficit
            </span>
          </div>
        </div>

        {/* KPI 4: Gross Margin Locked */}
        <div className="relative overflow-hidden bg-white border border-[#dfdbd5] hover:border-[#a8a29e] rounded-xl p-3.5 sm:p-4 shadow-2xs transition-all duration-300 flex flex-col justify-between group">
          <div>
            <div className="flex items-start justify-between gap-1.5">
              <span className="font-sans text-[11px] text-[#78716c] uppercase tracking-wider font-semibold">
                Gross Margin Locked
              </span>
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-[#ecfdf5] text-[#047857] border border-[#a7f3d0] rounded font-sans text-[11px] font-semibold shrink-0">
                <ShieldCheck className="w-3 h-3 text-[#047857]" />
                +12.4%
              </span>
            </div>

            {/* Hero Number */}
            <div className="flex items-baseline gap-1.5 mt-1">
              <span className="font-sans text-2xl sm:text-[28px] font-bold tracking-tight text-[#070707] leading-none">
                <NumberRoll value={grossMarginLocked} prefix="₹" />
              </span>
            </div>
          </div>

          {/* Efficiency Benchmark */}
          <div className="mt-3 pt-2.5 border-t border-[#f5f4f0] flex items-center justify-between font-sans text-[11px]">
            <span className="text-[#78716c]">Avg / Dispatch:</span>
            <span className="text-[#070707] font-bold tracking-tight">
              <NumberRoll value={avgMarginPerDispatch} prefix="₹" />{" "}
              <span className="text-[#047857] font-semibold">
                | <NumberRoll value={avgMarginPct} decimals={1} suffix="%" />
              </span>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
