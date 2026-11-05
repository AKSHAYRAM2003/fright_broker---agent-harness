"use client";

import React from "react";
import Link from "next/link";
import { HappyRobotLogo } from "../HappyRobotLogo";

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
      iconBg: "bg-[#fff1ef] text-[#be3420] border-[#fecaca]/70",
      activeIconBg: "bg-[#be3420] text-white border-transparent",
      activeCard: "bg-[#fef2f0] text-[#be3420] border-[#be3420]/30 shadow-2xs font-semibold",
    },
    {
      id: "dispatch",
      label: "Live Dispatch",
      shortLabel: "Dispatch",
      icon: "local_shipping",
      badge: "18",
      badgeColor: "bg-[#eff6ff] text-[#2563eb]",
      iconBg: "bg-[#eff6ff] text-[#2563eb] border-[#bfdbfe]/70",
      activeIconBg: "bg-[#2563eb] text-white border-transparent",
      activeCard: "bg-[#eff6ff] text-[#1d4ed8] border-[#3b82f6]/35 shadow-2xs font-semibold",
    },
    {
      id: "transporters",
      label: "Transporters",
      shortLabel: "Fleet",
      icon: "rv_hookup",
      badge: "148",
      badgeColor: "bg-[#fffbeb] text-[#b45309]",
      iconBg: "bg-[#fffbeb] text-[#d97706] border-[#fde68a]/70",
      activeIconBg: "bg-[#d97706] text-white border-transparent",
      activeCard: "bg-[#fffbeb] text-[#b45309] border-[#f59e0b]/35 shadow-2xs font-semibold",
    },
    {
      id: "crm",
      label: "Shipper CRM",
      shortLabel: "CRM",
      icon: "corporate_fare",
      badge: null,
      badgeColor: "",
      iconBg: "bg-[#faf5ff] text-[#7c3aed] border-[#e9d5ff]/70",
      activeIconBg: "bg-[#7c3aed] text-white border-transparent",
      activeCard: "bg-[#faf5ff] text-[#6d28d9] border-[#8b5cf6]/35 shadow-2xs font-semibold",
    },
    {
      id: "margins",
      label: "Analytics & Margins",
      shortLabel: "Margins",
      icon: "trending_up",
      badge: null,
      badgeColor: "",
      iconBg: "bg-[#f0fdf4] text-[#16a34a] border-[#bbf7d0]/70",
      activeIconBg: "bg-[#16a34a] text-white border-transparent",
      activeCard: "bg-[#f0fdf4] text-[#15803d] border-[#22c55e]/35 shadow-2xs font-semibold",
    },
    {
      id: "whatsapp",
      label: "WhatsApp Feeds",
      shortLabel: "WhatsApp",
      icon: "chat",
      badge: "Live",
      badgeColor: "bg-[#ecfdf5] text-[#047857]",
      iconBg: "bg-[#ecfdf5] text-[#059669] border-[#a7f3d0]/70",
      activeIconBg: "bg-[#059669] text-white border-transparent",
      activeCard: "bg-[#ecfdf5] text-[#047857] border-[#10b981]/35 shadow-2xs font-semibold",
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

      {/* Sidebar Container: Full-height from top-0 to bottom-0 */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 flex flex-col border-r border-[#e7e5e4] transition-all duration-300 ease-in-out select-none bg-white ${
          isMobileOpen
            ? "translate-x-0 w-64 shadow-2xl"
            : `-translate-x-full md:translate-x-0 ${
                isCollapsed ? "md:w-[76px]" : "md:w-64"
              }`
        }`}
      >
        {/* =========================================================================
            COLLAPSED STATE: Extended till top with centered brand logo & icon rail
            ========================================================================= */}
        {isCollapsed && !isMobileOpen ? (
          <div className="flex-1 flex flex-col h-full">
            {/* Top Brand Logo: Exactly h-14 to align with navbar */}
            <div className="h-14 flex items-center justify-center border-b border-[#e7e5e4] flex-shrink-0">
              <Link
                href="/"
                className="flex items-center justify-center p-1.5 rounded-xl hover:bg-[#f7f6f2] transition-colors"
                title="HappyFreight Home"
                aria-label="HappyFreight Home"
              >
                <HappyRobotLogo iconOnly className="h-7 w-7" />
              </Link>
            </div>

            {/* Navigation items in stacked vertical rail with distinct icon colours & borders */}
            <nav className="flex-1 flex flex-col gap-2 py-3 px-2 overflow-y-auto">
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
                    className={`w-full flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all relative border ${
                      isActive
                        ? item.activeCard
                        : "bg-transparent hover:bg-[#f7f6f4] text-[#44403c] hover:text-[#18181b] border-transparent font-medium"
                    }`}
                  >
                    <div className="relative flex items-center justify-center">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all ${
                          isActive ? item.activeIconBg : item.iconBg
                        }`}
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          {item.icon}
                        </span>
                      </div>
                      {item.badge && (
                        <span
                          className={`absolute -top-1 -right-2 px-1 py-0.2 min-w-[15px] h-[15px] flex items-center justify-center rounded-full font-sans text-[8.5px] font-bold leading-none shadow-2xs ${
                            isActive ? "bg-[#be3420] text-white" : item.badgeColor
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <span
                      className={`font-sans text-[10px] mt-1 text-center tracking-tight truncate w-full ${
                        isActive
                          ? "font-bold text-[#18181b]"
                          : "font-medium text-[#57534e]"
                      }`}
                    >
                      {item.shortLabel}
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* Bottom Expand Toggle Button - Sleek Modern Dual-Pane Panel Icon */}
            <div className="mt-auto p-3 border-t border-[#f0eee9] flex flex-col items-center flex-shrink-0">
              <button
                type="button"
                onClick={onToggleCollapse}
                title="Expand sidebar (⌘B)"
                aria-label="Expand sidebar"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white hover:bg-[#f7f6f2] text-[#44403c] hover:text-[#18181b] border border-[#e7e5e4] hover:border-[#d6d3cd] transition-all shadow-2xs hover:shadow-xs active:scale-95 group"
              >
                {/* Sleek Dual-Pane Panel Left Open Icon */}
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#57534e] group-hover:text-[#be3420] transition-colors"
                >
                  <rect width="18" height="18" x="3" y="3" rx="3.5" />
                  <path d="M9 3v18" />
                  <path d="m14 9 3 3-3 3" />
                </svg>
              </button>
            </div>
          </div>
        ) : (
          /* =========================================================================
             EXPANDED STATE: Full height to top with brand logo & distinct icon colors
             ========================================================================= */
          <div className="flex-1 flex flex-col h-full">
            {/* Top Brand Header: Exactly h-14, bolder HappyFreight text, no hover color jitter */}
            <div className="h-14 flex items-center justify-between px-4 border-b border-[#e7e5e4] flex-shrink-0">
              <Link
                href="/"
                className="flex items-center gap-2.5 select-none"
                aria-label="HappyFreight Home"
              >
                <HappyRobotLogo iconOnly className="h-7 w-7 flex-shrink-0" />
                <span className="font-sans text-[15.5px] font-extrabold text-[#18181b] tracking-tight leading-none">
                  HappyFreight
                </span>
              </Link>

              {/* Mobile Close Button (when drawer is open) */}
              {isMobileOpen && (
                <button
                  onClick={onCloseMobile}
                  type="button"
                  aria-label="Close Sidebar"
                  className="md:hidden p-1.5 rounded-lg text-[#78716c] hover:text-[#18181b] hover:bg-[#f5f4ef] transition-colors"
                >
                  <span className="material-symbols-outlined text-lg">close</span>
                </button>
              )}
            </div>

            {/* Scrollable Middle Area: Nav items with distinct icon colors & borders */}
            <div className="flex-1 flex flex-col px-3 py-3 overflow-y-auto">
              {/* Navigation items (autonomous logistics text removed per instruction) */}
              <nav className="flex flex-col gap-1.5">
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
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-all text-left border ${
                        isActive
                          ? item.activeCard
                          : "bg-transparent hover:bg-[#f7f6f4] text-[#44403c] hover:text-[#18181b] border-transparent font-medium"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center border transition-all flex-shrink-0 ${
                            isActive ? item.activeIconBg : item.iconBg
                          }`}
                        >
                          <span className="material-symbols-outlined text-[17px]">
                            {item.icon}
                          </span>
                        </div>
                        <span
                          className={`font-sans text-xs ${
                            isActive ? "font-bold text-[#18181b]" : "font-medium text-[#27272a]"
                          }`}
                        >
                          {item.label}
                        </span>
                      </div>
                      {item.badge && (
                        <span
                          className={`px-2 py-0.5 rounded-full font-sans text-[10px] font-bold ${
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
              <div className="p-3 bg-[#f7f6f2] rounded-xl border border-[#dfdbd5] mb-2 mt-auto">
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
            </div>

            {/* Bottom Collapse Toggle Button - Sleek Modern Dual-Pane Panel Icon */}
            <div className="p-3 border-t border-[#f0eee9] flex-shrink-0">
              <button
                type="button"
                onClick={onToggleCollapse}
                title="Collapse sidebar (⌘B)"
                aria-label="Collapse sidebar"
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-white hover:bg-[#f7f6f2] text-[#44403c] hover:text-[#18181b] border border-[#e7e5e4] hover:border-[#d6d3cd] transition-all shadow-2xs hover:shadow-xs active:scale-[0.99] group"
              >
                <div className="flex items-center gap-2">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#57534e] group-hover:text-[#be3420] transition-colors"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="3.5" />
                    <path d="M9 3v18" />
                    <path d="m16 15-3-3 3-3" />
                  </svg>
                  <span className="font-sans text-xs font-semibold text-[#44403c] group-hover:text-[#18181b]">
                    Collapse Sidebar
                  </span>
                </div>
                <kbd className="font-sans text-[10px] font-semibold text-[#78716c] bg-[#f7f6f2] px-1.5 py-0.5 rounded border border-[#dfdbd5]">
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
