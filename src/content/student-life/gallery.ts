import type { ImageAsset, SectionHeader } from '../../types';

export const galleryHeader: SectionHeader = {
  badge: 'Dokumentasi',
  title: 'Galeri',
  description: 'Dokumentasi kegiatan siswa akan ditampilkan di sini setelah foto resmi tersedia.',
};

/**
 * Placeholder — TODO: ganti seluruh src dengan foto resmi kegiatan madrasah (bukan gambar
 * stok/internet). Kategori mengikuti taksonomi Galeri di INFORMATION_ARCHITECTURE.md.
 */
export const gallery: ImageAsset[] = [
  { src: '/images/gallery/pembelajaran/1.webp', alt: 'Dokumentasi Pembelajaran' },
  { src: '/images/gallery/tahfiz/1.webp', alt: 'Dokumentasi Tahfiz' },
  { src: '/images/gallery/project/1.webp', alt: 'Dokumentasi Project' },
  { src: '/images/gallery/prestasi/1.webp', alt: 'Dokumentasi Prestasi' },
  { src: '/images/gallery/kegiatan/1.webp', alt: 'Dokumentasi Kegiatan' },
  { src: '/images/gallery/event/1.webp', alt: 'Dokumentasi Event' },
];
