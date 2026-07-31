// ---------------------------------------------------------------------------
// Local service page data — content for city-specific service pages.
//
// TO CLONE FOR A NEW CITY (e.g. "Frisco Kitchen Remodeling"):
//   1. Add a LocalServicePage entry below (copy a Plano entry and adapt
//      slug, canonical, titles, descriptions, scenarios, localItems, faqs).
//   2. Create a thin wrapper page src/pages/frisco-kitchen-remodeling.astro:
//        <ServicePage {...page.content} />
//      using buildServiceSchemas(page) for the Layout schema prop.
//   3. Add a link in src/components/Footer.astro and cross-link from
//      /cost-guides/ and the parent service page.
//   4. Rebuild. Astro generates the static page + sitemap entry automatically.
//
// All Service schema fields (name, priceRange, serviceType, areaServed) are
// derived here so new pages stay consistent automatically.
// ---------------------------------------------------------------------------

export interface ServiceScenarioData {
  type: string;
  title: string;
  range: string;
  timeline: string;
  detail: string;
}

export interface ServiceFaqData {
  q: string;
  a: string;
}

export interface ServiceContent {
  heroTitle: string;
  heroSubtitle: string;
  ctaText: string;
  ctaHref: string;
  secondaryText: string;
  secondaryHref: string;

  introHeading: string;
  intro: string[];
  introLinks: { label: string; href: string }[];

  costHeading: string;
  costIntro: string;
  scenarios: ServiceScenarioData[];
  costNote?: string;

  localHeading: string;
  localIntro: string;
  localItems: { title: string; text: string }[];

  processHeading: string;
  processIntro: string;
  processSteps: { title: string; text: string }[];

  faqHeading: string;
  faqIntro?: string;
  faqs: ServiceFaqData[];

  relatedGuides: { title: string; href: string }[];
}

export interface LocalServicePage {
  slug: string;
  canonical: string;
  title: string;
  description: string;
  serviceName: string;
  serviceDescription: string;
  serviceType: string;
  cityName: string;
  cityWiki: string;
  priceRange: string;
  parentName: string;
  parentUrl: string;
  breadcrumbName: string;
  content: ServiceContent;
}

export const siteUrl = 'https://planohomeremodel.com';

// Shared provider block for Service schema on every local service page.
export const siteProvider = {
  '@type': 'HomeAndConstructionBusiness',
  '@id': `${siteUrl}/`,
  name: 'Plano Home Remodel & Design',
  url: `${siteUrl}/`,
  telephone: '+12144495922',
  parentOrganization: {
    '@type': 'HomeAndConstructionBusiness',
    name: 'Millwood Remodeling',
    url: 'https://millwoodremodeling.com',
  },
};

export function buildServiceSchemas(page: LocalServicePage) {
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
    provider: siteProvider,
    priceRange: page.priceRange,
    priceCurrency: 'USD',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: page.parentName, item: `${siteUrl}${page.parentUrl}` },
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

