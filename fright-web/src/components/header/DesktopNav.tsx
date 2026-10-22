import React from "react";

/**
 * Desktop Navigation Bar Links
 * Displays dropdown triggers for Harness and Corridors,
 * direct navigation links (Brokers, Benchmarks, Live Fleet),
 * and the primary "Login" CTA.
 */
export const DesktopNav: React.FC = () => {
  return (
    <div className="hidden items-center gap-3.5 font-body text-[11px] uppercase tracking-[0.12em] text-hr-ink-1 lg:flex">
      <div className="hr-hover-dim flex items-stretch self-stretch">
        {/* Harness / Platform Dropdown Trigger */}
        <button
          id="nav-btn-platform"
          type="button"
          aria-haspopup="true"
          aria-expanded="false"
          className="group inline-flex items-center gap-1 px-3.5 uppercase no-underline transition-colors hover:text-hr-ink-strong cursor-pointer"
        >
          <span className="relative">
            Harness
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:origin-left group-hover:scale-x-100"
            />
          </span>
          <svg
            aria-hidden="true"
            className="shrink-0 transition-transform duration-300"
            fill="none"
            height="9"
            viewBox="0 0 12 12"
            width="9"
          >
            <path
              d="M2.5 4.5 6 8l3.5-3.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.3"
            />
          </svg>
        </button>

        {/* Corridors / Solutions Dropdown Trigger */}
        <button
          id="nav-btn-solutions"
          type="button"
          aria-haspopup="true"
          aria-expanded="false"
          className="group inline-flex items-center gap-1 px-3.5 uppercase no-underline transition-colors hover:text-hr-ink-strong cursor-pointer"
        >
          <span className="relative">
            Corridors
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:origin-left group-hover:scale-x-100"
            />
          </span>
          <svg
            aria-hidden="true"
            className="shrink-0 transition-transform duration-300"
            fill="none"
            height="9"
            viewBox="0 0 12 12"
            width="9"
          >
            <path
              d="M2.5 4.5 6 8l3.5-3.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.3"
            />
          </svg>
        </button>

        {/* Brokers (Customer Stories) Link */}
        <a
          className="group inline-flex items-center px-3.5 uppercase no-underline transition-colors hover:text-hr-ink-strong"
          href="#case-studies"
        >
          <span className="relative">
            Brokers
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:origin-left group-hover:scale-x-100"
            />
          </span>
        </a>

        {/* Benchmarks (Superintelligence / Safety) Link */}
        <a
          className="group inline-flex items-center px-3.5 uppercase no-underline transition-colors hover:text-hr-ink-strong"
          href="#platform"
        >
          <span className="relative">
            Benchmarks
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:origin-left group-hover:scale-x-100"
            />
          </span>
        </a>

        {/* Live Fleet (Dispatch Operations) Link */}
        <a
          className="group inline-flex items-center px-3.5 uppercase no-underline transition-colors hover:text-hr-ink-strong"
          href="#careers"
        >
          <span className="relative">
            Live Fleet
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:origin-left group-hover:scale-x-100"
            />
          </span>
        </a>
      </div>

      {/* Login CTA Button */}
      <a
        className="group inline-flex items-center justify-center min-w-[92px] px-6 py-2.5 font-body text-[12px] font-semibold uppercase leading-none tracking-[0.1em] no-underline transition-[opacity,transform,background-color,border-color,color] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hr-rust gap-[9px] bg-hr-cta-solid-bg text-hr-cta-solid-fg relative isolate overflow-hidden duration-[350ms] ease-[cubic-bezier(0.33,0,0.15,1)] hover:text-hr-canvas hover:opacity-100 motion-reduce:transition-none"
        href="#hero-agent"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-[1] origin-bottom scale-y-0 bg-hr-stone transition-transform duration-[350ms] ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:scale-y-100 motion-reduce:transition-none"
        />
        <span>Login</span>
      </a>
    </div>
  );
};
