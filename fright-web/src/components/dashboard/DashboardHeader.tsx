"use client";

import React from "react";
import Link from "next/link";
import { HappyRobotLogo } from "../HappyRobotLogo";

interface DashboardHeaderProps {
  onOpenSimulator?: () => void;
  onOpenIngest?: () => void;
  onToggleMobileSidebar?: () => void;
  isMobileSidebarOpen?: boolean;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  onOpenSimulator,
  onOpenIngest,
  onToggleMobileSidebar,
  isMobileSidebarOpen,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 h-14 bg-surface/90 backdrop-blur-xl z-50 flex items-center justify-between px-4 sm:px-6 border-b border-surface-container-high shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
      {/* Brand & Mobile Hamburger */}
      <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
        {/* Mobile menu button */}
        <button
          onClick={onToggleMobileSidebar}
          type="button"
          aria-label="Toggle Navigation"
          className="md:hidden p-1.5 rounded-lg bg-surface-container-low border border-surface-container-high text-on-surface-variant hover:text-on-surface"
        >
          <span className="material-symbols-outlined text-xl">
            {isMobileSidebarOpen ? "close" : "menu"}
          </span>
        </button>

        {/* HappyFreight Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group" aria-label="HappyFreight">
          <HappyRobotLogo className="h-6 sm:h-7 w-auto" />
          <div className="hidden sm:flex flex-col border-l border-surface-container-high pl-2.5">
            <span className="font-mono text-[9px] text-outline uppercase tracking-wider font-semibold">
              Freight Operations Harness
            </span>
          </div>
        </Link>

        {/* AI Agent Active Pill */}
        <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-0.5 bg-secondary-container/50 rounded-full border border-secondary/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
          </span>
          <span className="font-mono text-[11px] text-secondary font-medium">
            AI Agent: Active (Listening to WhatsApp)
          </span>
        </div>
      </div>

      {/* Global Search Bar (Responsive: hidden on small mobile, expandable on md) */}
      <div className="flex-1 max-w-xl mx-3 sm:mx-6 hidden md:block">
        <div className="relative flex items-center">
          <span className="material-symbols-outlined absolute left-2.5 text-outline pointer-events-none text-base">
            search
          </span>
          <input
            type="text"
            placeholder="Search by Load ID, City, Transporter, or Truck Number..."
            className="w-full bg-surface-container-low border border-surface-container-high text-on-surface placeholder:text-outline pl-9 pr-16 py-1.5 rounded-lg font-sans text-xs focus:outline-none focus:bg-surface focus:border-primary transition-colors"
          />
          <div className="absolute right-2 flex items-center px-1.5 py-0.5 bg-surface-container-high rounded text-on-surface-variant font-mono text-[10px]">
            Cmd + K
          </div>
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
        {/* Inbound Shipper Load Ingestion Button */}
        <button
          onClick={onOpenIngest}
          type="button"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary hover:bg-[#e03a22] text-white font-mono text-xs font-semibold transition-all shadow-xs active:scale-95"
        >
          <span className="material-symbols-outlined text-base">add_box</span>
          <span className="hidden sm:inline">+ Ingest Load</span>
        </button>

        {/* Simulator Launcher Button (Shortcut) */}
        <button
          onClick={onOpenSimulator}
          type="button"
          className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-surface-container-low border border-surface-container-high hover:bg-surface-container-high text-primary font-mono text-xs font-semibold transition-colors shadow-xs"
        >
          <span className="material-symbols-outlined text-base">terminal</span>
          <span className="hidden lg:inline">Simulator</span>
        </button>

        {/* Tenant Selector Dropdown */}
        <button
          type="button"
          className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-surface-container-low border border-surface-container-high hover:bg-surface-container-high hover:text-on-surface text-on-surface-variant transition-colors"
        >
          <span className="material-symbols-outlined text-base text-primary">domain</span>
          <span className="font-sans text-xs text-on-surface font-medium max-w-[120px] sm:max-w-none truncate">
            Sharma Logistics - Bengaluru
          </span>
          <span className="material-symbols-outlined text-sm text-outline">expand_more</span>
        </button>

        {/* Notifications Icon with Badge */}
        <button
          type="button"
          aria-label="Notifications"
          className="relative p-1.5 sm:p-2 rounded-lg bg-surface-container-low border border-surface-container-high hover:bg-surface-container-high text-on-surface-variant transition-colors"
        >
          <span className="material-symbols-outlined text-base">notifications</span>
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-error text-on-error font-mono text-[10px] font-bold">
            3
          </span>
        </button>

        {/* User Profile Avatar */}
        <div className="relative flex items-center pl-1">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-surface-container-high border border-surface-container-high font-mono text-xs font-bold text-on-surface">
            AR
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-secondary border-2 border-surface"></span>
          </div>
        </div>
      </div>
    </header>
  );
};
