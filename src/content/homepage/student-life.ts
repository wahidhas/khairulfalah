import type { FeatureCard, SectionHeader } from '../../types';

export const studentLifeHeader: SectionHeader = {
  title: 'Kehidupan Madrasah',
  description: 'Aktivitas dan dokumentasi kehidupan sehari-hari di madrasah akan ditampilkan di sini.',
};

/** Kategori diambil dari INFORMATION_ARCHITECTURE.md (Kehidupan Madrasah). Deskripsi placeholder. */
export const studentLife: FeatureCard[] = [
  {
    id: 'aktivitas-harian',
    icon: 'calendar-days',
    title: 'Aktivitas Harian',
    description: 'Deskripsi akan diperbarui oleh tim konten.',
  },
  {
    id: 'tahfiz',
    icon: 'moon',
    title: 'Tahfiz',
    description: 'Deskripsi akan diperbarui oleh tim konten.',
  },
  {
    id: 'project',
    icon: 'rocket',
    title: 'Project',
    description: 'Deskripsi akan diperbarui oleh tim konten.',
  },
  {
    id: 'ekstrakurikuler',
    icon: 'trophy',
    title: 'Ekstrakurikuler',
    description: 'Deskripsi akan diperbarui oleh tim konten.',
  },
];
