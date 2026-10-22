import { NavItem, PartnerLogo, CaseStudy, EnterpriseVertical } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Platform",
    href: "#platform-diagram",
    children: [
      {
        title: "Deterministic State Machine",
        description: "Enforces a strict Life-of-a-Load FSM from inquiry to financial closure.",
        href: "#platform-diagram",
      },
      {
        title: "Vernacular Voice & Ingestion",
        description: "Parses audio voice notes and text across Kannada, Kanglish, Hindi, Hinglish, and English.",
        href: "#platform-diagram",
      },
      {
        title: "Financial Margin Guardrails",
        description: "Hard stop on rate math errors. Guarantees minimum ₹2,500 or 5% broker profit floor.",
        href: "#platform-diagram",
      },
      {
        title: "VAHAN & Government Integrations",
        description: "Automated checks for National Permits (AITP), fitness certificates, and vehicle GVW.",
        href: "#platform-diagram",
      },
    ],
  },
  {
    label: "Solutions",
    href: "#verticals",
    children: [
      {
        title: "Full Truckload (FTL) Brokerage",
        description: "For brokers operating 32ft Containers, 10-Wheeler Taurus, and Multi-Axle fleets.",
        href: "#verticals",
      },
      {
        title: "Two-Sided Rate Negotiation",
        description: "Autonomous RFQ sourcing and quote ranking against shipper budgets.",
        href: "#verticals",
      },
      {
        title: "In-Transit Milestone Tracking",
        description: "Automated FASTag toll plaza pings and delay exception alerts on NH-48.",
        href: "#verticals",
      },
      {
        title: "Vision OCR for Bilty & POD",
        description: "Instant verification of receiver rubber stamps, signatures, and shortage remarks.",
        href: "#verticals",
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
    label: "Pricing",
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
    summary: "Sharma Road Carriers coordinates over 35 container loads daily across the NH-48 Bengaluru-Bhiwandi corridor. By deploying the VahanaAI Operations Harness, incoming WhatsApp voice notes in Hinglish and Kannada are automatically structured into RFQs, matched with verified fleet owners, and closed with 1-click broker approval.",
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
    id: "vahan",
    name: "VAHAN & Compliance Verification",
    tagline: "Zero-risk carrier onboarding and regulatory inspection",
    image: "/images/cdn/landing-sector-insurance.webp",
    workflows: [
      "Automated VAHAN RC status & blacklisting check",
      "All India National Permit (AITP) validity check",
      "Vehicle Gross Vehicle Weight (GVW) tonnage check",
      "Fitness certificate & commercial insurance audit",
    ],
  },
  {
    id: "tracking",
    name: "In-Transit Milestone Tracking",
    tagline: "Proactive customer visibility without repeated phone check-calls",
    image: "/images/cdn/landing-sector-airlines.webp",
    workflows: [
      "FASTag toll plaza crossing timestamp sync",
      "Automated 4-hour stationary vehicle delay alerts",
      "Proactive shipper WhatsApp ETA notifications",
      "Geofenced warehouse gate-in & gate-out confirmation",
    ],
  },
  {
    id: "pod",
    name: "Vision OCR for Bilty & POD",
    tagline: "Instant document inspection and digital payment settlement",
    image: "/images/cdn/landing-sector-manufacturing.webp",
    workflows: [
      "Receiver official rubber stamp presence detection",
      "Consignee authorized signature verification",
      "Handwritten damage & shortage remark extraction",
      "Instant PDF dispatch to customer accounts team",
    ],
  },
  {
    id: "negotiation",
    name: "Two-Sided Negotiation Engine",
    tagline: "Dynamic rate consensus for budget and open-enquiry loads",
    image: "/images/cdn/landing-sector-retail.webp",
    workflows: [
      "Shipper fixed-budget margin optimization",
      "Open-inquiry market rate markup generator",
      "Automated 3-turn carrier counter-offer loop",
      "Single-tap broker rate lock & slip dispatch",
    ],
  },
  {
    id: "privacy",
    name: "Tenant-Isolated Data Vault",
    tagline: "100% private carrier lists and confidential margin history",
    image: "/images/cdn/landing-sector-telecom.png",
    workflows: [
      "Strict row-level tenant data encryption",
      "Zero cross-broker rate leakage or sharing",
      "Immutable audit log of all pricing approvals",
      "Private lane memory owned exclusively by the broker",
    ],
  },
];
