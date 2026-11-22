import type { HeroContent } from '../../types';

/**
 * TODO: ganti image.src dengan foto aktivitas Future Skills nyata, bukan foto stok.
 * primaryCTA = Daftar SPMB (bukan Pelajari Program) mengikuti prioritas CTA situs
 * (CONTENT_STRATEGY.md: "Daftar Sekarang" adalah prioritas #1) — konsisten dengan Hero Homepage.
 */
export const futureSkillsHero: HeroContent = {
  header: {
    title: 'KAFA Future Skills Academy',
    description:
      'Keterampilan masa depan mendukung arah pendidikan Khairul Falah. Di MI, sains dan teknologi memperkaya adab, kemandirian, dan life skills. Di MTs, kreativitas digital dikembangkan menjadi arah Digital Creator. Rincian pelaksanaan program dikonfirmasi oleh madrasah.',
  },
  breadcrumb: [
    { label: 'Beranda', href: '/' },
    { label: 'Future Skills', href: '/programs/future-skills' },
  ],
  primaryCTA: {
    label: 'Daftar SPMB',
    href: '/ppdb',
    variant: 'primary',
  },
  secondaryCTA: {
    label: 'Pelajari Program',
    href: '#programs',
    variant: 'outline',
  },
  image: {
    src: '/images/future-skills/hero.webp',
    alt: 'Aktivitas Future Skills Academy Khairul Falah',
  },
};
