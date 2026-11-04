"use client";

import React, { useState } from "react";
import { LoadItem, CarrierQuote } from "@/types/load";
import { QueueWalkthroughModal } from "@/components/dashboard/QueueWalkthroughModal";
import { NumberRoll } from "@/components/stageshow/NumberRoll";

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
  const [counterOpenId, setCounterOpenId] = useState<string | null>(null);
  const [counterAmounts, setCounterAmounts] = useState<Record<string, string>>({});
  const [walkthroughOpen, setWalkthroughOpen] = useState(false);

  const activeDecisionsCount = loads.filter(
    (l) => l.status === "DECISION_REQUIRED" || l.status === "INCOMPLETE" || l.status === "DISPATCHING_RFQS"
  ).length;

  const filteredLoads = loads.filter((load) => {
    if (activeFilter === "all") return load.status !== "DISMISSED";
    if (activeFilter === "margin") return load.isMarginFloorAlert && load.status === "DECISION_REQUIRED";
    if (activeFilter === "instant") return (load.isInstantBookReady || !load.isMarginFloorAlert) && load.status === "DECISION_REQUIRED";
    if (activeFilter === "dispatching") return load.status === "DISPATCHING_RFQS";
    if (activeFilter === "incomplete") return load.status === "INCOMPLETE";
    return true;
  });

  const handleToggleCounter = (loadId: string, defaultAmount: number) => {
    if (counterOpenId === loadId) {
      setCounterOpenId(null);
    } else {
      setCounterOpenId(loadId);
      if (!counterAmounts[loadId]) {
        setCounterAmounts((prev) => ({
          ...prev,
          [loadId]: `₹${defaultAmount.toLocaleString("en-IN")}`,
        }));
      }
    }
  };

  const handleSendCounterOffer = (loadId: string) => {
    const rawVal = counterAmounts[loadId] || "46000";
    const num = parseInt(rawVal.replace(/[^\d]/g, ""), 10) || 46000;
    onCounterLoad(loadId, num);
    setCounterOpenId(null);
  };

  return (
    <div className="flex flex-col gap-3.5 sm:gap-4">
      {/* Queue Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 bg-surface-container-low border border-surface-container-high px-3.5 sm:px-4 py-2.5 rounded-xl">
        <div className="flex items-center gap-2.5">
          <div className="h-2 w-2 rounded-full bg-primary animate-ping"></div>
          <h2 className="font-headline-md text-base sm:text-lg text-on-surface font-semibold tracking-tight">
            AI Action Queue
          </h2>
          <span className="px-2 py-0.5 rounded bg-primary-container text-on-primary-container font-sans text-[11px] font-bold">
            {activeDecisionsCount} Action{activeDecisionsCount === 1 ? "" : "s"} Required
          </span>
          <button
            onClick={onOpenIngest}
            type="button"
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white hover:bg-[#f7f6f4] text-[#18181b] border border-[#d6d3cd] hover:border-[#a8a29e] font-sans text-[11px] font-semibold shadow-2xs transition-all active:scale-95 ml-1"
          >
            <span className="material-symbols-outlined text-sm text-[#be3420]">add_box</span>
            <span>+ Ingest Indent</span>
          </button>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => setWalkthroughOpen(true)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#fef2f0] hover:bg-[#fde2de] text-[#be3420] border border-[#fecaca] font-sans text-[11px] font-semibold transition-all active:scale-95 shadow-2xs"
            title="Watch choreographed AI Operations Walkthrough"
          >
            <span className="material-symbols-outlined text-sm text-[#be3420]">play_circle</span>
            <span>Watch AI Workflow</span>
          </button>

          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-surface-container-high rounded text-on-surface-variant font-sans text-[11px]">
            <span className="material-symbols-outlined text-sm text-primary">pause_circle</span>
            <span>Auto-pilot: Paused for HITL</span>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1 bg-[#eae7e1]/80 p-0.5 rounded-lg border border-[#dfdbd5] font-sans text-[11px] overflow-x-auto">
            <button
              onClick={() => setActiveFilter("all")}
              type="button"
              className={`px-2.5 py-1 rounded transition-colors ${
                activeFilter === "all"
                  ? "bg-white text-[#18181b] font-semibold shadow-xs border border-black/[0.08]"
                  : "text-[#78716c] hover:text-[#070707] border border-transparent"
              }`}
            >
              All ({loads.filter((l) => l.status !== "DISMISSED").length})
            </button>
            <button
              onClick={() => setActiveFilter("margin")}
              type="button"
              className={`px-2.5 py-1 rounded transition-colors ${
                activeFilter === "margin"
                  ? "bg-white text-[#18181b] font-semibold shadow-xs border border-black/[0.08]"
                  : "text-[#78716c] hover:text-[#070707] border border-transparent"
              }`}
            >
              Margin Breaches
            </button>
            <button
              onClick={() => setActiveFilter("instant")}
              type="button"
              className={`px-2.5 py-1 rounded transition-colors ${
                activeFilter === "instant"
                  ? "bg-white text-[#18181b] font-semibold shadow-xs border border-black/[0.08]"
                  : "text-[#78716c] hover:text-[#070707] border border-transparent"
              }`}
            >
              Instant Book
            </button>
            <button
              onClick={() => setActiveFilter("dispatching")}
              type="button"
              className={`px-2.5 py-1 rounded transition-colors ${
                activeFilter === "dispatching"
                  ? "bg-white text-[#18181b] font-semibold shadow-xs border border-black/[0.08]"
                  : "text-[#78716c] hover:text-[#070707] border border-transparent"
              }`}
            >
              Awaiting Quotes
            </button>
            <button
              onClick={() => setActiveFilter("incomplete")}
              type="button"
              className={`px-2.5 py-1 rounded transition-colors ${
                activeFilter === "incomplete"
                  ? "bg-white text-[#18181b] font-semibold shadow-xs border border-black/[0.08]"
                  : "text-[#78716c] hover:text-[#070707] border border-transparent"
              }`}
            >
              Incomplete
            </button>
          </div>
        </div>
      </div>

      {/* Empty State */}
      {filteredLoads.length === 0 && (
        <div className="bg-surface-container border border-surface-container-high rounded-xl p-8 text-center flex flex-col items-center justify-center gap-3">
          <div className="p-3 bg-[#fef2f0] text-[#be3420] rounded-full">
            <span className="material-symbols-outlined text-2xl">check_circle</span>
          </div>
          <h3 className="font-headline-sm text-base text-on-surface font-semibold">
            All Action Queue Items Cleared
          </h3>
          <p className="font-sans text-xs text-outline max-w-md">
            No loads in this filter view. Ingest a new shipper indent via WhatsApp or voice note to trigger auto-matching.
          </p>
          <button
            onClick={onOpenIngest}
            type="button"
            className="mt-2 px-4 py-2 bg-white hover:bg-[#f7f6f4] text-[#18181b] border border-[#d6d3cd] rounded-lg font-sans text-xs font-semibold shadow-2xs transition-all"
          >
            + Ingest New Indent
          </button>
        </div>
      )}

      {/* RENDER LOAD CARDS */}
      {filteredLoads.map((load) => {
        // 1. DISPATCHING RFQS STATE
        if (load.status === "DISPATCHING_RFQS") {
          return (
            <article
              key={load.id}
              className="relative overflow-hidden bg-surface-container border border-[#be3420]/30 rounded-xl p-4 sm:p-5 shadow-xs flex flex-col gap-3.5 sm:gap-4 bg-gradient-to-r from-primary-container/15 via-surface-container to-surface-container transition-all animate-fadeIn"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-surface-container-high pb-2.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-primary-container text-on-primary-container border border-primary/20 rounded font-sans text-[10px] font-bold uppercase tracking-wider">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-ping"></span>
                    Broadcasting RFQs • Awaiting Transporter Bids
                  </span>
                  <span className="font-sans text-xs text-on-surface font-bold">{load.id}</span>
                  <span className="px-1.5 py-0.5 rounded bg-surface-container-low text-on-surface-variant font-sans text-[10px]">
                    Shipper: {load.shipperName}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-primary font-sans text-[11px] font-bold">
                  <span className="material-symbols-outlined text-sm animate-spin">sync</span>
                  <span>Auto-Polling WhatsApp Responses...</span>
                </div>
              </div>

              {/* Corridor Route Block */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 bg-surface-container-low p-3 sm:p-3.5 rounded-lg border border-surface-container-high">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                  <div className="flex flex-col">
                    <span className="font-sans text-[10px] text-outline">Origin Hub</span>
                    <span className="font-headline-sm text-xs sm:text-sm text-on-surface font-semibold">
                      {load.origin}
                    </span>
                    <span className="font-sans text-[11px] text-on-surface-variant">{load.originHub}</span>
                  </div>

                  <div className="flex sm:flex-col items-center gap-1.5 sm:gap-0 px-1 sm:px-2">
                    <span className="font-sans text-[11px] text-primary font-semibold tracking-tight">
                      {load.distanceKm}
                    </span>
                    <div className="flex items-center gap-0.5 text-primary">
                      <span className="h-0.5 w-4 sm:w-6 bg-primary/40"></span>
                      <span className="material-symbols-outlined text-sm">local_shipping</span>
                      <span className="h-0.5 w-4 sm:w-6 bg-primary/40"></span>
                    </div>
                    <span className="font-sans text-[10px] text-outline">{load.corridor}</span>
                  </div>

                  <div className="flex flex-col">
                    <span className="font-sans text-[10px] text-outline">Destination Hub</span>
                    <span className="font-headline-sm text-xs sm:text-sm text-on-surface font-semibold">
                      {load.destination}
                    </span>
                    <span className="font-sans text-[11px] text-on-surface-variant">{load.destinationHub}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-1.5 font-sans text-[10px] sm:text-[11px]">
                  <span className="px-2 py-0.5 rounded bg-surface border border-surface-container-high text-on-surface font-medium">
                    {load.weightTonnes ? `${load.weightTonnes} MT` : "Payload TBD"}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface border border-surface-container-high text-on-surface font-medium">
                    {load.vehicleDisplay}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-primary-container text-on-primary-container font-medium">
                    Target: ₹{load.targetRateInr?.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              {/* Matched Carriers Broadcast Status */}
              <div className="bg-surface-container-low p-3 rounded-lg border border-surface-container-high flex flex-col gap-2">
                <span className="font-sans text-[10px] text-outline uppercase font-semibold">
                  Personalized WhatsApp RFQs Dispatched to {load.matchedCarriers.length} Verified Fleet Carriers:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {load.matchedCarriers.map((carrier) => (
                    <div
                      key={carrier.id}
                      className="p-2.5 rounded bg-surface border border-surface-container-high flex items-center justify-between text-xs"
                    >
                      <div className="flex flex-col min-w-0">
                        <span className="font-semibold text-on-surface truncate">{carrier.name}</span>
                        <span className="font-sans text-[10px] text-outline">{carrier.phone}</span>
                      </div>
                      <span className="font-sans text-[10px] text-[#b45309] bg-[#fef3c7] px-1.5 py-0.5 rounded border border-[#fde68a] shrink-0 font-medium">
                        Waiting for quote
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dismiss / Cancel Button */}
              <div className="flex items-center justify-between pt-1 font-sans text-xs text-outline">
                <span>Simulating carrier response via WhatsApp stream...</span>
                <button
                  type="button"
                  onClick={() => onDismissLoad(load.id)}
                  className="hover:text-primary transition-colors underline"
                >
                  Cancel Broadcast
                </button>
              </div>
            </article>
          );
        }

        // 2. BOOKED / CONFIRMED STATE
        if (load.status === "BOOKED" && load.bookedDetails) {
          return (
            <article
              key={load.id}
              className="relative overflow-hidden bg-surface-container border border-[#047857]/40 rounded-xl p-4 sm:p-5 shadow-xs flex flex-col gap-3.5 sm:gap-4 bg-gradient-to-r from-secondary-container/20 via-surface-container to-surface-container transition-all animate-fadeIn"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-secondary/20 pb-2.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#ecfdf5] text-[#047857] border border-[#a7f3d0] rounded font-sans text-[10px] font-bold uppercase tracking-wider">
                    <span className="material-symbols-outlined text-xs">verified</span>
                    Trip Confirmed • FSM: ASSIGNED & LOCKED
                  </span>
                  <span className="font-sans text-xs text-on-surface font-bold">{load.id}</span>
                  <span className="px-2 py-0.5 rounded bg-white text-[#047857] border border-[#a7f3d0] font-sans text-[11px] font-bold">
                    LR #{load.bookedDetails.lrNumber}
                  </span>
                </div>
                <span className="text-[#047857] font-sans text-[11px] font-bold">
                  Gross Margin Locked: +₹{load.bookedDetails.netMarginInr.toLocaleString("en-IN")}
                </span>
              </div>

              {/* Corridor Route Block */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 bg-surface-container-low p-3 sm:p-3.5 rounded-lg border border-surface-container-high">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                  <div className="flex flex-col">
                    <span className="font-sans text-[10px] text-outline">Loading Origin</span>
                    <span className="font-headline-sm text-xs sm:text-sm text-on-surface font-semibold">
                      {load.origin}
                    </span>
                    <span className="font-sans text-[11px] text-on-surface-variant">{load.originHub}</span>
                  </div>

                  <div className="flex sm:flex-col items-center gap-1.5 sm:gap-0 px-1 sm:px-2">
                    <span className="font-sans text-[11px] text-secondary font-medium tracking-tight">
                      {load.distanceKm}
                    </span>
                    <div className="flex items-center gap-0.5 text-secondary">
                      <span className="h-0.5 w-4 sm:w-6 bg-secondary/40"></span>
                      <span className="material-symbols-outlined text-sm">local_shipping</span>
                      <span className="h-0.5 w-4 sm:w-6 bg-secondary/40"></span>
                    </div>
                    <span className="font-sans text-[10px] text-outline">{load.corridor}</span>
                  </div>

                  <div className="flex flex-col">
                    <span className="font-sans text-[10px] text-outline">Unloading Destination</span>
                    <span className="font-headline-sm text-xs sm:text-sm text-on-surface font-semibold">
                      {load.destination}
                    </span>
                    <span className="font-sans text-[11px] text-on-surface-variant">{load.destinationHub}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-1.5 font-sans text-[10px] sm:text-[11px]">
                  <span className="px-2 py-0.5 rounded bg-surface border border-surface-container-high text-on-surface">
                    {load.weightTonnes} MT {load.materialType}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface border border-surface-container-high text-on-surface">
                    {load.vehicleDisplay}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-medium">
                    {load.bookedDetails.vehicleNo}
                  </span>
                </div>
              </div>

              {/* Booking Confirmation Details */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 bg-surface-container-low p-3 sm:p-3.5 rounded-lg border border-surface-container-high">
                <div className="flex flex-col">
                  <span className="font-sans text-[10px] text-outline">Assigned Transporter</span>
                  <span className="font-headline-sm text-sm sm:text-base text-on-surface font-semibold mt-0.5 truncate">
                    {load.bookedDetails.carrierName}
                  </span>
                  <span className="font-sans text-[10px] text-secondary font-medium">GST &amp; FASTag Verified</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-[10px] text-outline">Final Trip Freight</span>
                  <span className="font-headline-sm text-sm sm:text-base text-on-surface font-semibold mt-0.5">
                    ₹{load.bookedDetails.rate.toLocaleString("en-IN")}
                  </span>
                  <span className="font-sans text-[10px] text-outline">Target: ₹{load.targetRateInr?.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-[10px] text-outline">Net Brokerage Margin</span>
                  <span className="font-headline-sm text-sm sm:text-base text-secondary font-bold mt-0.5">
                    +₹{load.bookedDetails.netMarginInr.toLocaleString("en-IN")}
                  </span>
                  <span className="font-sans text-[10px] text-secondary font-medium">100% Guaranteed</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-[10px] text-outline">Assigned Driver &amp; Phone</span>
                  <span className="font-headline-sm text-sm text-on-surface font-semibold mt-0.5">
                    {load.bookedDetails.driverName}
                  </span>
                  <span className="font-sans text-[10px] text-outline">{load.bookedDetails.driverPhone}</span>
                </div>
              </div>

              {/* Status footer */}
              <div className="flex items-center justify-between pt-1">
                <span className="font-sans text-xs text-[#047857] font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">mark_email_read</span>
                  WhatsApp Loading Pass &amp; Digital LR dispatched to Driver and Transporter.
                </span>
                <button
                  type="button"
                  onClick={() => alert(`Digital LR #${load.bookedDetails?.lrNumber} generated. Ready for print or e-Way bill upload.`)}
                  className="px-3 py-1.5 bg-white hover:bg-[#ecfdf5] text-[#047857] border border-[#a7f3d0] rounded-lg font-sans text-xs font-semibold shadow-2xs transition-all"
                >
                  View Digital LR Slip
                </button>
              </div>
            </article>
          );
        }

        // 3. INCOMPLETE LOAD INQUIRY STATE
        if (load.status === "INCOMPLETE") {
          return (
            <article
              key={load.id}
              className="relative overflow-hidden bg-surface-container border border-surface-container-high rounded-xl p-4 sm:p-5 shadow-xs flex flex-col gap-3.5 sm:gap-4 bg-gradient-to-r from-surface-container-low via-surface-container to-surface-container transition-all animate-fadeIn"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-surface-container-high pb-2.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-primary-container text-on-primary-container rounded font-sans text-[10px] font-bold uppercase tracking-wider">
                    <span className="material-symbols-outlined text-xs">help_outline</span>
                    Incomplete Load Inquiry
                  </span>
                  <span className="font-sans text-xs text-on-surface font-semibold">Shipper: {load.shipperName}</span>
                </div>
                <span className="font-sans text-[11px] text-outline font-medium">
                  Source: {load.source || "Inbound WhatsApp Message"}
                </span>
              </div>

              <div className="bg-surface-container-low p-3 sm:p-3.5 rounded-lg flex flex-col gap-1.5 border border-surface-container-high">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-on-surface font-sans text-xs">
                  <span><strong>Origin:</strong> {load.originHub || load.origin}</span>
                  <span className="text-outline">•</span>
                  <span><strong>Destination:</strong> {load.destinationHub || load.destination}</span>
                  <span className="text-outline">•</span>
                  <span><strong>Placement:</strong> Tomorrow 06:00 AM IST</span>
                </div>
                <div className="flex flex-wrap items-center gap-1.5 mt-0.5 font-sans text-[10px]">
                  {(load.missingFields || ["Total Weight (MT)", "Truck Category"]).map((field, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-medium">
                      ⚠️ Missing: {field}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3 sm:p-3.5 bg-surface-container-low rounded-lg font-sans text-xs flex flex-col gap-1.5 border border-surface-container-high">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-[10px] text-outline font-semibold">
                    AI PRE-GENERATED CLARIFICATION (READY TO DISPATCH)
                  </span>
                  <span className="font-sans text-[10px] text-secondary font-medium">
                    Hinglish / English Dual Parse
                  </span>
                </div>
                <p className="text-on-surface-variant italic bg-surface p-2.5 rounded border border-surface-container-high leading-relaxed">
                  &quot;{load.clarificationDraft || "Namaste team, please confirm the total MT weight and whether container closed body is mandatory for tomorrow's indent?"}&quot;
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2.5 pt-1">
                <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => onSendClarification(load.id)}
                    className="flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-lg bg-white hover:bg-[#f7f6f4] text-[#18181b] border border-[#d6d3cd] hover:border-[#18181b] font-headline-sm text-xs font-semibold shadow-2xs transition-all active:scale-95 w-full sm:w-auto"
                  >
                    <span className="material-symbols-outlined text-base text-[#be3420]">send</span>
                    <span>Send WhatsApp Clarification Draft</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => alert("Manual editing enabled.")}
                    className="flex items-center justify-center gap-1 px-3 sm:px-3.5 py-2 rounded-lg bg-surface-container-low border border-surface-container-high text-on-surface hover:bg-surface-container-high font-sans text-xs transition-all w-full sm:w-auto"
                  >
                    <span>Edit Message Manually</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => onDismissLoad(load.id)}
                  className="text-outline hover:text-primary font-sans text-xs transition-colors ml-auto sm:ml-0"
                >
                  Dismiss Inquiry
                </button>
              </div>
            </article>
          );
        }

        // 4. DECISION_REQUIRED STATE (Margin Alert or Fast-Track Ready)
        const isCounterOpen = counterOpenId === load.id;
        const currentCounterVal = counterAmounts[load.id] || "₹46,000";
        const quote = load.bestQuote;
        const targetRate = load.targetRateInr || 50000;
        const quoteRate = quote?.quoteInr || 48500;
        const netMargin = load.netMarginInr ?? (targetRate - quoteRate);
        const marginPct = load.netMarginPct ?? ((netMargin / targetRate) * 100);

        return (
          <article
            key={load.id}
            className={`relative overflow-hidden bg-surface-container rounded-xl p-4 sm:p-5 shadow-xs flex flex-col gap-3.5 sm:gap-4 transition-all animate-fadeIn ${
              load.isMarginFloorAlert
                ? "border border-primary/30 bg-gradient-to-r from-primary-container/20 via-surface-container to-surface-container"
                : "border border-secondary/30 bg-gradient-to-r from-secondary-container/20 via-surface-container to-surface-container"
            }`}
          >
            {/* Card Top Row */}
            <div
              className={`flex flex-wrap items-center justify-between gap-2 border-b pb-2.5 ${
                load.isMarginFloorAlert ? "border-primary/20" : "border-secondary/15"
              }`}
            >
              <div className="flex flex-wrap items-center gap-2">
                {load.isMarginFloorAlert ? (
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-error-container text-on-error-container border border-primary/20 rounded font-sans text-[10px] font-bold uppercase tracking-wider">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-ping"></span>
                    Critical Margin Floor Alert
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-secondary-container text-on-secondary-container rounded font-sans text-[10px] font-bold uppercase tracking-wider">
                    <span className="material-symbols-outlined text-xs">verified</span>
                    1-Click Fast-Track Ready
                  </span>
                )}
                <span className="font-sans text-xs text-on-surface font-bold">{load.id}</span>
                <span className="px-1.5 py-0.5 rounded bg-surface-container-low text-on-surface-variant font-sans text-[10px]">
                  Shipper: {load.shipperName}
                </span>
              </div>
              <div
                className={`flex items-center gap-1 font-sans text-[11px] font-bold ${
                  load.isMarginFloorAlert ? "text-primary" : "text-secondary"
                }`}
              >
                <span className="material-symbols-outlined text-sm animate-pulse">timer</span>
                <span>{load.slaRemaining || "SLA: 08:00 remaining"}</span>
              </div>
            </div>

            {/* Corridor Route Block */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 bg-surface-container-low p-3 sm:p-3.5 rounded-lg border border-surface-container-high">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <div className="flex flex-col">
                  <span className="font-sans text-[10px] text-outline">Origin Hub</span>
                  <span className="font-headline-sm text-xs sm:text-sm text-on-surface font-semibold">
                    {load.origin}
                  </span>
                  <span className="font-sans text-[11px] text-on-surface-variant">{load.originHub}</span>
                </div>

                <div className="flex sm:flex-col items-center gap-1.5 sm:gap-0 px-1 sm:px-2">
                  <span
                    className={`font-sans text-[11px] font-semibold tracking-tight ${
                      load.isMarginFloorAlert ? "text-primary" : "text-secondary"
                    }`}
                  >
                    {load.distanceKm}
                  </span>
                  <div
                    className={`flex items-center gap-0.5 ${
                      load.isMarginFloorAlert ? "text-primary" : "text-secondary"
                    }`}
                  >
                    <span className="h-0.5 w-4 sm:w-6 bg-current/40"></span>
                    <span className="material-symbols-outlined text-sm">local_shipping</span>
                    <span className="h-0.5 w-4 sm:w-6 bg-current/40"></span>
                  </div>
                  <span className="font-sans text-[10px] text-outline">{load.corridor}</span>
                </div>

                <div className="flex flex-col">
                  <span className="font-sans text-[10px] text-outline">Destination Hub</span>
                  <span className="font-headline-sm text-xs sm:text-sm text-on-surface font-semibold">
                    {load.destination}
                  </span>
                  <span className="font-sans text-[11px] text-on-surface-variant">{load.destinationHub}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 font-sans text-[10px] sm:text-[11px]">
                <span className="px-2 py-0.5 rounded bg-surface border border-surface-container-high text-on-surface font-medium">
                  {load.weightTonnes} MT {load.materialType}
                </span>
                <span className="px-2 py-0.5 rounded bg-surface border border-surface-container-high text-on-surface font-medium">
                  {load.vehicleDisplay}
                </span>
                <span className="px-2 py-0.5 rounded bg-secondary-container/50 border border-secondary/20 text-on-secondary-container font-medium">
                  FASTag Linked
                </span>
              </div>
            </div>

            {/* 4 Financial Metric Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 bg-surface-container-low p-3 sm:p-3.5 rounded-lg border border-surface-container-high">
              <div className="flex flex-col">
                <span className="font-sans text-[10px] text-outline">Shipper Target Rate</span>
                <span className="font-headline-sm text-sm sm:text-base text-on-surface font-semibold mt-0.5">
                  ₹{targetRate.toLocaleString("en-IN")}
                </span>
                <span className="font-sans text-[10px] text-outline">
                  {load.weightTonnes ? `₹${Math.round(targetRate / load.weightTonnes).toLocaleString("en-IN")} / MT` : "All inclusive"}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-[10px] text-outline">Best Transporter Quote</span>
                <span className="font-headline-sm text-sm sm:text-base text-on-surface font-semibold mt-0.5">
                  ₹{quoteRate.toLocaleString("en-IN")}
                </span>
                <span className="font-sans text-[11px] text-on-surface-variant truncate">
                  {quote?.carrierName || "Ghatge Patil Transports"}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-[10px] text-outline">Projected Net Margin</span>
                <span
                  className={`font-headline-sm text-sm sm:text-base font-bold mt-0.5 ${
                    load.isMarginFloorAlert ? "text-primary" : "text-secondary"
                  }`}
                >
                  <NumberRoll value={netMargin} prefix="₹" /> (<NumberRoll value={marginPct} decimals={1} suffix="%" />)
                </span>
                <span className="font-sans text-[10px] text-outline">
                  {load.isMarginFloorAlert ? "-₹1,000 vs Min Floor" : "+₹2,000 over Target"}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-[10px] text-outline">Market Spot Benchmark</span>
                <span className="font-headline-sm text-sm sm:text-base text-secondary font-semibold mt-0.5">
                  ₹{(load.spotBenchmarkInr || (targetRate - 2800)).toLocaleString("en-IN")}
                </span>
                <span className="font-sans text-[10px] text-secondary font-medium">
                  {load.aiConfidence || "94% AI Confidence"}
                </span>
              </div>
            </div>

            {/* AI Dispatch Synthesis */}
            {load.aiSynthesis && (
              <div className="flex items-start gap-2.5 p-3 bg-primary-container/40 rounded-lg text-on-primary-container font-sans text-xs border border-primary/20 leading-relaxed">
                <span className="material-symbols-outlined text-base flex-shrink-0 mt-0.5 text-primary">
                  psychology
                </span>
                <div>
                  <strong className="font-semibold text-on-surface">AI Dispatch Synthesis: </strong>
                  {load.aiSynthesis}
                </div>
              </div>
            )}

            {/* Action Button Row */}
            <div className="flex flex-wrap items-center justify-between gap-2.5 pt-1">
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 w-full sm:w-auto">
                {/* 1-Click Approve & Book Button */}
                <button
                  type="button"
                  onClick={() => onApproveLoad(load.id)}
                  className="flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-lg bg-white hover:bg-[#ecfdf5] text-[#047857] border border-[#a7f3d0] hover:border-[#047857]/40 font-headline-sm text-xs font-semibold shadow-2xs transition-all active:scale-95 w-full sm:w-auto"
                >
                  <span className="material-symbols-outlined text-base text-[#047857]">task_alt</span>
                  <span>Approve &amp; Book Now (1-Click)</span>
                </button>

                {/* Counter Transporter Button */}
                <button
                  type="button"
                  onClick={() => handleToggleCounter(load.id, quoteRate - 2500)}
                  className="flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-lg bg-white hover:bg-[#fef2f0] text-[#be3420] border border-[#fecaca] hover:border-[#be3420]/40 font-headline-sm text-xs font-semibold shadow-2xs transition-all active:scale-95 w-full sm:w-auto"
                >
                  <span className="material-symbols-outlined text-base text-[#be3420]">forum</span>
                  <span>Counter Transporter</span>
                </button>

                <button
                  type="button"
                  onClick={() => alert(`Shipper rate hike request dispatched for ${load.id} (+₹2,000)!`)}
                  className="flex items-center justify-center gap-1 px-3 sm:px-3.5 py-2 rounded-lg bg-surface-container-low border border-surface-container-high text-on-surface hover:bg-surface-container-high font-sans text-xs transition-all w-full sm:w-auto"
                >
                  <span className="material-symbols-outlined text-base text-outline">request_quote</span>
                  <span>Request Shipper Hike (+₹2,000)</span>
                </button>
              </div>

              <div className="flex items-center gap-2 ml-auto sm:ml-0 font-sans text-xs">
                <span className="text-outline">
                  Driver: {quote?.driverName || "Suresh Y."} ({quote?.driverPhone || "+91 97412 XXXXX"})
                </span>
              </div>
            </div>

            {/* Interactive Counter Offer Drawer */}
            {isCounterOpen && (
              <div className="mt-2 p-3 bg-[#fef2f0] border border-[#be3420]/25 text-[#070707] rounded-lg flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 animate-fadeIn">
                <span className="font-sans text-xs text-[#78716c] font-semibold">
                  Set WhatsApp Counter Rate for {quote?.carrierName || "Transporter"}:
                </span>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={currentCounterVal}
                    onChange={(e) =>
                      setCounterAmounts((prev) => ({
                        ...prev,
                        [load.id]: e.target.value,
                      }))
                    }
                    className="bg-white border border-[#eae7e1] px-3 py-1.5 rounded text-[#070707] font-sans text-xs font-bold w-28 focus:outline-none focus:border-[#be3420]"
                  />
                  <button
                    type="button"
                    onClick={() => handleSendCounterOffer(load.id)}
                    className="px-3.5 py-1.5 bg-white hover:bg-[#f7f6f4] text-[#18181b] border border-[#d6d3cd] hover:border-[#18181b] font-sans text-xs font-semibold rounded shadow-2xs transition-all active:scale-95"
                  >
                    Send WhatsApp Counter
                  </button>
                </div>
              </div>
            )}
          </article>
        );
      })}

      {/* Guided Stageshow AI Action Queue Walkthrough Modal */}
      <QueueWalkthroughModal
        isOpen={walkthroughOpen}
        onClose={() => setWalkthroughOpen(false)}
      />
    </div>
  );
};
