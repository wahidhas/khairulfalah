import { seoConfig, siteConfig, socialConfig, brandingConfig } from '../config';
import type { NavigationItem, FAQ } from '../types';
import { imageExists } from './images';
import type { LevelContent } from '../types/levels';

export function buildSchoolSchema(level: LevelContent, site: URL | undefined) {
  const url = getCanonicalUrl(site, `/${level.id}`);
  const logo = `/images/logos/${level.id}.png`;
  return {
    '@context': 'https://schema.org',
    '@type': 'School',
    '@id': `${url}#school`,
    name: level.name,
    description: level.seoDescription,
    url,
    parentOrganization: { '@type': 'Organization', name: siteConfig.siteName, url: getCanonicalUrl(site, '/') },
    ...(imageExists(logo) ? { logo: getCanonicalUrl(site, logo) } : {}),
  };
}

export function buildPageTitle(title: string): string {
  return title === seoConfig.defaultTitle || title.includes(' | ') ? title : seoConfig.titleTemplate.replace('%s', title);
}

export function getCanonicalUrl(site: URL | undefined, pathname: string): string {
  if (!site) {
    throw new Error(
      'Astro `site` belum dikonfigurasi di astro.config.mjs — canonical URL tidak bisa dibuat.'
    );
  }
  return new URL(pathname, site).toString();
}

/**
 * Structured data dasar (Organization + WebSite). Hanya menyertakan field yang sudah
 * berisi data nyata dari config — logo/sosial media/alamat masih placeholder kosong
 * di config saat ini, jadi sengaja TIDAK disertakan agar tidak menyesatkan mesin pencari.
 */
export function buildOrganizationSchema(site: URL | undefined) {
  const url = getCanonicalUrl(site, '/');
  const sameAs = Object.values(socialConfig).filter((value): value is string => Boolean(value));

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.siteName,
    url,
    description: siteConfig.description,
    ...(imageExists(brandingConfig.logo) ? { logo: new URL(brandingConfig.logo, url).toString() } : {}),
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function buildWebsiteSchema(site: URL | undefined) {
  const url = getCanonicalUrl(site, '/');

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.siteName,
    url,
    inLanguage: siteConfig.locale.replace('_', '-'),
  };
}

export function buildBreadcrumbSchema(items: NavigationItem[], site: URL | undefined) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: getCanonicalUrl(site, item.href),
    })),
  };
}

interface ArticleSchemaInput {
  title: string;
  description: string;
  publishDate: Date;
  updatedDate?: Date;
  author: string;
  image?: string;
  pathname: string;
}

export function buildArticleSchema(input: ArticleSchemaInput, site: URL | undefined) {
  const url = getCanonicalUrl(site, input.pathname);

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.title,
    description: input.description,
    datePublished: input.publishDate.toISOString(),
    dateModified: (input.updatedDate ?? input.publishDate).toISOString(),
    author: { '@type': 'Person', name: input.author },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.siteName,
      ...(imageExists(brandingConfig.logo)
        ? { logo: { '@type': 'ImageObject', url: getCanonicalUrl(site, brandingConfig.logo) } }
        : {}),
    },
    ...(input.image ? { image: getCanonicalUrl(site, input.image) } : {}),
    mainEntityOfPage: url,
    url,
  };
}

export function buildFAQSchema(items: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
