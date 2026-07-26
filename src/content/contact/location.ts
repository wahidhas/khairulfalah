import type { SectionHeader } from '../../types';
import { contactConfig } from '../../config';
import { isPlaceholder, mapsSearchUrl } from '../../lib/contact';

export const locationHeader: SectionHeader = {
  badge: 'Lokasi',
  title: 'Lokasi Madrasah',
  description: 'Kunjungi langsung lokasi kami untuk survei sekolah.',
};

export const addressLines: string[] = [contactConfig.address, contactConfig.city];

/**
 * Belum ada `mapsLink` resmi dari yayasan (embed/place ID) — selama itu kosong, tautan
 * "Buka di Google Maps" dibangun dari teks alamat asli (bukan koordinat karangan). Bila
 * alamat sendiri masih placeholder, jangan buat tautan sama sekali.
 */
export const mapsHref: string | undefined = isPlaceholder(contactConfig.address)
  ? undefined
  : contactConfig.mapsLink || mapsSearchUrl(addressLines.join(', '));
