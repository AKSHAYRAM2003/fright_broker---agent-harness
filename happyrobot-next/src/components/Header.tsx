"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Menu, X, ChevronDown, Truck } from "lucide-react";
import { NAV_ITEMS } from "@/data/site-data";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <div className="fixed inset-x-0 top-0 z-[60]">
      {/* Top Announcement Bar */}
      <div className="border-b border-hr-line-soft bg-zinc-950 text-white">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between sm:justify-center gap-3.5 px-5 py-[8px] font-mono text-[11px] uppercase tracking-[0.04em]">
          <div className="flex items-center gap-2 truncate">
            <span className="inline-flex shrink-0 items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-600/30 text-emerald-400 border border-emerald-500/30">
              <Sparkles className="w-2.5 h-2.5" /> Breakthrough
            </span>
            <span className="text-zinc-300 font-normal truncate">
              VahanaAI 2.0: Multilingual Freight Operations Harness for Indian Road Transport
            </span>
          </div>
          <a
            href="#platform-diagram"
            className="hidden sm:inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors font-medium shrink-0"
          >
            <span>See How it Works</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="relative border-b border-[rgba(184,174,164,0.5)] bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-3.5 md:px-12">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-zinc-950 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
              <Truck className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-[19px] tracking-tight text-hr-ink-strong leading-none">
                Vahana<span className="text-emerald-600">AI</span>
              </span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-hr-ink-4">
                Operations Harness
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-6 font-body text-[12px] uppercase tracking-[0.1em] text-hr-ink-1 lg:flex">
            <div className="flex items-center gap-5">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-1 py-2 text-hr-ink-strong hover:text-emerald-600 transition-colors cursor-pointer"
                  >
                    <span>{item.label}</span>
                    {item.children && <ChevronDown className="w-3 h-3 text-hr-ink-4" />}
                    {item.badge && (
                      <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-amber-100 text-amber-800">
                        {item.badge}
                      </span>
                    )}
                  </a>

                  {/* Dropdown Menu */}
                  {item.children && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 w-72 rounded-xl bg-white border border-hr-line shadow-xl p-3 grid gap-2 z-50">
                      {item.children.map((sub) => (
                        <a
                          key={sub.title}
                          href={sub.href}
                          className="p-2.5 rounded-lg hover:bg-hr-surface-2 transition-colors block text-left"
                        >
                          <div className="font-semibold text-[13px] text-hr-ink-strong">{sub.title}</div>
                          <div className="text-[11px] normal-case text-hr-ink-3 mt-0.5 leading-snug">{sub.description}</div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Launch Console CTA */}
            <a
              href="#hero-agent"
              className="inline-flex items-center justify-center font-body text-[12px] uppercase tracking-[0.1em] font-semibold bg-hr-cta-solid-bg text-hr-cta-solid-fg px-5 py-2.5 rounded-lg hover:bg-neutral-800 transition-colors shadow-xs"
            >
              Book Pilot
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="#hero-agent"
              className="bg-hr-cta-solid-bg text-white px-3.5 py-1.5 rounded text-[11px] font-semibold uppercase tracking-wider"
            >
              Pilot
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-hr-ink-strong"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-hr-line bg-white px-5 py-4 space-y-3 shadow-lg">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="border-b border-hr-line/60 pb-2">
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block font-semibold text-[14px] text-hr-ink-strong uppercase tracking-wider py-1"
                >
                  {item.label}
                </a>
              </div>
            ))}
            <div className="pt-2">
              <a
                href="#hero-agent"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center w-full bg-hr-cta-solid-bg text-white py-3 rounded-lg text-[13px] font-semibold uppercase tracking-wider"
              >
                Book Live Pilot
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};
