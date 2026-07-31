/**
 * Values shared by every city-domain replica.
 * Do not put city names or domain URLs here.
 */

export const SHARED = {
  phoneDisplay: '(214) 449-5922',
  phoneTel: '+12144495922',
  parentCompany: {
    name: 'Millwood Remodeling',
    url: 'https://millwoodremodeling.com',
  },
  /** Shared North Dallas market pricing — truthful ranges used across sites */
  pricingDefaults: {
    kitchenRangeShort: '$40,000–$100,000+',
    bathroomRangeShort: '$20,000–$40,000',
    masterBathHighShort: 'up to $75,000',
  },
  warranty: '2-year workmanship warranty',
  experienceClaim: '15+ years',
  /** Premium positioning — apply on all city sites */
  scopeNote:
    'We focus on full kitchen and bathroom remodels. We do not take on low-budget powder-room-only projects.',
  testimonialAttribution: 'Google review · Millwood Remodeling',
  testimonialDisclaimer:
    'Real Google reviews for Millwood Remodeling — the parent company behind this site. Reviews are not claimed to be from a specific city unless the customer text says so.',
} as const;

/** Default kitchen cost tiers (same market; cities may reframe copy, not invent new numbers) */
export const defaultKitchenTiers = [
  {
    label: 'Select Kitchen Remodel',
    range: '$40,000–$60,000',
    timeline: '6–8 weeks',
    includes:
      'Cabinet refacing or mid-range new cabinets, quartz or granite counters, tile backsplash, sink and faucet, lighting upgrades, and paint.',
  },
  {
    label: 'Premium Kitchen Remodel',
    range: '$60,000–$100,000+',
    timeline: '8–12 weeks',
    includes:
      'Full custom or semi-custom cabinets, premium quartz or stone, island with seating, soft-close hardware, under-cabinet lighting, and higher-end fixtures.',
  },
];

export const defaultBathroomTiers = [
  {
    label: 'Full Bathroom Remodel',
    range: '$20,000–$40,000',
    timeline: '3–6 weeks',
    includes:
      'Tub or shower update, vanity, tile, fixtures, lighting, and finishes for a full bath refresh.',
  },
  {
    label: 'High-End Master Bath',
    range: 'Up to $75,000',
    timeline: '6–10 weeks',
    includes:
      'Walk-in shower, freestanding tub where space allows, double vanity, premium tile, and spa-level finishes.',
  },
];

export const defaultKitchenDrivers = [
  {
    factor: 'Cabinetry',
    impact: 'High',
    note: 'Stock vs semi-custom vs custom is usually the largest line item.',
  },
  {
    factor: 'Countertops',
    impact: 'Medium–High',
    note: 'Quartz and natural stone range widely by brand and edge profile.',
  },
  {
    factor: 'Layout changes',
    impact: 'High',
    note: 'Moving plumbing, gas, or load-bearing walls adds design and trade time.',
  },
  {
    factor: 'Appliances',
    impact: 'Variable',
    note: 'Often owner-supplied; premium packages can rival cabinetry cost.',
  },
  {
    factor: 'Electrical & lighting',
    impact: 'Medium',
    note: 'Code updates, under-cabinet LEDs, and island circuits add up.',
  },
  {
    factor: 'Permits & timeline',
    impact: 'Medium',
    note: 'City review windows and HOA approvals affect schedule more than sticker price.',
  },
];

export const defaultBathroomDrivers = [
  {
    factor: 'Shower vs tub',
    impact: 'High',
    note: 'Curbless walk-ins and glass packages cost more than a like-for-like tub swap.',
  },
  {
    factor: 'Tile scope',
    impact: 'High',
    note: 'Full wet-area tile, niches, and heated floors drive material and labor.',
  },
  {
    factor: 'Plumbing moves',
    impact: 'High',
    note: 'Relocating drains or supply lines is the main budget surprise risk.',
  },
  {
    factor: 'Vanity & storage',
    impact: 'Medium',
    note: 'Double vanities and custom storage scale with size and finish level.',
  },
  {
    factor: 'Waterproofing',
    impact: 'Medium',
    note: 'Proper wet-area systems protect the home — non-negotiable on quality jobs.',
  },
  {
    factor: 'Fixtures & glass',
    impact: 'Medium',
    note: 'Frameless glass and premium fixtures raise both look and cost.',
  },
];
