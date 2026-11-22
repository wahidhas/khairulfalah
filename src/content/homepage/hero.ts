import type { HeroContent } from '../../types';

/**
 * Draft copy — memparafrasekan Key Messages yang sudah disetujui di CONTENT_STRATEGY.md
 * ("Pendidikan Islam yang kokoh", "relevan dengan masa depan"), BUKAN salinan final
 * bermeterai dari tim marketing. Perlu sign-off sebelum rilis produksi.
 * image.src sengaja kosong: belum ada foto aktivitas nyata sesuai DESIGN_SYSTEM.md
 * (hindari foto stok/ilustrasi), HeroSection wajib menampilkan fallback saat kosong.
 * TODO: ganti dengan foto aktivitas madrasah resmi.
 */
export const hero: HeroContent = {
  header: {
    badge: 'Pendidikan Islam Modern',
    title: 'Membangun Generasi Islami yang Siap Menghadapi Masa Depan',
    description:
      'Madrasah Khairul Falah memadukan pendidikan Islam yang kokoh dengan kompetensi masa depan untuk membentuk karakter dan kesiapan siswa menghadapi dunia yang terus berubah.',
  },
  primaryCTA: {
    label: 'Daftar SPMB',
    href: '/ppdb',
    variant: 'primary',
  },
  secondaryCTA: {
    label: 'Pelajari Kurikulum',
    href: '/kurikulum',
    variant: 'outline',
  },
  image: {
    src: '/images/hero/homepage.webp',
    alt: 'Aktivitas siswa Madrasah Khairul Falah',
  },
};
