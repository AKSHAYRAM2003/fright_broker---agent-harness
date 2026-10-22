import { NavItem, PartnerLogo, CaseStudy, EnterpriseVertical } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Harness Engine",
    href: "#platform",
    children: [
      {
        title: "Vernacular Voice & Chat Intake",
        description: "Parse Kannada (ಕನ್ನಡ), Hindi & Hinglish WhatsApp audio with 94.7% accuracy.",
        href: "#platform",
      },
      {
        title: "Deterministic FSM State Machine",
        description: "Strict 9-state lifecycle from RFQ creation to physical POD settlement.",
        href: "#platform",
      },
      {
        title: "₹2,500 Margin & Compliance Guardrails",
        description: "Mathematical floor enforcement, VAHAN RC verification & blacklisted carrier blocks.",
        href: "#deep-dive",
      },
      {
        title: "Broker Priority Action Queue",
        description: "Human-in-the-loop dashboard with 1-click counter-offers and exception approvals.",
        href: "#deep-dive",
      },
    ],
  },
  {
    label: "Corridors",
    href: "#solutions",
    children: [
      {
        title: "Bengaluru ➔ Mumbai (NH-48)",
        description: "High-density FMCG, automotive components & 32ft MXL container capacity.",
        href: "#solutions",
      },
      {
        title: "Delhi NCR ➔ Ahmedabad / Mumbai",
        description: "Heavy manufacturing, Golden Quadrilateral multi-axle freight sourcing.",
        href: "#solutions",
      },
      {
        title: "Hyderabad ➔ Chennai (NH-16)",
        description: "Pharma cold-chain, port container haulage, and return load optimization.",
        href: "#solutions",
      },
      {
        title: "Pune ➔ Bhiwandi & JNPT Port",
        description: "Inter-warehouse transit, E-Way Bill compliance & automated FASTag pings.",
        href: "#solutions",
      },
    ],
  },
  {
    label: "Case Studies",
    href: "#case-studies",
  },
  {
    label: "Action Queue",
    href: "#deep-dive",
    badge: "HITL Core",
  },
  {
    label: "Request Pilot",
    href: "#cta",
  },
];

export const PARTNER_LOGOS: PartnerLogo[] = [
  { id: "ulip", name: "ULIP (Logistics Data Bank)", src: "/images/logos/landing-logo-dhl.svg" },
  { id: "vahan", name: "VAHAN & Sarathi (MoRTH)", src: "/images/logos/landing-logo-kuehne-nagel.svg" },
  { id: "fastag", name: "FASTag National Tolling", src: "/images/logos/landing-logo-uber.svg" },
  { id: "eway", name: "GST E-Way Bill System", src: "/images/logos/landing-logo-werner.svg" },
  { id: "aimtc", name: "All India Motor Transport Congress", src: "/images/logos/landing-logo-naturgy.svg" },
  { id: "peenya", name: "Peenya Industries Association", src: "/images/logos/landing-logo-ryder.svg" },
  { id: "microlabs", name: "Micro Labs Pharma", src: "/images/logos/landing-logo-samsara.svg" },
  { id: "bosch", name: "Bosch Automotive", src: "/images/logos/landing-logo-cma-cgm.svg" },
  { id: "jindal", name: "Jindal Steel & Power", src: "/images/logos/landing-logo-repsol.svg" },
  { id: "tvs", name: "TVS Supply Chain", src: "/images/logos/landing-logo-wwex.svg" },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "sharma",
    company: "Sharma Road Carriers (Bengaluru ➔ Mumbai)",
    metric: "9 mins",
    highlight: "Average quote sourcing turnaround (down from 65 mins)",
    summary: "Sharma Road Carriers coordinates over 35 container loads daily across the NH-48 Bengaluru-Bhiwandi corridor. By deploying VahanaAI, incoming WhatsApp voice notes in Hinglish and Kannada are automatically structured into RFQs, matched with verified fleet owners, and locked with 1-click broker approval.",
    quote: "Before VahanaAI, our team was glued to WhatsApp groups and phone calls for 8 hours a day. Now, quotes are compared, margins are locked, and booking slips are sent in minutes.",
    author: "Ramesh Sharma",
    role: "Managing Director, Sharma Road Carriers",
    image: "/images/cdn/landing-case-dhl.webp",
    logo: "/images/logos/landing-logo-dhl.svg",
    tags: ["FTL Brokerage", "WhatsApp Voice Intake", "Instant RFQ"],
  },
  {
    id: "karnataka",
    company: "Karnataka-Maharashtra Freightways (Hubballi)",
    metric: "₹0",
    highlight: "Zero margin leakage across 140+ monthly interstate trips",
    summary: "Managing long-haul freight for pharmaceutical and agricultural commodities, Karnataka-Maharashtra deployed VahanaAI's Type-Safe Financial Guardrail. Quotes below the broker's minimum ₹2,500 profit floor are instantly flagged with counter-offer strategies.",
    quote: "In freight brokerage, one miscalculated quote or forgotten toll can wipe out your entire week's profit. VahanaAI acts as our financial bodyguard on every single booking.",
    author: "Sunil Patil",
    role: "Head of Dispatch Operations, KM Freightways",
    image: "/images/cdn/landing-case-naturgy.webp",
    logo: "/images/logos/landing-logo-naturgy.svg",
    tags: ["Margin Protection", "Guardrails", "Rate Negotiation"],
  },
  {
    id: "deccan",
    company: "Deccan Overland Logistics (Hyderabad ➔ Chennai)",
    metric: "4.5x",
    highlight: "Increase in daily load capacity per operations dispatcher",
    summary: "Deccan Overland scaled from 12 loads a day to over 50 loads a day with the exact same 3-person dispatch team. The AI harness autonomously handles FASTag toll pings, proactive shipper notifications, and vision OCR inspection on physical stamped PODs.",
    quote: "Our customers now get real-time tracking updates and verified POD copies before they even ask. It makes our mid-size brokerage look as sophisticated as DHL.",
    author: "Venkatesh Babu",
    role: "Founder & CEO, Deccan Overland Logistics",
    image: "/images/cdn/landing-case-kuehne-nagel.webp",
    logo: "/images/logos/landing-logo-kuehne-nagel.svg",
    tags: ["Autonomous Tracking", "Vision POD OCR", "Zero Headcount Scaling"],
  },
];

