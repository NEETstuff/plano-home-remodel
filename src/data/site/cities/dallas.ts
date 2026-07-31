import type { CitySiteConfig } from '../types';
import {
  defaultBathroomDrivers,
  defaultBathroomTiers,
  defaultKitchenDrivers,
  defaultKitchenTiers,
} from '../shared';

/**
 * Dallas Remodel & Design — dallasremodelanddesign.com
 *
 * Primary domain: dallasremodelanddesign.com
 * Secondary domain (later 301 only): dallasremodelingdesign.com — do not build a second site.
 *
 * Housing stock: broad Dallas mix — older urban homes, mid-century stock, near-north
 * and Park Cities adjacency, Lake Highlands / Preston Hollow / East Dallas / North Dallas.
 * Truthful only — no invented reviews, awards, or street-level project claims.
 */
export const dallas: CitySiteConfig = {
  id: 'dallas',
  city: 'Dallas',
  state: 'TX',
  domain: 'dallasremodelanddesign.com',
  siteUrl: 'https://dallasremodelanddesign.com',
  brandName: 'Dallas Remodel & Design',
  brandShort: 'Dallas Remodel & Design',
  brandMark: 'D',
  brandTagline: 'A Millwood Remodeling Company',
  email: 'Ryan@MillwoodRemodeling.com',
  addressLocality: 'Dallas',
  cityWiki: 'https://en.wikipedia.org/wiki/Dallas',
  foundingDate: '2009',

  areaServed: [
    { name: 'Dallas', wiki: 'https://en.wikipedia.org/wiki/Dallas' },
    { name: 'University Park', wiki: 'https://en.wikipedia.org/wiki/University_Park,_Texas' },
    { name: 'Highland Park', wiki: 'https://en.wikipedia.org/wiki/Highland_Park,_Texas' },
    { name: 'Lake Highlands', wiki: 'https://en.wikipedia.org/wiki/Lake_Highlands' },
    { name: 'Preston Hollow', wiki: 'https://en.wikipedia.org/wiki/Preston_Hollow,_Dallas' },
    { name: 'East Dallas', wiki: 'https://en.wikipedia.org/wiki/East_Dallas' },
    { name: 'North Dallas', wiki: 'https://en.wikipedia.org/wiki/North_Dallas' },
  ],
  nearbyCities: [
    'Plano',
    'Richardson',
    'Frisco',
    'Garland',
    'Irving',
    'Mesquite',
    'University Park',
    'Highland Park',
  ],
  neighborhoods: [
    'Lake Highlands',
    'Preston Hollow',
    'East Dallas',
    'Lakewood',
    'M Streets',
    'Bluffview',
    'Greenway Parks',
    'North Dallas',
    'Vickery Meadow area',
    'Near Park Cities',
    'Oak Lawn edge',
    'Casa Linda',
  ],

  pricing: {
    kitchen: defaultKitchenTiers,
    bathroom: defaultBathroomTiers,
    kitchenDrivers: defaultKitchenDrivers,
    bathroomDrivers: defaultBathroomDrivers,
    scenarios: [
      {
        type: 'Kitchen',
        title: 'Closed kitchen to open-concept remodel',
        range: '$55,000–$90,000',
        timeline: '8–11 weeks',
        detail:
          'Common in mid-century and older Dallas plans: open a wall (when structure allows), improve the work triangle, and replace cabinets, counters, and lighting for daily cooking and entertaining.',
        link: '/kitchen-remodeling/',
        linkLabel: 'Kitchen remodeling details →',
      },
      {
        type: 'Kitchen',
        title: 'Full custom kitchen, existing footprint',
        range: '$45,000–$100,000+',
        timeline: '6–12 weeks',
        detail:
          'Cabinetry, quartz or stone, backsplash, lighting, and hardware without moving major plumbing. Final cost depends on cabinetry level and material selections.',
        link: '/dallas-kitchen-remodeling/',
        linkLabel: 'Dallas kitchen page →',
      },
      {
        type: 'Bathroom',
        title: 'Master bath: garden tub to walk-in shower',
        range: '$35,000–$65,000',
        timeline: '5–8 weeks',
        detail:
          'A frequent Dallas master-bath request: remove a seldom-used garden tub, build a walk-in shower, update the vanity, and retile wet areas with proper waterproofing.',
        link: '/bathroom-remodeling/',
        linkLabel: 'Bathroom remodeling details →',
      },
    ],
  },

  seo: {
    home: {
      title: 'Kitchen & Bathroom Remodeling Dallas, TX',
      description:
        "Dallas kitchen and bathroom remodeling by Dallas Remodel & Design. In-house design, premium craftsmanship, 2-year warranty. A Millwood Remodeling Company. Free estimate — call (214) 449-5922.",
    },
    kitchen: {
      title: 'Kitchen Remodeling in Dallas, TX | Custom Cabinets & Open Layouts',
      description:
        'Custom kitchen remodeling in Dallas, TX. Open-concept updates, cabinetry, quartz, and islands for older urban and mid-century homes. Free estimate: (214) 449-5922.',
    },
    bathroom: {
      title: 'Bathroom Remodeling in Dallas, TX | Walk-In Showers & Master Baths',
      description:
        'Bathroom remodeling in Dallas, TX. Walk-in showers, garden tub conversions, and master bath upgrades. Premium craftsmanship, 2-year warranty. Call (214) 449-5922.',
    },
    costGuides: {
      title: 'Kitchen & Bathroom Remodel Cost Guide Dallas TX | 2026 Pricing',
      description:
        'Real kitchen and bathroom remodel costs for Dallas and nearby North Texas. Kitchens $40,000–$100,000+, bathrooms $20,000–$40,000, master baths to $75,000. Free estimate.',
    },
    about: {
      title: 'About Dallas Remodel & Design',
      description:
        'Meet Dallas Remodel & Design — a Millwood Remodeling company serving Dallas and near-north communities with in-house design, transparent pricing, and a 2-year warranty.',
    },
    contact: {
      title: 'Contact Dallas Remodel & Design | Free Estimate',
      description:
        'Schedule a free in-home kitchen or bathroom remodel estimate in Dallas, TX. Call (214) 449-5922 or request a consultation online.',
    },
    ourProcess: {
      title: 'Our Remodeling Process | Dallas Remodel & Design',
      description:
        'How we design and build kitchen and bathroom remodels in Dallas: consultation, 3D design, transparent pricing, permits, and a 2-year workmanship warranty.',
    },
    serviceAreas: {
      title: 'Service Areas | Dallas, Park Cities Adjacency & Near North',
      description:
        'Kitchen and bathroom remodeling from Dallas Remodel & Design — serving Dallas, Lake Highlands, Preston Hollow, East Dallas, North Dallas, and nearby communities.',
    },
    localKitchen: {
      title: 'Dallas Kitchen Remodeling by Neighborhood',
      description:
        'Kitchen remodeling for Dallas neighborhoods — Lake Highlands, Preston Hollow, East Dallas, and more. Open-concept and full custom kitchens. Free estimate: (214) 449-5922.',
    },
    localBathroom: {
      title: 'Dallas Bathroom Remodeling by Neighborhood',
      description:
        'Bathroom remodeling in Dallas, TX — walk-in showers, garden tub conversions, and master bath upgrades. Call (214) 449-5922.',
    },
  },

  home: {
    heroTitle: "Dallas's Premier Kitchen & Bathroom Remodeling Company",
    heroSubtitle:
      '15+ years transforming North Texas homes with exceptional craftsmanship, in-house design, and a 2-year workmanship warranty. A Millwood Remodeling Company.',
    introHeading: 'Kitchen & Bathroom Remodeling Built for Dallas Homes',
    intro:
      'Dallas housing ranges from older urban cottages and mid-century plans to updated near-north and Park Cities-adjacent neighborhoods. Closed kitchens that want to open up, dated master baths, and garden tubs that never get used are common starting points. We remodel full kitchens and bathrooms for how Dallas families actually live — not low-budget powder-room-only jobs.',
    highlights: [
      {
        title: 'Open Up the Kitchen Without Guesswork',
        text: 'Many Dallas plans still separate cooking from living. We improve cabinets, counters, and lighting — and open walls only when structure and budget support it.',
        href: '/kitchen-remodeling/',
        linkLabel: 'Explore Kitchen Remodeling →',
      },
      {
        title: 'Update the Master Bath You Use Every Day',
        text: 'Garden tub conversions, walk-in showers, and vanity upgrades turn dated baths into rooms that match the rest of the house.',
        href: '/bathroom-remodeling/',
        linkLabel: 'Explore Bathroom Remodeling →',
      },
      {
        title: 'A Team That Stands Behind the Work',
        text: 'As a Millwood Remodeling company, we bring in-house design, transparent pricing, City of Dallas permit handling when required, and a 2-year workmanship warranty.',
        href: '/contact/',
        linkLabel: 'Get Your Free Quote →',
      },
    ],
    galleryHeading: 'Our Recent Work in Dallas & North Texas',
    gallerySubtitle:
      'From custom kitchens to spa-like bathrooms — craftsmanship for North Texas homes. Project photos may include work across our Millwood service area.',
    guidesHeading: 'Guides for Dallas Homeowners',
    guidesSubtitle:
      'Practical advice on costs, timelines, and planning for Dallas-area housing types.',
  },

  about: {
    heroTitle: 'About Dallas Remodel & Design',
    heroSubtitle:
      'We are a Millwood Remodeling Company — designers, craftspeople, and project managers focused on kitchens and bathrooms in Dallas and nearby communities.',
    story: [
      'Dallas Remodel & Design is the Dallas-area practice of Millwood Remodeling — built on the belief that remodeling should be a rewarding experience, not a stressful one.',
      'For over 15 years, our team has helped North Texas homeowners transform kitchens and bathrooms with in-house design, clear communication, and a 2-year workmanship warranty. Dallas’s mix of older urban homes, mid-century stock, and updated near-north neighborhoods means every scope is planned for the house you have — without inventing reviews or awards.',
      'We focus on full kitchen and bathroom remodels — not low-budget powder-room-only jobs — so every project gets proper design attention and crew quality.',
    ],
  },

  serviceAreas: {
    heroTitle: 'Serving Dallas and Nearby Communities',
    heroSubtitle:
      'Primary focus on Dallas — including Lake Highlands, Preston Hollow, East Dallas, North Dallas, and Park Cities adjacency — plus nearby cities when the scope fits a full remodel.',
    introHeading: 'Where We Work',
    intro: [
      'Our Dallas site is built for homeowners across the city and near-north areas: Lake Highlands, Preston Hollow, East Dallas, Lakewood and M Streets, Bluffview, Greenway Parks, and homes near University Park and Highland Park.',
      'We also take on full kitchen and bathroom projects in nearby cities such as Plano, Richardson, Frisco, Garland, and Irving when the project fits our remodel model. Tell us your neighborhood on the contact form and we will confirm fit and timing.',
    ],
  },

  costGuides: {
    heroTitle: 'Kitchen & Bathroom Remodel Costs in Dallas, TX',
    heroSubtitle:
      'Honest ranges for Dallas and nearby North Texas: kitchens $40,000–$100,000+, bathrooms $20,000–$40,000, and high-end master baths up to $75,000. Free in-home estimate.',
    framingIntro:
      'Dallas pricing tracks the broader North Texas market. Older homes can need more electrical, plumbing, or layout work than a new-builder polish — ranges below are planning numbers, not quotes. An itemized in-home estimate is the only accurate number for your house.',
  },

  kitchen: {
    heroTitle: 'Kitchen Remodeling in Dallas, TX',
    heroSubtitle:
      'Custom cabinets, counters, open-layout updates, and lighting for Dallas homes — older urban stock to near-north plans. Free in-home design consultation.',
    introHeading: 'Kitchens Designed for Dallas Living',
    intro: [
      'Dallas kitchens range from closed galleys in mid-century and older homes to later open plans that still carry dated cabinets and counters. We design remodels that improve storage, seating, and materials — opening walls only when it earns the cost.',
      'Popular scopes include cabinetry, quartz or stone counters, backsplash, under-cabinet lighting, and islands or peninsulas where the footprint allows. Layout changes are priced clearly when structure or plumbing moves.',
    ],
    costHeading: 'What Dallas Kitchen Remodels Typically Cost',
    costIntro:
      'Most full kitchen remodels in this market fall between $40,000 and $100,000+, depending on cabinetry, counters, appliances, and whether walls or plumbing move. An itemized in-home estimate is the only accurate number for your house.',
    localHeading: 'Dallas Neighborhood Kitchen Notes',
    localIntro:
      'Patterns we see often in consultations — not a claim about every home:',
    localItems: [
      {
        title: 'East Dallas, Lakewood & M Streets',
        text: 'Older and mid-century plans often have compact or closed kitchens. Highest impact: cabinets, counters, lighting, and careful open-up work when structure allows.',
      },
      {
        title: 'Lake Highlands & mid-century stock',
        text: 'Solid bones with original or long-outdated kitchens. Finish and function upgrades are common without full structural rebuilds.',
      },
      {
        title: 'Preston Hollow & near-north',
        text: 'Larger footprints and entertaining-focused layouts reward better islands, pantries, and premium materials.',
      },
      {
        title: 'Park Cities adjacency',
        text: 'Homes near University Park and Highland Park often need character-sensitive design — modern function without fighting the architecture.',
      },
      {
        title: 'City of Dallas permits',
        text: 'Electrical, plumbing, and structural changes typically require permits. We prepare and coordinate submissions as part of project management.',
      },
    ],
    faqHeading: 'Dallas Kitchen Remodel FAQs',
    faqs: [
      {
        q: 'Can you open a wall between kitchen and living areas in a Dallas home?',
        a: 'Often yes, when structure allows. We assess load-bearing conditions early and include structural and permit costs in the estimate before you commit.',
      },
      {
        q: 'How long does a Dallas kitchen remodel take?',
        a: 'Most full kitchens run about 6–10 weeks of construction after design, selections, and permits. Custom cabinetry lead times often set the schedule.',
      },
      {
        q: 'Do older Dallas kitchens always need a full gut?',
        a: 'Not always. If cabinets are structurally sound, a major upgrade of counters, hardware, lighting, and surfaces can work. We recommend full cabinetry replacement when boxes, layout, or condition make partial work a poor value.',
      },
      {
        q: 'Do you handle City of Dallas permits?',
        a: 'Yes. We prepare and coordinate permits required for the agreed scope and walk you through inspections as part of project management.',
      },
    ],
  },

  bathroom: {
    heroTitle: 'Bathroom Remodeling in Dallas, TX',
    heroSubtitle:
      'Walk-in showers, garden tub conversions, and master bath upgrades for Dallas homes. Premium waterproofing and a 2-year warranty.',
    introHeading: 'Bathrooms Built for How Dallas Homes Are Lived In',
    intro: [
      'Dallas master baths from the 1970s–2000s often still have garden tubs, dated tile, and layouts that do not match daily use. Guest baths may lag even further. We remodel full bathrooms — not the cheapest powder-room-only flips.',
      'Walk-in showers, double vanities, proper waterproofing, and durable tile are core to our work. We plan moisture management carefully for North Texas humidity and hard water.',
    ],
    costHeading: 'What Dallas Bathroom Remodels Typically Cost',
    costIntro:
      'Full bathroom remodels commonly run $20,000–$40,000. Higher-end master baths with large showers, premium tile, and double vanities can reach up to about $75,000 depending on scope.',
    localHeading: 'Dallas Bathroom Patterns We See Often',
    localIntro:
      'Common starting points in consultations — not guarantees for every house:',
    localItems: [
      {
        title: 'Garden tub conversions',
        text: 'Removing an unused soaking tub for a larger walk-in shower is one of the most requested master-bath changes in Dallas-area plans.',
      },
      {
        title: 'Original mid-century and 1980s–90s baths',
        text: 'Tub-shower combos and dated tile are frequent candidates for a full wet-area rebuild.',
      },
      {
        title: 'Guest and hall baths',
        text: 'When part of a larger remodel, secondary baths get vanity, tile, and fixture upgrades that match the new standard.',
      },
      {
        title: 'Waterproofing first',
        text: 'Correct membranes, slope, and ventilation matter as much as tile choice for long-term performance.',
      },
    ],
    faqHeading: 'Dallas Bathroom Remodel FAQs',
    faqs: [
      {
        q: 'How long does a master bath remodel take in Dallas?',
        a: 'Many master baths complete in roughly 5–8 weeks of construction after design and material lead times. Large tile packages and custom glass can extend the schedule.',
      },
      {
        q: 'Can you convert a garden tub to a walk-in shower?',
        a: 'Yes — that is a common Dallas request. Cost depends on plumbing location, shower size, bench and niche details, and glass selection.',
      },
      {
        q: 'What is not a fit for your team?',
        a: 'We focus on full bathroom and kitchen remodels. Ultra-low-budget powder-room-only jobs are outside our model so we can protect quality and schedule for complete projects.',
      },
      {
        q: 'Do you handle permits?',
        a: 'We prepare and coordinate permits required by the City of Dallas for the agreed scope and support inspections during construction.',
      },
    ],
  },
};
