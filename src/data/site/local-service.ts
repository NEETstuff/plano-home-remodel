/**
 * Build LocalServicePage-shaped content from CitySiteConfig
 * for /{city}-kitchen-remodeling/ and /{city}-bathroom-remodeling/.
 */

import type { CitySiteConfig } from './types';
import {
  getSiteConfig,
  localBathroomPath,
  localKitchenPath,
  siteUrl,
  buildProviderSchema,
  SHARED,
} from './index';
import type { LocalServicePage, ServiceContent } from '../local-service-pages';

const processStepsKitchen = (city: string) => [
  {
    title: 'Free Consultation',
    text: `We visit your kitchen, measure, and give honest advice on scope, timeline, and budget.`,
  },
  {
    title: 'Design & Renderings',
    text: 'Our in-house designer creates 3D renderings and selects materials with you.',
  },
  {
    title: 'Permits & Selections',
    text: `We file with the City of ${city} and lock in cabinets, stone, and appliances.`,
  },
  {
    title: 'Construction',
    text: 'Demo through finishing, with a clean site and a single point of contact.',
  },
  {
    title: 'Walkthrough & Warranty',
    text: 'We review every detail together — then back the work with a 2-year warranty.',
  },
];

const processStepsBathroom = (city: string) => [
  {
    title: 'Free Consultation',
    text: 'We visit your bathroom, assess the space, and give honest advice on scope and budget.',
  },
  {
    title: 'Design & Selections',
    text: 'Tile, fixtures, glass, and vanity selections with 3D guidance where helpful.',
  },
  {
    title: 'Permits & Prep',
    text: `We handle City of ${city} permitting and protect the rest of your home before demo.`,
  },
  {
    title: 'Construction',
    text: 'Waterproofing, tile, plumbing, and finishes — managed to a clear schedule.',
  },
  {
    title: 'Walkthrough & Warranty',
    text: 'Final walkthrough and our 2-year workmanship warranty.',
  },
];

function kitchenContent(config: CitySiteConfig): ServiceContent {
  const k = config.kitchen;
  const scenarios = config.pricing.scenarios
    .filter((s) => s.type === 'Kitchen')
    .map((s) => ({
      type: s.type,
      title: s.title,
      range: s.range,
      timeline: s.timeline,
      detail: s.detail,
    }));

  return {
    heroTitle: `${config.city} Kitchen Remodeling`,
    heroSubtitle: k.heroSubtitle,
    ctaText: 'Get Your Free Kitchen Estimate',
    ctaHref: '/contact/',
    secondaryText: 'See Kitchen Costs',
    secondaryHref: '/cost-guides/',
    introHeading: k.introHeading,
    intro: k.intro,
    introLinks: [
      { label: 'Kitchen Remodeling Services', href: '/kitchen-remodeling/' },
      { label: 'Kitchen Cost Guide', href: '/cost-guides/' },
      { label: 'Our Process', href: '/our-process/' },
    ],
    costHeading: k.costHeading,
    costIntro: k.costIntro,
    scenarios:
      scenarios.length > 0
        ? scenarios
        : config.pricing.kitchen.map((t) => ({
            type: 'Kitchen',
            title: t.label,
            range: t.range,
            timeline: t.timeline || '',
            detail: t.includes || '',
          })),
    costNote: `Looking for bathroom pricing too? See our <a href="/cost-guides/" class="text-accent hover:text-accent-light underline">full kitchen &amp; bathroom cost guide</a> or our <a href="${localBathroomPath(config)}" class="text-accent hover:text-accent-light underline">${config.city} bathroom remodeling</a> page.`,
    localHeading: k.localHeading,
    localIntro: k.localIntro,
    localItems: k.localItems,
    processHeading: `The ${config.city} Kitchen Remodeling Process`,
    processIntro: `A proven design-build process, from first call to final walkthrough. See the full detail on our <a href="/our-process/" class="text-accent hover:text-accent-light underline">our process</a> page.`,
    processSteps: processStepsKitchen(config.city),
    faqHeading: k.faqHeading,
    faqIntro: `The questions ${config.city} homeowners ask us most before starting a kitchen remodel.`,
    faqs: k.faqs,
    relatedGuides: [
      { title: 'Kitchen & bathroom cost guides', href: '/cost-guides/' },
      { title: 'Our process', href: '/our-process/' },
      { title: 'Kitchen remodeling overview', href: '/kitchen-remodeling/' },
    ],
  };
}

