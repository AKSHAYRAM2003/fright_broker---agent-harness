"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  X,
  Play,
  Pause,
  RotateCcw,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  CheckCircle2,
  Truck,
  MessageSquare,
  TrendingUp,
  FileCheck,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { StageshowCursor, CursorPosition } from "@/components/stageshow/Cursor";
import { NumberRoll } from "@/components/stageshow/NumberRoll";

interface QueueWalkthroughModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TOTAL_BEATS = 6;

export const QueueWalkthroughModal: React.FC<QueueWalkthroughModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [currentBeat, setCurrentBeat] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState<1 | 1.5 | 2>(1);
  const [cursor, setCursor] = useState<CursorPosition>({
    x: 420,
    y: 280,
    isClicking: false,
    visible: true,
  });

  const stageRef = useRef<HTMLDivElement>(null);

  // Keyboard controls: Space to play/pause, Left/Right arrows to step, Esc to close
  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === " ") {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        handleStep(1);
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        handleStep(-1);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  // Automated progression timer when playing
  useEffect(() => {
    if (!isOpen || !isPlaying) return;

    const beatDurations: Record<number, number> = {
      1: 3200 / speed,
      2: 3000 / speed,
      3: 3400 / speed,
      4: 3600 / speed,
      5: 3800 / speed,
      6: 4500 / speed,
    };

    const timer = setTimeout(() => {
      setCurrentBeat((prev) => (prev >= TOTAL_BEATS ? 1 : prev + 1));
    }, beatDurations[currentBeat] || 3000);

    return () => clearTimeout(timer);
  }, [isOpen, isPlaying, currentBeat, speed]);

  // Choreograph cursor positions per beat
  useEffect(() => {
    if (!isOpen) return;

    if (currentBeat === 1) {
      setCursor({ x: 340, y: 180, isClicking: false, visible: true });
    } else if (currentBeat === 2) {
      setCursor({ x: 480, y: 220, isClicking: false, visible: true });
    } else if (currentBeat === 3) {
      // Hovering & clicking "Broadcast WhatsApp RFQs"
      setCursor({ x: 520, y: 310, isClicking: false, visible: true });
      const clickTimer = setTimeout(() => {
        setCursor({ x: 520, y: 310, isClicking: true, visible: true });
      }, 1400 / speed);
      return () => clearTimeout(clickTimer);
    } else if (currentBeat === 4) {
      setCursor({ x: 380, y: 270, isClicking: false, visible: true });
    } else if (currentBeat === 5) {
      // Hovering & clicking "Counter Transporter @ ₹46,000"
      setCursor({ x: 260, y: 365, isClicking: false, visible: true });
      const clickTimer = setTimeout(() => {
        setCursor({ x: 260, y: 365, isClicking: true, visible: true });
      }, 1600 / speed);
      return () => clearTimeout(clickTimer);
    } else if (currentBeat === 6) {
      // Hovering & clicking "Approve & Book Now (1-Click)"
      setCursor({ x: 220, y: 365, isClicking: false, visible: true });
      const clickTimer = setTimeout(() => {
        setCursor({ x: 220, y: 365, isClicking: true, visible: true });
      }, 1200 / speed);
      return () => clearTimeout(clickTimer);
    }
  }, [currentBeat, isOpen, speed]);

  const handleStep = (direction: number) => {
    setIsPlaying(false);
    setCurrentBeat((prev) => {
      const next = prev + direction;
      if (next < 1) return TOTAL_BEATS;
      if (next > TOTAL_BEATS) return 1;
      return next;
    });
  };

  const handleRestart = () => {
    setCurrentBeat(1);
    setIsPlaying(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-5 bg-black/70 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white border border-[#dfdbd5] w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[94vh]">
        {/* Modal Window Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-3 border-b border-[#eae7e1] bg-[#f7f6f4]">
          <div className="flex items-center gap-2.5">
            {/* macOS Window Controls */}
            <div className="flex items-center gap-1.5 mr-1.5">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-sans text-sm font-bold text-[#070707]">
                  Stageshow: AI Action Queue Walkthrough
                </h3>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white text-[#be3420] border border-[#be3420]/25 font-bold uppercase">
                  Choreographed Simulation
                </span>
              </div>
              <p className="font-mono text-[11px] text-[#78716c]">
                End-to-End Life of a Load: Ingestion ➔ Auto-Matching ➔ Quote ➔ WhatsApp Counter ➔ 1-Click LR
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="p-1.5 text-[#78716c] hover:text-[#070707] rounded-lg hover:bg-[#eae7e1] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 6-Beat Step Progress Indicator */}
        <div className="grid grid-cols-6 border-b border-[#eae7e1] bg-[#fcfbf9] text-[10px] font-mono">
          {[
            { num: 1, label: "1. Intake" },
            { num: 2, label: "2. Entity Parse" },
            { num: 3, label: "3. Fleet Match" },
            { num: 4, label: "4. Quote Bidding" },
            { num: 5, label: "5. Auto-Counter" },
            { num: 6, label: "6. LR Booked" },
          ].map((step) => {
            const isActive = currentBeat === step.num;
            const isCompleted = currentBeat > step.num;

            return (
              <button
                key={step.num}
                type="button"
                onClick={() => {
                  setCurrentBeat(step.num);
                  setIsPlaying(false);
                }}
                className={`py-2 px-1 text-center border-r border-[#eae7e1] last:border-r-0 transition-all flex flex-col items-center gap-0.5 ${
                  isActive
                    ? "bg-white text-[#be3420] font-bold border-b-2 border-b-[#be3420]"
                    : isCompleted
                    ? "text-[#047857] hover:bg-[#eae7e1]/50"
                    : "text-[#78716c] hover:bg-[#eae7e1]/50"
                }`}
              >
                <div className="flex items-center gap-1">
                  {isCompleted && <CheckCircle2 className="w-3 h-3 text-[#047857]" />}
                  <span>{step.label}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Stageshow Canvas Stage */}
        <div
          ref={stageRef}
          className="relative bg-[#f9f8f6] p-5 sm:p-7 min-h-[420px] flex flex-col justify-center overflow-hidden select-none"
        >
          {/* Animated Cursor */}
          <StageshowCursor
            x={cursor.x}
            y={cursor.y}
            isClicking={cursor.isClicking}
            visible={cursor.visible}
          />

          {/* BEAT 1: Inbound WhatsApp Indent Message */}
          {currentBeat === 1 && (
            <div className="flex flex-col gap-3 max-w-xl mx-auto w-full animate-fadeIn">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#78716c] font-semibold uppercase flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4 text-[#047857]" />
                  Shipper Inbound (WhatsApp Direct)
                </span>
                <span className="font-mono text-[10px] text-[#047857] bg-[#ecfdf5] px-2 py-0.5 rounded border border-[#a7f3d0] font-bold">
                  Just now
                </span>
              </div>

              {/* WhatsApp Bubble Simulation */}
              <div className="bg-[#e7fedb] border border-[#bbf7a3] p-4 rounded-2xl rounded-tl-none shadow-xs text-xs text-[#070707] leading-relaxed font-sans">
                <p className="font-semibold text-[#047857] text-[11px] mb-1">
                  Vikram Singhania • JSW Steel Depot #04
                </p>
                &quot;Urgent load: 21 MT Steel Coils from Peenya Depot #04 Bengaluru to Bhiwandi Logistics Park, Mumbai tomorrow morning 6 AM. Need 40ft Multi-Axle Trailer. Target budget is 50,000 all inclusive.&quot;
              </div>

              <div className="flex items-center justify-between text-mono text-[11px] text-[#78716c] pt-2">
                <span>Inbound Hook: `whatsapp://webhook/inbound`</span>
                <span className="text-[#be3420] font-semibold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> AI Parsing Triggered...
                </span>
              </div>
            </div>
          )}

          {/* BEAT 2: AI Parsing & Entity Extraction */}
          {currentBeat === 2 && (
            <div className="flex flex-col gap-3.5 max-w-2xl mx-auto w-full animate-fadeIn">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#be3420] font-bold uppercase flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#be3420]" />
                  AI Entity Extraction &amp; Validation
                </span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white text-[#047857] border border-[#a7f3d0] font-bold">
                  100% Complete (0 Missing)
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className="p-3 bg-white rounded-xl border border-[#dfdbd5] shadow-2xs">
                  <span className="font-mono text-[10px] text-[#78716c]">Origin Hub</span>
                  <p className="font-bold text-xs text-[#070707] mt-0.5">Peenya, BLR</p>
                  <span className="font-mono text-[10px] text-[#047857]">KA Depot #04</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#dfdbd5] shadow-2xs">
                  <span className="font-mono text-[10px] text-[#78716c]">Destination</span>
                  <p className="font-bold text-xs text-[#070707] mt-0.5">Bhiwandi, MH</p>
                  <span className="font-mono text-[10px] text-[#be3420]">980 km (NH 48)</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#dfdbd5] shadow-2xs">
                  <span className="font-mono text-[10px] text-[#78716c]">Payload &amp; Body</span>
                  <p className="font-bold text-xs text-[#070707] mt-0.5">21 MT Coils</p>
                  <span className="font-mono text-[10px] text-[#78716c]">40ft Trailer</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#dfdbd5] shadow-2xs">
                  <span className="font-mono text-[10px] text-[#78716c]">Target Rate</span>
                  <p className="font-bold text-sm text-[#047857] mt-0.5">₹50,000</p>
                  <span className="font-mono text-[10px] text-[#78716c]">₹2,380 / MT</span>
                </div>
              </div>

              <div className="p-3 bg-[#fef2f0] border border-[#fecaca] rounded-xl flex items-center justify-between text-xs font-mono">
                <span className="text-[#be3420] font-semibold">Matched Corridors: Bengaluru ➔ Mumbai (NH 48)</span>
                <span className="text-[#070707]">Querying 15 Carrier Fleets...</span>
              </div>
            </div>
          )}

          {/* BEAT 3: Fleet Matching & Automated RFQ Broadcast */}
          {currentBeat === 3 && (
            <div className="flex flex-col gap-3 max-w-2xl mx-auto w-full animate-fadeIn">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#070707] font-bold uppercase flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-[#be3420]" />
                  Transporter Fleet Auto-Match (Top 3 Carriers)
                </span>
                <span className="font-mono text-[10px] text-[#047857] bg-[#ecfdf5] px-2 py-0.5 rounded border border-[#a7f3d0] font-bold">
                  All VAHAN &amp; FASTag Verified
                </span>
              </div>

              <div className="flex flex-col gap-2">
                {[
                  { name: "Ghatge Patil Transports", fleet: "18x 40ft Trailers", rating: "4.9★", phone: "+91 98450 28192" },
                  { name: "Karnataka-Maharashtra Freightways", fleet: "14x Trailers", rating: "4.8★", phone: "+91 97412 88201" },
                  { name: "Patel Integrated Logistics", fleet: "32x Trailers", rating: "4.7★", phone: "+91 98201 44520" },
                ].map((c, i) => (
                  <div
                    key={i}
                    className="p-2.5 bg-white rounded-lg border border-[#dfdbd5] flex items-center justify-between text-xs"
                  >
                    <div className="flex flex-col">
                      <span className="font-bold text-[#070707]">{c.name}</span>
                      <span className="font-mono text-[10px] text-[#78716c]">{c.phone} • {c.fleet}</span>
                    </div>
                    <span className="font-mono text-[10px] text-[#047857] font-semibold bg-[#ecfdf5] px-2 py-0.5 rounded">
                      {c.rating} Affinity Match
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  id="target-broadcast"
                  className={`px-5 py-2.5 rounded-lg font-mono text-xs font-semibold shadow-2xs flex items-center gap-2 transition-all ${
                    cursor.isClicking
                      ? "bg-[#047857] text-white scale-95"
                      : "bg-[#be3420] text-white"
                  }`}
                >
                  <Truck className="w-4 h-4" />
                  <span>Broadcast WhatsApp RFQs (3 Carriers)</span>
                </button>
              </div>
            </div>
          )}

          {/* BEAT 4: Inbound Transporter Quote & Margin Synthesis */}
          {currentBeat === 4 && (
            <div className="flex flex-col gap-3 max-w-2xl mx-auto w-full animate-fadeIn">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#be3420] font-bold uppercase flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-[#be3420]" />
                  Inbound Quote Received: Ghatge Patil Transports
                </span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#fef3c7] text-[#b45309] border border-[#fde68a] font-bold">
                  SLA: 07:44 remaining
                </span>
              </div>

              {/* 4 Financial Blocks with Rolling Numbers */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 bg-white p-3.5 rounded-xl border border-[#dfdbd5] shadow-2xs">
                <div>
                  <span className="font-mono text-[10px] text-[#78716c]">Shipper Target</span>
                  <p className="font-headline-sm text-sm text-[#070707] font-bold mt-0.5">₹50,000</p>
                  <span className="font-mono text-[10px] text-[#78716c]">₹2,380 / MT</span>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#78716c]">Transporter Quote</span>
                  <p className="font-headline-sm text-sm text-[#070707] font-bold mt-0.5">₹48,500</p>
                  <span className="font-mono text-[10px] text-[#78716c]">Ghatge Patil</span>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#be3420] font-semibold">Net Margin</span>
                  <p className="font-headline-sm text-sm text-[#be3420] font-bold mt-0.5">
                    <NumberRoll value={1500} prefix="₹" /> (3.0%)
                  </p>
                  <span className="font-mono text-[10px] text-[#be3420] font-bold">-₹1,000 vs Floor</span>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#78716c]">Market Benchmark</span>
                  <p className="font-headline-sm text-sm text-[#047857] font-bold mt-0.5">₹47,200</p>
                  <span className="font-mono text-[10px] text-[#047857]">94% Confidence</span>
                </div>
              </div>

              {/* AI Recommendation Box */}
              <div className="p-3 bg-[#fef2f0] border border-[#fecaca] rounded-lg text-xs leading-relaxed text-[#070707]">
                <strong className="text-[#be3420]">AI Recommendation: </strong>
                Ghatge Patil quoted ₹48,500 citing fuel hike. Historical negotiation engine indicates an{" "}
                <span className="font-bold text-[#047857] bg-white px-1 py-0.5 rounded border border-[#a7f3d0]">
                  81% probability
                </span>{" "}
                for counter-bid at ₹46,000 on this lane within 12 minutes.
              </div>
            </div>
          )}

          {/* BEAT 5: Automated WhatsApp Counter Negotiation */}
          {currentBeat === 5 && (
            <div className="flex flex-col gap-3 max-w-2xl mx-auto w-full animate-fadeIn">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#047857] font-bold uppercase flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4 text-[#047857]" />
                  WhatsApp Counter Negotiation Stream
                </span>
                <span className="font-mono text-[10px] text-[#047857] bg-[#ecfdf5] px-2 py-0.5 rounded border border-[#a7f3d0] font-bold">
                  Counter Accepted
                </span>
              </div>

              <div className="flex flex-col gap-2">
                {/* Outbound counter */}
                <div className="self-end max-w-md bg-white border border-[#eae7e1] p-3 rounded-xl rounded-tr-none text-xs text-[#070707] shadow-2xs font-mono">
                  <span className="text-[10px] text-[#be3420] font-bold block mb-0.5">Broker Desk ➔ Ghatge Patil:</span>
                  &quot;Target rate approved for this trip is ₹46,000 all inclusive. Confirm if vehicle KA-04-MF-5678 can place at 6 AM.&quot;
                </div>

                {/* Inbound acceptance */}
                <div className="self-start max-w-md bg-[#e7fedb] border border-[#bbf7a3] p-3 rounded-xl rounded-tl-none text-xs text-[#070707] shadow-2xs font-sans">
                  <span className="text-[10px] text-[#047857] font-bold block mb-0.5">Ghatge Patil Transports:</span>
                  &quot;Theek hai sir, ₹46,500 mein deal finalize karo, gaadi confirm 6 AM Peenya depot pe laga denge. Driver Suresh Y. details sent.&quot;
                </div>
              </div>

              {/* Recalculated Margin Roller */}
              <div className="p-3 bg-white rounded-xl border border-[#a7f3d0] flex items-center justify-between text-xs shadow-2xs">
                <span className="font-mono text-[#78716c]">Negotiated Margin Gain:</span>
                <div className="flex items-center gap-2">
                  <span className="line-through text-[#78716c] font-mono">₹1,500 (3.0%)</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#047857]" />
                  <span className="font-bold text-[#047857] font-mono text-sm">
                    <NumberRoll value={3500} prefix="₹" /> (7.0%)
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* BEAT 6: 1-Click Fast-Track Booking & Digital LR Issued */}
          {currentBeat === 6 && (
            <div className="flex flex-col gap-3.5 max-w-2xl mx-auto w-full animate-fadeIn">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#047857] font-bold uppercase flex items-center gap-1.5">
                  <FileCheck className="w-4 h-4 text-[#047857]" />
                  Trip Confirmed • Digital Lorry Receipt Generated
                </span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#ecfdf5] text-[#047857] border border-[#a7f3d0] font-bold">
                  FSM: ASSIGNED &amp; LOCKED
                </span>
              </div>

              {/* Official Digital LR Slip Preview */}
              <div className="bg-white border-2 border-[#a7f3d0] rounded-xl p-4 shadow-sm flex flex-col gap-3">
                <div className="flex items-center justify-between border-b border-[#eae7e1] pb-2.5">
                  <div>
                    <span className="font-mono text-[10px] text-[#78716c]">Official Lorry Receipt</span>
                    <h4 className="font-mono text-sm font-bold text-[#047857]">LR-2026-BLR-8924</h4>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-[10px] text-[#78716c]">Locked Gross Margin</span>
                    <p className="font-mono text-sm font-bold text-[#047857]">+₹3,500 (7.0%)</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                  <div>
                    <span className="text-[#78716c] text-[10px]">Route:</span>
                    <p className="font-bold text-[#070707]">Peenya ➔ Bhiwandi</p>
                  </div>
                  <div>
                    <span className="text-[#78716c] text-[10px]">Vehicle No:</span>
                    <p className="font-bold text-[#070707]">KA-04-MF-5678</p>
                  </div>
                  <div>
                    <span className="text-[#78716c] text-[10px]">Carrier:</span>
                    <p className="font-bold text-[#070707]">Ghatge Patil</p>
                  </div>
                  <div>
                    <span className="text-[#78716c] text-[10px]">Driver:</span>
                    <p className="font-bold text-[#070707]">Suresh Y. (Verified)</p>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-[#ecfdf5] rounded-lg border border-[#a7f3d0] flex items-center justify-between text-xs font-mono text-[#047857]">
                <span className="flex items-center gap-1.5 font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  Trip synced to Active Dispatch Board &amp; WhatsApp gate pass issued.
                </span>
                <span className="font-bold">Execution complete</span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls Bar */}
        <div className="px-5 sm:px-6 py-3 bg-[#f7f6f4] border-t border-[#dfdbd5] flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Play/Pause & Step Controls */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-3 py-1.5 bg-white hover:bg-[#eae7e1] text-[#070707] font-mono text-xs font-semibold rounded-lg border border-[#dfdbd5] flex items-center gap-1.5 shadow-2xs transition-all active:scale-95"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-[#be3420]" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-[#047857]" />
                  <span>Play</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => handleStep(-1)}
              className="p-1.5 bg-white hover:bg-[#eae7e1] text-[#78716c] hover:text-[#070707] rounded-lg border border-[#dfdbd5]"
              title="Previous Beat"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => handleStep(1)}
              className="p-1.5 bg-white hover:bg-[#eae7e1] text-[#78716c] hover:text-[#070707] rounded-lg border border-[#dfdbd5]"
              title="Next Beat"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={handleRestart}
              className="p-1.5 bg-white hover:bg-[#eae7e1] text-[#78716c] hover:text-[#070707] rounded-lg border border-[#dfdbd5]"
              title="Restart Walkthrough"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          {/* Speed Toggle */}
          <div className="flex items-center gap-1 font-mono text-[11px] bg-white border border-[#dfdbd5] rounded-lg p-0.5">
            {[1, 1.5, 2].map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSpeed(s as 1 | 1.5 | 2)}
                className={`px-2 py-0.5 rounded transition-colors ${
                  speed === s
                    ? "bg-[#be3420] text-white font-bold"
                    : "text-[#78716c] hover:text-[#070707]"
                }`}
              >
                {s}x
              </button>
            ))}
          </div>

          {/* Done / Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 bg-white hover:bg-[#eae7e1] text-[#070707] font-sans font-semibold rounded-lg border border-[#dfdbd5] transition-colors"
          >
            Close Walkthrough
          </button>
        </div>
      </div>
    </div>
  );
};