export const VERTICALS: EnterpriseVertical[] = [
  {
    id: "logistics",
    name: "Full Truckload (FTL) Brokerage",
    tagline: "High-velocity road freight operations across India's busiest corridors",
    image: "/images/cdn/landing-sector-logistics.webp",
    workflows: [
      "32ft MXL & SXL Container capacity allocation",
      "10-Wheeler Taurus & Multi-Axle sourcing",
      "Lane affinity matching for return loads",
      "Autonomous WhatsApp RFQ broadcast & ranking",
    ],
  },
  {
    id: "vernacular",
    name: "Vernacular Voice & Chat Intake",
    tagline: "Understands the street-level language of Indian road transport",
    image: "/images/cdn/landing-sector-utilities.webp",
    workflows: [
      "Kannada (ಕನ್ನಡ), Kanglish & Hindi voice transcription",
      "Highway background engine noise filtering",
      "Logistics slang parsing (chakka, tauras, mamool)",
      "Automatic missing field clarification prompts",
    ],
  },
  {
    id: "margin",
    name: "Margin & Financial Guardrails",
    tagline: "Deterministic profit protection before any booking commitment",
    image: "/images/cdn/landing-sector-finance.png",
    workflows: [
      "Hard ₹2,500 / 5% margin floor enforcement",
      "Accessorial & loading/unloading charge deduction",
      "70% advance loading payout calculation",
      "TDS (1-2%) and balance settlement ledger",
    ],
  },
  {
    id: "compliance",
    name: "VAHAN & Compliance Verification",
    tagline: "Instant government database validation against rogue operators",
    image: "/images/cdn/landing-sector-insurance.webp",
    workflows: [
      "MoRTH VAHAN RC vehicle status validation",
      "Fitness, National Permit & Insurance validity checks",
      "Sarathi commercial driver license authentication",
      "Internal blacklisted fleet and broker screening",
    ],
  },
  {
    id: "tracking",
    name: "FASTag Toll-Gate Milestone Tracking",
    tagline: "Sensor-verified trip visibility without intrusive driver apps",
    image: "/images/cdn/landing-sector-manufacturing.webp",
    workflows: [
      "National toll plaza ping correlation (NHAI / FASTag)",
      "Corridor corridor geo-fence entry/exit detection",
      "Automated WhatsApp transit alerts to shipper",
      "Driver breakdown & detour exception alerts",
    ],
  },
  {
    id: "vision",
    name: "Vision OCR POD & Bilty Verification",
    tagline: "Instant handwriting and rubber-stamp inspection on delivery slips",
    image: "/images/cdn/landing-sector-retail.webp",
    workflows: [
      "Mobile camera photo Bilty / Lorry Receipt parsing",
      "Consignee receiving stamp detection",
      "Shortage & damage remark extraction",
      "Instant clearance trigger for final 30% payout",
    ],
  },
  {
    id: "hitl",
    name: "Broker Priority Action Queue",
    tagline: "Human-in-the-loop governance for margin and lane exceptions",
    image: "/images/cdn/landing-sector-telecom.png",
    workflows: [
      "Multi-load card queue with urgency sorting",
      "1-Click counter-offer recommendations",
      "Direct WhatsApp dispatch confirmation",
      "Audit logs with immutable decision trails",
    ],
  },
  {
    id: "network",
    name: "Carrier Affinity & Memory",
    tagline: "Compounds operational knowledge across every lane and fleet owner",
    image: "/images/cdn/landing-sector-airlines.webp",
    workflows: [
      "Carrier lane preference & reliability ratings",
      "Historical spot rate benchmark correlation",
      "Driver language profiling (Kannada/Hindi/Tamil)",
      "Zero-overhead repeat booking automation",
    ],
  },
];
