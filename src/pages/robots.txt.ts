import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  if (!site) {
    throw new Error(
      'Astro `site` belum dikonfigurasi di astro.config.mjs — robots.txt tidak bisa dibuat.'
    );
  }

  const sitemapUrl = new URL('sitemap-index.xml', site).toString();

  const body = process.env.VERCEL_ENV === 'preview'
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain' },
  });
};
