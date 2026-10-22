# Product Requirements Document (PRD)
## Project: Indian Freight Broker AI Operations Harness (v1 MVP)

---

## 1. Executive Summary & Vision

### 1.1 Problem Statement
Small-to-medium freight brokers in India manage millions of rupees in road freight daily using fragmented WhatsApp messages, phone calls, paper diaries, and manual Excel sheets. 
This operational chaos causes:
- High quote turnaround times (30–90 minutes per load inquiry).
- Margin leakage due to calculation errors or unstandardized pricing.
- Inability to scale (a 2-person brokerage is capped at 5–10 loads/day before breaking).
- Constant friction in tracking shipments and verifying Proof of Delivery (POD) documents.

### 1.2 Product Vision
Build a **Domain-Specific AI Operations Harness** designed specifically for Indian freight brokers. 
- It acts as an **internal copilot/back-office assistant** that ingests messy multimodal communication (WhatsApp text, voice notes, photos of documents), organizes the load lifecycle into a deterministic Finite State Machine (FSM), enforces financial and legal guardrails, and surfaces prioritized actions in a simple **Broker Action Queue**.
- **Core Mantra:** *Software for the broker, but WhatsApp for the rest of the ecosystem.*

---

## 2. Target Personas & Stakeholders

| Persona | Role | Primary Interface | Key Needs & Pain Points |
| :--- | :--- | :--- | :--- |
| **Broker Owner / Partner** | Primary Customer | Web Dashboard | Wants to maximize daily load volume, prevent margin leakage, track receivables/payables, and protect their proprietary client/transporter network. |
| **Operations / Dispatcher** | Daily Operator | Web Dashboard & Mobile Web | Spends 8+ hours making phone calls, typing into Excel, following up on truck availability, and answering "Where is the truck?" questions. |
| **Transporter / Fleet Owner** | External Supplier | Pure WhatsApp (No App) | Wants clear load requirements, fast booking confirmations, and prompt advance/balance payments. Speaks informal Hinglish/regional dialects. |
| **Truck Driver** | On-Ground Execution | WhatsApp / SMS | Needs pickup Google Maps pin, warehouse contact, and a simple way to submit Bilty and POD photos. |
| **Shipper / Manufacturer** | Customer | WhatsApp & Tracking Link | Demands fast quotes, vehicle compliance assurance, proactive transit milestone alerts, and verified digital PODs. |

---

## 3. Scope Boundaries (v1 MVP)

### 3.1 In-Scope (Must Have for v1)
1. **WhatsApp Inbound Load Extraction:**
   - Parsing informal English, Hindi, and Hinglish messages into structured load records (Origin, Destination, Material, Weight, Vehicle Type, Target Date).
   - Identifying missing attributes and drafting single-tap clarification queries.
2. **Deterministic Domain State Machine (FSM):**
   - Enforcing strict lifecycle transitions (`INQUIRY` → `RFQ_DISPATCHED` → `QUOTES_RECEIVED` → `BOOKED` → `IN_TRANSIT` → `DELIVERED` → `CLOSED`).
3. **Smart RFQ Outreach & Quote Parsing:**
   - Lane-based transporter matching from the broker’s private contacts.
   - Sending structured RFQ messages over WhatsApp to top 3–5 candidate transporters.
   - Parsing informal quotes (text and transcribed voice notes) into a normalized comparison table.
4. **Financial & Compliance Guardrails:**
   - Margin floor calculation: $\text{Margin} = \text{Customer Rate} - \text{Transporter Rate} - \text{Estimated Charges}$.
   - Automatic blocking of quotes that violate the minimum broker margin (e.g., < ₹2,500 or < 5%).
   - Human-in-the-Loop (HITL) confirmation required for any financial commitment.
5. **Broker Operations Console (UI):**
   - **Action Queue:** Prioritized list of tasks requiring human approval (Quote Approvals, Missing Info, Exceptions).
   - **Load Board:** Visual pipeline of active shipments and statuses.
   - **Transporter & Lane Directory:** Historical rates and past performance ratings.
6. **Basic Document & POD Verification:**
   - Vision OCR pipeline to inspect uploaded POD photos: check for receiver stamp presence, signature, and handwritten shortage/damage remarks.

### 3.2 Out-of-Scope (Deferred to v2 / v3)
- Direct payment processing / wallet balance management (no holding or escrowing freight funds).
- Hardware GPS device sales or direct telematics installations.
- Open public load marketplace (no sharing of confidential broker contacts/loads across competitor brokers).
- Autonomous external phone-call negotiation bots (all external calls/negotiations remain human-assisted or strictly human-confirmed).

---

## 4. Key User Stories & Acceptance Criteria

### Epic 1: Load Intake & Structuring
- **User Story 1.1:** As an Operations Dispatcher, when a shipper sends a messy WhatsApp message with load details, I want the system to automatically extract key fields so that I don't have to manually retype them into an Excel sheet.
  - *Acceptance Criteria:*
    - Ingests text strings like *"Kal subah Whitefield se Pune 16T Taurus urgent FMCG"*.
    - Accurately populates: Origin (`Whitefield, Bengaluru`), Destination (`Pune`), Weight (`16 Tonnes`), Vehicle Class (`10-Wheeler Taurus`), Cargo (`FMCG`), Date (`Tomorrow Morning`).
    - If weight or body type is missing, marks state as `INCOMPLETE` and highlights the missing field with a proposed clarification prompt.

