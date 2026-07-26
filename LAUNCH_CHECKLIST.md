# LAUNCH_CHECKLIST.md

Status kesiapan launch Website Resmi Madrasah Khairul Falah — per Sprint 10.

Legenda: ✅ Selesai · ⚠️ Perlu tindakan yayasan/panitia (bukan kode) · ⬜ Belum dilakukan

---

## Technical

| Item | Status | Catatan |
|---|---|---|
| Build Success | ✅ | `npm run check` & `npm run build` — 0 error, 0 warning |
| Lighthouse Pass (≥95 semua kategori) | ✅ | Diaudit di 11 halaman representatif. Performance 95-100, Accessibility 100, Best Practices 100, SEO 100 di semua halaman |
| Tidak ada broken link | ✅ | Audit otomatis atas seluruh `dist/` — 0 broken link tersisa |
| Structured Data aktif | ✅ | Organization, WebSite, Breadcrumb, Article, FAQPage — lihat SEO_CHECKLIST.md |
| Sitemap Active | ✅ | `/sitemap-index.xml`, otomatis via `@astrojs/sitemap` |
| Robots Active | ✅ | `/robots.txt`, endpoint dinamis, ikut domain aktif |
| Security Headers | ✅ | CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy — [vercel.json](vercel.json) |
| Responsive (320/375/768/1024/1440) | ✅ | Tidak ada horizontal overflow di halaman representatif; navigasi mobile & CTA berfungsi |
| 404 Page | ✅ | Pesan ramah + tombol Beranda + tombol Daftar PPDB |

## Analytics & Search

| Item | Status | Catatan |
|---|---|---|
| Analytics Installed (kode) | ✅ | GA4 & Clarity terpasang, aktif otomatis begitu env var diisi — lihat ANALYTICS_SETUP.md |
| Google Analytics — ID Terisi | ⬜ | Isi `PUBLIC_GA_ID` di Vercel setelah properti GA4 dibuat |
| Search Console Connected | ⬜ | Butuh domain produksi aktif dulu — lihat ANALYTICS_SETUP.md §2 |
| Microsoft Clarity — ID Terisi | ⬜ | Isi `PUBLIC_CLARITY_ID` di Vercel setelah proyek Clarity dibuat |

## Infrastructure

| Item | Status | Catatan |
|---|---|---|
| Domain Connected | ⬜ | Domain produksi resmi belum ditentukan/dihubungkan — situs masih memakai domain contoh `khairulfalah.example` |
| SSL Active | ⬜ | Otomatis begitu domain terhubung ke Vercel (Let's Encrypt) — tidak perlu langkah manual |
| `PUBLIC_SITE_URL` diisi di Vercel | ⬜ | Wajib diisi begitu domain produksi ditentukan, lalu redeploy |

## Content (butuh tindakan yayasan, bukan kode)

| Item | Status | Catatan |
|---|---|---|
| Nomor WhatsApp resmi | ⚠️ | Placeholder — isi `PUBLIC_WHATSAPP_NUMBER`, tombol WA aktif otomatis |
| Email kontak resmi | ⚠️ | Placeholder — isi `PUBLIC_CONTACT_EMAIL`, tautan email aktif otomatis |
| Nomor telepon resmi | ⚠️ | Placeholder di `src/config/contact.ts` — belum ada env var (tidak diminta brief), edit manual |
| Lokasi Google Maps terverifikasi | ⚠️ | Tautan "Buka di Google Maps" saat ini pakai pencarian teks alamat, bukan pin terverifikasi |
| Biaya pendidikan (PPDB) | ⚠️ | Seluruh nominal masih `[Akan diinformasikan]` — sesuai kebijakan "jangan mengarang angka" |
| Foto asli (hero, galeri, guru, dll) | ⚠️ | Seluruh gambar masih placeholder kosong — lihat Content Audit di ringkasan Sprint 10 |
| Profil guru & prestasi resmi | ⚠️ | Masih placeholder — menunggu data terverifikasi yayasan |
| Halaman /teachers & /gallery | ⬜ | Belum dibangun (di luar scope — "jangan membuat halaman baru"), tautan footer ditandai "segera hadir" agar tidak jadi broken link |

---

## Ringkasan

**Kode & infrastruktur teknis: siap produksi.** Yang tersisa murni menunggu data resmi dari
yayasan (kontak, foto, biaya, profil) dan keputusan operasional (domain final, akun
analytics) — bukan pekerjaan development lanjutan. Begitu nilai-nilai tsb diisi di Environment
Variables/config, seluruh fitur terkait (tombol WhatsApp, OG image, GA4, dst.) aktif otomatis
tanpa perubahan kode lebih lanjut.
