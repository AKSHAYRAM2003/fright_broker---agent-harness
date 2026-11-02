"use client";

import React, { useState } from "react";

interface WhatsAppLiveFeedProps {
  onOpenSimulator?: () => void;
}

export const WhatsAppLiveFeed: React.FC<WhatsAppLiveFeedProps> = ({ onOpenSimulator }) => {
  const [langFilter, setLangFilter] = useState<"all" | "kannada" | "hinglish" | "english">("all");
  const [smartCounterText, setSmartCounterText] = useState(
    "₹54,000 confirmed for 16T Taurus tomorrow 7 AM. Send driver details."
  );
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSendCounter = () => {
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 2500);
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
            <span className="font-mono text-[10px] text-secondary font-mono">
              3 Active Channels
            </span>
          </div>
          <span className="font-mono text-[11px] text-outline">
            South Inbound, Western Corridor, Spot Bidding
          </span>

          {/* Language Switcher */}
          <div className="flex items-center gap-1 mt-1.5 font-mono text-[10px] overflow-x-auto pb-0.5">
            <button
              onClick={() => setLangFilter("all")}
              type="button"
              className={`px-2 py-0.5 rounded transition-colors ${
                langFilter === "all"
                  ? "bg-surface-container-high text-on-surface font-semibold"
                  : "text-outline hover:text-on-surface"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setLangFilter("kannada")}
              type="button"
              className={`px-2 py-0.5 rounded transition-colors ${
                langFilter === "kannada"
                  ? "bg-surface-container-high text-on-surface font-semibold"
                  : "text-outline hover:text-on-surface"
              }`}
            >
              ಕನ್ನಡ (KA)
            </button>
            <button
              onClick={() => setLangFilter("hinglish")}
              type="button"
              className={`px-2 py-0.5 rounded transition-colors ${
                langFilter === "hinglish"
                  ? "bg-surface-container-high text-on-surface font-semibold"
                  : "text-outline hover:text-on-surface"
              }`}
            >
              Hinglish
            </button>
            <button
              onClick={() => setLangFilter("english")}
              type="button"
              className={`px-2 py-0.5 rounded transition-colors ${
                langFilter === "english"
                  ? "bg-surface-container-high text-on-surface font-semibold"
                  : "text-outline hover:text-on-surface"
              }`}
            >
              English
            </button>
          </div>
        </div>

        {/* Primary Incoming Item (Sri Manjunatha Transports) */}
        <div className="bg-surface-container-low border border-surface-container-high p-3 rounded-lg flex flex-col gap-2.5 shadow-inner">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-secondary text-base">chat</span>
              <span className="font-headline-sm text-xs text-on-surface font-semibold truncate">
                Sri Manjunatha Transports
              </span>
            </div>
            <span className="font-mono text-[10px] text-secondary font-mono">Just now</span>
          </div>

          <div className="bg-surface text-on-surface p-2.5 rounded-lg border border-surface-container-high font-sans text-xs leading-relaxed italic">
            &quot;Kal subah Whitefield se Pune 16T Taurus urgent FMCG load chahiye. Return rate match karenge toh abhi gadi lagata hu.&quot;
          </div>

          <div className="grid grid-cols-2 gap-1.5 bg-surface p-2 rounded text-on-surface font-mono text-[10px] border border-surface-container-high">
            <div className="flex flex-col">
              <span className="text-outline">Origin:</span>
              <span className="font-medium text-on-surface truncate">Whitefield (BLR)</span>
            </div>
            <div className="flex flex-col">
              <span className="text-outline">Destination:</span>
              <span className="font-medium text-on-surface truncate">Pune (Chakan)</span>
            </div>
            <div className="flex flex-col">
              <span className="text-outline">Payload / Body:</span>
              <span className="font-medium text-on-surface truncate">16 MT • 10-W Taurus</span>
            </div>
            <div className="flex flex-col">
              <span className="text-outline">Intent / Sentiment:</span>
              <span className="font-semibold text-secondary truncate">High Intent (Immediate)</span>
            </div>
          </div>

          <div className="flex flex-col gap-1.5 pt-0.5">
            <span className="font-mono text-[10px] text-outline">Automated Smart Counter:</span>
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
                className="px-3 py-1.5 bg-secondary text-on-secondary font-headline-sm text-xs font-semibold rounded hover:opacity-95 transition-all flex items-center justify-center shrink-0"
              >
                {sentSuccess ? "Sent!" : "Send"}
              </button>
            </div>
          </div>
        </div>

        {/* Secondary Incoming Feed Items */}
        <div className="flex flex-col gap-2.5 divide-y divide-surface-container-high">
          {/* Patel Logistics */}
          <div className="pt-2 flex flex-col gap-0.5">
            <div className="flex items-center justify-between font-mono text-[11px]">
              <span className="font-medium text-on-surface">Patel Logistics (Vapi)</span>
              <span className="text-outline">2m ago</span>
            </div>
            <p className="font-sans text-xs text-on-surface-variant line-clamp-1 italic">
              &quot;Vapi to Chennai 25MT trailer rate update ₹72,000 all inclusive GST extra...&quot;
            </p>
            <div className="flex items-center gap-2 font-mono text-[10px] text-outline mt-0.5">
              <span className="text-tertiary">Parsed: 25 MT Trailer</span>
              <span>•</span>
              <span className="text-secondary font-mono">Matched to Indent #VAP-CHE-99</span>
            </div>
          </div>

          {/* Anjaneya Roadways (Kannada) */}
          <div className="pt-2 flex flex-col gap-0.5">
            <div className="flex items-center justify-between font-mono text-[11px]">
              <span className="font-medium text-on-surface">Anjaneya Roadways (Bengaluru)</span>
              <span className="text-outline">5m ago</span>
            </div>
            <p className="font-sans text-xs text-on-surface-variant line-clamp-1 italic">
              &quot;ಬೆಂಗಳೂರು-ಕೊಯಮತ್ತೂರು 9 ಟನ್ ಲೋಡ್ ಲಭ್ಯವಿದೆ ತಕ್ಷಣ ಬೇಕು...&quot;
            </p>
            <div className="flex items-center gap-2 font-mono text-[10px] text-outline mt-0.5">
              <span className="text-primary">Parsed: BLR-CJB 9T Eicher</span>
              <span>•</span>
              <span className="text-on-surface-variant">Auto-translated</span>
            </div>
          </div>

          {/* Hindustan Highway Carriers */}
          <div className="pt-2 flex flex-col gap-0.5">
            <div className="flex items-center justify-between font-mono text-[11px]">
              <span className="font-medium text-on-surface">Hindustan Highway Carriers</span>
              <span className="text-outline">11m ago</span>
            </div>
            <p className="font-sans text-xs text-on-surface-variant line-clamp-1 italic">
              &quot;Driver assigned for Surat trip: KA-01-AG-4919 RC uploaded.&quot;
            </p>
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-secondary mt-0.5">
              <span className="material-symbols-outlined text-xs">verified</span>
              <span>Vahan Database Authenticated</span>
            </div>
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
          <span className="px-1.5 py-0.5 bg-surface-container-high rounded font-mono text-[10px] text-outline">
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
          <kbd className="px-2 py-1.5 bg-surface-container-low border border-surface-container-high text-outline rounded font-mono text-[10px] font-medium">
            Ctrl + S
          </kbd>
        </div>
      </div>

      {/* Dialect Engine Accuracy Widget */}
      <div className="bg-surface-container border border-surface-container-high rounded-xl p-3.5 sm:p-4 flex flex-col gap-1.5 shadow-xs">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] text-outline uppercase tracking-wider">
            Dialect Engine Accuracy
          </span>
          <span className="font-mono text-[11px] text-secondary font-mono font-semibold">
            99.1% F1
          </span>
        </div>
        <div className="w-full bg-surface-container-high h-1 rounded-full overflow-hidden">
          <div className="bg-secondary h-full rounded-full" style={{ width: "99.1%" }}></div>
        </div>
        <div className="flex items-center justify-between text-outline font-mono text-[10px] mt-0.5">
          <span>Hinglish (99.4%)</span>
          <span>Kannada (98.6%)</span>
          <span>Tamil (97.9%)</span>
        </div>
      </div>
    </div>
  );
};
