import type { HeroContent } from '../../types';

/**
 * TODO: ganti image.src dengan foto aktivitas siswa nyata, bukan foto stok.
 * primaryCTA = Daftar PPDB, konsisten dengan prioritas CTA situs (CONTENT_STRATEGY.md)
 * dan pola Hero Homepage/Future Skills.
 */
export const studentLifeHero: HeroContent = {
  header: {
    title: 'Kehidupan Madrasah yang Aktif, Bermakna, dan Menyenangkan',
    description:
      'Belajar bukan hanya di kelas, tetapi melalui pengalaman yang membentuk karakter dan kompetensi.',
  },
  breadcrumb: [
    { label: 'Beranda', href: '/' },
    { label: 'Kehidupan Madrasah', href: '/student-life' },
  ],
  primaryCTA: {
    label: 'Daftar PPDB',
    href: '/ppdb',
    variant: 'primary',
  },
  secondaryCTA: {
    label: 'Lihat Kegiatan',
    href: '#ekstrakurikuler',
    variant: 'outline',
  },
  image: {
    src: '',
    alt: '[Foto aktivitas siswa akan diperbarui]',
  },
};
