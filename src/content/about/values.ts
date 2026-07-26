import type { FeatureCard, SectionHeader } from '../../types';

export const valuesHeader: SectionHeader = {
  badge: 'Nilai Kami',
  title: 'Nilai-Nilai Dasar',
  description: 'Prinsip yang menjadi landasan seluruh program dan aktivitas madrasah.',
};

/**
 * Draft — diturunkan dari "Key Messages" yang sudah disetujui di CONTENT_STRATEGY.md,
 * BUKAN daftar nilai institusional resmi yang diterbitkan yayasan. Perlu konfirmasi
 * yayasan sebelum ditetapkan sebagai "Nilai-Nilai Dasar" final.
 */
export const values: FeatureCard[] = [
  {
    id: 'pendidikan-islam',
    icon: 'moon',
    title: 'Pendidikan Islam yang Kokoh',
    description: 'Menanamkan nilai dan praktik keislaman sebagai fondasi utama pendidikan.',
  },
  {
    id: 'siap-masa-depan',
    icon: 'sparkles',
    title: 'Relevan dengan Masa Depan',
    description: 'Membekali siswa dengan kompetensi yang dibutuhkan menghadapi perubahan zaman.',
  },
  {
    id: 'lingkungan-aman',
    icon: 'shield-check',
    title: 'Lingkungan Aman & Menyenangkan',
    description: 'Menciptakan suasana belajar yang nyaman bagi tumbuh kembang siswa.',
  },
  {
    id: 'karakter-kompetensi',
    icon: 'target',
    title: 'Karakter & Kompetensi Seimbang',
    description: 'Mengembangkan akhlak dan kemampuan akademik secara berimbang.',
  },
  {
    id: 'mitra-orang-tua',
    icon: 'heart-handshake',
    title: 'Orang Tua sebagai Mitra',
    description: 'Menjalin kerja sama erat dengan orang tua dalam mendidik siswa.',
  },
];
