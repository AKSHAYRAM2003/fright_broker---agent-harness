"use client";

import React, { useState } from "react";
import { CountUp } from "@/components/CountUp";

interface DeepDiveTab {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  codeSnippet: string;
  metrics: { label: string; value: string }[];
}

const DEEP_DIVE_TABS: DeepDiveTab[] = [
  {
    id: "intake",
    badge: "Stage 01: Multilingual Intake",
    title: "Street Logistics Vernacular Extraction",
    subtitle: "Kannada, Kanglish, Hindi & Hinglish WhatsApp Audio Parsing",
    description: "Indian drivers and transport coordinators do not use form-based TMS portals. They send 15-second WhatsApp voice notes with highway ambient noise. VahanaAI normalizes logistics slang (chakka, tauras, mamool, bilty) and constructs validated Pydantic models with 94.7% extraction accuracy.",
    codeSnippet: `// Intake Ingestion Agent (harness/agents/intake_agent.py)
const voiceNote = "Peenya inda Bhiwandi ge 32ft MXL container beku, 22 tons auto parts, loading tomorrow 4 PM";

const parsedRFQ = await intakeAgent.extract({
  input: voiceNote,
  language: "Kannada / Kanglish",
  lexiconMap: INDIAN_LOGISTICS_LEXICON
});

/* Result:
{
  origin: "Peenya Industrial Area, Bengaluru, KA",
  destination: "Bhiwandi Logistics Hub, Thane, MH",
  truck_type: "32ft MXL Container (Multi-Axle)",
  payload_weight_mt: 22.0,
  pickup_datetime: "2026-10-23T16:00:00+05:30",
  confidence_score: 0.947
}
*/`,
    metrics: [
      { label: "Extraction Accuracy", value: "94.7%" },
      { label: "Supported Dialects", value: "5 Languages" },
      { label: "Intake Time", value: "< 1.2s" },
    ],
  },
  {
    id: "guardrails",
    badge: "Stage 02: Deterministic Safety",
    title: "Type-Safe Financial & Compliance Guardrails",
    subtitle: "Zero Hallucination Profit Protection & VAHAN Verification",
    description: "AI agents cannot be trusted to quote freely without guardrails. Our harness interlocks every rate with hardcoded math: ₹2,500 absolute profit floor, 5% minimum margin, 70% advance loading cap, and mandatory blacklisted carrier checks before any commitment.",
    codeSnippet: `// Financial Guardrail (harness/guardrails/financial.py)
function validateQuote({ shipperBudget, carrierCost, distanceKm }) {
  const grossProfit = shipperBudget - carrierCost;
  const marginPct = (grossProfit / shipperBudget) * 100;
  
  // Rule 1: Strict floor
  if (grossProfit < 2500 || marginPct < 5.0) {
    return {
      status: "REJECTED_OR_FLAGGED",
      action: "HITL_ESCALATION",
      counterOfferRecommendation: carrierCost + 2500,
      reason: \`Profit ₹\${grossProfit} violates ₹2,500 floor policy\`
    };
  }
  return { status: "APPROVED", marginPct };
}`,
    metrics: [
      { label: "Margin Leakage", value: "₹0 / Zero" },
      { label: "Rule Evaluation", value: "100% Deterministic" },
      { label: "Audit Log Trail", value: "Tamper-Proof" },
    ],
  },
  {
    id: "hitl",
    badge: "Stage 03: Human-in-the-Loop",
    title: "Broker Priority Action Queue",
    subtitle: "Supervised High-Impact Decisions & 1-Click Approvals",
    description: "The AI harness does not replace the broker—it empowers them. When exceptions occur (margin below floor, missing E-Way bill, non-standard payment terms), it packages the exact trade-off into an interactive card for 1-click broker resolution.",
    codeSnippet: `// Broker Action Queue (harness/hitl/queue.py)
export interface QueuedAction {
  actionId: "ACT-2026-8812";
  urgency: "HIGH";
  lane: "Bengaluru ➔ Bhiwandi (NH-48)";
  shipperBudget: 48000;
  lowestCarrierQuote: 46500;
  currentMargin: 1500; // ₹1,000 below floor
  recommendedCounter: 49000;
  quickActions: [
    "COUNTER_SHIPPER_AT_49000",
    "NEGOTIATE_CARRIER_DOWN_TO_45500",
    "OVERRIDE_AND_PROCEED"
  ]
}`,
    metrics: [
      { label: "Decision Velocity", value: "1-Click" },
      { label: "Exceptions Handled", value: "100%" },
      { label: "Dispatcher Productivity", value: "4.5x" },
    ],
  },
  {
    id: "vision",
    badge: "Stage 04: Trip Lifecycle",
    title: "Vision POD OCR & Settlement Clearance",
    subtitle: "Automated Bilty Inspection, FASTag Milestones & 30% Balance Release",
    description: "Road freight doesn't finish until the physical Proof of Delivery (POD / Bilty) is signed, stamped, and verified. VahanaAI's multi-modal vision agent extracts receiving signatures, flags water damage or missing stamps, and triggers the final 30% carrier balance transfer.",
    codeSnippet: `// Multi-Modal Vision POD (harness/agents/vision_pod.py)
const podInspection = await visionAgent.inspectBilty({
  imageUri: "s3://vahanai-bilty/trip-9921-pod.jpg",
  expectedConsignee: "Mahindra Logistics Peenya",
  expectedCases: 450
});

/* OCR Output:
{
  consigneeStampDetected: true,
  receiverSignatureVerified: true,
  shortageReported: 0,
  damageReported: false,
  confidenceScore: 0.982,
  triggerAction: "RELEASE_BALANCE_PAYMENT_INR_18000"
}
*/`,
    metrics: [
      { label: "POD Verification", value: "< 15s" },
      { label: "Invoice Clearance", value: "Same-Day" },
      { label: "Dispute Reduction", value: "92%" },
    ],
  },
];

