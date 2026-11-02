"use client";

import React from "react";
import Link from "next/link";
import { HappyRobotLogo } from "../HappyRobotLogo";
import { Search, Bell, Building2, ChevronDown, Radio } from "lucide-react";

interface DashboardHeaderProps {
  onOpenSimulator?: () => void;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ onOpenSimulator }) => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-[#ffffff]/90 backdrop-blur-xl z-50 flex items-center justify-between px-4 sm:px-6 md:px-8 border-b border-[#e5e5e5] shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      {/* Brand & Live FSM Indicator */}
      <div className="flex items-center gap-4 sm:gap-6 flex-shrink-0">
        <Link href="/" className="flex items-center gap-2 group" aria-label="HappyFreight Home">
          <HappyRobotLogo className="h-6 sm:h-7 w-auto" />
          <div className="hidden xl:flex flex-col border-l border-neutral-300 pl-3">
            <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest leading-none font-semibold">
              Operations Harness
            </span>
            <span className="font-mono text-[9px] text-[#ff462d] font-bold uppercase tracking-wider mt-0.5">
              FSM v4.8 • Core Online
            </span>
          </div>
        </Link>

        {/* Live Listening Pill */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-emerald-50 rounded-full border border-emerald-200/80 shadow-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
          </span>
          <span className="font-mono text-[11px] text-emerald-800 font-semibold tracking-tight">
            AI Agent: Active (WhatsApp Feed)
          </span>
        </div>
      </div>

      {/* Global Search Bar */}
      <div className="flex-1 max-w-xl mx-4 lg:mx-8 hidden md:block">
        <div className="relative flex items-center">
          <Search className="absolute left-3 text-neutral-400 w-4 h-4 pointer-events-none" />
          <input
            type="text"
            placeholder="Search by Load ID, City, Transporter, or Truck Number..."
            className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 pl-9 pr-20 py-2 rounded-lg font-sans text-xs focus:outline-none focus:bg-white focus:border-[#ff462d] focus:ring-1 focus:ring-[#ff462d]/20 transition-all shadow-xs"
          />
          <div className="absolute right-2.5 flex items-center gap-0.5 px-1.5 py-0.5 bg-neutral-200/70 border border-neutral-300/60 rounded text-neutral-600 font-mono text-[10px] font-medium">
            <span className="text-[11px]">⌘</span>K
          </div>
        </div>
      </div>

      {/* Right Controls & Profile */}
      <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
        {/* Simulator Quick Launcher */}
        <button
          onClick={onOpenSimulator}
          type="button"
          className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white font-mono text-xs font-semibold tracking-tight transition-all active:scale-95 shadow-xs"
        >
          <Radio className="w-3.5 h-3.5 text-[#ff462d] animate-pulse" />
          <span>Simulate WhatsApp</span>
        </button>

        {/* Tenant Selector */}
        <div className="relative">
          <button
            type="button"
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-50 border border-neutral-200 hover:bg-neutral-100 hover:border-neutral-300 text-neutral-700 transition-colors shadow-xs"
          >
            <Building2 className="w-3.5 h-3.5 text-[#ff462d]" />
            <span className="font-sans text-xs font-semibold text-neutral-900 max-w-[130px] sm:max-w-none truncate">
              Sharma Logistics • BLR
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
          </button>
        </div>

        {/* Notifications */}
        <button
          type="button"
          aria-label="Notifications"
          className="relative p-2 rounded-lg bg-neutral-50 border border-neutral-200 hover:bg-neutral-100 text-neutral-600 transition-colors"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff462d] text-white font-mono text-[9px] font-bold shadow-xs">
            3
          </span>
        </button>

        {/* User Profile Avatar */}
        <div className="flex items-center pl-1 sm:pl-2">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-neutral-900 to-neutral-700 text-white font-sans text-xs font-bold border border-neutral-200 shadow-xs">
            AR
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 border-2 border-white"></span>
          </div>
        </div>
      </div>
    </header>
  );
};
