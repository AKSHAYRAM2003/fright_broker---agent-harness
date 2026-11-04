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
      badge: "3",
      badgeColor: "bg-primary text-white",
    },
    {
      id: "dispatch",
      label: "Live Dispatch",
      icon: "local_shipping",
      badge: "18",
      badgeColor: "bg-secondary-container text-on-secondary-container",
    },
    {
      id: "transporters",
      label: "Transporters",
      icon: "rv_hookup",
      badge: "148",
      badgeColor: "bg-surface-container-high text-on-surface-variant font-sans text-[9px]",
    },
    {
      id: "crm",
      label: "Shipper CRM",
      icon: "corporate_fare",
      badge: null,
    },
    {
      id: "margins",
      label: "Analytics & Margins",
      icon: "trending_up",
      badge: null,
    },
    {
      id: "whatsapp",
      label: "WhatsApp Feeds",
      icon: "chat",
      badge: "Live",
      badgeColor: "bg-secondary-container text-on-secondary-container",
    },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 md:hidden animate-fadeIn"
          aria-hidden="true"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-14 bottom-0 w-64 bg-surface-container-lowest z-40 flex flex-col py-3.5 px-3 border-r border-surface-container-high transition-transform duration-300 ease-in-out select-none ${
          isMobileOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Section Header */}
        <div className="px-3 py-1 mb-2">
          <span className="font-sans text-[10px] text-outline uppercase tracking-wider font-semibold">
            Autonomous Logistics
          </span>
        </div>

        {/* Navigation items with HappyFreight Brand Styling */}
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
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs transition-all text-left ${
                  isActive
                    ? "bg-[#fef2f0] text-[#be3420] font-semibold border border-[#be3420]/25 shadow-xs"
                    : "text-[#57534e] hover:bg-[#f7f6f4] hover:text-[#070707] border border-transparent font-normal"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`material-symbols-outlined text-lg ${
                      isActive ? "text-[#be3420]" : "text-[#78716c]"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`px-1.5 py-0.5 rounded-full font-sans text-[10px] font-bold ${
                      isActive ? "bg-[#be3420] text-white" : item.badgeColor
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Dispatch Engine Progress Bar Widget */}
        <div className="mt-auto p-3.5 bg-surface-container-low rounded-xl border border-surface-container-high">
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-sans text-[10px] text-outline uppercase font-semibold">Dispatch Engine</span>
            <span className="font-sans text-[10px] text-secondary font-bold bg-secondary-container/50 px-1.5 py-0.5 rounded border border-secondary/20">
              v4.8-online
            </span>
          </div>
          <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
            <div className="bg-primary h-full rounded-full w-4/5"></div>
          </div>
          <div className="flex justify-between items-center mt-2 text-on-surface-variant">
            <span className="font-sans text-[10px]">Throughput</span>
            <span className="font-sans text-[10px] font-bold text-on-surface">148 MT / hr</span>
          </div>
        </div>
      </aside>
    </>
  );
};
