# SOFTWARE REQUIREMENTS SPECIFICATION (SRS)

# Website Resmi Madrasah Khairul Falah

Version 1.0

---

# Document Information

| Item               | Description                             |
| ------------------ | --------------------------------------- |
| Document           | Software Requirements Specification     |
| Project            | Website Resmi Madrasah Khairul Falah    |
| Version            | 1.0                                     |
| Status             | Draft                                   |
| Technology         | Astro + TypeScript + Tailwind CSS       |
| Development Method | Agile Scrum                             |
| Architecture       | Static Website + Future API Integration |

---

# 1. Introduction

## 1.1 Purpose

Dokumen ini mendefinisikan kebutuhan fungsional dan nonfungsional Website Resmi Madrasah Khairul Falah sebagai acuan pengembangan, pengujian, dan pemeliharaan sistem.

Website dibangun sebagai media informasi resmi, branding, dan fondasi ekosistem digital Madrasah Khairul Falah.

---

## 1.2 Scope

Website akan menyediakan informasi mengenai:

* Profil Madrasah
* Visi Transformasi
* Program Pendidikan
* KFLF
* Future Skills
* Artikel
* Galeri
* PPDB
* Kontak

Versi pertama bersifat website publik tanpa sistem login.

---

## 1.3 Definitions

| Term | Description                      |
| ---- | -------------------------------- |
| KFLF | Khairul Falah Learning Framework |
| CTA  | Call To Action                   |
| SEO  | Search Engine Optimization       |
| UI   | User Interface                   |
| UX   | User Experience                  |
| CMS  | Content Management System        |

---

# 2. Overall Description

## Product Perspective

Website merupakan aplikasi web modern berbasis Astro.

Arsitektur:

Browser

↓

Astro

↓

Static Pages

↓

Future API

↓

Supabase (Future)

---

## User Classes

### Visitor

* Membaca informasi
* Mengakses halaman
* Menghubungi sekolah

---

### Parent Candidate

* Mempelajari program sekolah
* Mengakses informasi PPDB
* Menghubungi admin

---

### Administrator (Future)

* Mengelola konten
* Mengelola artikel
* Mengelola galeri

---

# 3. Functional Requirements

---

## FR-001 Homepage

Website harus memiliki halaman utama yang berisi:

* Hero
* Value Proposition
* Program Unggulan
* CTA
* Footer

Priority

High

---

## FR-002 Navigation

Website harus menyediakan navigasi menuju:

* Home
* Tentang
* Visi Transformasi
* KFLF
* Future Skills
* Artikel
* PPDB
* Kontak

Priority

High

---

## FR-003 About Page

Website harus menampilkan:

* Profil
* Sejarah
* Visi
* Misi
* Nilai

Priority

High

---

## FR-004 Transformation Page

Menampilkan:

* Roadmap
* Milestone
* Strategi
* Target

---

## FR-005 Curriculum

Menampilkan:

* Filosofi KFLF
* Learning Domains
* Pendekatan Pembelajaran
* Kompetensi

---

## FR-006 Future Skills

Menampilkan:

* Coding
* AI Literacy
* Robotics
* Entrepreneurship
* Leadership
* Communication

---

## FR-007 Teachers

Menampilkan:

* Profil Guru
* Bidang
* Foto

---

## FR-008 Student Life

Menampilkan:

* Aktivitas
* Program
* Ekstrakurikuler
* Dokumentasi

---

## FR-009 Gallery

Galeri foto kegiatan.

---

## FR-010 Articles

Menampilkan daftar artikel.

Kategori:

* Parenting
* Pendidikan
* AI
* Islam
* Berita

---

## FR-011 Contact

Menampilkan:

* Alamat
* Maps
* WhatsApp
* Email
* Jam Operasional

---

## FR-012 PPDB

Halaman informasi PPDB berisi:

* Jadwal
* Alur
* Persyaratan
* FAQ
* CTA

---

## FR-013 Search (Future)

Pencarian artikel.

---

## FR-014 CMS (Future)

Admin dapat:

* CRUD Artikel
* CRUD Galeri
* CRUD Halaman

---

# 4. Non Functional Requirements

---

## Performance

Website harus:

* Loading < 2 detik
* LCP < 2.5 detik
* CLS < 0.1
* TTI < 3 detik

---

## SEO

Harus memiliki:

* Sitemap
* Robots
* Canonical URL
* Meta Title
* Meta Description
* Open Graph
* Structured Data

---

## Accessibility

Mengikuti WCAG 2.2 Level AA:

* Semantic HTML
* Keyboard Navigation
* Alt Text
* Color Contrast
* Focus Indicator

---

## Responsive

Support:

* Mobile
* Tablet
* Desktop

---

## Browser Support

* Chrome
* Edge
* Firefox
* Safari

---

## Security

* HTTPS
* Security Headers
* No Sensitive Data
* Valid Input Handling

---

## Maintainability

Kode harus:

* Modular
* Reusable
* Typed
* Readable
* Documented

---

# 5. UI Requirements

Design Style

* Modern
* Premium
* Minimal
* Elegant

---

Typography

Primary

Plus Jakarta Sans

---

Colors

Primary

Emerald

Secondary

White

Accent

Amber

Neutral

Gray

---

Spacing

Gunakan skala 4px.

---

Border Radius

Medium

---

Shadow

Soft

---

Animation

Ringan.

Tidak mengganggu performa.

---

# 6. Component Requirements

Reusable Components:

* Navbar
* Footer
* Button
* Container
* Card
* CTA
* Hero
* Section Title
* Timeline
* Feature Card
* Statistic Card
* Testimonial Card

---

# 7. Page Requirements

## Home

Sections:

* Hero
* Highlights
* Programs
* KFLF
* Future Skills
* Testimonials
* CTA

---

## About

Sections:

* History
* Vision
* Mission
* Values

---

## KFLF

Sections:

* Philosophy
* Framework
* Domains

---

## PPDB

Sections:

* Registration
* Schedule
* FAQ
* Contact

---

## Contact

Sections:

* Contact Info
* Maps
* WhatsApp
* Form (Future)

---

# 8. Technical Requirements

Framework

Astro

Language

TypeScript

Styling

Tailwind CSS

Hosting

Vercel

Version Control

Git

Repository

GitHub

---

# 9. Folder Structure

```text
src/
 assets/
 components/
   common/
   layout/
   sections/
   ui/
 content/
 data/
 layouts/
 lib/
 pages/
 styles/
 types/

public/
```

---

# 10. Coding Standards

* TypeScript Strict Mode
* Component Based
* DRY
* KISS
* Semantic HTML
* Mobile First
* No Inline Styles
* No Dead Code

---

# 11. Acceptance Criteria

Website dinyatakan selesai apabila:

✓ Semua halaman utama tersedia

✓ Responsive

✓ SEO Ready

✓ Lighthouse >95

✓ Accessibility >95

✓ Tidak ada console error

✓ Tidak ada broken link

✓ Mobile navigation berjalan dengan baik

✓ Build berhasil tanpa warning kritis

---

# 12. Future Roadmap

Phase 2

* CMS
* Blog
* Search

Phase 3

* PPDB Online

Phase 4

* Portal Guru

Phase 5

* Portal Orang Tua

Phase 6

* CRM Wali Murid

Phase 7

* Dashboard Yayasan

---

# 13. Quality Gates

Sebelum setiap rilis, sistem harus lulus:

* Build Success
* ESLint
* Type Check
* Responsive Test
* Lighthouse Audit
* Accessibility Audit
* Link Validation
* Manual QA Checklist

Tidak ada fitur yang dapat dirilis apabila salah satu Quality Gate gagal.
