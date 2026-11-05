"use client";

import React, { useState, useEffect } from "react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { TopStatsBar } from "@/components/dashboard/TopStatsBar";
import { ActionQueueSection } from "@/components/dashboard/ActionQueueSection";
import { WhatsAppLiveFeed } from "@/components/dashboard/WhatsAppLiveFeed";
import { WhatsAppSimulatorModal } from "@/components/dashboard/WhatsAppSimulatorModal";
import { ShipperIngestionModal } from "@/components/dashboard/ShipperIngestionModal";
import { TransportersView } from "@/components/dashboard/TransportersView";
import { Truck, Filter, ArrowUpDown, CheckCircle2, BellRing, Sparkles, X } from "lucide-react";
import { LoadItem, WhatsAppFeedEvent, DashboardStats, CarrierQuote } from "@/types/load";

const INITIAL_LOADS: LoadItem[] = [
  {
    id: "#BLR-BHW-1042",
    shipperName: "JSW Steel Ltd (Depot #04)",
    shipperPhone: "+91 99001 22810",
    origin: "Bengaluru (Peenya Ind.)",
    originHub: "KA Depot #04",
    destination: "Bhiwandi (Mumbai Hub)",
    destinationHub: "MH Bhiwandi Logistics Park",
    distanceKm: "980 km",
    corridor: "NH 48 Corridor",
    weightTonnes: 21.0,
    materialType: "Cold Rolled Steel Coils",
    vehicleCategory: "HCV_MULTI_AXLE",
    vehicleDisplay: "Multi-Axle Trailer (40ft)",
    targetRateInr: 50000,
    status: "DECISION_REQUIRED",
    slaRemaining: "SLA: 07:44 remaining",
    isMarginFloorAlert: true,
    matchedCarriers: [
      {
        id: "gp",
        name: "Ghatge Patil Transports",
        rating: 4.9,
        phone: "+91 98450 28192",
        fleetCount: "18x 40ft Trailers",
        verified: true,
        previewRfq: "Namaste Ramesh Sharma Ji (Ghatge Patil), urgent confirmed load: Peenya, BLR ➔ Bhiwandi, MH | 21 MT Steel Coils.",
      },
      {
        id: "km",
        name: "Karnataka-Maharashtra Freightways",
        rating: 4.8,
        phone: "+91 97412 88201",
        fleetCount: "14x 40ft Trailers",
        verified: true,
        previewRfq: "Namaste Vinod Patil Ji (KM Freightways), confirmed load: Peenya ➔ Bhiwandi | 21 MT Steel.",
      },
    ],
    bestQuote: {
      carrierId: "gp",
      carrierName: "Ghatge Patil Transports",
      carrierPhone: "+91 98450 28192",
      rating: 4.9,
      quoteInr: 48500,
      vehicleNo: "KA-04-MF-5678",
      driverName: "Suresh Y.",
      driverPhone: "+91 97412 88201",
      receivedAt: "4m ago",
      notes: "Quoted ₹48,500 citing diesel surge in Kolhapur-Pune stretch.",
    },
    netMarginInr: 1500,
    netMarginPct: 3.0,
    spotBenchmarkInr: 47200,
    aiConfidence: "94% AI Confidence",
    aiSynthesis:
      "Ghatge Patil quoted ₹48,500 citing diesel surge in Kolhapur-Pune stretch. Historical negotiation engine indicates an 81% acceptance probability for counter-bid at ₹46,000 on this specific lane within 12 minutes.",
  },
  {
    id: "#BLR-HYD-1039",
    shipperName: "Micro Labs Ltd (Pharma Division)",
    shipperPhone: "+91 98440 99120",
    origin: "Peenya (BLR)",
    originHub: "Pharma Cold Hub",
    destination: "Cherlapally (Hyderabad)",
    destinationHub: "Pharma Special SEZ",
    distanceKm: "575 km",
    corridor: "NH 44 Express",
    weightTonnes: 14.0,
    materialType: "Formulation Goods",
    vehicleCategory: "CONTAINER_32_MXL",
    vehicleDisplay: "32ft MXL Closed Container",
    targetRateInr: 45000,
    status: "DECISION_REQUIRED",
    slaRemaining: "SLA: 14:20 remaining",
    isInstantBookReady: true,
    matchedCarriers: [
      {
        id: "sb",
        name: "Sri Balaji Roadlines",
        rating: 4.9,
        phone: "+91 94481 04921",
        fleetCount: "24x 32ft MXL",
        verified: true,
        previewRfq: "Namaste Balaji Naidu Ji (Sri Balaji Roadlines), urgent pharma indent: Peenya ➔ Cherlapally | 14 MT Pharma.",
      },
    ],
    bestQuote: {
      carrierId: "sb",
      carrierName: "Sri Balaji Roadlines",
      carrierPhone: "+91 94481 04921",
      rating: 4.9,
      quoteInr: 38000,
      vehicleNo: "KA-04-E-8821",
      driverName: "Balaji N.",
      driverPhone: "+91 94481 04921",
      receivedAt: "1m ago",
    },
    netMarginInr: 7000,
    netMarginPct: 15.5,
    spotBenchmarkInr: 42000,
    aiConfidence: "98% On-Time (42 Trips)",
    aiSynthesis:
      "Pre-approved PO rate ₹45,000. Sri Balaji has vehicle KA-04-E-8821 only 12 km away from Peenya gate. 1-Click fast track booking clears immediate placement.",
  },
  {
    id: "#BLR-DEL-1068",
    shipperName: "Tata Motors Ancillaries (Hosur Unit)",
    shipperPhone: "+91 94432 10984",
    origin: "Hosur (Bangalore Border)",
    originHub: "SIPCOT Industrial Complex",
    destination: "Gurgaon (NCR Auto Hub)",
    destinationHub: "Manesar Warehouse Zone",
    distanceKm: "2,140 km",
    corridor: "NH 44 / NH 48 Golden Corridor",
    weightTonnes: 18.5,
    materialType: "Precision Transmission Assemblies",
    vehicleCategory: "HCV_CONTAINER_40_HC",
    vehicleDisplay: "40ft High Cube Container",
    targetRateInr: 86000,
    status: "DECISION_REQUIRED",
    slaRemaining: "SLA: 16:45 remaining",
    isInstantBookReady: true,
    matchedCarriers: [
      {
        id: "vrl",
        name: "VRL Logistics Ltd",
        rating: 4.9,
        phone: "+91 98801 44520",
        fleetCount: "42x 40ft HC Containers",
        verified: true,
        previewRfq: "Namaste Manjunath Ji (VRL Logistics), confirmed auto indent: Hosur ➔ Gurgaon Manesar | 18.5 MT Transmissions.",
      },
      {
        id: "safechem",
        name: "Safechem Freight Express",
        rating: 4.8,
        phone: "+91 98200 77142",
        fleetCount: "28x 40ft HC Containers",
        verified: true,
        previewRfq: "Namaste Safechem Freight, auto indent: Hosur ➔ Manesar | 18.5 MT.",
      },
    ],
    bestQuote: {
      carrierId: "vrl",
      carrierName: "VRL Logistics Ltd",
      carrierPhone: "+91 98801 44520",
      rating: 4.9,
      quoteInr: 79500,
      vehicleNo: "KA-25-D-9104",
      driverName: "Manjunath Gowda",
      driverPhone: "+91 98801 44520",
      receivedAt: "6m ago",
      notes: "GPS-enabled container parked at Hosur depot, ready for 06:00 AM dock placement.",
    },
    netMarginInr: 6500,
    netMarginPct: 7.6,
    spotBenchmarkInr: 81200,
    aiConfidence: "97% AI Confidence (58 Trips)",
    aiSynthesis:
      "VRL Logistics confirmed empty 40ft HC container KA-25-D-9104 only 8 km from Hosur SIPCOT gate. Margin of ₹6,500 (7.6% net) exceeds the 5% floor target. 1-Click Fast-Track booking ready.",
  },
  {
    id: "#BLR-HUB-1072",
    shipperName: "Kirloskar Ferrous Industries",
    shipperPhone: "+91 97400 81290",
    origin: "Peenya Industrial Area",
    originHub: "KA Depot #02",
    destination: "Hubballi Industrial Estate",
    destinationHub: "Gokul Road Industrial Area",
    distanceKm: "410 km",
    corridor: "NH 48 North Karnataka",
    weightTonnes: 16.0,
    materialType: "Cast Iron Billets & Pump Casings",
    vehicleCategory: "10_WHEELER_TAURUS",
    vehicleDisplay: "10-Wheeler Taurus (Open Body)",
    targetRateInr: 34000,
    status: "DECISION_REQUIRED",
    slaRemaining: "SLA: 05:12 remaining",
    isMarginFloorAlert: true,
    matchedCarriers: [
      {
        id: "southern",
        name: "Southern Roadlines Hubballi",
        rating: 4.7,
        phone: "+91 94482 11094",
        fleetCount: "16x 10-Wheelers",
        verified: true,
        previewRfq: "Namaste Basavaraj Ji (Southern Roadlines), urgent indent: Peenya ➔ Hubballi | 16 MT Castings.",
      },
      {
        id: "bhoruka",
        name: "Bhoruka Logistics",
        rating: 4.8,
        phone: "+91 98451 90218",
        fleetCount: "20x 10-Wheelers",
        verified: true,
        previewRfq: "Namaste Bhoruka Logistics, confirmed indent: Peenya ➔ Hubballi | 16 MT.",
      },
    ],
    bestQuote: {
      carrierId: "southern",
      carrierName: "Southern Roadlines Hubballi",
      carrierPhone: "+91 94482 11094",
      rating: 4.7,
      quoteInr: 35800,
      vehicleNo: "KA-27-B-4402",
      driverName: "Basavaraj M.",
      driverPhone: "+91 94482 11094",
      receivedAt: "12m ago",
      notes: "Driver quotes ₹35,800 citing Tumakuru toll surge and return empty leg back to Hubli.",
    },
    netMarginInr: -1800,
    netMarginPct: -5.3,
    spotBenchmarkInr: 33200,
    aiConfidence: "92% AI Confidence",
    aiSynthesis:
      "Quote of ₹35,800 from Southern Roadlines breaches client budget of ₹34,000 by ₹1,800. Algorithmic negotiation model recommends sending counter-offer at ₹32,500 via WhatsApp (76% acceptance rate on this corridor).",
  },
  {
    id: "#BLR-CHN-1080",
    shipperName: "Sundaram-Clayton / TVS Mobility",
    shipperPhone: "+91 98401 55670",
    origin: "Bommasandra Industrial Area",
    originHub: "South BLR Logistics Park",
    destination: "Sriperumbudur (Chennai Belt)",
    destinationHub: "SIPCOT Sriperumbudur Phase 2",
    distanceKm: "330 km",
    corridor: "NH 48 Bengaluru-Chennai Expressway",
    weightTonnes: 8.5,
    materialType: "Aluminium Die Castings",
    vehicleCategory: "CONTAINER_32_SXL",
    vehicleDisplay: "32ft SXL Closed Body",
    targetRateInr: 24000,
    status: "DISPATCHING_RFQS",
    slaRemaining: "SLA: 22:15 remaining",
    matchedCarriers: [
      {
        id: "drs",
        name: "DRS Dilip Roadlines",
        rating: 4.8,
        phone: "+91 98410 77210",
        fleetCount: "30x 32ft SXL",
        verified: true,
        previewRfq: "Namaste DRS Logistics, auto indent: Bommasandra ➔ Sriperumbudur | 8.5 MT Die Castings. Target ₹24,000.",
      },
      {
        id: "abt",
        name: "ABT Parcel Service",
        rating: 4.9,
        phone: "+91 94433 11800",
        fleetCount: "45x 32ft SXL",
        verified: true,
        previewRfq: "Namaste ABT Chennai desk, indent: Bommasandra ➔ Sriperumbudur | 8.5 MT. Target ₹24,000.",
      },
      {
        id: "mbf",
        name: "Madras Bangalore Freight Express",
        rating: 4.7,
        phone: "+91 98402 99014",
        fleetCount: "18x 32ft SXL",
        verified: true,
        previewRfq: "Namaste MBF Express, confirmed load: Bommasandra ➔ Sriperumbudur | 8.5 MT.",
      },
    ],
    netMarginInr: 2500,
    netMarginPct: 10.4,
    spotBenchmarkInr: 23400,
    aiConfidence: "95% Spot Benchmark",
    aiSynthesis:
      "WhatsApp RFQs dispatched to 3 certified carriers along BLR-Chennai corridor. Expecting first competitive quote within 3 minutes.",
  },
  {
    id: "#BLR-PUN-1095",
    shipperName: "Britannia Industries Ltd",
    shipperPhone: "+91 99800 45210",
    origin: "Bidadi Industrial Area",
    originHub: "KA Food Logistics Hub",
    destination: "Chakan (Pune Auto/FMCG Hub)",
    destinationHub: "MIDC Chakan Phase 3",
    distanceKm: "840 km",
    corridor: "NH 48 Western Freight Corridor",
    weightTonnes: 15.0,
    materialType: "Packaged FMCG Foods (Biscuits)",
    vehicleCategory: "CONTAINER_32_MXL",
    vehicleDisplay: "32ft MXL Closed Container",
    targetRateInr: 48000,
    status: "BOOKED",
    slaRemaining: "Trip Confirmed",
    matchedCarriers: [
      {
        id: "tci",
        name: "TCI Freight (Transport Corp of India)",
        rating: 4.9,
        phone: "+91 98210 65432",
        fleetCount: "60x 32ft MXL",
        verified: true,
        previewRfq: "Namaste TCI Freight, booked load: Bidadi ➔ Chakan | 15 MT FMCG.",
      },
    ],
    bestQuote: {
      carrierId: "tci",
      carrierName: "TCI Freight",
      carrierPhone: "+91 98210 65432",
      rating: 4.9,
      quoteInr: 43200,
      vehicleNo: "MH-12-RN-6219",
      driverName: "Dnyaneshwar Shinde",
      driverPhone: "+91 98210 65432",
      receivedAt: "1h ago",
    },
    bookedDetails: {
      lrNumber: "LR-2026-BLR-4819",
      bookedAt: "10:32 AM",
      carrierName: "TCI Freight",
      vehicleNo: "MH-12-RN-6219",
      driverName: "Dnyaneshwar Shinde",
      driverPhone: "+91 98210 65432",
      rate: 43200,
      netMarginInr: 4800,
    },
    netMarginInr: 4800,
    netMarginPct: 10.0,
    spotBenchmarkInr: 44500,
    aiConfidence: "100% Locked",
    aiSynthesis:
      "Booking locked at ₹43,200 against ₹48,000 budget. Net margin of ₹4,800 secured. Loading scheduled for 08:30 AM tomorrow with automated FASTag & SIM tracking.",
  },
  {
    id: "#BLR-AMD-1055",
    shipperName: "Micro Labs Ltd",
    shipperPhone: "+91 98440 99120",
    origin: "Bommasandra Industrial",
    originHub: "Bommasandra Industrial",
    destination: "Changodar, Ahmedabad",
    destinationHub: "Changodar Logistics Park",
    distanceKm: "1,480 km",
    corridor: "NH 48 Western Corridor",
    weightTonnes: null,
    materialType: "Machinery Components",
    vehicleCategory: "UNKNOWN",
    vehicleDisplay: "Unspecified Truck Category",
    targetRateInr: 55000,
    status: "INCOMPLETE",
    source: 'WhatsApp Group "Bangalore Pharma Freight"',
    missingFields: ["Total Weight (MT)", "Truck Category (Closed / Tarpaulin)"],
    clarificationDraft:
      "Namaste Micro Labs logistics team, please confirm the total MT weight and whether container closed body is mandatory for tomorrow's Ahmedabad indent? Fast indents waiting.",
    matchedCarriers: [],
  },
  {
    id: "#BLR-COI-1104",
    shipperName: "Lakshmi Machine Works (LMW)",
    shipperPhone: "+91 98422 66319",
    origin: "Whitefield (Bangalore)",
    originHub: "ITPL Export Corridor",
    destination: "Coimbatore Industrial Belt",
    destinationHub: "Peelamedu Tech Park",
    distanceKm: "360 km",
    corridor: "NH 544 Hosur-Salem-Coimbatore",
    weightTonnes: null,
    materialType: "Textile Machinery Spares",
    vehicleCategory: "UNKNOWN",
    vehicleDisplay: "Pending Dimension & Body Spec",
    targetRateInr: 28000,
    status: "INCOMPLETE",
    source: "WhatsApp Direct from S. Ramakrishnan",
    missingFields: ["Machine Dimensions (Length x Width x Height)", "Crane Loading Required (Yes/No)"],
    clarificationDraft:
      "Namaste Ramakrishnan Ji (LMW), please confirm crate dimensions (L x W x H) and if hydraulic crane loading is required at the Whitefield loading dock.",
    matchedCarriers: [],
  },
];

