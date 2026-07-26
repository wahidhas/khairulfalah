import type { HeroContent } from '../../types';

/** TODO: ganti image.src dengan foto/visual transformasi madrasah asli, bukan foto stok. */
export const transformationHero: HeroContent = {
  header: {
    title: 'Transformasi Madrasah Khairul Falah',
    description:
      'Membangun generasi muslim yang berakhlak, kompeten, dan siap menghadapi masa depan.',
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
    label: 'Daftar PPDB',
    href: '/ppdb',
    variant: 'outline',
  },
  image: {
    src: '',
    alt: '[Visual transformasi madrasah akan diperbarui]',
  },
};
