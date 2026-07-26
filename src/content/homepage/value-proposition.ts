import type { FeatureCard, SectionHeader } from '../../types';

export const valuePropositionHeader: SectionHeader = {
  title: 'Mengapa Memilih Kami',
  description: 'Ringkasan keunggulan Madrasah Khairul Falah akan ditampilkan di sini.',
};

/** Placeholder — deskripsi keunggulan menyusul dari tim konten. Judul mengikuti kategori umum, bukan klaim spesifik. */
export const valueProposition: FeatureCard[] = [
  {
    id: 'aman-nyaman',
    icon: 'shield-check',
    title: 'Lingkungan Aman & Nyaman',
    description: 'Deskripsi akan diperbarui oleh tim konten.',
  },
  {
    id: 'guru-peduli',
    icon: 'heart-handshake',
    title: 'Guru yang Peduli',
    description: 'Deskripsi akan diperbarui oleh tim konten.',
  },
  {
    id: 'siap-masa-depan',
    icon: 'sparkles',
    title: 'Siap Menghadapi Masa Depan',
    description: 'Deskripsi akan diperbarui oleh tim konten.',
  },
];
