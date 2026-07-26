import type { FeatureCard, SectionHeader } from '../../types';

export const trustHeader: SectionHeader = {
  badge: 'Kepercayaan',
  title: 'Mengapa Orang Tua Memilih Khairul Falah',
};

/**
 * Tidak ada di daftar folder eksplisit Sprint 9, tapi brief secara eksplisit menjelaskan
 * section "Trust Builder" ini secara rinci (pola sama seperti why-choose.ts Sprint 7) —
 * dibuat file sendiri agar tetap "tidak ada hardcoded content". Keempat poin merujuk program
 * yang sudah dibangun di sprint sebelumnya (Kurikulum, Student Life, Future Skills, PPDB) —
 * bukan klaim baru.
 */
export const trust: FeatureCard[] = [
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
    id: 'future-skills',
    icon: 'cpu',
    title: 'Future Skills',
    description: 'Pembekalan AI Literacy, Coding, Robotics, dan keterampilan masa depan lainnya.',
  },
  {
    id: 'lingkungan-islami',
    icon: 'shield-check',
    title: 'Lingkungan Islami',
    description: 'Suasana belajar yang aman, nyaman, dan menumbuhkan nilai-nilai keislaman.',
  },
];
