import sharp from 'sharp';

const WIDTH = 1200;
const HEIGHT = 630;

const source = 'src/assets/projects/kitchen-project-1-photo-3.webp';

const svg = `
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="scrim" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0.45" stop-color="#1B2D45" stop-opacity="0" />
      <stop offset="1" stop-color="#1B2D45" stop-opacity="0.88" />
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="${WIDTH}" height="${HEIGHT}" fill="url(#scrim)" />
  <rect x="72" y="452" width="72" height="6" fill="#C9A84C" />
  <text x="72" y="522" font-family="Georgia, 'Times New Roman', serif" font-size="58" font-weight="700" fill="#FFFFFF">Plano Home Remodel</text>
  <text x="72" y="584" font-family="Helvetica, Arial, sans-serif" font-size="30" font-weight="500" fill="#DBC46A" letter-spacing="2">KITCHEN &amp; BATHROOM REMODELING</text>
</svg>
`;

const base = await sharp(source)
  .resize(WIDTH, HEIGHT, { fit: 'cover', position: 'centre' })
  .toBuffer();

await sharp(base)
  .composite([{ input: Buffer.from(svg), left: 0, top: 0 }])
  .jpeg({ quality: 90 })
  .toFile('public/og-image.jpg');

console.log('public/og-image.jpg written');
