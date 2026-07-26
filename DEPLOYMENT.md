# DEPLOYMENT.md

Panduan deployment Website Resmi Madrasah Khairul Falah.

Dibuat pada Sprint 10 (Production Readiness & Launch).

---

## Target Hosting

**Vercel** (sesuai README.md, SRS.md — Tech Stack & Hosting).

Situs ini adalah static site (Astro `output: "static"`), jadi juga kompatibel dengan Cloudflare
Pages atau Netlify bila suatu saat perlu pindah host — lihat catatan di bagian bawah.

---

## Build Command

```bash
npm run build
```

Setara dengan `astro build`. Output di-generate ke folder `dist/`.

Sebelum deploy, jalankan audit lokal:

```bash
npm run check   # 0 error TypeScript wajib
npm run build   # 0 error build wajib
```

## Output Directory

```
dist/
```

Ini yang harus diisi ke field **Output Directory** di dashboard Vercel (biasanya terdeteksi
otomatis begitu framework preset "Astro" dipilih).

## Install Command

```bash
npm install
```

(Otomatis terdeteksi Vercel dari `package-lock.json`.)

---

## Environment Variables

Salin dari [.env.example](.env.example) — isi di dashboard Vercel: **Project → Settings →
Environment Variables**. Jangan pernah commit nilai asli ke Git.

| Variable | Wajib | Keterangan |
|---|---|---|
| `PUBLIC_SITE_URL` | Direkomendasikan | Domain produksi, mis. `https://khairulfalah.sch.id`. Dipakai untuk canonical URL, sitemap, Open Graph, dan JSON-LD. Tanpa ini, situs memakai domain contoh (`https://khairulfalah.example`). |
| `PUBLIC_GA_ID` | Opsional | Google Analytics 4 Measurement ID. Kosongkan untuk menonaktifkan GA4 (tidak ada script yang di-render sama sekali). |
| `PUBLIC_CLARITY_ID` | Opsional | Microsoft Clarity Project ID. Kosongkan untuk menonaktifkan. |
| `PUBLIC_CONTACT_EMAIL` | Direkomendasikan | Email kontak resmi — begitu diisi, tautan `mailto:` di halaman Kontak otomatis aktif. |
| `PUBLIC_WHATSAPP_NUMBER` | Direkomendasikan | Nomor WhatsApp format internasional tanpa `+` (mis. `6281234567890`) — begitu diisi, tombol WhatsApp di seluruh situs otomatis aktif. |

Semua variable memakai prefix `PUBLIC_` (konvensi Astro/Vite) agar dapat diakses di sisi client.

Setelah mengubah Environment Variables di Vercel, **redeploy** agar build baru membaca nilai
terbaru (env var di-baca saat build time, bukan runtime, karena situs statis).

---

## Domain Setup

1. Di dashboard Vercel: **Project → Settings → Domains** → tambahkan domain produksi.
2. Ikuti instruksi Vercel untuk mengarahkan DNS:
   - **A record** ke IP Vercel, atau
   - **CNAME** ke `cname.vercel-dns.com` (untuk subdomain).
3. Setelah domain aktif, set `PUBLIC_SITE_URL` ke domain tersebut dan redeploy — ini memastikan
   canonical URL, sitemap, Open Graph, dan JSON-LD semua konsisten memakai domain produksi.

## SSL Setup

Vercel menyediakan SSL (Let's Encrypt) otomatis untuk setiap domain yang terhubung — tidak
perlu konfigurasi manual. Tunggu beberapa menit setelah DNS terverifikasi hingga sertifikat
aktif (indikator: gembok hijau di dashboard Domains).

Pastikan tidak ada redirect loop — Vercel otomatis redirect HTTP → HTTPS.

---

## Security Headers

Header keamanan (CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy,
Permissions-Policy) sudah dikonfigurasi di [vercel.json](vercel.json) dan aktif otomatis saat
deploy ke Vercel — tidak perlu langkah tambahan.

Bila pindah ke Cloudflare Pages, header yang sama perlu dipindahkan ke `public/_headers`
(format berbeda — lihat dokumentasi Cloudflare Pages Headers). Bila pindah ke Netlify, pindahkan
ke `netlify.toml` bagian `[[headers]]`.

---

## Post-Deploy Checklist

Lihat [LAUNCH_CHECKLIST.md](LAUNCH_CHECKLIST.md) untuk daftar lengkap sebelum go-live.

Verifikasi cepat setelah deploy:

```bash
curl -I https://<domain-produksi>/           # 200 + security headers
curl https://<domain-produksi>/robots.txt    # Sitemap: URL mengarah ke domain produksi
curl https://<domain-produksi>/sitemap-index.xml
```
