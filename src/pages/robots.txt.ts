import type { APIRoute } from 'astro';
import { getSiteConfig, siteUrl } from '../data/site';

/**
 * City-aware robots.txt.
 * Built per SITE_CITY so each domain advertises its own sitemap-index.xml.
 */
export const GET: APIRoute = () => {
  const config = getSiteConfig();
  const sitemap = siteUrl('/sitemap-index.xml', config);

  const body = [
    'User-agent: *',
    'Allow: /',
    `Sitemap: ${sitemap}`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
