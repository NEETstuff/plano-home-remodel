/**
 * City-site configuration schema for multi-domain replicas.
 *
 * One config object per domain (plano, frisco, richardson, …).
 * Shared pages/components read from getSiteConfig(); city-unique copy
 * lives here so we never hard-fork five codebases.
 */

export interface AreaServedCity {
  name: string;
  wiki?: string;
}

export interface PricingTier {
  label: string;
  range: string;
  timeline?: string;
  includes?: string;
}

export interface CostDriver {
  factor: string;
  impact: string;
  note: string;
}

export interface CostScenario {
  type: string;
  title: string;
  range: string;
  timeline: string;
  detail: string;
  /** Optional internal path for related guide (city-agnostic or local) */
  link?: string;
  linkLabel?: string;
}

export interface NeighborhoodNote {
  title: string;
  text: string;
}

export interface WhyPoint {
  title: string;
  text: string;
}

export interface HomeHighlight {
  title: string;
  text: string;
  href: string;
  linkLabel: string;
}

export interface LocalServiceCopy {
  heroTitle: string;
  heroSubtitle: string;
  introHeading: string;
  intro: string[];
  costHeading: string;
  costIntro: string;
  localHeading: string;
  localIntro: string;
  localItems: NeighborhoodNote[];
  faqHeading: string;
  faqs: { q: string; a: string }[];
}

export interface SeoPage {
  title: string;
  description: string;
}

export interface CitySiteConfig {
  /** Short machine id: plano | frisco | richardson | … */
  id: string;
  /** Primary city name, e.g. "Frisco" */
  city: string;
  /** State abbreviation */
  state: string;
  /** Domain without protocol, e.g. "friscohomeremodel.com" */
  domain: string;
  /** Full origin, e.g. "https://friscohomeremodel.com" */
  siteUrl: string;
  /** Brand lockup: "Frisco Home Remodel & Design" */
  brandName: string;
  /** Short brand for header: "Frisco Home Remodel" */
  brandShort: string;
  /** Single letter / monogram for logo mark, e.g. "F" */
  brandMark: string;
  /** e.g. "A Millwood Remodeling Company" */
  brandTagline: string;
  /** Public contact email for this domain */
  email: string;
  /** Address locality used in schema (city name) */
  addressLocality: string;
  /** Wikipedia URL for primary city (schema sameAs) */
  cityWiki: string;
  /** Founding year claim for schema / about (shared Millwood lineage) */
  foundingDate: string;

  /** Cities/areas this site claims to serve (schema + service-areas page) */
  areaServed: AreaServedCity[];
  /** Nearby cities for cross-links / service-area lists (display names) */
  nearbyCities: string[];
  /** Named neighborhoods / communities (comma-separated or list) */
  neighborhoods: string[];

  /** Shared pricing (can override per city if market truly differs) */
  pricing: {
    kitchen: PricingTier[];
    bathroom: PricingTier[];
    kitchenDrivers: CostDriver[];
    bathroomDrivers: CostDriver[];
    scenarios: CostScenario[];
  };

  seo: {
    home: SeoPage;
    kitchen: SeoPage;
    bathroom: SeoPage;
    costGuides: SeoPage;
    about: SeoPage;
    contact: SeoPage;
    ourProcess: SeoPage;
    serviceAreas: SeoPage;
    /** City-specific deep pages */
    localKitchen: SeoPage;
    localBathroom: SeoPage;
  };

  home: {
    heroTitle: string;
    heroSubtitle: string;
    introHeading: string;
    intro: string;
    highlights: HomeHighlight[];
    galleryHeading: string;
    gallerySubtitle: string;
    guidesHeading: string;
    guidesSubtitle: string;
  };

  about: {
    heroTitle: string;
    heroSubtitle: string;
    story: string[];
  };

  serviceAreas: {
    heroTitle: string;
    heroSubtitle: string;
    introHeading: string;
    intro: string[];
  };

  costGuides: {
    heroTitle: string;
    heroSubtitle: string;
    framingIntro: string;
  };

  /** City-specific kitchen service page (maps to /kitchen-remodeling/ + /{city}-kitchen-remodeling/) */
  kitchen: LocalServiceCopy;
  /** City-specific bathroom service page */
  bathroom: LocalServiceCopy;

  /**
   * Optional satellite city landing pages (same domain), e.g. nearby cities
   * that currently live as /frisco-kitchen-bathroom-remodeling/ on Plano.
   * On a Frisco primary site these may be empty or point at nearby markets.
   */
  satelliteCities?: {
    slug: string;
    name: string;
    wiki: string;
    title: string;
    description: string;
    heroSubtitle: string;
    introHeading: string;
    intro: string[];
    notesHeading: string;
    notes: NeighborhoodNote[];
    neighborhoods: string;
    whyHeading: string;
    why: WhyPoint[];
  }[];
}
