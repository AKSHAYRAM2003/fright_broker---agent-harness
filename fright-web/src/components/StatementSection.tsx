"use client";

import React from "react";

const STATEMENT_WORDS = [
  { text: "The" },
  { text: "limit" },
  { text: "of" },
  { text: "what" },
  { text: "AI" },
  { text: "can" },
  { text: "do" },
  { text: "in" },
  { text: "Indian" },
  { text: "freight" },
  { text: "is" },
  { text: "not" },
  { text: "the" },
  { text: "model." },
  { text: "It’s" },
  { text: "what" },
  { text: "the" },
  { text: "system" },
  { text: "knows" },
  { text: "about" },
  { text: "highway" },
  { text: "corridors," },
  { text: "vernacular" },
  { text: "voice" },
  { text: "notes," },
  { text: "and" },
  { text: "broker" },
  { text: "margins." },
  { text: "That" },
  { text: "context" },
  { text: "is" },
  { text: "only" },
  { text: "captured" },
  { text: "one" },
  { text: "way:" },
  { text: "dispatching", isAccent: true },
  { text: "real", isAccent: true },
  { text: "loads.", isAccent: true },
];

export const StatementSection: React.FC = () => {
  return (
    <>
      <section
        className="border-y border-hr-line bg-hr-surface-2"
        id="statement-section"
      >
        <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-12 md:py-[150px]">
          <h2
            className="max-w-[38ch] font-body text-[29px] leading-[1.1] tracking-[-0.02em] text-hr-ink-strong md:text-[46px] md:leading-[1.08]"
            id="statement-heading"
          >
            {STATEMENT_WORDS.map((word, index) => (
              <span
                key={index}
                className={word.isAccent ? "text-hr-accent" : undefined}
                style={{ opacity: "0.25" } as React.CSSProperties}
              >
                {word.text}{" "}
              </span>
            ))}
          </h2>
        </div>
      </section>
    </>
  );
};
