# HappyRobot AI — Next.js Enterprise Frontend

A clean, modular, and readable **Next.js (App Router + TypeScript + Tailwind CSS)** application replicating the complete [happyrobot.ai](https://www.happyrobot.ai/) platform website.

---

## 🚀 Getting Started

To run the development server locally:

```bash
cd happyrobot-next
npm run dev -- -p 3005
```

Open [http://localhost:3005](http://localhost:3005) with your browser to see the result.

To create an optimized production build:

```bash
npm run build
npm run start -- -p 3005
```

---

## 📁 Project Architecture & Structure

```
happyrobot-next/
├── public/
│   ├── fonts/                  # SuisseIntl Book & Regular webfonts
│   ├── images/
│   │   ├── cdn/                # Platform SVG diagram, sector cards, case studies
│   │   ├── logos/              # 21 enterprise partner SVG logos (DHL, Uber, Kuehne+Nagel, etc.)
│   │   └── redesign/           # High-resolution case study stills
│   └── videos/
│       ├── HR_Landing_Hero_Loop_HD169_Lumen_v1.mp4  # Cinematic hero loop (6MB)
│       └── ESI_Launch.mp4                           # Platform launch overview video
│
├── src/
│   ├── app/
│   │   ├── globals.css         # Theme tokens, @font-face, and scrollytelling CSS
│   │   ├── layout.tsx          # Root layout with SEO metadata and OpenGraph tags
│   │   └── page.tsx            # Main landing page assembling all components
│   │
│   ├── components/
│   │   ├── Navbar.tsx          # Announcement bar, mega menus, mobile drawer
│   │   ├── Hero.tsx            # Background video, CTA input, live enterprise stats
│   │   ├── LogoWall.tsx        # Responsive grid of 21 enterprise partner logos
│   │   ├── MissionStatement.tsx# Scrollytelling word illumination with proper spacing
│   │   ├── PlatformArchitecture.tsx # SVG topology diagram + interactive tabs
│   │   ├── CaseStudies.tsx     # DHL, Naturgy, Kuehne+Nagel metric cards & quotes
│   │   ├── VerticalsGrid.tsx   # 8-industry interactive solutions switcher
│   │   ├── WorkflowSection.tsx # End-to-end autonomous lifecycle & live trace console
│   │   ├── SecurityCompliance.tsx   # SOC 2 Type II, ISO 27001 & data privacy
│   │   ├── CareersCTA.tsx      # Open positions & team culture highlight
│   │   ├── Footer.tsx          # Sitemaps, governance, and live uptime status
│   │   └── Modals.tsx          # Demo booking form, Video player, Newsroom PR
│   │
│   ├── data/
│   │   └── site-data.ts        # Typed datasets for all navigation, partners, and case studies
│   │
│   └── types/
│       └── index.ts            # Strict TypeScript interfaces
│
├── package.json
├── tsconfig.json
└── next.config.ts
```

---

## 🎨 Key Features & Technical Details

1. **Clean & Readable Codebase**: Every section is decomposed into its own single-responsibility React component under `src/components/`, with all data separated into `src/data/site-data.ts`.
2. **Scrollytelling Engine**: The statement *"The limit of what AI can do in your enterprise is not the model..."* uses scroll-linked progress calculation with proper word inline spacing (`display: inline-block; margin-right: 0.28em;`).
3. **Local Assets**: All 21 SVG partner logos, background video loops, platform diagram, and case study images run 100% locally from `/public`.
4. **Interactive Modals**:
   - **Book a Demo**: Interactive form with work email, company name, industry selector, and instant confirmation toast.
   - **Launch Video**: In-app modal player for `ESI_Launch.mp4`.
   - **Newsroom**: Series C funding press release modal.
