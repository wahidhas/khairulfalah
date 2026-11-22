import type { HeroContent } from '../../types';

/** TODO: ganti image.src dengan foto/visual transformasi madrasah asli, bukan foto stok. */
export const transformationHero: HeroContent = {
  header: {
    title: 'Transformasi Madrasah Khairul Falah',
    description:
      'Melahirkan generasi beriman, berakhlak mulia, dan memberi dampak nyata bagi masyarakat. MI berfokus pada adab dan life skills; MTs mengarah pada pembentukan kreator digital yang beradab.',
  },
  breadcrumb: [
    { label: 'Beranda', href: '/' },
    { label: 'Transformasi', href: '/transformasi' },
  ],
  primaryCTA: {
    label: 'Pelajari Kurikulum',
    href: '/kurikulum',
    variant: 'primary',
  },
  secondaryCTA: {
    label: 'Daftar SPMB',
    href: '/ppdb',
    variant: 'outline',
  },
  image: {
    src: '/images/transformation/hero.webp',
    alt: 'Visual transformasi Madrasah Khairul Falah',
  },
};
