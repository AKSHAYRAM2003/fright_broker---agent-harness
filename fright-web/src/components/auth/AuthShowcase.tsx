"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Truck, Radio, CheckCircle2 } from "lucide-react";

interface AuthShowcaseProps {
  mode: "login" | "signup";
}

export const AuthShowcase: React.FC<AuthShowcaseProps> = ({ mode }) => {
  return (
    <div className="auth-showcase-panel">
      {/* Background Tactile Grid */}
      <div className="auth-showcase-grid-bg" />

      {/* Top Header / Brand Logo */}
      <div style={{ position: "relative", zIndex: 10, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ textDecoration: "none", color: "#ffffff", display: "inline-block" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <svg
              data-logo="logo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 41 41.4"
              style={{ height: "28px", width: "auto" }}
            >
              <g id="logogram" transform="translate(0, 0.7)">
                <path
                  d="M24 0H16V12.0632C15.9663 14.2434 14.1885 16 12.0005 16H0V24H8.68629C10.808 24 12.8429 23.1571 14.3431 21.6569L21.6569 14.3431C23.1571 12.8429 24 10.808 24 8.68629V0Z"
                  fill="#ffffff"
                />
                <path
                  d="M16 40H24V27.9368C24.0337 25.7566 25.8115 24 27.9995 24H40V16H31.3137C29.192 16 27.1571 16.8429 25.6569 18.3431L18.3431 25.6569C16.8429 27.1571 16 29.192 16 31.3137V40Z"
                  fill="#ff462d"
                />
              </g>
            </svg>
            <span style={{ fontSize: "19px", fontWeight: "700", letterSpacing: "-0.035em", color: "#ffffff" }}>
              Happy<span style={{ color: "#ff462d" }}>Freight</span>
            </span>
          </div>
        </Link>

        {/* Live Corridor Status Indicator */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            borderRadius: "9999px",
            border: "1px solid rgba(16, 185, 129, 0.3)",
            backgroundColor: "rgba(6, 78, 59, 0.4)",
            padding: "4px 12px",
            fontSize: "11px",
            fontFamily: "monospace",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#34d399",
          }}
        >
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#10b981", display: "inline-block" }} />
          Harness Online
        </div>
      </div>

      {/* Center Showcase Content */}
      <div style={{ position: "relative", zIndex: 10, margin: "auto 0", padding: "2.5rem 0" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            borderRadius: "4px",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            padding: "4px 10px",
            fontFamily: "monospace",
            fontSize: "10.5px",
            textTransform: "uppercase",
            letterSpacing: "0.16em",
            color: "#dfdbd5",
            marginBottom: "1.25rem",
          }}
        >
          <Radio style={{ width: "12px", height: "12px", color: "#ff462d" }} />
          Autonomous Dispatch Core v2.4
        </div>

        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "700",
            letterSpacing: "-0.025em",
            lineHeight: 1.15,
            color: "#ffffff",
            margin: "0 0 1rem 0",
          }}
        >
          {mode === "login" ? (
            <>
              Operating India&apos;s freight corridors with{" "}
              <span style={{ color: "#dfdbd5" }}>deterministic AI precision.</span>
            </>
          ) : (
            <>
              Put autonomous agents to work across{" "}
              <span style={{ color: "#dfdbd5" }}>every mandi &amp; highway.</span>
            </>
          )}
        </h2>

        <p
          style={{
            fontSize: "14.5px",
            lineHeight: 1.6,
            color: "#a8a29e",
            maxWidth: "42ch",
            marginBottom: "2rem",
          }}
        >
          Ingesting chaotic WhatsApp voice messages, running real-time VAHAN &amp; FASTag checks, and executing verified loads with strict ₹2,500 margin floors.
        </p>

        {/* Telemetry Cards Grid */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "2rem" }}>
          {/* Card 1: Live Voice Parsing */}
          <div
            style={{
              borderRadius: "8px",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              padding: "14px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "11px",
                fontFamily: "monospace",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#a8a29e",
                marginBottom: "8px",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: "6px", color: "#ffffff" }}>
                <Truck style={{ width: "14px", height: "14px", color: "#ff462d" }} />
                NH-48 Corridor • JNPT to Gurgaon
              </span>
              <span style={{ color: "#34d399", fontWeight: "600" }}>₹2,850 Margin</span>
            </div>
            <div style={{ fontSize: "13px", color: "#dfdbd5", marginBottom: "8px" }}>
              &quot;Bhai, 32ft MXL available from Bhiwandi, rate 68k cash on delivery.&quot;
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "11px",
                fontFamily: "monospace",
                color: "#a8a29e",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: "4px", color: "#34d399" }}>
                <CheckCircle2 style={{ width: "12px", height: "12px" }} /> Voice parsed (0.8s)
              </span>
              <span>•</span>
              <span>VAHAN: Valid</span>
              <span>•</span>
              <span>FASTag: Toll Active</span>
            </div>
          </div>

          {/* Card 2: Enforced Rulebook */}
          <div
            style={{
              borderRadius: "8px",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              padding: "14px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "11px",
                fontFamily: "monospace",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#a8a29e",
                marginBottom: "8px",
              }}
            >
              <span>Deterministic Rulebook</span>
              <span style={{ color: "#ffffff" }}>Active</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  padding: "6px 10px",
                  borderRadius: "4px",
                  fontSize: "11.5px",
                  fontFamily: "monospace",
                  color: "#dfdbd5",
                }}
              >
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#10b981" }} />
                Floor: ₹2,500 Min
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  padding: "6px 10px",
                  borderRadius: "4px",
                  fontSize: "11.5px",
                  fontFamily: "monospace",
                  color: "#dfdbd5",
                }}
              >
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#10b981" }} />
                Trip FSM: Enforced
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Quote */}
        <div style={{ borderLeft: "2px solid #ff462d", paddingLeft: "16px" }}>
          <p style={{ fontSize: "13.5px", fontStyle: "italic", lineHeight: 1.6, color: "#dfdbd5", margin: 0 }}>
            &quot;HappyFreight turned 4 hours of morning WhatsApp fire-fighting into a single review queue. Our team booked 28% more loads in month one.&quot;
          </p>
          <div style={{ fontSize: "12px", fontWeight: "500", color: "#a8a29e", marginTop: "8px" }}>
            — Dispatch Director, Western India Logistics Alliance
          </div>
        </div>
      </div>

      {/* Bottom Security Footer */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid rgba(255, 255, 255, 0.12)",
          paddingTop: "1.25rem",
          fontSize: "11px",
          fontFamily: "monospace",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          color: "#a8a29e",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <ShieldCheck style={{ width: "16px", height: "16px", color: "#34d399" }} />
          <span>SOC 2 Type II Certified</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span>256-Bit SSL</span>
          <span>•</span>
          <span>ISO 27001</span>
        </div>
      </div>
    </div>
  );
};
