import type { FeatureCard, SectionHeader } from '../../types';

export const pillarsHeader: SectionHeader = {
  badge: 'Pilar Utama',
  title: '5 Pilar Transformasi',
  description: 'Lima pilar yang menopang seluruh perjalanan transformasi Khairul Falah.',
};

export const pillars: FeatureCard[] = [
  {
    id: 'kurikulum-berbasis-cinta',
    icon: 'heart',
    title: 'Kurikulum Berbasis Cinta',
    description: 'Filosofi pendidikan yang berlandaskan cinta kepada Allah, belajar, sesama, dan berkarya.',
  },
  {
    id: 'tahfiz-karakter',
    icon: 'moon',
    title: 'Tahfiz & Karakter',
    description: 'Pembiasaan ibadah, adab harian, dan tahfiz sebagai bagian dari keseharian siswa.',
  },
  {
    id: 'literasi-numerasi',
    icon: 'book-open',
    title: 'Literasi & Numerasi',
    description: 'Penguatan kemampuan membaca, menulis, dan berhitung sebagai dasar seluruh pembelajaran.',
  },
  {
    id: 'future-skills',
    icon: 'cpu',
    title: 'Future Skills',
    description: 'Pembekalan AI Literacy, Coding, Robotics, dan keterampilan masa depan lainnya.',
  },
  {
    id: 'kemitraan-orang-tua',
    icon: 'heart-handshake',
    title: 'Kemitraan Orang Tua',
    description: 'Kolaborasi erat antara madrasah dan orang tua dalam mendampingi tumbuh kembang siswa.',
  },
];
