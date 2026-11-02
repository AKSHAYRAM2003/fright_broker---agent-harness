"use client";

import React from "react";

export const TopStatsBar: React.FC = () => {
  return (
    <section aria-label="Operational Key Metrics" className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4">
      {/* Stat Card 1: Active Shipments */}
      <div className="relative overflow-hidden bg-surface-container border border-surface-container-high rounded-xl p-3.5 sm:p-4 shadow-xs flex flex-col justify-between group hover:border-primary/40 transition-all">
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <span className="font-mono text-[10px] text-outline uppercase tracking-wider">
              Active Shipments
            </span>
            <div className="flex items-baseline gap-1.5 mt-0.5">
              <span className="font-display text-2xl font-bold tracking-tight text-on-surface">
                28
              </span>
              <span className="font-mono text-xs text-on-surface-variant font-medium">loads</span>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-secondary-container text-secondary rounded font-mono text-[10px] font-semibold">
            <span className="material-symbols-outlined text-xs">trending_up</span>
            +4 today
          </span>
        </div>

        <div className="mt-3.5">
          <div className="flex items-center justify-between text-on-surface-variant font-mono text-[10px] mb-1.5">
            <span className="flex items-center gap-1 text-on-surface">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary"></span>18 in-transit
            </span>
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-tertiary"></span>6 loading
            </span>
            <span className="flex items-center gap-1 text-outline">
              <span className="h-1.5 w-1.5 rounded-full bg-outline-variant"></span>4 unassigned
            </span>
          </div>
          <div className="w-full h-1.5 bg-surface-container-low rounded-full overflow-hidden flex">
            <div className="bg-secondary h-full" style={{ width: "64.2%" }} title="18 In-Transit (64%)"></div>
            <div className="bg-tertiary h-full" style={{ width: "21.4%" }} title="6 Loading (21%)"></div>
            <div className="bg-outline-variant h-full" style={{ width: "14.4%" }} title="4 Unassigned (15%)"></div>
          </div>
        </div>
      </div>

      {/* Stat Card 2: Quotes Awaiting Review */}
      <div className="relative overflow-hidden bg-surface-container border border-surface-container-high rounded-xl p-3.5 sm:p-4 shadow-xs flex flex-col justify-between group hover:border-primary/40 transition-all">
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-mono text-[10px] text-outline uppercase tracking-wider">
                Quotes Under Review
              </span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
              </span>
            </div>
            <div className="flex items-baseline gap-1.5 mt-0.5">
              <span className="font-display text-2xl font-bold tracking-tight text-on-surface">
                5
              </span>
              <span className="font-mono text-xs text-on-surface-variant">live biddings</span>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-tertiary-container/40 text-tertiary rounded font-mono text-[10px] font-semibold">
            <span className="material-symbols-outlined text-xs">speed</span>
            Avg resp: 4.2m
          </span>
        </div>

        <div className="mt-3.5 flex items-end justify-between gap-1 h-5 pt-1">
          <div className="w-full bg-tertiary/20 h-2 rounded-t-xs"></div>
          <div className="w-full bg-tertiary/30 h-3 rounded-t-xs"></div>
          <div className="w-full bg-tertiary/40 h-4 rounded-t-xs"></div>
          <div className="w-full bg-tertiary/60 h-2.5 rounded-t-xs"></div>
          <div className="w-full bg-tertiary h-5 rounded-t-xs"></div>
          <div className="w-full bg-tertiary/80 h-3.5 rounded-t-xs"></div>
          <div className="w-full bg-tertiary h-5 rounded-t-xs animate-pulse"></div>
        </div>
      </div>

      {/* Stat Card 3: Action Items HITL */}
      <div className="relative overflow-hidden bg-surface-container border border-surface-container-high rounded-xl p-3.5 sm:p-4 shadow-xs flex flex-col justify-between group hover:border-primary/40 transition-all">
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-mono text-[10px] text-outline uppercase tracking-wider">
                Action Items (HITL)
              </span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-error"></span>
              </span>
            </div>
            <div className="flex items-baseline gap-1.5 mt-0.5">
              <span className="font-display text-2xl font-bold tracking-tight text-error">
                3
              </span>
              <span className="font-mono text-xs text-on-surface-variant font-medium">critical interventions</span>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-error-container text-error rounded font-mono text-[10px] font-semibold">
            <span className="material-symbols-outlined text-xs animate-bounce">priority_high</span>
            Action needed
          </span>
        </div>

        <div className="mt-3.5 flex items-center justify-between text-on-surface-variant font-mono text-[10px]">
          <span className="text-error font-medium">1 Margin Breach</span>
          <span className="text-secondary font-medium">1 Ready to Lock</span>
          <span className="text-tertiary font-medium">1 Payload Deficit</span>
        </div>
      </div>

      {/* Stat Card 4: Gross Margin Locked */}
      <div className="relative overflow-hidden bg-surface-container border border-surface-container-high rounded-xl p-3.5 sm:p-4 shadow-xs flex flex-col justify-between group hover:border-primary/40 transition-all">
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <span className="font-mono text-[10px] text-outline uppercase tracking-wider">
              Gross Margin Locked
            </span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="font-display text-2xl font-bold tracking-tight text-secondary">
                ₹1,84,500
              </span>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-secondary-container text-secondary rounded font-mono text-[10px] font-semibold">
            <span className="material-symbols-outlined text-xs">north_east</span>
            +12.4%
          </span>
        </div>

        <div className="mt-3.5 flex items-center justify-between font-mono text-[10px] pt-1 border-t border-surface-container-high/60">
          <span className="text-on-surface-variant">Avg / Dispatch:</span>
          <span className="text-on-surface font-semibold tracking-tight text-secondary">
            ₹6,589 <span className="text-outline font-normal">| 11.2%</span>
          </span>
        </div>
      </div>
    </section>
  );
};
