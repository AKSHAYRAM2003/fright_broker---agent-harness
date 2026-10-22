import React from "react";

/**
 * Desktop Navigation Bar Links
 * Displays dropdown triggers for Platform and Solutions,
 * direct navigation links (Customers, Newsroom, Careers),
 * and the primary "Book a demo" CTA.
 */
export const DesktopNav: React.FC = () => {
  return (
    <div className="hidden items-center gap-3.5 font-body text-[11px] uppercase tracking-[0.12em] text-hr-ink-1 lg:flex">
      <div className="hr-hover-dim flex items-stretch self-stretch">
        {/* Platform Dropdown Trigger */}
        <button
          id="nav-btn-platform"
          type="button"
          aria-haspopup="true"
          aria-expanded="false"
          className="group inline-flex items-center gap-1 px-3.5 uppercase no-underline transition-colors hover:text-hr-ink-strong cursor-pointer"
        >
          <span className="relative">
            Platform
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

        {/* Solutions Dropdown Trigger */}
        <button
          id="nav-btn-solutions"
          type="button"
          aria-haspopup="true"
          aria-expanded="false"
          className="group inline-flex items-center gap-1 px-3.5 uppercase no-underline transition-colors hover:text-hr-ink-strong cursor-pointer"
        >
          <span className="relative">
            Solutions
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

        {/* Customers Link */}
        <a
          className="group inline-flex items-center px-3.5 uppercase no-underline transition-colors hover:text-hr-ink-strong"
          href="#case-studies"
        >
          <span className="relative">
            Customers
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:origin-left group-hover:scale-x-100"
            />
          </span>
        </a>

        {/* Newsroom Link */}
        <a
          className="group inline-flex items-center px-3.5 uppercase no-underline transition-colors hover:text-hr-ink-strong"
          href="#newsroom"
        >
          <span className="relative">
            Newsroom
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:origin-left group-hover:scale-x-100"
            />
          </span>
        </a>

        {/* Careers Link */}
        <a
          className="group inline-flex items-center px-3.5 uppercase no-underline transition-colors hover:text-hr-ink-strong"
          href="#careers"
        >
          <span className="relative">
            Careers
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:origin-left group-hover:scale-x-100"
            />
          </span>
        </a>
      </div>

      {/* Book a demo CTA Button */}
      <a
        className="group inline-flex lg:min-w-max lg:whitespace-nowrap items-center justify-center font-body text-[12px] uppercase leading-none tracking-[0.1em] no-underline transition-[opacity,transform,background-color,border-color,color] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hr-rust gap-[9px] bg-hr-cta-solid-bg text-hr-cta-solid-fg relative isolate overflow-hidden duration-[350ms] ease-[cubic-bezier(0.33,0,0.15,1)] hover:text-hr-canvas hover:opacity-100 motion-reduce:transition-none px-4 py-[9px]"
        href="#hero-agent"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-[1] origin-bottom scale-y-0 bg-hr-stone transition-transform duration-[350ms] ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:scale-y-100 motion-reduce:transition-none"
        />
        <span>Book a demo</span>
      </a>
    </div>
  );
};
