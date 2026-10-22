import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LogoWall } from "@/components/LogoWall";
import { StatementSection } from "@/components/StatementSection";
import { CaseStudies } from "@/components/CaseStudies";
import { PlatformDiagram } from "@/components/PlatformDiagram";
import { VerticalsSection } from "@/components/VerticalsSection";
import { SuperintelligenceSection } from "@/components/SuperintelligenceSection";
import { PlatformDeepDive } from "@/components/PlatformDeepDive";
import { CareersSection } from "@/components/CareersSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";
import { ModalsAndToast } from "@/components/ModalsAndToast";
import { InteractiveScripts } from "@/components/InteractiveScripts";

export default function Home() {
  return (
    <div data-mode="light" className="hr-landing min-h-[100svh] overflow-x-clip bg-hr-surface font-body text-hr-ink-strong antialiased">
      {/* Header with Announcement, Navbar, Desktop Mega Menu, and Mobile Drawer */}
      <Header />

      {/* Main Sections */}
      <main>
        {/* Section 0: Hero */}
        <Hero />

        {/* Section 1: Logo Wall */}
        <LogoWall />

        {/* Section 2: Statement */}
        <StatementSection />

        {/* Section 3: Case Studies */}
        <CaseStudies />

        {/* Section 4: Platform Diagram */}
        <PlatformDiagram />

        {/* Section 5: Verticals */}
        <VerticalsSection />

        {/* Section 6: Enterprise Superintelligence */}
        <SuperintelligenceSection />

        {/* Section 7: Platform Deep Dive */}
        <PlatformDeepDive />

        {/* Section 8: Careers */}
        <CareersSection />

        {/* Section 9: Call to Action */}
        <CtaSection />
      </main>

      {/* Enterprise Footer */}
      <Footer />

      {/* Floating Toast & Newsroom Modal */}
      <ModalsAndToast />

      {/* Interactive Scripts Controller */}
      <InteractiveScripts />
    </div>
  );
}
