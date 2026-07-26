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
 * domain dibaca dari PUBLIC_SITE_URL (lihat .env.example) — jatuh ke domain contoh saat
 * env var belum diisi (dev lokal). astro.config.mjs membaca env var yang sama secara
 * terpisah (lihat komentar di sana) agar `Astro.site` tidak pernah berbeda dari nilai ini.
 */
export const siteConfig: SiteConfig = {
  siteName: 'Madrasah Khairul Falah',
  shortName: 'Khairul Falah',
  tagline: '[Tagline resmi akan diperbarui]',
  description:
    'Website resmi Madrasah Khairul Falah, lembaga pendidikan Islam yang membangun karakter dan kompetensi masa depan siswa.',
  domain: import.meta.env.PUBLIC_SITE_URL || 'https://khairulfalah.example',
  locale: 'id_ID',
  timezone: 'Asia/Jakarta',
  copyright: 'Madrasah Khairul Falah. Hak cipta dilindungi.',
  foundedYear: null,
};
