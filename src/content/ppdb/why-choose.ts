import type { FeatureCard, SectionHeader } from '../../types';

export const whyChooseHeader: SectionHeader = {
  badge: 'Keunggulan',
  title: 'Mengapa Memilih Khairul Falah',
  description: 'Enam alasan utama orang tua mempercayakan pendidikan anaknya kepada kami.',
};

/**
 * Tidak ada di daftar folder eksplisit Sprint 7, tapi Page Structure mewajibkan section
 * "Mengapa Memilih Khairul Falah" — dibuat file sendiri (pola sama seperti projects.ts
 * Sprint 5/6) agar tetap "tidak ada hardcoded content".
 * Keenam poin merujuk program yang sudah dibangun di sprint sebelumnya (Kurikulum,
 * Student Life, Future Skills) — bukan klaim baru.
 */
export const whyChoose: FeatureCard[] = [
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
  {
    id: 'project-based-learning',
    icon: 'rocket',
    title: 'Project Based Learning',
    description: 'Siswa belajar melalui proyek nyata yang relevan dengan kehidupan sehari-hari.',
  },
  {
    id: 'pendampingan-siswa',
    icon: 'heart-handshake',
    title: 'Pendampingan Siswa',
    description: 'Guru mendampingi perkembangan akademik dan karakter setiap siswa.',
  },
];
