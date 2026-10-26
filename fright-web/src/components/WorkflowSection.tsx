"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Bot,
  CheckCircle,
  Clock,
  FileText,
  PhoneCall,
  RefreshCw,
  Server,
} from "lucide-react";

const STEPS = [
  {
    step: "01",
    title: "Multi-Modal Intake",
    icon: PhoneCall,
    description:
      "Inbound phone call from freight driver or email invoice inquiry received in real time.",
    output:
      "Audio digitized at 16kHz, transcribed with domain vocabulary, parsed into structured intent payload.",
  },
  {
    step: "02",
    title: "Context Graph Synthesis",
    icon: Server,
    description:
      "Agent queries TMS (McLeod) and SAP ERP for load state, rate sheets, and carrier scorecards.",
    output:
      "Synthesized snapshot: Load #88412 delayed by 3 hrs at Chicago terminal; driver requesting detention auth.",
  },
  {
    step: "03",
    title: "Deterministic Execution",
    icon: Bot,
    description:
      "Agent evaluates contract clause for allowable detention time and customer rate schedules.",
    output:
      "Detention fee of $150 approved per SLA section 4.2; updated in billing queue; confirmation SMS sent to driver.",
  },
  {
    step: "04",
    title: "Continuous Learning",
    icon: RefreshCw,
    description:
      "Entire transaction session logged with cryptographic audit trail and token telemetry.",
    output:
      "Feedback incorporated into operational graph for automated billing reconciliation during month-end close.",
  },
];

export const WorkflowSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="w-full py-24 sm:py-32 bg-white text-zinc-950 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-100/80 px-3 py-1 rounded-full">
            Autonomous Lifecycle
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950 mt-4 leading-tight">
            Complex workflows, <br />
            executed end-to-end.
          </h2>
          <p className="text-lg text-zinc-600 mt-4 leading-relaxed">
            See how a single real-world operational event moves through
            perception, institutional reasoning, system mutation, and verifiable
            audit.
          </p>
        </div>

        {/* Step Progression Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {STEPS.map((s, idx) => {
            const Icon = s.icon;
            const isCurrent = activeStep === idx;

            return (
              <div
                key={s.step}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isCurrent
                    ? "bg-zinc-950 text-white border-zinc-950 shadow-xl"
                    : "bg-zinc-50 text-zinc-800 border-zinc-200 hover:bg-zinc-100"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                        isCurrent
                          ? "bg-orange-600 text-white"
                          : "bg-zinc-200 text-zinc-700"
                      }`}
                    >
                      STEP {s.step}
                    </span>
                    <Icon
                      className={`w-5 h-5 ${isCurrent ? "text-orange-400" : "text-zinc-500"}`}
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${isCurrent ? "text-zinc-300" : "text-zinc-600"}`}
                  >
                    {s.description}
                  </p>
                </div>

                <div
                  className={`mt-6 pt-4 border-t text-xs font-mono ${isCurrent ? "border-zinc-800 text-orange-300" : "border-zinc-200 text-zinc-500"}`}
                >
                  Click to inspect live event trace
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Simulation Console */}
        <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950 text-zinc-100 border border-zinc-800 font-mono shadow-2xl">
          <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-4 text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-zinc-200 font-semibold">
                Live Trace Inspector
              </span>
            </div>
            <span>Trace ID: trc_88412_prod_iad1</span>
          </div>

          <div className="space-y-3 text-xs sm:text-sm">
            <div className="text-zinc-500">
              # Current Step:{" "}
              <span className="text-white font-bold">
                {STEPS[activeStep].title}
              </span>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-emerald-400">
              <span className="text-zinc-400 block mb-1">Payload Output:</span>
              &gt; {STEPS[activeStep].output}
            </div>
            <div className="flex items-center justify-between text-xs text-zinc-500 pt-2">
              <span>Latency: 48ms</span>
              <span>
                Guardrail Status:{" "}
                <strong className="text-emerald-400">
                  PASSED (Confidence 0.992)
                </strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
