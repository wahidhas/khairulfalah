import { siteConfig } from './site';

export interface SeoConfig {
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  defaultImage: string;
  robots: string;
  canonicalBase: string;
  openGraphType: string;
}

/** canonicalBase mengambil domain dari site.ts — satu-satunya sumber domain. */
export const seoConfig: SeoConfig = {
  defaultTitle: siteConfig.siteName,
  titleTemplate: `%s | ${siteConfig.siteName}`,
  defaultDescription: siteConfig.description,
  defaultImage: '/images/brand/social-preview.png',
  robots: 'index, follow',
  canonicalBase: siteConfig.domain,
  openGraphType: 'website',
};
