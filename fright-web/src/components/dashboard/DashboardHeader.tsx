"use client";

import React from "react";

interface DashboardHeaderProps {
  onOpenSimulator?: () => void;
  onOpenIngest?: () => void;
  isSidebarCollapsed?: boolean;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  onOpenSimulator,
  onOpenIngest,
  isSidebarCollapsed = false,
}) => {
  return (
    <>
      <style>{`
        .hf-top-navbar {
          position: fixed !important;
          top: 0px !important;
          right: 0px !important;
          height: 56px !important;
          background-color: #ffffff !important;
          border-bottom: 1px solid #e7e5e4 !important;
          z-index: 30 !important;
          display: flex !important;
          align-items: center !important;
          justify-content: space-between !important;
          left: 0px !important;
          transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @media (min-width: 768px) {
          .hf-top-navbar.is-expanded {
            left: 256px !important;
          }
          .hf-top-navbar.is-collapsed {
            left: 76px !important;
          }
        }
      `}</style>
      <header
        className={`hf-top-navbar px-4 sm:px-6 shadow-[0_1px_2px_rgba(0,0,0,0.02)] ${
          isSidebarCollapsed ? "is-collapsed" : "is-expanded"
        }`}
      >
      {/* Global Search Bar attached directly from sidebar boundary */}
      <div className="flex-1 max-w-md sm:max-w-lg">
        <div className="relative flex items-center">
          <span className="material-symbols-outlined absolute left-3 text-[#78716c] pointer-events-none text-base">
            search
          </span>
          <input
            type="text"
            placeholder="Search by Load ID, City, Transporter, or Truck Number..."
            className="w-full bg-[#f7f6f2] hover:bg-[#f1efe9] focus:bg-white border border-[#e7e5e4] focus:border-[#be3420] text-[#18181b] placeholder:text-[#a8a29e] pl-9 pr-14 py-2 rounded-xl font-sans text-xs focus:outline-none transition-colors shadow-2xs"
          />
          <div className="absolute right-2 flex items-center px-1.5 py-0.5 bg-white border border-[#e7e5e4] rounded text-[#71717a] font-sans text-[10px] font-medium shadow-2xs">
            ⌘K
          </div>
        </div>
      </div>

      {/* Right Controls with proper button padding & distinct icon styling */}
      <div className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
        {/* Inbound Shipper Load Ingestion Button (Harmonious Warm Stone CTA) */}
        <button
          onClick={onOpenIngest}
          type="button"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-[#f7f6f4] text-[#18181b] font-sans text-xs font-semibold transition-all shadow-2xs hover:shadow-xs active:scale-[0.98] border border-[#d6d3cd] hover:border-[#a8a29e]"
        >
          <span className="material-symbols-outlined text-base text-[#be3420]">add_box</span>
          <span className="hidden sm:inline">+ Ingest Load</span>
        </button>

        {/* Simulator Launcher Button */}
        <button
          onClick={onOpenSimulator}
          type="button"
          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-[#e7e5e4] hover:bg-[#f5f4f0] text-[#18181b] font-sans text-xs font-medium transition-colors shadow-2xs hover:shadow-xs active:scale-[0.98]"
        >
          <span className="material-symbols-outlined text-base text-[#4f46e5]">terminal</span>
          <span className="hidden lg:inline">Simulator</span>
        </button>

        {/* Tenant Selector Dropdown */}
        <button
          type="button"
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-[#e7e5e4] hover:bg-[#f5f4f0] text-[#18181b] transition-colors shadow-2xs hover:shadow-xs"
        >
          <span className="material-symbols-outlined text-base text-[#d97706]">domain</span>
          <span className="font-sans text-xs text-[#18181b] font-medium max-w-[120px] sm:max-w-none truncate">
            Sharma Logistics - Bengaluru
          </span>
          <span className="material-symbols-outlined text-sm text-[#a1a1aa]">expand_more</span>
        </button>

        {/* Notifications Icon with Badge */}
        <button
          type="button"
          aria-label="Notifications"
          className="relative p-2 rounded-xl bg-white border border-[#e7e5e4] hover:bg-[#f5f4f0] text-[#52525b] transition-colors shadow-2xs hover:shadow-xs"
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
    </>
  );
};
