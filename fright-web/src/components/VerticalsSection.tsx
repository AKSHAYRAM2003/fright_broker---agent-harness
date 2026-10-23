"use client";

import React from "react";

interface FreightVertical {
  number: string;
  title: string;
  caption: string;
  image: string;
  href: string;
}

const FREIGHT_VERTICALS: FreightVertical[] = [
  {
    number: "01",
    title: "Full Truck Load (FTL)",
    caption: "32ft Multi-Axle · 16T to 25T Taurus",
    image: "/images/cdn/landing-sector-logistics.webp",
    href: "#corridors",
  },
  {
    number: "02",
    title: "Heavy Industrial & Steel",
    caption: "ODC Trailers · Jindal & Tata Belts",
    image: "/images/cdn/landing-sector-manufacturing.webp",
    href: "#corridors",
  },
  {
    number: "03",
    title: "Port & Container Drayage",
    caption: "JNPT & Mundra · 20ft/40ft TEU",
    image: "/images/cdn/landing-sector-airlines.webp",
    href: "#corridors",
  },
  {
    number: "04",
    title: "FMCG & Fast-Moving Retail",
    caption: "Peenya, Bhiwandi & Bilaspur Hubs",
    image: "/images/cdn/landing-sector-retail.webp",
    href: "#corridors",
  },
  {
    number: "05",
    title: "Agri & Mandi Bulk",
    caption: "Seasonal Produce · Azadpur & Vashi APMC",
    image: "/images/cdn/landing-sector-utilities.webp",
    href: "#corridors",
  },
  {
    number: "06",
    title: "Chemicals & Petrochemicals",
    caption: "Hazchem Tankers · Gujarat–MH Belt",
    image: "/images/cdn/landing-sector-finance.png",
    href: "#corridors",
  },
  {
    number: "07",
    title: "Pharma & Cold Chain",
    caption: "Reefer Fleets · Hyd to Nhava Sheva",
    image: "/images/cdn/landing-sector-insurance.webp",
    href: "#corridors",
  },
  {
    number: "08",
    title: "Automotive Logistics",
    caption: "Car Carriers · Gurgaon to Pune",
    image: "/images/cdn/landing-sector-telecom.png",
    href: "#corridors",
  },
];

export const VerticalsSection: React.FC = () => {
  return (
    <>
      <section id="verticals" className="scroll-mt-24 bg-hr-surface">
        <div className="mx-auto max-w-[1440px] px-5 pb-10 pt-16 md:px-12 md:pt-[120px]">
          <div className="mb-12 flex flex-wrap items-start justify-between gap-8 md:mb-14 md:gap-10">
            <div>
              <h2 className="max-w-[18ch] font-body text-[29px] leading-none tracking-[-0.02em] text-hr-ink-strong md:text-[46px]">
                One harness.{" "}
                <span className="text-hr-accent">Every freight corridor.</span>
              </h2>
            </div>
            <div className="max-w-[420px]">
              <p className="text-[15.5px] leading-[1.65] text-hr-ink-3">
                From heavy industrial machinery on NH-48 to temperature-sensitive pharma and APMC mandis — HappyFright enforces corridor pricing, vehicle constraints, and toll transit standards.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-px border-y border-hr-line bg-hr-line lg:grid-cols-4">
          {FREIGHT_VERTICALS.map((item) => (
            <div key={item.number}>
              <a
                className="group relative block aspect-square overflow-hidden bg-hr-cell no-underline"
                href={item.href}
              >
                <div className="absolute inset-0">
                  <div className="relative h-full w-full overflow-hidden bg-hr-cell">
                    <img
                      alt={`${item.title} - Indian Freight Corridor`}
                      loading="lazy"
                      decoding="async"
                      className="object-cover hr-sector-media h-full w-full absolute inset-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.33,0,0.15,1)] group-hover:scale-[1.04]"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      src={item.image}
                    />
                  </div>
                </div>

                {/* Noise texture overlay */}
                <div
                  className="pointer-events-none absolute inset-0"
                  aria-hidden="true"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E\")",
                    backgroundSize: "140px 140px",
                    backgroundRepeat: "repeat",
                    mixBlendMode: "overlay",
                  }}
                />

                {/* Gradient overlay */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(18,16,14,0.1) 40%, rgba(18,16,14,0.9) 100%)",
                  }}
                />

                {/* Number badge top left */}
                <div className="pointer-events-none absolute left-[18px] top-[18px] font-mono text-[10px] tracking-[0.14em] text-white/80">
                  {item.number}
                </div>

                {/* Content bottom left */}
                <div className="pointer-events-none absolute bottom-[18px] left-[18px] right-[18px]">
                  <div className="font-body text-[16px] tracking-[-0.01em] text-hr-lumen md:text-[19px] font-medium">
                    {item.title}
                  </div>
                  <div className="hr-sector-caption">
                    <div className="min-h-0 overflow-hidden">
                      <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-hr-ink-2 hrlight:text-hr-stone">
                        {item.caption}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
