# INFORMATION_ARCHITECTURE.md

> Direktori `/teachers` memuat guru MI, guru MTs, dan tenaga kependidikan, dengan
> filter Semua/MI/MTs/Tendik. Enam profil ringkas dan tombol ke direktori tersedia
> di `/about#guru-tendik`; footer juga memuat tautan Guru & Tendik. Data terpusat
> di `src/content/teachers.ts`. Foto dapat ditambahkan ke
> `public/images/teachers/{id-profil}.webp` melalui mekanisme PersonCard yang sudah ada.

> Layanan Digital: empat kartu di beranda (`/#layanan-digital`) setelah Kegiatan & Karya,
> sebelum CTA SPMB. Footer semua halaman memuat SAJADA MI, SAJADA MTs, Ruang Baca,
> Laporan Infaq, dan Karya. Akses terkait juga tersedia di MI/MTs, Tentang Kami (Infaq),
> serta Kegiatan & Karya (Karya). Alamat dan deskripsi dikelola dalam
> `src/content/digital-services.ts`. Tautan aplikasi membuka tab baru; navigasi utama tetap lima menu.

> Addendum 2027/2028: navigasi utama kini Beranda, Jenjang Pendidikan (MI, MTs, RA melalui admin), Kegiatan & Karya, Tentang Kami, dan Kontak. Ringkasan dan tautan Kurikulum KFLF tersedia di halaman Tentang Kami; SPMB diakses melalui tombol Daftar SPMB dan CTA penerimaan. Rute baru `/mi`, `/mts`, `/spmb/mi`, `/spmb/mts`; `/ppdb` tetap menjadi pusat SPMB. Rute lama tetap tersedia. Lihat [catatan redesign](docs/REDESIGN_2027_2028.md).

# Website Resmi Madrasah Khairul Falah

Version 1.0

---

# Purpose

Dokumen ini mendefinisikan arsitektur informasi (Information Architecture/IA) website Madrasah Khairul Falah.

Tujuan IA adalah memastikan seluruh konten memiliki struktur yang jelas, navigasi yang mudah dipahami, serta mendukung pengalaman pengguna (UX), optimasi mesin pencari (SEO), dan pengembangan jangka panjang.

---

# Information Architecture Principles

Website dibangun berdasarkan prinsip berikut:

* Mobile First
* User Centered
* Simple Navigation
* Maximum Three Clicks Rule
* Clear Information Hierarchy
* SEO Friendly Structure
* Scalable Architecture

---

# Primary User Journey

## Calon Orang Tua

Home

↓

Mengenal Madrasah

↓

Program Pendidikan

↓

Kurikulum

↓

Future Skills

↓

PPDB

↓

Hubungi Kami

---

## Orang Tua Siswa

Home

↓

Informasi Sekolah

↓

Artikel

↓

Galeri

↓

Kontak

---

## Masyarakat

Home

↓

Tentang

↓

Program

↓

Artikel

↓

Kontak

---

# Global Sitemap

```text
Home
│
├── Tentang
│   ├── Sejarah
│   ├── Visi & Misi
│   ├── Nilai-Nilai
│   ├── Tim Pimpinan
│   └── Guru & Tenaga Kependidikan
│
├── Transformasi
│   ├── Arah Transformasi
│   ├── Roadmap
│   ├── Prioritas Strategis
│   └── Dampak
│
├── Kurikulum
│   ├── KFLF
│   ├── Learning Domains
│   ├── Metode Pembelajaran
│   ├── Assessment
│   └── Future Skills
│
├── Kehidupan Madrasah
│   ├── Aktivitas Harian
│   ├── Tahfiz
│   ├── Project
│   ├── Ekstrakurikuler
│   └── Prestasi
│
├── Artikel
│   ├── Parenting
│   ├── Pendidikan
│   ├── Islam
│   ├── Future Skills
│   └── Berita
│
├── Galeri
│
├── PPDB
│   ├── Alur
│   ├── Jadwal
│   ├── Persyaratan
│   ├── FAQ
│   └── Daftar
│
├── Kontak
│
├── Privacy Policy
│
├── Terms
│
└── 404
```

---

# Navigation Structure

## Desktop Navigation

```text
Logo

Tentang

Transformasi

Kurikulum

Kehidupan

Artikel

PPDB

Kontak

Button:
Daftar Sekarang
```

---

## Mobile Navigation

Bottom priority:

* Home
* Kurikulum
* PPDB
* Kontak

Menu lainnya menggunakan Drawer.

---

# Footer Navigation

## Profil

* Tentang
* Visi
* Guru

---

## Akademik

* Kurikulum
* Future Skills
* Kehidupan Madrasah

---

## Informasi

* Artikel
* Galeri
* PPDB

---

## Kontak

* WhatsApp
* Email
* Lokasi

---

# Homepage Architecture

```text
Hero
│
Value Proposition
│
Mengapa Memilih Kami
│
Program Unggulan
│
KFLF
│
Future Skills
│
Kehidupan Madrasah
│
Prestasi
│
Testimoni
│
FAQ
│
Call To Action
│
Footer
```

---

# About Page

```text
Hero

↓

Sejarah

↓

Visi

↓

Misi

↓

Nilai

↓

Budaya Madrasah

↓

Guru

↓

CTA
```

