"use client";

import React from "react";

interface DashboardSidebarProps {
  activeView?: string;
  onSelectView?: (view: string) => void;
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
}

export const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
  activeView = "queue",
  onSelectView,
  isMobileOpen = false,
  onCloseMobile,
}) => {
  const navItems = [
    {
      id: "queue",
      label: "Operations Queue",
      icon: "inbox",
    },
    {
      id: "dispatch",
      label: "Live Dispatch",
      icon: "local_shipping",
    },
    {
      id: "transporters",
      label: "Transporters",
      icon: "rv_hookup",
    },
    {
      id: "crm",
      label: "Shipper CRM",
      icon: "corporate_fare",
    },
    {
      id: "margins",
      label: "Analytics & Margins",
      icon: "trending_up",
    },
    {
      id: "whatsapp",
      label: "WhatsApp Feeds",
      icon: "chat",
    },
  ];

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isMobileOpen && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 bg-black/50 backdrop-blur-xs z-40 md:hidden animate-fadeIn"
          aria-hidden="true"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-14 bottom-0 w-64 bg-surface-container-lowest z-40 flex flex-col py-3 px-2 border-r border-surface-container-high transition-transform duration-300 ease-in-out select-none ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Category Header */}
        <div className="px-3 py-1 mb-2">
          <span className="font-mono text-[10px] text-outline uppercase tracking-wider font-semibold">
            Autonomous Logistics
          </span>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = activeView === item.id;

            return (
              <button
                key={item.id}
                onClick={() => {
                  onSelectView?.(item.id);
                  onCloseMobile?.();
                }}
                type="button"
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs transition-all text-left ${
                  isActive
                    ? "bg-primary-container text-on-primary-container font-semibold shadow-xs"
                    : "text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface font-normal"
                }`}
              >
                <span className="material-symbols-outlined text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Dispatch Engine Progress Bar Widget */}
        <div className="mt-auto p-3 bg-surface-container-low rounded-lg border border-surface-container-high">
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-mono text-[10px] text-outline">Dispatch Engine</span>
            <span className="font-mono text-[10px] text-secondary font-medium">v4.8-online</span>
          </div>
          <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
            <div className="bg-secondary h-full rounded-full w-4/5"></div>
          </div>
          <div className="flex justify-between items-center mt-1.5 text-on-surface-variant">
            <span className="font-mono text-[10px]">Throughput</span>
            <span className="font-mono text-[10px] font-semibold text-on-surface">148 MT / hr</span>
          </div>
        </div>
      </aside>
    </>
  );
};
