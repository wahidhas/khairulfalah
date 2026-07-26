import type { ContactChannel, SectionHeader } from '../../types';
import { contactConfig, siteConfig } from '../../config';
import { whatsappHref, phoneHref, emailHref } from '../../lib/contact';

export const contactInfoHeader: SectionHeader = {
  badge: 'Kontak',
  title: 'Informasi Kontak',
  description: 'Hubungi kami melalui kanal berikut untuk pertanyaan seputar madrasah dan PPDB.',
};

/**
 * Seluruh nilai berasal dari Configuration Layer (src/config/contact.ts, src/config/site.ts) —
 * tidak ada teks kontak yang diketik ulang di sini. Href hanya dibuat bila data sudah nyata
 * (lihat src/lib/contact.ts).
 */
export const contactInfo: ContactChannel[] = [
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
    id: 'website',
    icon: 'globe',
    label: 'Website',
    value: siteConfig.domain.replace(/^https?:\/\//, ''),
    href: '/',
  },
];