---

# Transformation Page

```text
Hero

↓

Mengapa Bertransformasi

↓

Visi Masa Depan

↓

Roadmap

↓

Prioritas Strategis

↓

Target

↓

CTA
```

---

# Curriculum Page

```text
Hero

↓

Filosofi

↓

KFLF

↓

Learning Domains

↓

Metode

↓

Assessment

↓

CTA
```

---

# Future Skills

```text
Hero

↓

Coding

↓

AI Literacy

↓

Robotics

↓

Communication

↓

Leadership

↓

Entrepreneurship

↓

CTA
```

---

# Student Life

```text
Hero

↓

Aktivitas Harian

↓

Tahfiz

↓

Project

↓

Ekstrakurikuler

↓

Prestasi

↓

CTA
```

---

# PPDB

```text
Hero

↓

Mengapa Memilih Kami

↓

Persyaratan

↓

Alur

↓

Jadwal

↓

Biaya (bila dipublikasikan)

↓

FAQ

↓

Daftar

↓

Kontak
```

---

# Contact

```text
Informasi

↓

Peta

↓

WhatsApp

↓

Jam Operasional

↓

Media Sosial
```

---

# URL Structure

Gunakan URL pendek, deskriptif, dan konsisten.

```text
/

about

transformation

curriculum

future-skills

student-life

teachers

gallery

articles

articles/{slug}

ppdb

contact
```

Hindari:

```text
page1

content123

artikel-new

post-final
```

---

# Breadcrumb Strategy

Gunakan breadcrumb pada halaman selain Home.

Contoh:

```text
Home

>

Kurikulum

>

KFLF
```

---

# Internal Linking Strategy

Setiap halaman minimal memiliki:

* 3 internal link
* 1 CTA
* 1 navigasi menuju halaman terkait

Contoh:

Artikel

↓

Future Skills

↓

PPDB

---

# CTA Flow

Pengunjung diarahkan menuju:

```text
Home

↓

Program

↓

PPDB

↓

WhatsApp
```

atau

```text
Artikel

↓

Kurikulum

↓

PPDB
```

---

# Search Strategy (Future)

Search harus mampu mencari:

* Artikel
* Halaman
* Program
* FAQ

---

# Taxonomy

## Articles

* Parenting
* Pendidikan
* Islam
* Future Skills
* Teknologi
* Berita

---

## Gallery

* Pembelajaran
* Tahfiz
* Project
* Prestasi
* Kegiatan
* Event

---

# Metadata Strategy

Setiap halaman wajib memiliki:

* Meta Title
* Meta Description
* Canonical URL
* Open Graph Image
* Structured Data
* Breadcrumb Schema

---

# Error Pages

## 404

Menampilkan:

* Pesan ramah
* Tombol kembali ke Home
* Kolom pencarian (future)
* Link populer

---

# Accessibility

Navigasi wajib mendukung:

* Keyboard
* Screen Reader
* Skip to Content
* Focus Indicator

---

# Scalability

Arsitektur harus siap menerima halaman baru tanpa mengubah struktur utama.

Contoh ekspansi:

```text
Portal Guru

Portal Orang Tua

Portal Alumni

Dashboard Yayasan

Donasi

Karier

Kemitraan
```

---

# Future Digital Ecosystem

```text
Website

│

├── PPDB Online

├── Portal Guru

├── Portal Orang Tua

├── CRM

├── Dashboard Yayasan

├── Sistem Keuangan

├── Inventaris

├── Transparansi Infaq

└── Assessment Platform
```

Website publik tetap menjadi gerbang utama menuju seluruh layanan digital.

---

# Navigation Rules

* Maksimal 7 item pada menu utama desktop.
* Semua halaman penting dapat dicapai maksimal dalam tiga klik.
* CTA "Daftar Sekarang" selalu terlihat pada desktop.
* Navigasi mobile menggunakan drawer yang sederhana dan mudah dijangkau.
* Footer menyediakan akses ke seluruh halaman penting.

---

# SEO Information Hierarchy

Prioritas indeks mesin pencari:

1. Home
2. PPDB
3. Kurikulum
4. Future Skills
5. Tentang
6. Artikel
7. Galeri
8. Kontak

---

# Content Ownership

| Halaman       | Penanggung Jawab    |
| ------------- | ------------------- |
| Home          | Tim Komunikasi      |
| Tentang       | Yayasan             |
| Transformasi  | Pimpinan Madrasah   |
| Kurikulum     | Tim Kurikulum       |
| Future Skills | Koordinator Program |
| Artikel       | Tim Konten          |
| PPDB          | Panitia PPDB        |
| Kontak        | Admin               |

---

# Information Architecture Success Criteria

Arsitektur informasi dinyatakan berhasil apabila:

* Pengunjung dapat menemukan informasi utama tanpa kebingungan.
* Navigasi konsisten di seluruh halaman.
* Struktur URL mudah dipahami.
* Hubungan antarhalaman jelas melalui internal link.
* Setiap halaman memiliki tujuan yang spesifik dan CTA yang relevan.
* Struktur tetap mudah dikembangkan untuk fitur dan layanan baru tanpa mengubah fondasi navigasi.
