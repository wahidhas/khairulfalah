import type { CTASection } from '../../types';
import { contactConfig } from '../../config';
import { whatsappHref, phoneHref } from '../../lib/contact';

const realWhatsappHref = whatsappHref(contactConfig.whatsapp);
const realPhoneHref = phoneHref(contactConfig.phone);

/**
 * Kedua tombol diarahkan ke section Informasi Kontak selama nomor WhatsApp/telepon masih
 * placeholder — bukan tautan wa.me/tel: rusak.
 */
export const contactCta: CTASection = {
  header: {
    title: 'Hubungi Kami',
    description: 'Tim kami siap membantu menjawab pertanyaan Anda kapan saja.',
  },
  primaryCTA: {
    label: 'Chat WhatsApp',
    href: realWhatsappHref ?? '#informasi-kontak',
    variant: 'primary',
    external: Boolean(realWhatsappHref),
  },
  secondaryCTA: {
    label: 'Telepon Sekarang',
    href: realPhoneHref ?? '#informasi-kontak',
    variant: 'secondary',
  },
};