export const localServicePages: LocalServicePage[] = [
  {
    slug: 'plano-kitchen-remodeling',
    canonical: `${siteUrl}/plano-kitchen-remodeling/`,
    title: 'Plano Kitchen Remodeling | Custom Kitchens in Plano, TX',
    description: "Plano kitchen remodeling built for Plano's neighborhoods — custom cabinets, quartz, islands, and open layouts. Kitchens $40,000–$100,000+. City of Plano permits handled. Free estimate: (214) 449-5922.",
    serviceName: 'Plano Kitchen Remodeling',
    serviceDescription: 'Custom kitchen remodeling across Plano, TX — East Plano to West Plano, Legacy, and the Historic District. Custom cabinetry, quartz, islands, and open layouts. Kitchens $40,000–$100,000+. A Millwood Remodeling company.',
    serviceType: 'Kitchen Remodeling',
    cityName: 'Plano',
    cityWiki: 'https://en.wikipedia.org/wiki/Plano,_Texas',
    priceRange: '$40,000 – $100,000+',
    parentName: 'Kitchen Remodeling',
    parentUrl: '/kitchen-remodeling/',
    breadcrumbName: 'Plano Kitchen Remodeling',
    content: {
      heroTitle: 'Plano Kitchen Remodeling',
      heroSubtitle: 'From East Plano galley kitchens to West Plano open floor plans, we remodel kitchens the way Plano homes deserve — custom-built, properly permitted, and designed around how your family actually cooks.',
      ctaText: 'Get Your Free Kitchen Estimate',
      ctaHref: '/contact/',
      secondaryText: 'See Kitchen Costs',
      secondaryHref: '/cost-guides/',

      introHeading: 'We Know Every Kitchen Era in Plano',
      intro: [
        'Plano’s housing stock tells the story of the city itself. The 1970s and ’80s neighborhoods of East Plano were built with galley kitchens and closed-off layouts. The 2000s boom across West Plano, Legacy, and Whiffletree brought open floor plans with builder-standard finishes. And the Downtown and Historic District homes need a careful, character-preserving hand. We remodel kitchens across all of them.',
        'That experience shapes how we work. Before anything is built, we spend time understanding how your home was constructed — because a load-bearing wall reads differently in a 1978 ranch than in a 2006 custom build. We pair that local know-how with an in-house designer, so you see 3D renderings of your exact kitchen before construction begins.',
        'Every project is a full-scope kitchen remodel: custom cabinetry, premium countertops, tile, lighting, and fixtures — plus City of Plano permitting, itemized pricing, and our 2-year workmanship warranty.',
      ],
      introLinks: [
        { label: 'Kitchen Remodeling Services', href: '/kitchen-remodeling/' },
        { label: 'Kitchen Cost Guide', href: '/cost-guides/' },
        { label: 'Our Process', href: '/our-process/' },
      ],

      costHeading: 'Kitchen Remodel Costs in Plano, TX',
      costIntro: 'Plano kitchen remodels run from $40,000 to $100,000+. Here is what those ranges buy in different parts of town.',
      scenarios: [
        {
          type: 'Kitchen',
          title: 'Kitchen remodel, existing footprint',
          range: '$40,000 – $60,000',
          timeline: '6–8 weeks',
          detail: 'Custom cabinetry, quartz countertops, new backsplash, lighting, and fixtures — with plumbing and electrical staying roughly in place. The most common project in East Plano and the 1970s–90s neighborhoods.',
        },
        {
          type: 'Kitchen',
          title: 'Kitchen with layout changes',
          range: '$60,000 – $85,000',
          timeline: '8–10 weeks',
          detail: 'Wall removal, an island with seating, or a reworked work triangle. Structural work and City of Plano permitting included. Popular in West Plano and Legacy open floor plans.',
        },
        {
          type: 'Kitchen',
          title: 'Premium full-custom kitchen',
          range: '$85,000 – $100,000+',
          timeline: '10–12 weeks',
          detail: 'Full custom cabinetry, premium stone like quartzite or marble, integrated appliances, and specialty features such as butler pantries or built-in coffee stations.',
        },
      ],
      costNote: 'Looking for bathroom pricing too? See our <a href="/cost-guides/" class="text-accent hover:text-accent-light underline">full kitchen &amp; bathroom cost guide</a> or our <a href="/plano-bathroom-remodeling/" class="text-accent hover:text-accent-light underline">Plano bathroom remodeling</a> page.',

      localHeading: 'Kitchen Remodeling by Plano Neighborhood',
      localIntro: 'Every Plano neighborhood has its own building era, layout, and HOA rules. We tailor the scope to your home — not a one-size-fits-all plan.',
      localItems: [
        { title: 'East Plano (1970s–80s)', text: 'Galley kitchens with original laminate and dated lighting. We open up the work triangle, add islands where space allows, and swap every finish — often keeping plumbing in place to protect the budget.' },
        { title: 'West Plano, Legacy & Whiffletree', text: 'Open floor plans with builder-standard cabinets. Large islands with seating, butler pantries, and premium appliance packages are the most-requested upgrades.' },
        { title: 'Downtown & Historic District', text: 'Older homes need a careful hand. We modernize function while preserving the character that makes these properties special — including historic district coordination.' },
        { title: 'Willow Bend & Lakeside on Preston', text: 'Custom and semi-custom homes on generous lots. These kitchens reward full-custom cabinetry, premium stone, and integrated appliances.' },
        { title: 'Townhomes & Condos (Austin Ranch)', text: 'Compact footprints and HOA rules. We design for space efficiency, coordinate approvals, and deliver kitchens that feel far larger than their square footage.' },
        { title: 'Russell Creek, Gleneagles & Los Rios', text: 'Established neighborhoods spanning multiple eras. We match the scope and style to your home’s architecture and your goals.' },
      ],

      processHeading: 'The Plano Kitchen Remodeling Process',
      processIntro: 'A proven design-build process, from first call to final walkthrough. See the full detail on our <a href="/our-process/" class="text-accent hover:text-accent-light underline">our process</a> page.',
      processSteps: [
        { title: 'Free Consultation', text: 'We visit your kitchen, measure, and give honest advice on scope, timeline, and budget.' },
        { title: 'Design & Renderings', text: 'Our in-house designer creates 3D renderings and selects materials with you.' },
        { title: 'Permits & Selections', text: 'We file with the City of Plano and lock in cabinets, stone, and appliances.' },
        { title: 'Construction', text: 'Demo through finishing, with a clean site and a single point of contact.' },
        { title: 'Walkthrough & Warranty', text: 'We review every detail together — then back the work with a 2-year warranty.' },
      ],

      faqHeading: 'Kitchen Remodeling in Plano: FAQ',
      faqIntro: 'The questions Plano homeowners ask us most before starting a kitchen remodel.',
      faqs: [
        {
          q: 'Do you remodel kitchens in East Plano’s older homes?',
          a: 'Yes. East Plano’s 1970s–80s neighborhoods are some of our most common kitchen projects. We open up galley layouts, add islands where the footprint allows, and upgrade finishes — often keeping plumbing and electrical in place to protect the budget. Every project is still a full-scope remodel with custom cabinetry and premium materials.',
        },
        {
          q: 'Which Plano neighborhoods do you serve for kitchen remodels?',
          a: 'We remodel kitchens across all of Plano: West Plano, Legacy, and Whiffletree; Willow Bend and Lakeside on Preston; East Plano; the Downtown and Historic District; and communities like Russell Creek, Gleneagles, Los Rios, and Austin Ranch townhomes. If you are in Plano, we can help.',
        },
        {
          q: 'How does the City of Plano permit process work for a kitchen remodel?',
          a: 'Most kitchen remodels need permits for electrical, plumbing, and structural changes. We prepare and file everything with the City of Plano Building Inspections, schedule inspections, and handle any re-inspections — so you never deal with the paperwork. Typical permit lead time is 1–2 weeks.',
        },
        {
          q: 'How much does a kitchen remodel cost in Plano?',
          a: 'Plano kitchen remodels run from $40,000 to $100,000+. Within that range, keeping your existing footprint costs the least, layout changes (wall removal, new island) add $20,000 or more, and premium full-custom kitchens with quartzite or marble sit at the top. See our <a href="/cost-guides/" class="text-accent hover:text-accent-light underline">kitchen remodel cost guide</a> for the full breakdown.',
        },
        {
          q: 'Do you handle HOA approvals for Plano kitchen remodels?',
          a: 'Yes. Neighborhoods like Willow Bend, Russell Creek, and Austin Ranch have HOA guidelines. We coordinate the required approvals, so your project stays compliant from design through final walkthrough.',
        },
      ],

      relatedGuides: [
        { title: 'Kitchen remodel timelines in Plano', href: '/blog/how-long-does-a-kitchen-remodel-take-plano/' },
        { title: 'Quartz vs. granite countertops', href: '/blog/quartz-vs-granite-countertops-plano-kitchens/' },
        { title: 'Permits & HOA approvals', href: '/blog/kitchen-remodel-permits-and-hoa-plano/' },
        { title: 'Kitchen & bathroom cost guides', href: '/cost-guides/' },
      ],
    },
  },
  {
    slug: 'plano-bathroom-remodeling',
    canonical: `${siteUrl}/plano-bathroom-remodeling/`,
    title: 'Plano Bathroom Remodeling | Custom Bathrooms in Plano, TX',
    description: 'Plano bathroom remodeling built for Plano homes — walk-in showers, garden tub conversions, double vanities, and high-end master baths. $20,000–$40,000, master baths to $75,000. Free estimate: (214) 449-5922.',
    serviceName: 'Plano Bathroom Remodeling',
    serviceDescription: 'Custom bathroom remodeling across Plano, TX — garden tub conversions, walk-in showers, double vanities, and high-end master baths. Bathrooms $20,000–$40,000, master baths to $75,000. A Millwood Remodeling company.',
    serviceType: 'Bathroom Remodeling',
    cityName: 'Plano',
    cityWiki: 'https://en.wikipedia.org/wiki/Plano,_Texas',
    priceRange: '$20,000 – $40,000',
    parentName: 'Bathroom Remodeling',
    parentUrl: '/bathroom-remodeling/',
    breadcrumbName: 'Plano Bathroom Remodeling',
    content: {
      heroTitle: 'Plano Bathroom Remodeling',
      heroSubtitle: 'Turn that never-used garden tub into a walk-in shower you will use every day. We remodel Plano bathrooms — from guest baths to high-end master suites — with custom tile, premium fixtures, and lasting waterproofing.',
      ctaText: 'Get Your Free Bathroom Estimate',
      ctaHref: '/contact/',
      secondaryText: 'See Bathroom Costs',
      secondaryHref: '/cost-guides/',

      introHeading: 'Bathrooms Built for the Way Plano Lives',
      intro: [
        'Plano master baths tell a familiar story. Homes from the 1980s through the 2000s were built with separate tub-and-shower zones and garden tubs that rarely get used — while West Plano and Legacy homes often shipped with builder-standard finishes that leave value on the table. We remodel both, and everything in between.',
        'Our most requested Plano project is the garden tub conversion: turning that unused tub into a spacious walk-in shower with bench seating, a linear drain, and frameless glass. We also build double vanities, heated floors, custom tile, and high-end master baths — always with proper waterproofing and ventilation for North Texas humidity.',
        'Every project is a full-scope bathroom remodel with City of Plano permitting, itemized pricing, and our 2-year workmanship warranty.',
      ],
      introLinks: [
        { label: 'Bathroom Remodeling Services', href: '/bathroom-remodeling/' },
        { label: 'Bathroom Cost Guide', href: '/cost-guides/' },
        { label: 'Our Process', href: '/our-process/' },
      ],

      costHeading: 'Bathroom Remodel Costs in Plano, TX',
      costIntro: 'Bathroom remodels in Plano typically run from $20,000 to $40,000, with high-end master baths up to $75,000. Here is what those ranges buy.',
      scenarios: [
        {
          type: 'Bathroom',
          title: 'Full bathroom remodel',
          range: '$20,000 – $30,000',
          timeline: '4–6 weeks',
          detail: 'A complete guest or secondary bath: new vanity, walk-in shower or tub/shower, tile, toilet, lighting, and fixtures. A common pre-sale update across Plano.',
        },
        {
          type: 'Bathroom',
          title: 'Master bath remodel',
          range: '$30,000 – $50,000',
          timeline: '6–8 weeks',
          detail: 'Garden tub conversion to a walk-in shower, double vanity, custom tile, and heated floors. Layout changes add permitting and cost.',
        },
        {
          type: 'Bathroom',
          title: 'High-end master bath',
          range: 'Up to $75,000',
          timeline: '8+ weeks',
          detail: 'Premium stone, curbless shower with linear drain, frameless glass, freestanding tub, and a full fixture upgrade — the top of our range.',
        },
      ],
      costNote: 'Looking for kitchen pricing too? See our <a href="/cost-guides/" class="text-accent hover:text-accent-light underline">full kitchen &amp; bathroom cost guide</a> or our <a href="/plano-kitchen-remodeling/" class="text-accent hover:text-accent-light underline">Plano kitchen remodeling</a> page.',

      localHeading: 'Bathroom Remodeling by Plano Neighborhood',
      localIntro: 'Plano’s housing eras bring different bathroom layouts and challenges. We tailor every remodel to your home.',
      localItems: [
        { title: 'East Plano (1980s–2000s)', text: 'Master baths with garden tubs and dated tile. Converting the tub to a walk-in shower is the single highest-impact update we do here.' },
        { title: 'West Plano, Legacy & Whiffletree', text: 'Larger master suites with separate tub and shower zones. We reimagine them with double vanities, premium tile, and heated floors.' },
        { title: 'Downtown & Historic District', text: 'Smaller footprints in older homes. We modernize function with space-efficient layouts and character-preserving finishes.' },
        { title: 'Willow Bend & Lakeside on Preston', text: 'Custom homes where high-end materials shine — slab stone, curbless showers, and full fixture packages.' },
        { title: 'Townhomes & Condos (Austin Ranch)', text: 'Compact bathrooms with HOA rules. We design for space efficiency and coordinate all approvals.' },
        { title: 'Russell Creek, Gleneagles & Los Rios', text: 'A mix of eras. Whether it is a guest bath refresh or a full master redo, we match the scope to the home.' },
      ],

      processHeading: 'The Plano Bathroom Remodeling Process',
      processIntro: 'A proven design-build process, from first call to final walkthrough. See the full detail on our <a href="/our-process/" class="text-accent hover:text-accent-light underline">our process</a> page.',
      processSteps: [
        { title: 'Free Consultation', text: 'We visit your bathroom, assess the space, and give honest advice on scope and budget.' },
        { title: 'Design & Material Selection', text: '3D renderings plus tile, fixture, and vanity selections with our in-house designer.' },
        { title: 'Permits & Prep', text: 'We file with the City of Plano and protect your home before demolition.' },
        { title: 'Construction', text: 'Waterproofing, tile, plumbing, and fixtures installed by our crew.' },
        { title: 'Walkthrough & Warranty', text: 'We review every detail together — then back the work with a 2-year warranty.' },
      ],

      faqHeading: 'Bathroom Remodeling in Plano: FAQ',
      faqIntro: 'The questions Plano homeowners ask us most before starting a bathroom remodel.',
      faqs: [
        {
          q: 'Should I convert my Plano garden tub into a walk-in shower?',
          a: 'For most Plano homeowners, yes. Many master baths built in the 1980s–2000s have garden tubs that go unused. Converting that space into a walk-in shower with bench seating, a linear drain, and frameless glass gives you a bathroom you will actually use every day — and it is one of our most requested projects.',
        },
        {
          q: 'Which Plano neighborhoods do you serve for bathroom remodels?',
          a: 'We remodel bathrooms across all of Plano: West Plano, Legacy, and Whiffletree; Willow Bend and Lakeside on Preston; East Plano; the Downtown and Historic District; and communities like Russell Creek, Gleneagles, Los Rios, and Austin Ranch townhomes.',
        },
        {
          q: 'Do I need a permit for a bathroom remodel in Plano?',
          a: 'Permits are required in Plano for most bathroom remodels that involve electrical, plumbing, or structural changes. We handle all applications and inspections with the City of Plano Building Inspections department on your behalf.',
        },
        {
          q: 'How much does a bathroom remodel cost in Plano?',
          a: 'Bathroom remodels in Plano typically range from $20,000 to $40,000, and high-end full master baths run up to $75,000. We do not take on powder-room-only or sub-$20,000 projects — our remodels are complete, full-scope jobs. See our <a href="/cost-guides/" class="text-accent hover:text-accent-light underline">bathroom remodel cost guide</a> for the full breakdown.',
        },
        {
          q: 'Can you remodel a Plano bathroom without moving the plumbing?',
          a: 'Yes. Many Plano homeowners keep existing plumbing locations to save on cost and timeline. We still deliver a completely transformed bathroom with new tile, vanity, fixtures, and lighting — often including a garden-tub-to-shower conversion within the same footprint.',
        },
      ],

      relatedGuides: [
        { title: 'Garden tub to walk-in shower conversions', href: '/blog/garden-tub-to-walk-in-shower-plano/' },
        { title: 'Bathroom remodel costs in Plano', href: '/blog/how-much-does-a-bathroom-remodel-cost-in-plano/' },
        { title: 'Permits & HOA approvals', href: '/blog/kitchen-remodel-permits-and-hoa-plano/' },
        { title: 'Kitchen & bathroom cost guides', href: '/cost-guides/' },
      ],
    },
  },
];
