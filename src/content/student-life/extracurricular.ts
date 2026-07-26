import type { FeatureCard, SectionHeader } from '../../types';

export const extracurricularHeader: SectionHeader = {
  badge: 'Pengembangan Minat',
  title: 'Ekstrakurikuler',
  description: 'Ragam kegiatan untuk mengasah minat dan bakat siswa di luar jam pelajaran.',
};

export const extracurricular: FeatureCard[] = [
  {
    id: 'pramuka',
    icon: 'compass',
    title: 'Pramuka',
    description: 'Melatih kemandirian, kepemimpinan, dan kerja sama melalui kegiatan kepramukaan.',
  },
  {
    id: 'futsal',
    icon: 'trophy',
    title: 'Futsal',
    description: 'Mengasah kebugaran fisik dan semangat sportivitas melalui olahraga tim.',
  },
  {
    id: 'tahfiz-club',
    icon: 'moon',
    title: 'Tahfiz Club',
    description: 'Pendalaman hafalan Al-Qur\'an bagi siswa yang berminat lebih lanjut.',
  },
  {
    id: 'coding-club',
    icon: 'code',
    title: 'Coding Club',
    description: 'Eksplorasi pemrograman lebih lanjut di luar jam pelajaran reguler.',
  },
  {
    id: 'english-club',
    icon: 'languages',
    title: 'English Club',
    description: 'Melatih kepercayaan diri berbahasa Inggris secara aktif dan menyenangkan.',
  },
  {
    id: 'seni-kreatif',
    icon: 'sparkles',
    title: 'Seni Kreatif',
    description: 'Menyalurkan kreativitas siswa melalui berbagai media seni.',
  },
];
