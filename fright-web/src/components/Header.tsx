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
          <a aria-label="HappyFreight" className="block" href="/">
            <HappyRobotLogo className="h-7 w-auto md:h-8" />
          </a>

          {/* Desktop Navigation Links & CTA */}
          <DesktopNav />

          {/* Mobile & Tablet Navigation Controls */}
          <div className="flex items-center lg:hidden">
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
