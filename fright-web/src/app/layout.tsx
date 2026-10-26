import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.happyrobot.ai"),
  title: "HappyFreight | Autonomous Freight Operations Harness",
  description:
    "Autonomous AI agents for Indian freight corridors — ingesting WhatsApp voice notes, enforcing margin floors, and coordinating dispatches.",
  keywords: [
    "Enterprise AI",
    "Agentic Workflows",
    "Autonomous Operations",
    "Freight Broker AI",
    "Logistics Automation",
    "HappyFreight",
  ],
  authors: [{ name: "HappyFreight Inc." }],
  openGraph: {
    title: "HappyFreight | Autonomous Freight Operations Harness",
    description:
      "Autonomous AI agents for Indian freight corridors — ingesting WhatsApp voice notes, enforcing margin floors, and coordinating dispatches.",
    url: "https://www.happyrobot.ai",
    siteName: "HappyFreight",
    images: [
      {
        url: "/images/cdn/hero_still.png",
        width: 1200,
        height: 630,
        alt: "HappyFreight Autonomous Operations Harness",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.svg",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
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
      suppressHydrationWarning
      className="geistsans_d5a4f12f-module__AHuHVa__variable geistmono_157ca88a-module__k0_9hG__variable scroll-smooth antialiased"
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