### Epic 2: RFQ Sourcing & Quote Comparison
- **User Story 2.1:** As a Broker, I want to dispatch RFQs to my preferred transporters for a specific route with one click, so that I can collect quotes in parallel without making 10 individual phone calls.
  - *Acceptance Criteria:*
    - Filters transporter directory by route affinity (e.g., Bengaluru → Mumbai/Pune).
    - Sends personalized WhatsApp RFQs to up to 5 verified transporters.
    - As quotes arrive on WhatsApp, the system automatically parses numeric amounts, notes accessorials (e.g., "loading extra", "tolls inclusive"), and updates the comparison table.

### Epic 3: Margin Protection & Booking Approval (HITL)
- **User Story 3.1:** As a Broker Owner, I want the system to safeguard my profit margins and require my explicit approval before confirming any booking with a transporter.
  - *Acceptance Criteria:*
    - Given a Customer Rate of ₹50,000 and a Transporter Quote of ₹46,000, calculates Gross Margin = ₹4,000 (8.0%).
    - If Gross Margin < Configured Threshold (e.g., ₹2,500 or 5%), blocks auto-progression and raises a `MARGIN_VIOLATION` alert with options: [Counter Transporter], [Request Shipper Rate Hike], or [Manual Override].
    - Requires a physical click/tap on `[Approve & Confirm]` before any booking confirmation is dispatched to the transporter.

### Epic 4: In-Transit Exception Tracking & POD Closure
- **User Story 4.1:** As a Dispatcher, I want proactive alerts when a vehicle is halted or delayed, so that I can inform the customer before they call me to complain.
  - *Acceptance Criteria:*
    - Tracks milestone check-ins (Loading Complete, Gate-Out, Midpoint, Destination Arrival).
    - If no milestone update or vehicle check-in occurs within the expected SLA (e.g., > 6 hours stationary), flags an item on the Action Queue: `DELAY_EXCEPTION`.
- **User Story 4.2:** As a Broker, when a driver uploads a photo of the signed POD, I want the system to inspect the document for stamps and damages so that I can close the trip quickly and invoice the shipper.
  - *Acceptance Criteria:*
    - Vision model checks image quality, receiver company seal/stamp, and signature.
    - Checks for handwritten annotations indicating deduction (e.g., "Shortage 2 boxes", "Dented").
    - If clean, marks status as `DELIVERY_VERIFIED` and prepares customer dispatch packet.

---

## 5. Domain Business Rules & Indian Freight Taxonomy

### 5.1 Standard Indian Truck Types (Taxonomy Contract)
The system must normalize vernacular terms into standard categories:
- **LCV / Small Commercial:** Tata Ace (Chota Hathi, 1T), Pickup / Bolero (1.5T - 2.5T).
- **ICV (Intermediate):** 14ft / 17ft / 19ft (4T - 7T).
- **MCV / HCV (Multi-Axle & Taurus):** 
  - 6-Wheeler (Open / Container, 9T - 10T)
  - 10-Wheeler Taurus (16T - 18T)
  - 12-Wheeler / 14-Wheeler (21T - 25T)
- **High-Cube Containers:**
  - 32ft SXL (Single Axle, 7.5T)
  - 32ft MXL (Multi Axle, 14T - 18T)
  - 32ft / 40ft HQ (High Cube, FMCG / E-commerce volume)

### 5.2 Financial Calculation & Settlement Formulas
$$\text{Gross Margin} = \text{Shipper Freight} - \text{Transporter Agreed Freight}$$
$$\text{Transporter Advance Payable} = \text{Agreed Freight} \times 0.70 \quad (\text{Standard 70-80\% on Loading})$$
$$\text{Transporter Balance Payable} = \text{Agreed Freight} - \text{Advance Paid} - \text{Mamool/Batta} - \text{TDS (1-2\%)} - \text{Deductions}$$

---

## 6. Success Metrics & KPIs

| Metric | Baseline (Manual Operations) | v1 MVP Target |
| :--- | :--- | :--- |
| **Quote Turnaround Time** | 45–90 minutes | < 15 minutes |
| **Daily Capacity per Operator** | 5–8 active loads | 25–40 active loads |
| **Margin Leakage Rate** | 3–5% of revenue lost to math/terms errors | < 0.2% |
| **POD Processing Turnaround** | 3–7 days (physical courier/lost photos) | < 2 hours from delivery |
| **Critical AI Hallucination Rate** | N/A | **0%** on rates and vehicle tonnage |

---

## 7. Open Technical Assumptions & Dependencies
1. **WhatsApp Connectivity:** Initial MVP testing will use official WhatsApp Business Cloud API sandbox or Twilio WhatsApp API for message exchange.
2. **LLM Reasoning & Extraction:** Multi-modal LLMs (Gemini / Claude / GPT-4o) with structured JSON schemas (Pydantic / Instructor) for extraction.
3. **Storage & Multi-Tenancy:** PostgreSQL with strict row-level security (RLS) or tenant isolation to safeguard proprietary broker data.
