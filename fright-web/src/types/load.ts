export type LoadStatus =
  | "DISPATCHING_RFQS"
  | "DECISION_REQUIRED"
  | "BOOKED"
  | "INCOMPLETE"
  | "DISMISSED";

export interface MatchedCarrier {
  id: string;
  name: string;
  rating: number;
  phone: string;
  fleetCount: string;
  verified: boolean;
  previewRfq: string;
}

export interface CarrierQuote {
  carrierId: string;
  carrierName: string;
  carrierPhone: string;
  rating: number;
  quoteInr: number;
  vehicleNo: string;
  driverName: string;
  driverPhone: string;
  receivedAt: string;
  notes?: string;
}

export interface BookedDetails {
  lrNumber: string;
  bookedAt: string;
  carrierName: string;
  vehicleNo: string;
  driverName: string;
  driverPhone: string;
  rate: number;
  netMarginInr: number;
}

export interface LoadItem {
  id: string;
  shipperName: string;
  shipperPhone?: string;
  origin: string;
  originHub: string;
  destination: string;
  destinationHub: string;
  distanceKm: string;
  corridor: string;
  weightTonnes: number | null;
  materialType: string;
  vehicleCategory: string;
  vehicleDisplay: string;
  targetRateInr: number | null;
  status: LoadStatus;
  slaRemaining?: string;
  isMarginFloorAlert?: boolean;
  isInstantBookReady?: boolean;
  matchedCarriers: MatchedCarrier[];
  bestQuote?: CarrierQuote;
  quotes?: CarrierQuote[];
  netMarginInr?: number;
  netMarginPct?: number;
  spotBenchmarkInr?: number;
  aiConfidence?: string;
  aiSynthesis?: string;
  missingFields?: string[];
  clarificationDraft?: string;
  source?: string;
  bookedDetails?: BookedDetails;
}

export interface WhatsAppFeedEvent {
  id: string;
  type:
    | "INBOUND_QUOTE"
    | "OUTBOUND_RFQ"
    | "INBOUND_INQUIRY"
    | "OUTBOUND_CLARIFICATION"
    | "BOOKING_CONFIRMATION"
    | "COUNTER_OFFER";
  sender: string;
  phone?: string;
  time: string;
  text: string;
  meta?: {
    loadId?: string;
    route?: string;
    weight?: string;
    truck?: string;
    rate?: string;
    badge?: string;
    badgeType?: "success" | "warning" | "error" | "info" | "primary";
  };
  language?: "kannada" | "hinglish" | "english";
}

export interface DashboardStats {
  activeShipments: number;
  inTransit: number;
  loading: number;
  unassigned: number;
  quotesUnderReview: number;
  avgResponseTime: string;
  actionItemsHitl: number;
  marginBreaches: number;
  readyToLock: number;
  payloadDeficits: number;
  grossMarginLocked: number;
  avgMarginPerDispatch: number;
  avgMarginPct: number;
}
