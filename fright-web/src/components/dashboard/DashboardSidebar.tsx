"use client";

import React from "react";
import Link from "next/link";
import {
  Inbox,
  Truck,
  Building,
  TrendingUp,
  MessageSquare,
  Users,
  Activity,
  Layers,
} from "lucide-react";

interface DashboardSidebarProps {
  activeView?: string;
  onSelectView?: (view: string) => void;
}

export const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
  activeView = "queue",
  onSelectView,
}) => {
  const navItems = [
    {
      id: "queue",
      label: "Operations Queue",
      icon: Inbox,
      badge: "3",
      badgeColor: "bg-[#ff462d] text-white",
    },
    {
      id: "dispatch",
      label: "Live Dispatch",
      icon: Truck,
      badge: "18",
      badgeColor: "bg-emerald-100 text-emerald-800",
    },
    {
      id: "transporters",
      label: "Transporters",
      icon: Users,
      badge: null,
    },
    {
      id: "crm",
      label: "Shipper CRM",
      icon: Building,
      badge: null,
    },
    {
      id: "margins",
      label: "Analytics & Margins",
      icon: TrendingUp,
      badge: null,
    },
    {
      id: "whatsapp",
      label: "WhatsApp Feeds",
      icon: MessageSquare,
      badge: "Live",
      badgeColor: "bg-emerald-100 text-emerald-700 animate-pulse",
    },
  ];

  return (
    <aside className="fixed left-0 top-16 bottom-0 w-64 bg-white z-40 hidden md:flex flex-col py-4 px-3 border-r border-[#e5e5e5] select-none">
      {/* Category Heading */}
      <div className="px-3 py-1 mb-2 flex items-center justify-between">
        <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest font-semibold flex items-center gap-1.5">
          <Layers className="w-3 h-3 text-[#ff462d]" />
          Autonomous Logistics
        </span>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 flex flex-col gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onSelectView?.(item.id)}
              type="button"
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium transition-all text-left ${
                isActive
                  ? "bg-neutral-900 text-white font-semibold shadow-xs"
                  : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon
                  className={`w-4 h-4 ${
                    isActive ? "text-[#ff462d]" : "text-neutral-400 group-hover:text-neutral-700"
                  }`}
                />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span
                  className={`px-1.5 py-0.5 rounded-full font-mono text-[10px] font-bold ${
                    isActive ? "bg-[#ff462d] text-white" : item.badgeColor
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Dispatch Engine Status Widget */}
      <div className="mt-auto p-3.5 bg-neutral-50 rounded-xl border border-neutral-200">
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-[10px] text-neutral-500 uppercase font-semibold flex items-center gap-1">
            <Activity className="w-3 h-3 text-emerald-600" />
            Dispatch Engine
          </span>
          <span className="font-mono text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
            v4.8 • Online
          </span>
        </div>
        <div className="w-full bg-neutral-200 h-1.5 rounded-full overflow-hidden mb-2">
          <div className="bg-emerald-500 h-full rounded-full w-4/5 transition-all"></div>
        </div>
        <div className="flex justify-between items-center font-mono text-[11px] text-neutral-600">
          <span>Throughput</span>
          <span className="font-bold text-neutral-900">148 MT / hr</span>
        </div>
      </div>
    </aside>
  );
};
