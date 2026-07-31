export interface CityData {
  slug: string;
  name: string;
  wiki: string;
  title: string;
  description: string;
  heroSubtitle: string;
  introHeading: string;
  intro: string[];
  notesHeading: string;
  notes: { title: string; text: string }[];
  neighborhoods: string;
  whyHeading: string;
  why: { title: string; text: string }[];
}

export const cities: CityData[] = [
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
      { title: 'Builder-Standard Finishes', text: 'Many Frisco homes were built by volume builders. Upgrading cabinets, countertops, and fixtures transforms the feel of the whole house.' },
      { title: 'Open Floor Plans', text: 'Kitchens often open to the living areas. Islands, pantries, and clean sightlines are central to Frisco remodels.' },
      { title: 'HOAs & Permits', text: 'Neighborhoods like Stonebriar, Starwood, and Phillips Creek Ranch have HOA rules. We coordinate them and handle City of Frisco permits for you.' },
    ],
    neighborhoods: 'Stonebriar, The Trails, Plantation, Phillips Creek Ranch, Starwood, Lawler Park',
    whyHeading: 'Why Frisco Homeowners Choose Us',
    why: [
      { title: 'In-House Design', text: 'Our designer works directly with you on 3D renderings, so you see exactly how your new kitchen or bathroom will look before construction starts.' },
      { title: 'Permits Handled for You', text: 'We prepare and file everything with the City of Frisco and coordinate with your HOA — no paperwork headaches on your end.' },
      { title: 'Backed by Millwood Remodeling', text: 'As a Millwood Remodeling company, we bring 15+ years of experience, proven processes, and a 2-year workmanship warranty to every Frisco project.' },
      { title: 'Free In-Home Consultation', text: 'We come to your home, listen to your goals, and give you honest advice and a clear estimate. No pressure, no obligation.' },
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
      { title: '1990s–2000s Originals', text: 'Kitchens and master baths across Allen still carry their original finishes. Swapping countertops, cabinets, and tile is the highest-impact update.' },
      { title: 'Garden Tub Conversions', text: 'Many Allen master baths have seldom-used garden tubs. We convert them into spacious walk-in showers with bench seating.' },
      { title: 'Family-Focused Layouts', text: 'Allen kitchens typically anchor family living areas. Islands with seating and efficient storage are the most requested features.' },
    ],
    neighborhoods: 'Twin Creeks, Villages of Allen, Waterford, Timber Creek, Greenville Corridor',
    whyHeading: 'Why Allen Homeowners Choose Us',
    why: [
      { title: 'In-House Design', text: 'From cabinet selection to tile layout, our designer guides you with 3D renderings so there are no surprises before work begins.' },
      { title: 'Permits Handled for You', text: 'We prepare and file everything with the City of Allen, so your remodel is compliant and stress-free.' },
      { title: 'Backed by Millwood Remodeling', text: 'As a Millwood Remodeling company, we bring 15+ years of experience, proven processes, and a 2-year workmanship warranty to every Allen project.' },
      { title: 'Free In-Home Consultation', text: 'We visit your home, walk through your goals, and provide a clear, honest estimate. No pressure, no obligation.' },
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
      { title: 'Historic District Care', text: 'Homes near Historic Downtown may fall under preservation guidelines. We work within them to modernize while protecting character.' },
      { title: 'Modern New Builds', text: 'Craig Ranch and Adriatica homes often benefit from larger islands, upgraded materials, and spa-style master baths.' },
      { title: 'Custom Home Details', text: 'Stonebridge and other custom neighborhoods reward thoughtful, tailored designs — not one-size-fits-all solutions.' },
    ],
    neighborhoods: 'Historic Downtown, Craig Ranch, Stonebridge, Adriatica, Eldorado Heights',
    whyHeading: 'Why McKinney Homeowners Choose Us',
    why: [
      { title: 'In-House Design', text: 'Our designer creates 3D renderings tailored to your home and your style, so you approve the plan before we build.' },
      { title: 'Permits & Preservation', text: 'We handle City of McKinney permits and work respectfully within historic district guidelines.' },
      { title: 'Backed by Millwood Remodeling', text: 'As a Millwood Remodeling company, we bring 15+ years of experience, proven processes, and a 2-year workmanship warranty to every McKinney project.' },
      { title: 'Free In-Home Consultation', text: 'We come to you, listen to your goals, and provide honest advice and a clear estimate. No pressure, no obligation.' },
    ],
  },
];
