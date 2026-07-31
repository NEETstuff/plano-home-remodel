import type { CitySiteConfig } from '../types';
import {
  defaultBathroomDrivers,
  defaultBathroomTiers,
  defaultKitchenDrivers,
  defaultKitchenTiers,
} from '../shared';

/**
 * Southlake Home Remodel & Design — southlakehomeremodel.com
 *
 * Housing stock: higher-end custom and large production/custom homes; premium
 * finish expectations. Careful, non-spam tone — no invented awards or reviews.
 */
export const southlake: CitySiteConfig = {
  id: 'southlake',
  city: 'Southlake',
  state: 'TX',
  domain: 'southlakehomeremodel.com',
  siteUrl: 'https://southlakehomeremodel.com',
  brandName: 'Southlake Home Remodel & Design',
  brandShort: 'Southlake Home Remodel',
  brandMark: 'S',
  brandTagline: 'A Millwood Remodeling Company',
  email: 'Ryan@MillwoodRemodeling.com',
  addressLocality: 'Southlake',
  cityWiki: 'https://en.wikipedia.org/wiki/Southlake,_Texas',
  foundingDate: '2009',

  areaServed: [
    { name: 'Southlake', wiki: 'https://en.wikipedia.org/wiki/Southlake,_Texas' },
    { name: 'Colleyville', wiki: 'https://en.wikipedia.org/wiki/Colleyville,_Texas' },
    { name: 'Grapevine', wiki: 'https://en.wikipedia.org/wiki/Grapevine,_Texas' },
    { name: 'Keller', wiki: 'https://en.wikipedia.org/wiki/Keller,_Texas' },
    { name: 'Westlake', wiki: 'https://en.wikipedia.org/wiki/Westlake,_Texas' },
    { name: 'Trophy Club', wiki: 'https://en.wikipedia.org/wiki/Trophy_Club,_Texas' },
  ],
  nearbyCities: ['Colleyville', 'Grapevine', 'Keller', 'Westlake', 'Trophy Club', 'Roanoke'],
  neighborhoods: [
    'Timarron',
    'Carillon',
    'Clariden Ranch',
    'Southlake Town Square area',
    'Coventry Manor',
    'Diamond Ridge',
    'Kirkwood Hollow',
    'Lakewood Estates',
    'Shady Oaks',
    'Continental Estates',
  ],

  pricing: {
    kitchen: defaultKitchenTiers,
    bathroom: defaultBathroomTiers,
    kitchenDrivers: defaultKitchenDrivers,
    bathroomDrivers: defaultBathroomDrivers,
    scenarios: [
      {
        type: 'Kitchen',
        title: 'Premium finish kitchen upgrade',
        range: '$60,000–$100,000+',
        timeline: '8–12 weeks',
        detail:
          'Southlake kitchens often already have scale; remodels focus on custom cabinetry, premium stone, integrated appliances, lighting layers, and islands designed for entertaining as well as daily cooking.',
        link: '/kitchen-remodeling/',
        linkLabel: 'Kitchen remodeling details →',
      },
      {
        type: 'Kitchen',
        title: 'Full custom kitchen with layout refinement',
        range: '$85,000–$100,000+',
        timeline: '10–14 weeks',
        detail:
          'When pantries, sculleries, or work triangles need rethinking, design time and cabinetry drive the schedule. We keep pricing itemized so premium selections stay intentional — not automatic upsells.',
        link: '/southlake-kitchen-remodeling/',
        linkLabel: 'Southlake kitchen page →',
      },
      {
        type: 'Bathroom',
        title: 'High-end master bath suite',
        range: '$45,000–$75,000',
        timeline: '6–10 weeks',
        detail:
          'Curbless or low-curb showers, premium tile, double vanities, and carefully detailed wet areas. Final number depends on stone, glass, and plumbing complexity.',
        link: '/bathroom-remodeling/',
        linkLabel: 'Bathroom remodeling details →',
      },
    ],
  },

  seo: {
    home: {
      title: 'Kitchen & Bathroom Remodeling Southlake, TX',
      description:
        'Premium kitchen and bathroom remodeling in Southlake, TX. In-house design, high-end craftsmanship, 2-year warranty. A Millwood Remodeling Company. Free estimate — call (214) 449-5922.',
    },
    kitchen: {
      title: 'Kitchen Remodeling in Southlake, TX | Custom Cabinets & Premium Finishes',
      description:
        'Custom kitchen remodeling in Southlake, TX. Premium cabinetry, stone, islands, and lighting for large and custom homes. Free estimate: (214) 449-5922.',
    },
    bathroom: {
      title: 'Bathroom Remodeling in Southlake, TX | Luxury Master Baths & Walk-In Showers',
      description:
        'Bathroom remodeling in Southlake, TX. Walk-in showers, double vanities, and premium master bath suites. 2-year warranty. Call (214) 449-5922.',
    },
    costGuides: {
      title: 'Kitchen & Bathroom Remodel Cost Guide Southlake TX | 2026 Pricing',
      description:
        'Realistic kitchen and bathroom remodel costs for Southlake and nearby premium suburbs. Kitchens $40,000–$100,000+, bathrooms $20,000–$40,000, master baths to $75,000. Free estimate.',
    },
    about: {
      title: 'About Southlake Home Remodel & Design',
      description:
        'Meet Southlake Home Remodel & Design — a Millwood Remodeling company delivering design-led kitchen and bathroom remodels with transparent pricing and a 2-year warranty.',
    },
    contact: {
      title: 'Contact Southlake Home Remodel | Free Estimate',
      description:
        'Schedule a free in-home kitchen or bathroom remodel estimate in Southlake, TX. Call (214) 449-5922 or request a consultation online.',
    },
    ourProcess: {
      title: 'Our Remodeling Process | Southlake Home Remodel & Design',
      description:
        'How we design and build kitchen and bathroom remodels in Southlake: consultation, 3D design, transparent pricing, permits, and a 2-year workmanship warranty.',
    },
    serviceAreas: {
      title: 'Service Areas | Southlake, Colleyville, Grapevine & Nearby',
      description:
        'Kitchen and bathroom remodeling from Southlake Home Remodel & Design — serving Southlake, Colleyville, Grapevine, Keller, Westlake, and nearby communities.',
    },
    localKitchen: {
      title: 'Southlake Kitchen Remodeling by Community',
      description:
        'Kitchen remodeling for Southlake communities — Timarron, Carillon, Clariden Ranch, and more. Premium custom kitchens. Free estimate: (214) 449-5922.',
    },
    localBathroom: {
      title: 'Southlake Bathroom Remodeling by Community',
      description:
        'Bathroom remodeling in Southlake, TX — luxury master baths, walk-in showers, and premium vanities. Call (214) 449-5922.',
    },
  },

  home: {
    heroTitle: "Southlake's Premier Kitchen & Bathroom Remodeling Company",
    heroSubtitle:
      '15+ years of design-led craftsmanship for North Texas homes. In-house design, transparent pricing, and a 2-year workmanship warranty. A Millwood Remodeling Company.',
    introHeading: 'Kitchen & Bathroom Remodeling Built for Southlake Homes',
    intro:
      'Southlake homes are often large, custom, or highly finished production-custom builds. Kitchens and baths should match that standard — thoughtful cabinetry, stone, lighting, and wet-area detailing — without spammy “luxury” claims we cannot substantiate. We deliver full kitchen and bathroom remodels only.',
    highlights: [
      {
        title: 'Kitchens Built for Scale and Daily Use',
        text: 'Islands, pantries, soft-close cabinetry, and premium counters designed for both weeknight cooking and entertaining.',
        href: '/kitchen-remodeling/',
        linkLabel: 'Explore Kitchen Remodeling →',
      },
      {
        title: 'Master Baths Worth the Square Footage',
        text: 'Walk-in showers, double vanities, and tile work detailed for performance — not just showroom photos.',
        href: '/bathroom-remodeling/',
        linkLabel: 'Explore Bathroom Remodeling →',
      },
      {
        title: 'A Team That Stands Behind Premium Work',
        text: 'As a Millwood Remodeling company, we bring in-house design, itemized pricing, City of Southlake permit handling, and a 2-year workmanship warranty.',
        href: '/contact/',
        linkLabel: 'Get Your Free Quote →',
      },
    ],
    galleryHeading: 'Our Recent Work in Southlake & Nearby Communities',
    gallerySubtitle:
      'Custom kitchens and baths for North Texas homes. Project photos may include work across our Millwood service area.',
    guidesHeading: 'Guides for Southlake Homeowners',
    guidesSubtitle:
      'Practical cost and planning advice for premium kitchen and bathroom remodels.',
  },

  about: {
    heroTitle: 'About Southlake Home Remodel & Design',
    heroSubtitle:
      'We are a Millwood Remodeling Company — designers, craftspeople, and project managers focused on kitchens and bathrooms in Southlake and nearby premium suburbs.',
    story: [
      'Southlake Home Remodel & Design is the Southlake-area practice of Millwood Remodeling — built on clear process, honest scopes, and workmanship we stand behind for two years.',
      'For over 15 years, our team has delivered kitchen and bathroom remodels across North Texas with in-house design and itemized pricing. In Southlake, that often means premium materials and careful coordination — without inventing awards or “#1” claims.',
      'We focus on full kitchen and bathroom remodels — not low-budget powder-room-only jobs — so quality standards stay consistent on every project we accept.',
    ],
  },

  serviceAreas: {
    heroTitle: 'Serving Southlake and Nearby Communities',
    heroSubtitle:
      'Primary focus on Southlake, with full kitchen and bathroom remodels in Colleyville, Grapevine, Keller, Westlake, and nearby cities when the scope fits.',
    introHeading: 'Where We Work',
    intro: [
      'Our Southlake site is for homeowners across the city — including communities such as Timarron, Carillon, Clariden Ranch, and homes near Town Square and major corridors.',
      'Nearby premium suburbs are welcome for full-remodel scopes. Tell us your neighborhood on the contact form and we will confirm fit and timing.',
    ],
  },

  costGuides: {
    heroTitle: 'Kitchen & Bathroom Remodel Costs in Southlake, TX',
    heroSubtitle:
      'Honest ranges for Southlake and nearby premium suburbs: kitchens $40,000–$100,000+, bathrooms $20,000–$40,000, high-end master baths up to $75,000. Free in-home estimate.',
    framingIntro:
      'Southlake projects often land in the mid-to-upper end of North Texas ranges because of cabinetry, stone, and scale — not because we invent higher prices. Ranges below are planning numbers; only an itemized visit produces a quote.',
  },

  kitchen: {
    heroTitle: 'Kitchen Remodeling in Southlake, TX',
    heroSubtitle:
      'Premium cabinetry, stone, islands, and lighting for Southlake homes. Free in-home design consultation.',
    introHeading: 'Kitchens Designed for Southlake Living',
    intro: [
      'Southlake kitchens are often large enough for serious islands, pantries, and appliance packages. Remodels succeed when design is disciplined: storage that works, materials that age well, and lighting that serves both cooking and gathering.',
      'We deliver full-scope kitchens with custom or semi-custom cabinetry, premium counters, and clear project management — not partial “cosmetic only” packages that under-deliver.',
    ],
    costHeading: 'What Southlake Kitchen Remodels Typically Cost',
    costIntro:
      'Full kitchen remodels commonly fall between $40,000 and $100,000+, with many premium scopes toward the upper half of that range. Cabinetry and stone selections are usually the largest drivers.',
    localHeading: 'Southlake Community Kitchen Notes',
    localIntro: 'Patterns we see in consultations — not claims about every home:',
    localItems: [
      {
        title: 'Master-planned & custom communities',
        text: 'Timarron, Carillon, Clariden Ranch, and similar areas often already have open plans — remodels elevate materials, storage, and appliance integration.',
      },
      {
        title: 'Entertaining-focused layouts',
        text: 'Islands with seating, better pantries, and lighting layers are frequent priorities for larger homes.',
      },
      {
        title: 'HOA coordination',
        text: 'Many communities have guidelines. We help assemble what is needed when exterior-impact items require review.',
      },
      {
        title: 'City of Southlake permits',
        text: 'We prepare and coordinate permits required for the agreed electrical, plumbing, and structural scope.',
      },
    ],
    faqHeading: 'Southlake Kitchen Remodel FAQs',
    faqs: [
      {
        q: 'Do Southlake kitchen remodels always require full custom cabinetry?',
        a: 'Not always. Semi-custom can be the right value when layout is solid. Full custom is appropriate when size, specialty storage, or finish level demands it — we recommend based on the house, not a sales script.',
      },
      {
        q: 'How long does a Southlake kitchen remodel take?',
        a: 'Many premium kitchens run 8–12 weeks of construction after design, selections, and permits. Custom cabinetry lead times often set the overall schedule.',
      },
      {
        q: 'Can you integrate panel-ready appliances?',
        a: 'Yes, when the design and budget include them. We coordinate clearances and cabinetry carefully so the finished look is clean and functional.',
      },
      {
        q: 'Do you handle permits?',
        a: 'We prepare and coordinate City of Southlake permits required for the agreed scope and support inspections during construction.',
      },
    ],
  },

  bathroom: {
    heroTitle: 'Bathroom Remodeling in Southlake, TX',
    heroSubtitle:
      'Premium master baths, walk-in showers, and double vanities for Southlake homes. Waterproofing first — then finishes.',
    introHeading: 'Bathrooms That Match Southlake Standards',
    intro: [
      'Master baths in Southlake are often large enough for true spa-level detailing — if waterproofing, tile, and fixtures are specified correctly. We remodel full bathrooms and master suites, not ultra-low-budget powder rooms.',
      'Walk-in showers, double vanities, heated floors where requested, and durable wet-area systems are core to our process.',
    ],
    costHeading: 'What Southlake Bathroom Remodels Typically Cost',
    costIntro:
      'Full bathroom remodels commonly run $20,000–$40,000. High-end master baths frequently land higher — up to about $75,000 — depending on tile, glass, stone, and layout complexity.',
    localHeading: 'Southlake Bathroom Patterns We See Often',
    localIntro: 'Common consultation themes:',
    localItems: [
      {
        title: 'Master suite wet areas',
        text: 'Large showers with quality glass, niches, and proper slope are frequent priorities over seldom-used tubs.',
      },
      {
        title: 'Double vanity function',
        text: 'Storage, lighting, and counter space for two users matter as much as finishes.',
      },
      {
        title: 'Material durability',
        text: 'Premium homes still need wet-area systems that perform for years — membranes and ventilation are non-negotiable.',
      },
      {
        title: 'Secondary baths',
        text: 'When included in a larger remodel, guest baths are brought up to the same material standard as the rest of the home.',
      },
    ],
    faqHeading: 'Southlake Bathroom Remodel FAQs',
    faqs: [
      {
        q: 'How long does a premium master bath take in Southlake?',
        a: 'Many master baths run 6–10 weeks of construction after design and material lead times. Specialty tile and custom glass can extend the schedule.',
      },
      {
        q: 'Do you build curbless showers?',
        a: 'Yes, when structure and waterproofing design support them. We discuss drain type, slope, and glass early so expectations match feasibility.',
      },
      {
        q: 'What is not a fit for your team?',
        a: 'We focus on full bathroom and kitchen remodels. Ultra-low-budget powder-room-only jobs are outside our model.',
      },
      {
        q: 'Do you handle permits?',
        a: 'We prepare and coordinate City of Southlake permits required for the agreed scope.',
      },
    ],
  },
};
