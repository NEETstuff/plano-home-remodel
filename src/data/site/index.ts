/**
 * Active city-site resolver.
 *
 *   SITE_CITY=plano          npm run build
 *   SITE_CITY=frisco         npm run build:frisco
 *   SITE_CITY=richardson     npm run build:richardson
 *   SITE_CITY=grapevine      npm run build:grapevine
 *   SITE_CITY=southlake      npm run build:southlake
 *   SITE_CITY=highlandpark   npm run build:highlandpark
 *   SITE_CITY=dallas         npm run build:dallas
 */

import type { CitySiteConfig } from './types';
import { frisco } from './cities/frisco';
import { plano } from './cities/plano';
import { richardson } from './cities/richardson';
import { grapevine } from './cities/grapevine';
import { southlake } from './cities/southlake';
import { highlandpark } from './cities/highlandpark';
import { dallas } from './cities/dallas';
import { SHARED } from './shared';

export type { CitySiteConfig } from './types';
export { SHARED } from './shared';
export { frisco } from './cities/frisco';
export { plano } from './cities/plano';
export { richardson } from './cities/richardson';
export { grapevine } from './cities/grapevine';
export { southlake } from './cities/southlake';
export { highlandpark } from './cities/highlandpark';
export { dallas } from './cities/dallas';

/** Registry of city sites ready for multi-domain builds */
export const citySites = {
  plano,
  frisco,
  richardson,
  grapevine,
  southlake,
  highlandpark,
  dallas,
} as const;

export type CitySiteId = keyof typeof citySites;

export function listCitySiteIds(): CitySiteId[] {
  return Object.keys(citySites) as CitySiteId[];
}

function readSiteCityEnv(): string {
  try {
    // Injected at build via vite.define in astro.config.mjs
    const fromVite = (import.meta as ImportMeta & { env: Record<string, string> }).env
      ?.SITE_CITY;
    if (fromVite) return String(fromVite);
  } catch {
    /* ignore */
  }
  if (typeof process !== 'undefined' && process.env?.SITE_CITY) {
    return process.env.SITE_CITY;
  }
  return '';
}

/** Resolve the active site config (default: plano). */
export function getSiteConfig(cityId?: string): CitySiteConfig {
  const raw = (cityId || readSiteCityEnv() || 'plano').toString().toLowerCase().trim();

  if (raw in citySites) {
    return citySites[raw as CitySiteId];
  }

  throw new Error(
    `Unknown SITE_CITY "${raw}". Known: ${listCitySiteIds().join(', ')}`,
  );
}

/** Absolute URL helper for the active (or given) site */
export function siteUrl(path = '/', config?: CitySiteConfig): string {
  const c = config ?? getSiteConfig();
  const base = c.siteUrl.replace(/\/$/, '');
  if (!path || path === '/') return `${base}/`;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

/** Local deep-page paths for the active city */
export function localKitchenPath(config?: CitySiteConfig): string {
  const c = config ?? getSiteConfig();
  return `/${c.id}-kitchen-remodeling/`;
}

export function localBathroomPath(config?: CitySiteConfig): string {
  const c = config ?? getSiteConfig();
  return `/${c.id}-bathroom-remodeling/`;
}

/** Organization / LocalBusiness schema core for a city site */
export function buildBusinessSchema(config: CitySiteConfig = getSiteConfig()) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${config.siteUrl}/`,
    name: config.brandName,
    alternateName: `${config.brandName} – ${config.brandTagline}`,
    description: config.seo.home.description,
    url: `${config.siteUrl}/`,
    telephone: SHARED.phoneTel,
    email: config.email,
    areaServed: config.areaServed.map((a) => ({
      '@type': 'City',
      name: a.name,
      ...(a.wiki ? { sameAs: a.wiki } : {}),
    })),
    address: {
      '@type': 'PostalAddress',
      addressLocality: config.addressLocality,
      addressRegion: config.state,
      addressCountry: 'US',
    },
    foundingDate: config.foundingDate,
    knowsAbout: [
      'Kitchen Remodeling',
      'Bathroom Remodeling',
      'Home Renovation',
      'Interior Design',
    ],
    parentOrganization: {
      '@type': 'HomeAndConstructionBusiness',
      name: SHARED.parentCompany.name,
      url: SHARED.parentCompany.url,
    },
    sameAs: [SHARED.parentCompany.url],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Remodeling Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Kitchen Remodeling' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Bathroom Remodeling' },
        },
      ],
    },
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; path: string }[],
  config: CitySiteConfig = getSiteConfig(),
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: siteUrl(item.path, config),
    })),
  };
}

/** Shared provider block for Service schema on local service pages */
export function buildProviderSchema(config: CitySiteConfig = getSiteConfig()) {
  return {
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${config.siteUrl}/`,
    name: config.brandName,
    url: `${config.siteUrl}/`,
    telephone: SHARED.phoneTel,
    parentOrganization: {
      '@type': 'HomeAndConstructionBusiness',
      name: SHARED.parentCompany.name,
      url: SHARED.parentCompany.url,
    },
  };
}
