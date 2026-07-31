import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

/**
 * Multi-domain builds:
 *   SITE_CITY=frisco npm run build
 *
 * site URL is resolved from the city registry when SITE_CITY is set.
 * Default remains Plano production host so current deploys stay unchanged.
 */
const CITY_SITES = {
  plano: 'https://planohomeremodel.com',
  frisco: 'https://friscohomeremodel.com',
  richardson: 'https://richardsonhomeremodel.com',
  grapevine: 'https://grapevinehomeremodel.com',
  southlake: 'https://southlakehomeremodel.com',
  highlandpark: 'https://highlandparkhomeremodel.com',
  dallas: 'https://dallasremodelanddesign.com',
};

const siteCity = (process.env.SITE_CITY || 'plano').toLowerCase().trim();
const site = CITY_SITES[siteCity] || CITY_SITES.plano;

if (process.env.SITE_CITY && !CITY_SITES[siteCity]) {
  console.warn(
    `[astro.config] Unknown SITE_CITY="${process.env.SITE_CITY}". Falling back to ${site}`,
  );
}

/** Other cities' local deep pages only exist as redirect stubs — exclude from sitemap. */
const redirectOnlyLocalPaths = new Set(
  Object.keys(CITY_SITES)
    .filter((id) => id !== siteCity)
    .flatMap((id) => [
      `/${id}-kitchen-remodeling/`,
      `/${id}-bathroom-remodeling/`,
    ]),
);

export default defineConfig({
  site,
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
    define: {
      // Expose to app code that cannot read process.env in all contexts
      'import.meta.env.SITE_CITY': JSON.stringify(siteCity),
    },
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      filter: (page) => {
        let pathname = '/';
        try {
          pathname = new URL(page).pathname;
        } catch {
          return true;
        }
        // Never list 404
        if (pathname === '/404/' || pathname.endsWith('/404/')) return false;
        // Drop redirect-only cross-city local deep pages
        if (redirectOnlyLocalPaths.has(pathname)) return false;
        return true;
      },
    }),
  ],
});
