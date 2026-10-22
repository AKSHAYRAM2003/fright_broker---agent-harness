"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export const CareersCTA: React.FC = () => {
  return (
    <section id="careers" className="w-full py-24 sm:py-32 bg-white text-zinc-950 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-zinc-950 text-white p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-orange-400 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>We&apos;re Growing Rapidly</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Build the future of autonomous enterprise labor.
              </h2>
              <p className="text-base sm:text-lg text-zinc-300 max-w-xl leading-relaxed">
                We are a team of distributed systems engineers, AI researchers, and vertical domain specialists in San Francisco, New York, and remote worldwide.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#open-roles"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-orange-600 text-white font-semibold text-sm hover:bg-orange-500 transition-all shadow-lg shadow-orange-600/30 cursor-pointer"
                >
                  <span>Explore Open Positions</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#values"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-zinc-700 text-zinc-200 font-semibold text-sm hover:bg-zinc-900 transition-colors"
                >
                  <span>Our Culture &amp; Values</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm rounded-2xl overflow-hidden border border-zinc-800 shadow-xl bg-zinc-900">
                <img
                  src="/images/cdn/see_open_roles_.png"
                  alt="HappyRobot Team and Open Roles"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
