"use client";

import React from "react";
import Link from "next/link";
import { HappyRobotLogo } from "../HappyRobotLogo";
import { ShieldCheck, Truck, Radio, CheckCircle2 } from "lucide-react";

interface AuthShowcaseProps {
  mode: "login" | "signup";
}

export const AuthShowcase: React.FC<AuthShowcaseProps> = ({ mode }) => {
  return (
    <div className="relative hidden flex-col justify-between overflow-hidden bg-[#070707] p-8 text-white lg:flex lg:col-span-5 xl:p-12 border-r border-[#222]">
      {/* Background Grid Pattern & Ambient Gradients */}
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full bg-[#ff462d]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />

      {/* Top Header / Brand Logo */}
      <div className="relative z-10 flex items-center justify-between">
        <Link href="/" className="inline-block transition-opacity hover:opacity-80">
          {/* Logo with inverted white text for dark container */}
          <div className="flex items-center gap-2.5">
            <svg
              data-logo="logo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 41 41.4"
              className="h-7 w-auto"
            >
              <g id="logogram" transform="translate(0, 0.7)">
                <path
                  d="M24 0H16V12.0632C15.9663 14.2434 14.1885 16 12.0005 16H0V24H8.68629C10.808 24 12.8429 23.1571 14.3431 21.6569L21.6569 14.3431C23.1571 12.8429 24 10.808 24 8.68629V0Z"
                  fill="#ffffff"
                />
                <path
                  d="M16 40H24V27.9368C24.0337 25.7566 25.8115 24 27.9995 24H40V16H31.3137C29.192 16 27.1571 16.8429 25.6569 18.3431L18.3431 25.6569C16.8429 27.1571 16 29.192 16 31.3137V40Z"
                  fill="#ff462d"
                />
              </g>
            </svg>
            <span className="font-headline text-[19px] font-bold tracking-[-0.035em] text-white">
              Happy<span className="text-[#ff462d]">Freight</span>
            </span>
          </div>
        </Link>

        {/* Live Corridor Status Indicator */}
        <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.1em] text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Harness Online
        </div>
      </div>

      {/* Center Showcase Content */}
      <div className="relative z-10 my-auto py-10">
        <div className="mb-4 inline-flex items-center gap-2 rounded border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.16em] text-stone-300">
          <Radio className="h-3 w-3 text-[#ff462d]" />
          Autonomous Dispatch Core v2.4
        </div>

        <h2 className="font-headline text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl leading-[1.15]">
          {mode === "login" ? (
            <>
              Operating India&apos;s freight corridors with{" "}
              <span className="text-[#dfdbd5]">deterministic AI precision.</span>
            </>
          ) : (
            <>
              Put autonomous agents to work across{" "}
              <span className="text-[#dfdbd5]">every mandi &amp; highway.</span>
            </>
          )}
        </h2>

        <p className="mt-4 max-w-[42ch] font-body text-[14.5px] leading-relaxed text-stone-400">
          Ingesting chaotic WhatsApp voice messages, running real-time VAHAN &amp; FASTag checks, and executing verified loads with strict ₹2,500 margin floors.
        </p>

        {/* Telemetry Cards Grid */}
        <div className="mt-8 space-y-3">
          {/* Card 1: Live Voice Parsing */}
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3.5 backdrop-blur-sm transition-colors hover:border-white/20">
            <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.1em] text-stone-400">
              <span className="flex items-center gap-1.5 text-white">
                <Truck className="h-3.5 w-3.5 text-[#ff462d]" />
                NH-48 Corridor • JNPT to Gurgaon
              </span>
              <span className="text-emerald-400 font-semibold">₹2,850 Margin</span>
            </div>
            <div className="mt-2 text-[12.5px] text-stone-300 font-body">
              &quot;Bhai, 32ft MXL available from Bhiwandi, rate 68k cash on delivery.&quot;
            </div>
            <div className="mt-2 flex items-center gap-3 text-[11px] font-mono text-stone-400">
              <span className="flex items-center gap-1 text-emerald-400">
                <CheckCircle2 className="h-3 w-3" /> Voice parsed (0.8s)
              </span>
              <span>•</span>
              <span>VAHAN RC: Valid</span>
              <span>•</span>
              <span>Fastag: Toll Active</span>
            </div>
          </div>

          {/* Card 2: Enforced Rules */}
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3.5 backdrop-blur-sm">
            <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.1em] text-stone-400">
              <span>Deterministic Rulebook</span>
              <span className="text-white">Active</span>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-2 text-[11.5px] font-mono text-stone-300">
              <div className="flex items-center gap-1.5 bg-black/40 px-2 py-1.5 rounded border border-white/5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Floor: ₹2,500 Min
              </div>
              <div className="flex items-center gap-1.5 bg-black/40 px-2 py-1.5 rounded border border-white/5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Trip FSM: Enforced
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Quote */}
        <div className="mt-8 border-l-2 border-[#ff462d] pl-4">
          <p className="text-[13.5px] italic leading-relaxed text-stone-300">
            &quot;HappyFreight turned 4 hours of morning WhatsApp fire-fighting into a single review queue. Our team booked 28% more loads in month one.&quot;
          </p>
          <div className="mt-2 text-[12px] font-medium text-stone-400">
            — Dispatch Director, Western India Logistics Alliance
          </div>
        </div>
      </div>

      {/* Bottom Compliance & Security Badges */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-[11px] font-mono uppercase tracking-[0.12em] text-stone-400">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-emerald-400" />
          <span>SOC 2 Type II Certified</span>
        </div>
        <div className="flex items-center gap-3">
          <span>256-Bit SSL</span>
          <span>•</span>
          <span>ISO 27001</span>
        </div>
      </div>
    </div>
  );
};
