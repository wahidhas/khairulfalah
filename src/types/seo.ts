export interface OpenGraph {
  title: string;
  description: string;
  url: string;
  type?: string;
  siteName?: string;
  locale?: string;
  image?: string;
}

export interface SocialMeta {
  card?: 'summary' | 'summary_large_image';
  title: string;
  description: string;
  image?: string;
}

export interface SEOData {
  title: string;
  description: string;
  canonical: string;
  noindex?: boolean;
  openGraph: OpenGraph;
  social?: SocialMeta;
}
