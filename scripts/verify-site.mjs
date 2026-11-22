import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('dist');
const errors = [];
const pages = new Map();
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map(entry => {
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(file) : file;
  }))).flat();
}
async function exists(file) {
  try { return (await stat(file)).isFile(); } catch { return false; }
}
function attrs(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(match => [match[1], match[2]]));
}
function resolveFile(urlPath) {
  const relative = decodeURIComponent(urlPath).replace(/^\//, '');
  return path.join(root, relative.endsWith('.html') || path.extname(relative) ? relative : path.join(relative, 'index.html'));
}
for (const file of (await walk(root)).filter(file => file.endsWith('.html'))) {
  const html = await readFile(file, 'utf8');
  const route = '/' + path.relative(root, file).replaceAll(path.sep, '/').replace(/index\.html$/, '');
  pages.set(route, { html, file });
}
let links = 0;
let images = 0;
for (const [route, { html }] of pages) {
  const fail = message => errors.push(`${route}: ${message}`);
  if ((html.match(/<h1[\s>]/g) ?? []).length !== 1) fail('must have exactly one h1');
  if (!/<title>[^<]+<\/title>/.test(html)) fail('missing title');
  if (!/<meta name="description" content="[^"]+"/.test(html)) fail('missing description');
  const canonical = attrs(html.match(/<link[^>]+rel="canonical"[^>]*>/)?.[0] ?? '').href;
  if (!canonical?.startsWith('https://khairulfalah.my.id/')) fail(`unexpected canonical: ${canonical}`);
  for (const match of html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)) {
    try { JSON.parse(match[1]); } catch { fail('invalid JSON-LD'); }
  }
  for (const match of html.matchAll(/<(?:a|img|script|link)\b[^>]*>/g)) {
    const a = attrs(match[0]);
    const isImage = match[0].startsWith('<img');
    if (isImage) {
      images++;
      if (!('alt' in a)) fail('image without alt');
      if (!a.width || !a.height) fail(`image without dimensions: ${a.src}`);
    }
    const rawUrl = a.href ?? a.src;
    if (!rawUrl || /^(mailto:|tel:|data:|https?:\/\/)/.test(rawUrl)) continue;
    if (/\[|\]/.test(rawUrl)) { fail(`placeholder URL: ${rawUrl}`); continue; }
    links++;
    const url = new URL(rawUrl.replaceAll('&amp;', '&'), `https://khairulfalah.my.id${route}`);
    const target = resolveFile(url.pathname);
    if (!await exists(target)) { fail(`missing target: ${rawUrl}`); continue; }
    if (url.hash) {
      const targetHtml = await readFile(target, 'utf8');
      const id = decodeURIComponent(url.hash.slice(1));
      if (!targetHtml.includes(`id="${id}"`)) fail(`missing fragment: ${rawUrl}`);
    }
  }
}
for (const route of ['/', '/mi/', '/mts/', '/ppdb/', '/spmb/mi/', '/spmb/mts/', '/about/', '/transformasi/', '/kurikulum/', '/student-life/', '/articles/', '/contact/', '/programs/future-skills/']) {
  if (!pages.has(route)) errors.push(`Required route missing: ${route}`);
}
const sitemap = await readFile(path.join(root, 'sitemap-0.xml'), 'utf8');
for (const route of ['/mi', '/mts', '/ppdb', '/spmb/mi', '/spmb/mts']) {
  if (!sitemap.includes(`https://khairulfalah.my.id${route}`)) errors.push(`Route missing from sitemap: ${route}`);
}
if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`PASS: ${pages.size} HTML pages; ${links} local links/assets; ${images} images; titles, descriptions, canonical URLs, JSON-LD, fragments, preserved routes, and sitemap.`);
}
