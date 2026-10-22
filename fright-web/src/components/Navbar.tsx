"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, ArrowRight, Sparkles, ExternalLink } from "lucide-react";
import { NAV_ITEMS } from "@/data/site-data";

interface NavbarProps {
  onOpenDemo: () => void;
  onOpenNewsroom: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo, onOpenNewsroom }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({});
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileSubmenu = (label: string) => {
    setMobileExpanded((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-zinc-950 text-white text-xs sm:text-sm py-2 px-4 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between sm:justify-center gap-3">
          <div className="flex items-center gap-2 truncate">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-orange-600/30 text-orange-400 border border-orange-500/30 uppercase tracking-wider">
              <Sparkles className="w-2.5 h-2.5" /> News
            </span>
            <span className="text-zinc-300 font-normal truncate">
              HappyRobot Raises $45M Series C led by Andreessen Horowitz
            </span>
          </div>
          <button
            onClick={onOpenNewsroom}
            className="flex items-center gap-1 font-medium text-orange-400 hover:text-orange-300 transition-colors shrink-0 cursor-pointer"
          >
            <span>Read Release</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-200 border-b ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-zinc-200 shadow-sm"
            : "bg-white/80 backdrop-blur-sm border-zinc-200/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-zinc-950 flex items-center justify-center text-white font-bold transition-transform group-hover:scale-105 shadow-sm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="10" rx="2" />
                <circle cx="12" cy="5" r="2" />
                <path d="M12 7v4" />
                <line x1="8" y1="16" x2="8" y2="16.01" />
                <line x1="16" y1="16" x2="16" y2="16.01" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-zinc-950">
                HappyRobot
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const hasChildren = item.children && item.children.length > 0;

              if (item.label === "Newsroom") {
                return (
                  <button
                    key={item.label}
                    onClick={onOpenNewsroom}
                    className="px-3.5 py-2 text-sm font-medium text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 rounded-lg transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                );
              }

              if (!hasChildren) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="relative px-3.5 py-2 text-sm font-medium text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-emerald-100 text-emerald-800 rounded-full border border-emerald-300">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              }

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1 cursor-pointer ${
                      activeDropdown === item.label
                        ? "text-zinc-950 bg-zinc-100"
                        : "text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100"
                    }`}
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === item.label ? null : item.label
                      )
                    }
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.label ? "rotate-180 text-zinc-950" : "text-zinc-500"
                      }`}
                    />
                  </button>

                  {/* Mega Menu Dropdown */}
                  {activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1 w-[460px] p-3 bg-white rounded-xl shadow-xl border border-zinc-200 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                      <div className="grid grid-cols-1 gap-1">
                        {item.children?.map((sub) => (
                          <Link
                            key={sub.title}
                            href={sub.href}
                            onClick={() => setActiveDropdown(null)}
                            className="group/item flex flex-col p-3 rounded-lg hover:bg-zinc-50 transition-colors"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-semibold text-zinc-900 group-hover/item:text-orange-600 transition-colors">
                                {sub.title}
                              </span>
                              <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover/item:translate-x-1 group-hover/item:text-orange-600 transition-all opacity-0 group-hover/item:opacity-100" />
                            </div>
                            <span className="text-xs text-zinc-500 mt-1 line-clamp-2">
                              {sub.description}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenDemo}
              className="text-sm font-medium text-zinc-700 hover:text-zinc-950 px-3 py-2 rounded-lg hover:bg-zinc-100 transition-colors cursor-pointer"
            >
              Sign In
            </button>
            <button
              onClick={onOpenDemo}
              className="px-4 py-2.5 rounded-lg bg-zinc-950 text-white text-sm font-medium hover:bg-zinc-800 transition-all shadow-sm hover:shadow active:scale-[0.98] cursor-pointer flex items-center gap-1.5"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4 text-orange-400" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenDemo}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-zinc-950 text-white"
            >
              Book Demo
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-28 bg-zinc-950/40 backdrop-blur-sm z-50">
          <div className="h-full max-h-[85vh] bg-white border-b border-zinc-200 overflow-y-auto px-5 py-6 space-y-4 shadow-2xl">
            <div className="space-y-1">
              {NAV_ITEMS.map((item) => {
                const hasChildren = item.children && item.children.length > 0;
                const isExpanded = mobileExpanded[item.label];

                if (item.label === "Newsroom") {
                  return (
                    <button
                      key={item.label}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        onOpenNewsroom();
                      }}
                      className="w-full text-left py-3 px-3 rounded-lg text-base font-semibold text-zinc-800 hover:bg-zinc-100 flex items-center justify-between cursor-pointer"
                    >
                      <span>{item.label}</span>
                      <ExternalLink className="w-4 h-4 text-zinc-400" />
                    </button>
                  );
                }

                if (!hasChildren) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-3 px-3 rounded-lg text-base font-semibold text-zinc-800 hover:bg-zinc-100 flex items-center justify-between"
                    >
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className="px-2 py-0.5 text-xs font-semibold bg-emerald-100 text-emerald-800 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  );
                }

                return (
                  <div key={item.label} className="border-b border-zinc-100 pb-1">
                    <button
                      onClick={() => toggleMobileSubmenu(item.label)}
                      className="w-full py-3 px-3 rounded-lg text-base font-semibold text-zinc-800 hover:bg-zinc-100 flex items-center justify-between cursor-pointer"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-zinc-500 transition-transform ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isExpanded && (
                      <div className="pl-4 pr-2 py-2 space-y-2 bg-zinc-50 rounded-lg my-1">
                        {item.children?.map((sub) => (
                          <Link
                            key={sub.title}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-2 text-sm text-zinc-700 hover:text-zinc-950 font-medium"
                          >
                            <div className="font-semibold text-zinc-900">{sub.title}</div>
                            <div className="text-xs text-zinc-500">{sub.description}</div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="pt-4 border-t border-zinc-200 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemo();
                }}
                className="w-full py-3 rounded-lg bg-zinc-950 text-white text-center font-medium shadow-sm hover:bg-zinc-800 transition-colors"
              >
                Book a Demo
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemo();
                }}
                className="w-full py-3 rounded-lg border border-zinc-300 text-zinc-800 text-center font-medium hover:bg-zinc-50 transition-colors"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
