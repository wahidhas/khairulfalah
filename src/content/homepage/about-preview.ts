import type { CTASection, ImageAsset } from '../../types';

/** Placeholder — ringkasan profil madrasah menyusul dari yayasan (Sejarah, Visi, Misi, Nilai). */
export const aboutPreview: CTASection = {
  header: {
    badge: 'Tentang Kami',
    title: 'Mengenal Madrasah Khairul Falah',
    description: 'Ringkasan profil, visi, dan nilai madrasah akan ditampilkan di sini.',
  },
  primaryCTA: {
    label: 'Kenali Program Kami',
    href: '/about',
    variant: 'outline',
  },
};

/**
 * Dipisah dari `aboutPreview` (bukan properti `CTASection`) karena field image hanya relevan
 * di section ini, sementara CTASection dipakai luas oleh banner CTA lain yang murni teks.
 */
export const aboutPreviewImage: ImageAsset = {
  src: '/images/about/about.webp',
  alt: 'Profil dan gedung Madrasah Khairul Falah',
};
