import type { PersonProfile, SectionHeader } from '../../types';

export const leadershipHeader: SectionHeader = {
  badge: 'Pimpinan',
  title: 'Pimpinan Madrasah',
  description: 'Struktur pimpinan akan diperbarui setelah data resmi diterima dari yayasan.',
};

/** Placeholder — nama & biodata belum tersedia. Jangan mengarang biodata. */
export const leadership: PersonProfile[] = [
  {
    id: 'kepala-madrasah',
    name: '[Nama akan diperbarui]',
    role: 'Kepala Madrasah',
    placeholder: true,
  },
  {
    id: 'ketua-yayasan',
    name: '[Nama akan diperbarui]',
    role: 'Ketua Yayasan',
    placeholder: true,
  },
];
