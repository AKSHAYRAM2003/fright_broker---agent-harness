import React from "react";

interface HappyRobotLogoProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

/**
 * HappyFright Brand Logo
 * Geometric freight corridor emblem paired with high-precision wordmark.
 */
export const HappyRobotLogo: React.FC<HappyRobotLogoProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`inline-flex items-center gap-2.5 select-none ${className}`}
      role="img"
      aria-label="HappyFright"
    >
      {/* High-velocity freight corridor emblem */}
      <svg
        viewBox="0 0 28 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-[22px] w-auto shrink-0"
        aria-hidden="true"
      >
        {/* Dynamic Upper Corridor Bar in Obsidian */}
        <path
          d="M2 13.5L8.5 3H18.5L12 13.5H2Z"
          fill="var(--hr-wordmark, #070707)"
        />
        {/* Fast Forward Accent Arrow in Signature Rust */}
        <path
          d="M13.5 13.5L20 3H26.5L20 13.5H13.5Z"
          fill="var(--hr-rust, #ff462d)"
        />
        {/* Base Freight Tracking Bar */}
        <path
          d="M6 21L10.5 14H21.5L17 21H6Z"
          fill="var(--hr-wordmark, #070707)"
        />
        {/* Front Freight Hub Node */}
        <circle cx="23.5" cy="17.5" r="2.5" fill="var(--hr-rust, #ff462d)" />
      </svg>

      {/* Brand Wordmark */}
      <span className="font-headline text-[18px] sm:text-[19px] font-bold tracking-[-0.035em] text-[#070707] leading-none transition-colors">
        Happy<span className="text-hr-rust">Fright</span>
      </span>
    </div>
  );
};

