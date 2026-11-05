"use client";

import React from "react";
import Link from "next/link";
import { HappyRobotLogo } from "../HappyRobotLogo";

interface DashboardHeaderProps {
  onOpenSimulator?: () => void;
  onOpenIngest?: () => void;
  onToggleMobileSidebar?: () => void;
  isMobileSidebarOpen?: boolean;
  isSidebarCollapsed?: boolean;
  onToggleSidebarCollapse?: () => void;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  onOpenSimulator,
  onOpenIngest,
  onToggleMobileSidebar,
  isMobileSidebarOpen,
  isSidebarCollapsed,
  onToggleSidebarCollapse,
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

        {/* Desktop sidebar toggle button */}
        <button
          onClick={onToggleSidebarCollapse}
          type="button"
          title={isSidebarCollapsed ? "Expand sidebar (⌘B)" : "Collapse sidebar (⌘B)"}
          aria-label="Toggle Sidebar Collapse"
          className="hidden md:flex items-center justify-center p-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container border border-surface-container-high text-[#57534e] hover:text-[#070707] transition-colors"
        >
          <span className="material-symbols-outlined text-xl">
            {isSidebarCollapsed ? "menu_open" : "menu"}
          </span>
        </button>

        {/* HappyFreight Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group" aria-label="HappyFreight">
          <HappyRobotLogo className="h-6 sm:h-7 w-auto" />
          <div className="hidden sm:flex flex-col border-l border-surface-container-high pl-2.5">
            <span className="font-sans text-[10px] text-outline uppercase tracking-wider font-semibold">
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
          <span className="font-sans text-[11px] text-secondary font-semibold tracking-tight">
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
          <div className="absolute right-2 flex items-center px-1.5 py-0.5 bg-surface-container-high rounded text-on-surface-variant font-sans text-[10px] font-medium">
            Cmd + K
          </div>
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
        {/* Inbound Shipper Load Ingestion Button (Harmonious Warm Stone CTA) */}
        <button
          onClick={onOpenIngest}
          type="button"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white hover:bg-[#f7f6f4] text-[#18181b] font-sans text-xs font-semibold transition-all shadow-2xs hover:shadow-xs active:scale-[0.98] active:bg-[#f0ede6] border border-[#d6d3cd] hover:border-[#a8a29e]"
        >
          <span className="material-symbols-outlined text-base text-[#be3420]">add_box</span>
          <span className="hidden sm:inline">+ Ingest Load</span>
        </button>

        {/* Simulator Launcher Button */}
        <button
          onClick={onOpenSimulator}
          type="button"
          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#e7e5e4] hover:bg-[#f5f4f0] text-[#18181b] font-sans text-xs font-medium transition-colors shadow-2xs"
        >
          <span className="material-symbols-outlined text-base text-[#71717a]">terminal</span>
          <span className="hidden lg:inline">Simulator</span>
        </button>

        {/* Tenant Selector Dropdown */}
        <button
          type="button"
          className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-white border border-[#e7e5e4] hover:bg-[#f5f4f0] text-[#18181b] transition-colors shadow-2xs"
        >
          <span className="material-symbols-outlined text-base text-[#71717a]">domain</span>
          <span className="font-sans text-xs text-[#18181b] font-medium max-w-[120px] sm:max-w-none truncate">
            Sharma Logistics - Bengaluru
          </span>
          <span className="material-symbols-outlined text-sm text-[#a1a1aa]">expand_more</span>
        </button>

        {/* Notifications Icon with Badge */}
        <button
          type="button"
          aria-label="Notifications"
          className="relative p-1.5 sm:p-2 rounded-lg bg-white border border-[#e7e5e4] hover:bg-[#f5f4f0] text-[#52525b] transition-colors shadow-2xs"
        >
          <span className="material-symbols-outlined text-base">notifications</span>
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#be3420] text-white font-sans text-[9px] font-bold">
            3
          </span>
        </button>

        {/* User Profile Avatar */}
        <div className="relative flex items-center pl-1">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#f5f4f0] border border-[#e7e5e4] font-sans text-xs font-bold text-[#18181b]">
            AR
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-[#047857] border-2 border-white"></span>
          </div>
        </div>
      </div>
    </header>
  );
};
