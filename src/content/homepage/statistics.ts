import type { Statistic, SectionHeader } from '../../types';

export const statisticsHeader: SectionHeader = {
  title: 'Madrasah Dalam Angka',
};

/**
 * Placeholder — belum ada data resmi dari yayasan. value sengaja "—" (bukan angka
 * karangan) sesuai CLAUDE.md Content Rules: jangan mengarang statistik.
 */
export const statistics: Statistic[] = [
  { id: 'siswa-aktif', label: 'Siswa Aktif', value: '—' },
  { id: 'tenaga-pengajar', label: 'Tenaga Pengajar', value: '—' },
  { id: 'tahun-pengalaman', label: 'Tahun Pengalaman', value: '—' },
  { id: 'program-unggulan', label: 'Program Unggulan', value: '—' },
];
