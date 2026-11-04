"use client";

import React, { useState } from "react";
import { WhatsAppFeedEvent } from "@/types/load";

interface WhatsAppLiveFeedProps {
  onOpenSimulator?: () => void;
  events?: WhatsAppFeedEvent[];
  onSendManualCounter?: (text: string) => void;
}

const DEFAULT_EVENTS: WhatsAppFeedEvent[] = [
  {
    id: "evt_manjunatha",
    type: "INBOUND_QUOTE",
    sender: "Sri Manjunatha Transports",
    phone: "+91 94480 33812",
    time: "Just now",
    text: "Kal subah Whitefield se Pune 16T Taurus urgent FMCG load chahiye. Return rate match karenge toh abhi gadi lagata hu.",
    meta: {
      route: "Whitefield (BLR) ➔ Pune (Chakan)",
      truck: "16 MT • 10-W Taurus",
      badge: "High Intent (Immediate)",
      badgeType: "success",
    },
    language: "hinglish",
  },
  {
    id: "evt_patel",
    type: "INBOUND_QUOTE",
    sender: "Patel Logistics (Vapi)",
    phone: "+91 98201 44520",
    time: "2m ago",
    text: "Vapi to Chennai 25MT trailer rate update ₹72,000 all inclusive GST extra. Vehicle GJ-15-X-8802 ready.",
    meta: {
      loadId: "#VAP-CHE-99",
      truck: "25 MT Trailer",
      badge: "Matched to Indent #VAP-CHE-99",
      badgeType: "info",
    },
    language: "english",
  },
  {
    id: "evt_anjaneya",
    type: "INBOUND_INQUIRY",
    sender: "Anjaneya Roadways (Bengaluru)",
    phone: "+91 97412 88201",
    time: "5m ago",
    text: "ಬೆಂಗಳೂರು-ಕೊಯಮತ್ತೂರು 9 ಟನ್ ಲೋಡ್ ಲಭ್ಯವಿದೆ ತಕ್ಷಣ ಬೇಕು. ಬಾಡಿಗೆ ರೇಟ್ ಕನ್ಫರ್ಮ್ ಮಾಡಿ.",
    meta: {
      route: "BLR-CJB 9T Eicher",
      badge: "Auto-translated (Kannada)",
      badgeType: "primary",
    },
    language: "kannada",
  },
  {
    id: "evt_hindustan",
    type: "BOOKING_CONFIRMATION",
    sender: "Hindustan Highway Carriers",
    phone: "+91 98450 11923",
    time: "11m ago",
    text: "Driver assigned for Surat trip: KA-01-AG-4919 RC uploaded and verified.",
    meta: {
      badge: "Vahan Database Authenticated",
      badgeType: "success",
    },
    language: "english",
  },
];

