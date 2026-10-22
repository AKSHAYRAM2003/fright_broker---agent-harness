"use client";

import React, { useState } from "react";
import { NAV_ITEMS } from "@/data/site-data";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="fixed inset-x-0 top-0 z-[60]">
      {/* 1. Operational Corridor Ticker Banner */}
      <div className="border-b border-hr-line-soft bg-emerald-950 text-white">
        <a
          href="#platform"
          className="mx-auto flex max-w-[1440px] items-center justify-center gap-3.5 px-5 py-[9px] font-mono text-[11px] uppercase tracking-[0.04em] text-emerald-300 md:px-12 no-underline hover:text-white transition-colors"
        >
          <span className="inline-flex shrink-0 items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            LIVE
          </span>
          <span className="hidden sm:inline">
            VahanaAI Freight Engine Active — Ingesting Multilingual Voice RFQs on NH-48 & NH-44 Corridors
          </span>
          <span className="sm:hidden">
            VahanaAI Active — NH-48 & NH-44 Freight Live
          </span>
          <span className="hidden shrink-0 items-center gap-1.5 md:inline-flex text-emerald-400 font-semibold">
            See Architecture →
          </span>
        </a>
      </div>

      {/* 2. Main Navigation Bar */}
      <nav className="relative border-b border-hr-line backdrop-blur-md bg-white/95">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 md:px-12">
          
          {/* Brand Logo & Name */}
          <a href="/" className="flex items-center gap-2.5 no-underline">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-700 font-mono text-[16px] font-bold text-white shadow-sm">
              V
            </div>
            <div className="font-body text-[20px] font-bold text-hr-ink-strong tracking-tight">
              Vahana<span className="text-emerald-700">AI</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-6 font-body text-[12px] uppercase tracking-[0.1em] text-hr-ink-strong lg:flex">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative py-2"
                onMouseEnter={() => item.children && setActiveMenu(item.label)}
                onMouseLeave={() => item.children && setActiveMenu(null)}
              >
                <a
                  href={item.href}
                  className="inline-flex items-center gap-1.5 no-underline text-hr-ink-strong hover:text-emerald-700 transition-colors"
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="rounded bg-emerald-100 px-1.5 py-0.5 font-mono text-[9px] font-bold text-emerald-800">
                      {item.badge}
                    </span>
                  )}
                  {item.children && (
                    <span className="text-[9px] text-hr-ink-4">▼</span>
                  )}
                </a>

                {/* Dropdown Menu */}
                {item.children && activeMenu === item.label && (
                  <div className="absolute left-0 top-full w-[320px] rounded-xl border border-hr-line bg-white p-4 shadow-xl">
                    <div className="space-y-3">
                      {item.children.map((child, idx) => (
                        <a
                          key={idx}
                          href={child.href}
                          className="block rounded-lg p-2.5 hover:bg-hr-surface transition-colors no-underline"
                        >
                          <div className="font-body text-[13px] font-bold text-hr-ink-strong">
                            {child.title}
                          </div>
                          <div className="mt-0.5 text-[11.5px] leading-snug text-hr-ink-3">
                            {child.description}
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Call to Action Button */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="#cta"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-700 px-5 py-2.5 font-mono text-[11px] font-bold uppercase tracking-wider text-white shadow-sm hover:bg-emerald-800 transition-colors"
            >
              <span>Request Pilot</span>
              <span>→</span>
            </a>
          </div>

          {/* Mobile Actions: Pilot Button + Hamburger */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-700 px-3.5 py-2 font-mono text-[10px] font-bold uppercase tracking-wider text-white"
            >
              Pilot
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex flex-col gap-1 p-2 text-hr-ink-strong"
              aria-label="Toggle menu"
            >
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </button>
          </div>

        </div>

        {/* 3. Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="border-b border-hr-line bg-white px-5 py-6 shadow-xl lg:hidden">
            <div className="flex flex-col space-y-4">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="border-b border-hr-line/60 pb-3">
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-body text-[14px] font-bold uppercase text-hr-ink-strong"
                  >
                    {item.label}
                  </a>
                  {item.children && (
                    <div className="mt-2 pl-3 space-y-2">
                      {item.children.map((child, i) => (
                        <a
                          key={i}
                          href={child.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-[12px] text-hr-ink-3"
                        >
                          • {child.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a
                href="#cta"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 block w-full rounded-lg bg-emerald-700 py-3 text-center font-mono text-[12px] font-bold uppercase text-white"
              >
                Request Corridor Pilot
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