export const PlatformDeepDive: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>("intake");
  const activeTab = DEEP_DIVE_TABS.find((t) => t.id === activeTabId) || DEEP_DIVE_TABS[0];

  return (
    <div data-mode="light" className="hr-landing font-body text-hr-ink-strong">
      <section id="deep-dive" className="scroll-mt-24 border-t border-hr-line bg-hr-surface-2">
        <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-12 md:py-[120px]">
          {/* Section Headline */}
          <div className="mb-12 md:mb-16">
            <div className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.08em] text-emerald-700">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-600"></span>
              Engineering Architecture
            </div>
            <h2 className="max-w-[28ch] font-body text-[30px] leading-[1.08] tracking-[-0.02em] text-hr-ink-strong md:text-[44px]">
              How the VahanaAI <span className="text-emerald-700">Type-Safe Harness</span> works under the hood.
            </h2>
            <p className="mt-4 max-w-[650px] text-[15.5px] leading-[1.65] text-hr-ink-3">
              Built in Python and TypeScript with zero reliance on unstructured LLM chat prompts. Deterministic state machines and strict financial constraints ensure safe execution at scale.
            </p>
          </div>

          {/* Interactive Navigation Pills */}
          <div className="flex flex-wrap gap-2 border-b border-hr-line pb-4">
            {DEEP_DIVE_TABS.map((tab) => {
              const isActive = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`rounded-lg px-4 py-2 font-mono text-[12px] font-medium transition-all ${
                    isActive
                      ? "bg-emerald-700 text-white shadow-sm"
                      : "bg-white text-hr-ink-strong hover:bg-hr-cell border border-hr-line"
                  }`}
                >
                  {tab.badge.split(":")[0]} : {tab.title.split(" ")[0]}
                </button>
              );
            })}
          </div>

          {/* Tab Content Display */}
          <div className="mt-8 grid grid-cols-1 gap-8 rounded-2xl border border-hr-line bg-white p-6 shadow-sm md:grid-cols-12 md:p-10">
            {/* Left Column: Description & Metrics */}
            <div className="md:col-span-6 flex flex-col justify-between">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-wider text-emerald-700 font-semibold">
                  {activeTab.badge}
                </div>
                <h3 className="mt-2 text-[24px] md:text-[28px] font-bold text-hr-ink-strong leading-tight">
                  {activeTab.title}
                </h3>
                <div className="mt-1 font-mono text-[12px] text-hr-ink-4">
                  {activeTab.subtitle}
                </div>
                <p className="mt-5 text-[14.5px] leading-relaxed text-hr-ink-3">
                  {activeTab.description}
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="mt-8 grid grid-cols-3 gap-3 border-t border-hr-line/70 pt-6">
                {activeTab.metrics.map((m, idx) => (
                  <div key={idx} className="rounded-lg bg-hr-surface p-3">
                    <div className="font-mono text-[18px] font-bold text-emerald-800">
                      {m.value}
                    </div>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-tight text-hr-ink-4">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Code & System Representation */}
            <div className="md:col-span-6">
              <div className="h-full rounded-xl border border-hr-line bg-slate-950 p-5 font-mono text-[12px] text-slate-200 shadow-inner flex flex-col justify-between overflow-x-auto">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/80 inline-block"></span>
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500/80 inline-block"></span>
                    <span className="ml-2">production-agent.ts</span>
                  </div>
                  <span className="text-[10px] text-emerald-400">Validated Schema</span>
                </div>
                <pre className="mt-4 overflow-x-auto text-[11px] leading-relaxed font-mono text-emerald-300">
                  <code>{activeTab.codeSnippet}</code>
                </pre>
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Type-Safe FSM Status</span>
                  <span className="text-emerald-400 font-bold">READY_TO_DISPATCH</span>
                </div>
              </div>
            </div>
          </div>

          {/* High Impact Performance Banner */}
          <div className="mt-12 grid grid-cols-2 gap-px border border-hr-line bg-hr-line md:grid-cols-4 rounded-xl overflow-hidden shadow-sm">
            <div className="bg-white p-6 md:p-8">
              <div className="font-body text-[32px] md:text-[38px] font-bold text-hr-ink-strong">
                <CountUp value={140} suffix="K+" />
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.1em] text-hr-ink-4">
                Monthly WhatsApp Audio Notes
              </div>
            </div>
            <div className="bg-white p-6 md:p-8">
              <div className="font-body text-[32px] md:text-[38px] font-bold text-emerald-700">
                <CountUp value={82} suffix="%" />
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.1em] text-hr-ink-4">
                Zero-Touch Autonomous Bookings
              </div>
            </div>
            <div className="bg-white p-6 md:p-8">
              <div className="font-body text-[32px] md:text-[38px] font-bold text-hr-ink-strong">
                <CountUp value={2500} prefix="₹" />
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.1em] text-hr-ink-4">
                Guaranteed Margin Floor
              </div>
            </div>
            <div className="bg-white p-6 md:p-8">
              <div className="font-body text-[32px] md:text-[38px] font-bold text-emerald-700">
                <CountUp value={9} suffix=" Mins" />
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.1em] text-hr-ink-4">
                Average Sourcing-to-Lock Speed
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
