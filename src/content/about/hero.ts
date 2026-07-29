import type { PageHeroContent } from '../../types';

/** TODO: ganti image.src dengan foto resmi madrasah (gedung/kegiatan), bukan foto stok. */
export const aboutHero: PageHeroContent = {
  title: 'Tentang Madrasah Khairul Falah',
  description:
    'Mengenal lebih dekat sejarah, visi, nilai, serta para pendidik di balik Madrasah Khairul Falah.',
  breadcrumb: [
    { label: 'Beranda', href: '/' },
    { label: 'Tentang', href: '/about' },
  ],
  image: {
    src: '/images/about/about.webp',
    alt: 'Gedung dan kegiatan Madrasah Khairul Falah',
  },
};
