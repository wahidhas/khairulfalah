# ANALYTICS_SETUP.md

Panduan konfigurasi analytics untuk Website Resmi Madrasah Khairul Falah.

Seluruh integrasi dibaca dari environment variable ([.env.example](.env.example)) — tidak ada
ID yang di-hardcode di kode sumber. Kosongkan variable untuk menonaktifkan integrasi tsb
(tidak ada script yang di-render sama sekali bila kosong — diverifikasi di Sprint 10).

---

## 1. Google Analytics 4

### Membuat properti GA4

1. Buka [Google Analytics](https://analytics.google.com/) → **Admin → Create Property**.
2. Isi nama properti (mis. "Madrasah Khairul Falah"), zona waktu **Asia/Jakarta**, mata uang IDR.
3. Buat **Web Data Stream** dengan URL domain produksi.
4. Salin **Measurement ID** (format `G-XXXXXXXXXX`).

### Konfigurasi di situs

1. Set environment variable di Vercel: `PUBLIC_GA_ID=G-XXXXXXXXXX`.
2. Redeploy.
3. Verifikasi: buka situs produksi → GA4 **Realtime report** harus menampilkan 1 pengguna aktif.

Implementasi teknis: [src/layouts/MainLayout.astro](src/layouts/MainLayout.astro) — script
`gtag.js` dimuat async dan hanya dirender bila `PUBLIC_GA_ID` terisi.

### Event yang disarankan untuk dilacak (manual, GA4 Enhanced Measurement sudah menangani
page_view/scroll/outbound_click secara otomatis)

- Klik tombol "Daftar PPDB" / "Daftar Sekarang"
- Klik tombol WhatsApp
- Submit — belum relevan (belum ada form di situs, PPDB masih informasional)

---

## 2. Google Search Console

Search Console **tidak memerlukan environment variable** — verifikasi dilakukan langsung di
DNS atau lewat file, tanpa mengubah kode.

### Langkah verifikasi (metode DNS — direkomendasikan, tidak perlu deploy ulang)

1. Buka [Google Search Console](https://search.google.com/search-console) → **Add Property** →
   pilih **Domain** (bukan "URL prefix").
2. Masukkan domain produksi (tanpa `https://`).
3. Google memberi 1 baris **TXT record** — tambahkan ke pengaturan DNS domain (di registrar
   domain, atau di Vercel bila DNS dikelola Vercel).
4. Tunggu propagasi DNS (bisa sampai 24 jam, biasanya lebih cepat), lalu klik **Verify**.

### Setelah terverifikasi

1. **Sitemaps** → submit `https://<domain-produksi>/sitemap-index.xml`.
2. Tunggu Google mulai meng-crawl (biasanya beberapa hari) → pantau **Coverage/Pages** report.
3. Cek **Enhancements → Breadcrumbs** dan **FAQ** untuk memastikan structured data terbaca
   (lihat [SEO_CHECKLIST.md](SEO_CHECKLIST.md)).

---

## 3. Microsoft Clarity

### Membuat proyek

1. Buka [Microsoft Clarity](https://clarity.microsoft.com/) → **Add new project**.
2. Isi nama proyek dan URL domain produksi.
3. Salin **Project ID** dari **Settings → Setup**.

### Konfigurasi di situs

1. Set environment variable di Vercel: `PUBLIC_CLARITY_ID=<project-id>`.
2. Redeploy.
3. Verifikasi: buka situs produksi, lakukan beberapa interaksi → Clarity dashboard
   (**Recordings**/**Heatmaps**) harus menampilkan sesi baru dalam beberapa menit.

Implementasi teknis: [src/layouts/MainLayout.astro](src/layouts/MainLayout.astro) — script
resmi Clarity, hanya dirender bila `PUBLIC_CLARITY_ID` terisi.

---

## Privasi

GA4 dan Clarity keduanya memuat cookie/tracking pihak ketiga. Sebelum publikasi, pertimbangkan
menambahkan halaman Kebijakan Privasi (sudah masuk "Planned Pages" di README.md tapi di luar
scope Sprint 10 — "jangan membuat halaman baru").
