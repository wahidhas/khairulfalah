import type { PageHeroContent } from '../../types';

export const aboutHero: PageHeroContent = {
  title: 'Tentang Madrasah Khairul Falah',
  description:
    'Mengenal lebih dekat sejarah, visi, nilai, serta para pendidik di balik Madrasah Khairul Falah.',
  breadcrumb: [
    { label: 'Beranda', href: '/' },
    { label: 'Tentang', href: '/about' },
  ],
  image: {
    src: '/images/about/about.png',
    alt: 'Visual Khairul Falah: pendidik mendampingi pelajar berkarya dengan kamera, laptop, dan tablet',
  },
};
