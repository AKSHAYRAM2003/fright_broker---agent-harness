"use client";

import React, { useRef, useState, useEffect } from "react";

const STATEMENT_TEXT =
  "The limit of what AI can do in your enterprise is not the model. It’s what the model knows about how your enterprise operates. That context is only captured one way: doing the work.";

export const MissionStatement: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const words = STATEMENT_TEXT.split(" ");
  const totalWords = words.length;

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start highlighting when top of section enters 80% from top of viewport
      // Complete highlighting when bottom reaches 35% of viewport
      const startTrigger = windowHeight * 0.75;
      const endTrigger = windowHeight * 0.2;

      const progress =
        (startTrigger - rect.top) / (rect.height + (startTrigger - endTrigger));
      const clamped = Math.max(0, Math.min(1, progress));
      setScrollProgress(clamped);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate active word index based on progress
  const activeWordCount = Math.floor(scrollProgress * (totalWords + 1));

  return (
    <section
      ref={containerRef}
      className="relative w-full py-28 md:py-40 bg-zinc-50 border-b border-zinc-200"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-zinc-200/80 text-zinc-700">
            The Context Bottleneck
          </span>
        </div>

        {/* Big Scrollytelling Typography */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-center leading-[1.25] max-w-4xl mx-auto select-none">
          {words.map((word, idx) => {
            const isLit = idx < activeWordCount;
            const isAccent = idx >= totalWords - 3; // "doing the work."

            return (
              <span
                key={idx}
                className={`mission-word ${
                  isLit ? (isAccent ? "accent-lit" : "lit") : "unread"
                }`}
                style={{
                  display: "inline-block",
                  marginRight: "0.28em",
                }}
              >
                {word}
              </span>
            );
          })}
        </h2>

        {/* Sub-explanation */}
        <div className="mt-14 max-w-2xl mx-auto text-center text-zinc-600 text-base sm:text-lg leading-relaxed">
          <p>
            Off-the-shelf foundation models possess general world knowledge, but
            zero understanding of your enterprise&apos;s custom carrier tables,
            exception protocols, or legacy database nuances. HappyRobot
            continuously learns by doing the work alongside your teams.
          </p>
        </div>
      </div>
    </section>
  );
};
