export interface ContactConfig {
  address: string;
  city: string;
  province: string;
  country: string;
  email: string;
  phone: string;
  whatsapp: string;
  mapsLink: string;
  officeHours: string;
}

/**
 * Alamat & jam operasional diisi sesuai Sprint 9 (data nyata dari brief). Email & WhatsApp
 * dibaca dari environment variable (PUBLIC_CONTACT_EMAIL/PUBLIC_WHATSAPP_NUMBER — lihat
 * .env.example) supaya bisa diisi saat deploy tanpa mengubah kode; jatuh ke placeholder
 * bertanda kurung siku bila belum diisi, sehingga guard href (lihat src/lib/contact.ts)
 * tetap tidak membuat tel:/wa.me/mailto: dari data kosong.
 * Telepon/provinsi/mapsLink masih placeholder — belum ada data resmi dari yayasan.
 */
export const contactConfig: ContactConfig = {
  address: 'Kp. Pintu Air, Kec. Medan Satria',
  city: 'Kota Bekasi',
  province: '[Provinsi akan diperbarui]',
  country: 'Indonesia',
  email: import.meta.env.PUBLIC_CONTACT_EMAIL || '[Email akan diperbarui]',
  phone: '[Nomor telepon akan diperbarui]',
  whatsapp: import.meta.env.PUBLIC_WHATSAPP_NUMBER || '[Nomor WhatsApp akan diperbarui]',
  mapsLink: '',
  officeHours: 'Senin–Jumat 07.00–16.00, Sabtu 07.00–12.00',
};
