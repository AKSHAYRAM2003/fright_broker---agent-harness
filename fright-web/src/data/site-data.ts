import { NavItem, PartnerLogo, CaseStudy, EnterpriseVertical } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Platform",
    href: "#platform",
    children: [
      {
        title: "Agentic Orchestration Engine",
        description: "Autonomous execution layer combining LLM reasoning with deterministic systems.",
        href: "#platform",
      },
      {
        title: "Context & Knowledge Graph",
        description: "Continuous enterprise memory capturing operating state across ERPs and CRMs.",
        href: "#platform",
      },
      {
        title: "Enterprise Guardrails & Security",
        description: "SOC 2 Type II, ISO 27001 certified with human-in-the-loop audit logs.",
        href: "#security",
      },
      {
        title: "Integrations & Prebuilt Adapters",
        description: "Native connectors for SAP, Salesforce, McLeod, TMW, Oracle, and legacy mainframes.",
        href: "#platform",
      },
    ],
  },
  {
    label: "Solutions",
    href: "#solutions",
    children: [
      {
        title: "Logistics & Freight Brokerage",
        description: "Automate load tracking, rate negotiation, carrier dispatch, and exception recovery.",
        href: "#solutions",
      },
      {
        title: "Energy & Utilities",
        description: "Customer service intake, outage routing, dispute reconciliation, and field operations.",
        href: "#solutions",
      },
      {
        title: "Financial Services & Insurance",
        description: "Claims adjudication, fraud detection intake, and back-office policy processing.",
        href: "#solutions",
      },
      {
        title: "Airlines & Travel Operations",
        description: "Irregular operations (IROPS), crew rescheduling, baggage reconciliation.",
        href: "#solutions",
      },
    ],
  },
  {
    label: "Customers",
    href: "#case-studies",
  },
  {
    label: "Careers",
    href: "#careers",
    badge: "We're hiring",
  },
  {
    label: "Newsroom",
    href: "#newsroom",
  },
];

export const PARTNER_LOGOS: PartnerLogo[] = [
  { id: "dhl", name: "DHL", src: "/images/logos/landing-logo-dhl.svg" },
  { id: "kuehne", name: "Kuehne+Nagel", src: "/images/logos/landing-logo-kuehne-nagel.svg" },
  { id: "uber", name: "Uber Freight", src: "/images/logos/landing-logo-uber.svg" },
  { id: "werner", name: "Werner", src: "/images/logos/landing-logo-werner.svg" },
  { id: "naturgy", name: "Naturgy", src: "/images/logos/landing-logo-naturgy.svg" },
  { id: "ryder", name: "Ryder", src: "/images/logos/landing-logo-ryder.svg" },
  { id: "samsara", name: "Samsara", src: "/images/logos/landing-logo-samsara.svg" },
  { id: "cma", name: "CMA CGM", src: "/images/logos/landing-logo-cma-cgm.svg" },
  { id: "repsol", name: "Repsol", src: "/images/logos/landing-logo-repsol.svg" },
  { id: "wwex", name: "WWEX Group", src: "/images/logos/landing-logo-wwex.svg" },
  { id: "lkw", name: "LKW Walter", src: "/images/logos/landing-logo-lkw-walter.svg" },
  { id: "avanza", name: "Avanza", src: "/images/logos/landing-logo-avanza.svg" },
  { id: "marmic", name: "Marmic", src: "/images/logos/landing-logo-marmic.svg" },
  { id: "mode", name: "Mode Transportation", src: "/images/logos/landing-logo-mode.svg" },
  { id: "jobandtalent", name: "Job&Talent", src: "/images/logos/landing-logo-jobandtalent.svg" },
  { id: "etihad", name: "Etihad Airways", src: "/images/logos/etihad-airways-mono.svg" },
  { id: "circle", name: "Circle Logistics", src: "/images/logos/landing-logo-circle.svg" },
  { id: "encompass", name: "Encompass", src: "/images/logos/landing-logo-encompass.svg" },
  { id: "infinit", name: "Infinit", src: "/images/logos/landing-logo-infinit.svg" },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "dhl",
    company: "DHL Global Forwarding",
    metric: "94%",
    highlight: "Autonomous issue resolution without human intervention",
    summary: "DHL handles millions of multi-modal container movements annually. HappyRobot autonomous agents communicate directly with ocean carriers, terminals, and dispatchers to resolve delays and sync tracking data across global TMS instances in real time.",
    quote: "HappyRobot transformed how our operations team coordinates freight exceptions. We went from reactive fire-fighting to proactive, autonomous resolution across 14 European gateways.",
    author: "Marcello Conti",
    role: "VP of Digital Supply Chain, DHL",
    image: "/images/cdn/landing-case-dhl.webp",
    logo: "/images/logos/landing-logo-dhl.svg",
    tags: ["Freight Forwarding", "Exception Management", "Voice & Email Agents"],
  },
  {
    id: "naturgy",
    company: "Naturgy Energy Group",
    metric: "7.2x",
    highlight: "Faster resolution on complex energy billing inquiries",
    summary: "As one of Europe's largest energy utilities, Naturgy deployed HappyRobot to streamline complex customer service interactions and grid maintenance communications, executing live database checks and issuing automated adjustments within regulatory guidelines.",
    quote: "Our autonomous agents handle deep, multi-step customer inquiries with the exact institutional knowledge our most senior representatives possess.",
    author: "Elena Vasquez",
    role: "Head of Operations & Innovation, Naturgy",
    image: "/images/cdn/landing-case-naturgy.webp",
    logo: "/images/logos/landing-logo-naturgy.svg",
    tags: ["Energy & Utilities", "Billing Reconciliation", "Multi-lingual Support"],
  },
  {
    id: "kuehne",
    company: "Kuehne+Nagel",
    metric: "0 sec",
    highlight: "Zero-latency carrier dispatch response 24/7/365",
    summary: "Kuehne+Nagel deployed HappyRobot voice and API agents to conduct automated carrier check-ins, rate negotiation verification, and BOL document audits across thousands of high-velocity overland shipping lanes.",
    quote: "The ability of HappyRobot to understand nuanced transport jargon and act directly in our enterprise software is unprecedented.",
    author: "Hans Richter",
    role: "Global Overland Logistics Lead, Kuehne+Nagel",
    image: "/images/cdn/landing-case-kuehne-nagel.webp",
    logo: "/images/logos/landing-logo-kuehne-nagel.svg",
    tags: ["Overland Logistics", "Automated Dispatch", "Real-Time Tracking"],
  },
];

