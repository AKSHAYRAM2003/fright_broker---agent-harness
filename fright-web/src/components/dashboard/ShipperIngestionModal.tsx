"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  Sparkles,
  Truck,
  ArrowRight,
  Send,
  AlertTriangle,
  CheckCircle2,
  Building2,
  FileText,
  Clock,
  RotateCcw,
  Zap,
} from "lucide-react";

interface ShipperIngestionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDispatchSuccess?: (loadData: any) => void;
}

interface ParsedSpecs {
  isComplete: boolean;
  shipperName: string;
  origin: string;
  originHub: string;
  destination: string;
  destinationHub: string;
  distanceKm: string;
  weightTonnes: number | null;
  materialType: string;
  vehicleCategory: string;
  vehicleDisplay: string;
  targetRateInr: number | null;
  missingFields: string[];
  clarificationDraft?: string;
  matchedCarriers: Array<{
    id: string;
    name: string;
    rating: number;
    phone: string;
    fleetCount: string;
    verified: boolean;
    previewRfq: string;
  }>;
}

const PRESETS = [
  {
    id: "jsw_bhw",
    label: "JSW Steel (Peenya ➔ Bhiwandi)",
    badge: "Steel • 21 MT",
    text: "Urgent load: 21 MT Steel Coils from Peenya Depot #04 Bengaluru to Bhiwandi Logistics Park, Mumbai tomorrow morning 6 AM. Need 40ft Multi-Axle Trailer. Target budget is 50,000 all inclusive.",
  },
  {
    id: "pharma_hyd",
    label: "Micro Labs (Peenya ➔ Hyderabad)",
    badge: "Pharma • 14 MT",
    text: "Namaste team, need 32ft MXL Closed Container for 14 MT pharmaceutical formulations. Pickup from Peenya Pharma Cold Hub to Cherlapally SEZ Hyderabad tomorrow 2 PM. PO rate approved at ₹45,000.",
  },
  {
    id: "incomplete",
    label: "Incomplete Inquiry (Missing Weight & Body)",
    badge: "Action Required",
    text: "Need truck from Bommasandra Industrial to Changodar Ahmedabad placement tomorrow 6 AM. Material: machinery components. Target 55k.",
  },
  {
    id: "kannada",
    label: "Kannada Vernacular (ಪೀಣ್ಯ ➔ ಹುಬ್ಬಳ್ಳಿ)",
    badge: "Kannada Dialect",
    text: "ನಾಳೆ ಬೆಳಗ್ಗೆ ಪೀಣ್ಯದಿಂದ ಹುಬ್ಬಳ್ಳಿಗೆ ೧೬ ಟನ್ ಕಬ್ಬಿಣದ ರಾಡ್ ಲೋಡ್ ಇದೆ. ೧೦ ಚಕ್ರ ಟಾರಸ್ ಬೇಕು. ರೇಟ್ ೩೫,೦೦೦.",
  },
];