export const WhatsAppLiveFeed: React.FC<WhatsAppLiveFeedProps> = ({
  onOpenSimulator,
  events,
  onSendManualCounter,
}) => {
  const [langFilter, setLangFilter] = useState<"all" | "kannada" | "hinglish" | "english">("all");
  const [smartCounterText, setSmartCounterText] = useState(
    "₹54,000 confirmed for 16T Taurus tomorrow 7 AM. Send driver details."
  );
  const [sentSuccess, setSentSuccess] = useState(false);

  const displayEvents = events && events.length > 0 ? events : DEFAULT_EVENTS;

  const filteredEvents = displayEvents.filter((evt) => {
    if (langFilter === "all") return true;
    if (langFilter === "kannada") return evt.language === "kannada" || evt.text.includes("ಬೆಂಗಳೂರು") || evt.text.includes("ಪೀಣ್ಯ");
    if (langFilter === "hinglish") return evt.language === "hinglish" || evt.text.includes("Kal subah") || evt.text.includes("gadi");
    if (langFilter === "english") return evt.language === "english";
    return true;
  });

  const handleSendCounter = () => {
    if (onSendManualCounter) {
      onSendManualCounter(smartCounterText);
    }
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 2500);
  };

  const getBadgeClass = (type?: string) => {
    switch (type) {
      case "success":
        return "bg-secondary-container text-on-secondary-container";
      case "error":
        return "bg-error-container text-on-error-container";
      case "primary":
        return "bg-primary-container text-on-primary-container";
      case "info":
      default:
        return "bg-surface-container-high text-on-surface-variant";
    }
  };

  return (
    <div className="flex flex-col gap-3.5 sm:gap-4">
      {/* Live Stream Panel */}
      <div className="bg-surface-container border border-surface-container-high rounded-xl p-3.5 sm:p-4 shadow-xs flex flex-col gap-3.5">
        <div className="flex flex-col gap-1 border-b border-surface-container-high/60 pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <h3 className="font-headline-sm text-sm text-on-surface font-semibold tracking-tight">
                Live WhatsApp Event Feed
              </h3>
            </div>
            <span className="font-sans text-[10px] text-secondary font-sans">
              {displayEvents.length} Active Events
            </span>
          </div>
          <span className="font-sans text-[11px] text-outline">
            South Inbound, Western Corridor, Spot Bidding
          </span>

          {/* Language Switcher */}
          <div className="flex items-center gap-1 mt-1.5 font-sans text-[10px] overflow-x-auto pb-0.5 bg-[#eae7e1]/80 p-0.5 rounded-lg border border-[#dfdbd5]">
            <button
              onClick={() => setLangFilter("all")}
              type="button"
              className={`px-2.5 py-0.5 rounded transition-colors ${
                langFilter === "all"
                  ? "bg-white text-[#18181b] font-semibold shadow-xs border border-black/[0.08]"
                  : "text-[#78716c] hover:text-[#070707] border border-transparent"
              }`}
            >
              All ({displayEvents.length})
            </button>
            <button
              onClick={() => setLangFilter("kannada")}
              type="button"
              className={`px-2.5 py-0.5 rounded transition-colors ${
                langFilter === "kannada"
                  ? "bg-white text-[#18181b] font-semibold shadow-xs border border-black/[0.08]"
                  : "text-[#78716c] hover:text-[#070707] border border-transparent"
              }`}
            >
              ಕನ್ನಡ (KA)
            </button>
            <button
              onClick={() => setLangFilter("hinglish")}
              type="button"
              className={`px-2.5 py-0.5 rounded transition-colors ${
                langFilter === "hinglish"
                  ? "bg-white text-[#18181b] font-semibold shadow-xs border border-black/[0.08]"
                  : "text-[#78716c] hover:text-[#070707] border border-transparent"
              }`}
            >
              Hinglish
            </button>
            <button
              onClick={() => setLangFilter("english")}
              type="button"
              className={`px-2.5 py-0.5 rounded transition-colors ${
                langFilter === "english"
                  ? "bg-white text-[#18181b] font-semibold shadow-xs border border-black/[0.08]"
                  : "text-[#78716c] hover:text-[#070707] border border-transparent"
              }`}
            >
              English
            </button>
          </div>
        </div>

        {/* Dynamic Feed Item List */}
        <div className="flex flex-col gap-3 max-h-[560px] overflow-y-auto pr-0.5">
          {filteredEvents.map((evt, idx) => {
            const isLatest = idx === 0;
            const isOutbound = evt.type === "OUTBOUND_RFQ" || evt.type === "OUTBOUND_CLARIFICATION" || evt.type === "COUNTER_OFFER";
            const isBooking = evt.type === "BOOKING_CONFIRMATION";

            return (
              <div
                key={evt.id}
                className={`rounded-lg p-3 flex flex-col gap-2 transition-all duration-300 ${
                  isBooking
                    ? "bg-[#ecfdf5] border border-[#a7f3d0] shadow-2xs"
                    : isOutbound
                    ? "bg-surface-container-low border border-[#be3420]/25 shadow-2xs"
                    : isLatest
                    ? "bg-surface-container-low border border-surface-container-high shadow-xs"
                    : "bg-surface-container-low/70 border border-surface-container-high/60"
                }`}
              >
                {/* Event Header */}
                <div className="flex items-center justify-between gap-1">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className="material-symbols-outlined text-base shrink-0 text-secondary">
                      {isBooking ? "check_circle" : isOutbound ? "forward_to_inbox" : "chat"}
                    </span>
                    <span className="font-headline-sm text-xs text-on-surface font-semibold truncate">
                      {evt.sender}
                    </span>
                    {isOutbound && (
                      <span className="font-sans text-[9px] px-1.5 py-0.2 rounded bg-primary-container text-on-primary-container font-bold uppercase shrink-0">
                        Outbound RFQ
                      </span>
                    )}
                    {isBooking && (
                      <span className="font-sans text-[9px] px-1.5 py-0.2 rounded bg-secondary-container text-on-secondary-container font-bold uppercase shrink-0">
                        LR Issued
                      </span>
                    )}
                  </div>
                  <span className="font-sans text-[10px] text-secondary shrink-0 font-medium">
                    {evt.time}
                  </span>
                </div>

                {/* Event Message Text */}
                <div
                  className={`p-2.5 rounded-lg border font-sans text-xs leading-relaxed ${
                    isBooking
                      ? "bg-white text-[#047857] border-[#a7f3d0] font-medium"
                      : isOutbound
                      ? "bg-white text-on-surface border-[#eae7e1] font-sans text-[11px]"
                      : "bg-surface text-on-surface border-surface-container-high italic"
                  }`}
                >
                  &quot;{evt.text}&quot;
                </div>

                {/* Event Meta Badges */}
                {evt.meta && (
                  <div className="flex flex-wrap items-center gap-1.5 font-sans text-[10px]">
                    {evt.meta.loadId && (
                      <span className="px-1.5 py-0.5 rounded bg-surface border border-surface-container-high text-on-surface font-bold">
                        {evt.meta.loadId}
                      </span>
                    )}
                    {evt.meta.route && (
                      <span className="px-1.5 py-0.5 rounded bg-surface border border-surface-container-high text-on-surface truncate">
                        {evt.meta.route}
                      </span>
                    )}
                    {evt.meta.truck && (
                      <span className="px-1.5 py-0.5 rounded bg-surface border border-surface-container-high text-on-surface truncate">
                        {evt.meta.truck}
                      </span>
                    )}
                    {evt.meta.rate && (
                      <span className="px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container font-bold">
                        {evt.meta.rate}
                      </span>
                    )}
                    {evt.meta.badge && (
                      <span className={`px-1.5 py-0.5 rounded font-medium ${getBadgeClass(evt.meta.badgeType)}`}>
                        {evt.meta.badge}
                      </span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Automated Smart Counter Box */}
        <div className="flex flex-col gap-1.5 pt-2 border-t border-surface-container-high">
          <span className="font-sans text-[10px] text-outline">Quick Broadcast WhatsApp Reply:</span>
          <div className="flex items-center gap-1.5">
            <input
              type="text"
              value={smartCounterText}
              onChange={(e) => setSmartCounterText(e.target.value)}
              className="flex-1 bg-surface border border-surface-container-high text-on-surface text-xs px-2.5 py-1.5 rounded focus:outline-none focus:border-primary transition-colors font-sans truncate"
            />
            <button
              type="button"
              onClick={handleSendCounter}
              className="px-3 py-1.5 bg-secondary text-on-secondary font-headline-sm text-xs font-semibold rounded hover:opacity-95 transition-all flex items-center justify-center shrink-0 active:scale-95"
            >
              {sentSuccess ? "Dispatched!" : "Send"}
            </button>
          </div>
        </div>
      </div>

      {/* Quick Launch Sandbox Simulator Card */}
      <div className="relative overflow-hidden bg-surface-container border border-surface-container-high rounded-xl p-3.5 sm:p-4 shadow-xs flex flex-col gap-2.5 bg-gradient-to-br from-primary-container/20 via-surface-container to-secondary-container/20 group">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-primary text-xl">terminal</span>
            <h4 className="font-headline-sm text-sm text-on-surface font-semibold">
              WhatsApp AI Testing Simulator
            </h4>
          </div>
          <span className="px-1.5 py-0.5 bg-surface-container-high rounded font-sans text-[10px] text-outline">
            Sandbox
          </span>
        </div>
        <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
          Simulate transporter counter-offers, regional vernacular dialects (Kannada, Hinglish, Marathi), and spot pricing algorithms in zero-risk sandbox.
        </p>
        <div className="pt-1 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={onOpenSimulator}
            className="flex-1 flex items-center justify-center gap-1.5 px-3.5 py-2 bg-primary text-on-primary font-headline-sm text-xs font-semibold rounded-lg hover:opacity-95 shadow-xs transition-all active:scale-95"
          >
            <span>Launch Interactive Simulator</span>
            <span className="material-symbols-outlined text-sm">open_in_new</span>
          </button>
          <kbd className="px-2 py-1.5 bg-surface-container-low border border-surface-container-high text-outline rounded font-sans text-[10px] font-medium">
            Ctrl + S
          </kbd>
        </div>
      </div>

      {/* Dialect Engine Accuracy Widget */}
      <div className="bg-surface-container border border-surface-container-high rounded-xl p-3.5 sm:p-4 flex flex-col gap-1.5 shadow-xs">
        <div className="flex items-center justify-between">
          <span className="font-sans text-[10px] text-outline uppercase tracking-wider">
            Dialect Engine Accuracy
          </span>
          <span className="font-sans text-[11px] text-secondary font-sans font-semibold">
            99.1% F1
          </span>
        </div>
        <div className="w-full bg-surface-container-high h-1 rounded-full overflow-hidden">
          <div className="bg-secondary h-full rounded-full" style={{ width: "99.1%" }}></div>
        </div>
        <div className="flex items-center justify-between text-outline font-sans text-[10px] mt-0.5">
          <span>Hinglish (99.4%)</span>
          <span>Kannada (98.6%)</span>
          <span>Tamil (97.9%)</span>
        </div>
      </div>
    </div>
  );
};
