import type { ContactChannel, SectionHeader } from '../../types';
import { contactConfig } from '../../config';
import { whatsappHref, phoneHref, emailHref } from '../../lib/contact';

export const contactHeader: SectionHeader = {
  badge: 'Kontak',
  title: 'Kontak PPDB',
  description: 'Hubungi panitia PPDB untuk pertanyaan dan proses pendaftaran.',
};

/**
 * Nilai kontak diambil dari Configuration Layer (src/config/contact.ts) — satu sumber
 * kebenaran, tidak diketik ulang di sini. Helper guard (whatsappHref/phoneHref/emailHref di
 * src/lib/contact.ts) memastikan href hanya dibuat bila nilainya sudah data nyata.
 */
export const contactChannels: ContactChannel[] = [
  {
    id: 'whatsapp',
    icon: 'message-circle',
    label: 'WhatsApp',
    value: contactConfig.whatsapp,
    href: whatsappHref(contactConfig.whatsapp),
  },
  {
    id: 'telepon',
    icon: 'phone',
    label: 'Telepon',
    value: contactConfig.phone,
    href: phoneHref(contactConfig.phone),
  },
  {
    id: 'email',
    icon: 'mail',
    label: 'Email',
    value: contactConfig.email,
    href: emailHref(contactConfig.email),
  },
  {
    id: 'alamat',
    icon: 'map-pin',
    label: 'Alamat',
    value: contactConfig.address,
    href: contactConfig.mapsLink || undefined,
  },
];
