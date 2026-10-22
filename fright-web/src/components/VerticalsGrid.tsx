"use client";

import React, { useState } from "react";
import { VERTICALS } from "@/data/site-data";
import { Check, ArrowRight } from "lucide-react";

export const VerticalsGrid: React.FC = () => {
  const [selectedVertical, setSelectedVertical] = useState(VERTICALS[0].id);

  const activeSector = VERTICALS.find((v) => v.id === selectedVertical) || VERTICALS[0];

  return (
    <section id="solutions" className="w-full py-24 sm:py-32 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-100/80 px-3 py-1 rounded-full">
            Industry Solutions
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950 mt-4 leading-tight">
            Tailored agents for complex vertical domains.
          </h2>
          <p className="text-lg text-zinc-600 mt-4 leading-relaxed">
            Every industry has proprietary vernacular, compliance requirements, and ERP idiosyncrasies. HappyRobot comes pre-loaded with deep vertical domain models.
          </p>
        </div>

        {/* Sector Pills Navigation */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-12">
          {VERTICALS.map((vertical) => {
            const isSelected = vertical.id === selectedVertical;
            return (
              <button
                key={vertical.id}
                onClick={() => setSelectedVertical(vertical.id)}
                className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-zinc-950 text-white shadow-md"
                    : "bg-white text-zinc-700 border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-100"
                }`}
              >
                {vertical.name}
              </button>
            );
          })}
        </div>

        {/* Active Vertical Spotlight Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-10 border border-zinc-200 shadow-xl shadow-zinc-200/50">
          {/* Left Text & Workflows */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
                Autonomous Use Cases
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold text-zinc-950 mt-2">
                {activeSector.name}
              </h3>
              <p className="text-base sm:text-lg text-zinc-600 mt-2">
                {activeSector.tagline}
              </p>
            </div>

            <div className="space-y-3.5 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                Key Automated Workflows:
              </h4>
              {activeSector.workflows.map((wf, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-zinc-50 border border-zinc-100">
                  <div className="w-5 h-5 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <span className="text-sm font-medium text-zinc-800">
                    {wf}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="#demo"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-950 text-white text-sm font-semibold hover:bg-zinc-800 transition-colors shadow-sm"
              >
                <span>Request {activeSector.name} Architecture Brief</span>
                <ArrowRight className="w-4 h-4 text-orange-400" />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-6 relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-lg border border-zinc-200">
            <img
              src={activeSector.image}
              alt={activeSector.name}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-xs font-medium text-zinc-300">Enterprise Deployment View</p>
              <p className="text-sm font-bold truncate">{activeSector.tagline}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
