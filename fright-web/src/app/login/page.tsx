"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AuthShowcase } from "@/components/auth/AuthShowcase";
import { HappyRobotLogo } from "@/components/HappyRobotLogo";
import {
  MessageSquare,
  Mail,
  Lock,
  Eye,
  EyeOff,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ShieldCheck,
} from "lucide-react";

export default function LoginPage() {
  const [authMethod, setAuthMethod] = useState<"whatsapp" | "email">("whatsapp");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
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

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 10) {
      triggerShake();
      setStatusMessage({
        type: "error",
        text: "Please enter a valid 10-digit mobile or WhatsApp number.",
      });
      return;
    }
    setIsLoading(true);
    setStatusMessage({ type: null, text: "" });

    setTimeout(() => {
      setIsLoading(false);
      setOtpSent(true);
      setStatusMessage({
        type: "success",
        text: `6-digit security code sent to WhatsApp: +91 ${phone}`,
      });
    }, 800);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage({ type: null, text: "" });

    setTimeout(() => {
      setIsLoading(false);
      setStatusMessage({
        type: "success",
        text: "Credentials verified! Directing to Operations Console...",
      });
    }, 1000);
  };

  return (
    <div className="auth-wrapper">
      {/* Left Column: Brand & Dispatch Harness Showcase */}
      <AuthShowcase mode="login" />

      {/* Right Column: Authentication Form Panel */}
      <div className="auth-form-panel">
        {/* Top Bar Navigation: Brand Logo (hidden on desktop large screens) & Switch to Sign Up */}
        <div className="auth-top-bar">
          <Link
            href="/"
            className="auth-brand-link lg:hidden"
            aria-label="HappyFreight - Return to Home"
          >
            <HappyRobotLogo className="h-6 sm:h-7 w-auto" />
          </Link>

          {/* Switch to Sign Up with smooth on-hover underline transition */}
          <Link href="/signup" className="auth-nav-link">
            <span className="auth-nav-text">Create an account</span>
            <span className="auth-nav-arrow" aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Main Form Center Area */}
        <div className="auth-form-container">
          {/* Heading & Subtitle without banned kickers */}
          <h1 className="auth-title">Log in to your harness</h1>
          <p className="auth-subtitle">
            Access real-time load matching, driver voice exceptions, and corridor margin controls.
          </p>

          {/* Status Alert Banner with Smooth Accordion Expand (transitions-dev accordion) */}
          <div className={`auth-expand-panel ${statusMessage.type ? "is-open" : ""}`} style={{ marginBottom: statusMessage.type ? "1.25rem" : "0" }}>
            <div className="auth-expand-inner">
              {statusMessage.type && (
                <div className={`auth-alert-banner ${statusMessage.type === "success" ? "is-success" : "is-error"}`}>
                  {statusMessage.type === "success" ? (
                    <CheckCircle2 style={{ width: "16px", height: "16px", flexShrink: 0, marginTop: "2px", color: "#10b981" }} />
                  ) : (
                    <AlertCircle style={{ width: "16px", height: "16px", flexShrink: 0, marginTop: "2px", color: "#ef4444" }} />
                  )}
                  <span>{statusMessage.text}</span>
                </div>
              )}
            </div>
          </div>

          {/* Auth Method Selector Tabs with Sliding Pill (transitions-dev tabs-sliding) */}
          <div className="auth-tab-bar" data-active={authMethod}>
            <span className="auth-tab-pill" aria-hidden="true" />
            <button
              type="button"
              onClick={() => {
                setAuthMethod("whatsapp");
                setStatusMessage({ type: null, text: "" });
              }}
              className={`auth-tab-btn ${authMethod === "whatsapp" ? "is-active" : ""}`}
            >
              <MessageSquare style={{ width: "14px", height: "14px", color: authMethod === "whatsapp" ? "#059669" : "#6f675c" }} />
              WhatsApp OTP
            </button>
            <button
              type="button"
              onClick={() => {
                setAuthMethod("email");
                setStatusMessage({ type: null, text: "" });
              }}
              className={`auth-tab-btn ${authMethod === "email" ? "is-active" : ""}`}
            >
              <Mail style={{ width: "14px", height: "14px", color: authMethod === "email" ? "#070707" : "#6f675c" }} />
              Email &amp; Password
            </button>
          </div>

          {/* Tab 1: WhatsApp / Mobile OTP Login */}
          {authMethod === "whatsapp" && (
            <form key="whatsapp-form" onSubmit={otpSent ? handleLogin : handleSendOtp} className="auth-form-crossfade" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <label htmlFor="phone-input" className="auth-field-label">
                  WhatsApp or Dispatch Mobile
                </label>
                <div className={`auth-input-group ${isShaking ? "is-shaking" : ""}`}>
                  <span className="auth-input-prefix">+91</span>
                  <input
                    id="phone-input"
                    type="tel"
                    required
                    placeholder="98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="auth-input"
                  />
                </div>
              </div>

              {/* Smooth Accordion OTP Reveal (transitions-dev accordion) */}
              <div className={`auth-expand-panel ${otpSent ? "is-open" : ""}`}>
                <div className="auth-expand-inner">
                  <div style={{ paddingTop: "0.25rem" }}>
                    <label htmlFor="otp-input" className="auth-field-label">
                      6-Digit Security Code
                    </label>
                    <div className="auth-input-group">
                      <input
                        id="otp-input"
                        type="text"
                        required={otpSent}
                        maxLength={6}
                        placeholder="••••••"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        className="auth-input"
                        style={{ textAlign: "center", fontFamily: "monospace", fontSize: "18px", letterSpacing: "0.3em" }}
                      />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", fontFamily: "var(--font-suisse, monospace)", color: "#57534e", marginTop: "6px" }}>
                      <span>Didn&apos;t receive code?</span>
                      <button
                        type="button"
                        onClick={handleSendOtp}
                        style={{ color: "#ff462d", textDecoration: "underline", background: "none", border: "none", cursor: "pointer", padding: 0 }}
                      >
                        Resend Code
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "4px" }}>
                <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", fontSize: "12.5px", color: "#6f675c" }}>
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    style={{ cursor: "pointer" }}
                  />
                  <span>Remember terminal (30 days)</span>
                </label>
              </div>

              {/* Primary CTA Button */}
              <button type="submit" disabled={isLoading} className="auth-submit-btn">
                <span aria-hidden="true" className="btn-curtain" />
                <span className="btn-text" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  {isLoading ? (
                    <>
                      <Loader2 style={{ width: "16px", height: "16px", animation: "spin 1s linear infinite" }} />
                      Verifying...
                    </>
                  ) : otpSent ? (
                    "Sign In to Operations"
                  ) : (
                    "Get WhatsApp Code"
                  )}
                </span>
                {!isLoading && <span className="btn-arrow">→</span>}
              </button>
            </form>
          )}

          {/* Tab 2: Corporate Email & Password */}
          {authMethod === "email" && (
            <form key="email-form" onSubmit={handleLogin} className="auth-form-crossfade" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <label htmlFor="email-input" className="auth-field-label">
                  Corporate Email
                </label>
                <div className="auth-input-group" style={{ padding: "0 12px" }}>
                  <Mail style={{ width: "16px", height: "16px", color: "#6f675c", flexShrink: 0 }} />
                  <input
                    id="email-input"
                    type="email"
                    required
                    placeholder="dispatcher@logistics.in"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="auth-input"
                  />
                </div>
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.4rem" }}>
                  <label htmlFor="password-input" className="auth-field-label" style={{ marginBottom: 0 }}>
                    Password
                  </label>
                  <Link
                    href="#forgot-password"
                    style={{ fontSize: "11.5px", fontFamily: "var(--font-suisse, monospace)", color: "#57534e", textDecoration: "underline" }}
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="auth-input-group" style={{ padding: "0 12px" }}>
                  <Lock style={{ width: "16px", height: "16px", color: "#6f675c", flexShrink: 0 }} />
                  <input
                    id="password-input"
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="••••••••••••"
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

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "4px" }}>
                <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", fontSize: "12.5px", color: "#6f675c" }}>
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    style={{ cursor: "pointer" }}
                  />
                  <span>Remember terminal (30 days)</span>
                </label>
              </div>

              {/* Primary CTA Button */}
              <button type="submit" disabled={isLoading} className="auth-submit-btn">
                <span aria-hidden="true" className="btn-curtain" />
                <span className="btn-text" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  {isLoading ? (
                    <>
                      <Loader2 style={{ width: "16px", height: "16px", animation: "spin 1s linear infinite" }} />
                      Authenticating...
                    </>
                  ) : (
                    "Sign In to Operations"
                  )}
                </span>
                {!isLoading && <span className="btn-arrow">→</span>}
              </button>
            </form>
          )}

          {/* Divider */}
          <div className="auth-divider">
            <div className="auth-divider-line" />
            <span className="auth-divider-text">Or enterprise access</span>
          </div>

          {/* SSO Buttons */}
          <div className="auth-sso-grid">
            <button
              type="button"
              onClick={() =>
                setStatusMessage({
                  type: "success",
                  text: "Initiating Google Workspace Single Sign-On...",
                })
              }
              className="auth-sso-btn"
            >
              <svg style={{ width: "16px", height: "16px" }} viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              Google SSO
            </button>
            <button
              type="button"
              onClick={() =>
                setStatusMessage({
                  type: "success",
                  text: "Connecting to Corporate Identity Provider (SAML 2.0)...",
                })
              }
              className="auth-sso-btn"
            >
              <ShieldCheck style={{ width: "16px", height: "16px", color: "#ff462d" }} />
              SAML / Okta
            </button>
          </div>
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
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#10b981", display: "inline-block" }} />
            <span>TLS 1.3 Strict Transport Security</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Link href="/privacy" style={{ color: "#57534e", textDecoration: "none" }}>
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" style={{ color: "#57534e", textDecoration: "none" }}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
