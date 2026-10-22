"use client";

import React from "react";

export const StatementSection: React.FC = () => {
  return (
    <section className="border-y border-hr-line bg-hr-surface-2" id="statement-section">
      <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-12 md:py-[130px]">
        <div className="max-w-[1100px]">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-emerald-700 font-bold block mb-4">
            The Industry Reality
          </span>
          <h2
            className="font-body text-[30px] leading-[1.14] tracking-[-0.025em] text-hr-ink-strong md:text-[50px] md:leading-[1.1]"
            id="statement-heading"
          >
            <span>India’s ₹10 lakh crore road freight industry doesn’t run on ERPs. </span>
            <span className="text-hr-ink-3">It runs on 500 million chaotic WhatsApp voice notes, handwritten diaries, and cash advances. </span>
            <span>The opportunity is not to replace the broker with an app. </span>
            <span className="text-emerald-700 font-medium">It’s to give the broker an AI operations harness </span>
            <span className="text-hr-ink-strong">that turns chaos into pure profit.</span>
          </h2>
        </div>
      </div>
    </section>
  );
};
