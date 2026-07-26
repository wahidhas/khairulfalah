import type { FeatureCard, SectionHeader } from '../../types';

export const activitiesHeader: SectionHeader = {
  badge: 'Pembentukan Karakter',
  title: 'Tahfiz & Karakter',
  description: 'Pembiasaan ibadah dan akhlak yang menjadi bagian keseharian siswa.',
};

export const activities: FeatureCard[] = [
  {
    id: 'pembiasaan-ibadah',
    icon: 'moon',
    title: 'Pembiasaan Ibadah',
    description: 'Menjalankan ibadah harian secara konsisten sebagai kebiasaan sejak dini.',
  },
  {
    id: 'adab-harian',
    icon: 'heart-handshake',
    title: 'Adab Harian',
    description: 'Menerapkan adab dan sopan santun dalam interaksi sehari-hari.',
  },
  {
    id: 'tahfiz',
    icon: 'book-open',
    title: 'Tahfiz',
    description: 'Menghafal Al-Qur\'an secara bertahap dan berkelanjutan.',
  },
  {
    id: 'akhlak',
    icon: 'heart',
    title: 'Akhlak',
    description: 'Membentuk akhlak mulia sebagai landasan karakter siswa.',
  },
];
