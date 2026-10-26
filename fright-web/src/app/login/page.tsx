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
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Loader2,
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
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error" | null;
    text: string;
  }>({ type: null, text: "" });

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 10) {
      setStatusMessage({
        type: "error",
        text: "Please enter a valid 10-digit mobile or WhatsApp number.",
      });
      return;
    }
    setIsLoading(true);
    setStatusMessage({ type: null, text: "" });

    // Simulate OTP dispatch
    setTimeout(() => {
      setIsLoading(false);
      setOtpSent(true);
      setStatusMessage({
        type: "success",
        text: `6-digit security code sent to WhatsApp: +91 ${phone}`,
      });
    }, 900);
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
      // In real application, redirect to /dashboard
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#070707] selection:bg-[#ff462d] selection:text-white">
      <div className="grid min-h-screen lg:grid-cols-12">
        {/* Left Column: Brand & Dispatch Harness Showcase */}
        <AuthShowcase mode="login" />

        {/* Right Column: Authentication Form Container */}
        <div className="flex flex-col justify-between p-6 sm:p-10 lg:col-span-7 xl:p-16">
          {/* Top Bar Navigation */}
          <div className="flex items-center justify-between border-b border-[#dad5cc]/60 pb-6">
            {/* Mobile Brand Logo */}
            <div className="lg:hidden">
              <Link href="/" className="inline-block">
                <HappyRobotLogo className="h-6 w-auto" />
              </Link>
            </div>

            {/* Empty block on desktop to balance right-aligned link */}
            <div className="hidden lg:block text-[11px] font-mono uppercase tracking-[0.12em] text-[#6f675c]">
              System Protocol // v2.4.0
            </div>

            {/* Quick Switch to Sign Up */}
            <div className="text-right text-[13px] font-body text-[#6f675c]">
              New to HappyFreight?{" "}
              <Link
                href="/signup"
                className="font-semibold text-[#070707] underline underline-offset-4 transition-colors hover:text-[#ff462d]"
              >
                Create an account →
              </Link>
            </div>
          </div>

          {/* Main Form Center Area */}
          <div className="mx-auto my-auto w-full max-w-[460px] py-10">
            {/* Monospace Category Pill */}
            <div className="mb-3 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[#6f675c]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff462d]" />
              Operations Terminal Access
            </div>

            {/* Heading & Subtitle */}
            <h1 className="font-headline text-3xl font-bold tracking-tight text-[#070707] sm:text-4xl">
              Log in to your harness
            </h1>
            <p className="mt-2 text-[14.5px] leading-relaxed text-[#6f675c]">
              Access real-time load matching, driver voice exceptions, and corridor margin controls.
            </p>

            {/* Status Alert Banner */}
            {statusMessage.type && (
              <div
                className={`mt-6 flex items-start gap-2.5 rounded-md border p-3.5 text-[13px] leading-snug transition-all ${
                  statusMessage.type === "success"
                    ? "border-emerald-500/30 bg-emerald-50 text-emerald-800"
                    : "border-red-500/30 bg-red-50 text-red-800"
                }`}
              >
                {statusMessage.type === "success" ? (
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                ) : (
                  <AlertCircle className="h-4 w-4 shrink-0 text-red-600 mt-0.5" />
                )}
                <span>{statusMessage.text}</span>
              </div>
            )}

            {/* Auth Method Selector Tabs */}
            <div className="mt-8 grid grid-cols-2 rounded-lg border border-[#dad5cc] bg-[#f7f6f4] p-1">
              <button
                type="button"
                onClick={() => {
                  setAuthMethod("whatsapp");
                  setStatusMessage({ type: null, text: "" });
                }}
                className={`flex items-center justify-center gap-2 rounded-md py-2.5 font-body text-[13px] font-semibold transition-all ${
                  authMethod === "whatsapp"
                    ? "bg-white text-[#070707] shadow-sm"
                    : "text-[#6f675c] hover:text-[#070707]"
                }`}
              >
                <MessageSquare className="h-3.5 w-3.5 text-emerald-600" />
                WhatsApp OTP
              </button>
              <button
                type="button"
                onClick={() => {
                  setAuthMethod("email");
                  setStatusMessage({ type: null, text: "" });
                }}
                className={`flex items-center justify-center gap-2 rounded-md py-2.5 font-body text-[13px] font-semibold transition-all ${
                  authMethod === "email"
                    ? "bg-white text-[#070707] shadow-sm"
                    : "text-[#6f675c] hover:text-[#070707]"
                }`}
              >
                <Mail className="h-3.5 w-3.5 text-[#070707]" />
                Email &amp; Password
              </button>
            </div>

            {/* Tab 1: WhatsApp / Mobile OTP Login */}
            {authMethod === "whatsapp" && (
              <form onSubmit={otpSent ? handleLogin : handleSendOtp} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="phone-input" className="block text-[12px] font-mono uppercase tracking-[0.1em] text-[#6f675c] mb-1.5">
                    WhatsApp or Dispatch Mobile
                  </label>
                  <div className="flex rounded-md border border-[#dad5cc] bg-white transition-colors focus-within:border-[#070707] focus-within:ring-1 focus-within:ring-[#070707]">
                    <span className="flex items-center border-r border-[#dad5cc] bg-[#f7f6f4] px-3.5 text-[13px] font-mono text-[#6f675c]">
                      +91
                    </span>
                    <input
                      id="phone-input"
                      type="tel"
                      required
                      placeholder="98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-transparent px-4 py-3 text-[14px] font-body text-[#070707] placeholder-[#a8a29e] outline-none"
                    />
                  </div>
                </div>

                {otpSent && (
                  <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                    <label htmlFor="otp-input" className="block text-[12px] font-mono uppercase tracking-[0.1em] text-[#6f675c] mb-1.5">
                      6-Digit Security Code
                    </label>
                    <input
                      id="otp-input"
                      type="text"
                      required
                      maxLength={6}
                      placeholder="••••••"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="w-full rounded-md border border-[#dad5cc] bg-white px-4 py-3 text-center font-mono text-[18px] tracking-[0.3em] text-[#070707] placeholder-[#a8a29e] outline-none transition-colors focus:border-[#070707] focus:ring-1 focus:ring-[#070707]"
                    />
                    <div className="mt-2 flex items-center justify-between text-[11.5px] font-mono text-[#6f675c]">
                      <span>Didn&apos;t receive code?</span>
                      <button
                        type="button"
                        onClick={handleSendOtp}
                        className="text-[#ff462d] underline hover:opacity-80"
                      >
                        Resend Code
                      </button>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="h-4 w-4 rounded border-[#dad5cc] text-[#070707] focus:ring-[#070707]"
                    />
                    <span className="text-[12.5px] text-[#6f675c]">Remember terminal (30 days)</span>
                  </label>
                </div>

                {/* Primary CTA Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="hero-cta-btn group mt-2 flex w-full items-center justify-center gap-2 rounded-md bg-[#dfdbd5] px-6 py-3.5 font-body text-[12px] font-semibold uppercase tracking-[0.12em] text-[#070707] transition-all disabled:opacity-50"
                >
                  <span aria-hidden="true" className="btn-curtain" />
                  <span className="btn-text flex items-center gap-2">
                    {isLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
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
              <form onSubmit={handleLogin} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="email-input" className="block text-[12px] font-mono uppercase tracking-[0.1em] text-[#6f675c] mb-1.5">
                    Corporate Email
                  </label>
                  <div className="flex items-center rounded-md border border-[#dad5cc] bg-white px-3.5 py-3 transition-colors focus-within:border-[#070707] focus-within:ring-1 focus-within:ring-[#070707]">
                    <Mail className="h-4 w-4 text-[#a8a29e] mr-2.5" />
                    <input
                      id="email-input"
                      type="email"
                      required
                      placeholder="dispatcher@logistics.in"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-transparent text-[14px] font-body text-[#070707] placeholder-[#a8a29e] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor="password-input" className="block text-[12px] font-mono uppercase tracking-[0.1em] text-[#6f675c]">
                      Password
                    </label>
                    <Link
                      href="#forgot-password"
                      className="text-[11.5px] font-mono text-[#6f675c] underline hover:text-[#070707]"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="flex items-center rounded-md border border-[#dad5cc] bg-white px-3.5 py-3 transition-colors focus-within:border-[#070707] focus-within:ring-1 focus-within:ring-[#070707]">
                    <Lock className="h-4 w-4 text-[#a8a29e] mr-2.5" />
                    <input
                      id="password-input"
                      type={showPassword ? "text" : "password"}
                      required
                      placeholder="••••••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-transparent text-[14px] font-body text-[#070707] placeholder-[#a8a29e] outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-[#a8a29e] hover:text-[#070707] focus:outline-none"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="h-4 w-4 rounded border-[#dad5cc] text-[#070707] focus:ring-[#070707]"
                    />
                    <span className="text-[12.5px] text-[#6f675c]">Remember terminal (30 days)</span>
                  </label>
                </div>

                {/* Primary CTA Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="hero-cta-btn group mt-2 flex w-full items-center justify-center gap-2 rounded-md bg-[#dfdbd5] px-6 py-3.5 font-body text-[12px] font-semibold uppercase tracking-[0.12em] text-[#070707] transition-all disabled:opacity-50"
                >
                  <span aria-hidden="true" className="btn-curtain" />
                  <span className="btn-text flex items-center gap-2">
                    {isLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
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
            <div className="relative my-7 flex items-center justify-center">
              <div className="w-full border-t border-[#dad5cc]" />
              <span className="absolute bg-[#fcfcfc] px-3 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#a8a29e]">
                Or enterprise access
              </span>
            </div>

            {/* SSO & External Providers */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() =>
                  setStatusMessage({
                    type: "success",
                    text: "Initiating Google Workspace Single Sign-On...",
                  })
                }
                className="flex items-center justify-center gap-2 rounded-md border border-[#dad5cc] bg-white py-2.5 font-body text-[12.5px] font-medium text-[#070707] transition-colors hover:border-[#070707] hover:bg-[#f7f6f4]"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24">
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
                className="flex items-center justify-center gap-2 rounded-md border border-[#dad5cc] bg-white py-2.5 font-body text-[12.5px] font-medium text-[#070707] transition-colors hover:border-[#070707] hover:bg-[#f7f6f4]"
              >
                <ShieldCheck className="h-4 w-4 text-[#ff462d]" />
                SAML / Okta
              </button>
            </div>
          </div>

          {/* Bottom Security Footer */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#dad5cc]/60 pt-6 text-[11px] font-mono uppercase tracking-[0.1em] text-[#6f675c]">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>TLS 1.3 Strict Transport Security</span>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/privacy" className="hover:text-[#070707] transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-[#070707] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
