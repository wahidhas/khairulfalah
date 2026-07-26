import type { FeatureCard, SectionHeader } from '../../types';

export const philosophyHeader: SectionHeader = {
  badge: 'Filosofi Pendidikan',
  title: 'Kurikulum Berbasis Cinta',
  description:
    'Empat landasan cinta yang membentuk cara Madrasah Khairul Falah mendidik setiap siswa.',
};

export const philosophyPillars: FeatureCard[] = [
  {
    id: 'cinta-allah',
    icon: 'moon',
    title: 'Cinta kepada Allah',
    description: 'Menanamkan iman dan ketakwaan sebagai landasan utama setiap proses belajar.',
  },
  {
    id: 'cinta-belajar',
    icon: 'book-open',
    title: 'Cinta Belajar',
    description: 'Menumbuhkan rasa ingin tahu dan semangat belajar yang bertahan seumur hidup.',
  },
  {
    id: 'cinta-sesama',
    icon: 'heart-handshake',
    title: 'Cinta Sesama',
    description: 'Membangun empati, kepedulian, dan kemampuan bekerja sama dengan orang lain.',
  },
  {
    id: 'cinta-berkarya',
    icon: 'sparkles',
    title: 'Cinta Berkarya',
    description: 'Mendorong siswa menghasilkan karya nyata yang bermanfaat bagi sesama.',
  },
];
