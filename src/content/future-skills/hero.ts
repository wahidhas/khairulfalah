import type { HeroContent } from '../../types';

/**
 * TODO: ganti image.src dengan foto aktivitas Future Skills nyata, bukan foto stok.
 * primaryCTA = Daftar PPDB (bukan Pelajari Program) mengikuti prioritas CTA situs
 * (CONTENT_STRATEGY.md: "Daftar Sekarang" adalah prioritas #1) — konsisten dengan Hero Homepage.
 */
export const futureSkillsHero: HeroContent = {
  header: {
    title: 'Future Skills Academy',
    description:
      'Menyiapkan generasi yang siap menghadapi era AI, teknologi, dan perubahan global.',
  },
  breadcrumb: [
    { label: 'Beranda', href: '/' },
    { label: 'Future Skills', href: '/programs/future-skills' },
  ],
  primaryCTA: {
    label: 'Daftar PPDB',
    href: '/ppdb',
    variant: 'primary',
  },
  secondaryCTA: {
    label: 'Pelajari Program',
    href: '#programs',
    variant: 'outline',
  },
  image: {
    src: '',
    alt: '[Foto aktivitas Future Skills akan diperbarui]',
  },
};
