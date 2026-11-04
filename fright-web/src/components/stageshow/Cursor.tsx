"use client";

import React from "react";

export interface CursorPosition {
  x: number;
  y: number;
  isClicking?: boolean;
  visible?: boolean;
}

export const StageshowCursor: React.FC<CursorPosition> = ({
  x,
  y,
  isClicking = false,
  visible = true,
}) => {
  if (!visible) return null;

  return (
    <div
      className="pointer-events-none absolute z-50 transition-all duration-500 ease-out"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        transform: `translate(-2px, -2px) scale(${isClicking ? 0.88 : 1})`,
      }}
    >
      {/* Click ripple animation */}
      {isClicking && (
        <span className="absolute -inset-2.5 rounded-full bg-[#be3420]/30 animate-ping pointer-events-none" />
      )}

      {/* Realistic Mac pointer SVG */}
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        className="drop-shadow-md"
        aria-hidden="true"
      >
        <path
          d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.74-4.74a.5.5 0 0 1 .35-.15h6.69c.45 0 .67-.54.35-.85L5.85 2.86a.5.5 0 0 0-.35.35Z"
          fill="#070707"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
