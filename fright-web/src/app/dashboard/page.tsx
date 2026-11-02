"use client";

import React, { useState, useEffect } from "react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { TopStatsBar } from "@/components/dashboard/TopStatsBar";
import { ActionQueueSection } from "@/components/dashboard/ActionQueueSection";
import { WhatsAppLiveFeed } from "@/components/dashboard/WhatsAppLiveFeed";
import { WhatsAppSimulatorModal } from "@/components/dashboard/WhatsAppSimulatorModal";
import { Truck, Users, Building, TrendingUp, MessageSquare, Plus, Filter, ArrowUpDown } from "lucide-react";

export default function DashboardPage() {
  const [activeView, setActiveView] = useState("queue");
  const [simulatorOpen, setSimulatorOpen] = useState(false);

  // Keyboard shortcut Ctrl+S to open simulator
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") {
        e.preventDefault();
        setSimulatorOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div data-view="dashboard" className="min-h-screen bg-[#f8fafc] text-neutral-900 font-sans antialiased selection:bg-[#ff462d] selection:text-white">
      {/* 1. TOP HEADER BAR */}
      <DashboardHeader onOpenSimulator={() => setSimulatorOpen(true)} />

      {/* 2. LEFT SIDEBAR */}
      <DashboardSidebar activeView={activeView} onSelectView={setActiveView} />

      {/* 3. MAIN WORKSPACE */}
      <div className="md:pl-64 pt-16 min-h-screen flex flex-col">
        <main className="flex-1 w-full p-4 sm:p-6 lg:p-8 max-w-[1600px] mx-auto flex flex-col gap-6">
          {/* Top Quick Action Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-neutral-200">
            <div>
              <h1 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-neutral-900">
                {activeView === "queue" && "Operations Queue & HITL Approvals"}
                {activeView === "dispatch" && "Live Dispatch Board (Active FSM Pipeline)"}
                {activeView === "transporters" && "Verified Carrier & Transporter Network"}
                {activeView === "crm" && "Shipper CRM & Indents"}
                {activeView === "margins" && "Financial Margins & Settlements Ledger"}
                {activeView === "whatsapp" && "Real-time WhatsApp Communication Hub"}
              </h1>
              <p className="font-mono text-xs text-neutral-500 mt-0.5">
                Broker Tenant: <span className="text-neutral-900 font-semibold">Sharma Logistics</span> • Branch: Bengaluru Peenya
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => setSimulatorOpen(true)}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white border border-neutral-300 text-neutral-700 hover:bg-neutral-50 font-mono text-xs font-semibold shadow-xs transition-all active:scale-95"
              >
                <span>⚡ Test WhatsApp Input</span>
              </button>
              <button
                type="button"
                onClick={() => alert("Creating manual load booking modal...")}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#ff462d] hover:bg-[#e03a22] text-white font-mono text-xs font-bold shadow-xs transition-all active:scale-95"
              >
                <Plus className="w-4 h-4" />
                <span>Create Load</span>
              </button>
            </div>
          </div>

          {/* KPI Statistics Row */}
          <TopStatsBar />

          {/* VIEW ROUTING */}
          {activeView === "queue" && (
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
              {/* Left Column (65%): Action Queue */}
              <div className="xl:col-span-8">
                <ActionQueueSection />
              </div>

              {/* Right Column (35%): Live WhatsApp Feeds & Simulator Launch */}
              <div className="xl:col-span-4">
                <WhatsAppLiveFeed onOpenSimulator={() => setSimulatorOpen(true)} />
              </div>
            </div>
          )}

          {/* Fallback mock for Live Dispatch Board */}
          {activeView === "dispatch" && (
            <div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-xs flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-[#ff462d]" />
                  <h3 className="font-sans text-base font-bold text-neutral-900">
                    Active FSM Shipments Pipeline (18 In Transit)
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100 text-neutral-700 font-mono text-xs">
                    <Filter className="w-3.5 h-3.5" /> Filter
                  </button>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100 text-neutral-700 font-mono text-xs">
                    <ArrowUpDown className="w-3.5 h-3.5" /> Sort
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left font-mono text-xs border border-neutral-200 rounded-lg">
                  <thead className="bg-neutral-50 text-neutral-500 uppercase font-semibold border-b border-neutral-200">
                    <tr>
                      <th className="p-3">Trip ID</th>
                      <th className="p-3">Lane</th>
                      <th className="p-3">Vehicle</th>
                      <th className="p-3">Carrier</th>
                      <th className="p-3">Milestone</th>
                      <th className="p-3">Margin</th>
                      <th className="p-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200">
                    <tr className="hover:bg-neutral-50/80">
                      <td className="p-3 font-bold text-neutral-900">TRIP_5CF053</td>
                      <td className="p-3 font-sans font-medium">Peenya, BLR ➔ Bhiwandi, MH</td>
                      <td className="p-3">KA04MF5678 (32ft MXL)</td>
                      <td className="p-3 font-sans font-medium">Karnataka-Maharashtra Freight</td>
                      <td className="p-3 text-emerald-700 font-semibold">Gate-out (Pune Bypass)</td>
                      <td className="p-3 font-bold text-emerald-700">₹7,000 (13.5%)</td>
                      <td className="p-3"><span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">IN_TRANSIT</span></td>
                    </tr>
                    <tr className="hover:bg-neutral-50/80">
                      <td className="p-3 font-bold text-neutral-900">TRIP_882A10</td>
                      <td className="p-3 font-sans font-medium">Bellary, KA ➔ Chennai, TN</td>
                      <td className="p-3">KA34A9901 (10-W Taurus)</td>
                      <td className="p-3 font-sans font-medium">Sri Balaji Logistics</td>
                      <td className="p-3 text-amber-700 font-semibold">Loading in Progress</td>
                      <td className="p-3 font-bold text-emerald-700">₹4,200 (8.1%)</td>
                      <td className="p-3"><span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold">LOADING</span></td>
                    </tr>
                    <tr className="hover:bg-neutral-50/80">
                      <td className="p-3 font-bold text-neutral-900">TRIP_442B99</td>
                      <td className="p-3 font-sans font-medium">Hosur, TN ➔ Gurgaon, HR</td>
                      <td className="p-3">HR55X2020 (40ft Trailer)</td>
                      <td className="p-3 font-sans font-medium">North-South Cargo Movers</td>
                      <td className="p-3 text-emerald-700 font-semibold">Destination Reached (Unloading)</td>
                      <td className="p-3 font-bold text-emerald-700">₹12,500 (10.4%)</td>
                      <td className="p-3"><span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold">POD_PENDING</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Fallback mock for Transporters */}
          {activeView === "transporters" && (
            <div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-xs flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#ff462d]" />
                <h3 className="font-sans text-base font-bold text-neutral-900">
                  Verified Transporter Directory (Sharma Logistics Private Network)
                </h3>
              </div>
              <p className="font-mono text-xs text-neutral-500">
                Encrypted private carrier relationships, lane scores, and verified VAHAN vehicle fleets.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-xl flex flex-col gap-2">
                  <span className="font-sans text-sm font-bold text-neutral-900">Sharma Road Carriers</span>
                  <span className="font-mono text-xs text-neutral-500">Contact: Ramesh Sharma (+91 98450 11111)</span>
                  <span className="font-mono text-[11px] text-emerald-700 font-bold">Lanes: BLR-BHW, BLR-PUN • Rating: 4.8★</span>
                </div>
                <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-xl flex flex-col gap-2">
                  <span className="font-sans text-sm font-bold text-neutral-900">Karnataka-Maharashtra Freightways</span>
                  <span className="font-mono text-xs text-neutral-500">Contact: Anand Patil (+91 98450 33333)</span>
                  <span className="font-mono text-[11px] text-emerald-700 font-bold">Lanes: BLR-BHW, BLR-HYD • Rating: 4.9★</span>
                </div>
                <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-xl flex flex-col gap-2">
                  <span className="font-sans text-sm font-bold text-neutral-900">Sri Balaji Roadlines</span>
                  <span className="font-mono text-xs text-neutral-500">Contact: Balaji S. (+91 98450 44444)</span>
                  <span className="font-mono text-[11px] text-emerald-700 font-bold">Lanes: BLR-HYD, BLR-MAS • Rating: 4.7★</span>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* 4. INTERACTIVE WHATSAPP INBOUND SIMULATOR MODAL */}
      <WhatsAppSimulatorModal
        isOpen={simulatorOpen}
        onClose={() => setSimulatorOpen(false)}
      />
    </div>
  );
}

