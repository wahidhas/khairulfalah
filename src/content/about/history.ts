import type { TimelineItem, SectionHeader } from '../../types';

export const historyHeader: SectionHeader = {
  badge: 'Sejarah',
  title: 'Sejarah Singkat',
  description: 'Perjalanan Madrasah Khairul Falah akan ditampilkan di sini setelah data resmi tersedia.',
};

/**
 * Placeholder — tahun & detail sejarah resmi belum tersedia dari yayasan (foundedYear
 * masih null di config/site.ts). Tahapan generik di bawah TIDAK mengarang tanggal/fakta;
 * hanya kerangka umum yang lazim ada di riwayat sekolah mana pun.
 */
export const history: TimelineItem[] = [
  {
    id: 'pendirian',
    year: '[Tahun akan diperbarui]',
    title: 'Pendirian Madrasah',
    description: 'Detail akan diperbarui oleh yayasan.',
  },
  {
    id: 'pengembangan-program',
    year: '[Tahun akan diperbarui]',
    title: 'Pengembangan Program Pendidikan',
    description: 'Detail akan diperbarui oleh yayasan.',
  },
  {
    id: 'transformasi',
    year: '[Tahun akan diperbarui]',
    title: 'Transformasi Menuju Pendidikan Modern',
    description: 'Detail akan diperbarui oleh yayasan.',
  },
];
