// Optimizes the source photos in public/assets/ into web-ready WebP files in
// src/assets/projects/, preserving aspect ratio (no cropping) and baking in any
// EXIF orientation.
//
// Source naming convention (in public/assets/<category>/):
//   <project>_<category>_<order>.jpg     e.g. 2_kitchen_3.jpg
//
// Output naming convention (in src/assets/projects/):
//   <category>-project-<project>-photo-<order>.webp
//
// Run: node scripts/optimize-photos.mjs
import { readdir, mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const SRC = 'public/assets';
const DEST = 'src/assets/projects';
const MAX_EDGE = 1600;

// Known filename typos and shorthand in the source set -> canonical category.
const CATEGORY_FIX = { kitcheb: 'kitchen', bath: 'bathroom', floor: 'flooring' };
// Categories that came from a filename typo, where the photo is a duplicate
// order of an existing photo and gets a letter suffix to stay unique.
const TYPO_ORDER_SUFFIX = { kitcheb: true };

async function main() {
  await mkdir(DEST, { recursive: true });
  const results = [];

  const categories = [];
  for (const name of await readdir(SRC)) {
    if ((await stat(path.join(SRC, name))).isDirectory()) categories.push(name);
  }
  for (const category of categories) {
    const dir = path.join(SRC, category);
    const files = (await readdir(dir)).filter((f) => /\.jpe?g$/i.test(f));
    for (const file of files) {
      const match = file.match(/^(\d+)_([a-z]+)_(\d+)\.jpe?g$/i);
      if (!match) {
        console.warn(`SKIP (unrecognized name): ${category}/${file}`);
        continue;
      }
      const project = match[1];
      let cat = match[2].toLowerCase();
      let order = match[3];
      if (CATEGORY_FIX[cat]) {
        if (TYPO_ORDER_SUFFIX[cat]) order = `${order}b`;
        cat = CATEGORY_FIX[cat];
      }
      const stem = `${cat}-project-${project}-photo-${order}`;
      const out = path.join(DEST, `${stem}.webp`);
      const meta = await sharp(path.join(dir, file))
        .autoOrient()
        .resize(MAX_EDGE, MAX_EDGE, { fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 82 })
        .toFile(out);
      results.push({ stem, meta });
    }
  }

  results.sort((a, b) => a.stem.localeCompare(b.stem));
  for (const { stem, meta } of results) {
    const kb = (meta.size / 1024).toFixed(1);
    console.log(`${String(meta.width).padStart(4)}x${String(meta.height).padStart(4)}  ${String(kb).padStart(7)}KB  ${stem}.webp`);
  }
  console.log(`\n${results.length} images processed -> ${DEST}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
