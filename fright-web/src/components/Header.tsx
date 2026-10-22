"use client";

import React from "react";
import { AnnouncementBar } from "./header/AnnouncementBar";
import { HappyRobotLogo } from "./HappyRobotLogo";
import { DesktopNav } from "./header/DesktopNav";
import { DesktopMegaMenu } from "./header/DesktopMegaMenu";
import { MobileDrawer } from "./header/MobileDrawer";

/**
 * Main Header Component
 *
 * Fully modular Next.js header combining:
 * 1. <AnnouncementBar />: Top banner with Series C announcement
 * 2. Main Navbar: Brand logo, desktop navigation, and mobile hamburger controls
 * 3. <DesktopMegaMenu />: Interactive multi-column mega panels (Platform & Solutions)
 * 4. <MobileDrawer />: Collapsible mobile drawer with accordions
 *
 * All DOM hooks (IDs, ARIA tags, and animations) are fully preserved for InteractiveScripts.
 */
export const Header: React.FC = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-[60]">
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <AnnouncementBar />

      {/* 2. MAIN NAVBAR */}
      <nav
        className="relative border-b border-[rgba(42,38,35,0.6)] [-webkit-backdrop-filter:blur(10px)] backdrop-blur-[10px] hrlight:border-[rgba(184,174,164,0.5)]"
        style={{ background: "var(--hr-surface)" } as React.CSSProperties}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 md:px-12">
          {/* Brand Logo */}
          <a aria-label="HappyRobot" className="block" href="/">
            <HappyRobotLogo />
          </a>

          {/* Desktop Navigation Links & CTA */}
          <DesktopNav />

          {/* Mobile Navigation Controls */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <a
              className="group inline-flex lg:min-w-max lg:whitespace-nowrap items-center justify-center font-body uppercase tracking-[0.1em] no-underline transition-[opacity,transform,background-color,border-color,color] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hr-rust gap-[9px] bg-hr-cta-solid-bg text-hr-cta-solid-fg relative isolate overflow-hidden duration-[350ms] ease-[cubic-bezier(0.33,0,0.15,1)] hover:text-hr-canvas hover:opacity-100 motion-reduce:transition-none px-3.5 py-2 text-[10px]"
              href="#hero-agent"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-[1] origin-bottom scale-y-0 bg-hr-stone transition-transform duration-[350ms] ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:scale-y-100 motion-reduce:transition-none"
              />
              <span>Login</span>
            </a>

            {/* Hamburger Toggle Button */}
            <button
              aria-expanded="false"
              aria-label="Open menu"
              className="flex flex-col gap-1 p-1.5 cursor-pointer"
              id="mobile-menu-btn"
              type="button"
            >
              <span className="block h-[1.5px] w-5 origin-center bg-hr-ink-strong transition-transform" />
              <span className="block h-[1.5px] w-5 origin-center bg-hr-ink-strong transition-transform" />
            </button>
          </div>
        </div>

        {/* 3. DESKTOP MEGA MENU DROPDOWNS (Platform & Solutions) */}
        <DesktopMegaMenu />

        {/* 4. MOBILE DRAWER WITH ACCORDIONS */}
        <MobileDrawer />
      </nav>
    </header>
  );
};
