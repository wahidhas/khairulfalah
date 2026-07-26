# TODO — PPDB Future Enhancements

Dicatat pada Sprint 7. **Belum dibangun** sesuai arahan sprint ("Jangan membuat sekarang").

## 1. Form Pendaftaran Online

Saat ini `/ppdb` bersifat informasional. Pendaftaran dilakukan dengan menghubungi panitia
melalui kanal di section **Kontak PPDB**.

Dampak pada kode saat ini:
- CTA "Daftar Sekarang" (hero & CTA akhir) mengarah ke anchor `#alur-pendaftaran`,
  bukan URL form. Ganti `href` di `src/content/ppdb/hero.ts` dan `src/content/ppdb/cta.ts`
  begitu form tersedia.

## 2. Integrasi WhatsApp

`src/content/ppdb/contact.ts` sudah menyiapkan pembentukan tautan `https://wa.me/<nomor>`,
tetapi tautan tersebut **hanya dibuat bila nilai di config bukan placeholder**. Begitu
`contactConfig.whatsapp` diisi nomor asli di `src/config/contact.ts`, tautan otomatis aktif
tanpa perubahan kode.

Belum ada: pesan pra-isi (prefilled message), tracking klik, atau tombol floating WhatsApp.

## 3. Integrasi Google Form

Alternatif jangka pendek sebelum form kustom dibuat. Perlu keputusan:
apakah di-embed di halaman atau dibuka di tab baru.

## 4. Integrasi CRM PPDB

Menyimpan data pendaftar dan memantau status (mengacu pada rencana jangka panjang
"CRM Wali Murid" di PROJECT_CHARTER.md / ROADMAP.md). Membutuhkan backend —
berada di luar cakupan website statis saat ini.

---

## Data yang masih placeholder di halaman `/ppdb`

Perlu diisi yayasan/panitia sebelum rilis:

- **Biaya** (`src/content/ppdb/fees.ts`) — seluruh `amount` masih `[Akan diinformasikan]`.
  **Jangan diisi angka karangan** (CLAUDE.md Content Rules).
- **Kontak** (`src/config/contact.ts`) — WhatsApp, telepon, email, alamat, `mapsLink`.
- **Jadwal PPDB** — tanggal pembukaan belum dicantumkan di mana pun karena belum dikonfirmasi.
- **Detail pas foto** (`src/content/ppdb/requirements.ts`) — ukuran & jumlah salinan.
- **Foto hero** (`src/content/ppdb/hero.ts`).
