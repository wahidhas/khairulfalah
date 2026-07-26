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
  { src: '', alt: '[TODO: foto Pembelajaran akan diperbarui]' },
  { src: '', alt: '[TODO: foto Tahfiz akan diperbarui]' },
  { src: '', alt: '[TODO: foto Project akan diperbarui]' },
  { src: '', alt: '[TODO: foto Prestasi akan diperbarui]' },
  { src: '', alt: '[TODO: foto Kegiatan akan diperbarui]' },
  { src: '', alt: '[TODO: foto Event akan diperbarui]' },
];
