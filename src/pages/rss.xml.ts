import type { APIRoute } from 'astro';
import { getAllArticles } from '../lib/articles';
import { getCanonicalUrl } from '../lib/seo';
import { siteConfig, seoConfig } from '../config';

// RSS 2.0 dibuat manual (bukan paket @astrojs/rss) — sesuai arahan sprint untuk tidak
// menambahkan dependency berat. Formatnya stabil & sederhana untuk ~5 item, mengikuti pola
// endpoint tangan yang sudah ada di src/pages/robots.txt.ts.
function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export const GET: APIRoute = async ({ site }) => {
  if (!site) {
    throw new Error('Astro `site` belum dikonfigurasi di astro.config.mjs — rss.xml tidak bisa dibuat.');
  }

  const articles = await getAllArticles();
  const siteUrl = getCanonicalUrl(site, '/');
  const feedUrl = getCanonicalUrl(site, '/rss.xml');

  const items = articles
    .map((article) => {
      const url = getCanonicalUrl(site, `/articles/${article.id}`);
      return `    <item>
      <title>${escapeXml(article.data.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(article.data.description)}</description>
      <category>${escapeXml(article.data.category)}</category>
      <pubDate>${article.data.publishDate.toUTCString()}</pubDate>
    </item>`;
    })
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(siteConfig.siteName)}</title>
    <link>${siteUrl}</link>
    <description>${escapeXml(seoConfig.defaultDescription)}</description>
    <language>${siteConfig.locale.replace('_', '-')}</language>
    <atom:link xmlns:atom="http://www.w3.org/2005/Atom" href="${feedUrl}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
