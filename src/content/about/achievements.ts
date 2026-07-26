import type { Achievement, SectionHeader } from '../../types';

export const achievementsHeader: SectionHeader = {
  badge: 'Pencapaian',
  title: 'Prestasi / Pencapaian',
  description: 'Daftar prestasi resmi akan ditampilkan di sini setelah data terkumpul.',
};

/** Placeholder — belum ada prestasi terverifikasi. Jangan membuat prestasi fiktif. */
export const achievements: Achievement[] = [
  {
    id: 'pencapaian-1',
    title: 'Pencapaian 1',
    description: 'Detail akan diperbarui setelah data resmi tersedia.',
    placeholder: true,
  },
  {
    id: 'pencapaian-2',
    title: 'Pencapaian 2',
    description: 'Detail akan diperbarui setelah data resmi tersedia.',
    placeholder: true,
  },
  {
    id: 'pencapaian-3',
    title: 'Pencapaian 3',
    description: 'Detail akan diperbarui setelah data resmi tersedia.',
    placeholder: true,
  },
];
