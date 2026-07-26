import type { Program, SectionHeader, Button } from '../../types';

export const featuredProgramsHeader: SectionHeader = {
  title: 'Program Unggulan',
  description: 'Daftar program unggulan madrasah akan ditampilkan di sini.',
};

export const featuredProgramsCta: Button = {
  label: 'Lihat Semua Program',
  href: '/kurikulum',
  variant: 'outline',
};

/**
 * Placeholder — nama & deskripsi program unggulan belum ditentukan resmi oleh yayasan.
 * Tidak mengarang nama program spesifik; gunakan label generik hingga data resmi tersedia.
 */
export const featuredPrograms: Program[] = [
  {
    id: 'program-1',
    title: 'Program Unggulan 1',
    description: 'Deskripsi akan diperbarui oleh tim konten.',
    icon: 'book-open',
    href: '/kurikulum',
  },
  {
    id: 'program-2',
    title: 'Program Unggulan 2',
    description: 'Deskripsi akan diperbarui oleh tim konten.',
    icon: 'graduation-cap',
    href: '/kurikulum',
  },
  {
    id: 'program-3',
    title: 'Program Unggulan 3',
    description: 'Deskripsi akan diperbarui oleh tim konten.',
    icon: 'users',
    href: '/kurikulum',
  },
  {
    id: 'program-4',
    title: 'Program Unggulan 4',
    description: 'Deskripsi akan diperbarui oleh tim konten.',
    icon: 'rocket',
    href: '/kurikulum',
  },
];
