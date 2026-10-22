"use client";

import React from "react";
import { ShieldCheck, Lock, EyeOff, Server, FileCheck, CheckCircle2 } from "lucide-react";

export const SecurityCompliance: React.FC = () => {
  return (
    <section id="security" className="w-full py-24 sm:py-32 bg-zinc-900 text-white border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-3 py-1 rounded-full">
            Enterprise Trust & Security
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-4 leading-tight">
            Security built for regulated environments.
          </h2>
          <p className="text-lg text-zinc-400 mt-4 leading-relaxed">
            Your data never trains public models. Every interaction is isolated in customer-dedicated encrypted envelopes with complete auditability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-zinc-950/80 border border-zinc-800 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">SOC 2 Type II & ISO 27001</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Independently audited controls covering operational security, continuous vulnerability monitoring, and disaster recovery procedures.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-zinc-950/80 border border-zinc-800 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20 flex items-center justify-center">
              <EyeOff className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Zero Model Training Guarantee</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Strict commercial zero-retention agreements with LLM providers ensure your proprietary enterprise workflows and operational payloads remain yours alone.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-zinc-950/80 border border-zinc-800 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center">
              <Server className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Dedicated VPC Deployment</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Deploy in your dedicated AWS, GCP, or Azure Virtual Private Cloud with direct peering to internal ERPs, databases, and message brokers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
