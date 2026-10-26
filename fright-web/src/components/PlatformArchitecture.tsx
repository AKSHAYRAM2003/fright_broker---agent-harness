"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Cpu,
  Database,
  Network,
  ShieldCheck,
  Check,
  ArrowRight,
} from "lucide-react";

const PLATFORM_PILLARS = [
  {
    id: "engine",
    title: "Autonomous Execution Engine",
    icon: Cpu,
    tag: "Core Runtime",
    summary:
      "Replaces brittle RPA scripts with adaptive, goal-seeking reasoning loops capable of navigating edge cases.",
    features: [
      "Dynamic tool-calling across internal microservices and third-party partner portals",
      "Sub-second voice agents with native interruption handling and dialect adaptability",
      "Automatic recovery from transient system errors and timeout retries",
    ],
  },
  {
    id: "context",
    title: "Live Enterprise Graph",
    icon: Database,
    tag: "Memory & State",
    summary:
      "Consolidates siloed ERP, TMS, CRM, and email threads into an active knowledge layer.",
    features: [
      "Vectorized institutional guidelines and historical dispute resolution outcomes",
      "Real-time state synchronization with sub-second latency",
      "Deterministic policy enforcement preventing hallucinated outputs",
    ],
  },
  {
    id: "integrations",
    title: "Universal Systems Adapter",
    icon: Network,
    tag: "Connectors",
    summary:
      "Integrates with modern REST/GraphQL APIs and 30-year-old AS400 terminal emulators alike.",
    features: [
      "Pre-built integrations for SAP, Oracle, Salesforce, McLeod, TMW, and ServiceNow",
      "Autonomous browser agents for partner web portals lacking public APIs",
      "Certified webhook triggers and bidirectional queue listeners",
    ],
  },
  {
    id: "security",
    title: "Defense-in-Depth Guardrails",
    icon: ShieldCheck,
    tag: "Governance",
    summary:
      "Enterprise-grade controls giving compliance teams complete visibility and override authority.",
    features: [
      "Granular role-based access control (RBAC) and data redaction before model inference",
      "Human-in-the-loop escalation thresholds for high-dollar financial transactions",
      "Immutable cryptographic audit trails for every autonomous action taken",
    ],
  },
];

export const PlatformArchitecture: React.FC = () => {
  const [activeTab, setActiveTab] = useState(PLATFORM_PILLARS[0].id);

  const currentPillar =
    PLATFORM_PILLARS.find((p) => p.id === activeTab) || PLATFORM_PILLARS[0];

  return (
    <section
      id="platform"
      className="w-full py-24 sm:py-32 bg-white text-zinc-950 border-b border-zinc-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
            Platform Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 mt-4 leading-tight">
            Engineered for enterprise scale. <br />
            Governed by deterministic logic.
          </h2>
          <p className="text-lg text-zinc-600 mt-4 leading-relaxed">
            HappyRobot sits between your high-level business goals and your
            underlying software systems, translating human intent into verified
            actions without altering your legacy infrastructure.
          </p>
        </div>

        {/* Diagram Showcase */}
        <div className="mb-16 p-4 sm:p-8 bg-zinc-950 rounded-2xl shadow-xl overflow-hidden border border-zinc-800 text-white">
          <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs text-zinc-400 font-mono ml-2">
                happyrobot-orchestrator-topology.svg
              </span>
            </div>
            <div className="text-xs text-orange-400 font-medium">
              Real-Time Event Stream Active
            </div>
          </div>
          <div className="w-full flex items-center justify-center p-2 sm:p-6 bg-zinc-900/50 rounded-xl">
            <img
              src="/images/cdn/landing-platform-diagram.svg"
              alt="HappyRobot Platform Architecture Diagram"
              className="w-full max-w-4xl h-auto object-contain filter invert opacity-95"
            />
          </div>
        </div>

        {/* Interactive Feature Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Navigation Pillar Buttons */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {PLATFORM_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              const isSelected = pillar.id === activeTab;

              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveTab(pillar.id)}
                  className={`text-left p-5 rounded-xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-zinc-900 text-white border-zinc-900 shadow-lg"
                      : "bg-zinc-50 text-zinc-700 border-zinc-200 hover:bg-zinc-100 hover:text-zinc-950"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-lg ${
                          isSelected
                            ? "bg-orange-600 text-white"
                            : "bg-white text-zinc-800 border border-zinc-200"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-base">
                        {pillar.title}
                      </span>
                    </div>
                    <span
                      className={`text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        isSelected
                          ? "bg-white/10 text-orange-300"
                          : "bg-zinc-200 text-zinc-600"
                      }`}
                    >
                      {pillar.tag}
                    </span>
                  </div>
                  <p
                    className={`text-xs sm:text-sm line-clamp-2 ${isSelected ? "text-zinc-300" : "text-zinc-500"}`}
                  >
                    {pillar.summary}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Details Card */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-zinc-50 border border-zinc-200">
            <div className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-orange-100 text-orange-800 mb-4">
              {currentPillar.tag}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950 mb-4">
              {currentPillar.title}
            </h3>
            <p className="text-zinc-700 text-base sm:text-lg mb-8 leading-relaxed">
              {currentPillar.summary}
            </p>

            <div className="space-y-4 mb-8">
              {currentPillar.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm sm:text-base text-zinc-800 font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-zinc-200 flex items-center justify-between">
              <span className="text-xs text-zinc-500 font-mono">
                API Endpoint: /v1/orchestrator/{currentPillar.id}
              </span>
              <a
                href="#case-studies"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors"
              >
                <span>View real-world results</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
