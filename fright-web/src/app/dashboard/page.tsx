"use client";

import React, { useState, useEffect } from "react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { TopStatsBar } from "@/components/dashboard/TopStatsBar";
import { ActionQueueSection } from "@/components/dashboard/ActionQueueSection";
import { WhatsAppLiveFeed } from "@/components/dashboard/WhatsAppLiveFeed";
import { WhatsAppSimulatorModal } from "@/components/dashboard/WhatsAppSimulatorModal";
import { ShipperIngestionModal } from "@/components/dashboard/ShipperIngestionModal";
import { TransportersView } from "@/components/dashboard/TransportersView";
import { Truck, Users, Filter, ArrowUpDown } from "lucide-react";

export default function DashboardPage() {
  const [activeView, setActiveView] = useState("queue");
  const [simulatorOpen, setSimulatorOpen] = useState(false);
  const [ingestModalOpen, setIngestModalOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Keyboard shortcuts: Ctrl/Cmd + S for Simulator, Ctrl/Cmd + I for Ingestion
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") {
        e.preventDefault();
        setSimulatorOpen((prev) => !prev);
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "i") {
        e.preventDefault();
        setIngestModalOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
      data-view="dashboard"
      className="min-h-screen bg-surface font-sans text-on-surface antialiased selection:bg-[#ffd8d1] selection:text-[#901300]"
    >
      {/* 1. TOP HEADER BAR */}
      <DashboardHeader
        onOpenSimulator={() => setSimulatorOpen(true)}
        onOpenIngest={() => setIngestModalOpen(true)}
        onToggleMobileSidebar={() => setIsMobileSidebarOpen((prev) => !prev)}
        isMobileSidebarOpen={isMobileSidebarOpen}
      />

      {/* 2. SIDEBAR (Fixed on desktop, slide-out drawer on mobile) */}
      <DashboardSidebar
        activeView={activeView}
        onSelectView={setActiveView}
        isMobileOpen={isMobileSidebarOpen}
        onCloseMobile={() => setIsMobileSidebarOpen(false)}
      />

      {/* 3. MAIN WORKSPACE */}
      <div className="md:pl-64">
        <main className="w-full pt-[72px] sm:pt-[80px] px-4 sm:px-6 lg:px-8 pb-10 bg-surface min-h-screen">
          <div className="flex flex-col w-full gap-4 sm:gap-5 max-w-[1540px] mx-auto">
            {/* Top Operational Metrics Bar (Single Row Guaranteed) */}
            {activeView !== "transporters" && <TopStatsBar />}

            {/* MAIN 2-COLUMN OPERATIONS MATRIX (66% Left, 34% Right on Desktop, stacked on Mobile/Tablet) */}
            {activeView === "queue" && (
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 sm:gap-5 items-start">
                {/* LEFT COLUMN: AI Action Queue (8 cols = ~66%) */}
                <div className="xl:col-span-8 flex flex-col gap-3.5 sm:gap-4">
                  <ActionQueueSection onOpenIngest={() => setIngestModalOpen(true)} />
                </div>

                {/* RIGHT COLUMN: Live WhatsApp Stream & Sandbox (4 cols = ~34%) */}
                <div className="xl:col-span-4 flex flex-col gap-3.5 sm:gap-4">
                  <WhatsAppLiveFeed onOpenSimulator={() => setSimulatorOpen(true)} />
                </div>
              </div>
            )}

            {/* Live Dispatch View (Kanban / Data Table) */}
            {activeView === "dispatch" && (
              <div className="bg-surface-container border border-surface-container-high rounded-xl p-5 shadow-xs flex flex-col gap-4 animate-fadeIn">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Truck className="w-5 h-5 text-primary" />
                    <h3 className="font-headline-sm text-base text-on-surface font-semibold">
                      Live Dispatch Board (18 Active In-Transit Loads)
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-low border border-surface-container-high text-on-surface-variant font-mono text-xs">
                      <Filter className="w-3.5 h-3.5" /> Filter Corridors
                    </button>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-low border border-surface-container-high text-on-surface-variant font-mono text-xs">
                      <ArrowUpDown className="w-3.5 h-3.5" /> Sort by Margin
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left font-mono text-xs border border-surface-container-high rounded-lg">
                    <thead className="bg-surface-container-low text-outline uppercase font-semibold border-b border-surface-container-high">
                      <tr>
                        <th className="p-3">Trip ID</th>
                        <th className="p-3">Corridor Lane</th>
                        <th className="p-3">Vehicle</th>
                        <th className="p-3">Assigned Carrier</th>
                        <th className="p-3">Transit Milestone</th>
                        <th className="p-3">Net Margin</th>
                        <th className="p-3">FSM State</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-surface-container-high">
                      <tr className="hover:bg-surface-container-low/60 transition-colors">
                        <td className="p-3 font-bold text-on-surface">#TRIP-5CF053</td>
                        <td className="p-3 font-sans font-medium">Peenya, BLR ➔ Bhiwandi, MH</td>
                        <td className="p-3">KA-04-MF-5678 (32ft MXL)</td>
                        <td className="p-3 font-sans font-medium">Karnataka-Maharashtra Freight</td>
                        <td className="p-3 text-secondary font-semibold">Gate-out (Pune Bypass)</td>
                        <td className="p-3 font-bold text-secondary">₹7,000 (13.5%)</td>
                        <td className="p-3">
                          <span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-bold">
                            IN_TRANSIT
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-surface-container-low/60 transition-colors">
                        <td className="p-3 font-bold text-on-surface">#TRIP-882A10</td>
                        <td className="p-3 font-sans font-medium">Bellary, KA ➔ Chennai, TN</td>
                        <td className="p-3">KA-34-A-9901 (10-W Taurus)</td>
                        <td className="p-3 font-sans font-medium">Sri Balaji Logistics</td>
                        <td className="p-3 text-tertiary font-semibold">Loading in Progress</td>
                        <td className="p-3 font-bold text-secondary">₹4,200 (8.1%)</td>
                        <td className="p-3">
                          <span className="px-2 py-0.5 rounded bg-tertiary-container text-on-tertiary-container font-bold">
                            LOADING
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-surface-container-low/60 transition-colors">
                        <td className="p-3 font-bold text-on-surface">#TRIP-442B99</td>
                        <td className="p-3 font-sans font-medium">Hosur, TN ➔ Gurgaon, HR</td>
                        <td className="p-3">HR-55-X-2020 (40ft Trailer)</td>
                        <td className="p-3 font-sans font-medium">North-South Cargo Movers</td>
                        <td className="p-3 text-primary font-semibold">Destination Reached (Unloading)</td>
                        <td className="p-3 font-bold text-secondary">₹12,500 (10.4%)</td>
                        <td className="p-3">
                          <span className="px-2 py-0.5 rounded bg-primary-container text-on-primary-container font-bold">
                            POD_PENDING
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Carrier Network View (Dedicated Transporter Management) */}
            {activeView === "transporters" && <TransportersView />}
          </div>
        </main>
      </div>

      {/* 4. INTERACTIVE WHATSAPP INBOUND SANDBOX SIMULATOR */}
      <WhatsAppSimulatorModal
        isOpen={simulatorOpen}
        onClose={() => setSimulatorOpen(false)}
      />

      {/* 5. INBOUND SHIPPER LOAD INGESTION & FLEET MATCHING MODAL */}
      <ShipperIngestionModal
        isOpen={ingestModalOpen}
        onClose={() => setIngestModalOpen(false)}
        onDispatchSuccess={(load) => {
          console.log("Load dispatched:", load);
        }}
      />
    </div>
  );
}
