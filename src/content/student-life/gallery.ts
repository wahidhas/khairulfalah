import type { SlottedImage, SectionHeader } from '../../types';

export const galleryHeader: SectionHeader = {
  badge: 'Dokumentasi',
  title: 'Galeri',
  description: 'Dokumentasi kegiatan siswa akan ditampilkan di sini setelah foto resmi tersedia.',
};

/**
 * Placeholder — TODO: ganti seluruh src dengan foto resmi kegiatan madrasah (bukan gambar
 * stok/internet). Kategori mengikuti taksonomi Galeri di INFORMATION_ARCHITECTURE.md.
 * `slot` menentukan placeholder kontekstual per kategori (lihat src/lib/images.ts) — tiap
 * kategori punya ilustrasi berbeda, bukan satu gambar placeholder generik untuk semuanya.
 */
export const gallery: SlottedImage[] = [
  { src: '/images/gallery/pembelajaran/1.webp', alt: 'Dokumentasi Pembelajaran', slot: 'gallery.pembelajaran' },
  { src: '/images/gallery/tahfiz/1.webp', alt: 'Dokumentasi Tahfiz', slot: 'gallery.tahfiz' },
  { src: '/images/gallery/project/1.webp', alt: 'Dokumentasi Project', slot: 'gallery.project' },
  { src: '/images/gallery/prestasi/1.webp', alt: 'Dokumentasi Prestasi', slot: 'gallery.prestasi' },
  { src: '/images/gallery/kegiatan/1.webp', alt: 'Dokumentasi Kegiatan', slot: 'gallery.kegiatan' },
  { src: '/images/gallery/event/1.webp', alt: 'Dokumentasi Event', slot: 'gallery.event' },
];
