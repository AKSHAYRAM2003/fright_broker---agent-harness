"use client";

import React, { useState, useMemo } from "react";
import { LoadItem, CarrierQuote } from "@/types/load";
import { QueueWalkthroughModal } from "@/components/dashboard/QueueWalkthroughModal";
import { NumberRoll } from "@/components/stageshow/NumberRoll";
import {
  CheckCircle2,
  AlertTriangle,
  Clock,
  Truck,
  ArrowRight,
  Send,
  MessageSquare,
  ShieldCheck,
  TrendingUp,
  Search,
  Sparkles,
  HelpCircle,
  Copy,
  ChevronRight,
  DollarSign,
  Maximize2,
  RotateCcw,
} from "lucide-react";

interface ActionQueueSectionProps {
  loads: LoadItem[];
  onApproveLoad: (loadId: string) => void;
  onCounterLoad: (loadId: string, counterAmount: number) => void;
  onSendClarification: (loadId: string) => void;
  onDismissLoad: (loadId: string) => void;
  onOpenIngest?: () => void;
}

export const ActionQueueSection: React.FC<ActionQueueSectionProps> = ({
  loads,
  onApproveLoad,
  onCounterLoad,
  onSendClarification,
  onDismissLoad,
  onOpenIngest,
}) => {
  const [activeFilter, setActiveFilter] = useState<
    "all" | "margin" | "instant" | "dispatching" | "incomplete"
  >("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLoadId, setSelectedLoadId] = useState<string | null>(null);
  const [counterOpen, setCounterOpen] = useState(false);
  const [counterAmount, setCounterAmount] = useState<string>("₹46,000");
  const [walkthroughOpen, setWalkthroughOpen] = useState(false);
  const [copiedId, setCopiedId] = useState(false);

  // Filter loads
  const filteredLoads = useMemo(() => {
    return loads.filter((load) => {
      // Status filter
      if (activeFilter === "all" && load.status === "DISMISSED") return false;
      if (activeFilter === "margin" && (!load.isMarginFloorAlert || load.status !== "DECISION_REQUIRED")) return false;
      if (activeFilter === "instant" && (load.isMarginFloorAlert || !load.isInstantBookReady || load.status !== "DECISION_REQUIRED")) return false;
      if (activeFilter === "dispatching" && load.status !== "DISPATCHING_RFQS") return false;
      if (activeFilter === "incomplete" && load.status !== "INCOMPLETE") return false;

      // Text search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesId = load.id.toLowerCase().includes(q);
        const matchesShipper = load.shipperName.toLowerCase().includes(q);
        const matchesOrigin = load.origin.toLowerCase().includes(q);
        const matchesDest = load.destination.toLowerCase().includes(q);
        const matchesTransporter = load.bestQuote?.carrierName.toLowerCase().includes(q) ?? false;
        if (!matchesId && !matchesShipper && !matchesOrigin && !matchesDest && !matchesTransporter) {
          return false;
        }
      }

      return true;
    });
  }, [loads, activeFilter, searchQuery]);

  // Selected load logic
  const activeSelectedLoad = useMemo(() => {
    if (selectedLoadId) {
      const match = loads.find((l) => l.id === selectedLoadId);
      if (match) return match;
    }
    // Fallback to first filtered load or first in queue
    return filteredLoads[0] || loads[0] || null;
  }, [loads, selectedLoadId, filteredLoads]);

  // Count metrics for filter tabs
  const counts = useMemo(() => {
    const active = loads.filter((l) => l.status !== "DISMISSED");
    return {
      all: active.length,
      margin: active.filter((l) => l.isMarginFloorAlert && l.status === "DECISION_REQUIRED").length,
      instant: active.filter((l) => l.isInstantBookReady && !l.isMarginFloorAlert && l.status === "DECISION_REQUIRED").length,
      dispatching: active.filter((l) => l.status === "DISPATCHING_RFQS").length,
      incomplete: active.filter((l) => l.status === "INCOMPLETE").length,
    };
  }, [loads]);

  const activeDecisionsCount = counts.margin + counts.instant + counts.incomplete;

  const handleCopyId = (id: string) => {
    navigator.clipboard?.writeText(id);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  const handleSendCounter = () => {
    if (!activeSelectedLoad) return;
    const num = parseInt(counterAmount.replace(/[^\d]/g, ""), 10) || 46000;
    onCounterLoad(activeSelectedLoad.id, num);
    setCounterOpen(false);
  };

  return (
    <div className="flex flex-col gap-3.5 sm:gap-4 w-full">
      {/* Top Section Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 bg-surface-container-low border border-surface-container-high px-3.5 sm:px-4 py-2.5 rounded-xl">
        <div className="flex items-center gap-2.5">
          <div className="h-2 w-2 rounded-full bg-primary animate-ping" />
          <h2 className="font-sans text-base sm:text-lg text-on-surface font-bold tracking-tight">
            AI Action Queue
          </h2>
          <span className="px-2 py-0.5 rounded bg-primary-container text-on-primary-container font-sans text-xs font-bold">
            {activeDecisionsCount} Action{activeDecisionsCount === 1 ? "" : "s"} Required
          </span>

          <button
            onClick={onOpenIngest}
            type="button"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-[#f7f6f4] text-[#18181b] border border-[#d6d3cd] hover:border-[#a8a29e] font-sans text-xs font-semibold shadow-2xs transition-all active:scale-95 ml-1"
          >
            <span className="material-symbols-outlined text-sm text-[#be3420]">add_box</span>
            <span>+ Ingest Indent</span>
          </button>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => setWalkthroughOpen(true)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#fef2f0] hover:bg-[#fde2de] text-[#be3420] border border-[#fecaca] font-sans text-xs font-semibold transition-all active:scale-95 shadow-2xs"
            title="Watch choreographed AI Operations Walkthrough"
          >
            <span className="material-symbols-outlined text-sm text-[#be3420]">play_circle</span>
            <span>Watch AI Workflow</span>
          </button>

          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-surface-container-high rounded text-on-surface-variant font-sans text-xs">
            <span className="material-symbols-outlined text-sm text-primary">pause_circle</span>
            <span>Auto-pilot: Paused for HITL</span>
          </div>
        </div>
      </div>

      {/* MASTER-DETAIL WORKSPACE CONTAINER */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-4 items-start">
        {/* ========================================================= */}
        {/* LEFT COLUMN: Master List of Small Scannable Cards (4 cols) */}
        {/* ========================================================= */}
        <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-2.5">
          {/* Filter Pills */}
          <div className="flex items-center gap-1 bg-[#eae7e1]/80 p-1 rounded-xl border border-[#dfdbd5] font-sans text-xs overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveFilter("all")}
              type="button"
              className={`px-2.5 py-1 rounded-lg transition-all shrink-0 ${
                activeFilter === "all"
                  ? "bg-white text-[#18181b] font-bold shadow-xs border border-black/[0.08]"
                  : "text-[#78716c] hover:text-[#070707] border border-transparent font-medium"
              }`}
            >
              All ({counts.all})
            </button>
            <button
              onClick={() => setActiveFilter("margin")}
              type="button"
              className={`px-2.5 py-1 rounded-lg transition-all shrink-0 flex items-center gap-1 ${
                activeFilter === "margin"
                  ? "bg-white text-[#be3420] font-bold shadow-xs border border-[#fecaca]"
                  : "text-[#78716c] hover:text-[#070707] border border-transparent font-medium"
              }`}
            >
              <span>Breaches</span>
              {counts.margin > 0 && (
                <span className="w-4 h-4 rounded-full bg-[#fef2f0] text-[#be3420] text-[10px] font-bold flex items-center justify-center">
                  {counts.margin}
                </span>
              )}
            </button>
            <button
              onClick={() => setActiveFilter("instant")}
              type="button"
              className={`px-2.5 py-1 rounded-lg transition-all shrink-0 flex items-center gap-1 ${
                activeFilter === "instant"
                  ? "bg-white text-[#047857] font-bold shadow-xs border border-[#a7f3d0]"
                  : "text-[#78716c] hover:text-[#070707] border border-transparent font-medium"
              }`}
            >
              <span>Instant</span>
              {counts.instant > 0 && (
                <span className="w-4 h-4 rounded-full bg-[#ecfdf5] text-[#047857] text-[10px] font-bold flex items-center justify-center">
                  {counts.instant}
                </span>
              )}
            </button>
            <button
              onClick={() => setActiveFilter("dispatching")}
              type="button"
              className={`px-2.5 py-1 rounded-lg transition-all shrink-0 ${
                activeFilter === "dispatching"
                  ? "bg-white text-[#18181b] font-bold shadow-xs border border-black/[0.08]"
                  : "text-[#78716c] hover:text-[#070707] border border-transparent font-medium"
              }`}
            >
              Bids ({counts.dispatching})
            </button>
            <button
              onClick={() => setActiveFilter("incomplete")}
              type="button"
              className={`px-2.5 py-1 rounded-lg transition-all shrink-0 ${
                activeFilter === "incomplete"
                  ? "bg-white text-[#b45309] font-bold shadow-xs border border-[#fde68a]"
                  : "text-[#78716c] hover:text-[#070707] border border-transparent font-medium"
              }`}
            >
              Incomplete ({counts.incomplete})
            </button>
          </div>

          {/* Quick Search in Queue */}
          <div className="relative flex items-center">
            <Search className="w-3.5 h-3.5 absolute left-3 text-[#78716c] pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by ID, city, or carrier..."
              className="w-full bg-white border border-[#dfdbd5] pl-8 pr-3 py-1.5 rounded-lg text-xs font-sans text-on-surface placeholder:text-[#a8a29e] focus:outline-none focus:border-primary transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-2 text-[#78716c] hover:text-[#070707] text-xs p-1"
              >
                ✕
              </button>
            )}
          </div>

          {/* Small Cards Scrollable Column */}
          <div className="flex flex-col gap-2 max-h-[calc(100vh-250px)] overflow-y-auto pr-0.5 no-scrollbar">
            {filteredLoads.length === 0 ? (
              <div className="bg-white border border-[#dfdbd5] rounded-xl p-6 text-center flex flex-col items-center justify-center gap-2">
                <span className="material-symbols-outlined text-2xl text-[#a8a29e]">inbox</span>
                <p className="text-xs text-[#78716c] font-sans font-medium">No loads match this filter</p>
                <button
                  type="button"
                  onClick={() => {
                    setActiveFilter("all");
                    setSearchQuery("");
                  }}
                  className="text-xs text-primary font-semibold hover:underline"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              filteredLoads.map((load) => {
                const isSelected = activeSelectedLoad?.id === load.id;
                const isMarginAlert = load.isMarginFloorAlert && load.status === "DECISION_REQUIRED";
                const isInstantReady = load.isInstantBookReady && load.status === "DECISION_REQUIRED";
                const isBooked = load.status === "BOOKED";
                const isIncomplete = load.status === "INCOMPLETE";
                const isDispatching = load.status === "DISPATCHING_RFQS";

                return (
                  <article
                    key={load.id}
                    onClick={() => setSelectedLoadId(load.id)}
                    className={`relative rounded-xl p-3 cursor-pointer transition-all border text-left flex flex-col gap-2 ${
                      isSelected
                        ? isMarginAlert
                          ? "bg-white border-[#be3420] ring-2 ring-[#be3420]/20 shadow-xs border-l-4 border-l-[#be3420]"
                          : isInstantReady || isBooked
                          ? "bg-white border-[#047857] ring-2 ring-[#047857]/20 shadow-xs border-l-4 border-l-[#047857]"
                          : isIncomplete
                          ? "bg-white border-[#b45309] ring-2 ring-[#b45309]/20 shadow-xs border-l-4 border-l-[#b45309]"
                          : "bg-white border-primary ring-2 ring-primary/20 shadow-xs border-l-4 border-l-primary"
                        : "bg-white/80 hover:bg-white border-[#dfdbd5] hover:border-[#a8a29e] shadow-2xs"
                    }`}
                  >
                    {/* Compact Card Header */}
                    <div className="flex items-center justify-between gap-1.5">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className="font-sans text-xs font-bold text-[#070707] truncate">
                          {load.id}
                        </span>
                        <span className="text-[10px] text-[#78716c] font-medium truncate">
                          • {load.shipperName.split("(")[0].trim()}
                        </span>
                      </div>

                      {/* Small Status Pill */}
                      {isMarginAlert && (
                        <span className="px-1.5 py-0.5 rounded bg-[#fef2f0] text-[#be3420] border border-[#fecaca] text-[10px] font-bold shrink-0">
                          Floor Alert
                        </span>
                      )}
                      {isInstantReady && (
                        <span className="px-1.5 py-0.5 rounded bg-[#ecfdf5] text-[#047857] border border-[#a7f3d0] text-[10px] font-bold shrink-0">
                          1-Click Ready
                        </span>
                      )}
                      {isIncomplete && (
                        <span className="px-1.5 py-0.5 rounded bg-[#fef3c7] text-[#b45309] border border-[#fde68a] text-[10px] font-bold shrink-0">
                          Incomplete
                        </span>
                      )}
                      {isDispatching && (
                        <span className="px-1.5 py-0.5 rounded bg-primary-container text-on-primary-container text-[10px] font-bold shrink-0 animate-pulse">
                          Awaiting Quotes
                        </span>
                      )}
                      {isBooked && (
                        <span className="px-1.5 py-0.5 rounded bg-[#ecfdf5] text-[#047857] text-[10px] font-bold shrink-0">
                          Booked (LR)
                        </span>
                      )}
                    </div>

                    {/* Route Snippet with Distance Truck Icon */}
                    <div className="flex items-center justify-between text-xs text-[#070707]">
                      <div className="flex items-center gap-1.5 font-medium truncate">
                        <span>{load.origin.split("(")[0].trim()}</span>
                        <ArrowRight className="w-3 h-3 text-[#78716c] shrink-0" />
                        <span>{load.destination.split("(")[0].trim()}</span>
                      </div>

                      <div className="flex items-center gap-1 text-[11px] text-[#78716c] shrink-0">
                        <Truck className="w-3 h-3 text-primary" />
                        <span>{load.distanceKm.split(" ")[0]} km</span>
                      </div>
                    </div>

                    {/* Footer Row: Cargo & Financial Snippet */}
                    <div className="flex items-center justify-between text-[11px] pt-1 border-t border-[#f5f4f0] text-[#78716c]">
                      <span className="truncate">
                        {load.weightTonnes ? `${load.weightTonnes} MT` : "Payload TBD"} • {load.vehicleDisplay.split("(")[0].trim()}
                      </span>

                      {/* Right highlight */}
                      {isMarginAlert && (
                        <span className="text-[#be3420] font-bold shrink-0">
                          ₹{load.bestQuote?.quoteInr.toLocaleString("en-IN")} (+₹{load.netMarginInr?.toLocaleString("en-IN")})
                        </span>
                      )}
                      {isInstantReady && (
                        <span className="text-[#047857] font-bold shrink-0">
                          +₹{load.netMarginInr?.toLocaleString("en-IN")} ({load.netMarginPct?.toFixed(1)}%)
                        </span>
                      )}
                      {isIncomplete && (
                        <span className="text-[#b45309] font-medium shrink-0">
                          Action Needed
                        </span>
                      )}
                      {isDispatching && (
                        <span className="text-[#be3420] font-medium shrink-0">
                          {load.matchedCarriers.length} Carriers
                        </span>
                      )}
                      {isBooked && (
                        <span className="text-[#047857] font-bold shrink-0">
                          LR #{load.bookedDetails?.lrNumber.slice(-4)}
                        </span>
                      )}
                    </div>
                  </article>
                );
              })
            )}
          </div>
        </div>

        {/* ========================================================= */}
        {/* RIGHT COLUMN: Full Detail & Decision Surface (7-8 cols)  */}
        {/* ========================================================= */}
        <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-3">
          {activeSelectedLoad ? (
            <div className="bg-white border border-[#dfdbd5] rounded-xl p-4 sm:p-5 shadow-xs flex flex-col gap-4 animate-fadeIn">
              {/* 1. Detail Card Top Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#eae7e1] pb-3">
                <div className="flex flex-wrap items-center gap-2">
                  {/* Status Indicator */}
                  {activeSelectedLoad.isMarginFloorAlert && activeSelectedLoad.status === "DECISION_REQUIRED" && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#fef2f0] text-[#be3420] border border-[#fecaca] rounded-full text-xs font-bold uppercase tracking-wider">
                      <span className="h-2 w-2 rounded-full bg-[#be3420] animate-ping" />
                      Critical Margin Floor Alert
                    </span>
                  )}
                  {activeSelectedLoad.isInstantBookReady && activeSelectedLoad.status === "DECISION_REQUIRED" && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#ecfdf5] text-[#047857] border border-[#a7f3d0] rounded-full text-xs font-bold uppercase tracking-wider">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#047857]" />
                      1-Click Fast-Track Ready
                    </span>
                  )}
                  {activeSelectedLoad.status === "DISPATCHING_RFQS" && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-primary-container text-on-primary-container rounded-full text-xs font-bold uppercase tracking-wider animate-pulse">
                      <span className="h-2 w-2 rounded-full bg-primary animate-ping" />
                      Broadcasting RFQs • Awaiting Bids
                    </span>
                  )}
                  {activeSelectedLoad.status === "INCOMPLETE" && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#fef3c7] text-[#b45309] border border-[#fde68a] rounded-full text-xs font-bold uppercase tracking-wider">
                      <HelpCircle className="w-3.5 h-3.5 text-[#b45309]" />
                      Incomplete Indent • Missing Specs
                    </span>
                  )}
                  {activeSelectedLoad.status === "BOOKED" && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#ecfdf5] text-[#047857] border border-[#a7f3d0] rounded-full text-xs font-bold uppercase tracking-wider">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#047857]" />
                      Trip Confirmed • FSM: Locked
                    </span>
                  )}

                  <span className="text-sm font-bold text-[#070707]">
                    {activeSelectedLoad.id}
                  </span>

                  <button
                    type="button"
                    onClick={() => handleCopyId(activeSelectedLoad.id)}
                    className="p-1 text-[#78716c] hover:text-[#070707] rounded"
                    title="Copy Load ID"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                  {copiedId && (
                    <span className="text-[10px] text-[#047857] font-semibold">Copied!</span>
                  )}

                  <span className="px-2 py-0.5 rounded bg-[#f7f6f4] text-[#78716c] text-[11px] font-medium border border-[#dfdbd5]">
                    {activeSelectedLoad.shipperName}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-xs font-bold text-primary">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{activeSelectedLoad.slaRemaining || "SLA: 08:00 remaining"}</span>
                  </div>
                </div>
              </div>

              {/* 2. Corridor Route Block with Distance Truck Icon */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 bg-[#f7f6f4] p-3.5 rounded-xl border border-[#dfdbd5]">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                  {/* Origin */}
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#78716c] font-semibold uppercase tracking-wider">
                      Origin Hub
                    </span>
                    <span className="text-sm font-bold text-[#070707]">
                      {activeSelectedLoad.origin}
                    </span>
                    <span className="text-xs text-[#78716c]">{activeSelectedLoad.originHub}</span>
                  </div>

                  {/* Corridor Distance Track with TRUCK ICON (PRESERVED) */}
                  <div className="flex sm:flex-col items-center gap-1.5 sm:gap-0 px-2">
                    <span className="text-xs font-bold text-primary tracking-tight">
                      {activeSelectedLoad.distanceKm}
                    </span>
                    <div className="flex items-center gap-1 text-primary my-0.5">
                      <span className="h-0.5 w-6 sm:w-10 bg-primary/40" />
                      <span className="material-symbols-outlined text-base">local_shipping</span>
                      <span className="h-0.5 w-6 sm:w-10 bg-primary/40" />
                    </div>
                    <span className="text-[10px] text-[#78716c] font-medium">
                      {activeSelectedLoad.corridor}
                    </span>
                  </div>

                  {/* Destination */}
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#78716c] font-semibold uppercase tracking-wider">
                      Destination Hub
                    </span>
                    <span className="text-sm font-bold text-[#070707]">
                      {activeSelectedLoad.destination}
                    </span>
                    <span className="text-xs text-[#78716c]">{activeSelectedLoad.destinationHub}</span>
                  </div>
                </div>

                {/* Cargo and Equipment Badges */}
                <div className="flex flex-wrap items-center gap-1.5 text-xs">
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-[#dfdbd5] text-[#070707] font-semibold shadow-2xs">
                    {activeSelectedLoad.weightTonnes ? `${activeSelectedLoad.weightTonnes} MT` : "Payload TBD"}{" "}
                    {activeSelectedLoad.materialType}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-[#dfdbd5] text-[#070707] font-semibold shadow-2xs">
                    {activeSelectedLoad.vehicleDisplay}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#ecfdf5] border border-[#a7f3d0] text-[#047857] font-semibold">
                    FASTag Linked
                  </span>
                </div>
              </div>

              {/* 3. Financial Metrics (4 Blocks with NumberRoll) */}
              {activeSelectedLoad.status !== "INCOMPLETE" && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 bg-[#f7f6f4] p-3.5 rounded-xl border border-[#dfdbd5]">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#78716c] uppercase font-semibold">Shipper Target</span>
                    <span className="text-base font-bold text-[#070707] mt-0.5">
                      ₹{activeSelectedLoad.targetRateInr?.toLocaleString("en-IN")}
                    </span>
                    <span className="text-[10px] text-[#78716c]">
                      {activeSelectedLoad.weightTonnes
                        ? `₹${Math.round((activeSelectedLoad.targetRateInr || 50000) / activeSelectedLoad.weightTonnes).toLocaleString("en-IN")} / MT`
                        : "All inclusive"}
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#78716c] uppercase font-semibold">Best Transporter Quote</span>
                    <span className="text-base font-bold text-[#070707] mt-0.5">
                      ₹{(activeSelectedLoad.bestQuote?.quoteInr || 48500).toLocaleString("en-IN")}
                    </span>
                    <span className="text-[11px] text-[#78716c] truncate">
                      {activeSelectedLoad.bestQuote?.carrierName || "Ghatge Patil Transports"}
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#78716c] uppercase font-semibold">Projected Net Margin</span>
                    <span
                      className={`text-base font-bold mt-0.5 ${
                        activeSelectedLoad.isMarginFloorAlert ? "text-[#be3420]" : "text-[#047857]"
                      }`}
                    >
                      <NumberRoll value={activeSelectedLoad.netMarginInr ?? 1500} prefix="₹" /> (
                      <NumberRoll value={activeSelectedLoad.netMarginPct ?? 3.0} decimals={1} suffix="%" />)
                    </span>
                    <span className="text-[10px] text-[#78716c]">
                      {activeSelectedLoad.isMarginFloorAlert ? "-₹1,000 vs Min Floor" : "+₹2,000 over Target"}
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#78716c] uppercase font-semibold">Market Spot Benchmark</span>
                    <span className="text-base font-bold text-[#047857] mt-0.5">
                      ₹{(activeSelectedLoad.spotBenchmarkInr || 47200).toLocaleString("en-IN")}
                    </span>
                    <span className="text-[10px] text-[#047857] font-semibold">
                      {activeSelectedLoad.aiConfidence || "94% AI Confidence"}
                    </span>
                  </div>
                </div>
              )}

              {/* 4. AI Dispatch Synthesis */}
              {activeSelectedLoad.aiSynthesis && (
                <div className="flex items-start gap-2.5 p-3.5 bg-[#fef2f0]/70 rounded-xl text-xs text-[#070707] border border-[#fecaca] leading-relaxed">
                  <span className="material-symbols-outlined text-base flex-shrink-0 text-primary mt-0.5">
                    psychology
                  </span>
                  <div>
                    <strong className="font-bold text-[#070707]">AI Dispatch Synthesis: </strong>
                    {activeSelectedLoad.aiSynthesis}
                  </div>
                </div>
              )}

              {/* 5. Missing Fields Warning (For Incomplete Indents) */}
              {activeSelectedLoad.status === "INCOMPLETE" && (
                <div className="flex flex-col gap-2.5 p-3.5 bg-[#fffbeb] border border-[#fde68a] rounded-xl text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-[#b45309]">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Incomplete Specifications Received</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {(activeSelectedLoad.missingFields || ["Total Weight (MT)", "Truck Body"]).map((field, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-white text-[#b45309] border border-[#fde68a] font-semibold text-[11px]">
                        ⚠️ Missing: {field}
                      </span>
                    ))}
                  </div>
                  <p className="italic text-[#78716c] bg-white p-2.5 rounded-lg border border-[#fde68a]/60">
                    &quot;{activeSelectedLoad.clarificationDraft || "Namaste team, please confirm MT weight and truck body type."}&quot;
                  </p>
                </div>
              )}

              {/* 6. Matched Fleet Carriers Overview */}
              {activeSelectedLoad.matchedCarriers.length > 0 && activeSelectedLoad.status !== "BOOKED" && (
                <div className="flex flex-col gap-2 bg-[#f7f6f4] p-3 rounded-xl border border-[#dfdbd5]">
                  <span className="text-[10px] text-[#78716c] uppercase font-bold tracking-wider">
                    Matched Fleet Transporters ({activeSelectedLoad.matchedCarriers.length} Carriers Contacted via WhatsApp):
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {activeSelectedLoad.matchedCarriers.map((carrier) => (
                      <div
                        key={carrier.id}
                        className="p-2.5 rounded-lg bg-white border border-[#dfdbd5] flex items-center justify-between text-xs"
                      >
                        <div className="flex flex-col min-w-0">
                          <span className="font-bold text-[#070707] truncate">{carrier.name}</span>
                          <span className="text-[10px] text-[#78716c]">{carrier.phone}</span>
                        </div>
                        <span className="text-[10px] font-semibold text-[#047857] bg-[#ecfdf5] px-1.5 py-0.5 rounded border border-[#a7f3d0] shrink-0">
                          {carrier.rating}★ Match
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 7. Booked Trip Information */}
              {activeSelectedLoad.status === "BOOKED" && activeSelectedLoad.bookedDetails && (
                <div className="bg-[#ecfdf5] border-2 border-[#a7f3d0] rounded-xl p-4 flex flex-col gap-3">
                  <div className="flex items-center justify-between border-b border-[#a7f3d0]/60 pb-2">
                    <div>
                      <span className="text-[10px] text-[#047857] uppercase font-bold tracking-wider">Official Lorry Receipt</span>
                      <h4 className="text-base font-bold text-[#047857]">LR #{activeSelectedLoad.bookedDetails.lrNumber}</h4>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-[#047857] uppercase font-bold">Locked Gross Margin</span>
                      <p className="text-base font-bold text-[#047857]">+₹{activeSelectedLoad.bookedDetails.netMarginInr.toLocaleString("en-IN")}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    <div>
                      <span className="text-[10px] text-[#78716c]">Assigned Carrier:</span>
                      <p className="font-bold text-[#070707]">{activeSelectedLoad.bookedDetails.carrierName}</p>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#78716c]">Vehicle Number:</span>
                      <p className="font-bold text-[#070707]">{activeSelectedLoad.bookedDetails.vehicleNo}</p>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#78716c]">Assigned Driver:</span>
                      <p className="font-bold text-[#070707]">{activeSelectedLoad.bookedDetails.driverName}</p>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#78716c]">Driver Phone:</span>
                      <p className="font-bold text-[#070707]">{activeSelectedLoad.bookedDetails.driverPhone}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* ========================================================= */}
              {/* 8. HUMAN ACTION CONTROL CENTER: PROMINENT, SIMPLE, QUICK  */}
              {/* ========================================================= */}
              <div className="pt-2 border-t border-[#eae7e1] flex flex-col gap-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#78716c] uppercase tracking-wider">
                    Recommended Human Operator Action:
                  </span>
                  <span className="text-[11px] text-[#78716c]">
                    Driver: {activeSelectedLoad.bestQuote?.driverName || "Suresh Y."} ({activeSelectedLoad.bestQuote?.driverPhone || "+91 97412 XXXXX"})
                  </span>
                </div>

                {/* ACTION CASE A: CRITICAL MARGIN FLOOR ALERT */}
                {activeSelectedLoad.isMarginFloorAlert && activeSelectedLoad.status === "DECISION_REQUIRED" && (
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-wrap items-center gap-2.5">
                      {/* PROMINENT PRIMARY BUTTON */}
                      <button
                        type="button"
                        onClick={() => setCounterOpen(!counterOpen)}
                        className="flex-1 min-w-[240px] h-11 px-5 rounded-xl bg-[#be3420] hover:bg-[#a82c19] text-white font-sans text-xs font-bold shadow-md hover:shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                      >
                        <MessageSquare className="w-4 h-4 text-white" />
                        <span>Counter Transporter @ ₹46,000 (81% Win Rate)</span>
                      </button>

                      {/* SECONDARY ACTION 1 */}
                      <button
                        type="button"
                        onClick={() => alert(`Shipper rate hike requested for ${activeSelectedLoad.id} (+₹2,000)!`)}
                        className="h-11 px-4 rounded-xl bg-white hover:bg-[#f7f6f4] text-[#18181b] border border-[#d6d3cd] hover:border-[#18181b] font-sans text-xs font-semibold shadow-2xs transition-all active:scale-[0.98] flex items-center justify-center gap-1.5"
                      >
                        <TrendingUp className="w-4 h-4 text-[#78716c]" />
                        <span>Request Shipper Hike (+₹2,000)</span>
                      </button>

                      {/* SECONDARY ACTION 2 */}
                      <button
                        type="button"
                        onClick={() => onApproveLoad(activeSelectedLoad.id)}
                        className="h-11 px-4 rounded-xl bg-[#f7f6f4] hover:bg-[#eae7e1] text-[#78716c] hover:text-[#070707] font-sans text-xs font-semibold transition-all"
                      >
                        <span>Manual Accept @ ₹48,500</span>
                      </button>
                    </div>

                    {/* Expandable Counter Offer Drawer */}
                    {counterOpen && (
                      <div className="mt-1 p-3 bg-[#fef2f0] border border-[#fecaca] rounded-xl flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 animate-fadeIn">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-[#be3420]">
                            Custom WhatsApp Counter Rate:
                          </span>
                          <input
                            type="text"
                            value={counterAmount}
                            onChange={(e) => setCounterAmount(e.target.value)}
                            className="bg-white border border-[#dfdbd5] px-3 py-1.5 rounded-lg text-xs font-bold text-[#070707] w-28 focus:outline-none focus:border-[#be3420]"
                          />
                        </div>
                        <button
                          type="button"
                          onClick={handleSendCounter}
                          className="h-9 px-4 rounded-lg bg-[#be3420] hover:bg-[#a82c19] text-white font-sans text-xs font-bold shadow-2xs transition-all active:scale-95 flex items-center justify-center gap-1.5"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>Dispatch Counter via WhatsApp</span>
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* ACTION CASE B: 1-CLICK INSTANT BOOK READY */}
                {activeSelectedLoad.isInstantBookReady && activeSelectedLoad.status === "DECISION_REQUIRED" && (
                  <div className="flex flex-wrap items-center gap-2.5">
                    {/* PROMINENT PRIMARY GREEN 1-CLICK BUTTON */}
                    <button
                      type="button"
                      onClick={() => onApproveLoad(activeSelectedLoad.id)}
                      className="flex-1 min-w-[260px] h-12 px-6 rounded-xl bg-[#047857] hover:bg-[#036045] text-white font-sans text-sm font-bold shadow-md hover:shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2.5"
                    >
                      <CheckCircle2 className="w-5 h-5 text-white" />
                      <span>Approve &amp; Book Now (1-Click) — Issue Digital LR</span>
                    </button>

                    <button
                      type="button"
                      className="h-12 px-4 rounded-xl bg-white hover:bg-[#f7f6f4] text-[#18181b] border border-[#d6d3cd] font-sans text-xs font-semibold shadow-2xs transition-all"
                    >
                      <span>Hold 15m</span>
                    </button>

                    <button
                      type="button"
                      className="h-12 px-4 rounded-xl bg-white hover:bg-[#f7f6f4] text-[#18181b] border border-[#d6d3cd] font-sans text-xs font-semibold shadow-2xs transition-all"
                    >
                      <span>View All Bids</span>
                    </button>
                  </div>
                )}

                {/* ACTION CASE C: INCOMPLETE INDENT */}
                {activeSelectedLoad.status === "INCOMPLETE" && (
                  <div className="flex flex-wrap items-center gap-2.5">
                    {/* PROMINENT CLARIFICATION BUTTON */}
                    <button
                      type="button"
                      onClick={() => onSendClarification(activeSelectedLoad.id)}
                      className="flex-1 min-w-[260px] h-11 px-5 rounded-xl bg-[#be3420] hover:bg-[#a82c19] text-white font-sans text-xs font-bold shadow-md hover:shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4 text-white" />
                      <span>Send WhatsApp Clarification Draft to Shipper</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => alert("Manual message editing enabled.")}
                      className="h-11 px-4 rounded-xl bg-white hover:bg-[#f7f6f4] text-[#18181b] border border-[#d6d3cd] font-sans text-xs font-semibold shadow-2xs transition-all"
                    >
                      <span>Edit Draft</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onDismissLoad(activeSelectedLoad.id)}
                      className="h-11 px-4 rounded-xl text-[#78716c] hover:text-[#be3420] font-sans text-xs font-medium hover:bg-[#fef2f0] transition-colors"
                    >
                      <span>Dismiss Inquiry</span>
                    </button>
                  </div>
                )}

                {/* ACTION CASE D: DISPATCHING RFQS */}
                {activeSelectedLoad.status === "DISPATCHING_RFQS" && (
                  <div className="flex flex-wrap items-center justify-between gap-2.5 p-3 bg-[#f7f6f4] rounded-xl border border-[#dfdbd5]">
                    <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                      <span className="material-symbols-outlined text-base animate-spin">sync</span>
                      <span>Auto-polling WhatsApp responses from {activeSelectedLoad.matchedCarriers.length} carriers...</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => onDismissLoad(activeSelectedLoad.id)}
                      className="px-3 py-1.5 text-xs text-[#78716c] hover:text-[#070707] font-medium underline"
                    >
                      Cancel Broadcast
                    </button>
                  </div>
                )}

                {/* ACTION CASE E: BOOKED TRIP */}
                {activeSelectedLoad.status === "BOOKED" && (
                  <div className="flex flex-wrap items-center justify-between gap-2.5">
                    <span className="text-xs text-[#047857] font-semibold flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4" />
                      Digital LR generated and dispatched to driver Suresh Y. and transporter.
                    </span>

                    <button
                      type="button"
                      onClick={() => alert(`Digital LR #${activeSelectedLoad.bookedDetails?.lrNumber} slip downloaded.`)}
                      className="h-10 px-4 rounded-xl bg-white hover:bg-[#ecfdf5] text-[#047857] border border-[#a7f3d0] font-sans text-xs font-bold shadow-2xs transition-all active:scale-95"
                    >
                      View Digital LR Slip
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-white border border-[#dfdbd5] rounded-xl p-12 text-center flex flex-col items-center justify-center gap-3">
              <span className="material-symbols-outlined text-3xl text-[#a8a29e]">touch_app</span>
              <h3 className="text-base font-bold text-[#070707]">Select a Load to Inspect</h3>
              <p className="text-xs text-[#78716c] max-w-sm">
                Click on any small card on the left to review its corridor details, financial metrics, and AI recommendations.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Guided Stageshow AI Action Queue Walkthrough Modal */}
      <QueueWalkthroughModal
        isOpen={walkthroughOpen}
        onClose={() => setWalkthroughOpen(false)}
      />
    </div>
  );
};