export const ShipperIngestionModal: React.FC<ShipperIngestionModalProps> = ({
  isOpen,
  onClose,
  onDispatchSuccess,
}) => {
  const [inputText, setInputText] = useState(PRESETS[0].text);
  const [isParsing, setIsParsing] = useState(false);
  const [parsedResult, setParsedResult] = useState<ParsedSpecs | null>(null);
  const [dispatchedSuccess, setDispatchedSuccess] = useState(false);

  // Auto-parse initial preset on open
  useEffect(() => {
    if (isOpen) {
      handleParse(inputText);
    } else {
      setDispatchedSuccess(false);
    }
  }, [isOpen]);

  const handleSelectPreset = (presetText: string) => {
    setInputText(presetText);
    handleParse(presetText);
  };

  const handleParse = (text: string) => {
    setIsParsing(true);
    setParsedResult(null);

    setTimeout(() => {
      setIsParsing(false);
      const lower = text.toLowerCase();

      // Check if incomplete
      if (lower.includes("bommasandra") || lower.includes("machinery components") || (!lower.includes("mt") && !lower.includes("ಟನ್") && !lower.includes("ton"))) {
        setParsedResult({
          isComplete: false,
          shipperName: "Micro Labs Logistics Ltd",
          origin: "Bengaluru",
          originHub: "Bommasandra Industrial",
          destination: "Ahmedabad",
          destinationHub: "Changodar Logistics Park",
          distanceKm: "1,480 km",
          weightTonnes: null,
          materialType: "Machinery Components",
          vehicleCategory: "UNKNOWN",
          vehicleDisplay: "Unspecified Truck Category",
          targetRateInr: 55000,
          missingFields: ["Total MT Weight", "Truck Category (Closed Container vs. Open)"],
          clarificationDraft:
            "Namaste Micro Labs logistics team, please confirm the total MT weight and whether container closed body is mandatory for tomorrow's Ahmedabad indent? Fast indents waiting.",
          matchedCarriers: [],
        });
        return;
      }

      // Check Kannada or Hubballi
      if (lower.includes("ಹುಬ್ಬಳ್ಳಿ") || lower.includes("hubli") || lower.includes("೧೬")) {
        setParsedResult({
          isComplete: true,
          shipperName: "Kirloskar Ferrous Industries",
          origin: "Bengaluru",
          originHub: "Peenya Industrial Area",
          destination: "Hubballi",
          destinationHub: "Tarihal Industrial Estate",
          distanceKm: "410 km",
          weightTonnes: 16.0,
          materialType: "Steel Rods / Billets",
          vehicleCategory: "HCV_10W_TAURUS",
          vehicleDisplay: "10-Wheeler Taurus (16T)",
          targetRateInr: 35000,
          missingFields: [],
          matchedCarriers: [
            {
              id: "sb",
              name: "Sri Balaji Roadlines",
              rating: 4.8,
              phone: "+91 94481 04921",
              fleetCount: "10x Taurus",
              verified: true,
              previewRfq:
                "Namaste Balaji Naidu Ji (Sri Balaji Roadlines), urgent confirmed load: Peenya, BLR ➔ Hubballi | 16 MT Steel Rods (10W Taurus). Loading tomorrow 08:00 AM. Best freight rate please reply.",
            },
            {
              id: "km",
              name: "Karnataka-Maharashtra Freightways",
              rating: 4.8,
              phone: "+91 97412 88201",
              fleetCount: "8x Taurus",
              verified: true,
              previewRfq:
                "Namaste Vinod Patil Ji (KM Freightways), confirmed load: Peenya, BLR ➔ Hubballi | 16 MT Steel Rods (10W Taurus). Reply with rate & driver availability.",
            },
          ],
        });
        return;
      }

      // Check Hyderabad
      if (lower.includes("hyderabad") || lower.includes("cherlapally") || lower.includes("pharma")) {
        setParsedResult({
          isComplete: true,
          shipperName: "Micro Labs Ltd (Pharma Division)",
          origin: "Bengaluru",
          originHub: "Peenya Pharma Cold Hub",
          destination: "Hyderabad",
          destinationHub: "Cherlapally Pharma SEZ",
          distanceKm: "575 km",
          weightTonnes: 14.0,
          materialType: "Pharmaceutical Goods",
          vehicleCategory: "CONTAINER_32_MXL",
          vehicleDisplay: "32ft MXL Closed Container",
          targetRateInr: 45000,
          missingFields: [],
          matchedCarriers: [
            {
              id: "sb",
              name: "Sri Balaji Roadlines",
              rating: 4.8,
              phone: "+91 94481 04921",
              fleetCount: "24x 32ft MXL",
              verified: true,
              previewRfq:
                "Namaste Balaji Naidu Ji (Sri Balaji Roadlines), urgent pharma indent: Peenya, BLR ➔ Cherlapally, HYD | 14 MT Pharma (32ft MXL Container). Loading tomorrow 02:00 PM. Best quote please.",
            },
            {
              id: "nr",
              name: "Navata Road Transport",
              rating: 4.9,
              phone: "+91 98480 11923",
              fleetCount: "22x 32ft MXL",
              verified: true,
              previewRfq:
                "Namaste K. Venkat Rao Ji (Navata Road Transport), urgent load: Peenya ➔ Hyderabad | 14 MT (32ft MXL). Target ₹45k. Confirm availability.",
            },
          ],
        });
        return;
      }

      // Default: JSW Steel (Peenya to Bhiwandi 40ft Trailer)
      setParsedResult({
        isComplete: true,
        shipperName: "JSW Steel Ltd (Depot #04)",
        origin: "Bengaluru",
        originHub: "Peenya Industrial Area",
        destination: "Bhiwandi / Mumbai",
        destinationHub: "MH Bhiwandi Logistics Park",
        distanceKm: "980 km (NH 48)",
        weightTonnes: 21.0,
        materialType: "Cold Rolled Steel Coils",
        vehicleCategory: "HCV_MULTI_AXLE",
        vehicleDisplay: "40ft Multi-Axle Trailer (21-28T)",
        targetRateInr: 50000,
        missingFields: [],
        matchedCarriers: [
          {
            id: "gp",
            name: "Ghatge Patil Transports",
            rating: 4.9,
            phone: "+91 98450 28192",
            fleetCount: "18x 40ft Trailers",
            verified: true,
            previewRfq:
              "Namaste Ramesh Sharma Ji (Ghatge Patil), urgent confirmed load: Peenya, BLR ➔ Bhiwandi, MH | 21 MT Steel Coils (40ft Trailer). Loading tomorrow 06:00 AM. Please reply with best freight quote.",
          },
          {
            id: "km",
            name: "Karnataka-Maharashtra Freightways",
            rating: 4.8,
            phone: "+91 97412 88201",
            fleetCount: "14x 40ft Trailers",
            verified: true,
            previewRfq:
              "Namaste Vinod Patil Ji (KM Freightways), confirmed load: Peenya, BLR ➔ Bhiwandi, MH | 21 MT Steel (40ft Trailer). Loading tomorrow 06:00 AM. Please mention freight and tolls terms.",
          },
          {
            id: "pi",
            name: "Patel Integrated Logistics",
            rating: 4.7,
            phone: "+91 98201 44520",
            fleetCount: "32x Trailers",
            verified: true,
            previewRfq:
              "Namaste Jignesh Patel Ji (Patel Integrated), 40ft trailer needed: Peenya, BLR ➔ Bhiwandi, MH | 21 MT Steel. Loading tomorrow morning. Reply with rate.",
          },
        ],
      });
    }, 450);
  };

  const handleDispatch = () => {
    if (!parsedResult) return;
    setDispatchedSuccess(true);
    setTimeout(() => {
      onDispatchSuccess?.(parsedResult);
      onClose();
    }, 1200);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white border border-[#dfdbd5] w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-[#eae7e1] bg-[#f7f6f4]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-[#fef2f0] text-[#be3420] rounded-lg border border-[#be3420]/25">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-sans text-base font-bold text-[#070707]">
                  Inbound Shipper Load Ingestion
                </h3>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white text-[#be3420] border border-[#be3420]/25 font-bold uppercase">
                  AI Auto-Match Engine
                </span>
              </div>
              <p className="font-mono text-[11px] text-[#78716c]">
                Paste raw WhatsApp text / audio note ➔ Extract specs ➔ Query Transporter Fleet ➔ Broadcast RFQ
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

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex flex-col gap-4 text-xs">
          {/* Quick Preset Buttons */}
          <div className="flex flex-col gap-1.5">
            <span className="font-mono text-[10px] text-[#78716c] uppercase font-semibold">
              Select Real-World Test Indent Presets:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {PRESETS.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => handleSelectPreset(p.text)}
                  className="p-2.5 text-left rounded-xl border border-[#eae7e1] bg-white hover:border-[#be3420]/40 hover:bg-[#fef2f0]/20 transition-all flex flex-col justify-between group shadow-2xs"
                >
                  <span className="font-sans text-xs font-bold text-[#070707] group-hover:text-[#be3420] truncate">
                    {p.label}
                  </span>
                  <span className="font-mono text-[10px] text-[#78716c] mt-1 bg-[#f7f6f4] px-1.5 py-0.5 rounded border border-[#dfdbd5] inline-block w-fit">
                    {p.badge}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Raw Text Input Area */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label className="font-mono text-[10px] font-semibold uppercase text-[#070707]">
                Raw Shipper Message (WhatsApp Text / Voice Note Transcription):
              </label>
              <button
                type="button"
                onClick={() => handleParse(inputText)}
                className="text-[#be3420] font-mono text-[11px] font-bold flex items-center gap-1 hover:underline"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Re-parse with AI</span>
              </button>
            </div>
            <textarea
              rows={3}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Paste raw WhatsApp load message here..."
              className="w-full p-3 rounded-xl border border-[#dfdbd5] bg-[#f7f6f4] text-[#070707] font-sans text-xs leading-relaxed focus:outline-none focus:border-[#be3420] focus:bg-white transition-all shadow-inner"
            />
          </div>

          {/* AI Parsing & Fleet Sourcing Results */}
          {isParsing ? (
            <div className="py-12 flex flex-col items-center justify-center gap-2.5">
              <div className="w-7 h-7 border-2 border-[#be3420] border-t-transparent rounded-full animate-spin"></div>
              <span className="font-mono text-xs text-[#78716c]">
                Analyzing freight terminology, extracting entities &amp; querying Transporter Directory...
              </span>
            </div>
          ) : parsedResult ? (
            <div className="flex flex-col gap-3.5 pt-1 animate-fadeIn">
              {/* Extracted Entity Specs Strip */}
              <div className="p-3.5 bg-[#f7f6f4] rounded-xl border border-[#eae7e1] flex flex-col gap-2.5">
                <div className="flex items-center justify-between border-b border-[#dfdbd5] pb-2">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#059669] text-base">verified</span>
                    <span className="font-mono text-xs font-bold text-[#070707]">
                      AI Extracted Specifications: {parsedResult.shipperName}
                    </span>
                  </div>
                  {parsedResult.isComplete ? (
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#ecfdf5] text-[#059669] border border-[#a7f3d0] font-bold">
                      READY TO BROADCAST
                    </span>
                  ) : (
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#fffbeb] text-[#d97706] border border-[#fde68a] font-bold flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      MISSING SPECIFICATIONS
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  <div className="p-2 bg-white rounded-lg border border-[#dfdbd5]">
                    <span className="font-mono text-[10px] text-[#78716c] block">Origin Hub</span>
                    <span className="font-sans text-xs font-bold text-[#070707]">{parsedResult.originHub}</span>
                    <span className="font-mono text-[10px] text-[#78716c] block">{parsedResult.distanceKm}</span>
                  </div>

                  <div className="p-2 bg-white rounded-lg border border-[#dfdbd5]">
                    <span className="font-mono text-[10px] text-[#78716c] block">Destination Hub</span>
                    <span className="font-sans text-xs font-bold text-[#070707]">{parsedResult.destinationHub}</span>
                    <span className="font-mono text-[10px] text-[#78716c] block">{parsedResult.destination}</span>
                  </div>

                  <div className="p-2 bg-white rounded-lg border border-[#dfdbd5]">
                    <span className="font-mono text-[10px] text-[#78716c] block">Cargo &amp; Weight</span>
                    <span className="font-sans text-xs font-bold text-[#070707]">
                      {parsedResult.weightTonnes ? `${parsedResult.weightTonnes} MT` : "⚠️ Unspecified"}
                    </span>
                    <span className="font-mono text-[10px] text-[#78716c] block truncate">{parsedResult.materialType}</span>
                  </div>

                  <div className="p-2 bg-white rounded-lg border border-[#dfdbd5]">
                    <span className="font-mono text-[10px] text-[#78716c] block">Shipper Target Budget</span>
                    <span className="font-sans text-xs font-bold text-[#059669]">
                      {parsedResult.targetRateInr ? `₹${parsedResult.targetRateInr.toLocaleString("en-IN")}` : "Spot Market"}
                    </span>
                    <span className="font-mono text-[10px] text-[#78716c] block">{parsedResult.vehicleDisplay}</span>
                  </div>
                </div>
              </div>

              {/* Case 1: Incomplete Inquiry Clarification */}
              {!parsedResult.isComplete && (
                <div className="p-3.5 bg-[#fffbeb] rounded-xl border border-[#fde68a] flex flex-col gap-2">
                  <div className="flex items-center gap-1.5 text-[#d97706] font-mono text-xs font-bold">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Incomplete Load Clarification Guardrail Triggered</span>
                  </div>
                  <p className="text-[#070707] leading-relaxed">
                    Bidding on incomplete tonnage creates transporter disputes. The agent generated this polite clarification draft to send back to the shipper:
                  </p>
                  <div className="p-2.5 bg-white rounded-lg border border-[#fde68a] text-xs italic text-[#57534e]">
                    &quot;{parsedResult.clarificationDraft}&quot;
                  </div>
                </div>
              )}

              {/* Case 2: Complete Load - Matched Transporters from Directory */}
              {parsedResult.isComplete && (
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] font-bold uppercase text-[#070707]">
                      Candidate Transporters Matched from Private Directory ({parsedResult.matchedCarriers.length} Carriers):
                    </span>
                    <span className="font-mono text-[10px] text-[#059669] font-medium">
                      Lane Filter: {parsedResult.origin} ➔ {parsedResult.destination}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {parsedResult.matchedCarriers.map((c) => (
                      <div
                        key={c.id}
                        className="p-3 bg-white rounded-xl border border-[#eae7e1] hover:border-[#be3420]/40 transition-all flex flex-col justify-between shadow-2xs"
                      >
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="font-sans text-xs font-bold text-[#070707]">{c.name}</span>
                            <span className="font-mono text-[10px] text-[#059669] font-bold">{c.rating}★</span>
                          </div>
                          <div className="flex items-center gap-2 mt-1 font-mono text-[10px] text-[#78716c]">
                            <span>{c.phone}</span>
                            <span>•</span>
                            <span className="text-[#be3420] font-semibold">{c.fleetCount}</span>
                          </div>
                          <div className="mt-2 p-2 bg-[#f7f6f4] rounded-lg border border-[#eae7e1] font-mono text-[10px] text-[#57534e] line-clamp-3 leading-relaxed">
                            {c.previewRfq}
                          </div>
                        </div>

                        <div className="mt-2.5 pt-2 border-t border-[#eae7e1] flex items-center justify-between font-mono text-[9px] text-[#059669]">
                          <span className="flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" /> VAHAN Verified
                          </span>
                          <span className="text-[#78716c]">WhatsApp Ready</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : null}
        </div>

        {/* Modal Footer */}
        <div className="px-5 sm:px-6 py-3.5 bg-[#f7f6f4] border-t border-[#dfdbd5] flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="h-9 px-4 bg-white hover:bg-[#eae7e1] text-[#070707] text-xs font-semibold rounded-lg border border-[#dfdbd5] transition-colors"
          >
            Cancel
          </button>

          {parsedResult?.isComplete ? (
            <button
              type="button"
              disabled={dispatchedSuccess}
              onClick={handleDispatch}
              className={`h-9 px-5 rounded-lg font-mono text-xs font-semibold flex items-center gap-1.5 shadow-2xs transition-all active:scale-95 ${
                dispatchedSuccess
                  ? "bg-[#ecfdf5] text-[#047857] border border-[#a7f3d0]"
                  : "bg-white hover:bg-[#f7f6f4] text-[#18181b] border border-[#d6d3cd] hover:border-[#18181b]"
              }`}
            >
              {dispatchedSuccess ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-[#047857]" />
                  <span>RFQs Dispatched to {parsedResult.matchedCarriers.length} Carriers!</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 text-[#be3420]" />
                  <span>Broadcast WhatsApp RFQs ({parsedResult.matchedCarriers.length} Carriers)</span>
                </>
              )}
            </button>
          ) : (
            <button
              type="button"
              onClick={handleDispatch}
              className="h-9 px-5 bg-white hover:bg-[#fffbeb] text-[#b45309] border border-[#fde68a] hover:border-[#b45309] rounded-lg font-mono text-xs font-semibold flex items-center gap-1.5 shadow-2xs transition-all active:scale-95"
            >
              <Send className="w-4 h-4 text-[#b45309]" />
              <span>Send WhatsApp Clarification Draft</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

