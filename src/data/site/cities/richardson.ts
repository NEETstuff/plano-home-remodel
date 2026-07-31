import type { CitySiteConfig } from '../types';
import {
  defaultBathroomDrivers,
  defaultBathroomTiers,
  defaultKitchenDrivers,
  defaultKitchenTiers,
} from '../shared';

/**
 * Richardson Home Remodel & Design — richardsonhomeremodel.com
 *
 * Housing stock: established 1960s–1990s neighborhoods (Canyon Creek, Heights,
 * Cottonwood corridors) with more original kitchens/baths than new-builder suburbs.
 * Do not invent city-specific reviews, awards, or project addresses.
 */
export const richardson: CitySiteConfig = {
  id: 'richardson',
  city: 'Richardson',
  state: 'TX',
  domain: 'richardsonhomeremodel.com',
  siteUrl: 'https://richardsonhomeremodel.com',
  brandName: 'Richardson Home Remodel & Design',
  brandShort: 'Richardson Home Remodel',
  brandMark: 'R',
  brandTagline: 'A Millwood Remodeling Company',
  email: 'Ryan@MillwoodRemodeling.com',
  addressLocality: 'Richardson',
  cityWiki: 'https://en.wikipedia.org/wiki/Richardson,_Texas',
  foundingDate: '2009',

  areaServed: [
    { name: 'Richardson', wiki: 'https://en.wikipedia.org/wiki/Richardson,_Texas' },
    { name: 'Plano', wiki: 'https://en.wikipedia.org/wiki/Plano,_Texas' },
    { name: 'Dallas', wiki: 'https://en.wikipedia.org/wiki/Dallas' },
    { name: 'Garland', wiki: 'https://en.wikipedia.org/wiki/Garland,_Texas' },
    { name: 'Murphy', wiki: 'https://en.wikipedia.org/wiki/Murphy,_Texas' },
    { name: 'Sachse', wiki: 'https://en.wikipedia.org/wiki/Sachse,_Texas' },
  ],
  nearbyCities: ['Plano', 'Dallas', 'Garland', 'Murphy', 'Sachse', 'Addison'],
  neighborhoods: [
    'Canyon Creek',
    'Richardson Heights',
    'Cottonwood Creek',
    'Spring Valley',
    'Yale Park',
    'J.J. Pearce area',
    'Breckinridge',
    'Residents of Canyon Creek',
    'Duck Creek',
    'Berkner area',
  ],

  pricing: {
    kitchen: defaultKitchenTiers,
    bathroom: defaultBathroomTiers,
    kitchenDrivers: defaultKitchenDrivers,
    bathroomDrivers: defaultBathroomDrivers,
    scenarios: [
      {
        type: 'Kitchen',
        title: '1960s–80s kitchen remodel, existing footprint',
        range: '$40,000–$65,000',
        timeline: '6–9 weeks',
        detail:
          'Common in Canyon Creek and Heights-era homes: replace dated cabinets or reface when structure is sound, new quartz counters, backsplash, lighting, and hardware while keeping major plumbing in place when possible.',
        link: '/kitchen-remodeling/',
        linkLabel: 'Kitchen remodeling details →',
      },
      {
        type: 'Kitchen',
        title: 'Open-up remodel with island or peninsula',
        range: '$65,000–$100,000+',
        timeline: '8–12 weeks',
        detail:
          'Many Richardson galleys and closed kitchens benefit from a partial wall removal, better work triangle, and seating. Structural and permit work drive cost more than finish upgrades alone.',
        link: '/richardson-kitchen-remodeling/',
        linkLabel: 'Richardson kitchen page →',
      },
      {
        type: 'Bathroom',
        title: 'Master bath: original tub-shower to walk-in',
        range: '$30,000–$55,000',
        timeline: '5–8 weeks',
        detail:
          'Established Richardson master baths often still have the original tub-shower and tile. Converting to a walk-in shower with updated vanity and wet-area tile is a frequent full-remodel scope.',
        link: '/bathroom-remodeling/',
        linkLabel: 'Bathroom remodeling details →',
      },
    ],
  },

  seo: {
    home: {
      title: 'Kitchen & Bathroom Remodeling Richardson, TX',
      description:
        "Richardson's trusted kitchen and bathroom remodeling company. In-house design, premium craftsmanship, 2-year warranty. A Millwood Remodeling Company. Free estimate — call (214) 449-5922.",
    },
    kitchen: {
      title: 'Kitchen Remodeling in Richardson, TX | Custom Cabinets & Layouts',
      description:
        'Custom kitchen remodeling in Richardson, TX. Updates for 1960s–90s homes — cabinets, quartz, islands, and open layouts. Free estimate: (214) 449-5922.',
    },
    bathroom: {
      title: 'Bathroom Remodeling in Richardson, TX | Walk-In Showers & Master Baths',
      description:
        'Bathroom remodeling in Richardson, TX. Walk-in showers, vanity upgrades, and master bath remodels for established homes. Call (214) 449-5922.',
    },
    costGuides: {
      title: 'Kitchen & Bathroom Remodel Cost Guide Richardson TX | 2026 Pricing',
      description:
        'Real kitchen and bathroom remodel costs for Richardson and nearby North Dallas. Kitchens $40,000–$100,000+, bathrooms $20,000–$40,000, master baths to $75,000. Free estimate.',
    },
    about: {
      title: 'About Richardson Home Remodel & Design',
      description:
        'Meet Richardson Home Remodel & Design — a Millwood Remodeling company serving Richardson and North Dallas with in-house design, transparent pricing, and a 2-year warranty.',
    },
    contact: {
      title: 'Contact Richardson Home Remodel | Free Estimate',
      description:
        'Schedule a free in-home kitchen or bathroom remodel estimate in Richardson, TX. Call (214) 449-5922 or request a consultation online.',
    },
    ourProcess: {
      title: 'Our Remodeling Process | Richardson Home Remodel & Design',
      description:
        'How we design and build kitchen and bathroom remodels in Richardson: consultation, 3D design, transparent pricing, permits, and a 2-year workmanship warranty.',
    },
    serviceAreas: {
      title: 'Service Areas | Richardson, Plano, Dallas & Nearby',
      description:
        'Kitchen and bathroom remodeling from Richardson Home Remodel & Design — serving Richardson, Plano, North Dallas, Garland, Murphy, and nearby communities.',
    },
    localKitchen: {
      title: 'Richardson Kitchen Remodeling by Neighborhood',
      description:
        'Kitchen remodeling for Richardson neighborhoods — Canyon Creek, Heights, Cottonwood, and more. Full custom remodels for established homes. Free estimate: (214) 449-5922.',
    },
    localBathroom: {
      title: 'Richardson Bathroom Remodeling by Neighborhood',
      description:
        'Bathroom remodeling in Richardson, TX — walk-in showers, master baths, and updates for 1960s–90s homes. Call (214) 449-5922.',
    },
  },

  home: {
    heroTitle: "Richardson's Premier Kitchen & Bathroom Remodeling Company",
    heroSubtitle:
      '15+ years transforming North Dallas homes with exceptional craftsmanship, in-house design, and a 2-year workmanship warranty. A Millwood Remodeling Company.',
    introHeading: 'Kitchen & Bathroom Remodeling Built for Richardson Homes',
    intro:
      'Richardson’s strength is its established neighborhoods — Canyon Creek, the Heights corridors, Cottonwood, and Spring Valley-area homes built from the 1960s through the 1990s. Many still have original kitchens and baths. We remodel those spaces for how families live now, without low-budget powder-room-only shortcuts.',
    highlights: [
      {
        title: 'Update the Original Kitchen',
        text: 'Galley layouts, laminate counters, and dated lighting are common starting points. We improve cabinets, counters, storage, and flow — opening walls when it earns the cost.',
        href: '/kitchen-remodeling/',
        linkLabel: 'Explore Kitchen Remodeling →',
      },
      {
        title: 'Replace the Tired Master Bath',
        text: 'Original tub-showers and tile that no longer match the rest of the house are frequent projects. A walk-in shower and new vanity can transform daily use.',
        href: '/bathroom-remodeling/',
        linkLabel: 'Explore Bathroom Remodeling →',
      },
      {
        title: 'A Local Team That Stands Behind the Work',
        text: 'As a Millwood Remodeling company, we bring in-house design, transparent pricing, City of Richardson permit handling, and a 2-year workmanship warranty.',
        href: '/contact/',
        linkLabel: 'Get Your Free Quote →',
      },
    ],
    galleryHeading: 'Our Recent Work in Richardson & North Dallas',
    gallerySubtitle:
      'From custom kitchens to spa-like bathrooms — craftsmanship for North Texas homes. Project photos may include work across our Millwood service area.',
    guidesHeading: 'Guides for Richardson Homeowners',
    guidesSubtitle:
      'Practical advice on costs, timelines, and planning — written for established North Dallas housing stock.',
  },

  about: {
    heroTitle: 'About Richardson Home Remodel & Design',
    heroSubtitle:
      'We are a Millwood Remodeling Company — designers, craftspeople, and project managers focused on kitchens and bathrooms in Richardson and nearby communities.',
    story: [
      'Richardson Home Remodel & Design is the Richardson-area practice of Millwood Remodeling — built on the belief that remodeling should be a rewarding experience, not a stressful one.',
      'For over 15 years, our team has helped North Dallas homeowners update kitchens and bathrooms with in-house design, clear communication, and a 2-year workmanship warranty. Richardson’s established homes often need full finish replacements rather than “new construction polish” — and we plan scopes accordingly.',
      'We focus on full kitchen and bathroom remodels — not low-budget powder-room-only jobs — so every project gets proper design attention and crew quality.',
    ],
  },

  serviceAreas: {
    heroTitle: 'Serving Richardson and Nearby Communities',
    heroSubtitle:
      'Primary focus on Richardson, with kitchen and bathroom remodeling for Plano, North Dallas, Garland, Murphy, and neighboring cities when the scope fits.',
    introHeading: 'Where We Work',
    intro: [
      'Our Richardson site is built for homeowners across the city — including Canyon Creek, Richardson Heights, Cottonwood Creek, Spring Valley, and homes near major corridors such as Coit, Plano Road, and Belt Line.',
      'We also take on full kitchen and bathroom projects nearby when they fit our remodel model. Tell us your neighborhood on the contact form and we will confirm fit and timing.',
    ],
  },

  costGuides: {
    heroTitle: 'Kitchen & Bathroom Remodel Costs in Richardson, TX',
    heroSubtitle:
      'Honest ranges for Richardson and nearby North Dallas: kitchens $40,000–$100,000+, bathrooms $20,000–$40,000, and high-end master baths up to $75,000. Free in-home estimate.',
    framingIntro:
      'Richardson pricing tracks the broader North Dallas market. Older homes can need more electrical, plumbing, or layout work than a new-builder upgrade — ranges below are planning numbers, not quotes.',
  },

  kitchen: {
    heroTitle: 'Kitchen Remodeling in Richardson, TX',
    heroSubtitle:
      'Custom cabinets, counters, lighting, and layout upgrades for Richardson’s established homes. Free in-home design consultation.',
    introHeading: 'Kitchens Designed for Richardson Housing Stock',
    intro: [
      'Many Richardson kitchens were built as closed galleys or early open plans with finishes that have not been updated in decades. We design remodels that improve storage, seating, and materials while respecting how the house is framed.',
      'Popular scopes include cabinet replacement or high-quality refacing when appropriate, quartz counters, backsplash, under-cabinet lighting, and islands or peninsulas where the footprint allows. Layout changes are planned carefully so structural and permit costs are clear up front.',
    ],
    costHeading: 'What Richardson Kitchen Remodels Typically Cost',
    costIntro:
      'Most full kitchen remodels in this market fall between $40,000 and $100,000+, depending on cabinetry, counters, appliances, and whether walls or plumbing move. An itemized in-home estimate is the only accurate number for your house.',
    localHeading: 'Richardson Neighborhood Kitchen Notes',
    localIntro:
      'Patterns we see often — not a claim about every home:',
    localItems: [
      {
        title: 'Canyon Creek & mid-century stock',
        text: 'Solid bones with original or long-outdated kitchens. Highest impact: cabinets, counters, lighting, and work-triangle improvements.',
      },
      {
        title: 'Heights and Cottonwood corridors',
        text: 'Family homes where kitchens open to living spaces over time. Islands, better storage, and durable finishes are frequent requests.',
      },
      {
        title: 'Later subdivisions and infill',
        text: 'Some newer Richardson homes still carry builder cabinets and counters — finish upgrades without major structural work.',
      },
      {
        title: 'City of Richardson permits',
        text: 'Electrical, plumbing, and structural changes typically require permits. We prepare and coordinate submissions as part of project management.',
      },
    ],
    faqHeading: 'Richardson Kitchen Remodel FAQs',
    faqs: [
      {
        q: 'Do older Richardson kitchens always need a full gut?',
        a: 'Not always. If cabinets are structurally sound, a major upgrade of counters, hardware, lighting, and surfaces can work. We recommend a full cabinetry replacement when boxes, layout, or condition make partial work a poor value.',
      },
      {
        q: 'How long does a Richardson kitchen remodel take?',
        a: 'Most full kitchens run about 6–10 weeks of construction after design, selections, and permits. Custom cabinetry lead times often set the schedule.',
      },
      {
        q: 'Can you open a wall between kitchen and living areas?',
        a: 'Often yes, when structure allows. We assess load-bearing conditions early and include structural and permit costs in the estimate before you commit.',
      },
      {
        q: 'Do you handle City of Richardson permits?',
        a: 'Yes. We prepare and coordinate permits required for the agreed scope and walk you through inspections as part of project management.',
      },
    ],
  },

  bathroom: {
    heroTitle: 'Bathroom Remodeling in Richardson, TX',
    heroSubtitle:
      'Walk-in showers, vanity upgrades, and master bath remodels for established Richardson homes. Premium waterproofing and a 2-year warranty.',
    introHeading: 'Bathrooms Built for How Richardson Homes Are Lived In',
    intro: [
      'Richardson master baths from the 1970s–1990s often still have the original tub-shower, tile, and single vanity. Guest baths may lag even further behind. We remodel full bathrooms — not the cheapest powder-room-only flips.',
      'Walk-in showers, double vanities, proper waterproofing, and durable tile are core to our work. We plan moisture management carefully for North Texas humidity and hard water.',
    ],
    costHeading: 'What Richardson Bathroom Remodels Typically Cost',
    costIntro:
      'Full bathroom remodels commonly run $20,000–$40,000. Higher-end master baths with large showers, premium tile, and double vanities can reach up to about $75,000 depending on scope.',
    localHeading: 'Richardson Bathroom Patterns We See Often',
    localIntro:
      'Common starting points in consultations — not guarantees for every house:',
    localItems: [
      {
        title: 'Original master baths',
        text: 'Tub-shower combos and dated tile are frequent candidates for a full wet-area rebuild with a walk-in shower.',
      },
      {
        title: 'Guest and hall baths',
        text: 'When part of a larger remodel, secondary baths get vanity, tile, and fixture upgrades that match the new standard.',
      },
      {
        title: 'Plumbing age',
        text: 'Older homes sometimes need supply or drain updates during a full remodel — we flag discoveries transparently before proceeding.',
      },
      {
        title: 'Waterproofing first',
        text: 'Correct membranes, slope, and ventilation matter as much as tile choice for long-term performance.',
      },
    ],
    faqHeading: 'Richardson Bathroom Remodel FAQs',
    faqs: [
      {
        q: 'How long does a master bath remodel take in Richardson?',
        a: 'Many master baths complete in roughly 5–8 weeks of construction after design and material lead times. Large tile packages and custom glass can extend the schedule.',
      },
      {
        q: 'Can you convert a tub-shower to a walk-in shower?',
        a: 'Yes — that is a common Richardson request. Cost depends on plumbing location, shower size, bench and niche details, and glass selection.',
      },
      {
        q: 'What is not a fit for your team?',
        a: 'We focus on full bathroom and kitchen remodels. Ultra-low-budget powder-room-only jobs are outside our model so we can protect quality and schedule for complete projects.',
      },
      {
        q: 'Do you handle permits?',
        a: 'We prepare and coordinate permits required by the City of Richardson for the agreed scope and support inspections during construction.',
      },
    ],
  },
};
