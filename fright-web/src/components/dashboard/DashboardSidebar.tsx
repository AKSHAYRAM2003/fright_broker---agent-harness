"use client";

import React from "react";

interface DashboardSidebarProps {
  activeView?: string;
  onSelectView?: (view: string) => void;
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

export const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
  activeView = "queue",
  onSelectView,
  isMobileOpen = false,
  onCloseMobile,
  isCollapsed = false,
  onToggleCollapse,
}) => {
  const navItems = [
    {
      id: "queue",
      label: "Operations Queue",
      shortLabel: "Queue",
      icon: "inbox",
      badge: "3",
      badgeColor: "bg-[#be3420] text-white",
      iconColor: "text-[#be3420]",
    },
    {
      id: "dispatch",
      label: "Live Dispatch",
      shortLabel: "Dispatch",
      icon: "local_shipping",
      badge: "18",
      badgeColor: "bg-[#e0e7ff] text-[#3730a3]",
      iconColor: "text-[#2563eb]",
    },
    {
      id: "transporters",
      label: "Transporters",
      shortLabel: "Fleet",
      icon: "rv_hookup",
      badge: "148",
      badgeColor: "bg-[#fef3c7] text-[#92400e]",
      iconColor: "text-[#d97706]",
    },
    {
      id: "crm",
      label: "Shipper CRM",
      shortLabel: "CRM",
      icon: "corporate_fare",
      badge: null,
      badgeColor: "",
      iconColor: "text-[#9333ea]",
    },
    {
      id: "margins",
      label: "Analytics & Margins",
      shortLabel: "Margins",
      icon: "trending_up",
      badge: null,
      badgeColor: "",
      iconColor: "text-[#16a34a]",
    },
    {
      id: "whatsapp",
      label: "WhatsApp Feeds",
      shortLabel: "WhatsApp",
      icon: "chat",
      badge: "Live",
      badgeColor: "bg-[#dcfce7] text-[#166534]",
      iconColor: "text-[#059669]",
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
        className={`fixed top-14 bottom-0 z-40 flex flex-col border-r border-[#e7e5e4] transition-all duration-300 ease-in-out select-none bg-white ${
          isMobileOpen
            ? "translate-x-0 w-64 px-3 py-3.5 shadow-2xl"
            : `-translate-x-full md:translate-x-0 ${
                isCollapsed ? "md:w-[76px] px-2 py-3" : "md:w-64 px-3 py-3.5"
              }`
        }`}
      >
        {/* =========================================================================
            COLLAPSED STATE: Light mode icon rail with stacked labels (matching user reference)
            ========================================================================= */}
        {isCollapsed && !isMobileOpen ? (
          <div className="flex-1 flex flex-col h-full">
            {/* Top Minimalist Brand Pill / Section Hint */}
            <div className="flex items-center justify-center py-1 mb-2">
              <span className="font-sans text-[9px] uppercase tracking-wider font-bold text-[#a8a29e]">
                Ops
              </span>
            </div>

            {/* Navigation items in stacked vertical rail */}
            <nav className="flex-1 flex flex-col gap-1.5 overflow-y-auto">
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
                    title={item.label}
                    className={`w-full flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all relative ${
                      isActive
                        ? "bg-[#fef2f0] text-[#be3420] font-semibold border border-[#be3420]/30 shadow-2xs"
                        : "text-[#57534e] hover:bg-[#f7f6f4] hover:text-[#070707] border border-transparent font-medium"
                    }`}
                  >
                    <div className="relative flex items-center justify-center">
                      <span
                        className={`material-symbols-outlined text-[23px] transition-transform ${
                          isActive ? "text-[#be3420] scale-105" : item.iconColor
                        }`}
                      >
                        {item.icon}
                      </span>
                      {item.badge && (
                        <span
                          className={`absolute -top-1 -right-2.5 px-1 py-0.2 min-w-[15px] h-[15px] flex items-center justify-center rounded-full font-sans text-[8.5px] font-bold leading-none shadow-2xs ${
                            isActive
                              ? "bg-[#be3420] text-white"
                              : item.badgeColor
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <span
                      className={`font-sans text-[10px] mt-1 text-center tracking-tight truncate w-full ${
                        isActive
                          ? "font-bold text-[#be3420]"
                          : "font-medium text-[#57534e]"
                      }`}
                    >
                      {item.shortLabel}
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* Bottom Expand Toggle Button [≡→] in Light Mode (Matching User Image) */}
            <div className="mt-auto pt-2 border-t border-[#f0eee9] flex flex-col items-center">
              <button
                type="button"
                onClick={onToggleCollapse}
                title="Expand sidebar (⌘B)"
                aria-label="Expand sidebar"
                className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#f7f6f2] hover:bg-[#eeebe3] text-[#44403c] hover:text-[#be3420] border border-[#dfdbd5] transition-all shadow-2xs hover:shadow-xs active:scale-95 group"
              >
                {/* User reference [≡→] icon */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#44403c] group-hover:text-[#be3420] transition-colors"
                >
                  <line x1="3" y1="6" x2="14" y2="6" />
                  <line x1="3" y1="12" x2="10" y2="12" />
                  <line x1="3" y1="18" x2="14" y2="18" />
                  <polyline points="14 8 18 12 14 16" />
                </svg>
              </button>
            </div>
          </div>
        ) : (
          /* =========================================================================
             EXPANDED STATE: Full width with restored headings & labels in light mode
             ========================================================================= */
          <div className="flex-1 flex flex-col h-full">
            {/* Section Header - Always visible when expanded */}
            <div className="px-2.5 py-1 mb-2">
              <span className="font-sans text-[10.5px] text-[#78716c] uppercase tracking-wider font-bold">
                Autonomous Logistics
              </span>
            </div>

            {/* Navigation items with full labels & badges */}
            <nav className="flex-1 flex flex-col gap-1 overflow-y-auto">
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
                    title={item.label}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs transition-all text-left ${
                      isActive
                        ? "bg-[#fef2f0] text-[#be3420] font-semibold border border-[#be3420]/30 shadow-xs"
                        : "text-[#57534e] hover:bg-[#f7f6f4] hover:text-[#070707] border border-transparent font-medium"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`material-symbols-outlined text-[20px] ${
                          isActive ? "text-[#be3420]" : item.iconColor
                        }`}
                      >
                        {item.icon}
                      </span>
                      <span className="font-sans text-xs font-semibold text-[#1c1917]">
                        {item.label}
                      </span>
                    </div>
                    {item.badge && (
                      <span
                        className={`px-2 py-0.5 rounded-full font-sans text-[10.5px] font-bold ${
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
            <div className="p-3 bg-[#f7f6f2] rounded-xl border border-[#dfdbd5] mb-2.5 mt-2">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-sans text-[10px] text-[#78716c] uppercase font-bold tracking-wider">
                  Dispatch Engine
                </span>
                <span className="font-sans text-[10px] text-[#059669] font-bold bg-[#ecfdf5] px-1.5 py-0.5 rounded border border-[#059669]/20">
                  v4.8-online
                </span>
              </div>
              <div className="w-full bg-[#e7e5e4] h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#be3420] h-full rounded-full w-4/5"></div>
              </div>
              <div className="flex justify-between items-center mt-2 text-[#57534e]">
                <span className="font-sans text-[10.5px]">Throughput</span>
                <span className="font-sans text-[10.5px] font-bold text-[#1c1917]">
                  148 MT / hr
                </span>
              </div>
            </div>

            {/* Bottom Collapse Toggle Button [←≡] */}
            <div className="pt-2 border-t border-[#f0eee9]">
              <button
                type="button"
                onClick={onToggleCollapse}
                title="Collapse sidebar (⌘B)"
                aria-label="Collapse sidebar"
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-[#f7f6f2] hover:bg-[#eeebe3] text-[#44403c] border border-[#dfdbd5] transition-all shadow-2xs hover:shadow-xs active:scale-[0.99] group"
              >
                <div className="flex items-center gap-2">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#44403c] group-hover:text-[#be3420] transition-colors"
                  >
                    <polyline points="9 8 5 12 9 16" />
                    <line x1="9" y1="6" x2="21" y2="6" />
                    <line x1="13" y1="12" x2="21" y2="12" />
                    <line x1="9" y1="18" x2="21" y2="18" />
                  </svg>
                  <span className="font-sans text-xs font-semibold text-[#44403c] group-hover:text-[#18181b]">
                    Collapse Sidebar
                  </span>
                </div>
                <kbd className="font-sans text-[10px] font-semibold text-[#78716c] bg-white px-1.5 py-0.5 rounded border border-[#dfdbd5]">
                  ⌘B
                </kbd>
              </button>
            </div>
          </div>
        )}
      </aside>
    </>
  );
};
