import type { HeroContent } from '../../types';
import { contactConfig } from '../../config';
import { whatsappHref } from '../../lib/contact';

/**
 * TODO: ganti image.src dengan foto gedung/lingkungan madrasah asli, bukan foto stok.
 * "WhatsApp Kami" mengarah ke nomor asli (external) bila sudah tersedia di config; selama
 * masih placeholder, diarahkan ke section Informasi Kontak di halaman ini (bukan tautan
 * wa.me rusak).
 */
const realWhatsappHref = whatsappHref(contactConfig.whatsapp);

export const contactHero: HeroContent = {
  header: {
    title: 'Hubungi Madrasah Khairul Falah',
    description:
      'Kami siap membantu menjawab pertanyaan Anda mengenai program pendidikan dan PPDB.',
  },
  breadcrumb: [
    { label: 'Beranda', href: '/' },
    { label: 'Kontak', href: '/contact' },
  ],
  primaryCTA: {
    label: 'WhatsApp Kami',
    href: realWhatsappHref ?? '#informasi-kontak',
    variant: 'primary',
    external: Boolean(realWhatsappHref),
  },
  secondaryCTA: {
    label: 'Daftar PPDB',
    href: '/ppdb',
    variant: 'outline',
  },
  image: {
    src: '/images/contact/hero.webp',
    alt: 'Lingkungan Madrasah Khairul Falah',
  },
};
