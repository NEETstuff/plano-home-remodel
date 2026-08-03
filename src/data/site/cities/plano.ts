import type { CitySiteConfig } from '../types';
import {
  defaultBathroomDrivers,
  defaultBathroomTiers,
  defaultKitchenDrivers,
  defaultKitchenTiers,
} from '../shared';

/**
 * Plano Home Remodel & Design — planohomeremodel.com
 * Migrated from hard-coded pages into CitySiteConfig.
 */
export const plano: CitySiteConfig = {
  id: 'plano',
  city: 'Plano',
  state: 'TX',
  domain: 'planohomeremodel.com',
  siteUrl: 'https://www.planohomeremodel.com',
  brandName: 'Plano Home Remodel & Design',
  brandShort: 'Plano Home Remodel',
  brandMark: 'P',
  brandTagline: 'A Millwood Remodeling Company',
  email: 'Ryan@MillwoodRemodeling.com',
  addressLocality: 'Plano',
  cityWiki: 'https://en.wikipedia.org/wiki/Plano,_Texas',
  foundingDate: '2009',

  areaServed: [
    { name: 'Plano', wiki: 'https://en.wikipedia.org/wiki/Plano,_Texas' },
    { name: 'Frisco', wiki: 'https://en.wikipedia.org/wiki/Frisco,_Texas' },
    { name: 'Allen', wiki: 'https://en.wikipedia.org/wiki/Allen,_Texas' },
    { name: 'McKinney', wiki: 'https://en.wikipedia.org/wiki/McKinney,_Texas' },
    { name: 'Dallas', wiki: 'https://en.wikipedia.org/wiki/Dallas' },
    { name: 'Richardson', wiki: 'https://en.wikipedia.org/wiki/Richardson,_Texas' },
    { name: 'Carrollton', wiki: 'https://en.wikipedia.org/wiki/Carrollton,_Texas' },
    { name: 'Addison', wiki: 'https://en.wikipedia.org/wiki/Addison,_Texas' },
    { name: 'The Colony', wiki: 'https://en.wikipedia.org/wiki/The_Colony,_Texas' },
    { name: 'Little Elm', wiki: 'https://en.wikipedia.org/wiki/Little_Elm,_Texas' },
    { name: 'Murphy', wiki: 'https://en.wikipedia.org/wiki/Murphy,_Texas' },
    { name: 'Sachse', wiki: 'https://en.wikipedia.org/wiki/Sachse,_Texas' },
  ],
  nearbyCities: [
    'Frisco',
    'Allen',
    'McKinney',
    'Dallas',
    'Richardson',
    'Carrollton',
    'Addison',
    'The Colony',
    'Little Elm',
    'Murphy',
    'Sachse',
  ],
  neighborhoods: [
    'Downtown',
    'East Plano',
    'West Plano',
    'Legacy',
    'Whiffletree',
    'Willow Bend',
    'Lakeside on Preston',
    'Russell Creek',
    'Gleneagles',
    'Los Rios',
    'Austin Ranch',
    'Historic District',
  ],

  pricing: {
    kitchen: defaultKitchenTiers,
    bathroom: defaultBathroomTiers,
    kitchenDrivers: defaultKitchenDrivers,
    bathroomDrivers: defaultBathroomDrivers,
    scenarios: [
      {
        type: 'Kitchen',
        title: 'Kitchen remodel, existing footprint',
        range: '$40,000 – $60,000',
        timeline: '6–8 weeks',
        detail:
          'Custom cabinetry, quartz countertops, new backsplash, lighting, and fixtures — with plumbing and electrical staying roughly in place. The most common Plano kitchen project, especially in East Plano homes from the 1970s–90s.',
        link: '/kitchen-remodeling/',
        linkLabel: 'Kitchen remodeling details →',
      },
      {
        type: 'Kitchen',
        title: 'Kitchen with layout changes',
        range: '$60,000 – $85,000',
        timeline: '8–10 weeks',
        detail:
          'Adds wall removal, an island with seating, or a reworked work triangle. Structural work and City of Plano permitting are included. Popular in West Plano and Legacy open floor plans.',
        link: '/plano-kitchen-remodeling/',
        linkLabel: 'Plano kitchen neighborhoods →',
      },
      {
        type: 'Kitchen',
        title: 'Premium full-custom kitchen',
        range: '$85,000 – $100,000+',
        timeline: '10–12 weeks',
        detail:
          'Full custom cabinetry, premium stone like quartzite or marble, integrated appliances, and specialty features such as butler pantries or built-in coffee stations.',
        link: '/kitchen-remodeling/',
        linkLabel: 'Kitchen remodeling details →',
      },
      {
        type: 'Bathroom',
        title: 'Full bathroom remodel',
        range: '$20,000 – $30,000',
        timeline: '4–6 weeks',
        detail:
          'A complete guest or secondary bath: new vanity, walk-in shower or tub/shower, tile, toilet, lighting, and fixtures. A common pre-sale update across Plano.',
        link: '/bathroom-remodeling/',
        linkLabel: 'Bathroom remodeling details →',
      },
      {
        type: 'Bathroom',
        title: 'Master bath remodel',
        range: '$30,000 – $50,000',
        timeline: '6–8 weeks',
        detail:
          'Garden tub conversion to a walk-in shower, double vanity, custom tile, and heated floors. Layout changes add permitting and cost.',
        link: '/plano-bathroom-remodeling/',
        linkLabel: 'Plano bathroom neighborhoods →',
      },
      {
        type: 'Bathroom',
        title: 'High-end master bath',
        range: 'Up to $75,000',
        timeline: '8+ weeks',
        detail:
          'Premium stone, curbless shower with linear drain, frameless glass, freestanding tub, and a full fixture upgrade — the top of our range.',
        link: '/bathroom-remodeling/',
        linkLabel: 'Bathroom remodeling details →',
      },
    ],
  },

  seo: {
    home: {
      title: 'Kitchen & Bathroom Remodeling Plano, TX',
      description:
        "Plano's trusted kitchen and bathroom remodeling company since 2009. In-house designer, premium craftsmanship, 2-year warranty. A Millwood Remodeling Company. Get your free quote today.",
    },
    kitchen: {
      title: 'Kitchen Remodeling Plano, TX',
      description:
        'Professional kitchen remodeling in Plano and North Dallas. Custom cabinets, countertops, islands, lighting, and open-layout designs. Free estimate: (214) 449-5922.',
    },
    bathroom: {
      title: 'Bathroom Remodeling Plano, TX',
      description:
        'Bathroom remodeling in Plano, TX. Walk-in showers, double vanities, garden tub conversions, and master baths. Premium craftsmanship, 2-year warranty. Call (214) 449-5922.',
    },
    costGuides: {
      title: 'Kitchen & Bathroom Remodel Cost Guide Plano TX | 2026 Pricing',
      description:
        'Real kitchen and bathroom remodel costs for Plano and North Dallas. Kitchens $40,000–$100,000+, bathrooms $20,000–$40,000, master baths to $75,000. Free in-home estimate.',
    },
    about: {
      title: 'About Plano Home Remodel & Design',
      description:
        "Meet the team behind Plano's trusted kitchen and bathroom remodeling company. 15+ years experience, in-house designer, 2-year warranty. A Millwood Remodeling Company. Learn our story.",
    },
    contact: {
      title: 'Free Kitchen & Bathroom Remodeling Quote Plano, TX',
      description:
        'Contact Plano Home Remodel & Design for your free kitchen or bathroom remodeling consultation. Call (214) 449-5922 or fill out our form. We serve Plano and all of North Dallas.',
    },
    ourProcess: {
      title: 'Our Remodeling Process | Plano Home Remodel & Design',
      description:
        'How we design and build kitchen and bathroom remodels in Plano: consultation, 3D design, transparent pricing, permits, and a 2-year workmanship warranty.',
    },
    serviceAreas: {
      title: 'Remodeling Service Areas Plano, TX',
      description:
        'Proudly serving Plano, Frisco, Allen, McKinney, Dallas, Richardson, Carrollton, Addison, The Colony, and more. Local kitchen and bathroom remodeling backed by 15+ years of Millwood expertise.',
    },
    localKitchen: {
      title: 'Plano Kitchen Remodeling | Custom Kitchens in Plano, TX',
      description:
        "Plano kitchen remodeling built for Plano's neighborhoods — custom cabinets, quartz, islands, and open layouts. Kitchens $40,000–$100,000+. City of Plano permits handled. Free estimate: (214) 449-5922.",
    },
    localBathroom: {
      title: 'Plano Bathroom Remodeling | Custom Bathrooms in Plano, TX',
      description:
        'Plano bathroom remodeling built for Plano homes — walk-in showers, garden tub conversions, double vanities, and high-end master baths. $20,000–$40,000, master baths to $75,000. Free estimate: (214) 449-5922.',
    },
  },

  home: {
    heroTitle: "Plano's Premier Kitchen & Bathroom Remodeling Company",
    heroSubtitle:
      '15+ years transforming North Dallas homes with exceptional craftsmanship, in-house design, and a 2-year workmanship warranty. A Millwood Remodeling Company.',
    introHeading: 'Kitchen & Bathroom Remodeling Built for Plano Homes',
    intro:
      'Plano and North Dallas homes each have their own era, style, and quirks — and your remodel should be designed around them. Whether your kitchen has felt dated for a decade or your master bath’s garden tub has never been used, we turn tired spaces into the rooms you actually live in.',
    highlights: [
      {
        title: 'Reclaim the Heart of Your Home',
        text: 'Many Plano homes built in the 1970s through 2000s still have their original kitchens — galley layouts, old laminate, and dated lighting. We rework them around how families actually cook, gather, and entertain today.',
        href: '/kitchen-remodeling/',
        linkLabel: 'Explore Kitchen Remodeling →',
      },
      {
        title: 'Turn Unused Space Into Daily Luxury',
        text: 'That never-used garden tub, the dated guest bath, the shower you tolerate — a curbless walk-in shower or a redesigned vanity can change how you start and end every day.',
        href: '/bathroom-remodeling/',
        linkLabel: 'Explore Bathroom Remodeling →',
      },
      {
        title: 'A Local Team That Stands Behind the Work',
        text: 'As a Millwood Remodeling company, we have served North Dallas for 15+ years with an in-house designer, transparent pricing, and a 2-year workmanship warranty on every project.',
        href: '/contact/',
        linkLabel: 'Get Your Free Quote →',
      },
    ],
    galleryHeading: 'Our Recent Work in Plano & North Dallas',
    gallerySubtitle:
      'From custom kitchens to spa-like bathrooms, see how we transform North Texas homes.',
    guidesHeading: 'Guides for Plano Homeowners',
    guidesSubtitle:
      'Practical, local advice on costs, timelines, and planning your remodel — written for North Dallas homes.',
  },

  about: {
    heroTitle: 'About Plano Home Remodel & Design',
    heroSubtitle:
      'We are a Millwood Remodeling Company — a team of experienced craftspeople, designers, and project managers dedicated to transforming homes in Plano and North Dallas.',
    story: [
      'Plano Home Remodel & Design was founded as the Plano-area practice of Millwood Remodeling — a company built on the belief that remodeling should be a rewarding experience, not a stressful one.',
      'For over 15 years, we have been helping Plano homeowners transform their kitchens and bathrooms into spaces they love. What started as a small crew focused on quality craftsmanship has grown into a full-service remodeling company with an in-house design studio, dedicated project managers, and a reputation for excellence across North Dallas.',
      'We remain proudly local. Every project we take on is personally overseen by our team, from the initial consultation to the final walkthrough. We focus on full kitchen and bathroom remodels — not low-budget powder-room-only jobs — so every project gets the design attention and crew quality it deserves.',
    ],
  },

  serviceAreas: {
    heroTitle: 'Serving Plano and North Dallas',
    heroSubtitle:
      'Kitchen and bathroom remodeling across Plano, Frisco, Allen, McKinney, and neighboring communities — backed by Millwood Remodeling standards.',
    introHeading: 'Where We Work',
    intro: [
      'Plano is our home base. We remodel kitchens and bathrooms across every part of the city — from historic downtown craftsman homes to master-planned communities in West Plano, Legacy, and Whiffletree.',
      'We also serve nearby North Dallas cities when the project fits our full kitchen and bathroom remodel focus. Tell us your neighborhood on the contact form and we will confirm fit and timing.',
    ],
  },

  costGuides: {
    heroTitle: 'Kitchen & Bathroom Remodel Costs in Plano, TX',
    heroSubtitle:
      'Honest, realistic pricing for Plano and North Dallas homes: kitchen remodels $40,000–$100,000+, bathroom remodels $20,000–$40,000, and up to $75,000 for high-end master baths. Get your exact number with a free in-home estimate.',
    framingIntro:
      'For projects in range, every quote is unique. Final cost depends on your specific home, material selections, and scope of work — the only way to get an accurate number is a free in-home consultation, and we would love to provide one.',
  },

  kitchen: {
    heroTitle: 'Kitchen Remodeling in Plano & North Dallas',
    heroSubtitle:
      'Transform your kitchen with custom cabinetry, premium countertops, and thoughtful design. We create kitchens that Plano families love to cook, gather, and live in.',
    introHeading: 'We Know Every Kitchen Era in Plano',
    intro: [
      'Plano’s housing stock tells the story of the city itself. The 1970s and ’80s neighborhoods of East Plano were built with galley kitchens and closed-off layouts. The 2000s boom across West Plano, Legacy, and Whiffletree brought open floor plans with builder-standard finishes. And the Downtown and Historic District homes need a careful, character-preserving hand. We remodel kitchens across all of them.',
      'That experience shapes how we work. Before anything is built, we spend time understanding how your home was constructed — because a load-bearing wall reads differently in a 1978 ranch than in a 2006 custom build. We pair that local know-how with an in-house designer, so you see 3D renderings of your exact kitchen before construction begins.',
      'Every project is a full-scope kitchen remodel: custom cabinetry, premium countertops, tile, lighting, and fixtures — plus City of Plano permitting, itemized pricing, and our 2-year workmanship warranty.',
    ],
    costHeading: 'Kitchen Remodel Costs in Plano, TX',
    costIntro:
      'Plano kitchen remodels run from $40,000 to $100,000+. Within that range, keeping your existing footprint costs the least, layout changes add more, and premium full-custom kitchens sit at the top.',
    localHeading: 'Kitchen Remodeling by Plano Neighborhood',
    localIntro:
      'Every Plano neighborhood has its own building era, layout, and HOA rules. We tailor the scope to your home — not a one-size-fits-all plan.',
    localItems: [
      {
        title: 'East Plano (1970s–80s)',
        text: 'Galley kitchens with original laminate and dated lighting. We open up the work triangle, add islands where space allows, and swap every finish — often keeping plumbing in place to protect the budget.',
      },
      {
        title: 'West Plano, Legacy & Whiffletree',
        text: 'Open floor plans with builder-standard cabinets. Large islands with seating, butler pantries, and premium appliance packages are the most-requested upgrades.',
      },
      {
        title: 'Downtown & Historic District',
        text: 'Older homes need a careful hand. We modernize function while preserving the character that makes these properties special — including historic district coordination.',
      },
      {
        title: 'Willow Bend & Lakeside on Preston',
        text: 'Custom and semi-custom homes on generous lots. These kitchens reward full-custom cabinetry, premium stone, and integrated appliances.',
      },
      {
        title: 'Townhomes & Condos (Austin Ranch)',
        text: 'Compact footprints and HOA rules. We design for space efficiency, coordinate approvals, and deliver kitchens that feel far larger than their square footage.',
      },
      {
        title: 'Russell Creek, Gleneagles & Los Rios',
        text: 'Established neighborhoods spanning multiple eras. We match the scope and style to your home’s architecture and your goals.',
      },
    ],
    faqHeading: 'Frequently Asked Questions About Kitchen Remodeling in Plano',
    faqs: [
      {
        q: 'How much does a kitchen remodel cost in Plano, TX?',
        a: 'Kitchen remodeling costs in Plano typically range from $40,000 to $100,000+. We focus on custom, full-scope kitchen remodels and do not take on low-budget projects — anything less does not allow the quality we stand behind. Final cost depends on cabinetry, countertop material, layout changes, and appliance package.',
      },
      {
        q: 'How long does a kitchen remodel take in Plano?',
        a: 'Most kitchen remodels in Plano take 6–10 weeks from demolition to completion; premium custom projects with extensive layout changes can run 10–12 weeks. Custom cabinetry fabrication adds 4–6 weeks of lead time before construction begins.',
      },
      {
        q: 'Do you offer custom kitchen cabinets in Plano?',
        a: 'Yes. We design and install custom cabinetry tailored to your Plano home. Whether you prefer traditional shaker-style for a classic Plano Colonial or sleek slab-front for a modern home, our team builds cabinets that maximize storage and complement your architectural style.',
      },
      {
        q: 'Do I need permits for a kitchen remodel in Plano?',
        a: 'Yes, most kitchen remodels in Plano require permits for electrical, plumbing, and structural changes. We handle all permit applications and coordinate with the City of Plano Building Inspections so you don’t have to worry about a thing.',
      },
      {
        q: 'Can you remodel a kitchen without changing the footprint?',
        a: 'Absolutely. Many Plano homeowners choose to keep their existing layout and focus on upgrading cabinets, countertops, backsplash, lighting, and fixtures. This approach can reduce both cost and timeline while still delivering a stunning transformation.',
      },
    ],
  },

  bathroom: {
    heroTitle: 'Bathroom Remodeling in Plano & North Dallas',
    heroSubtitle:
      'Walk-in showers, double vanities, and master bath upgrades for Plano homes. Premium waterproofing, tile, and a 2-year workmanship warranty.',
    introHeading: 'Bathrooms Built for the Way Plano Lives',
    intro: [
      'Plano master baths tell a familiar story. Homes from the 1980s through the 2000s were built with separate tub-and-shower zones and garden tubs that rarely get used — while West Plano and Legacy homes often shipped with builder-standard finishes that leave value on the table. We remodel both, and everything in between.',
      'Our most requested Plano project is the garden tub conversion: turning that unused tub into a spacious walk-in shower with bench seating, a linear drain, and frameless glass. We also build double vanities, heated floors, custom tile, and high-end master baths — always with proper waterproofing and ventilation for North Texas humidity.',
      'Every project is a full-scope bathroom remodel with City of Plano permitting, itemized pricing, and our 2-year workmanship warranty.',
    ],
    costHeading: 'Bathroom Remodel Costs in Plano, TX',
    costIntro:
      'Bathroom remodels in Plano typically run from $20,000 to $40,000, with high-end master baths up to $75,000.',
    localHeading: 'Bathroom Remodeling by Plano Neighborhood',
    localIntro:
      'Plano’s housing eras bring different bathroom layouts and challenges. We tailor every remodel to your home.',
    localItems: [
      {
        title: 'East Plano (1980s–2000s)',
        text: 'Master baths with garden tubs and dated tile. Converting the tub to a walk-in shower is the single highest-impact update we do here.',
      },
      {
        title: 'West Plano, Legacy & Whiffletree',
        text: 'Larger master suites with separate tub and shower zones. We reimagine them with double vanities, premium tile, and heated floors.',
      },
      {
        title: 'Downtown & Historic District',
        text: 'Smaller footprints in older homes. We modernize function with space-efficient layouts and character-preserving finishes.',
      },
      {
        title: 'Willow Bend & Lakeside on Preston',
        text: 'Custom homes where high-end materials shine — slab stone, curbless showers, and full fixture packages.',
      },
      {
        title: 'Townhomes & Condos (Austin Ranch)',
        text: 'Compact bathrooms with HOA rules. We design for space efficiency and coordinate all approvals.',
      },
      {
        title: 'Russell Creek, Gleneagles & Los Rios',
        text: 'A mix of eras. Whether it is a guest bath refresh or a full master redo, we match the scope to the home.',
      },
    ],
    faqHeading: 'Frequently Asked Questions About Bathroom Remodeling in Plano',
    faqs: [
      {
        q: 'How much does a bathroom remodel cost in Plano, TX?',
        a: 'Bathroom remodels typically range from $20,000 to $40,000, with high-end full master baths running up to $75,000. We do not take on powder-room-only or sub-$20,000 projects — our remodels are complete, full-scope jobs with new tile, fixtures, and finishes.',
      },
      {
        q: 'How long does a bathroom remodel take in Plano?',
        a: 'Most bathroom remodels take 4–6 weeks; full master baths with layout changes often take 6–8 weeks. Tile lead times and custom glass can extend the schedule.',
      },
      {
        q: 'Can you convert a garden tub to a walk-in shower?',
        a: 'Yes — that is one of our most requested Plano projects. Cost depends on whether plumbing stays in place, shower size, bench and niche details, and glass selection.',
      },
      {
        q: 'Do you handle City of Plano permits for bathroom remodels?',
        a: 'Yes. We prepare and coordinate permits required for the agreed scope and walk you through inspections as part of project management.',
      },
    ],
  },

  satelliteCities: [
    {
      slug: 'frisco-kitchen-bathroom-remodeling',
      name: 'Frisco',
      wiki: 'https://en.wikipedia.org/wiki/Frisco,_Texas',
      title: 'Kitchen & Bathroom Remodeling in Frisco, TX',
      description:
        'Expert kitchen and bathroom remodeling in Frisco, TX. Custom cabinets, large islands, walk-in showers, and open-concept designs for Frisco homes. Call (214) 449-5922 for your free estimate.',
      heroSubtitle:
        'Frisco homes are full of potential. We turn builder-standard kitchens and master baths into spaces that feel custom-built for how your family actually lives.',
      introHeading: 'Remodeling for the Way Frisco Lives',
      intro: [
        'Frisco is one of the fastest-growing cities in North Texas, and most of its homes were built in the last 20–25 years. That means lots of open floor plans and great bones — but many kitchens and master baths still carry the same builder-standard finishes they shipped with: laminate counters, basic tile, and builder-grade fixtures.',
        'We help Frisco homeowners make those spaces their own. Popular projects include bigger islands with seating, butler pantries, quartz countertops, spa-style master baths with curbless showers, and thoughtful storage that actually fits daily life. Because the housing stock is newer, most of our Frisco work is about upgrading and personalizing rather than restructuring.',
      ],
      notesHeading: 'What to Know About Frisco Homes',
      notes: [
        {
          title: 'Builder-Standard Finishes',
          text: 'Many Frisco homes were built by volume builders. Upgrading cabinets, countertops, and fixtures transforms the feel of the whole house.',
        },
        {
          title: 'Open Floor Plans',
          text: 'Kitchens often open to the living areas. Islands, pantries, and clean sightlines are central to Frisco remodels.',
        },
        {
          title: 'HOAs & Permits',
          text: 'Neighborhoods like Stonebriar, Starwood, and Phillips Creek Ranch have HOA rules. We coordinate them and handle City of Frisco permits for you.',
        },
      ],
      neighborhoods: 'Stonebriar, The Trails, Plantation, Phillips Creek Ranch, Starwood, Lawler Park',
      whyHeading: 'Why Frisco Homeowners Choose Us',
      why: [
        {
          title: 'In-House Design',
          text: 'Our designer works directly with you on 3D renderings, so you see exactly how your new kitchen or bathroom will look before construction starts.',
        },
        {
          title: 'Permits Handled for You',
          text: 'We prepare and file everything with the City of Frisco and coordinate with your HOA — no paperwork headaches on your end.',
        },
        {
          title: 'Backed by Millwood Remodeling',
          text: 'As a Millwood Remodeling company, we bring 15+ years of experience, proven processes, and a 2-year workmanship warranty to every Frisco project.',
        },
        {
          title: 'Free In-Home Consultation',
          text: 'We come to your home, listen to your goals, and give you honest advice and a clear estimate. No pressure, no obligation.',
        },
      ],
    },
    {
      slug: 'allen-kitchen-bathroom-remodeling',
      name: 'Allen',
      wiki: 'https://en.wikipedia.org/wiki/Allen,_Texas',
      title: 'Kitchen & Bathroom Remodeling in Allen, TX',
      description:
        'Expert kitchen and bathroom remodeling in Allen, TX. Update 1990s–2000s kitchens and master baths with quartz, custom cabinets, and walk-in showers. Call (214) 449-5922 for a free estimate.',
      heroSubtitle:
        'Allen homes have strong bones and big, family-friendly spaces. We modernize the kitchens and bathrooms that came with them — so your home matches your life.',
      introHeading: 'Modern Updates for Allen Homeowners',
      intro: [
        'Many of Allen’s most established neighborhoods — Twin Creeks, Waterford, and the areas around Bethany and Exchange Parkway — were built in the 1990s and 2000s. These homes have spacious kitchens and generous master suites, but original finishes like laminate counters, dated backsplash tile, and fiberglass tubs leave value on the table.',
        'We update those spaces with quartz countertops, shaker cabinetry, undermount sinks, walk-in showers, and modern fixtures — keeping the layouts that work while making everything feel current. Newer communities like the Villages of Allen and the Greenville Corridor bring their own opportunities, from open-concept kitchens to dual-vanity master baths.',
      ],
      notesHeading: 'What to Know About Allen Homes',
      notes: [
        {
          title: '1990s–2000s Originals',
          text: 'Kitchens and master baths across Allen still carry their original finishes. Swapping countertops, cabinets, and tile is the highest-impact update.',
        },
        {
          title: 'Garden Tub Conversions',
          text: 'Many Allen master baths have seldom-used garden tubs. We convert them into spacious walk-in showers with bench seating.',
        },
        {
          title: 'Family-Focused Layouts',
          text: 'Allen kitchens typically anchor family living areas. Islands with seating and efficient storage are the most requested features.',
        },
      ],
      neighborhoods: 'Twin Creeks, Villages of Allen, Waterford, Timber Creek, Greenville Corridor',
      whyHeading: 'Why Allen Homeowners Choose Us',
      why: [
        {
          title: 'In-House Design',
          text: 'From cabinet selection to tile layout, our designer guides you with 3D renderings so there are no surprises before work begins.',
        },
        {
          title: 'Permits Handled for You',
          text: 'We prepare and file everything with the City of Allen, so your remodel is compliant and stress-free.',
        },
        {
          title: 'Backed by Millwood Remodeling',
          text: 'As a Millwood Remodeling company, we bring 15+ years of experience, proven processes, and a 2-year workmanship warranty to every Allen project.',
        },
        {
          title: 'Free In-Home Consultation',
          text: 'We visit your home, walk through your goals, and provide a clear, honest estimate. No pressure, no obligation.',
        },
      ],
    },
    {
      slug: 'mckinney-kitchen-bathroom-remodeling',
      name: 'McKinney',
      wiki: 'https://en.wikipedia.org/wiki/McKinney,_Texas',
      title: 'Kitchen & Bathroom Remodeling in McKinney, TX',
      description:
        'Expert kitchen and bathroom remodeling in McKinney, TX. From Historic Downtown Victorians to Craig Ranch new builds, we design remodels that fit your home. Call (214) 449-5922.',
      heroSubtitle:
        'McKinney spans everything from 100-year-old Victorians to brand-new custom homes. We remodel each one the way it deserves — with respect for its character.',
      introHeading: 'Respecting McKinney’s Character, Delivering Modern Function',
      intro: [
        'McKinney offers the widest range of architectural styles in the North Dallas area. Historic Downtown is home to Victorian-era houses with period details that deserve care, while Craig Ranch, Stonebridge, and Adriatica feature newer construction with generous open plans.',
        'Our approach is simple: we honor the home. In Historic Downtown, that means keeping the charm while updating function — improving kitchens and bathrooms without erasing the character that makes the house special. In newer communities, it means larger islands, upgraded finishes, and spa-style master baths that make the most of modern footprints. We handle City of McKinney permits and historic district coordination on your behalf.',
      ],
      notesHeading: 'What to Know About McKinney Homes',
      notes: [
        {
          title: 'Historic District Care',
          text: 'Homes near Historic Downtown may fall under preservation guidelines. We work within them to modernize while protecting character.',
        },
        {
          title: 'Modern New Builds',
          text: 'Craig Ranch and Adriatica homes often benefit from larger islands, upgraded materials, and spa-style master baths.',
        },
        {
          title: 'Custom Home Details',
          text: 'Stonebridge and other custom neighborhoods reward thoughtful, tailored designs — not one-size-fits-all solutions.',
        },
      ],
      neighborhoods: 'Historic Downtown, Craig Ranch, Stonebridge, Adriatica, Eldorado Heights',
      whyHeading: 'Why McKinney Homeowners Choose Us',
      why: [
        {
          title: 'In-House Design',
          text: 'Our designer creates 3D renderings tailored to your home and your style, so you approve the plan before we build.',
        },
        {
          title: 'Permits & Preservation',
          text: 'We handle City of McKinney permits and work respectfully within historic district guidelines.',
        },
        {
          title: 'Backed by Millwood Remodeling',
          text: 'As a Millwood Remodeling company, we bring 15+ years of experience, proven processes, and a 2-year workmanship warranty to every McKinney project.',
        },
        {
          title: 'Free In-Home Consultation',
          text: 'We come to you, listen to your goals, and provide honest advice and a clear estimate. No pressure, no obligation.',
        },
      ],
    },
  ],
};
