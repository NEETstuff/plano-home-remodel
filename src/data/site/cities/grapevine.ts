import type { CitySiteConfig } from '../types';
import {
  defaultBathroomDrivers,
  defaultBathroomTiers,
  defaultKitchenDrivers,
  defaultKitchenTiers,
} from '../shared';

/**
 * Grapevine Home Remodel & Design — grapevinehomeremodel.com
 *
 * Housing stock: historic downtown core + mid/late-century cottages and later
 * suburban subdivisions; DFW-proximate lifestyle. Truthful only — no invented reviews.
 */
export const grapevine: CitySiteConfig = {
  id: 'grapevine',
  city: 'Grapevine',
  state: 'TX',
  domain: 'grapevinehomeremodel.com',
  siteUrl: 'https://grapevinehomeremodel.com',
  brandName: 'Grapevine Home Remodel & Design',
  brandShort: 'Grapevine Home Remodel',
  brandMark: 'G',
  brandTagline: 'A Millwood Remodeling Company',
  email: 'info@grapevinehomeremodel.com',
  addressLocality: 'Grapevine',
  cityWiki: 'https://en.wikipedia.org/wiki/Grapevine,_Texas',
  foundingDate: '2009',

  areaServed: [
    { name: 'Grapevine', wiki: 'https://en.wikipedia.org/wiki/Grapevine,_Texas' },
    { name: 'Colleyville', wiki: 'https://en.wikipedia.org/wiki/Colleyville,_Texas' },
    { name: 'Southlake', wiki: 'https://en.wikipedia.org/wiki/Southlake,_Texas' },
    { name: 'Keller', wiki: 'https://en.wikipedia.org/wiki/Keller,_Texas' },
    { name: 'Coppell', wiki: 'https://en.wikipedia.org/wiki/Coppell,_Texas' },
    { name: 'Euless', wiki: 'https://en.wikipedia.org/wiki/Euless,_Texas' },
  ],
  nearbyCities: ['Colleyville', 'Southlake', 'Keller', 'Coppell', 'Euless', 'Flower Mound'],
  neighborhoods: [
    'Historic Downtown Grapevine',
    'Dove Crossing',
    'Glade Crossing',
    'Silver Lake',
    'Lakeside',
    'Oak Grove',
    'Pool Road corridor',
    'Wall-Price Scott area',
    'Timberline',
    'Park Place',
  ],

  pricing: {
    kitchen: defaultKitchenTiers,
    bathroom: defaultBathroomTiers,
    kitchenDrivers: defaultKitchenDrivers,
    bathroomDrivers: defaultBathroomDrivers,
    scenarios: [
      {
        type: 'Kitchen',
        title: 'Cottage / mid-century kitchen refresh',
        range: '$40,000–$70,000',
        timeline: '6–9 weeks',
        detail:
          'Smaller Grapevine footprints near the historic core often need smart storage, better lighting, and durable counters without forcing a huge open plan that does not fit the house.',
        link: '/kitchen-remodeling/',
        linkLabel: 'Kitchen remodeling details →',
      },
      {
        type: 'Kitchen',
        title: 'Suburban open-plan kitchen upgrade',
        range: '$60,000–$100,000+',
        timeline: '8–12 weeks',
        detail:
          'Later Grapevine subdivisions often want larger islands, soft-close cabinetry, quartz, and lighting that works for both daily cooking and entertaining.',
        link: '/grapevine-kitchen-remodeling/',
        linkLabel: 'Grapevine kitchen page →',
      },
      {
        type: 'Bathroom',
        title: 'Master bath walk-in shower conversion',
        range: '$30,000–$60,000',
        timeline: '5–8 weeks',
        detail:
          'Garden tubs and dated showers are common conversion targets. Scope depends on plumbing moves, tile level, and glass.',
        link: '/bathroom-remodeling/',
        linkLabel: 'Bathroom remodeling details →',
      },
    ],
  },

  seo: {
    home: {
      title: 'Kitchen & Bathroom Remodeling Grapevine, TX',
      description:
        "Grapevine's trusted kitchen and bathroom remodeling company. In-house design, premium craftsmanship, 2-year warranty. A Millwood Remodeling Company. Free estimate — call (214) 449-5922.",
    },
    kitchen: {
      title: 'Kitchen Remodeling in Grapevine, TX | Custom Cabinets & Islands',
      description:
        'Custom kitchen remodeling in Grapevine, TX — historic cottages to later suburban homes. Cabinets, quartz, islands, and layouts. Free estimate: (214) 449-5922.',
    },
    bathroom: {
      title: 'Bathroom Remodeling in Grapevine, TX | Walk-In Showers & Master Baths',
      description:
        'Bathroom remodeling in Grapevine, TX. Walk-in showers, vanities, and master bath upgrades. Premium craftsmanship, 2-year warranty. Call (214) 449-5922.',
    },
    costGuides: {
      title: 'Kitchen & Bathroom Remodel Cost Guide Grapevine TX | 2026 Pricing',
      description:
        'Real kitchen and bathroom remodel costs for Grapevine and nearby DFW suburbs. Kitchens $40,000–$100,000+, bathrooms $20,000–$40,000, master baths to $75,000. Free estimate.',
    },
    about: {
      title: 'About Grapevine Home Remodel & Design',
      description:
        'Meet Grapevine Home Remodel & Design — a Millwood Remodeling company serving Grapevine and nearby communities with in-house design and a 2-year warranty.',
    },
    contact: {
      title: 'Contact Grapevine Home Remodel | Free Estimate',
      description:
        'Schedule a free in-home kitchen or bathroom remodel estimate in Grapevine, TX. Call (214) 449-5922 or request a consultation online.',
    },
    ourProcess: {
      title: 'Our Remodeling Process | Grapevine Home Remodel & Design',
      description:
        'How we design and build kitchen and bathroom remodels in Grapevine: consultation, 3D design, transparent pricing, permits, and a 2-year workmanship warranty.',
    },
    serviceAreas: {
      title: 'Service Areas | Grapevine, Colleyville, Southlake & Nearby',
      description:
        'Kitchen and bathroom remodeling from Grapevine Home Remodel & Design — serving Grapevine, Colleyville, Southlake, Keller, Coppell, and nearby communities.',
    },
    localKitchen: {
      title: 'Grapevine Kitchen Remodeling by Neighborhood',
      description:
        'Kitchen remodeling for Grapevine — historic core cottages and later subdivisions. Full custom remodels. Free estimate: (214) 449-5922.',
    },
    localBathroom: {
      title: 'Grapevine Bathroom Remodeling by Neighborhood',
      description:
        'Bathroom remodeling in Grapevine, TX — walk-in showers, master baths, and vanity upgrades. Call (214) 449-5922.',
    },
  },

  home: {
    heroTitle: "Grapevine's Premier Kitchen & Bathroom Remodeling Company",
    heroSubtitle:
      '15+ years transforming North Texas homes with exceptional craftsmanship, in-house design, and a 2-year workmanship warranty. A Millwood Remodeling Company.',
    introHeading: 'Kitchen & Bathroom Remodeling Built for Grapevine Homes',
    intro:
      'Grapevine mixes a walkable historic downtown with mid-century cottages and later suburban neighborhoods. Kitchens and baths range from small, character-rich spaces to larger open plans. We remodel for how you actually live — full kitchen and bath projects only, not powder-room-only bargain work.',
    highlights: [
      {
        title: 'Respect the House, Update the Function',
        text: 'Near the historic core, kitchens may be compact. We maximize storage and light without forcing a design that fights the architecture.',
        href: '/kitchen-remodeling/',
        linkLabel: 'Explore Kitchen Remodeling →',
      },
      {
        title: 'Make the Master Bath Worth Using Daily',
        text: 'Walk-in showers, better vanities, and durable tile turn dated baths into rooms you look forward to using.',
        href: '/bathroom-remodeling/',
        linkLabel: 'Explore Bathroom Remodeling →',
      },
      {
        title: 'A Local Team That Stands Behind the Work',
        text: 'As a Millwood Remodeling company, we bring in-house design, transparent pricing, City of Grapevine permit handling, and a 2-year workmanship warranty.',
        href: '/contact/',
        linkLabel: 'Get Your Free Quote →',
      },
    ],
    galleryHeading: 'Our Recent Work in Grapevine & Nearby DFW',
    gallerySubtitle:
      'From custom kitchens to spa-like bathrooms — craftsmanship for North Texas homes. Project photos may include work across our Millwood service area.',
    guidesHeading: 'Guides for Grapevine Homeowners',
    guidesSubtitle:
      'Practical advice on costs, timelines, and planning for Grapevine-area housing types.',
  },

  about: {
    heroTitle: 'About Grapevine Home Remodel & Design',
    heroSubtitle:
      'We are a Millwood Remodeling Company — designers, craftspeople, and project managers focused on kitchens and bathrooms in Grapevine and nearby DFW communities.',
    story: [
      'Grapevine Home Remodel & Design is the Grapevine-area practice of Millwood Remodeling — built on the belief that remodeling should be rewarding, not stressful.',
      'For over 15 years, our team has helped North Texas homeowners transform kitchens and bathrooms with in-house design, clear communication, and a 2-year workmanship warranty. Grapevine’s mix of older cottages and later subdivisions means scopes vary — we plan honestly for each house.',
      'We focus on full kitchen and bathroom remodels — not low-budget powder-room-only jobs.',
    ],
  },

  serviceAreas: {
    heroTitle: 'Serving Grapevine and Nearby Communities',
    heroSubtitle:
      'Primary focus on Grapevine, with kitchen and bathroom remodeling for Colleyville, Southlake, Keller, Coppell, and neighboring cities when the scope fits.',
    introHeading: 'Where We Work',
    intro: [
      'Our Grapevine site is for homeowners across the city — from streets near Historic Main Street to later neighborhoods along major corridors and lakeside areas.',
      'Nearby full-remodel projects are welcome when they fit our model. Share your neighborhood on the contact form and we will confirm fit and timing.',
    ],
  },

  costGuides: {
    heroTitle: 'Kitchen & Bathroom Remodel Costs in Grapevine, TX',
    heroSubtitle:
      'Honest ranges for Grapevine and nearby DFW suburbs: kitchens $40,000–$100,000+, bathrooms $20,000–$40,000, high-end master baths up to $75,000. Free in-home estimate.',
    framingIntro:
      'Grapevine pricing tracks the broader DFW mid-to-premium remodel market. Smaller historic footprints and larger suburban plans price differently — ranges below are planning numbers, not quotes.',
  },

  kitchen: {
    heroTitle: 'Kitchen Remodeling in Grapevine, TX',
    heroSubtitle:
      'Custom cabinets, counters, islands, and lighting for Grapevine cottages and suburban homes. Free in-home design consultation.',
    introHeading: 'Kitchens Designed for Grapevine Living',
    intro: [
      'Near the historic core, kitchens can be compact and closed. In later subdivisions, open plans with builder finishes are common. We design for the house you have — better storage, durable materials, and seating where it fits.',
      'Typical scopes include cabinetry, quartz or stone counters, backsplash, lighting, and appliance coordination. Layout changes are priced clearly when structure or plumbing moves.',
    ],
    costHeading: 'What Grapevine Kitchen Remodels Typically Cost',
    costIntro:
      'Most full kitchen remodels fall between $40,000 and $100,000+. Cabinetry, counters, appliances, and layout work set the final number. An itemized in-home estimate is required for accuracy.',
    localHeading: 'Grapevine Neighborhood Kitchen Notes',
    localIntro: 'Patterns we see often in consultations:',
    localItems: [
      {
        title: 'Historic core & older cottages',
        text: 'Smaller kitchens reward efficient layouts, better lighting, and finishes that respect the home’s scale.',
      },
      {
        title: 'Later suburban plans',
        text: 'Open sightlines benefit from quality islands, soft-close cabinetry, and counters that hold up to daily use.',
      },
      {
        title: 'HOAs and design guidelines',
        text: 'Some neighborhoods have exterior or HOA rules. We help coordinate when a project needs review.',
      },
      {
        title: 'City of Grapevine permits',
        text: 'We prepare and coordinate permits required for electrical, plumbing, and structural work in the agreed scope.',
      },
    ],
    faqHeading: 'Grapevine Kitchen Remodel FAQs',
    faqs: [
      {
        q: 'Can you remodel a small Grapevine kitchen without making it feel cramped?',
        a: 'Yes. We focus on storage, lighting, and clear work triangles. Opening a wall is only recommended when structure and budget support it.',
      },
      {
        q: 'How long does a Grapevine kitchen remodel take?',
        a: 'Most full kitchens run about 6–10 weeks of construction after design, selections, and permits. Custom cabinetry lead times often set the schedule.',
      },
      {
        q: 'Do you work in homes near Historic Main Street?',
        a: 'Yes. We remodel kitchens in and around the historic core with attention to scale and character, while meeting modern function and code.',
      },
      {
        q: 'Do you handle permits?',
        a: 'We prepare and coordinate City of Grapevine permits required for the agreed scope and support inspections during construction.',
      },
    ],
  },

  bathroom: {
    heroTitle: 'Bathroom Remodeling in Grapevine, TX',
    heroSubtitle:
      'Walk-in showers, vanity upgrades, and master bath remodels for Grapevine homes. Premium waterproofing and a 2-year warranty.',
    introHeading: 'Bathrooms That Fit Grapevine Homes',
    intro: [
      'Older Grapevine baths can be tight; suburban master baths may have unused garden tubs and builder tile. We remodel full bathrooms with proper waterproofing — not low-budget powder-room-only jobs.',
      'Walk-in showers, durable tile, better lighting, and storage that matches how you use the room are core to our approach.',
    ],
    costHeading: 'What Grapevine Bathroom Remodels Typically Cost',
    costIntro:
      'Full bathroom remodels commonly run $20,000–$40,000. Higher-end master baths can reach up to about $75,000 depending on tile, glass, and layout.',
    localHeading: 'Grapevine Bathroom Patterns We See Often',
    localIntro: 'Common consultation starting points:',
    localItems: [
      {
        title: 'Compact secondary baths',
        text: 'Space-efficient vanities, better storage, and quality tile make small baths feel intentional.',
      },
      {
        title: 'Master garden tub conversions',
        text: 'Unused soaking tubs often become larger walk-in showers with bench and niche details.',
      },
      {
        title: 'Moisture performance',
        text: 'Correct waterproofing and ventilation matter in every wet area, especially for daily showers.',
      },
      {
        title: 'Mixed housing eras',
        text: 'We match materials and layout ambition to the age and structure of the home — not a one-size package.',
      },
    ],
    faqHeading: 'Grapevine Bathroom Remodel FAQs',
    faqs: [
      {
        q: 'How long does a master bath remodel take in Grapevine?',
        a: 'Many master baths complete in roughly 5–8 weeks of construction after design and material lead times.',
      },
      {
        q: 'Can you convert a garden tub to a walk-in shower?',
        a: 'Yes. Cost depends on plumbing location, shower size, tile, and glass selection.',
      },
      {
        q: 'What is not a fit for your team?',
        a: 'We focus on full bathroom and kitchen remodels. Ultra-low-budget powder-room-only jobs are outside our model.',
      },
      {
        q: 'Do you handle permits?',
        a: 'We prepare and coordinate City of Grapevine permits required for the agreed scope.',
      },
    ],
  },
};
