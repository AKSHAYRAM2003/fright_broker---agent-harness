"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AuthShowcase } from "@/components/auth/AuthShowcase";
import { HappyRobotLogo } from "@/components/HappyRobotLogo";
import {
  Building2,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
} from "lucide-react";

export default function SignUpPage() {
  const [companyName, setCompanyName] = useState("");
  const [fullName, setFullName] = useState("");
  const [contactMethod, setContactMethod] = useState<"whatsapp" | "email">("whatsapp");
  const [contactValue, setContactValue] = useState("");
  const [corridor, setCorridor] = useState("NH-48 (Delhi - Mumbai)");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [marginFloor, setMarginFloor] = useState("2500");
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error" | null;
    text: string;
  }>({ type: null, text: "" });

  const triggerShake = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 300);
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreeTerms) {
      triggerShake();
      setStatusMessage({
        type: "error",
        text: "Please accept the Operations Service Agreement to continue.",
      });
      return;
    }
    setIsLoading(true);
    setStatusMessage({ type: null, text: "" });

    setTimeout(() => {
      setIsLoading(false);
      setStatusMessage({
        type: "success",
        text: `Harness initialized for ${companyName || "your brokerage"}! Directing to corridor setup...`,
      });
    }, 1200);
  };

  return (
    <div className="auth-wrapper">
      {/* Left Column: Brand & Dispatch Harness Showcase */}
      <AuthShowcase mode="signup" />

      {/* Right Column: Registration Form Panel */}
      <div className="auth-form-panel">
        {/* Top Bar Navigation: Brand Logo (redirects to Home) & Switch to Sign In */}
        <div className="auth-top-bar">
          <Link
            href="/"
            className="auth-brand-link"
            aria-label="HappyFreight - Return to Home"
          >
            <HappyRobotLogo className="h-6 sm:h-7 w-auto" />
          </Link>

          {/* Switch to Sign In with smooth on-hover underline transition */}
          <Link href="/login" className="auth-nav-link">
            <span className="auth-nav-text">Sign in</span>
            <span className="auth-nav-arrow" aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Main Form Center Area */}
        <div className="auth-form-container auth-form-container-wide">
          {/* Heading & Subtitle without banned kickers */}
          <h1 className="auth-title">Deploy your autonomous harness</h1>
          <p className="auth-subtitle">
            Get your brokerage operational in under 2 minutes. Ingest voice notes and enforce margin floors from load #1.
          </p>

          {/* Status Alert Banner */}
          {statusMessage.type && (
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                borderRadius: "6px",
                border: statusMessage.type === "success" ? "1px solid rgba(16, 185, 129, 0.3)" : "1px solid rgba(239, 68, 68, 0.3)",
                backgroundColor: statusMessage.type === "success" ? "#ecfdf5" : "#fef2f2",
                color: statusMessage.type === "success" ? "#065f46" : "#991b1b",
                padding: "12px 14px",
                fontSize: "13px",
                lineHeight: "1.4",
                marginBottom: "1.25rem",
              }}
            >
              {statusMessage.type === "success" ? (
                <CheckCircle2 style={{ width: "16px", height: "16px", flexShrink: 0, marginTop: "2px", color: "#10b981" }} />
              ) : (
                <AlertCircle style={{ width: "16px", height: "16px", flexShrink: 0, marginTop: "2px", color: "#ef4444" }} />
              )}
              <span>{statusMessage.text}</span>
            </div>
          )}

          {/* Registration Form */}
          <form onSubmit={handleSignUp} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {/* Row 1: Brokerage Name & Lead Dispatcher Name */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
              <div>
                <label htmlFor="company-name" className="auth-field-label">
                  Brokerage / Fleet Name
                </label>
                <div className="auth-input-group" style={{ padding: "0 12px" }}>
                  <Building2 style={{ width: "16px", height: "16px", color: "#6f675c", flexShrink: 0 }} />
                  <input
                    id="company-name"
                    type="text"
                    required
                    placeholder="e.g. Apex Freight Logistics"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="auth-input"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="full-name" className="auth-field-label">
                  Dispatcher / Lead Name
                </label>
                <div className="auth-input-group" style={{ padding: "0 12px" }}>
                  <User style={{ width: "16px", height: "16px", color: "#6f675c", flexShrink: 0 }} />
                  <input
                    id="full-name"
                    type="text"
                    required
                    placeholder="e.g. Rajesh Sharma"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="auth-input"
                  />
                </div>
              </div>
            </div>

            {/* Row 2: Contact Method */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.4rem" }}>
                <label htmlFor="contact-input" className="auth-field-label" style={{ marginBottom: 0 }}>
                  Primary Dispatch Contact
                </label>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "11.5px", fontFamily: "var(--font-suisse, monospace)" }}>
                  <button
                    type="button"
                    onClick={() => setContactMethod("whatsapp")}
                    style={{
                      padding: "2px 8px",
                      borderRadius: "4px",
                      border: "none",
                      cursor: "pointer",
                      backgroundColor: contactMethod === "whatsapp" ? "#d1fae5" : "transparent",
                      color: contactMethod === "whatsapp" ? "#065f46" : "#57534e",
                      fontWeight: contactMethod === "whatsapp" ? "600" : "500",
                    }}
                  >
                    WhatsApp
                  </button>
                  <span>|</span>
                  <button
                    type="button"
                    onClick={() => setContactMethod("email")}
                    style={{
                      padding: "2px 8px",
                      borderRadius: "4px",
                      border: "none",
                      cursor: "pointer",
                      backgroundColor: contactMethod === "email" ? "#e7e5e4" : "transparent",
                      color: contactMethod === "email" ? "#070707" : "#57534e",
                      fontWeight: contactMethod === "email" ? "600" : "500",
                    }}
                  >
                    Email
                  </button>
                </div>
              </div>
              <div className="auth-input-group">
                {contactMethod === "whatsapp" ? (
                  <>
                    <span className="auth-input-prefix">+91</span>
                    <input
                      id="contact-input"
                      type="tel"
                      required
                      placeholder="98765 43210 (receives voice agent loads)"
                      value={contactValue}
                      onChange={(e) => setContactValue(e.target.value)}
                      className="auth-input"
                    />
                  </>
                ) : (
                  <div style={{ display: "flex", alignItems: "center", width: "100%", padding: "0 12px" }}>
                    <Mail style={{ width: "16px", height: "16px", color: "#6f675c", flexShrink: 0 }} />
                    <input
                      id="contact-input"
                      type="email"
                      required
                      placeholder="dispatch@brokerage.in"
                      value={contactValue}
                      onChange={(e) => setContactValue(e.target.value)}
                      className="auth-input"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Row 3: Primary Freight Corridor */}
            <div>
              <label htmlFor="corridor-select" className="auth-field-label">
                Primary Freight Corridor
              </label>
              <div className="auth-input-group">
                <select
                  id="corridor-select"
                  value={corridor}
                  onChange={(e) => setCorridor(e.target.value)}
                  className="auth-input"
                  style={{ cursor: "pointer", backgroundColor: "#ffffff" }}
                >
                  <option value="NH-48 (Delhi - Mumbai)">NH-48 • Delhi – Mumbai Express Corridor</option>
                  <option value="NH-44 (Srinagar - Kanyakumari)">NH-44 • North-South Spine (Srinagar – Kanyakumari)</option>
                  <option value="NH-16 (Kolkata - Chennai)">NH-16 • Eastern Coastal Corridor (Kolkata – Chennai)</option>
                  <option value="NH-53 (Surat - Kolkata)">NH-53 • East-West Industrial Transit</option>
                  <option value="Pan-India Mandi Network">Pan-India APMC Mandi &amp; FMCG Grid</option>
                </select>
              </div>
            </div>

            {/* Row 4: Password */}
            <div>
              <label htmlFor="signup-password" className="auth-field-label">
                Workspace Master Password
              </label>
              <div className="auth-input-group" style={{ padding: "0 12px" }}>
                <Lock style={{ width: "16px", height: "16px", color: "#6f675c", flexShrink: 0 }} />
                <input
                  id="signup-password"
                  type={showPassword ? "text" : "password"}
                  required
                  minLength={8}
                  placeholder="Minimum 8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="auth-input"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ background: "none", border: "none", color: "#6f675c", cursor: "pointer", padding: "4px" }}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff style={{ width: "16px", height: "16px" }} /> : <Eye style={{ width: "16px", height: "16px" }} />}
                </button>
              </div>
            </div>

            {/* Row 5: Margin Floor Selector */}
            <div
              style={{
                borderRadius: "8px",
                border: "1px solid #dad5cc",
                backgroundColor: "#f7f6f4",
                padding: "14px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: "12px",
                  fontFamily: "var(--font-suisse, monospace)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "#070707",
                  marginBottom: "4px",
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: "6px", fontWeight: "700" }}>
                  <Sparkles style={{ width: "14px", height: "14px", color: "#ff462d" }} />
                  Deterministic Margin Floor Rule
                </span>
                <span style={{ color: "#047857", fontWeight: "800" }}>₹{marginFloor} / load</span>
              </div>
              <p style={{ fontSize: "12.5px", lineHeight: "1.5", color: "#57534e", margin: "0 0 10px 0", textWrap: "pretty" }}>
                Your autonomous agents will automatically renegotiate or reject any carrier quote yielding less than this floor margin.
              </p>
              <div style={{ display: "flex", gap: "8px" }}>
                {["2000", "2500", "3000", "5000"].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setMarginFloor(val)}
                    className={`auth-margin-btn ${marginFloor === val ? "is-active" : ""}`}
                  >
                    ₹{val}
                  </button>
                ))}
              </div>
            </div>

            {/* Terms and Agreement */}
            <div className={`auth-input-group ${isShaking ? "is-shaking" : ""}`} style={{ border: isShaking ? "1px solid #ef4444" : "1px solid transparent", padding: "6px 8px", borderRadius: "6px" }}>
              <label style={{ display: "flex", alignItems: "flex-start", gap: "10px", cursor: "pointer", width: "100%" }}>
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  style={{ marginTop: "2px", cursor: "pointer" }}
                />
                <span style={{ fontSize: "12px", lineHeight: "1.45", color: "#57534e" }}>
                  I agree to the{" "}
                  <Link href="/terms" style={{ textDecoration: "underline", color: "#070707" }}>
                    Operations Harness Agreement
                  </Link>{" "}
                  and confirm authorized dispatcher status under Indian Motor Vehicles &amp; VAHAN regulations.
                </span>
              </label>
            </div>

            {/* Primary CTA Button */}
            <button type="submit" disabled={isLoading} className="auth-submit-btn">
              <span aria-hidden="true" className="btn-curtain" />
              <span className="btn-text" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                {isLoading ? (
                  <>
                    <Loader2 style={{ width: "16px", height: "16px", animation: "spin 1s linear infinite" }} />
                    Deploying Workspace...
                  </>
                ) : (
                  "Deploy Autonomous Broker"
                )}
              </span>
              {!isLoading && <span className="btn-arrow">→</span>}
            </button>
          </form>
        </div>

        {/* Bottom Security Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(218, 213, 204, 0.7)",
            paddingTop: "1.25rem",
            fontSize: "12px",
            fontFamily: "var(--font-suisse, monospace)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#57534e",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <ShieldCheck style={{ width: "16px", height: "16px", color: "#059669" }} />
            <span>Enterprise DPDP &amp; SOC 2 Compliant</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Link href="/privacy" style={{ color: "#57534e", textDecoration: "none" }}>
              Privacy
            </Link>
            <span>•</span>
            <Link href="/terms" style={{ color: "#57534e", textDecoration: "none" }}>
              Terms
            </Link>
            <span>•</span>
            <Link href="/sla" style={{ color: "#57534e", textDecoration: "none" }}>
              Corridor SLA
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
