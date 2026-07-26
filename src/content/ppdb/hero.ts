import type { HeroContent } from '../../types';

/**
 * TODO: ganti image.src dengan foto kegiatan PPDB/madrasah resmi, bukan foto stok.
 * Subheadline sengaja tidak menyebut tahun ajaran spesifik — tahun ajaran resmi
 * belum dikonfirmasi yayasan, jangan mengarang periode.
 *
 * Form pendaftaran online BELUM ada (lihat Future Enhancement di docs/TODO-ppdb.md),
 * jadi "Daftar Sekarang" mengarah ke Alur Pendaftaran (langkah nyata pertama yang bisa
 * dilakukan pengunjung hari ini), bukan ke URL form yang belum ada. Kedua CTA sengaja
 * diberi tujuan berbeda agar tidak duplikatif.
 */
export const ppdbHero: HeroContent = {
  header: {
    title: 'PPDB Madrasah Khairul Falah',
    description: 'Pendaftaran peserta didik baru untuk tahun ajaran terbaru.',
  },
  breadcrumb: [
    { label: 'Beranda', href: '/' },
    { label: 'PPDB', href: '/ppdb' },
  ],
  primaryCTA: {
    label: 'Daftar Sekarang',
    href: '#alur-pendaftaran',
    variant: 'primary',
  },
  secondaryCTA: {
    label: 'Hubungi Panitia',
    href: '#kontak-ppdb',
    variant: 'outline',
  },
  image: {
    src: '',
    alt: '[Foto kegiatan madrasah akan diperbarui]',
  },
};
