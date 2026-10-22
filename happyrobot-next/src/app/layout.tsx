import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vahanai.in"),
  title: "VahanaAI | Autonomous AI Operations Harness for Indian Freight Brokers",
  description:
    "Type-Safe AI Agent Harness built for Indian road transport. Ingests multilingual WhatsApp voice notes (Kannada/Hindi), protects ₹2,500 profit floors, and verifies PODs.",
  keywords: [
    "Indian Freight Brokerage",
    "Logistics AI Agent",
    "WhatsApp Voice Intake",
    "Kanglish Kannada Logistics AI",
    "FASTag Toll Tracking",
    "Bilty POD OCR",
    "Type-Safe Harness",
  ],
  authors: [{ name: "VahanaAI Technologies" }],
  openGraph: {
    title: "VahanaAI | The Operations Harness for Indian Road Freight",
    description:
      "Autonomous dispatching, rate negotiation, and margin protection for India's ₹10 Lakh Crore logistics economy.",
    url: "https://www.vahanai.in",
    siteName: "VahanaAI",
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="light"
      data-mode="light"
      className="geistsans_d5a4f12f-module__AHuHVa__variable geistmono_157ca88a-module__k0_9hG__variable scroll-smooth antialiased"
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="bg-hr-surface text-hr-ink-strong">{children}</body>
    </html>
  );
}
