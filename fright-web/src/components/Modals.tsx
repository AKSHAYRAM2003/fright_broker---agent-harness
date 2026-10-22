"use client";

import React, { useState } from "react";
import { X, CheckCircle, Sparkles, Building, Mail, User, Phone, ArrowRight } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialEmail?: string;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, initialEmail = "" }) => {
  const [email, setEmail] = useState(initialEmail);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [industry, setIndustry] = useState("Logistics & Freight");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after 3s
      // onClose();
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-zinc-200 overflow-hidden text-zinc-950 p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-zinc-950 hover:bg-zinc-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-950">Demo Request Confirmed</h3>
            <p className="text-sm text-zinc-600 max-w-sm mx-auto leading-relaxed">
              Thank you, {name || "there"}! A HappyRobot enterprise solutions architect will reach out to <strong className="text-zinc-900">{email}</strong> within 2 business hours.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-xl bg-zinc-950 text-white font-semibold text-sm hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              Back to Site
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
                Enterprise Briefing
              </span>
              <h3 className="text-2xl font-bold text-zinc-950 mt-1">Book a Live Architecture Demo</h3>
              <p className="text-xs sm:text-sm text-zinc-500 mt-1">
                See autonomous AI workers interacting with your exact TMS, ERP, or CRM software.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1">Work Email</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-zinc-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@enterprise.com"
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1">Full Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-zinc-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Alex Mercer"
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1">Company</label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-zinc-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Global Logistics Corp"
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1">Primary Industry</label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 text-sm bg-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                >
                  <option value="Logistics & Freight">Logistics &amp; Freight Brokerage</option>
                  <option value="Energy & Utilities">Energy &amp; Utilities</option>
                  <option value="Airlines & Travel">Airlines &amp; Aviation</option>
                  <option value="Financial Services">Financial Services &amp; Banking</option>
                  <option value="Insurance Operations">Insurance Operations</option>
                  <option value="Manufacturing">Manufacturing &amp; Supply Chain</option>
                  <option value="Other">Other Enterprise Industry</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-orange-600 hover:bg-orange-500 active:scale-[0.99] text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-600/30 cursor-pointer"
              >
                <span>Request Custom Demonstration</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-zinc-400 text-center mt-2">
                By submitting, you agree to our privacy policy and mutual non-disclosure agreement.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-black rounded-3xl shadow-2xl border border-zinc-800 overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="aspect-video w-full">
          <video
            autoPlay
            controls
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/ESI_Launch.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

interface NewsroomModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NewsroomModal: React.FC<NewsroomModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-zinc-200 overflow-y-auto text-zinc-950 p-6 sm:p-10">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-zinc-400 hover:text-zinc-950 hover:bg-zinc-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-700">
              Press Release
            </span>
            <span className="text-xs text-zinc-500">October 2026 &bull; San Francisco, CA</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 leading-tight">
            HappyRobot Announces $45M Series C to Expand Autonomous Enterprise Operations
          </h2>

          <div className="border-y border-zinc-100 py-4 flex items-center justify-between text-xs text-zinc-500">
            <span>Funding Round: Series C ($45,000,000)</span>
            <span>Lead: Andreessen Horowitz (a16z)</span>
          </div>

          <div className="text-sm sm:text-base text-zinc-700 space-y-4 leading-relaxed font-normal">
            <p>
              HappyRobot, the pioneer in autonomous enterprise orchestration, today announced the closing of a $45 million Series C round led by Andreessen Horowitz, with participation from Matrix Partners and prominent operational leaders in global supply chain and utilities.
            </p>
            <p>
              The funding will accelerate HappyRobot&apos;s proprietary deep context graph technology and sub-second voice runtime, enabling enterprises to transition from manual back-office coordination to autonomous agentic execution.
            </p>
            <blockquote className="p-4 rounded-xl bg-zinc-50 border-l-4 border-orange-500 text-zinc-800 italic">
              &ldquo;HappyRobot is doing what traditional RPA never could: solving the context bottleneck. They allow enterprise AI to comprehend operational reality and act autonomously.&rdquo;
            </blockquote>
          </div>

          <div className="pt-4 border-t border-zinc-200 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-zinc-950 text-white font-semibold text-sm hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              Close Announcement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