const INITIAL_EVENTS: WhatsAppFeedEvent[] = [
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

interface ToastState {
  id: string;
  type: "success" | "info" | "warning";
  title: string;
  message: string;
}

export default function DashboardPage() {
  const [activeView, setActiveView] = useState("queue");
  const [simulatorOpen, setSimulatorOpen] = useState(false);
  const [ingestModalOpen, setIngestModalOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Core state for Step 1 Feature
  const [loads, setLoads] = useState<LoadItem[]>(INITIAL_LOADS);
  const [feedEvents, setFeedEvents] = useState<WhatsAppFeedEvent[]>(INITIAL_EVENTS);
  const [stats, setStats] = useState<DashboardStats>({
    activeShipments: 34,
    inTransit: 22,
    loading: 8,
    unassigned: 4,
    quotesUnderReview: 6,
    avgResponseTime: "3.8m",
    actionItemsHitl: 6,
    marginBreaches: 2,
    readyToLock: 2,
    payloadDeficits: 2,
    grossMarginLocked: 218500,
    avgMarginPerDispatch: 6820,
    avgMarginPct: 11.8,
  });
  const [toast, setToast] = useState<ToastState | null>(null);

  // Keyboard shortcuts: Ctrl/Cmd + S for Simulator, Ctrl/Cmd + I for Ingestion, Ctrl/Cmd + B for Sidebar Toggle
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("collapsed") === "true") {
        setIsSidebarCollapsed(true);
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") {
        e.preventDefault();
        setSimulatorOpen((prev) => !prev);
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "i") {
        e.preventDefault();
        setIngestModalOpen((prev) => !prev);
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "b") {
        e.preventDefault();
        setIsSidebarCollapsed((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const showToast = (type: "success" | "info" | "warning", title: string, message: string) => {
    const id = Date.now().toString();
    setToast({ id, type, title, message });
    setTimeout(() => {
      setToast((prev) => (prev?.id === id ? null : prev));
    }, 5000);
  };

  // STEP 1 HANDLER: Ingest Shipper Indent & Broadcast WhatsApp RFQs
  const handleDispatchNewLoad = (parsed: any) => {
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    let prefix = "BLR-IND";
    if (parsed.destination?.toLowerCase().includes("bhiwandi")) prefix = "BLR-BHW";
    else if (parsed.destination?.toLowerCase().includes("hub")) prefix = "BLR-HUB";
    else if (parsed.destination?.toLowerCase().includes("hyd")) prefix = "BLR-HYD";
    else if (parsed.destination?.toLowerCase().includes("ahm")) prefix = "BLR-AMD";

    const loadId = `#${prefix}-${randomSuffix}`;

    if (!parsed.isComplete) {
      // Incomplete Load
      const incompleteLoad: LoadItem = {
        id: loadId,
        shipperName: parsed.shipperName || "Inbound Shipper",
        origin: parsed.origin || "Bengaluru",
        originHub: parsed.originHub || "Bengaluru Hub",
        destination: parsed.destination || "Destination Hub",
        destinationHub: parsed.destinationHub || "Destination Hub",
        distanceKm: parsed.distanceKm || "Pending",
        corridor: "Corridor Route TBD",
        weightTonnes: parsed.weightTonnes,
        materialType: parsed.materialType || "General Freight",
        vehicleCategory: parsed.vehicleCategory || "UNKNOWN",
        vehicleDisplay: parsed.vehicleDisplay || "Truck Category TBD",
        targetRateInr: parsed.targetRateInr || 50000,
        status: "INCOMPLETE",
        missingFields: parsed.missingFields || ["Total Weight (MT)", "Truck Category"],
        clarificationDraft: parsed.clarificationDraft,
        matchedCarriers: [],
        source: "Inbound WhatsApp / Voice Ingestion",
      };

      setLoads((prev) => [incompleteLoad, ...prev]);
      setStats((prev) => ({
        ...prev,
        actionItemsHitl: prev.actionItemsHitl + 1,
        payloadDeficits: prev.payloadDeficits + 1,
      }));

      showToast(
        "warning",
        "Incomplete Indent Ingested",
        `${loadId} recorded. Pre-generated clarification draft ready in Action Queue.`
      );
      return;
    }

    // Complete Load
    const newLoad: LoadItem = {
      id: loadId,
      shipperName: parsed.shipperName || "JSW Steel Ltd",
      origin: parsed.origin || "Bengaluru",
      originHub: parsed.originHub || "Peenya Industrial Area",
      destination: parsed.destination || "Bhiwandi / Mumbai",
      destinationHub: parsed.destinationHub || "MH Bhiwandi Logistics Park",
      distanceKm: parsed.distanceKm || "980 km (NH 48)",
      corridor: "NH 48 Corridor",
      weightTonnes: parsed.weightTonnes || 21.0,
      materialType: parsed.materialType || "Steel Coils",
      vehicleCategory: parsed.vehicleCategory || "HCV_MULTI_AXLE",
      vehicleDisplay: parsed.vehicleDisplay || "40ft Multi-Axle Trailer",
      targetRateInr: parsed.targetRateInr || 50000,
      status: "DISPATCHING_RFQS",
      matchedCarriers: parsed.matchedCarriers || [],
    };

    // Prepend to loads
    setLoads((prev) => [newLoad, ...prev]);

    // Dispatch WhatsApp RFQs into Live Feed for each carrier
    const newEvents: WhatsAppFeedEvent[] = (parsed.matchedCarriers || []).map(
      (c: any, idx: number) => ({
        id: `rfq_${Date.now()}_${idx}`,
        type: "OUTBOUND_RFQ",
        sender: `Broker Dispatch ➔ ${c.name}`,
        phone: c.phone,
        time: "Just now",
        text: c.previewRfq,
        meta: {
          loadId: loadId,
          route: `${newLoad.origin} ➔ ${newLoad.destination}`,
          truck: newLoad.vehicleDisplay,
          rate: `Target ₹${(newLoad.targetRateInr || 50000).toLocaleString("en-IN")}`,
          badge: "Dispatched to Carrier",
          badgeType: "primary",
        },
        language: "english",
      })
    );

    setFeedEvents((prev) => [...newEvents, ...prev]);

    // Update operational stats
    setStats((prev) => ({
      ...prev,
      quotesUnderReview: prev.quotesUnderReview + 1,
      actionItemsHitl: prev.actionItemsHitl + 1,
    }));

    showToast(
      "info",
      "WhatsApp RFQ Broadcast Dispatched",
      `Dispatched to ${parsed.matchedCarriers.length} verified carriers for ${loadId}. Awaiting incoming bids.`
    );

    // SIMULATE INCOMING TRANSPORTER BID AFTER 2.8 SECONDS
    setTimeout(() => {
      const carrier = (parsed.matchedCarriers && parsed.matchedCarriers[0]) || {
        id: "gp",
        name: "Ghatge Patil Transports",
        phone: "+91 98450 28192",
        rating: 4.9,
      };

      const target = newLoad.targetRateInr || 50000;
      // Realistic quote slightly below target (profitable) or slightly above
      const simulatedQuote = Math.round((target * 0.94) / 500) * 500; // e.g. ₹47,000 for 50k
      const netMargin = target - simulatedQuote;
      const marginPct = (netMargin / target) * 100;
      const vehicleNum = `KA-04-MF-${Math.floor(1000 + Math.random() * 9000)}`;

      // 1. Add inbound quote event to WhatsApp stream
      const inboundEvent: WhatsAppFeedEvent = {
        id: `quote_${Date.now()}`,
        type: "INBOUND_QUOTE",
        sender: carrier.name,
        phone: carrier.phone,
        time: "Just now",
        text: `Namaste sir, confirmed load placement tomorrow morning for ${newLoad.origin} ➔ ${newLoad.destination}. Quoting ₹${simulatedQuote.toLocaleString("en-IN")} all-inclusive with tolls. Vehicle ${vehicleNum} ready.`,
        meta: {
          loadId: loadId,
          truck: newLoad.vehicleDisplay,
          rate: `Quote: ₹${simulatedQuote.toLocaleString("en-IN")}`,
          badge: `+₹${netMargin.toLocaleString("en-IN")} Margin (${marginPct.toFixed(1)}%)`,
          badgeType: "success",
        },
        language: "hinglish",
      };

      setFeedEvents((prev) => [inboundEvent, ...prev]);

      // 2. Update the load item in ActionQueue from DISPATCHING_RFQS to DECISION_REQUIRED
      setLoads((prev) =>
        prev.map((l) => {
          if (l.id === loadId) {
            return {
              ...l,
              status: "DECISION_REQUIRED",
              slaRemaining: "SLA: 12:00 remaining",
              isInstantBookReady: marginPct >= 5.0,
              isMarginFloorAlert: marginPct < 5.0,
              bestQuote: {
                carrierId: carrier.id,
                carrierName: carrier.name,
                carrierPhone: carrier.phone,
                rating: carrier.rating,
                quoteInr: simulatedQuote,
                vehicleNo: vehicleNum,
                driverName: "Suresh Y.",
                driverPhone: "+91 97412 88201",
                receivedAt: "Just now",
                notes: "Vehicle placement confirmed at loading dock tomorrow morning.",
              },
              netMarginInr: netMargin,
              netMarginPct: marginPct,
              spotBenchmarkInr: target - 2500,
              aiConfidence: "96% AI Spot Confidence",
              aiSynthesis: `Carrier ${carrier.name} quoted ₹${simulatedQuote.toLocaleString("en-IN")} against shipper budget ₹${target.toLocaleString("en-IN")}. Net brokerage margin is ₹${netMargin.toLocaleString("en-IN")} (${marginPct.toFixed(1)}%). 1-Click Fast-Track book ready or counter at ₹${(simulatedQuote - 1500).toLocaleString("en-IN")}.`,
            };
          }
          return l;
        })
      );

      showToast(
        "success",
        `Incoming WhatsApp Bid: ${carrier.name}`,
        `Quoted ₹${simulatedQuote.toLocaleString("en-IN")} for ${loadId} (+₹${netMargin.toLocaleString("en-IN")} margin). Ready for 1-Click Booking.`
      );
    }, 2800);
  };

  // 1-CLICK APPROVE & BOOK HANDLER
  const handleApproveLoad = (loadId: string) => {
    const lrNumber = `LR-2026-BLR-${Math.floor(1000 + Math.random() * 9000)}`;

    let bookedCarrier = "Assigned Carrier";
    let bookedDriver = "Driver";
    let vehicleNo = "KA-04-MF-5678";
    let marginEarned = 5000;

    setLoads((prev) =>
      prev.map((l) => {
        if (l.id === loadId) {
          const q = l.bestQuote;
          bookedCarrier = q?.carrierName || "Ghatge Patil Transports";
          bookedDriver = q?.driverName || "Suresh Y.";
          vehicleNo = q?.vehicleNo || "KA-04-MF-5678";
          marginEarned = l.netMarginInr || 5000;

          return {
            ...l,
            status: "BOOKED",
            bookedDetails: {
              lrNumber,
              bookedAt: new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }),
              carrierName: bookedCarrier,
              vehicleNo: vehicleNo,
              driverName: bookedDriver,
              driverPhone: q?.driverPhone || "+91 97412 88201",
              rate: q?.quoteInr || 48500,
              netMarginInr: marginEarned,
            },
          };
        }
        return l;
      })
    );

    // Push Booking Confirmation into WhatsApp Feed
    const confirmEvent: WhatsAppFeedEvent = {
      id: `conf_${Date.now()}`,
      type: "BOOKING_CONFIRMATION",
      sender: `Trip Confirmed ➔ ${bookedCarrier}`,
      time: "Just now",
      text: `Trip ${loadId} booked! Digital Lorry Receipt #${lrNumber} and loading slip issued. Vehicle ${vehicleNo} assigned for tomorrow morning placement.`,
      meta: {
        loadId,
        rate: `LR #${lrNumber}`,
        badge: `₹${marginEarned.toLocaleString("en-IN")} Margin Locked`,
        badgeType: "success",
      },
      language: "english",
    };

    setFeedEvents((prev) => [confirmEvent, ...prev]);

    // Update Stats
    setStats((prev) => ({
      ...prev,
      activeShipments: prev.activeShipments + 1,
      inTransit: prev.inTransit + 1,
      quotesUnderReview: Math.max(0, prev.quotesUnderReview - 1),
      actionItemsHitl: Math.max(0, prev.actionItemsHitl - 1),
      grossMarginLocked: prev.grossMarginLocked + marginEarned,
    }));

    showToast(
      "success",
      "Trip Booked & LR Issued",
      `${loadId} confirmed with ${bookedCarrier}. Official Digital ${lrNumber} generated!`
    );
  };

  // COUNTER-OFFER NEGOTIATION HANDLER
  const handleCounterLoad = (loadId: string, counterAmount: number) => {
    // 1. Push outbound counter to feed
    const counterEvt: WhatsAppFeedEvent = {
      id: `counter_${Date.now()}`,
      type: "COUNTER_OFFER",
      sender: "Broker Desk ➔ Transporter",
      time: "Just now",
      text: `Our approved spot rate for this corridor is ₹${counterAmount.toLocaleString("en-IN")} all-inclusive with tolls. Please confirm driver details if accepted.`,
      meta: {
        loadId,
        rate: `Counter: ₹${counterAmount.toLocaleString("en-IN")}`,
        badge: "WhatsApp Counter Sent",
        badgeType: "primary",
      },
      language: "english",
    };

    setFeedEvents((prev) => [counterEvt, ...prev]);

    showToast(
      "info",
      "Counter Offer Dispatched",
      `Counter offer of ₹${counterAmount.toLocaleString("en-IN")} sent via WhatsApp for ${loadId}.`
    );

    // 2. Transporter replies after 2.5 seconds
    setTimeout(() => {
      const agreedRate = counterAmount + 500;
      const inboundAccept: WhatsAppFeedEvent = {
        id: `accept_${Date.now()}`,
        type: "INBOUND_QUOTE",
        sender: "Transporter Response",
        time: "Just now",
        text: `Theek hai sir, ₹${agreedRate.toLocaleString("en-IN")} mein deal finalize karo. Gaadi confirm subah 6 AM Peenya depot pe laga denge. Driver Suresh Y.`,
        meta: {
          loadId,
          rate: `Final: ₹${agreedRate.toLocaleString("en-IN")}`,
          badge: "Counter Accepted (Spot Final)",
          badgeType: "success",
        },
        language: "hinglish",
      };

      setFeedEvents((prev) => [inboundAccept, ...prev]);

      // Update load margin
      setLoads((prev) =>
        prev.map((l) => {
          if (l.id === loadId) {
            const target = l.targetRateInr || 50000;
            const updatedMargin = target - agreedRate;
            const updatedPct = (updatedMargin / target) * 100;

            return {
              ...l,
              isMarginFloorAlert: false,
              isInstantBookReady: true,
              bestQuote: {
                carrierId: l.bestQuote?.carrierId || "gp",
                carrierName: l.bestQuote?.carrierName || "Transporter",
                carrierPhone: l.bestQuote?.carrierPhone || "+91 98450 28192",
                rating: 4.9,
                quoteInr: agreedRate,
                vehicleNo: l.bestQuote?.vehicleNo || "KA-04-MF-5678",
                driverName: "Suresh Y.",
                driverPhone: "+91 97412 88201",
                receivedAt: "Just now",
                notes: "Negotiated and accepted counter-bid.",
              },
              netMarginInr: updatedMargin,
              netMarginPct: updatedPct,
              aiSynthesis: `Negotiation successful! Carrier agreed to ₹${agreedRate.toLocaleString("en-IN")}. Net margin improved to ₹${updatedMargin.toLocaleString("en-IN")} (${updatedPct.toFixed(1)}%). 1-Click book to issue digital LR.`,
            };
          }
          return l;
        })
      );

      showToast(
        "success",
        "Transporter Accepted Counter!",
        `Rate finalized at ₹${agreedRate.toLocaleString("en-IN")} for ${loadId}. 1-Click ready to book.`
      );
    }, 2500);
  };

  // SEND CLARIFICATION DRAFT TO SHIPPER (FOR INCOMPLETE INDENTS)
  const handleSendClarification = (loadId: string) => {
    const targetLoad = loads.find((l) => l.id === loadId);
    const draft = targetLoad?.clarificationDraft || "Namaste team, please confirm MT weight and truck body type.";

    // Outbound clarification event
    const clarEvt: WhatsAppFeedEvent = {
      id: `clar_${Date.now()}`,
      type: "OUTBOUND_CLARIFICATION",
      sender: `Broker Desk ➔ ${targetLoad?.shipperName || "Shipper"}`,
      time: "Just now",
      text: draft,
      meta: {
        loadId,
        badge: "Shipper Clarification Sent",
        badgeType: "primary",
      },
      language: "english",
    };

    setFeedEvents((prev) => [clarEvt, ...prev]);

    showToast("info", "Clarification Sent to Shipper", `WhatsApp clarification draft dispatched for ${loadId}.`);

    // Shipper replies with missing specs after 2.5s
    setTimeout(() => {
      const replyEvt: WhatsAppFeedEvent = {
        id: `ship_reply_${Date.now()}`,
        type: "INBOUND_INQUIRY",
        sender: targetLoad?.shipperName || "Micro Labs Logistics",
        time: "Just now",
        text: "Namaste, confirmed: Total weight is 18 MT machinery parts. 32ft Multi-Axle Closed Container mandatory. Target budget ₹55,000 all-inclusive.",
        meta: {
          loadId,
          truck: "18 MT • 32ft MXL Container",
          badge: "Specs Clarified (Ready for Match)",
          badgeType: "success",
        },
        language: "english",
      };

      setFeedEvents((prev) => [replyEvt, ...prev]);

      // Automatically upgrade incomplete load to DISPATCHING_RFQS
      setLoads((prev) =>
        prev.map((l) => {
          if (l.id === loadId) {
            return {
              ...l,
              status: "DISPATCHING_RFQS",
              weightTonnes: 18.0,
              vehicleCategory: "CONTAINER_32_MXL",
              vehicleDisplay: "32ft MXL Closed Container (18T)",
              missingFields: [],
              matchedCarriers: [
                {
                  id: "sb",
                  name: "Sri Balaji Roadlines",
                  rating: 4.8,
                  phone: "+91 94481 04921",
                  fleetCount: "24x 32ft MXL",
                  verified: true,
                  previewRfq: "Namaste Balaji Naidu Ji, urgent load: Bommasandra ➔ Changodar | 18 MT Machinery (32ft MXL Container).",
                },
                {
                  id: "nr",
                  name: "Navata Road Transport",
                  rating: 4.9,
                  phone: "+91 98480 11923",
                  fleetCount: "22x 32ft MXL",
                  verified: true,
                  previewRfq: "Namaste K. Venkat Rao Ji, urgent load: Bommasandra ➔ Changodar | 18 MT (32ft MXL). Target ₹55k.",
                },
              ],
            };
          }
          return l;
        })
      );

      setStats((prev) => ({
        ...prev,
        payloadDeficits: Math.max(0, prev.payloadDeficits - 1),
        quotesUnderReview: prev.quotesUnderReview + 1,
      }));

      showToast("success", "Shipper Confirmed Specs!", `${loadId} is now complete and auto-broadcasting RFQs.`);
    }, 2500);
  };

  // DISMISS LOAD
  const handleDismissLoad = (loadId: string) => {
    setLoads((prev) => prev.filter((l) => l.id !== loadId));
    setStats((prev) => ({
      ...prev,
      actionItemsHitl: Math.max(0, prev.actionItemsHitl - 1),
    }));
    showToast("info", "Inquiry Dismissed", `${loadId} removed from action queue.`);
  };

  return (
    <div
      data-view="dashboard"
      className="min-h-screen bg-surface font-sans text-on-surface antialiased selection:bg-[#ffd8d1] selection:text-[#901300] relative"
    >
      {/* 1. TOP HEADER BAR */}
      <DashboardHeader
        onOpenSimulator={() => setSimulatorOpen(true)}
        onOpenIngest={() => setIngestModalOpen(true)}
        isSidebarCollapsed={isSidebarCollapsed}
      />

      {/* 2. SIDEBAR (Fixed on desktop, slide-out drawer on mobile) */}
      <DashboardSidebar
        activeView={activeView}
        onSelectView={setActiveView}
        isMobileOpen={isMobileSidebarOpen}
        onCloseMobile={() => setIsMobileSidebarOpen(false)}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed((prev) => !prev)}
      />

      {/* 3. MAIN WORKSPACE (Adapts smoothly when sidebar expands / collapses) */}
      <div className={`transition-all duration-300 ease-in-out ${isSidebarCollapsed ? "md:pl-[76px]" : "md:pl-64"}`}>
        <main className="w-full pt-[72px] sm:pt-[80px] px-3.5 sm:px-5 lg:px-6 pb-8 bg-surface min-h-screen">
          <div className="flex flex-col w-full gap-3.5 sm:gap-4 max-w-[1540px] mx-auto">
            {/* Top Operational Metrics Bar */}
            {activeView !== "transporters" && <TopStatsBar stats={stats} />}

            {/* MAIN MASTER-DETAIL OPERATIONS QUEUE WORKSPACE */}
            {activeView === "queue" && (
              <div className="w-full">
                <ActionQueueSection
                  loads={loads}
                  onApproveLoad={handleApproveLoad}
                  onCounterLoad={handleCounterLoad}
                  onSendClarification={handleSendClarification}
                  onDismissLoad={handleDismissLoad}
                  onOpenIngest={() => setIngestModalOpen(true)}
                />
              </div>
            )}

            {/* Dedicated WhatsApp Stream View */}
            {activeView === "whatsapp" && (
              <div className="max-w-4xl mx-auto w-full animate-fadeIn">
                <WhatsAppLiveFeed
                  events={feedEvents}
                  onOpenSimulator={() => setSimulatorOpen(true)}
                  onSendManualCounter={(text) => {
                    const manualEvt: WhatsAppFeedEvent = {
                      id: `manual_${Date.now()}`,
                      type: "COUNTER_OFFER",
                      sender: "Broker Desk (Manual)",
                      time: "Just now",
                      text,
                      meta: {
                        badge: "Manual Reply",
                        badgeType: "primary",
                      },
                      language: "english",
                    };
                    setFeedEvents((prev) => [manualEvt, ...prev]);
                    showToast("info", "WhatsApp Message Sent", text);
                  }}
                />
              </div>
            )}

            {/* Live Dispatch View (Kanban / Data Table) */}
            {activeView === "dispatch" && (
              <div className="bg-surface-container border border-surface-container-high rounded-xl p-5 shadow-xs flex flex-col gap-4 animate-fadeIn">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Truck className="w-5 h-5 text-primary" />
                    <h3 className="font-headline-sm text-base text-on-surface font-semibold">
                      Live Dispatch Board ({stats.activeShipments} Active Loads)
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-low border border-surface-container-high text-on-surface-variant font-sans text-xs">
                      <Filter className="w-3.5 h-3.5" /> Filter Corridors
                    </button>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-low border border-surface-container-high text-on-surface-variant font-sans text-xs">
                      <ArrowUpDown className="w-3.5 h-3.5" /> Sort by Margin
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left font-sans text-xs border border-surface-container-high rounded-lg">
                    <thead className="bg-surface-container-low text-outline uppercase font-semibold border-b border-surface-container-high">
                      <tr>
                        <th className="p-3">Trip ID</th>
                        <th className="p-3">Corridor Lane</th>
                        <th className="p-3">Vehicle</th>
                        <th className="p-3">Assigned Carrier</th>
                        <th className="p-3">Transit Milestone</th>
                        <th className="p-3">Net Margin</th>
                        <th className="p-3">FSM State</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-surface-container-high">
                      {loads
                        .filter((l) => l.status === "BOOKED" && l.bookedDetails)
                        .map((l) => (
                          <tr key={l.id} className="hover:bg-surface-container-low/60 transition-colors bg-[#ecfdf5]/30">
                            <td className="p-3 font-bold text-[#047857]">{l.id}</td>
                            <td className="p-3 font-sans font-medium">{l.origin} ➔ {l.destination}</td>
                            <td className="p-3">{l.bookedDetails?.vehicleNo} ({l.vehicleDisplay})</td>
                            <td className="p-3 font-sans font-medium">{l.bookedDetails?.carrierName}</td>
                            <td className="p-3 text-secondary font-semibold">Gate-in / Loading Verified</td>
                            <td className="p-3 font-bold text-secondary">₹{l.bookedDetails?.netMarginInr.toLocaleString("en-IN")} ({(l.netMarginPct || 10).toFixed(1)}%)</td>
                            <td className="p-3">
                              <span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-bold">
                                ASSIGNED (LR Issued)
                              </span>
                            </td>
                          </tr>
                        ))}
                      <tr className="hover:bg-surface-container-low/60 transition-colors">
                        <td className="p-3 font-bold text-on-surface">#TRIP-5CF053</td>
                        <td className="p-3 font-sans font-medium">Peenya, BLR ➔ Bhiwandi, MH</td>
                        <td className="p-3">KA-04-MF-5678 (32ft MXL)</td>
                        <td className="p-3 font-sans font-medium">Karnataka-Maharashtra Freight</td>
                        <td className="p-3 text-secondary font-semibold">Gate-out (Pune Bypass)</td>
                        <td className="p-3 font-bold text-secondary">₹7,000 (13.5%)</td>
                        <td className="p-3">
                          <span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-bold">
                            IN_TRANSIT
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-surface-container-low/60 transition-colors">
                        <td className="p-3 font-bold text-on-surface">#TRIP-882A10</td>
                        <td className="p-3 font-sans font-medium">Bellary, KA ➔ Chennai, TN</td>
                        <td className="p-3">KA-34-A-9901 (10-W Taurus)</td>
                        <td className="p-3 font-sans font-medium">Sri Balaji Logistics</td>
                        <td className="p-3 text-tertiary font-semibold">Loading in Progress</td>
                        <td className="p-3 font-bold text-secondary">₹4,200 (8.1%)</td>
                        <td className="p-3">
                          <span className="px-2 py-0.5 rounded bg-tertiary-container text-on-tertiary-container font-bold">
                            LOADING
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-surface-container-low/60 transition-colors">
                        <td className="p-3 font-bold text-on-surface">#TRIP-442B99</td>
                        <td className="p-3 font-sans font-medium">Hosur, TN ➔ Gurgaon, HR</td>
                        <td className="p-3">HR-55-X-2020 (40ft Trailer)</td>
                        <td className="p-3 font-sans font-medium">North-South Cargo Movers</td>
                        <td className="p-3 text-primary font-semibold">Destination Reached (Unloading)</td>
                        <td className="p-3 font-bold text-secondary">₹12,500 (10.4%)</td>
                        <td className="p-3">
                          <span className="px-2 py-0.5 rounded bg-primary-container text-on-primary-container font-bold">
                            POD_PENDING
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Carrier Network View (Dedicated Transporter Management) */}
            {activeView === "transporters" && <TransportersView />}
          </div>
        </main>
      </div>

      {/* 4. FLOATING TOAST NOTIFICATION */}
      {toast && (
        <div className="fixed bottom-5 right-5 z-[150] max-w-md w-full p-4 rounded-xl shadow-2xl bg-white border border-[#dfdbd5] flex items-start gap-3 animate-slideUp">
          <div
            className={`p-2 rounded-lg shrink-0 ${
              toast.type === "success"
                ? "bg-[#ecfdf5] text-[#047857] border border-[#a7f3d0]"
                : toast.type === "warning"
                ? "bg-[#fffbeb] text-[#b45309] border border-[#fde68a]"
                : "bg-[#fef2f0] text-[#be3420] border border-[#fecaca]"
            }`}
          >
            {toast.type === "success" ? (
              <CheckCircle2 className="w-5 h-5" />
            ) : toast.type === "warning" ? (
              <BellRing className="w-5 h-5" />
            ) : (
              <Sparkles className="w-5 h-5" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-sans text-xs font-bold text-[#070707]">{toast.title}</h4>
            <p className="font-sans text-[11px] text-[#78716c] mt-0.5 leading-relaxed">{toast.message}</p>
          </div>
          <button
            type="button"
            onClick={() => setToast(null)}
            className="text-[#78716c] hover:text-[#070707] p-1 rounded-md"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* 5. INTERACTIVE WHATSAPP INBOUND SANDBOX SIMULATOR */}
      <WhatsAppSimulatorModal
        isOpen={simulatorOpen}
        onClose={() => setSimulatorOpen(false)}
      />

      {/* 6. INBOUND SHIPPER LOAD INGESTION & FLEET MATCHING MODAL */}
      <ShipperIngestionModal
        isOpen={ingestModalOpen}
        onClose={() => setIngestModalOpen(false)}
        onDispatchSuccess={handleDispatchNewLoad}
      />
    </div>
  );
}
