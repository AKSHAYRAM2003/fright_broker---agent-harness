import React from "react";

/**
 * Top Announcement Bar
 * Displays live corridor status and harness deployment updates.
 */
export const AnnouncementBar: React.FC = () => {
  return (
    <div className="border-b border-hr-line-soft bg-hr-announce-bg">
      <a
        className="mx-auto flex max-w-[1440px] items-center justify-center gap-3.5 px-5 py-[9px] font-mono text-[11px] uppercase tracking-[0.04em] text-hr-signal md:px-12 no-underline transition-opacity hover:opacity-70"
        href="#platform"
      >
        <span className="inline-flex shrink-0 items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-block shrink-0 bg-emerald-500 hr-anim-blink"
            style={{ width: "6px", height: "6px" }}
          />
          Live
        </span>
        <span className="hidden sm:inline">
          HappyFright deploys Autonomous Operations Harness for Indian freight brokers across NH-48 &amp; NH-44
        </span>
        <span className="sm:hidden">
          HappyFright Freight Harness Live on NH-48 &amp; NH-44
        </span>
        <span className="hidden shrink-0 items-center gap-1.5 md:inline-flex">
          Read architecture<span aria-hidden="true">→</span>
        </span>
      </a>
    </div>
  );
};
