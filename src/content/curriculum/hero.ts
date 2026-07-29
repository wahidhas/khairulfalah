import type { HeroContent } from '../../types';

/** TODO: ganti image.src dengan foto aktivitas belajar nyata, bukan foto stok. */
export const curriculumHero: HeroContent = {
  header: {
    title: 'Kurikulum yang Menumbuhkan Karakter, Kompetensi, dan Masa Depan',
    description:
      'Khairul Falah Learning Framework (KFLF) memadukan pembelajaran akademik, karakter Islami, dan kesiapan masa depan dalam satu kerangka kurikulum yang utuh.',
  },
  breadcrumb: [
    { label: 'Beranda', href: '/' },
    { label: 'Kurikulum', href: '/kurikulum' },
  ],
  primaryCTA: {
    label: 'Pelajari KFLF',
    href: '#kflf',
    variant: 'primary',
  },
  secondaryCTA: {
    label: 'Hubungi Kami',
    href: '/contact',
    variant: 'outline',
  },
  image: {
    src: '/images/curriculum/hero.webp',
    alt: 'Aktivitas belajar siswa Madrasah Khairul Falah',
  },
};
