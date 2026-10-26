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
  Phone,
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
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error" | null;
    text: string;
  }>({ type: null, text: "" });

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreeTerms) {
      setStatusMessage({
        type: "error",
        text: "Please accept the Operations Service Agreement to continue.",
      });
      return;
    }
    setIsLoading(true);
    setStatusMessage({ type: null, text: "" });

    // Simulate account setup and broker harness initialization
    setTimeout(() => {
      setIsLoading(false);
      setStatusMessage({
        type: "success",
        text: `Harness initialized for ${companyName || "your brokerage"}! Setting up corridor agents...`,
      });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#070707] selection:bg-[#ff462d] selection:text-white">
      <div className="grid min-h-screen lg:grid-cols-12">
        {/* Left Column: Brand & Dispatch Harness Showcase */}
        <AuthShowcase mode="signup" />

        {/* Right Column: Registration Form Container */}
        <div className="flex flex-col justify-between p-6 sm:p-10 lg:col-span-7 xl:p-16">
          {/* Top Bar Navigation */}
          <div className="flex items-center justify-between border-b border-[#dad5cc]/60 pb-6">
            {/* Mobile Brand Logo */}
            <div className="lg:hidden">
              <Link href="/" className="inline-block">
                <HappyRobotLogo className="h-6 w-auto" />
              </Link>
            </div>

            <div className="hidden lg:block text-[11px] font-mono uppercase tracking-[0.12em] text-[#6f675c]">
              Workspace Provisioning // Instant Setup
            </div>

            {/* Quick Switch to Sign In */}
            <div className="text-right text-[13px] font-body text-[#6f675c]">
              Already managing corridors?{" "}
              <Link
                href="/login"
                className="font-semibold text-[#070707] underline underline-offset-4 transition-colors hover:text-[#ff462d]"
              >
                Sign in →
              </Link>
            </div>
          </div>

          {/* Main Form Center Area */}
          <div className="mx-auto my-auto w-full max-w-[500px] py-10">
            {/* Monospace Category Pill */}
            <div className="mb-3 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[#6f675c]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff462d]" />
              New Broker Workspace Setup
            </div>

            {/* Heading & Subtitle */}
            <h1 className="font-headline text-3xl font-bold tracking-tight text-[#070707] sm:text-4xl">
              Deploy your autonomous harness
            </h1>
            <p className="mt-2 text-[14.5px] leading-relaxed text-[#6f675c]">
              Get your brokerage operational in under 2 minutes. Ingest voice notes and enforce margin floors from load #1.
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

            {/* Registration Form */}
            <form onSubmit={handleSignUp} className="mt-7 space-y-4">
              {/* Row 1: Brokerage Name & Full Name */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="company-name" className="block text-[12px] font-mono uppercase tracking-[0.1em] text-[#6f675c] mb-1.5">
                    Brokerage / Fleet Name
                  </label>
                  <div className="flex items-center rounded-md border border-[#dad5cc] bg-white px-3.5 py-2.5 transition-colors focus-within:border-[#070707] focus-within:ring-1 focus-within:ring-[#070707]">
                    <Building2 className="h-4 w-4 text-[#a8a29e] mr-2" />
                    <input
                      id="company-name"
                      type="text"
                      required
                      placeholder="e.g. Apex Freight Logistics"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full bg-transparent text-[13.5px] font-body text-[#070707] placeholder-[#a8a29e] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="full-name" className="block text-[12px] font-mono uppercase tracking-[0.1em] text-[#6f675c] mb-1.5">
                    Dispatcher / Lead Name
                  </label>
                  <div className="flex items-center rounded-md border border-[#dad5cc] bg-white px-3.5 py-2.5 transition-colors focus-within:border-[#070707] focus-within:ring-1 focus-within:ring-[#070707]">
                    <User className="h-4 w-4 text-[#a8a29e] mr-2" />
                    <input
                      id="full-name"
                      type="text"
                      required
                      placeholder="e.g. Rajesh Sharma"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-transparent text-[13.5px] font-body text-[#070707] placeholder-[#a8a29e] outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Contact Method (WhatsApp vs Email) */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="contact-input" className="block text-[12px] font-mono uppercase tracking-[0.1em] text-[#6f675c]">
                    Primary Dispatch Contact
                  </label>
                  <div className="flex items-center gap-2 text-[11px] font-mono">
                    <button
                      type="button"
                      onClick={() => setContactMethod("whatsapp")}
                      className={`px-1.5 py-0.5 rounded ${
                        contactMethod === "whatsapp"
                          ? "bg-emerald-100 text-emerald-800 font-semibold"
                          : "text-[#6f675c] hover:text-[#070707]"
                      }`}
                    >
                      WhatsApp
                    </button>
                    <span>|</span>
                    <button
                      type="button"
                      onClick={() => setContactMethod("email")}
                      className={`px-1.5 py-0.5 rounded ${
                        contactMethod === "email"
                          ? "bg-stone-200 text-[#070707] font-semibold"
                          : "text-[#6f675c] hover:text-[#070707]"
                      }`}
                    >
                      Email
                    </button>
                  </div>
                </div>
                <div className="flex rounded-md border border-[#dad5cc] bg-white transition-colors focus-within:border-[#070707] focus-within:ring-1 focus-within:ring-[#070707]">
                  {contactMethod === "whatsapp" ? (
                    <>
                      <span className="flex items-center border-r border-[#dad5cc] bg-[#f7f6f4] px-3.5 text-[13px] font-mono text-[#6f675c]">
                        +91
                      </span>
                      <input
                        id="contact-input"
                        type="tel"
                        required
                        placeholder="98765 43210 (receives voice agents)"
                        value={contactValue}
                        onChange={(e) => setContactValue(e.target.value)}
                        className="w-full bg-transparent px-3.5 py-2.5 text-[13.5px] font-body text-[#070707] placeholder-[#a8a29e] outline-none"
                      />
                    </>
                  ) : (
                    <div className="flex items-center w-full px-3.5 py-2.5">
                      <Mail className="h-4 w-4 text-[#a8a29e] mr-2" />
                      <input
                        id="contact-input"
                        type="email"
                        required
                        placeholder="dispatch@brokerage.in"
                        value={contactValue}
                        onChange={(e) => setContactValue(e.target.value)}
                        className="w-full bg-transparent text-[13.5px] font-body text-[#070707] placeholder-[#a8a29e] outline-none"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Row 3: Primary Corridor */}
              <div>
                <label htmlFor="corridor-select" className="block text-[12px] font-mono uppercase tracking-[0.1em] text-[#6f675c] mb-1.5">
                  Primary Freight Corridor
                </label>
                <select
                  id="corridor-select"
                  value={corridor}
                  onChange={(e) => setCorridor(e.target.value)}
                  className="w-full rounded-md border border-[#dad5cc] bg-white px-3.5 py-2.5 text-[13.5px] font-body text-[#070707] outline-none transition-colors focus:border-[#070707] focus:ring-1 focus:ring-[#070707]"
                >
                  <option value="NH-48 (Delhi - Mumbai)">NH-48 • Delhi – Mumbai Express Corridor</option>
                  <option value="NH-44 (Srinagar - Kanyakumari)">NH-44 • North-South Spine (Srinagar – Kanyakumari)</option>
                  <option value="NH-16 (Kolkata - Chennai)">NH-16 • Eastern Coastal Corridor (Kolkata – Chennai)</option>
                  <option value="NH-53 (Surat - Kolkata)">NH-53 • East-West Industrial Transit</option>
                  <option value="Pan-India Mandi Network">Pan-India APMC Mandi &amp; FMCG Grid</option>
                </select>
              </div>

              {/* Row 4: Password with Toggle */}
              <div>
                <label htmlFor="signup-password" className="block text-[12px] font-mono uppercase tracking-[0.1em] text-[#6f675c] mb-1.5">
                  Workspace Master Password
                </label>
                <div className="flex items-center rounded-md border border-[#dad5cc] bg-white px-3.5 py-2.5 transition-colors focus-within:border-[#070707] focus-within:ring-1 focus-within:ring-[#070707]">
                  <Lock className="h-4 w-4 text-[#a8a29e] mr-2" />
                  <input
                    id="signup-password"
                    type={showPassword ? "text" : "password"}
                    required
                    minLength={8}
                    placeholder="Minimum 8 characters"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-transparent text-[13.5px] font-body text-[#070707] placeholder-[#a8a29e] outline-none"
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

              {/* Row 5: Margin Floor Selector */}
              <div className="rounded-lg border border-[#dad5cc] bg-[#f7f6f4] p-3.5">
                <div className="flex items-center justify-between text-[12px] font-mono uppercase tracking-[0.1em] text-[#070707]">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <Sparkles className="h-3.5 w-3.5 text-[#ff462d]" />
                    Deterministic Margin Floor Rule
                  </span>
                  <span className="text-emerald-700 font-bold">₹{marginFloor} / load</span>
                </div>
                <p className="mt-1 text-[12px] leading-relaxed text-[#6f675c]">
                  Your autonomous agents will reject or renegotiate any broker quote yielding less than this floor.
                </p>
                <div className="mt-3 flex gap-2">
                  {["2000", "2500", "3000", "5000"].map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setMarginFloor(val)}
                      className={`flex-1 rounded py-1 text-[12px] font-mono transition-colors ${
                        marginFloor === val
                          ? "bg-[#070707] text-white font-semibold"
                          : "border border-[#dad5cc] bg-white text-[#6f675c] hover:border-[#070707]"
                      }`}
                    >
                      ₹{val}
                    </button>
                  ))}
                </div>
              </div>

              {/* Terms and Agreement */}
              <div className="pt-1">
                <label className="flex items-start gap-2.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-[#dad5cc] text-[#070707] focus:ring-[#070707]"
                  />
                  <span className="text-[12px] leading-snug text-[#6f675c]">
                    I agree to the{" "}
                    <Link href="/terms" className="underline hover:text-[#070707]">
                      Operations Harness Agreement
                    </Link>{" "}
                    and confirm authorized dispatcher status under Indian Motor Vehicles &amp; VAHAN regulations.
                  </span>
                </label>
              </div>

              {/* Primary CTA Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="hero-cta-btn group mt-3 flex w-full items-center justify-center gap-2 rounded-md bg-[#dfdbd5] px-6 py-3.5 font-body text-[12px] font-semibold uppercase tracking-[0.12em] text-[#070707] transition-all disabled:opacity-50"
              >
                <span aria-hidden="true" className="btn-curtain" />
                <span className="btn-text flex items-center gap-2">
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
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
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#dad5cc]/60 pt-6 text-[11px] font-mono uppercase tracking-[0.1em] text-[#6f675c]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span>Enterprise DPDP &amp; SOC 2 Compliant</span>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/privacy" className="hover:text-[#070707] transition-colors">
                Privacy
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-[#070707] transition-colors">
                Terms
              </Link>
              <span>•</span>
              <Link href="/sla" className="hover:text-[#070707] transition-colors">
                Corridor SLA
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
