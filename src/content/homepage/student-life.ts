import type { FeatureCard, SectionHeader } from '../../types';

export const studentLifeHeader: SectionHeader = {
  title: 'Kehidupan Madrasah',
  description: 'Aktivitas dan dokumentasi kehidupan sehari-hari di madrasah akan ditampilkan di sini.',
};

/**
 * Kategori diambil dari INFORMATION_ARCHITECTURE.md (Kehidupan Madrasah). Deskripsi placeholder.
 * image memakai folder kategori galeri yang sama dengan halaman Kehidupan Madrasah
 * (public/images/gallery/{kategori}/) — bukan folder terpisah, karena kartu ini adalah preview
 * dari galeri yang sama, bukan konten berbeda.
 */
export const studentLife: FeatureCard[] = [
  {
    id: 'aktivitas-harian',
    icon: 'calendar-days',
    title: 'Aktivitas Harian',
    description: 'Deskripsi akan diperbarui oleh tim konten.',
    image: { src: '/images/gallery/pembelajaran/1.webp', alt: 'Aktivitas harian siswa' },
  },
  {
    id: 'tahfiz',
    icon: 'moon',
    title: 'Tahfiz',
    description: 'Deskripsi akan diperbarui oleh tim konten.',
    image: { src: '/images/gallery/tahfiz/1.webp', alt: 'Kegiatan tahfiz siswa' },
  },
  {
    id: 'project',
    icon: 'rocket',
    title: 'Project',
    description: 'Deskripsi akan diperbarui oleh tim konten.',
    image: { src: '/images/gallery/project/1.webp', alt: 'Project siswa' },
  },
  {
    id: 'ekstrakurikuler',
    icon: 'trophy',
    title: 'Ekstrakurikuler',
    description: 'Deskripsi akan diperbarui oleh tim konten.',
    image: { src: '/images/gallery/event/1.webp', alt: 'Kegiatan ekstrakurikuler siswa' },
  },
];
