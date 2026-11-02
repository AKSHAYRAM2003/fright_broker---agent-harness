"use client";

import React, { useState } from "react";
import {
  MessageSquare,
  Send,
  Terminal,
  ExternalLink,
  ShieldCheck,
  Languages,
  Check,
} from "lucide-react";

interface WhatsAppLiveFeedProps {
  onOpenSimulator?: () => void;
}

export const WhatsAppLiveFeed: React.FC<WhatsAppLiveFeedProps> = ({ onOpenSimulator }) => {
  const [langFilter, setLangFilter] = useState<"all" | "kannada" | "hinglish" | "english">("all");
  const [smartCounterText, setSmartCounterText] = useState(
    "₹54,000 confirmed for 16T Taurus tomorrow 7 AM. Send driver details."
  );
  const [sentCounter, setSentCounter] = useState(false);

  const handleSendSmartCounter = () => {
    setSentCounter(true);
    setTimeout(() => {
      setSentCounter(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Live Stream Panel */}
      <div className="bg-white border border-neutral-200/90 rounded-xl p-4 shadow-xs flex flex-col gap-4">
        <div className="flex flex-col gap-1 border-b border-neutral-100 pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <h3 className="font-sans text-sm font-bold text-neutral-900 tracking-tight">
                Live WhatsApp Event Feed
              </h3>
            </div>
            <span className="font-mono text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-bold">
              3 Active Channels
            </span>
          </div>
          <span className="font-mono text-[11px] text-neutral-400">
            South Inbound, Western Corridor, Spot Bidding
          </span>

          {/* Language Switcher */}
          <div className="flex items-center gap-1 mt-2 font-mono text-[10px] overflow-x-auto pb-0.5">
            <button
              onClick={() => setLangFilter("all")}
              type="button"
              className={`px-2 py-0.5 rounded transition-all ${
                langFilter === "all"
                  ? "bg-neutral-900 text-white font-bold"
                  : "bg-neutral-100 text-neutral-600 hover:text-neutral-900"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setLangFilter("kannada")}
              type="button"
              className={`px-2 py-0.5 rounded transition-all ${
                langFilter === "kannada"
                  ? "bg-neutral-900 text-white font-bold"
                  : "bg-neutral-100 text-neutral-600 hover:text-neutral-900"
              }`}
            >
              ಕನ್ನಡ (KA)
            </button>
            <button
              onClick={() => setLangFilter("hinglish")}
              type="button"
              className={`px-2 py-0.5 rounded transition-all ${
                langFilter === "hinglish"
                  ? "bg-neutral-900 text-white font-bold"
                  : "bg-neutral-100 text-neutral-600 hover:text-neutral-900"
              }`}
            >
              Hinglish
            </button>
            <button
              onClick={() => setLangFilter("english")}
              type="button"
              className={`px-2 py-0.5 rounded transition-all ${
                langFilter === "english"
                  ? "bg-neutral-900 text-white font-bold"
                  : "bg-neutral-100 text-neutral-600 hover:text-neutral-900"
              }`}
            >
              English
            </button>
          </div>
        </div>

        {/* Primary Incoming Item (Sri Manjunatha Transports) */}
        <div className="bg-neutral-50/90 border border-neutral-200/80 p-3 rounded-xl flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span className="font-sans text-xs font-bold text-neutral-900 truncate">
                Sri Manjunatha Transports
              </span>
            </div>
            <span className="font-mono text-[10px] text-emerald-700 font-semibold">Just now</span>
          </div>

          <div className="bg-white text-neutral-800 p-2.5 rounded-lg border border-neutral-200/70 font-sans text-xs leading-relaxed italic">
            &quot;Kal subah Whitefield se Pune 16T Taurus urgent FMCG load chahiye. Return rate match karenge toh abhi gadi lagata hu.&quot;
          </div>

          {/* Parsed Attributes */}
          <div className="grid grid-cols-2 gap-2 bg-white p-2.5 rounded-lg text-neutral-800 font-mono text-[10px] border border-neutral-200/70">
            <div>
              <span className="text-neutral-400 block">Origin:</span>
              <span className="font-bold text-neutral-900">Whitefield (BLR)</span>
            </div>
            <div>
              <span className="text-neutral-400 block">Destination:</span>
              <span className="font-bold text-neutral-900">Pune (Chakan)</span>
            </div>
            <div>
              <span className="text-neutral-400 block">Payload / Body:</span>
              <span className="font-bold text-neutral-900">16 MT • 10-W Taurus</span>
            </div>
            <div>
              <span className="text-neutral-400 block">Intent:</span>
              <span className="font-bold text-emerald-700">High Intent (Immediate)</span>
            </div>
          </div>

          {/* Automated Smart Counter */}
          <div className="flex flex-col gap-1.5 pt-1">
            <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider font-semibold">
              Automated Smart Counter:
            </span>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={smartCounterText}
                onChange={(e) => setSmartCounterText(e.target.value)}
                className="flex-1 bg-white border border-neutral-300 text-neutral-900 text-xs px-2.5 py-1.5 rounded-lg focus:outline-none focus:border-[#ff462d] font-sans truncate shadow-xs"
              />
              <button
                type="button"
                onClick={handleSendSmartCounter}
                className={`px-3 py-1.5 rounded-lg font-mono text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1 ${
                  sentCounter
                    ? "bg-emerald-600 text-white"
                    : "bg-neutral-900 hover:bg-neutral-800 text-white active:scale-95"
                }`}
              >
                {sentCounter ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Sent</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5 text-[#ff462d]" />
                    <span>Send</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Secondary Inbound Items */}
        <div className="flex flex-col gap-2.5 divide-y divide-neutral-100 pt-1">
          {/* Patel Logistics */}
          <div className="pt-2 flex flex-col gap-1">
            <div className="flex items-center justify-between font-mono text-[11px]">
              <span className="font-bold text-neutral-900">Patel Logistics (Vapi)</span>
              <span className="text-neutral-400">2m ago</span>
            </div>
            <p className="font-sans text-xs text-neutral-600 line-clamp-1 italic">
              &quot;Vapi to Chennai 25MT trailer rate update ₹72,000 all inclusive GST extra...&quot;
            </p>
            <div className="flex items-center gap-2 font-mono text-[10px] text-neutral-500 mt-0.5">
              <span className="text-amber-700 font-semibold">Parsed: 25 MT Trailer</span>
              <span>•</span>
              <span className="text-emerald-700 font-bold">Matched to Indent #VAP-CHE-99</span>
            </div>
          </div>

          {/* Anjaneya Roadways (Kannada) */}
          <div className="pt-2.5 flex flex-col gap-1">
            <div className="flex items-center justify-between font-mono text-[11px]">
              <span className="font-bold text-neutral-900">Anjaneya Roadways (Bengaluru)</span>
              <span className="text-neutral-400">5m ago</span>
            </div>
            <p className="font-sans text-xs text-neutral-600 line-clamp-1 italic">
              &quot;ಬೆಂಗಳೂರು-ಕೊಯಮತ್ತೂರು 9 ಟನ್ ಲೋಡ್ ಲಭ್ಯವಿದೆ ತಕ್ಷಣ ಬೇಕು...&quot;
            </p>
            <div className="flex items-center gap-2 font-mono text-[10px] text-neutral-500 mt-0.5">
              <span className="text-neutral-800 font-bold">Parsed: BLR-CJB 9T Eicher</span>
              <span>•</span>
              <span className="text-emerald-700 font-semibold">Auto-translated</span>
            </div>
          </div>

          {/* Hindustan Highway Carriers */}
          <div className="pt-2.5 flex flex-col gap-1">
            <div className="flex items-center justify-between font-mono text-[11px]">
              <span className="font-bold text-neutral-900">Hindustan Highway Carriers</span>
              <span className="text-neutral-400">11m ago</span>
            </div>
            <p className="font-sans text-xs text-neutral-600 line-clamp-1 italic">
              &quot;Driver assigned for Surat trip: KA-01-AG-4919 RC uploaded.&quot;
            </p>
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-700 font-semibold mt-0.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>VAHAN Database Authenticated</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Launch Sandbox Simulator Card */}
      <div className="relative overflow-hidden bg-white border border-neutral-200/90 rounded-xl p-4 shadow-xs flex flex-col gap-3 bg-gradient-to-br from-neutral-50 via-white to-red-50/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#ff462d]" />
            <h4 className="font-sans text-xs font-bold text-neutral-900">
              WhatsApp AI Testing Simulator
            </h4>
          </div>
          <span className="px-2 py-0.5 bg-neutral-100 rounded font-mono text-[9px] text-neutral-600 font-bold uppercase tracking-wider">
            Sandbox
          </span>
        </div>
        <p className="font-sans text-xs text-neutral-600 leading-relaxed">
          Simulate transporter counter-offers, regional vernacular dialects (Kannada, Hinglish, Hindi), and margin algorithms in a zero-risk sandbox.
        </p>
        <div className="pt-1 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={onOpenSimulator}
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-neutral-900 hover:bg-neutral-800 text-white font-mono text-xs font-bold rounded-lg shadow-xs transition-all active:scale-95"
          >
            <span>Launch Interactive Simulator</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#ff462d]" />
          </button>
          <kbd className="px-2 py-1.5 bg-neutral-100 border border-neutral-300 rounded font-mono text-[10px] text-neutral-500 font-semibold">
            Ctrl+S
          </kbd>
        </div>
      </div>

      {/* Quick Operational Metrics Widget */}
      <div className="bg-white border border-neutral-200/90 rounded-xl p-4 flex flex-col gap-2 shadow-xs">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
            <Languages className="w-3.5 h-3.5 text-neutral-500" />
            Dialect Engine Accuracy
          </span>
          <span className="font-mono text-xs text-emerald-700 font-bold">99.1% F1</span>
        </div>
        <div className="w-full bg-neutral-100 h-1.5 rounded-full overflow-hidden">
          <div className="bg-emerald-500 h-full rounded-full" style={{ width: "99.1%" }}></div>
        </div>
        <div className="flex items-center justify-between text-neutral-500 font-mono text-[10px] mt-0.5">
          <span>Hinglish (99.4%)</span>
          <span>Kannada (98.6%)</span>
          <span>Tamil (97.9%)</span>
        </div>
      </div>
    </div>
  );
};

