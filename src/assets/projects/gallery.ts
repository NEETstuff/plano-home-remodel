// ---------------------------------------------------------------------------
// Project photo gallery — ready-to-use structure
//
// HOW TO ADD REAL PHOTOS (no other code changes required):
//   1. Drop your photos into this folder: src/assets/projects/
//   2. Name each file so its filename stem matches the `photo` value of the
//      project you want it to appear on. Supported extensions: .jpg, .jpeg,
//      .png, .webp, .avif.
//
//      Example: the project below with photo: 'kitchen-white-shaker-plano'
//      is picked up automatically from a file named:
//          kitchen-white-shaker-plano.jpg   (or .webp / .png / etc.)
//   3. Rebuild. Astro optimizes each image (resized to 800x600 cover crop,
//      compressed, hashed) and the placeholder swaps for the real photo.
//
// RECOMMENDED: export source photos at 4:3 (1200x900 or larger) for the
// sharpest results at the 800x600 grid size used on the site.
// ---------------------------------------------------------------------------

import type { ImageMetadata } from 'astro';

export interface GalleryProject {
  /** Filename stem (no extension) in src/assets/projects/ for this project's photo. */
  photo: string;
  /** Unique, descriptive alt text — used verbatim as the image's alt attribute. */
  alt: string;
  /** Short human-readable caption shown under the photo. */
  caption: string;
}

// Eagerly loads every photo dropped into src/assets/projects/. Returns an
// empty object when no photos exist yet, so the build stays clean until real
// files are added.
const images = import.meta.glob(
  '/src/assets/projects/*.{avif,webp,jpg,jpeg,png}',
  { import: 'default', eager: true }
) as Record<string, ImageMetadata>;

export function getProjectPhoto(stem: string): ImageMetadata | undefined {
  for (const path of Object.keys(images)) {
    const file = path.split('/').pop() ?? '';
    if (file.split('.')[0] === stem) return images[path];
  }
  return undefined;
}

// Homepage — "Our Recent Work in Plano & North Dallas"
export const homepageProjects: GalleryProject[] = [
  {
    photo: 'kitchen-white-shaker-plano',
    alt: 'Custom kitchen remodel in Plano, TX with white shaker cabinets and quartz island',
    caption: 'Custom white kitchen remodel in Plano, TX with quartz island and shaker cabinets',
  },
  {
    photo: 'bathroom-master-curbless-frisco',
    alt: 'Master bathroom remodel in Frisco, TX with curbless walk-in shower and dual vanity',
    caption: 'Master bathroom remodel in Frisco, TX with curbless walk-in shower and dual vanity',
  },
  {
    photo: 'kitchen-open-concept-allen',
    alt: 'Open-concept kitchen renovation in Allen, TX with large island and custom range hood',
    caption: 'Open-concept kitchen renovation in Allen, TX with large island and custom hood',
  },
];

// Kitchen Remodeling — "Plano Kitchen Remodeling Projects"
export const kitchenProjects: GalleryProject[] = [
  {
    photo: 'kitchen-shaker-quartz-plano',
    alt: 'White shaker kitchen cabinets with quartz countertops and marble-look backsplash in Plano, TX',
    caption: 'Custom shaker cabinets with quartz countertops and marble-look backsplash in Plano, TX',
  },
  {
    photo: 'kitchen-island-pendants-frisco',
    alt: 'Kitchen island with seating, under-cabinet lighting, and pendant fixtures in a Frisco, TX remodel',
    caption: 'Kitchen island with seating, under-cabinet lighting, and modern pendant fixtures in Frisco, TX',
  },
  {
    photo: 'kitchen-open-concept-mckinney',
    alt: 'Open-concept kitchen remodel in McKinney, TX with custom range hood and breakfast bar',
    caption: 'Open-concept kitchen remodel with custom range hood and breakfast bar in McKinney, TX',
  },
];

// Bathroom Remodeling — "Plano Bathroom Remodeling Projects"
export const bathroomProjects: GalleryProject[] = [
  {
    photo: 'bathroom-master-dual-vanity-plano',
    alt: 'Master bathroom remodel in Plano, TX with dual vanity, freestanding tub, and frameless shower',
    caption: 'Master bathroom with dual vanity, freestanding tub, and frameless shower in Plano, TX',
  },
  {
    photo: 'bathroom-curbless-shower-frisco',
    alt: 'Curbless walk-in shower with linear drain and niche shelving in a Frisco, TX master bath',
    caption: 'Curbless walk-in shower with linear drain and niche shelving in Frisco, TX master bath',
  },
  {
    photo: 'bathroom-powder-floating-vanity-allen',
    alt: 'Powder room remodel in Allen, TX with floating vanity, statement mirror, and matte black fixtures',
    caption: 'Powder room update with floating vanity, statement mirror, and matte black fixtures in Allen, TX',
  },
];
