"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowUpRight, Activity } from "lucide-react";

interface AuthShowcaseProps {
  mode: "login" | "signup";
}

export const AuthShowcase: React.FC<AuthShowcaseProps> = ({ mode }) => {
  return (
    <div className="auth-showcase-panel">
      {/* Background Tactile Grid */}
      <div className="auth-showcase-grid-bg" />

      {/* Top Header / Brand Logo & Corridor Ping */}
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
            borderRadius: "4px",
            border: "1px solid #222222",
            backgroundColor: "#0d0d0d",
            padding: "5px 12px",
            fontSize: "11px",
            fontFamily: "var(--font-suisse, monospace)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#34d399",
          }}
        >
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#10b981", display: "inline-block" }} />
          <span>FSM Core Online // 142ms</span>
        </div>
      </div>

      {/* Center Showcase Content */}
      <div style={{ position: "relative", zIndex: 10, margin: "auto 0", padding: "2rem 0" }}>
        <h2
          style={{
            fontSize: "2.15rem",
            fontWeight: "700",
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
            color: "#ffffff",
            margin: "0 0 1rem 0",
            textWrap: "balance",
          }}
        >
          {mode === "login" ? (
            <>
              Operating India&apos;s freight corridors with{" "}
              <span style={{ color: "#dfdbd5" }}>deterministic precision.</span>
            </>
          ) : (
            <>
              Put autonomous agents to work across{" "}
              <span style={{ color: "#dfdbd5" }}>every mandi &amp; highway corridor.</span>
            </>
          )}
        </h2>

        <p
          style={{
            fontSize: "14.5px",
            lineHeight: 1.6,
            color: "#dfdbd5",
            maxWidth: "46ch",
            marginBottom: "2rem",
            textWrap: "pretty",
          }}
        >
          Direct integration with WhatsApp voice notes, VAHAN registry, FASTag toll gates, and strict margin floor enforcement.
        </p>

        {/* High-Craft Industrial Corridor Ledger */}
        <div
          style={{
            border: "1px solid #262626",
            borderRadius: "6px",
            backgroundColor: "#0d0d0d",
            overflow: "hidden",
            marginBottom: "1.75rem",
          }}
        >
          {/* Ledger Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid #1f1f1f",
              backgroundColor: "#141414",
              padding: "10px 14px",
              fontSize: "11px",
              fontFamily: "var(--font-suisse, monospace)",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#dfdbd5",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Activity style={{ width: "13px", height: "13px", color: "#ff462d" }} />
              <span>Active Dispatch Stream // 3 Corridors</span>
            </div>
            <span style={{ color: "#34d399" }}>Live Sync</span>
          </div>

          {/* Row 1: NH-48 */}
          <div
            style={{
              padding: "12px 14px",
              borderBottom: "1px solid #1a1a1a",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "13px", color: "#ffffff" }}>
              <span style={{ fontWeight: "600", letterSpacing: "-0.01em" }}>
                NH-48 • Bhiwandi Hub → Gurgaon Expressway
              </span>
              <span style={{ fontFamily: "var(--font-suisse, monospace)", fontSize: "12px", color: "#34d399", fontWeight: "700" }}>
                +₹3,200 Floor
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                fontSize: "12px",
                fontFamily: "var(--font-suisse, monospace)",
                color: "#dfdbd5",
              }}
            >
              <span>32ft MXL Container</span>
              <span>•</span>
              <span>VAHAN: MH-04-GP-8839</span>
              <span>•</span>
              <span style={{ color: "#34d399" }}>Toll Sync: Charoti Plaza</span>
            </div>
          </div>

          {/* Row 2: NH-44 */}
          <div
            style={{
              padding: "12px 14px",
              borderBottom: "1px solid #1a1a1a",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "13px", color: "#ffffff" }}>
              <span style={{ fontWeight: "600", letterSpacing: "-0.01em" }}>
                NH-44 • Hyderabad MMLP → Nagpur Ring Road
              </span>
              <span style={{ fontFamily: "var(--font-suisse, monospace)", fontSize: "12px", color: "#34d399", fontWeight: "700" }}>
                +₹2,850 Floor
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                fontSize: "12px",
                fontFamily: "var(--font-suisse, monospace)",
                color: "#dfdbd5",
              }}
            >
              <span>24ft Open Taurus</span>
              <span>•</span>
              <span>VAHAN: TS-08-UB-4102</span>
              <span>•</span>
              <span style={{ color: "#34d399" }}>GPS Locked</span>
            </div>
          </div>

          {/* Row 3: Live Audio Parser Wiretap */}
          <div
            style={{
              padding: "10px 14px",
              backgroundColor: "#111111",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: "12px",
              fontFamily: "var(--font-suisse, monospace)",
              color: "#dfdbd5",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#ff462d" }} />
              <span>Voice Note: &ldquo;32ft available Bhiwandi, rate 68k&rdquo;</span>
            </div>
            <span style={{ color: "#ffffff" }}>Parsed in 0.8s</span>
          </div>
        </div>

        {/* Corridor Metric Strip */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "1px",
            backgroundColor: "#222222",
            border: "1px solid #222222",
            borderRadius: "6px",
            overflow: "hidden",
          }}
        >
          <div style={{ backgroundColor: "#0d0d0d", padding: "12px 14px" }}>
            <div style={{ fontSize: "12px", fontFamily: "var(--font-suisse, monospace)", textTransform: "uppercase", letterSpacing: "0.1em", color: "#dfdbd5", marginBottom: "4px" }}>
              Corridor Margin
            </div>
            <div style={{ fontSize: "18px", fontWeight: "700", color: "#ffffff", letterSpacing: "-0.02em" }}>
              ₹2,500<span style={{ fontSize: "12px", color: "#34d399", marginLeft: "4px" }}>min</span>
            </div>
          </div>
          <div style={{ backgroundColor: "#0d0d0d", padding: "12px 14px" }}>
            <div style={{ fontSize: "12px", fontFamily: "var(--font-suisse, monospace)", textTransform: "uppercase", letterSpacing: "0.1em", color: "#dfdbd5", marginBottom: "4px" }}>
              Voice Latency
            </div>
            <div style={{ fontSize: "18px", fontWeight: "700", color: "#ffffff", letterSpacing: "-0.02em" }}>
              &lt; 900ms
            </div>
          </div>
          <div style={{ backgroundColor: "#0d0d0d", padding: "12px 14px" }}>
            <div style={{ fontSize: "12px", fontFamily: "var(--font-suisse, monospace)", textTransform: "uppercase", letterSpacing: "0.1em", color: "#dfdbd5", marginBottom: "4px" }}>
              VAHAN Checks
            </div>
            <div style={{ fontSize: "18px", fontWeight: "700", color: "#ffffff", letterSpacing: "-0.02em" }}>
              100% Verified
            </div>
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
          borderTop: "1px solid #222222",
          paddingTop: "1.25rem",
          fontSize: "12px",
          fontFamily: "var(--font-suisse, monospace)",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "#dfdbd5",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <ShieldCheck style={{ width: "15px", height: "15px", color: "#34d399" }} />
          <span>SOC 2 Type II Certified // 256-Bit SSL</span>
        </div>
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
            color: "#dfdbd5",
            textDecoration: "none",
            transition: "color 0.15s ease",
          }}
        >
          <span>HappyFreight Platform</span>
          <ArrowUpRight style={{ width: "12px", height: "12px" }} />
        </Link>
      </div>
    </div>
  );
};

