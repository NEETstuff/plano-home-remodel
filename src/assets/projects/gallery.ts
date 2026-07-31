// ---------------------------------------------------------------------------
// Project photo gallery — grouped by project, supports any number of images
// with mixed landscape/portrait orientation.
//
// HOW TO ADD PHOTOS (no other code changes required):
//   1. Run: node scripts/optimize-photos.mjs
//      This converts the source photos in public/assets/<category>/ into
//      optimized WebP files here using the naming pattern
//      <category>-project-<project>-photo-<order>.webp
//   2. Add an entry to the matching group below (or to homeHighlights /
//      supportingProjects) with the file's stem as `src`.
//   3. Rebuild. Astro optimizes and serves each image responsively, preserving
//      the original aspect ratio (no cropping).
//
// Alt text is kept deliberately generic (category + project + photo number) —
// no invented features, finishes, or cities.
// ---------------------------------------------------------------------------

import type { ImageMetadata } from 'astro';

export interface GalleryPhoto {
  /** Filename stem (no extension) of the photo in src/assets/projects/. */
  src: string;
  /** Alt text — used verbatim as the image's alt attribute. */
  alt: string;
}

export interface GalleryProject {
  /** Main heading shown beside the numbered badge. */
  title: string;
  /** Short, truthful caption for the project block. Category-level only —
   * never claims a specific city, budget, or finish not verifiable from the
   * photos themselves. */
  summary?: string;
  photos: GalleryPhoto[];
}

// Eagerly loads every photo in src/assets/projects/. Returns an empty object
// when no photos exist yet, so the build stays clean until files are added.
const images = import.meta.glob(
  '/src/assets/projects/*.{avif,webp,jpg,jpeg,png}',
  { import: 'default', eager: true }
) as Record<string, ImageMetadata>;

export function getPhoto(stem: string): ImageMetadata | undefined {
  for (const path of Object.keys(images)) {
    const file = path.split('/').pop() ?? '';
    if (file.split('.')[0] === stem) return images[path];
  }
  return undefined;
}

const CATEGORY_TITLES: Record<string, string> = {
  kitchen: 'Kitchen remodel',
  bathroom: 'Bathroom remodel',
  flooring: 'Flooring project',
  pantry: 'Pantry project',
  laundry: 'Laundry room project',
  dining: 'Dining area project',
  office: 'Home office project',
};

function photo(category: string, project: number, order: string | number, total: number): GalleryPhoto {
  const title = CATEGORY_TITLES[category] ?? category;
  const multiple = total > 1;
  const label = multiple ? `photo ${order} of ${total}` : 'photo';
  return {
    src: `${category}-project-${project}-photo-${order}`,
    alt: `${title} — project ${project}, ${label}`,
  };
}

// Kitchen Remodeling page — all kitchen photos, grouped by project.
export const kitchenProjects: GalleryProject[] = [
  {
    title: 'Kitchen Remodeling',
    summary: 'A complete kitchen remodel — from demolition through final finishes, delivered as a single full-scope project.',
    photos: [1, 2, 3, 4, 5].map((n) => photo('kitchen', 1, n, 5)),
  },
  {
    title: 'Kitchen Remodeling',
    summary: 'Custom cabinetry, countertops, backsplash, lighting, and flooring brought together in one cohesive design.',
    photos: [1, 2, 3, 4, 5, '4b'].map((n) => photo('kitchen', 2, n, 6)),
  },
  {
    title: 'Kitchen Remodeling',
    summary: 'A kitchen project showing the quality of finish across cabinetry, stone, and tile.',
    photos: [1, 2].map((n) => photo('kitchen', 3, n, 2)),
  },
];

// Bathroom Remodeling page — all bathroom photos, grouped by project.
export const bathroomProjects: GalleryProject[] = [
  {
    title: 'Bathroom Remodeling',
    summary: 'A full bathroom remodel with custom tile, a new vanity, and modern fixtures.',
    photos: [1, 2].map((n) => photo('bathroom', 1, n, 2)),
  },
  {
    title: 'Bathroom Remodeling',
    summary: 'A walk-in shower remodel — tile, waterproofing, and fixtures built to last in North Texas.',
    photos: [photo('bathroom', 2, 1, 1)],
  },
  {
    title: 'Bathroom Remodeling',
    summary: 'A bathroom update featuring a new vanity, tile, and lighting.',
    photos: [photo('bathroom', 3, 1, 1)],
  },
  {
    title: 'Bathroom Remodeling',
    summary: 'A complete bathroom transformation with modern fixtures and finishes.',
    photos: [1, 2].map((n) => photo('bathroom', 4, n, 2)),
  },
  {
    title: 'Bathroom Remodeling',
    summary: 'Custom tile work and premium fixtures from a full-scope bathroom remodel.',
    photos: [1, 2].map((n) => photo('bathroom', 5, n, 2)),
  },
  {
    title: 'Bathroom Remodeling',
    summary: 'The finished quality of tile, fixtures, and cabinetry from a full bathroom remodel.',
    photos: [1, 2].map((n) => photo('bathroom', 6, n, 2)),
  },
];

// Homepage — strongest mixed kitchen + bathroom highlights.
export const homeHighlights: GalleryProject[] = [
  {
    title: 'Kitchen Remodeling',
    summary: 'Custom cabinetry, quartz countertops, backsplash, and lighting — the full scope of a Plano kitchen remodel.',
    photos: [photo('kitchen', 1, 3, 5), photo('kitchen', 1, 4, 5)],
  },
  {
    title: 'Kitchen Remodeling',
    summary: 'A kitchen project showing the quality of finish across cabinetry, stone, and tile.',
    photos: [photo('kitchen', 2, 1, 6)],
  },
  {
    title: 'Kitchen Remodeling',
    summary: 'Finished kitchen details from a full-scope remodel.',
    photos: [photo('kitchen', 3, 1, 2)],
  },
  {
    title: 'Bathroom Remodeling',
    summary: 'A full bathroom remodel with custom tile, a new vanity, and modern fixtures.',
    photos: [photo('bathroom', 1, 1, 2)],
  },
  {
    title: 'Bathroom Remodeling',
    summary: 'A complete bathroom transformation with modern fixtures and finishes.',
    photos: [photo('bathroom', 4, 1, 2)],
  },
  {
    title: 'Bathroom Remodeling',
    summary: 'The finished quality of tile, fixtures, and cabinetry from a full bathroom remodel.',
    photos: [photo('bathroom', 6, 1, 2)],
  },
];

// Homepage secondary band — flooring, pantry, laundry, dining, office.
export const supportingProjects: GalleryProject[] = [
  { title: 'Flooring', summary: 'New flooring installation as part of a larger home project.', photos: [1, 2].map((n) => photo('flooring', 1, n, 2)) },
  { title: 'Pantry', summary: 'Custom pantry storage and shelving.', photos: [photo('pantry', 1, 1, 1), photo('pantry', 2, 1, 1)] },
  { title: 'Laundry Room', summary: 'A remodeled laundry room with custom cabinetry and fixtures.', photos: [1, 2].map((n) => photo('laundry', 1, n, 2)).concat(photo('laundry', 2, 1, 1)) },
  { title: 'Dining Area', summary: 'A finished dining area from a home remodeling project.', photos: [photo('dining', 1, 1, 1)] },
  { title: 'Home Office', summary: 'A built-out home office space.', photos: [photo('office', 1, 1, 1)] },
];
