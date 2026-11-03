"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  Truck,
  Search,
  Download,
  PlusCircle,
  CheckCircle2,
  AlertTriangle,
  Send,
  MoreVertical,
  TableProperties,
  LayoutGrid,
  X,
  Phone,
  MessageSquare,
  ShieldCheck,
  Zap,
  Route,
  Building2,
  FileCheck,
} from "lucide-react";

interface TransporterItem {
  id: string;
  name: string;
  code: string;
  hub: string;
  gstin: string;
  status: "VERIFIED" | "PENDING";
  contact: string;
  phone: string;
  corridors: string[];
  corridorBadge: string;
  fleetMain: string;
  fleetMainType: string;
  fleetSec: string;
  rating: number;
  trips: number;
  onTime: string;
  respTime: string;
  terms: string;
  podWindow: string;
  badgeExtra: string;
  primaryVehicle: "40FT" | "32FT" | "TAURUS" | "6W";
}

const INITIAL_TRANSPORTERS: TransporterItem[] = [
  {
    id: "gp",
    name: "Ghatge Patil Transports",
    code: "GP",
    hub: "Peenya Hub #04, Bengaluru",
    gstin: "29AAACG1928B1Z8",
    status: "VERIFIED",
    contact: "Ramesh Sharma",
    phone: "+91 98450 28192",
    corridors: ["BLR-BHW", "BLR-PUN"],
    corridorBadge: "Return Match Guaranteed",
    fleetMain: "18x",
    fleetMainType: "40ft Trailer",
    fleetSec: "12x 32ft MXL | 6x Taurus",
    rating: 4.9,
    trips: 64,
    onTime: "98.5%",
    respTime: "3.8m",
    terms: "70% Adv / 30% POD",
    podWindow: "48h",
    badgeExtra: "TDS 194C Verified",
    primaryVehicle: "40FT",
  },
  {
    id: "sb",
    name: "Sri Balaji Roadlines",
    code: "SB",
    hub: "Nelamangala Yard, BLR",
    gstin: "29AABCS8841M1ZM",
    status: "VERIFIED",
    contact: "Balaji Naidu",
    phone: "+91 94481 04921",
    corridors: ["BLR-HYD", "BLR-MAA"],
    corridorBadge: "Direct GPS Sync",
    fleetMain: "24x",
    fleetMainType: "32ft MXL",
    fleetSec: "10x 10W Taurus",
    rating: 4.8,
    trips: 52,
    onTime: "97.2%",
    respTime: "4.5m",
    terms: "70% Adv / 30% POD",
    podWindow: "24h",
    badgeExtra: "FASTag Integrated",
    primaryVehicle: "32FT",
  },
  {
    id: "km",
    name: "Karnataka-Maharashtra Freightways",
    code: "KM",
    hub: "Yeshwanthpur Industrial Area",
    gstin: "29AAECK4491Q1Z4",
    status: "VERIFIED",
    contact: "Vinod Patil",
    phone: "+91 97412 88201",
    corridors: ["BLR-BHW", "BLR-NGP"],
    corridorBadge: "Heavy Industrial Cargo",
    fleetMain: "14x",
    fleetMainType: "40ft Trailer",
    fleetSec: "8x Taurus (16T)",
    rating: 4.8,
    trips: 42,
    onTime: "96.8%",
    respTime: "5.1m",
    terms: "75% Adv / 25% POD",
    podWindow: "Diesel Card Issued",
    badgeExtra: "E-Way Auto Sync",
    primaryVehicle: "40FT",
  },
  {
    id: "pi",
    name: "Patel Integrated Logistics",
    code: "PI",
    hub: "Hosur Road Logistics Park",
    gstin: "29AAACP9902K1ZP",
    status: "VERIFIED",
    contact: "Jignesh Patel",
    phone: "+91 98201 44520",
    corridors: ["BLR-DEL", "BLR-AMD"],
    corridorBadge: "Scheduled Express Hub",
    fleetMain: "32x",
    fleetMainType: "40ft Trailer",
    fleetSec: "16x 32ft MXL",
    rating: 4.7,
    trips: 89,
    onTime: "95.5%",
    respTime: "6.2m",
    terms: "70% Adv / 30% POD",
    podWindow: "48h",
    badgeExtra: "ISO 9001 Certified",
    primaryVehicle: "40FT",
  },
  {
    id: "sr",
    name: "Sharma Road Carriers",
    code: "SR",
    hub: "Tumakuru Road Bypass",
    gstin: "29AADCS1120N1ZL",
    status: "PENDING",
    contact: "Rajesh Sharma",
    phone: "+91 99014 33219",
    corridors: ["BLR-MAA", "BLR-COK"],
    corridorBadge: "Insurance Re-Audit Due",
    fleetMain: "8x",
    fleetMainType: "32ft MXL",
    fleetSec: "5x 6W Eicher (14ft)",
    rating: 4.6,
    trips: 28,
    onTime: "94.0%",
    respTime: "8.4m",
    terms: "60% Adv / 40% POD",
    podWindow: "72h",
    badgeExtra: "Hold Advance Holdback",
    primaryVehicle: "32FT",
  },
  {
    id: "nr",
    name: "Navata Road Transport",
    code: "NR",
    hub: "Whitefield Freight Terminal",
    gstin: "29AABCN5560P1ZK",
    status: "VERIFIED",
    contact: "K. Venkat Rao",
    phone: "+91 98480 11923",
    corridors: ["BLR-HYD", "BLR-VJA"],
    corridorBadge: "High SLA Priority Vendor",
    fleetMain: "22x",
    fleetMainType: "32ft MXL",
    fleetSec: "14x Taurus (16T)",
    rating: 4.9,
    trips: 110,
    onTime: "99.1%",
    respTime: "2.9m",
    terms: "70% Adv / 30% POD",
    podWindow: "24h",
    badgeExtra: "Pre-authorized IMPS",
    primaryVehicle: "32FT",
  },
];

