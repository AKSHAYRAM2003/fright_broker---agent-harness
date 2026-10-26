"use client";

import React, { useEffect, useRef, useState } from "react";

interface CountUpProps {
  value: number;
  decimals?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  numberClassName?: string;
  prefixClassName?: string;
  suffixClassName?: string;
}

export const CountUp: React.FC<CountUpProps> = ({
  value,
  decimals = 0,
  duration = 1.6,
  prefix = "",
  suffix = "",
  className = "",
  numberClassName = "",
  prefixClassName = "",
  suffixClassName = "",
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Trigger when 30% of element is visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            // Fast ticker count-up animation
            const startTime = performance.now();
            const durationMs = duration * 1000;

            // Cubic bezier [0.22, 1, 0.36, 1] custom easing
            const easeOutCubic = (x: number): number => {
              return 1 - Math.pow(1 - x, 3.5);
            };

            const step = (currentTime: number) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / durationMs, 1);
              const easedProgress = easeOutCubic(progress);
              const currentVal = easedProgress * value;

              if (numberRef.current) {
                numberRef.current.textContent = currentVal.toFixed(decimals);
              }

              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                if (numberRef.current) {
                  numberRef.current.textContent = value.toFixed(decimals);
                }
              }
            };

            requestAnimationFrame(step);
            observer.unobserve(el);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [value, decimals, duration, hasAnimated]);

  return (
    <span
      ref={containerRef}
      className={`inline-flex items-baseline ${className}`}
    >
      {prefix ? <span className={prefixClassName}>{prefix}</span> : null}
      <span ref={numberRef} className={numberClassName}>
        0
      </span>
      {suffix ? <span className={suffixClassName}>{suffix}</span> : null}
    </span>
  );
};