function bathroomContent(config: CitySiteConfig): ServiceContent {
  const b = config.bathroom;
  const scenarios = config.pricing.scenarios
    .filter((s) => s.type === 'Bathroom')
    .map((s) => ({
      type: s.type,
      title: s.title,
      range: s.range,
      timeline: s.timeline,
      detail: s.detail,
    }));

  return {
    heroTitle: `${config.city} Bathroom Remodeling`,
    heroSubtitle: b.heroSubtitle,
    ctaText: 'Get Your Free Bathroom Estimate',
    ctaHref: '/contact/',
    secondaryText: 'See Bathroom Costs',
    secondaryHref: '/cost-guides/',
    introHeading: b.introHeading,
    intro: b.intro,
    introLinks: [
      { label: 'Bathroom Remodeling Services', href: '/bathroom-remodeling/' },
      { label: 'Bathroom Cost Guide', href: '/cost-guides/' },
      { label: 'Our Process', href: '/our-process/' },
    ],
    costHeading: b.costHeading,
    costIntro: b.costIntro,
    scenarios:
      scenarios.length > 0
        ? scenarios
        : config.pricing.bathroom.map((t) => ({
            type: 'Bathroom',
            title: t.label,
            range: t.range,
            timeline: t.timeline || '',
            detail: t.includes || '',
          })),
    costNote: `Looking for kitchen pricing too? See our <a href="/cost-guides/" class="text-accent hover:text-accent-light underline">full kitchen &amp; bathroom cost guide</a> or our <a href="${localKitchenPath(config)}" class="text-accent hover:text-accent-light underline">${config.city} kitchen remodeling</a> page.`,
    localHeading: b.localHeading,
    localIntro: b.localIntro,
    localItems: b.localItems,
    processHeading: `The ${config.city} Bathroom Remodeling Process`,
    processIntro: `A proven design-build process, from first call to final walkthrough. See the full detail on our <a href="/our-process/" class="text-accent hover:text-accent-light underline">our process</a> page.`,
    processSteps: processStepsBathroom(config.city),
    faqHeading: b.faqHeading,
    faqIntro: `Common questions about bathroom remodeling in ${config.city}.`,
    faqs: b.faqs,
    relatedGuides: [
      { title: 'Kitchen & bathroom cost guides', href: '/cost-guides/' },
      { title: 'Our process', href: '/our-process/' },
      { title: 'Bathroom remodeling overview', href: '/bathroom-remodeling/' },
    ],
  };
}

export function buildKitchenLocalPage(
  config: CitySiteConfig = getSiteConfig(),
): LocalServicePage {
  const path = localKitchenPath(config);
  return {
    slug: path.replace(/^\/|\/$/g, ''),
    canonical: siteUrl(path, config),
    title: config.seo.localKitchen.title,
    description: config.seo.localKitchen.description,
    serviceName: `${config.city} Kitchen Remodeling`,
    serviceDescription: config.seo.localKitchen.description,
    serviceType: 'Kitchen Remodeling',
    cityName: config.city,
    cityWiki: config.cityWiki,
    priceRange: SHARED.pricingDefaults.kitchenRangeShort.replace(/–/g, ' – '),
    parentName: 'Kitchen Remodeling',
    parentUrl: '/kitchen-remodeling/',
    breadcrumbName: `${config.city} Kitchen Remodeling`,
    content: kitchenContent(config),
  };
}

export function buildBathroomLocalPage(
  config: CitySiteConfig = getSiteConfig(),
): LocalServicePage {
  const path = localBathroomPath(config);
  return {
    slug: path.replace(/^\/|\/$/g, ''),
    canonical: siteUrl(path, config),
    title: config.seo.localBathroom.title,
    description: config.seo.localBathroom.description,
    serviceName: `${config.city} Bathroom Remodeling`,
    serviceDescription: config.seo.localBathroom.description,
    serviceType: 'Bathroom Remodeling',
    cityName: config.city,
    cityWiki: config.cityWiki,
    priceRange: SHARED.pricingDefaults.bathroomRangeShort.replace(/–/g, ' – '),
    parentName: 'Bathroom Remodeling',
    parentUrl: '/bathroom-remodeling/',
    breadcrumbName: `${config.city} Bathroom Remodeling`,
    content: bathroomContent(config),
  };
}

export function buildLocalServiceSchemas(page: LocalServicePage, config = getSiteConfig()) {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${page.canonical}#service`,
    name: page.serviceName,
    description: page.serviceDescription,
    serviceType: page.serviceType,
    areaServed: {
      '@type': 'City',
      name: page.cityName,
      sameAs: page.cityWiki,
    },
    provider: buildProviderSchema(config),
    priceRange: page.priceRange,
    priceCurrency: 'USD',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('/', config) },
      {
        '@type': 'ListItem',
        position: 2,
        name: page.parentName,
        item: siteUrl(page.parentUrl, config),
      },
      { '@type': 'ListItem', position: 3, name: page.breadcrumbName, item: page.canonical },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${page.canonical}#faq`,
    mainEntity: page.content.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  return [serviceSchema, breadcrumbSchema, faqSchema];
}

