"use client";

import React, { useState } from "react";
import { X, Send, Terminal, Sparkles, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";

interface WhatsAppSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhatsAppSimulatorModal: React.FC<WhatsAppSimulatorModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [inputText, setInputText] = useState(
    "Need 32ft MXL Container from Peenya, Bengaluru to Bhiwandi, Maharashtra tomorrow 2 PM. Cargo: 14 MT Pharmaceutical goods. Target rate is 52k."
  );

  const [simulatedResult, setSimulatedResult] = useState<{
    origin: string;
    destination: string;
    weight: string;
    truck: string;
    rate: string;
    margin: string;
    status: string;
    rfqDraft: string;
  } | null>(null);

  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const handleSimulate = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setSimulatedResult({
        origin: "Peenya, Bengaluru (KA)",
        destination: "Bhiwandi, Maharashtra (MH)",
        weight: "14.0 MT",
        truck: "32ft MXL Container (Multi-Axle)",
        rate: "₹52,000.00",
        margin: "₹7,000.00 (13.5% - Safe)",
        status: "RFQ_DISPATCHED",
        rfqDraft:
          "Namaste Ramesh Sharma Ji (Sharma Road Carriers), urgent confirmed load available: Peenya, BLR ➔ Bhiwandi, MH | 14 MT Pharma (32ft MXL). Reply with best freight quote.",
      });
    }, 600);
  };

  const samplePresets = [
    {
      label: "Hinglish Complete (Peenya ➔ Bhiwandi)",
      text: "Need 32ft MXL Container from Peenya, Bengaluru to Bhiwandi, Maharashtra tomorrow 2 PM. Cargo: 14 MT Pharmaceutical goods. Target rate is 52k.",
    },
    {
      label: "Kannada (ಪೀಣ್ಯದಿಂದ ಹುಬ್ಬಳ್ಳಿಗೆ ೧೬ ಟನ್)",
      text: "ನಾಳೆ ಬೆಳಗ್ಗೆ ಪೀಣ್ಯದಿಂದ ಹುಬ್ಬಳ್ಳಿಗೆ ೧೬ ಟನ್ ಕಬ್ಬಿಣದ ರಾಡ್ ಲೋಡ್ ಇದೆ. ೧೦ ಚಕ್ರ ಟಾರಸ್ ಬೇಕು. ರೇಟ್ ೩೫,೦೦೦.",
    },
    {
      label: "Incomplete Inquiry (Missing Weight)",
      text: "Need truck from Whitefield to Hyderabad tomorrow evening for machinery parts.",
    },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white border border-neutral-200 w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-neutral-50">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-[#ff462d]/10 text-[#ff462d] rounded-lg">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-sans text-base font-bold text-neutral-900">
                WhatsApp Inbound AI Simulator
              </h3>
              <p className="font-mono text-[11px] text-neutral-500">
                Test real-time parsing, entity extraction, and RFQ generation
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="p-2 text-neutral-400 hover:text-neutral-900 rounded-lg hover:bg-neutral-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex flex-col gap-5">
          {/* Preset Buttons */}
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[11px] text-neutral-500 uppercase font-semibold">
              Quick Test Presets:
            </span>
            <div className="flex flex-wrap gap-2">
              {samplePresets.map((preset, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setInputText(preset.text);
                    setSimulatedResult(null);
                  }}
                  type="button"
                  className="px-3 py-1.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 text-neutral-800 font-mono text-[11px] transition-all"
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          {/* Input Box */}
          <div className="flex flex-col gap-2">
            <label className="font-mono text-[11px] text-neutral-500 uppercase font-semibold">
              Simulated WhatsApp Message / Voice Transcript:
            </label>
            <textarea
              rows={3}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="w-full p-3.5 bg-neutral-50 border border-neutral-200 rounded-xl font-sans text-sm text-neutral-900 focus:outline-none focus:border-[#ff462d] focus:bg-white transition-all shadow-inner"
              placeholder="Type or paste any informal WhatsApp message here in Hindi, Hinglish, Kannada, or English..."
            />
          </div>

          {/* Trigger Button */}
          <div className="flex justify-end">
            <button
              onClick={handleSimulate}
              disabled={isProcessing}
              type="button"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-mono text-xs font-bold transition-all active:scale-95 shadow-md"
            >
              {isProcessing ? (
                <>
                  <Sparkles className="w-4 h-4 text-[#ff462d] animate-spin" />
                  <span>Parsing Multilingual Entities...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 text-[#ff462d]" />
                  <span>Run Agent Intake Pipeline</span>
                </>
              )}
            </button>
          </div>

          {/* Results Inspector */}
          {simulatedResult && (
            <div className="p-4 bg-emerald-50/50 border border-emerald-200 rounded-xl flex flex-col gap-3 animate-fadeIn">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-emerald-800 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Harness Engine Parsed Successfully
                </span>
                <span className="font-mono text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">
                  State: {simulatedResult.status}
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 bg-white p-3 rounded-lg border border-emerald-200/80 font-mono text-[11px]">
                <div>
                  <span className="text-neutral-400 block">Origin:</span>
                  <span className="font-bold text-neutral-900">{simulatedResult.origin}</span>
                </div>
                <div>
                  <span className="text-neutral-400 block">Destination:</span>
                  <span className="font-bold text-neutral-900">{simulatedResult.destination}</span>
                </div>
                <div>
                  <span className="text-neutral-400 block">Payload Weight:</span>
                  <span className="font-bold text-neutral-900">{simulatedResult.weight}</span>
                </div>
                <div>
                  <span className="text-neutral-400 block">Truck Classification:</span>
                  <span className="font-bold text-neutral-900">{simulatedResult.truck}</span>
                </div>
                <div>
                  <span className="text-neutral-400 block">Target Customer Rate:</span>
                  <span className="font-bold text-neutral-900">{simulatedResult.rate}</span>
                </div>
                <div>
                  <span className="text-neutral-400 block">Projected Margin:</span>
                  <span className="font-bold text-emerald-700">{simulatedResult.margin}</span>
                </div>
              </div>

              <div className="bg-white p-3 rounded-lg border border-emerald-200/80">
                <span className="font-mono text-[10px] text-neutral-400 uppercase font-semibold block mb-1">
                  Dispatched WhatsApp RFQ Broadcast Draft:
                </span>
                <p className="font-sans text-xs text-neutral-800 italic leading-relaxed">
                  &quot;{simulatedResult.rfqDraft}&quot;
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

