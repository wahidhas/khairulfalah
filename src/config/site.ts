export interface SiteConfig {
  siteName: string;
  shortName: string;
  tagline: string;
  description: string;
  domain: string;
  locale: string;
  timezone: string;
  copyright: string;
  foundedYear: number | null;
}

/**
 * foundedYear: null — belum ada data resmi tahun berdiri dari yayasan.
 * Domain canonical mengikuti domain yang dikonfirmasi dalam brief 2027/2028.
 * Satu sumber ini juga dipakai astro.config.mjs; env lama tidak boleh mengalihkan SEO.
 */
export const siteConfig: SiteConfig = {
  siteName: 'Yayasan Khairul Falah',
  shortName: 'Khairul Falah',
  tagline: 'DIBENTUK, bukan hanya diajar.',
  description:
    'Melahirkan generasi beriman, berakhlak mulia, dan memberi dampak nyata bagi masyarakat.',
  domain: 'https://khairulfalah.my.id',
  locale: 'id_ID',
  timezone: 'Asia/Jakarta',
  copyright: 'Yayasan Khairul Falah. Hak cipta dilindungi.',
  foundedYear: null,
};
