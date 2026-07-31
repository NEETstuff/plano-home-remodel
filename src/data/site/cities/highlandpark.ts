import type { CitySiteConfig } from '../types';
import {
  defaultBathroomDrivers,
  defaultBathroomTiers,
  defaultKitchenDrivers,
  defaultKitchenTiers,
} from '../shared';

/**
 * Highland Park Home Remodel & Design — highlandparkhomeremodel.com
 *
 * Housing stock: historic prestige neighborhoods (Highland Park / University Park
 * Park Cities context). Preservation-sensitive framing; premium full remodels only.
 * No invented reviews, awards, or street-level project claims.
 */
export const highlandpark: CitySiteConfig = {
  id: 'highlandpark',
  city: 'Highland Park',
  state: 'TX',
  domain: 'highlandparkhomeremodel.com',
  siteUrl: 'https://highlandparkhomeremodel.com',
  brandName: 'Highland Park Home Remodel & Design',
  brandShort: 'Highland Park Home Remodel',
  brandMark: 'H',
  brandTagline: 'A Millwood Remodeling Company',
  email: 'Ryan@MillwoodRemodeling.com',
  addressLocality: 'Highland Park',
  cityWiki: 'https://en.wikipedia.org/wiki/Highland_Park,_Texas',
  foundingDate: '2009',

  areaServed: [
    { name: 'Highland Park', wiki: 'https://en.wikipedia.org/wiki/Highland_Park,_Texas' },
    { name: 'University Park', wiki: 'https://en.wikipedia.org/wiki/University_Park,_Texas' },
    { name: 'Dallas', wiki: 'https://en.wikipedia.org/wiki/Dallas' },
    { name: 'Preston Hollow', wiki: 'https://en.wikipedia.org/wiki/Preston_Hollow,_Dallas' },
  ],
  nearbyCities: ['University Park', 'Dallas', 'Preston Hollow', 'Bluffview', 'Greenway Parks'],
  neighborhoods: [
    'Highland Park proper',
    'Near Hackberry Creek',
    'Lakeside Drive corridor',
    'Beverly Drive area',
    'Armstrong area',
    'Miramar area',
    'University Park adjacent',
    'Snider Plaza vicinity',
    'Preston Center edge',
    'Park Cities streets generally',
  ],

  pricing: {
    kitchen: defaultKitchenTiers,
    bathroom: defaultBathroomTiers,
    kitchenDrivers: defaultKitchenDrivers,
    bathroomDrivers: defaultBathroomDrivers,
    scenarios: [
      {
        type: 'Kitchen',
        title: 'Character-preserving kitchen remodel',
        range: '$50,000–$100,000+',
        timeline: '8–12 weeks',
        detail:
          'Park Cities kitchens often need modern function without erasing architectural character. Custom cabinetry, stone, lighting, and carefully considered openings — priced honestly for full-scope work.',
        link: '/kitchen-remodeling/',
        linkLabel: 'Kitchen remodeling details →',
      },
      {
        type: 'Kitchen',
        title: 'Full custom kitchen with premium materials',
        range: '$85,000–$100,000+',
        timeline: '10–14 weeks',
        detail:
          'When the home warrants full custom cabinetry, premium stone, and refined detailing, schedule and material lead times expand. We keep estimates itemized so every premium choice is intentional.',
        link: '/highlandpark-kitchen-remodeling/',
        linkLabel: 'Highland Park kitchen page →',
      },
      {
        type: 'Bathroom',
        title: 'Premium master bath remodel',
        range: '$40,000–$75,000',
        timeline: '6–10 weeks',
        detail:
          'Walk-in showers, quality tile, double vanities, and careful wet-area detailing. Historic or tightly constrained footprints may limit layout options — we design within what the house can support.',
        link: '/bathroom-remodeling/',
        linkLabel: 'Bathroom remodeling details →',
      },
    ],
  },

  seo: {
    home: {
      title: 'Kitchen & Bathroom Remodeling Highland Park, TX',
      description:
        'Premium kitchen and bathroom remodeling in Highland Park and the Park Cities. In-house design, careful craftsmanship, 2-year warranty. A Millwood Remodeling Company. Call (214) 449-5922.',
    },
    kitchen: {
      title: 'Kitchen Remodeling in Highland Park, TX | Custom Cabinets & Design',
      description:
        'Custom kitchen remodeling in Highland Park, TX. Character-sensitive design, premium cabinetry and stone for Park Cities homes. Free estimate: (214) 449-5922.',
    },
    bathroom: {
      title: 'Bathroom Remodeling in Highland Park, TX | Master Baths & Walk-In Showers',
      description:
        'Bathroom remodeling in Highland Park, TX. Walk-in showers, premium vanities, and careful wet-area detailing. 2-year warranty. Call (214) 449-5922.',
    },
    costGuides: {
      title: 'Kitchen & Bathroom Remodel Cost Guide Highland Park TX | 2026 Pricing',
      description:
        'Realistic kitchen and bathroom remodel costs for Highland Park and the Park Cities. Kitchens $40,000–$100,000+, bathrooms $20,000–$40,000, master baths to $75,000. Free estimate.',
    },
    about: {
      title: 'About Highland Park Home Remodel & Design',
      description:
        'Meet Highland Park Home Remodel & Design — a Millwood Remodeling company serving the Park Cities with design-led kitchens and baths, transparent pricing, and a 2-year warranty.',
    },
    contact: {
      title: 'Contact Highland Park Home Remodel | Free Estimate',
      description:
        'Schedule a free in-home kitchen or bathroom remodel estimate in Highland Park, TX. Call (214) 449-5922 or request a consultation online.',
    },
    ourProcess: {
      title: 'Our Remodeling Process | Highland Park Home Remodel & Design',
      description:
        'How we design and build kitchen and bathroom remodels in Highland Park: consultation, 3D design, transparent pricing, permits, and a 2-year workmanship warranty.',
    },
    serviceAreas: {
      title: 'Service Areas | Highland Park, University Park & Nearby',
      description:
        'Kitchen and bathroom remodeling from Highland Park Home Remodel & Design — serving Highland Park, University Park, and nearby Dallas communities.',
    },
    localKitchen: {
      title: 'Highland Park Kitchen Remodeling',
      description:
        'Kitchen remodeling for Highland Park and Park Cities homes — custom cabinetry, premium materials, character-sensitive design. Free estimate: (214) 449-5922.',
    },
    localBathroom: {
      title: 'Highland Park Bathroom Remodeling',
      description:
        'Bathroom remodeling in Highland Park, TX — premium master baths, walk-in showers, and careful detailing. Call (214) 449-5922.',
    },
  },

  home: {
    heroTitle: "Highland Park's Premier Kitchen & Bathroom Remodeling Company",
    heroSubtitle:
      'Design-led craftsmanship for Park Cities homes. In-house design, transparent pricing, and a 2-year workmanship warranty. A Millwood Remodeling Company.',
    introHeading: 'Kitchen & Bathroom Remodeling Built for Park Cities Homes',
    intro:
      'Highland Park and University Park homes often carry architectural character that deserves care. We remodel kitchens and baths for modern living while respecting scale, proportion, and materials — premium full remodels only, never low-budget powder-room-only work.',
    highlights: [
      {
        title: 'Kitchens That Respect the Architecture',
        text: 'Custom cabinetry, stone, and lighting planned for how the house is built — not a generic open-concept template forced on every plan.',
        href: '/kitchen-remodeling/',
        linkLabel: 'Explore Kitchen Remodeling →',
      },
      {
        title: 'Baths Detailed for Daily Luxury',
        text: 'Walk-in showers, quality tile, and vanities specified for performance as well as appearance.',
        href: '/bathroom-remodeling/',
        linkLabel: 'Explore Bathroom Remodeling →',
      },
      {
        title: 'A Team That Stands Behind the Work',
        text: 'As a Millwood Remodeling company, we bring in-house design, itemized pricing, careful permitting, and a 2-year workmanship warranty.',
        href: '/contact/',
        linkLabel: 'Get Your Free Quote →',
      },
    ],
    galleryHeading: 'Our Recent Work in the Park Cities & Nearby Dallas',
    gallerySubtitle:
      'Custom kitchens and baths for North Texas homes. Project photos may include work across our Millwood service area.',
    guidesHeading: 'Guides for Highland Park Homeowners',
    guidesSubtitle:
      'Practical cost and planning advice for premium kitchen and bathroom remodels in established homes.',
  },

  about: {
    heroTitle: 'About Highland Park Home Remodel & Design',
    heroSubtitle:
      'We are a Millwood Remodeling Company — designers, craftspeople, and project managers focused on kitchens and bathrooms in Highland Park, University Park, and nearby Dallas communities.',
    story: [
      'Highland Park Home Remodel & Design is the Park Cities-area practice of Millwood Remodeling — built on careful design, honest scopes, and workmanship we stand behind for two years.',
      'For over 15 years, our team has remodeled kitchens and bathrooms across North Texas with in-house design and itemized pricing. In Highland Park, that means premium full remodels planned with respect for the home’s character — without inventing awards or neighborhood name-dropping we cannot substantiate with project claims.',
      'We accept full kitchen and bathroom remodels only — not ultra-low-budget powder-room-only jobs.',
    ],
  },

  serviceAreas: {
    heroTitle: 'Serving Highland Park and Nearby Communities',
    heroSubtitle:
      'Primary focus on Highland Park, with full kitchen and bathroom remodels in University Park and nearby Dallas neighborhoods when the scope fits.',
    introHeading: 'Where We Work',
    intro: [
      'Our Highland Park site is for homeowners in Highland Park and the broader Park Cities context, including adjacent University Park streets and nearby Dallas communities when the project is a full kitchen or bath remodel.',
      'Share your address or neighborhood on the contact form. We will confirm fit, permitting context, and timing honestly.',
    ],
  },

  costGuides: {
    heroTitle: 'Kitchen & Bathroom Remodel Costs in Highland Park, TX',
    heroSubtitle:
      'Honest ranges for Highland Park and the Park Cities: kitchens $40,000–$100,000+, bathrooms $20,000–$40,000, high-end master baths up to $75,000. Free in-home estimate.',
    framingIntro:
      'Park Cities projects often use premium cabinetry and stone, which can push scopes toward the upper half of North Texas ranges. Numbers below are planning guides — only an itemized on-site estimate is a quote.',
  },

  kitchen: {
    heroTitle: 'Kitchen Remodeling in Highland Park, TX',
    heroSubtitle:
      'Custom cabinetry, premium materials, and character-sensitive design for Park Cities homes. Free in-home consultation.',
    introHeading: 'Kitchens Designed for Park Cities Homes',
    intro: [
      'Highland Park kitchens vary from tightly planned historic footprints to larger later renovations. We prioritize function, craftsmanship, and materials that suit the house — not trend-driven remodels that ignore architecture.',
      'Full-scope kitchens include cabinetry, counters, lighting, and finishes with clear project management. Layout changes are recommended only when structure and budget support them.',
    ],
    costHeading: 'What Highland Park Kitchen Remodels Typically Cost',
    costIntro:
      'Full kitchen remodels commonly fall between $40,000 and $100,000+, with many premium scopes toward the upper range. Cabinetry and stone are usually the largest line items.',
    localHeading: 'Highland Park Kitchen Considerations',
    localIntro: 'Themes we discuss in consultations:',
    localItems: [
      {
        title: 'Character and proportion',
        text: 'Cabinetry, moldings, and openings should fit the home’s scale. We design for the architecture, not a catalog template.',
      },
      {
        title: 'Compact historic footprints',
        text: 'Some kitchens are small by modern standards. Efficient storage and lighting often outperform forced expansions.',
      },
      {
        title: 'Premium material selections',
        text: 'Stone, hardware, and appliance packages are specified deliberately so cost tracks real choices.',
      },
      {
        title: 'Permits and coordination',
        text: 'We prepare and coordinate permits required for the agreed scope and manage trade sequencing carefully on occupied homes.',
      },
    ],
    faqHeading: 'Highland Park Kitchen Remodel FAQs',
    faqs: [
      {
        q: 'Can you remodel a kitchen without stripping historic character?',
        a: 'Often yes. We plan cabinetry, finishes, and any openings to respect the home’s architecture while meeting modern function and code.',
      },
      {
        q: 'How long does a premium kitchen remodel take?',
        a: 'Many kitchens run 8–12 weeks of construction after design, selections, and permits. Custom cabinetry lead times often set the schedule.',
      },
      {
        q: 'Do you take on partial or powder-room-only projects?',
        a: 'No. We focus on full kitchen and bathroom remodels so quality and crew standards stay consistent.',
      },
      {
        q: 'Do you handle permits?',
        a: 'We prepare and coordinate permits required for the agreed scope and support inspections during construction.',
      },
    ],
  },

  bathroom: {
    heroTitle: 'Bathroom Remodeling in Highland Park, TX',
    heroSubtitle:
      'Premium master baths, walk-in showers, and careful wet-area detailing for Park Cities homes.',
    introHeading: 'Bathrooms Built with Care for Established Homes',
    intro: [
      'Bathrooms in Highland Park may be constrained by older plumbing runs or room sizes — or they may be later additions ready for a higher finish level. We remodel full baths with proper waterproofing and durable materials.',
      'Walk-in showers, quality tile, and vanity design are core offerings. We do not pursue the cheapest powder-room-only scopes.',
    ],
    costHeading: 'What Highland Park Bathroom Remodels Typically Cost',
    costIntro:
      'Full bathroom remodels commonly run $20,000–$40,000. High-end master baths can reach up to about $75,000 depending on tile, glass, stone, and layout complexity.',
    localHeading: 'Highland Park Bathroom Considerations',
    localIntro: 'Common consultation themes:',
    localItems: [
      {
        title: 'Constrained footprints',
        text: 'Efficient layouts and material choices can make smaller baths feel intentional and perform well.',
      },
      {
        title: 'Master wet areas',
        text: 'Walk-in showers with correct waterproofing and slope are frequent priorities over seldom-used tubs.',
      },
      {
        title: 'Finish quality',
        text: 'Tile, fixtures, and glass are selected for longevity as well as appearance.',
      },
      {
        title: 'Occupied-home logistics',
        text: 'We plan dust control, access, and sequencing carefully when families remain in the house.',
      },
    ],
    faqHeading: 'Highland Park Bathroom Remodel FAQs',
    faqs: [
      {
        q: 'How long does a master bath remodel take?',
        a: 'Many master baths run 6–10 weeks of construction after design and material lead times. Specialty tile and custom glass can extend the schedule.',
      },
      {
        q: 'Can plumbing locations limit the design?',
        a: 'Yes. Older homes sometimes constrain drain and supply moves. We assess early and price layout changes honestly before you commit.',
      },
      {
        q: 'What is not a fit for your team?',
        a: 'We focus on full bathroom and kitchen remodels. Ultra-low-budget powder-room-only jobs are outside our model.',
      },
      {
        q: 'Do you handle permits?',
        a: 'We prepare and coordinate permits required for the agreed scope and support inspections during construction.',
      },
    ],
  },
};
