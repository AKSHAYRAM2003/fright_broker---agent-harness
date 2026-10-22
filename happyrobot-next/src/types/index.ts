export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  children?: {
    title: string;
    description: string;
    href: string;
    icon?: string;
  }[];
}

export interface PartnerLogo {
  id: string;
  name: string;
  src: string;
  width?: number;
  height?: number;
}

export interface CaseStudy {
  id: string;
  company: string;
  metric: string;
  highlight: string;
  summary: string;
  quote: string;
  author: string;
  role: string;
  image: string;
  logo: string;
  tags: string[];
}

export interface EnterpriseVertical {
  id: string;
  name: string;
  tagline: string;
  image: string;
  workflows: string[];
}

export interface PlatformFeature {
  id: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
}