export const VERTICALS: EnterpriseVertical[] = [
  {
    id: "logistics",
    name: "Freight & Logistics",
    tagline: "Autonomous broker and carrier workflows at scale",
    image: "/images/cdn/landing-sector-logistics.webp",
    workflows: [
      "Check-calls & geofence exception handling",
      "Carrier vetting & rate sheet confirmation",
      "BOL / POD document parsing & indexing",
      "Detention & lumper charge reconciliation",
    ],
  },
  {
    id: "utilities",
    name: "Energy & Utilities",
    tagline: "High-volume customer and field grid operations",
    image: "/images/cdn/landing-sector-utilities.webp",
    workflows: [
      "Outage intake & dispatch ticketing",
      "Billing variance investigation & credits",
      "Smart meter telemetry anomaly actioning",
      "Regulatory compliance audit logging",
    ],
  },
  {
    id: "airlines",
    name: "Aviation & Airlines",
    tagline: "Operational agility during irregular flight disruptions",
    image: "/images/cdn/landing-sector-airlines.webp",
    workflows: [
      "IROPS passenger rebooking & vouchers",
      "Crew rescheduling & regulatory rest checks",
      "Mishandled baggage track & trace",
      "Cargo space reservation rebalancing",
    ],
  },
  {
    id: "finance",
    name: "Financial Services",
    tagline: "Audit-grade back-office processing and reconciliation",
    image: "/images/cdn/landing-sector-finance.png",
    workflows: [
      "Trade settlement exception investigation",
      "KYC & business verification enrichment",
      "Invoice matching against purchase orders",
      "Dispute intake & evidentiary assembly",
    ],
  },
  {
    id: "insurance",
    name: "Insurance Operations",
    tagline: "First notice of loss to claim payout coordination",
    image: "/images/cdn/landing-sector-insurance.webp",
    workflows: [
      "First Notice of Loss (FNOL) triage",
      "Police report & photo evidence indexing",
      "Repair shop estimate cross-checking",
      "Policyholder deductible updates",
    ],
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Supply",
    tagline: "Factory floor supplier synchronisation and parts tracking",
    image: "/images/cdn/landing-sector-manufacturing.webp",
    workflows: [
      "Tier 1/2 supplier delivery expediting",
      "Inventory deficit alerting & replenishment",
      "Material spec discrepancy escalation",
      "Quality return authorization processing",
    ],
  },
  {
    id: "retail",
    name: "Retail & E-Commerce",
    tagline: "Omnichannel fulfillment and vendor chargeback management",
    image: "/images/cdn/landing-sector-retail.webp",
    workflows: [
      "Vendor chargeback dispute management",
      "Omnichannel stock allocation rebalancing",
      "Carrier freight claim filing",
      "VIP customer resolution escalations",
    ],
  },
  {
    id: "telecom",
    name: "Telecommunications",
    tagline: "Network provisioning and enterprise service assurance",
    image: "/images/cdn/landing-sector-telecom.png",
    workflows: [
      "Fiber circuit turn-up milestone tracking",
      "Enterprise SLA breach mitigation",
      "Truck roll avoidance remote diagnostics",
      "Contract renewal intent routing",
    ],
  },
];
