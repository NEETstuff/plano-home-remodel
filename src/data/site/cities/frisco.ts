import type { CitySiteConfig } from '../types';
import {
  defaultBathroomDrivers,
  defaultBathroomTiers,
  defaultKitchenDrivers,
  defaultKitchenTiers,
} from '../shared';

/**
 * Frisco Home Remodel & Design — friscohomeremodel.com
 *
 * Content is written for Frisco’s actual housing stock (mostly 1990s–2010s
 * master-planned communities, builder-standard finishes, strong HOA presence).
 * Do not invent city-specific reviews, awards, or project addresses.
 */
export const frisco: CitySiteConfig = {
  id: 'frisco',
  city: 'Frisco',
  state: 'TX',
  domain: 'friscohomeremodel.com',
  siteUrl: 'https://friscohomeremodel.com',
  brandName: 'Frisco Home Remodel & Design',
  brandShort: 'Frisco Home Remodel',
  brandMark: 'F',
  brandTagline: 'A Millwood Remodeling Company',
  email: 'info@friscohomeremodel.com',
  addressLocality: 'Frisco',
  cityWiki: 'https://en.wikipedia.org/wiki/Frisco,_Texas',
  foundingDate: '2009',

  areaServed: [
    { name: 'Frisco', wiki: 'https://en.wikipedia.org/wiki/Frisco,_Texas' },
    { name: 'Prosper', wiki: 'https://en.wikipedia.org/wiki/Prosper,_Texas' },
    { name: 'Little Elm', wiki: 'https://en.wikipedia.org/wiki/Little_Elm,_Texas' },
    { name: 'The Colony', wiki: 'https://en.wikipedia.org/wiki/The_Colony,_Texas' },
    { name: 'Plano', wiki: 'https://en.wikipedia.org/wiki/Plano,_Texas' },
    { name: 'McKinney', wiki: 'https://en.wikipedia.org/wiki/McKinney,_Texas' },
  ],
  nearbyCities: ['Prosper', 'Little Elm', 'The Colony', 'Plano', 'McKinney', 'Allen'],
  neighborhoods: [
    'Stonebriar',
    'Starwood',
    'Phillips Creek Ranch',
    'The Trails',
    'Plantation',
    'Lawler Park',
    'Newman Village',
    'Frisco Lakes',
    'Christie Ranch',
    'Richwoods',
  ],

  pricing: {
    kitchen: defaultKitchenTiers,
    bathroom: defaultBathroomTiers,
    kitchenDrivers: defaultKitchenDrivers,
    bathroomDrivers: defaultBathroomDrivers,
    scenarios: [
      {
        type: 'Kitchen',
        title: 'Builder-kitchen upgrade in a 2000s Frisco plan',
        range: '$45,000–$70,000',
        timeline: '6–9 weeks',
        detail:
          'Typical scope: keep a workable footprint, replace builder cabinets or reface where condition allows, new quartz counters, backsplash, sink, lighting, and hardware. Common in master-planned neighborhoods where the plan is fine but finishes feel dated.',
        link: '/kitchen-remodeling/',
        linkLabel: 'Kitchen remodeling details →',
      },
      {
        type: 'Kitchen',
        title: 'Open-concept island kitchen with pantry work',
        range: '$70,000–$100,000+',
        timeline: '8–12 weeks',
        detail:
          'Larger Frisco homes often want a bigger island with seating, soft-close cabinetry, premium stone, and a butler or walk-in pantry refresh. Layout tweaks and electrical for islands drive cost more than paint and hardware alone.',
        link: '/frisco-kitchen-remodeling/',
        linkLabel: 'Frisco kitchen page →',
      },
      {
        type: 'Bathroom',
        title: 'Master bath: garden tub to walk-in shower',
        range: '$35,000–$65,000',
        timeline: '5–8 weeks',
        detail:
          'A very common Frisco master-bath request: remove a seldom-used garden tub, build a curbless or low-curb walk-in shower, update the vanity, and retile wet areas. Final number depends on plumbing moves and tile level.',
        link: '/bathroom-remodeling/',
        linkLabel: 'Bathroom remodeling details →',
      },
    ],
  },

  seo: {
    home: {
      title: 'Kitchen & Bathroom Remodeling Frisco, TX',
      description:
        "Frisco's trusted kitchen and bathroom remodeling company. In-house design, premium craftsmanship, 2-year warranty. A Millwood Remodeling Company. Free in-home estimate — call (214) 449-5922.",
    },
    kitchen: {
      title: 'Kitchen Remodeling in Frisco, TX | Custom Cabinets & Islands',
      description:
        'Custom kitchen remodeling in Frisco, TX. Islands, quartz counters, cabinetry, and open-layout upgrades for builder and custom homes. Free estimate: (214) 449-5922.',
    },
    bathroom: {
      title: 'Bathroom Remodeling in Frisco, TX | Walk-In Showers & Master Baths',
      description:
        'Bathroom remodeling in Frisco, TX. Walk-in showers, double vanities, and master bath upgrades. Premium craftsmanship, 2-year warranty. Call (214) 449-5922.',
    },
    costGuides: {
      title: 'Kitchen & Bathroom Remodel Cost Guide Frisco TX | 2026 Pricing',
      description:
        'Real kitchen and bathroom remodel costs for Frisco and nearby North Dallas. Kitchens $40,000–$100,000+, bathrooms $20,000–$40,000, master baths to $75,000. Free estimate.',
    },
    about: {
      title: 'About Frisco Home Remodel & Design',
      description:
        'Meet Frisco Home Remodel & Design — a Millwood Remodeling company serving Frisco and North Dallas with in-house design, transparent pricing, and a 2-year warranty.',
    },
    contact: {
      title: 'Contact Frisco Home Remodel | Free Estimate',
      description:
        'Schedule a free in-home kitchen or bathroom remodel estimate in Frisco, TX. Call (214) 449-5922 or request a consultation online.',
    },
    ourProcess: {
      title: 'Our Remodeling Process | Frisco Home Remodel & Design',
      description:
        'How we design and build kitchen and bathroom remodels in Frisco: consultation, 3D design, transparent pricing, permits, and a 2-year workmanship warranty.',
    },
    serviceAreas: {
      title: 'Service Areas | Frisco, Prosper, Little Elm & Nearby',
      description:
        'Kitchen and bathroom remodeling from Frisco Home Remodel & Design — serving Frisco, Prosper, Little Elm, The Colony, Plano, McKinney, and nearby communities.',
    },
    localKitchen: {
      title: 'Frisco Kitchen Remodeling by Neighborhood',
      description:
        'Kitchen remodeling for Frisco neighborhoods — Stonebriar, Starwood, Phillips Creek Ranch, and more. Builder upgrades to custom islands. Free estimate: (214) 449-5922.',
    },
    localBathroom: {
      title: 'Frisco Bathroom Remodeling by Neighborhood',
      description:
        'Bathroom remodeling in Frisco, TX — walk-in showers, master baths, and vanity upgrades for master-planned and custom homes. Call (214) 449-5922.',
    },
  },

  home: {
    heroTitle: "Frisco's Premier Kitchen & Bathroom Remodeling Company",
    heroSubtitle:
      '15+ years transforming North Dallas homes with exceptional craftsmanship, in-house design, and a 2-year workmanship warranty. A Millwood Remodeling Company.',
    introHeading: 'Kitchen & Bathroom Remodeling Built for Frisco Homes',
    intro:
      'Frisco homes are full of potential — especially the 1990s–2010s plans that still carry builder-standard kitchens and master baths. Whether you want a larger island, a real walk-in shower, or finishes that finally match the rest of your house, we design and build remodels for how Frisco families actually live.',
    highlights: [
      {
        title: 'Upgrade the Builder Kitchen',
        text: 'Many Frisco kitchens shipped with laminate counters, basic cabinets, and lighting that never quite worked for weeknight cooking or weekend hosting. We rework islands, counters, cabinetry, and storage around how you use the room today.',
        href: '/kitchen-remodeling/',
        linkLabel: 'Explore Kitchen Remodeling →',
      },
      {
        title: 'Turn the Master Bath Into Daily Luxury',
        text: 'Garden tubs that never get used, dated tile, and single vanities are common starting points. A curbless walk-in shower or a redesigned double vanity can change how you start and end every day.',
        href: '/bathroom-remodeling/',
        linkLabel: 'Explore Bathroom Remodeling →',
      },
      {
        title: 'A Local Team That Stands Behind the Work',
        text: 'As a Millwood Remodeling company, we bring in-house design, transparent pricing, City of Frisco permit handling, and a 2-year workmanship warranty to every project.',
        href: '/contact/',
        linkLabel: 'Get Your Free Quote →',
      },
    ],
    galleryHeading: 'Our Recent Work in Frisco & North Dallas',
    gallerySubtitle:
      'From custom kitchens to spa-like bathrooms — see the craftsmanship we bring to North Texas homes. Project photos may include work across our Millwood service area.',
    guidesHeading: 'Guides for Frisco Homeowners',
    guidesSubtitle:
      'Practical advice on costs, timelines, and planning your remodel — written for North Dallas homes and Frisco-style housing stock.',
  },

  about: {
    heroTitle: 'About Frisco Home Remodel & Design',
    heroSubtitle:
      'We are a Millwood Remodeling Company — designers, craftspeople, and project managers focused on kitchens and bathrooms in Frisco and nearby North Dallas communities.',
    story: [
      'Frisco Home Remodel & Design is the Frisco-area practice of Millwood Remodeling — built on the belief that remodeling should be a rewarding experience, not a stressful one.',
      'For over 15 years, our team has helped North Dallas homeowners transform kitchens and bathrooms with in-house design, clear communication, and workmanship we stand behind for two years. Frisco’s growth means many homes still have original builder finishes; our job is to personalize those spaces without unnecessary upselling.',
      'We focus on full kitchen and bathroom remodels — not low-budget powder-room-only jobs — so every project gets the design attention and crew quality it deserves.',
    ],
  },

  serviceAreas: {
    heroTitle: 'Serving Frisco and Nearby Communities',
    heroSubtitle:
      'Primary focus on Frisco, with kitchen and bathroom remodeling for Prosper, Little Elm, The Colony, and neighboring North Dallas cities.',
    introHeading: 'Where We Work',
    intro: [
      'Our Frisco site is built for homeowners in Frisco first — including master-planned communities such as Stonebriar, Starwood, Phillips Creek Ranch, Newman Village, and Frisco Lakes, as well as custom homes throughout the city.',
      'We also take on kitchen and bathroom projects in nearby cities when the scope fits our full-remodel focus. If you are outside Frisco, tell us your neighborhood on the contact form and we will confirm fit and timing.',
    ],
  },

  costGuides: {
    heroTitle: 'Kitchen & Bathroom Remodel Costs in Frisco, TX',
    heroSubtitle:
      'Honest ranges for Frisco and nearby North Dallas: kitchens $40,000–$100,000+, bathrooms $20,000–$40,000, and high-end master baths up to $75,000. Get your exact number with a free in-home estimate.',
    framingIntro:
      'Frisco pricing tracks the broader North Dallas market. Where costs tend to land depends less on the city line and more on cabinetry level, stone, layout changes, and how much of a builder kitchen or master bath you are replacing. Ranges below are realistic planning numbers — not quotes.',
  },

  kitchen: {
    heroTitle: 'Kitchen Remodeling in Frisco, TX',
    heroSubtitle:
      'Custom cabinets, islands, quartz counters, and lighting upgrades for Frisco builder homes and custom residences. Free in-home design consultation.',
    introHeading: 'Kitchens Designed for Frisco Living',
    intro: [
      'Frisco kitchens are often the visual center of open floor plans — which means builder-grade cabinets and counters show more than they would in a closed-off galley. We design remodels that keep the openness and improve storage, seating, and finishes.',
      'Popular Frisco scopes include larger islands with seating, quartz or stone counters, soft-close cabinetry, under-cabinet lighting, backsplash upgrades, and pantry improvements. Because much of the housing stock is newer, many projects are finish-and-function upgrades rather than full structural rebuilds — though we handle layout changes when they earn their keep.',
    ],
    costHeading: 'What Frisco Kitchen Remodels Typically Cost',
    costIntro:
      'Most full kitchen remodels in this market fall between $40,000 and $100,000+, depending on cabinetry, counters, appliances, and layout work. An itemized in-home estimate is the only accurate number for your house.',
    localHeading: 'Frisco Neighborhood Kitchen Notes',
    localIntro:
      'Housing stock varies by community, but these patterns show up often in Frisco consultations:',
    localItems: [
      {
        title: 'Master-planned builder homes',
        text: 'Stonebriar, The Trails, Plantation, and similar communities often share plan types with solid bones and dated finishes. Highest impact: cabinets or refacing, counters, lighting, and island usability.',
      },
      {
        title: 'Newer custom and semi-custom',
        text: 'Phillips Creek Ranch, Starwood, and later custom builds may already have open plans — remodels focus on better materials, storage, and appliance packages rather than moving walls.',
      },
      {
        title: 'HOAs and permits',
        text: 'Many Frisco neighborhoods have HOA guidelines. We coordinate exterior-impact items when needed and handle City of Frisco permits for work that requires them.',
      },
      {
        title: 'Open sightlines',
        text: 'When the kitchen faces the living room, finish quality and island proportions matter as much as storage. We design for both daily use and how the room photographs from the sofa.',
      },
    ],
    faqHeading: 'Frisco Kitchen Remodel FAQs',
    faqs: [
      {
        q: 'Do most Frisco kitchens need a full gut?',
        a: 'Not always. Many Frisco homes benefit from a major finish upgrade — cabinets, counters, lighting, and hardware — without relocating every wall. We recommend a gut when layout, plumbing, or cabinet condition makes a partial scope a poor value.',
      },
      {
        q: 'How long does a Frisco kitchen remodel take?',
        a: 'Most full kitchens run about 6–10 weeks of construction after design, selections, and permits. Custom cabinetry lead times often set the schedule more than demo day.',
      },
      {
        q: 'Can I stay in my home during the remodel?',
        a: 'Many clients do. We set expectations for dust control, temporary kitchen setup, and daily cleanup. Full guts are disruptive for a stretch — we plan that with you up front.',
      },
      {
        q: 'Do you work with my HOA?',
        a: 'Yes. When a project touches items your HOA reviews, we help assemble what they need. Interior-only work often has lighter HOA involvement than exterior changes.',
      },
    ],
  },

  bathroom: {
    heroTitle: 'Bathroom Remodeling in Frisco, TX',
    heroSubtitle:
      'Walk-in showers, double vanities, and master bath upgrades for Frisco homes. Premium waterproofing, tile, and a 2-year workmanship warranty.',
    introHeading: 'Bathrooms That Match How Frisco Homes Are Lived In',
    intro: [
      'Frisco master baths from the builder era often include a garden tub that never gets used, a standard shower, and finishes that lag behind the rest of the house. Guest baths may still have builder mirrors, lighting, and cultured marble.',
      'We remodel full bathrooms and master suites — walk-in showers, vanity upgrades, tile, fixtures, and lighting — with proper waterproofing and clear project management. We do not specialize in the cheapest possible powder-room-only flips; our process is built for complete, high-quality bath projects.',
    ],
    costHeading: 'What Frisco Bathroom Remodels Typically Cost',
    costIntro:
      'Full bathroom remodels commonly run $20,000–$40,000. Higher-end master baths with large showers, premium tile, and double vanities can reach up to about $75,000 depending on scope.',
    localHeading: 'Frisco Bathroom Patterns We See Often',
    localIntro:
      'These are common starting points in Frisco homes — not promises about every house:',
    localItems: [
      {
        title: 'Garden tub conversions',
        text: 'Removing an unused soaking tub for a larger walk-in shower is one of the most requested master-bath changes in Frisco-area plans.',
      },
      {
        title: 'Double vanity upgrades',
        text: 'Busy households often want more counter space, better storage, and lighting that works for two people at once.',
      },
      {
        title: 'Guest bath refresh',
        text: 'When included as part of a larger remodel scope, guest baths get tile, vanity, and fixture upgrades that match the home’s new standard.',
      },
      {
        title: 'Wet-area performance',
        text: 'Correct waterproofing and slope matter as much as tile choice — especially in busy master showers used every day.',
      },
    ],
    faqHeading: 'Frisco Bathroom Remodel FAQs',
    faqs: [
      {
        q: 'How long does a master bath remodel take in Frisco?',
        a: 'Many master baths complete in roughly 5–8 weeks of construction after design and material lead times. Large tile packages and custom glass can extend the schedule.',
      },
      {
        q: 'Can you convert my garden tub to a walk-in shower?',
        a: 'Yes — that is a frequent Frisco request. Cost depends on whether plumbing stays in place, the shower size, bench and niche details, and glass selection.',
      },
      {
        q: 'What is not a fit for your team?',
        a: 'We focus on full bathroom and kitchen remodels. Ultra-low-budget powder-room-only jobs are outside our model so we can protect schedule quality and crew standards for complete projects.',
      },
      {
        q: 'Do you handle permits?',
        a: 'We prepare and coordinate permits required by the City of Frisco for the agreed scope and walk you through inspections as part of project management.',
      },
    ],
  },

  satelliteCities: [
    {
      slug: 'prosper-kitchen-bathroom-remodeling',
      name: 'Prosper',
      wiki: 'https://en.wikipedia.org/wiki/Prosper,_Texas',
      title: 'Kitchen & Bathroom Remodeling in Prosper, TX',
      description:
        'Kitchen and bathroom remodeling in Prosper, TX by Frisco Home Remodel & Design, a Millwood Remodeling company. Call (214) 449-5922.',
      heroSubtitle:
        'Prosper’s newer communities and custom homes deserve kitchens and baths that match the rest of the house — not leftover builder grade.',
      introHeading: 'Remodeling for Prosper Homes',
      intro: [
        'Prosper has grown quickly with large lots, open plans, and a mix of production and custom construction. Many kitchens and master baths are still on their original finishes even when the rest of the home has been updated.',
        'From Frisco Home Remodel & Design, we bring the same Millwood design process, itemized pricing, and 2-year workmanship warranty to Prosper kitchen and bathroom projects that fit a full-remodel scope.',
      ],
      notesHeading: 'What to Know About Prosper Homes',
      notes: [
        {
          title: 'Newer housing stock',
          text: 'Much of Prosper was built in the last two decades. Remodels often focus on upgrading finishes and function rather than repairing century-old structure.',
        },
        {
          title: 'Scale of rooms',
          text: 'Generous kitchens and master baths reward better islands, storage, and shower design — not the smallest possible fixture swap.',
        },
        {
          title: 'HOA communities',
          text: 'Many neighborhoods have HOA guidelines. We help coordinate when your project needs review.',
        },
      ],
      neighborhoods: 'Prosper Lakes, Gentle Creek, Star Trail, and nearby Prosper communities',
      whyHeading: 'Why Prosper Homeowners Work With Us',
      why: [
        {
          title: 'In-house design',
          text: '3D renderings and guided selections so you approve the plan before construction.',
        },
        {
          title: 'Clear pricing',
          text: 'Itemized estimates — the scope we agree to is the scope we build.',
        },
        {
          title: 'Millwood standards',
          text: 'As a Millwood Remodeling company, we back work with a 2-year workmanship warranty.',
        },
        {
          title: 'Free consultation',
          text: 'In-home visit, honest fit check, and a clear next step — no pressure.',
        },
      ],
    },
  ],
};
