import type { HeroContent } from '../../types';

/** TODO: ganti image.src dengan foto aktivitas belajar nyata, bukan foto stok. */
export const curriculumHero: HeroContent = {
  header: {
    title: 'KFLF: Dibentuk, Bukan Hanya Diajar.',
    description:
      'Bukan hanya apa yang diajarkan, tetapi apa yang sekarang mampu dilakukan anak. KFLF memadukan Al-Qur’an, adab, literasi, numerasi, dan pengalaman nyata: MI membangun kemandirian dan life skills; MTs mengembangkan kreativitas dan karya digital.',
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