export const TransportersView: React.FC = () => {
  const [transporters, setTransporters] = useState<TransporterItem[]>(INITIAL_TRANSPORTERS);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCorridor, setSelectedCorridor] = useState("all");
  const [selectedVehicle, setSelectedVehicle] = useState("ALL");
  const [selectedCompliance, setSelectedCompliance] = useState("ALL");
  const [sortBy, setSortBy] = useState<"score" | "trips" | "speed">("score");
  const [viewMode, setViewMode] = useState<"table" | "grid">("table");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // New Transporter Form State
  const [newName, setNewName] = useState("");
  const [newManager, setNewManager] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [newPin, setNewPin] = useState("");
  const [selectedLanes, setSelectedLanes] = useState<string[]>(["BLR-BHW", "BLR-HYD"]);
  const [returnLoad, setReturnLoad] = useState(true);
  const [fTrailer, setFTrailer] = useState("10");
  const [fMxl, setFMxl] = useState("8");
  const [fTaurus, setFTaurus] = useState("4");
  const [fLcv, setFLcv] = useState("2");
  const [newGstin, setNewGstin] = useState("");
  const [newPan, setNewPan] = useState("");
  const [newIfsc, setNewIfsc] = useState("");
  const [newBankAcc, setNewBankAcc] = useState("");
  const [tds194, setTds194] = useState(true);
  const [advPercent, setAdvPercent] = useState(70);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  // Keyboard shortcut Cmd/Ctrl + K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        document.getElementById("carrierSearchInput")?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Filtered & Sorted Transporters
  const filteredTransporters = useMemo(() => {
    return transporters
      .filter((t) => {
        // Search query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matches =
            t.name.toLowerCase().includes(q) ||
            t.contact.toLowerCase().includes(q) ||
            t.phone.toLowerCase().includes(q) ||
            t.hub.toLowerCase().includes(q) ||
            t.gstin.toLowerCase().includes(q);
          if (!matches) return false;
        }

        // Corridor
        if (selectedCorridor !== "all") {
          const hasCorridor = t.corridors.some((c) =>
            selectedCorridor === "LOCAL" ? c.includes("BLR") : c === selectedCorridor
          );
          if (!hasCorridor) return false;
        }

        // Vehicle
        if (selectedVehicle !== "ALL") {
          if (t.primaryVehicle !== selectedVehicle) return false;
        }

        // Compliance
        if (selectedCompliance !== "ALL") {
          if (t.status !== selectedCompliance) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "score") return b.rating - a.rating;
        if (sortBy === "trips") return b.trips - a.trips;
        if (sortBy === "speed") {
          const speedA = parseFloat(a.respTime);
          const speedB = parseFloat(b.respTime);
          return speedA - speedB;
        }
        return 0;
      });
  }, [transporters, searchQuery, selectedCorridor, selectedVehicle, selectedCompliance, sortBy]);

  // Handle Save New Transporter
  const handleSaveTransporter = (e: React.FormEvent) => {
    e.preventDefault();
    const finalName = newName.trim() || "Mahalakshmi Transport Corporation";
    const finalContact = newManager.trim() || "Rajesh G. Gowda";
    const finalPhone = newPhone.trim() || "+91 98450 12345";
    const finalGstin = newGstin.trim() || "29AAAAA0000A1Z5";
    const finalHub = newAddress.trim() || "Peenya Industrial Yard, Bengaluru";

    const newTransporter: TransporterItem = {
      id: `tr_${Date.now()}`,
      name: finalName,
      code: finalName.slice(0, 2).toUpperCase(),
      hub: finalHub,
      gstin: finalGstin,
      status: "VERIFIED",
      contact: finalContact,
      phone: finalPhone,
      corridors: selectedLanes.length > 0 ? selectedLanes : ["BLR-BHW"],
      corridorBadge: returnLoad ? "Return Match Guaranteed" : "Direct GPS Sync",
      fleetMain: `${fTrailer}x`,
      fleetMainType: "40ft Trailer",
      fleetSec: `${fMxl}x 32ft MXL | ${fTaurus}x Taurus`,
      rating: 5.0,
      trips: 1,
      onTime: "100.0%",
      respTime: "2.5m",
      terms: `${advPercent}% Adv / ${100 - advPercent}% POD`,
      podWindow: "48h",
      badgeExtra: tds194 ? "TDS 194C Verified" : "E-Way Auto Sync",
      primaryVehicle: "40FT",
    };

    setTransporters((prev) => [newTransporter, ...prev]);
    setDrawerOpen(false);
    showToast(`VAHAN KYC Verified & Onboarded: ${finalName}`);

    // Reset Form
    setNewName("");
    setNewManager("");
    setNewPhone("");
    setNewAddress("");
    setNewGstin("");
  };

  const handleExportCSV = () => {
    showToast("Exporting 148 verified transporter profiles (CSV)...");
  };

  const handlePing = (carrier: string, contact: string) => {
    showToast(`WhatsApp RFQ dispatched to ${carrier} (${contact})`);
  };

  return (
    <div className="flex flex-col w-full gap-4 pb-8 animate-fadeIn">
      {/* 1. TOP COMMAND & METRICS HEADER BAR */}
      <div className="flex flex-col gap-3.5 pb-4 border-b border-[#dfdbd5]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#be3420] text-xl">local_shipping</span>
              <h1 className="font-headline-lg text-lg sm:text-xl font-bold text-[#070707] tracking-tight">
                Transporter Fleet Directory
              </h1>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#f7f6f4] text-[#57534e] border border-[#dfdbd5] font-semibold uppercase tracking-wider">
                Pan-India VAHAN Pool
              </span>
            </div>
            <p className="font-sans text-xs text-[#78716c] mt-0.5">
              Manage verified carrier network, corridor preferences, and automated WhatsApp RFQ routing.
            </p>
          </div>

          {/* Quick Action Group */}
          <div className="flex items-center gap-2 flex-wrap">
            <div className="relative min-w-[260px] sm:min-w-[320px]">
              <Search className="w-4 h-4 absolute left-2.5 top-2.5 text-[#78716c]" />
              <input
                id="carrierSearchInput"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by Carrier, Manager, Mobile, GSTIN, Hub..."
                className="w-full h-9 pl-8 pr-12 text-xs bg-white rounded-lg border border-[#dfdbd5] text-[#070707] placeholder:text-[#a8a29e] focus:outline-none focus:border-[#be3420] transition-colors"
              />
              <kbd className="absolute right-2 top-2 font-mono text-[9px] bg-[#f7f6f4] border border-[#dfdbd5] px-1.5 py-0.5 rounded text-[#78716c]">
                ⌘K
              </kbd>
            </div>

            <button
              type="button"
              onClick={handleExportCSV}
              className="h-9 px-3 bg-white hover:bg-[#f7f6f4] text-[#070707] text-xs font-semibold rounded-lg flex items-center gap-1.5 border border-[#dfdbd5] transition-colors shadow-2xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>

            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="h-9 px-3.5 bg-[#09090b] hover:bg-[#27272a] text-white border border-black/10 text-xs font-semibold rounded-lg flex items-center gap-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.12)] transition-all active:scale-95"
            >
              <PlusCircle className="w-4 h-4" />
              <span>+ Onboard New Transporter</span>
            </button>
          </div>
        </div>

        {/* KPI Metrics Strip (1 Row Responsive) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3">
          <div className="p-3 bg-white rounded-xl border border-[#eae7e1] flex items-center justify-between shadow-2xs">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#059669]"></span>
                <span className="font-mono text-[10px] uppercase text-[#78716c] font-semibold">
                  Verified Carriers
                </span>
              </div>
              <div className="flex items-baseline gap-1.5 mt-0.5">
                <span className="font-sans text-lg sm:text-xl font-bold text-[#070707]">
                  {transporters.length} Active
                </span>
                <span className="font-mono text-[9px] text-[#059669] bg-[#ecfdf5] border border-[#a7f3d0] px-1 py-0.2 rounded font-bold">
                  +6 mo
                </span>
              </div>
            </div>
            <span className="material-symbols-outlined text-[#059669] text-2xl">verified</span>
          </div>

          <div className="p-3 bg-white rounded-xl border border-[#eae7e1] flex items-center justify-between shadow-2xs">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#be3420]"></span>
                <span className="font-mono text-[10px] uppercase text-[#78716c] font-semibold">
                  Fleet Strength
                </span>
              </div>
              <div className="flex items-baseline gap-1.5 mt-0.5">
                <span className="font-sans text-lg sm:text-xl font-bold text-[#070707]">820+ Trucks</span>
                <span className="font-mono text-[9px] text-[#78716c] bg-[#f7f6f4] px-1 py-0.2 rounded">
                  40ft / 32ft / 10W
                </span>
              </div>
            </div>
            <span className="material-symbols-outlined text-[#78716c] text-2xl">rv_hookup</span>
          </div>

          <div className="p-3 bg-white rounded-xl border border-[#eae7e1] flex items-center justify-between shadow-2xs">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d97706]"></span>
                <span className="font-mono text-[10px] uppercase text-[#78716c] font-semibold">
                  Active Corridors
                </span>
              </div>
              <div className="flex items-baseline gap-1.5 mt-0.5">
                <span className="font-sans text-lg sm:text-xl font-bold text-[#070707]">34 Lanes</span>
                <span className="font-mono text-[9px] text-[#d97706] bg-[#fffbeb] border border-[#fde68a] px-1 py-0.2 rounded font-bold">
                  South &amp; West
                </span>
              </div>
            </div>
            <span className="material-symbols-outlined text-[#d97706] text-2xl">alt_route</span>
          </div>

          <div className="p-3 bg-white rounded-xl border border-[#eae7e1] flex items-center justify-between shadow-2xs">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#059669]"></span>
                <span className="font-mono text-[10px] uppercase text-[#78716c] font-semibold">
                  WhatsApp SLA Speed
                </span>
              </div>
              <div className="flex items-baseline gap-1.5 mt-0.5">
                <span className="font-sans text-lg sm:text-xl font-bold text-[#070707]">92.4%</span>
                <span className="font-mono text-[9px] text-[#059669] font-bold">&lt; 8.0 mins</span>
              </div>
            </div>
            <span className="material-symbols-outlined text-[#059669] text-2xl">bolt</span>
          </div>
        </div>
      </div>

      {/* 2. FILTER & CORRIDOR SWITCHER TOOLBAR */}
      <div className="flex flex-col gap-2.5">
        {/* Horizontal Corridor Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-0.5 text-nowrap">
          <span className="font-mono text-[10px] text-[#78716c] uppercase font-semibold mr-1">Corridors:</span>
          {[
            { id: "all", label: `All Corridors (${transporters.length})` },
            { id: "BLR-BHW", label: "BLR ➔ BHW / Mumbai (42)" },
            { id: "BLR-HYD", label: "BLR ➔ HYD (35)" },
            { id: "BLR-MAA", label: "BLR ➔ MAA / Chennai (28)" },
            { id: "BLR-DEL", label: "North Corridor / Delhi-NCR (18)" },
            { id: "LOCAL", label: "Peenya Local / Feeder (25)" },
          ].map((corridor) => {
            const isActive = selectedCorridor === corridor.id;
            return (
              <button
                key={corridor.id}
                onClick={() => setSelectedCorridor(corridor.id)}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
                  isActive
                    ? "bg-[#09090b] text-white font-semibold shadow-xs"
                    : "bg-white hover:bg-[#f7f6f4] text-[#57534e] border border-[#eae7e1]"
                }`}
              >
                {corridor.label}
              </button>
            );
          })}
        </div>

        {/* Secondary Parameter Controls */}
        <div className="flex items-center justify-between flex-wrap gap-2 pt-0.5">
          <div className="flex items-center gap-2 flex-wrap">
            {/* Vehicle Type Filter */}
            <div className="flex items-center bg-white rounded-lg border border-[#dfdbd5] px-2 h-8 text-xs">
              <span className="font-mono text-[10px] text-[#78716c] mr-1.5 uppercase font-medium">Truck:</span>
              <select
                value={selectedVehicle}
                onChange={(e) => setSelectedVehicle(e.target.value)}
                className="bg-transparent text-xs text-[#070707] focus:outline-none cursor-pointer"
              >
                <option value="ALL">All Equipment Types (40ft, 32ft, Taurus)</option>
                <option value="40FT">40ft Multi-Axle Trailer</option>
                <option value="32FT">32ft MXL Closed Container</option>
                <option value="TAURUS">10-Wheeler Taurus (16T)</option>
                <option value="6W">6-Wheeler Eicher / LCV</option>
              </select>
            </div>

            {/* Compliance Filter */}
            <div className="flex items-center bg-white rounded-lg border border-[#dfdbd5] px-2 h-8 text-xs">
              <span className="font-mono text-[10px] text-[#78716c] mr-1.5 uppercase font-medium">Status:</span>
              <select
                value={selectedCompliance}
                onChange={(e) => setSelectedCompliance(e.target.value)}
                className="bg-transparent text-xs text-[#070707] focus:outline-none cursor-pointer"
              >
                <option value="ALL">All Compliance Levels</option>
                <option value="VERIFIED">VAHAN Verified &amp; Active</option>
                <option value="PENDING">Pending KYC Re-verification</option>
              </select>
            </div>

            {/* Sort Select */}
            <div className="flex items-center bg-white rounded-lg border border-[#dfdbd5] px-2 h-8 text-xs">
              <span className="font-mono text-[10px] text-[#78716c] mr-1.5 uppercase font-medium">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-xs text-[#070707] focus:outline-none cursor-pointer"
              >
                <option value="score">Highest Reliability Score</option>
                <option value="trips">Total Trips Completed</option>
                <option value="speed">Fastest WhatsApp Response</option>
              </select>
            </div>
          </div>

          {/* View Switcher */}
          <div className="flex items-center bg-[#eae7e1]/70 rounded-lg p-0.5 border border-[#dfdbd5]">
            <button
              onClick={() => setViewMode("table")}
              className={`h-7 px-2.5 rounded text-xs font-semibold flex items-center gap-1 transition-all ${
                viewMode === "table"
                  ? "bg-white text-[#070707] shadow-xs"
                  : "text-[#78716c] hover:text-[#070707]"
              }`}
            >
              <TableProperties className="w-3.5 h-3.5" />
              <span>Dense Table</span>
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`h-7 px-2.5 rounded text-xs font-semibold flex items-center gap-1 transition-all ${
                viewMode === "grid"
                  ? "bg-white text-[#070707] shadow-xs"
                  : "text-[#78716c] hover:text-[#070707]"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Fleet Cards</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. VIEW 1: DENSE TABLE VIEW */}
      {viewMode === "table" && (
        <div className="bg-white rounded-xl border border-[#eae7e1] overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#f7f6f4] border-b border-[#dfdbd5] text-[#57534e] font-mono text-[10px] uppercase tracking-wider select-none">
                  <th className="py-2.5 px-3 font-semibold">Transporter &amp; Base Yard</th>
                  <th className="py-2.5 px-3 font-semibold">Dispatch Contact / WhatsApp</th>
                  <th className="py-2.5 px-3 font-semibold">Corridor Affinity</th>
                  <th className="py-2.5 px-3 font-semibold">Fleet Breakdown</th>
                  <th className="py-2.5 px-3 font-semibold">SLA &amp; Response</th>
                  <th className="py-2.5 px-3 font-semibold">Commercial Terms</th>
                  <th className="py-2.5 px-3 font-semibold text-right pr-4">Autonomous Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eae7e1] text-xs">
                {filteredTransporters.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-8 text-center text-[#78716c] font-mono text-xs">
                      No transporters matching the active filters.
                    </td>
                  </tr>
                ) : (
                  filteredTransporters.map((carrier) => (
                    <tr
                      key={carrier.id}
                      className="hover:bg-[#f7f6f4]/60 transition-colors group"
                    >
                      {/* Carrier & Yard */}
                      <td className="py-2.5 px-3 align-top">
                        <div className="flex items-start gap-2.5">
                          <div className="w-7 h-7 rounded-md bg-[#fef2f0] text-[#be3420] font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 border border-[#be3420]/25">
                            {carrier.code}
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="font-sans text-xs font-bold text-[#070707]">
                                {carrier.name}
                              </span>
                              {carrier.status === "VERIFIED" ? (
                                <span className="px-1.5 py-0.2 rounded font-mono text-[9px] bg-[#ecfdf5] text-[#059669] border border-[#a7f3d0] font-bold flex items-center gap-0.5">
                                  <CheckCircle2 className="w-2.5 h-2.5" />
                                  VAHAN
                                </span>
                              ) : (
                                <span className="px-1.5 py-0.2 rounded font-mono text-[9px] bg-[#fffbeb] text-[#d97706] border border-[#fde68a] font-bold flex items-center gap-0.5">
                                  <AlertTriangle className="w-2.5 h-2.5" />
                                  KYC PENDING
                                </span>
                              )}
                            </div>
                            <div className="font-sans text-[11px] text-[#78716c] flex items-center gap-2 mt-0.5">
                              <span>{carrier.hub}</span>
                              <span className="text-[#dfdbd5]">•</span>
                              <span className="font-mono text-[10px] text-[#78716c]">
                                GST: {carrier.gstin}
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Contact */}
                      <td className="py-2.5 px-3 align-top">
                        <div className="font-sans text-xs font-semibold text-[#070707]">
                          {carrier.contact}
                        </div>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className="font-mono text-[11px] text-[#78716c]">{carrier.phone}</span>
                          <button
                            type="button"
                            onClick={() => handlePing(carrier.name, carrier.phone)}
                            className="text-[#059669] hover:text-[#047857]"
                            title="Instant WhatsApp Ping"
                          >
                            <MessageSquare className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>

                      {/* Corridor */}
                      <td className="py-2.5 px-3 align-top">
                        <div className="flex flex-wrap gap-1 max-w-[170px]">
                          {carrier.corridors.map((c) => (
                            <span
                              key={c}
                              className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-[#f7f6f4] text-[#070707] font-semibold border border-[#eae7e1]"
                            >
                              {c.replace("-", " ➔ ")}
                            </span>
                          ))}
                        </div>
                        <span className="font-mono text-[9px] text-[#059669] font-medium mt-1 inline-block">
                          {carrier.corridorBadge}
                        </span>
                      </td>

                      {/* Fleet */}
                      <td className="py-2.5 px-3 align-top">
                        <div className="font-mono text-[11px] text-[#070707] space-y-0.5">
                          <div>
                            <span className="font-bold text-[#be3420]">{carrier.fleetMain}</span>{" "}
                            {carrier.fleetMainType}
                          </div>
                          <div className="text-[#78716c] text-[10px]">{carrier.fleetSec}</div>
                        </div>
                      </td>

                      {/* SLA & Response */}
                      <td className="py-2.5 px-3 align-top">
                        <div className="flex items-center gap-1.5">
                          <span className="font-sans text-xs font-bold text-[#070707]">
                            {carrier.rating}★
                          </span>
                          <span className="font-mono text-[10px] text-[#78716c]">
                            ({carrier.trips} trips)
                          </span>
                        </div>
                        <div className="font-mono text-[10px] text-[#059669] font-medium mt-0.5">
                          {carrier.onTime} On-Time
                        </div>
                        <div className="font-mono text-[10px] text-[#78716c]">
                          Avg resp: {carrier.respTime}
                        </div>
                      </td>

                      {/* Commercial Terms */}
                      <td className="py-2.5 px-3 align-top">
                        <div className="font-mono text-[11px] font-bold text-[#070707]">
                          {carrier.terms}
                        </div>
                        <div className="font-mono text-[10px] text-[#78716c] mt-0.5">
                          POD window: {carrier.podWindow}
                        </div>
                        <span className="inline-block mt-0.5 font-mono text-[9px] text-[#059669] bg-[#ecfdf5] border border-[#a7f3d0] px-1 rounded">
                          {carrier.badgeExtra}
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="py-2.5 px-3 align-top text-right pr-4">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            type="button"
                            onClick={() => handlePing(carrier.name, carrier.phone)}
                            className="h-7 px-2.5 rounded-lg bg-[#059669] hover:bg-[#047857] text-white font-mono text-[10px] font-semibold flex items-center gap-1 shadow-2xs transition-all active:scale-95"
                          >
                            <Send className="w-3 h-3" />
                            <span>WhatsApp RFQ</span>
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              showToast(`${carrier.name} Rate Contract: ₹1,24,000 ${carrier.corridors[0]} (Avg)`)
                            }
                            className="h-7 px-2 rounded-lg bg-[#f7f6f4] hover:bg-[#eae7e1] text-[#070707] font-mono text-[10px] border border-[#dfdbd5] transition-colors"
                          >
                            Rates
                          </button>
                          <button
                            type="button"
                            onClick={() => showToast(`Opening profile editor for ${carrier.name}...`)}
                            className="h-7 w-7 rounded-lg flex items-center justify-center text-[#78716c] hover:text-[#070707] hover:bg-[#f7f6f4] transition-colors"
                          >
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Table Pagination & Count Sub-bar */}
          <div className="h-10 px-3.5 bg-[#f7f6f4] flex items-center justify-between border-t border-[#dfdbd5] font-mono text-[11px] text-[#78716c]">
            <div className="flex items-center gap-2">
              <span>
                Showing <strong className="text-[#070707]">{filteredTransporters.length} of 148</strong>{" "}
                Verified Transporters
              </span>
              <span className="text-[#dfdbd5]">|</span>
              <span className="text-[#059669] font-semibold">100% VAHAN RC Linked</span>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                disabled
                className="h-6 px-2 rounded bg-[#eae7e1] text-[#a8a29e] opacity-60 cursor-not-allowed"
              >
                Previous
              </button>
              <button
                type="button"
                className="h-6 px-2 rounded bg-[#09090b] text-white font-bold"
              >
                1
              </button>
              <button
                type="button"
                className="h-6 px-2 rounded bg-[#eae7e1] text-[#070707] hover:bg-[#dfdbd5]"
              >
                2
              </button>
              <button
                type="button"
                className="h-6 px-2 rounded bg-[#eae7e1] text-[#070707] hover:bg-[#dfdbd5]"
              >
                3
              </button>
              <button
                type="button"
                className="h-6 px-2 rounded bg-[#eae7e1] text-[#070707] hover:bg-[#dfdbd5]"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. VIEW 2: FLEET CARDS MOSAIC GRID */}
      {viewMode === "grid" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {filteredTransporters.map((carrier) => (
            <div
              key={carrier.id}
              className="p-4 bg-white rounded-xl border border-[#eae7e1] hover:border-[#be3420]/40 transition-all flex flex-col justify-between shadow-2xs group"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono text-[9px] px-2 py-0.5 rounded font-bold uppercase ${
                      carrier.status === "VERIFIED"
                        ? "bg-[#ecfdf5] text-[#059669] border border-[#a7f3d0]"
                        : "bg-[#fffbeb] text-[#d97706] border border-[#fde68a]"
                    }`}
                  >
                    {carrier.status === "VERIFIED" ? "VAHAN VERIFIED" : "KYC PENDING"}
                  </span>
                  <span className="font-mono text-[11px] text-[#78716c]">
                    {carrier.rating} ★ ({carrier.trips})
                  </span>
                </div>

                <h3 className="font-sans text-sm font-bold text-[#070707] mt-2 group-hover:text-[#be3420] transition-colors">
                  {carrier.name}
                </h3>
                <p className="font-sans text-xs text-[#78716c]">{carrier.hub}</p>

                <div className="mt-3 py-2 bg-[#f7f6f4] rounded-lg px-2.5 flex items-center justify-between text-xs">
                  <span className="text-[#78716c]">Fleet Strength:</span>
                  <span className="font-mono text-xs font-bold text-[#070707]">
                    {carrier.fleetMain} {carrier.fleetMainType}
                  </span>
                </div>

                <div className="mt-2.5 flex flex-wrap gap-1">
                  {carrier.corridors.map((c) => (
                    <span
                      key={c}
                      className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-[#f7f6f4] text-[#070707] border border-[#eae7e1]"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#eae7e1] flex items-center justify-between">
                <span className="font-mono text-xs text-[#78716c] truncate max-w-[160px]">
                  {carrier.contact}
                </span>
                <button
                  type="button"
                  onClick={() => handlePing(carrier.name, carrier.phone)}
                  className="h-7 px-3 rounded-lg bg-[#059669] hover:bg-[#047857] text-white font-mono text-[10px] font-semibold flex items-center gap-1 shadow-2xs"
                >
                  <MessageSquare className="w-3 h-3" />
                  <span>RFQ</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 5. OPERATIONAL ACTIVITY & TELEMETRY STRIP */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3.5 pt-2">
        {/* Real-time WhatsApp Broadcast Stream */}
        <div className="p-4 bg-white rounded-xl border border-[#eae7e1] flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between border-b border-[#eae7e1] pb-2 mb-2.5">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#059669] text-base">mark_chat_unread</span>
                <span className="font-mono text-[10px] font-bold uppercase text-[#070707]">
                  Live WhatsApp RFQ Engine
                </span>
              </div>
              <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse"></span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-2.5 bg-[#f7f6f4] rounded-lg border border-[#eae7e1]">
                <div className="flex items-center justify-between text-[10px] font-mono text-[#78716c]">
                  <span>LR #HF-99201 ➔ BLR to BHW</span>
                  <span className="text-[#059669] font-bold">2.4m ago</span>
                </div>
                <p className="text-[#070707] mt-1 text-xs leading-tight">
                  Broadcasted 40ft Trailer requirement to 8 verified carriers. 3 counter-quotes received.
                </p>
              </div>

              <div className="p-2.5 bg-[#f7f6f4] rounded-lg border border-[#eae7e1]">
                <div className="flex items-center justify-between text-[10px] font-mono text-[#78716c]">
                  <span>RATE LOCK ➔ Ghatge Patil</span>
                  <span className="text-[#78716c]">8m ago</span>
                </div>
                <p className="text-[#070707] mt-1 text-xs leading-tight">
                  Auto-negotiation matched ₹1,22,000 against ₹1,25,000 shipper target. POD auto-binded.
                </p>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => handlePing("Fleet Broadcast Pool", "42 Transporters")}
            className="mt-3.5 w-full py-2 bg-[#f7f6f4] hover:bg-[#eae7e1] text-[#070707] rounded-lg font-mono text-xs font-semibold flex items-center justify-center gap-1.5 border border-[#dfdbd5] transition-colors"
          >
            <span>Broadcast Spot Load to 42 Transporters</span>
          </button>
        </div>

        {/* Corridor Capacity Map Visualizer */}
        <div className="p-4 bg-white rounded-xl border border-[#eae7e1] flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between border-b border-[#eae7e1] pb-2 mb-2.5">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#be3420] text-base">hub</span>
                <span className="font-mono text-[10px] font-bold uppercase text-[#070707]">
                  Corridor Load Capacity
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#78716c]">TODAY 14:00 IST</span>
            </div>

            <div className="space-y-2.5 text-xs">
              <div>
                <div className="flex justify-between font-mono text-[11px] mb-1">
                  <span className="font-semibold text-[#070707]">Bengaluru ➔ Bhiwandi (NH48)</span>
                  <span className="font-bold text-[#be3420]">84% Capacity</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#f7f6f4] overflow-hidden">
                  <div className="h-full bg-[#be3420] rounded-full" style={{ width: "84%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between font-mono text-[11px] mb-1">
                  <span className="font-semibold text-[#070707]">Bengaluru ➔ Hyderabad (NH44)</span>
                  <span className="font-bold text-[#059669]">62% Capacity</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#f7f6f4] overflow-hidden">
                  <div className="h-full bg-[#059669] rounded-full" style={{ width: "62%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between font-mono text-[11px] mb-1">
                  <span className="font-semibold text-[#070707]">Bengaluru ➔ Chennai (NH48)</span>
                  <span className="font-bold text-[#059669]">48% Capacity</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#f7f6f4] overflow-hidden">
                  <div className="h-full bg-[#059669] rounded-full" style={{ width: "48%" }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3.5 flex items-center justify-between font-mono text-[11px] text-[#78716c] bg-[#f7f6f4] p-2 rounded-lg border border-[#eae7e1]">
            <span>
              Active Trailer Indents: <strong className="text-[#070707]">28 Loads</strong>
            </span>
            <span className="text-[#059669] font-semibold">Supply Optimal</span>
          </div>
        </div>

        {/* Quick Transporter Onboarding Banner */}
        <div className="p-4 bg-gradient-to-br from-[#fef2f0]/40 via-white to-white rounded-xl border border-[#be3420]/25 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between border-b border-[#eae7e1] pb-2 mb-2.5">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#be3420] text-base">verified_user</span>
                <span className="font-mono text-[10px] font-bold uppercase text-[#070707]">
                  VAHAN Automated KYC
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#059669] font-bold">API v2.4 OK</span>
            </div>

            <p className="font-sans text-xs text-[#78716c] leading-relaxed">
              Integrated directly with Parivahan VAHAN portal and GSTIN e-Way Bill registry. New carriers
              undergo instant chassis, fitness certificate, and TDS 194C verification.
            </p>

            <div className="mt-3.5 grid grid-cols-2 gap-2 text-center">
              <div className="p-2 bg-[#f7f6f4] rounded-lg border border-[#eae7e1]">
                <div className="font-sans text-lg font-bold text-[#070707]">1.8 min</div>
                <div className="font-mono text-[9px] text-[#78716c] uppercase">Avg Onboard Time</div>
              </div>
              <div className="p-2 bg-[#f7f6f4] rounded-lg border border-[#eae7e1]">
                <div className="font-sans text-lg font-bold text-[#059669]">0.0%</div>
                <div className="font-mono text-[9px] text-[#78716c] uppercase">Compliance Breaches</div>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="mt-3.5 w-full py-2 bg-[#09090b] text-white hover:bg-[#27272a] rounded-lg font-mono text-xs font-semibold flex items-center justify-center gap-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.12)] transition-all active:scale-95"
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span>Initiate Transporter Onboarding</span>
          </button>
        </div>
      </div>

      {/* 6. SLIDE-OVER DRAWER: ONBOARD NEW TRANSPORTER */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div
            onClick={() => setDrawerOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity animate-fadeIn"
            aria-hidden="true"
          />

          {/* Panel */}
          <div className="relative w-full max-w-xl bg-white shadow-2xl flex flex-col justify-between z-50 border-l border-[#dfdbd5] h-full animate-slideInRight">
            {/* Drawer Header */}
            <div className="p-4 bg-[#f7f6f4] border-b border-[#dfdbd5] flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#be3420] text-xl">local_shipping</span>
                  <h2 className="font-sans text-base font-bold text-[#070707]">
                    Onboard New Transporter
                  </h2>
                </div>
                <p className="font-sans text-xs text-[#78716c] mt-0.5">
                  Autonomous VAHAN, GST &amp; TDS 194C KYC Verification Engine
                </p>
              </div>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                className="p-1 rounded-lg text-[#78716c] hover:text-[#070707] hover:bg-[#eae7e1]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Body (Multi-Step Form) */}
            <form onSubmit={handleSaveTransporter} className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
              {/* Step 1: Basic Profile */}
              <div className="bg-[#f7f6f4] p-3.5 rounded-xl border border-[#eae7e1]">
                <div className="flex items-center gap-2 mb-2.5 pb-1.5 border-b border-[#dfdbd5]">
                  <span className="w-5 h-5 rounded-full bg-[#be3420] text-white font-mono text-[10px] font-bold flex items-center justify-center">
                    1
                  </span>
                  <span className="font-mono text-[10px] font-bold uppercase text-[#070707]">
                    Carrier Profile &amp; Dispatch Point
                  </span>
                </div>

                <div className="space-y-2.5">
                  <div>
                    <label className="block font-mono text-[10px] font-medium text-[#78716c] mb-1">
                      Registered Transporter Business Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      placeholder="e.g., Mahalakshmi Transport Corporation"
                      className="w-full h-8 px-2.5 bg-white border border-[#dfdbd5] rounded-lg text-xs text-[#070707] focus:outline-none focus:border-[#be3420]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block font-mono text-[10px] font-medium text-[#78716c] mb-1">
                        Dispatch Manager Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={newManager}
                        onChange={(e) => setNewManager(e.target.value)}
                        placeholder="e.g., Rajesh G. Gowda"
                        className="w-full h-8 px-2.5 bg-white border border-[#dfdbd5] rounded-lg text-xs text-[#070707] focus:outline-none focus:border-[#be3420]"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] font-medium text-[#78716c] mb-1">
                        WhatsApp Mobile (+91) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={newPhone}
                        onChange={(e) => setNewPhone(e.target.value)}
                        placeholder="98450 12345"
                        className="w-full h-8 px-2.5 bg-white border border-[#dfdbd5] rounded-lg font-mono text-xs text-[#070707] focus:outline-none focus:border-[#be3420]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="col-span-2">
                      <label className="block font-mono text-[10px] font-medium text-[#78716c] mb-1">
                        Base Yard / Logistics Park Address
                      </label>
                      <input
                        type="text"
                        value={newAddress}
                        onChange={(e) => setNewAddress(e.target.value)}
                        placeholder="Plot 42, 2nd Phase, Peenya"
                        className="w-full h-8 px-2.5 bg-white border border-[#dfdbd5] rounded-lg text-xs text-[#070707] focus:outline-none focus:border-[#be3420]"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] font-medium text-[#78716c] mb-1">
                        PIN Code
                      </label>
                      <input
                        type="text"
                        value={newPin}
                        onChange={(e) => setNewPin(e.target.value)}
                        placeholder="560058"
                        className="w-full h-8 px-2.5 bg-white border border-[#dfdbd5] rounded-lg font-mono text-xs text-[#070707] focus:outline-none focus:border-[#be3420]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Route & Lane Affinity */}
              <div className="bg-[#f7f6f4] p-3.5 rounded-xl border border-[#eae7e1]">
                <div className="flex items-center gap-2 mb-2.5 pb-1.5 border-b border-[#dfdbd5]">
                  <span className="w-5 h-5 rounded-full bg-[#be3420] text-white font-mono text-[10px] font-bold flex items-center justify-center">
                    2
                  </span>
                  <span className="font-mono text-[10px] font-bold uppercase text-[#070707]">
                    Route &amp; Corridor Affinity
                  </span>
                </div>

                <label className="block font-mono text-[10px] font-medium text-[#78716c] mb-1.5">
                  Select Primary Operating Corridors
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {["BLR-BHW", "BLR-HYD", "BLR-MAA", "BLR-DEL"].map((lane) => {
                    const isChecked = selectedLanes.includes(lane);
                    return (
                      <button
                        type="button"
                        key={lane}
                        onClick={() => {
                          setSelectedLanes((prev) =>
                            isChecked ? prev.filter((l) => l !== lane) : [...prev, lane]
                          );
                        }}
                        className={`px-2.5 py-1 rounded-lg font-mono text-[11px] transition-all border ${
                          isChecked
                            ? "bg-[#fef2f0] text-[#be3420] border-[#be3420]/40 font-bold"
                            : "bg-white text-[#78716c] border-[#dfdbd5]"
                        }`}
                      >
                        {lane.replace("-", " ➔ ")}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <input
                    id="returnLoad"
                    type="checkbox"
                    checked={returnLoad}
                    onChange={(e) => setReturnLoad(e.target.checked)}
                    className="w-4 h-4 rounded text-[#be3420] accent-[#be3420]"
                  />
                  <label
                    htmlFor="returnLoad"
                    className="font-sans text-xs text-[#070707] font-medium cursor-pointer"
                  >
                    Enforce Return Load Priority Routing (Decreases dry-run empty miles)
                  </label>
                </div>
              </div>

              {/* Step 3: Fleet Breakdown */}
              <div className="bg-[#f7f6f4] p-3.5 rounded-xl border border-[#eae7e1]">
                <div className="flex items-center gap-2 mb-2.5 pb-1.5 border-b border-[#dfdbd5]">
                  <span className="w-5 h-5 rounded-full bg-[#be3420] text-white font-mono text-[10px] font-bold flex items-center justify-center">
                    3
                  </span>
                  <span className="font-mono text-[10px] font-bold uppercase text-[#070707]">
                    Fleet Breakdown &amp; Dedicated Inventory
                  </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  <div>
                    <label className="block font-mono text-[10px] text-[#78716c] uppercase mb-1">
                      40ft Trailer
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={fTrailer}
                      onChange={(e) => setFTrailer(e.target.value)}
                      className="w-full h-8 px-2 bg-white border border-[#dfdbd5] rounded-lg font-mono text-xs text-[#070707] text-center focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] text-[#78716c] uppercase mb-1">
                      32ft MXL
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={fMxl}
                      onChange={(e) => setFMxl(e.target.value)}
                      className="w-full h-8 px-2 bg-white border border-[#dfdbd5] rounded-lg font-mono text-xs text-[#070707] text-center focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] text-[#78716c] uppercase mb-1">
                      10W Taurus
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={fTaurus}
                      onChange={(e) => setFTaurus(e.target.value)}
                      className="w-full h-8 px-2 bg-white border border-[#dfdbd5] rounded-lg font-mono text-xs text-[#070707] text-center focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] text-[#78716c] uppercase mb-1">
                      6W / LCV
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={fLcv}
                      onChange={(e) => setFLcv(e.target.value)}
                      className="w-full h-8 px-2 bg-white border border-[#dfdbd5] rounded-lg font-mono text-xs text-[#070707] text-center focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Step 4: Statutory Compliance & Banking */}
              <div className="bg-[#f7f6f4] p-3.5 rounded-xl border border-[#eae7e1]">
                <div className="flex items-center gap-2 mb-2.5 pb-1.5 border-b border-[#dfdbd5]">
                  <span className="w-5 h-5 rounded-full bg-[#be3420] text-white font-mono text-[10px] font-bold flex items-center justify-center">
                    4
                  </span>
                  <span className="font-mono text-[10px] font-bold uppercase text-[#070707]">
                    Statutory Compliance &amp; Banking
                  </span>
                </div>

                <div className="space-y-2.5">
                  <div>
                    <label className="block font-mono text-[10px] font-medium text-[#78716c] mb-1">
                      GSTIN (15 Alpha-Numeric)
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={newGstin}
                        onChange={(e) => setNewGstin(e.target.value)}
                        placeholder="29AAAAA0000A1Z5"
                        className="flex-1 h-8 px-2.5 bg-white border border-[#dfdbd5] rounded-lg font-mono uppercase text-xs text-[#070707] focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => alert("GSTIN Verified against Govt E-Way Database: ACTIVE")}
                        className="h-8 px-3 rounded-lg bg-[#059669] hover:bg-[#047857] text-white font-mono text-xs font-bold transition-colors"
                      >
                        Verify GST
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block font-mono text-[10px] font-medium text-[#78716c] mb-1">
                        PAN Number
                      </label>
                      <input
                        type="text"
                        value={newPan}
                        onChange={(e) => setNewPan(e.target.value)}
                        placeholder="AAAAA0000A"
                        className="w-full h-8 px-2.5 bg-white border border-[#dfdbd5] rounded-lg font-mono uppercase text-xs text-[#070707] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] font-medium text-[#78716c] mb-1">
                        IFSC Code
                      </label>
                      <input
                        type="text"
                        value={newIfsc}
                        onChange={(e) => setNewIfsc(e.target.value)}
                        placeholder="HDFC0001234"
                        className="w-full h-8 px-2.5 bg-white border border-[#dfdbd5] rounded-lg font-mono uppercase text-xs text-[#070707] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] font-medium text-[#78716c] mb-1">
                      Bank Account Number (for Instant IMPS Advance)
                    </label>
                    <input
                      type="text"
                      value={newBankAcc}
                      onChange={(e) => setNewBankAcc(e.target.value)}
                      placeholder="50200028192812"
                      className="w-full h-8 px-2.5 bg-white border border-[#dfdbd5] rounded-lg font-mono text-xs text-[#070707] focus:outline-none"
                    />
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <input
                      id="tds194"
                      type="checkbox"
                      checked={tds194}
                      onChange={(e) => setTds194(e.target.checked)}
                      className="w-4 h-4 rounded text-[#059669] accent-[#059669]"
                    />
                    <label
                      htmlFor="tds194"
                      className="font-sans text-xs text-[#070707] cursor-pointer"
                    >
                      TDS Section 194C Exemption Declaration Submitted (&lt;10 Goods Carriages)
                    </label>
                  </div>
                </div>
              </div>

              {/* Step 5: Commercial Agreement */}
              <div className="bg-[#f7f6f4] p-3.5 rounded-xl border border-[#eae7e1]">
                <div className="flex items-center gap-2 mb-2.5 pb-1.5 border-b border-[#dfdbd5]">
                  <span className="w-5 h-5 rounded-full bg-[#be3420] text-white font-mono text-[10px] font-bold flex items-center justify-center">
                    5
                  </span>
                  <span className="font-mono text-[10px] font-bold uppercase text-[#070707]">
                    Standard Commercial Agreement
                  </span>
                </div>

                <div className="space-y-2.5">
                  <div>
                    <div className="flex justify-between font-mono text-[11px] mb-1">
                      <span className="text-[#78716c]">Advance Freight on Loading:</span>
                      <span className="font-bold text-[#070707]">{advPercent}% Advance</span>
                    </div>
                    <input
                      type="range"
                      min="50"
                      max="85"
                      step="5"
                      value={advPercent}
                      onChange={(e) => setAdvPercent(Number(e.target.value))}
                      className="w-full accent-[#be3420]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 bg-white rounded-lg border border-[#dfdbd5]">
                      <span className="text-[#78716c] block text-[10px] uppercase font-mono">
                        Balance POD Window
                      </span>
                      <span className="font-bold text-[#070707]">48 Hours</span>
                    </div>
                    <div className="p-2.5 bg-white rounded-lg border border-[#dfdbd5]">
                      <span className="text-[#78716c] block text-[10px] uppercase font-mono">
                        Standard Detention
                      </span>
                      <span className="font-bold text-[#070707]">₹1,500 / Day</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Drawer Footer Action Bar */}
              <div className="pt-2 flex items-center justify-end gap-2.5 border-t border-[#dfdbd5]">
                <button
                  type="button"
                  onClick={() => setDrawerOpen(false)}
                  className="h-9 px-4 bg-white hover:bg-[#f7f6f4] text-[#070707] text-xs font-semibold rounded-lg border border-[#dfdbd5] transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="h-9 px-4 bg-[#09090b] hover:bg-[#27272a] text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.12)] transition-all active:scale-95"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Save &amp; Authenticate Transporter</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 7. TOAST NOTIFICATION CONTAINER */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 bg-[#070707] text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2.5 z-50 font-sans text-xs border border-neutral-800 animate-slideUp">
          <CheckCircle2 className="w-4 h-4 text-[#059669]" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
};

