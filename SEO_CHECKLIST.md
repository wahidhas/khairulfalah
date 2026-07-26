# SEO_CHECKLIST.md

Status implementasi SEO Website Resmi Madrasah Khairul Falah, per Sprint 10.

---

## Meta Tags

Setiap halaman ([src/layouts/MainLayout.astro](src/layouts/MainLayout.astro)) otomatis memiliki:

- [x] `<title>` unik per halaman (via `titleTemplate`, mencegah duplikasi nama brand)
- [x] `<meta name="description">` unik per halaman
- [x] `<link rel="canonical">` — dibangun dari `Astro.site` + path halaman
- [x] `<meta name="robots">` — `index, follow` default; `noindex, nofollow` untuk 404

Diverifikasi aktif di 9 halaman utama: Homepage, About, Transformasi, Kurikulum, Future Skills,
Student Life, PPDB, Articles (listing/detail/kategori), Contact.

## Open Graph & Twitter Card

- [x] `og:type`, `og:site_name`, `og:title`, `og:description`, `og:url`, `og:locale`
- [x] `og:image` — dirender kondisional (hanya muncul bila `image` diisi; artikel meneruskan
      gambar per-artikel, halaman lain memakai `seoConfig.defaultImage`)
- [x] `twitter:card` — otomatis `summary_large_image` bila ada gambar, `summary` bila tidak
- [x] `twitter:title`, `twitter:description`, `twitter:image` (kondisional)

**Catatan:** `seoConfig.defaultImage` masih kosong (belum ada foto default resmi 1200×630 dari
yayasan) — begitu diisi di `src/config/seo.ts`, OG image aktif otomatis di semua halaman tanpa
foto sendiri.

## Sitemap

- [x] Aktif otomatis via `@astrojs/sitemap` — `/sitemap-index.xml`
- [x] Mencakup seluruh 20 route (halaman statis + 5 artikel + 5 kategori artikel)
- [x] Tidak perlu konfigurasi tambahan — regenerasi otomatis setiap build

## Robots

- [x] `/robots.txt` — endpoint dinamis ([src/pages/robots.txt.ts](src/pages/robots.txt.ts)),
      bukan file statis, supaya baris `Sitemap:` selalu ikut domain aktif (dari `PUBLIC_SITE_URL`)
- [x] `User-agent: *` / `Allow: /` — seluruh situs boleh di-crawl

## Structured Data (JSON-LD)

| Schema | Halaman | Status |
|---|---|---|
| `Organization` | Homepage | ✅ Aktif |
| `WebSite` | Homepage | ✅ Aktif |
| `BreadcrumbList` | Semua halaman dalam (About, Transformasi, Kurikulum, Future Skills, Student Life, PPDB, Contact, Articles detail) | ✅ Aktif |
| `Article` | Setiap halaman detail artikel | ✅ Aktif |
| `FAQPage` | Homepage, Kurikulum, Future Skills, Student Life, PPDB, Contact, Transformasi (7 halaman ber-FAQ) | ✅ Aktif (baru ditambahkan Sprint 10) |

Helper builder: [src/lib/seo.ts](src/lib/seo.ts) — `buildOrganizationSchema`, `buildWebsiteSchema`,
`buildBreadcrumbSchema`, `buildArticleSchema`, `buildFAQSchema`.

Validasi disarankan sebelum launch: [Google Rich Results Test](https://search.google.com/test/rich-results)
untuk tiap tipe schema di atas.

## RSS Feed

- [x] `/rss.xml` — feed artikel, dibangun manual (RSS 2.0, tanpa dependency tambahan)

## Search Console

- [ ] **Belum dihubungkan** (butuh domain produksi aktif terlebih dulu) — lihat langkah di
      [ANALYTICS_SETUP.md](ANALYTICS_SETUP.md)

---

## Known Gaps (bukan bug, menunggu data resmi)

- `seoConfig.defaultImage` kosong → OG image belum tampil sampai foto resmi 1200×630 disediakan.
- `brandingConfig.logo` kosong → `Organization` schema belum menyertakan field `logo`.
- Beberapa `alt` text foto masih placeholder (`[Foto ... akan diperbarui]`) — lihat laporan
  Content Audit di ringkasan Sprint 10.
