/**
 * Real Google customer reviews for Millwood Remodeling
 * (Plano Home Remodel is a Millwood Remodeling company).
 *
 * Source: Google Maps share links, extracted 2026-07-31.
 * Do not invent or embellish fields — only use verified review content.
 */

export type ProjectType = 'kitchen' | 'bathroom' | 'both' | 'unknown';

export interface TestimonialImage {
  /** Public path under /assets/reviews/web/ (optimized WebP; originals remain as .jpg) */
  src: string;
  /** Descriptive alt text from Google when available; otherwise a neutral label */
  alt: string;
}

export interface Testimonial {
  id: string;
  /** Display name (first name + last initial for privacy) */
  name: string;
  /** Full name as shown on Google (for attribution accuracy) */
  nameFull: string;
  rating: 5;
  /** Relative date string as shown on Google at extraction time */
  date: string;
  /** Full review text (verbatim) */
  text: string;
  projectType: ProjectType;
  /** Only project details explicitly stated in the review */
  projectDetails: string[];
  /** Only if the customer or review explicitly stated a location (none of these did) */
  location: string | null;
  /** Primary image for card layouts */
  image: string | null;
  /** All still photos downloaded from the review */
  images: TestimonialImage[];
  /** Whether the Google review also included a video (video file not downloaded) */
  hasVideo: boolean;
  /** Owner reply if present (verbatim) */
  ownerResponse: string | null;
  sourceUrl: string;
  /** Google Business Profile name the review was left on */
  businessName: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'milan-r-gut-renovation',
    name: 'Milan R.',
    nameFull: 'Milan Raj',
    rating: 5,
    date: '7 months ago',
    text: 'Millwood did a tremendous job for my parents! From start to finish, they were a class act. We weren’t easy clients and like any construction project, there were certainly some tough moments which are to be expected. They are a dynamic team that can handle those moments and recover well. We couldn’t be more happy with the outcome and thank Millwood for this most excellent outcome. To remember what this early 90s house looked like before the total gut renovation by Millwood makes us awestruck all over again :)',
    projectType: 'unknown',
    projectDetails: [
      'Total gut renovation',
      'Early 90s house',
      'Photos describe: foyer staircase, open living room and dining area, open concept living room, wet bar / beverage center',
    ],
    location: null,
    image: '/assets/reviews/web/review-01-open-concept-living.webp',
    images: [
      {
        src: '/assets/reviews/web/review-01-foyer-staircase.webp',
        alt: 'Foyer staircase and elegant light fixture',
      },
      {
        src: '/assets/reviews/web/review-01-living-dining.webp',
        alt: 'Open living room and dining area',
      },
      {
        src: '/assets/reviews/web/review-01-open-concept-living.webp',
        alt: 'Open concept living room renovation',
      },
      {
        src: '/assets/reviews/web/review-01-wet-bar.webp',
        alt: 'Wet bar and beverage center',
      },
    ],
    hasVideo: false,
    ownerResponse: null,
    sourceUrl: 'https://share.google/zaiBnFAhWhTZPZlzj',
    businessName: 'Millwood Remodeling',
  },
  {
    id: 'a-park-kitchen',
    name: 'A. Park',
    nameFull: 'A Park',
    rating: 5,
    date: 'a year ago',
    text: 'We worked with the guys at Millwood Remodeling to redo our kitchen, and they were absolutely fantastic. When they came out to do an initial quote, I was in between doing a complete gut vs keeping my cabinets. Other companies would’ve tried convincing me to completely re-do the whole kitchen to make more money, but the guys at Millwood were honest and suggested I keep the current wood cabinets because they were in great condition. We decided to replace all the cabinet pulls and change out the hinges and slide to soft close mechanisms. We also updated the kitchen sink, redid the backsplash and countertops, removed the pony wall and leveled out the countertop, replaced the old under cabinet lights to newer LED lights and also added them to the top of the cabinets.\n\nThe whole process with them was fantastic, they were great at communicating, and one of the team leads stopped by every morning to check in on the progress and give us updates/answer any questions or concerns we had. Esteban did most of the work in our kitchen, and he was absolutely amazing. Everyone that we communicated with and came by to work on our house were all super nice and courteous and did a careful job of cleaning up every day, and being mindful of our house. I would highly recommend them to anyone considering doing any remodeling projects in their homes. They weren’t the cheapest, but you definitely get the quality that you pay for, and we are so glad we went with these guys.\n\nOur next project is redoing the floor tiles and repainting the kitchen, as well as some other updates around the house and we can’t wait to do more projects with them in the future! Thank you Millwood for updating our kitchen!!!',
    projectType: 'kitchen',
    projectDetails: [
      'Kitchen remodel',
      'Kept existing wood cabinets (per contractor recommendation)',
      'New cabinet pulls, soft-close hinges and slides',
      'Updated kitchen sink',
      'New backsplash and countertops',
      'Removed pony wall; leveled countertop',
      'Under-cabinet and top-of-cabinet LED lighting',
      'Team member named: Esteban',
      'Customer planned future: floor tiles, repaint kitchen, other updates',
    ],
    location: null,
    image: '/assets/reviews/web/review-02-kitchen-01.webp',
    images: [
      {
        src: '/assets/reviews/web/review-02-kitchen-01.webp',
        alt: 'Kitchen remodel photo from customer review',
      },
      {
        src: '/assets/reviews/web/review-02-kitchen-02.webp',
        alt: 'Kitchen remodel photo from customer review',
      },
      {
        src: '/assets/reviews/web/review-02-kitchen-03.webp',
        alt: 'Kitchen remodel photo from customer review',
      },
      {
        src: '/assets/reviews/web/review-02-kitchen-04.webp',
        alt: 'Kitchen remodel photo from customer review',
      },
      {
        src: '/assets/reviews/web/review-02-kitchen-05.webp',
        alt: 'Kitchen remodel photo from customer review',
      },
      {
        src: '/assets/reviews/web/review-02-kitchen-06.webp',
        alt: 'Kitchen remodel photo from customer review',
      },
      {
        src: '/assets/reviews/web/review-02-kitchen-video-poster.webp',
        alt: 'Poster frame from customer kitchen review video',
      },
    ],
    hasVideo: true,
    ownerResponse: null,
    sourceUrl: 'https://share.google/ZEK3Xu4jxW7Zh2cOP',
    businessName: 'Millwood Remodeling',
  },
  {
    id: 'jhamar-h-condo',
    name: 'Jhamar H.',
    nameFull: 'Jhamar Hamilton',
    rating: 5,
    date: '2 years ago',
    text: 'I worked with Ryan, Graham, and Ed to help renovate my condo. The following work was done:\n-Install hand rail for the loft\n-Paint and repair walls\n-Replace floors and carpet\n-Rebuild Fireplace and mount tv\n-Run power to the ceiling and install fans in the 2nd bedroom\nThe project took about a month and I couldn’t be happier with the results. The workmanship was spot on and the team was able to adjust the project to my expectations. I highly recommend working with Millwood for home renovation.',
    projectType: 'unknown',
    projectDetails: [
      'Condo renovation',
      'About one month timeline',
      'Loft hand rail install',
      'Paint and wall repair',
      'Floors and carpet replacement',
      'Fireplace rebuild and TV mount',
      'Ceiling power and fans in 2nd bedroom',
      'Team named: Ryan, Graham, Ed',
    ],
    location: null,
    image: '/assets/reviews/web/review-03-condo-01.webp',
    images: [
      {
        src: '/assets/reviews/web/review-03-condo-01.webp',
        alt: 'Condo renovation photo from customer review',
      },
      {
        src: '/assets/reviews/web/review-03-condo-02.webp',
        alt: 'Condo renovation photo from customer review',
      },
      {
        src: '/assets/reviews/web/review-03-condo-03.webp',
        alt: 'Condo renovation photo from customer review',
      },
      {
        src: '/assets/reviews/web/review-03-condo-04.webp',
        alt: 'Condo renovation photo from customer review',
      },
      {
        src: '/assets/reviews/web/review-03-condo-05.webp',
        alt: 'Condo renovation photo from customer review',
      },
      {
        src: '/assets/reviews/web/review-03-condo-06.webp',
        alt: 'Condo renovation photo from customer review',
      },
      {
        src: '/assets/reviews/web/review-03-condo-07.webp',
        alt: 'Condo renovation photo from customer review',
      },
    ],
    hasVideo: false,
    ownerResponse:
      'Hi Jhamar, thanks for being such a great customer! We really enjoyed working with you and we hope you enjoy your new home for many years to come. Sincerely Graham, Ryan, Ed.',
    sourceUrl: 'https://share.google/XQkGXzzgXyk28i8e6',
    businessName: 'Millwood Remodeling',
  },
  {
    id: 'megan-m-master-bath',
    name: 'Megan M.',
    nameFull: 'Megan McKenna',
    rating: 5,
    date: '5 years ago',
    text: 'Millwood Remodeling did an amazing job with our complete master bath remodel! From day one of our remodel, they were very attentive and listened to all of our ideas and made suggestions that in the end far exceeded our expectations! Each day they would come out to review the work that was done and made sure that the process was moving smoothly and timely. We enjoyed that they kept us very involved during the entire process and really made the our experience exciting and enjoyable! We will definitely continue to use them for all of our remodeling projects big or small and highly recommend them to anyone looking to remodel their home!',
    projectType: 'bathroom',
    projectDetails: [
      'Complete master bath remodel',
      'Google review tags (positive): Responsiveness, Punctuality, Quality, Professionalism, Value',
      'Google listed services: Flooring, Remodeling, Drywall installation, Fan installation, Install flooring, Tile work installation, Plumbing fixture installation, Paint indoors, Painting, Waterproofing',
    ],
    location: null,
    image: '/assets/reviews/web/review-04-bathroom-01.webp',
    images: [
      {
        src: '/assets/reviews/web/review-04-bathroom-01.webp',
        alt: 'Master bathroom remodel photo from customer review',
      },
      {
        src: '/assets/reviews/web/review-04-bathroom-02.webp',
        alt: 'Master bathroom remodel photo from customer review',
      },
    ],
    hasVideo: false,
    ownerResponse:
      'Thank you so much, Megan ! We loved working with you and Connor and we believe your new master suite is probably the best we\'ve ever done :)  Best wishes to you both, and we hope you enjoy your new bathroom for many years to come. Graham and Ryan',
    sourceUrl: 'https://share.google/78VwlO9RHFRUdXhSu',
    businessName: 'Millwood Remodeling',
  },
  {
    id: 'richard-j-whole-house',
    name: 'Richard J.',
    nameFull: 'Richard Jackson',
    rating: 5,
    date: '2 years ago',
    text: 'Millwood did a whole house update to our late-60’s home and we couldn’t be happier! The got everything right.  They brought their ideas  and our ideas together and far exceeded our expectations.  The crew showed up every day for a 10-hour day and made fast progress.  Very talented people.  I highly recommend them.',
    projectType: 'unknown',
    projectDetails: [
      'Whole house update',
      'Late-60s home',
      'Crew worked full days (~10 hours) with fast progress',
    ],
    location: null,
    image: '/assets/reviews/web/review-05-whole-home-01.webp',
    images: [
      {
        src: '/assets/reviews/web/review-05-whole-home-01.webp',
        alt: 'Whole-home update photo from customer review',
      },
      {
        src: '/assets/reviews/web/review-05-whole-home-02.webp',
        alt: 'Whole-home update photo from customer review',
      },
      {
        src: '/assets/reviews/web/review-05-whole-home-03.webp',
        alt: 'Whole-home update photo from customer review',
      },
      {
        src: '/assets/reviews/web/review-05-whole-home-04.webp',
        alt: 'Whole-home update photo from customer review',
      },
    ],
    hasVideo: false,
    ownerResponse: null,
    sourceUrl: 'https://share.google/1fQxHNYuArIm79Wtf',
    businessName: 'Millwood Remodeling',
  },
];

/** Helpers for page-specific placement */
export const kitchenTestimonials = testimonials.filter((t) => t.projectType === 'kitchen' || t.projectType === 'both');
export const bathroomTestimonials = testimonials.filter((t) => t.projectType === 'bathroom' || t.projectType === 'both');
export const homepageTestimonials = testimonials; // all five are strong trust proof

/** A. Park (kitchen) + Megan M. (master bath) — preferred for Cost Guides near CTAs */
export const costGuideTestimonials = testimonials.filter(
  (t) => t.id === 'a-park-kitchen' || t.id === 'megan-m-master-bath',
);
