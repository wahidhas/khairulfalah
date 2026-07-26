import type { FeatureCard, SectionHeader } from '../../types';

export const overviewHeader: SectionHeader = {
  badge: 'Mengapa Penting',
  title: 'Why Future Skills Matter',
  description: 'Dunia berubah cepat — persiapan anak harus dimulai lebih awal.',
};

export const overview: FeatureCard[] = [
  {
    id: 'dunia-berubah-cepat',
    icon: 'compass',
    title: 'Dunia Berubah Cepat',
    description: 'Teknologi dan cara kerja terus berkembang lebih cepat dari sebelumnya.',
  },
  {
    id: 'ai-bagian-kehidupan',
    icon: 'cpu',
    title: 'AI Menjadi Bagian Kehidupan',
    description: 'Kecerdasan buatan kini hadir dalam keseharian, bukan lagi hal yang jauh.',
  },
  {
    id: 'lebih-dari-nilai-akademik',
    icon: 'brain',
    title: 'Lebih dari Sekadar Nilai Akademik',
    description: 'Anak perlu kemampuan berpikir dan beradaptasi, tidak hanya nilai ujian.',
  },
  {
    id: 'bangun-sejak-dini',
    icon: 'sparkles',
    title: 'Dibangun Sejak Dini',
    description: 'Keterampilan masa depan tumbuh optimal ketika mulai dilatih sejak usia sekolah dasar.',
  },
];
