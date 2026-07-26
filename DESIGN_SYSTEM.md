# DESIGN_SYSTEM.md

# Madrasah Khairul Falah Website Design System

Version 1.0

---

# Design Philosophy

Website Madrasah Khairul Falah harus mencerminkan transformasi pendidikan Islam yang modern, profesional, ramah, dan berorientasi masa depan.

Karakter visual yang ingin dibangun:

* Modern
* Elegant
* Trustworthy
* Human Centered
* Clean
* Future Ready
* Islamic with Modern Aesthetic

Website harus mengutamakan keterbacaan, aksesibilitas, dan pengalaman pengguna yang sederhana.

---

# Design Principles

## 1. Mobile First

Semua halaman dirancang untuk layar mobile terlebih dahulu, kemudian diskalakan ke tablet dan desktop.

---

## 2. Simplicity

Setiap elemen harus memiliki tujuan yang jelas.

Hindari dekorasi yang tidak memberikan nilai.

---

## 3. Consistency

Seluruh halaman harus menggunakan:

* warna yang konsisten
* typography yang konsisten
* spacing yang konsisten
* icon yang konsisten
* button yang konsisten

---

## 4. Accessibility

Semua pengguna harus dapat menggunakan website dengan nyaman.

Mengikuti WCAG 2.2 AA.

---

## 5. Performance

Keindahan tidak boleh mengorbankan performa.

Animasi ringan.

Tidak menggunakan library UI yang berat tanpa alasan.

---

# Brand Personality

Website harus memberikan kesan:

* Aman
* Profesional
* Hangat
* Islami
* Visioner
* Terpercaya

---

# Color System

## Primary

Emerald

Digunakan untuk:

* CTA
* Links
* Highlight
* Active Navigation

Tailwind

```text
emerald-600
emerald-700
emerald-800
```

---

## Secondary

White

Background utama.

---

## Accent

Amber

Digunakan untuk:

* Badge
* Highlight
* Statistics
* Awards

Tailwind

```text
amber-400
amber-500
amber-600
```

---

## Neutral

Gray

Gunakan:

```text
gray-50
gray-100
gray-200
gray-500
gray-700
gray-900
```

---

# Color Rules

Primary maksimal 20%.

White minimal 60%.

Accent maksimal 10%.

Tidak menggunakan warna secara berlebihan.

---

# Typography

## Primary Font

Plus Jakarta Sans

Fallback

```text
Inter

System UI
```

---

## Font Weight

300

Light

400

Regular

500

Medium

600

Semibold

700

Bold

---

# Heading Scale

H1

48px Desktop

36px Tablet

32px Mobile

---

H2

40px

---

H3

32px

---

H4

24px

---

H5

20px

---

Body

16px

---

Small

14px

---

Caption

12px

---

# Line Height

Heading

120%

Body

160%

---

# Spacing System

Gunakan skala 4px.

```text
4
8
12
16
20
24
32
40
48
64
80
96
128
```

Tidak menggunakan nilai acak.

---

# Grid System

Container

```text
max-width

1280px
```

Padding

Desktop

32px

Tablet

24px

Mobile

16px

---

# Responsive Breakpoints

Tailwind Default

```text
sm

640

md

768

lg

1024

xl

1280

2xl

1536
```

---

# Border Radius

Gunakan:

```text
rounded-lg

rounded-xl

rounded-2xl
```

Tidak menggunakan radius ekstrem.

---

# Shadow

Gunakan shadow ringan.

```text
shadow-sm

shadow

shadow-md

shadow-lg
```

Hindari shadow berlebihan.

---

# Icons

Gunakan hanya:

Lucide Icons

Ikon harus:

* sederhana
* outline
* konsisten

Ukuran:

16

20

24

32

---

# Images

Gunakan foto nyata.

Prioritas:

* aktivitas siswa
* guru
* kelas
* pembelajaran
* lingkungan sekolah

Hindari:

* foto stok yang berlebihan
* ilustrasi kartun
* gambar AI yang tidak autentik

---

# Buttons

## Primary Button

Background

Emerald

Text

White

Hover

Lebih gelap

---

## Secondary Button

Background

White

Border

Emerald

Text

Emerald

---

## Ghost Button

Background

Transparent

Hover

Gray-100

---

# Cards

Gunakan:

White Background

Soft Shadow

Rounded XL

Padding 24px

Hover:

* translate sedikit
* shadow bertambah

Animasi maksimal 200ms.

---

# Sections

Urutan standar:

Section Title

↓

Description

↓

Content

↓

CTA (optional)

---

# Navigation

Navbar

Sticky

Transparent saat di atas.

Berubah putih saat scroll.

Logo kiri.

Menu kanan.

CTA di kanan.

Mobile menggunakan Drawer.

---

# Footer

Footer terdiri dari:

* Logo
* Tentang
* Quick Links
* Kontak
* Social Media
* Copyright

---

# Forms

Input

Rounded

Border Gray-300

Focus Emerald

Label di atas.

Error merah.

Success hijau.

---

# Animations

Gunakan seperlunya.

Durasi:

150–250ms

Gunakan:

* fade
* slide
* scale kecil

Hindari:

* bounce
* spin
* animasi berlebihan

---

# Component Library

Semua komponen harus reusable.

## Layout

* Container
* Section
* PageHeader

---

## Navigation

* Navbar
* MobileMenu
* Footer

---

## UI

* Button
* Badge
* Card
* Avatar
* Divider
* Tag
* Chip

---

## Content

* Hero
* CTA
* Timeline
* Statistic
* Feature
* Testimonial
* FAQ
* Gallery

---

# Naming Convention

PascalCase

Contoh:

```text
HeroSection

FeatureCard

PrimaryButton

PageHeader
```

---

# Accessibility

Semua komponen wajib:

* keyboard friendly
* focus visible
* semantic HTML
* alt image
* aria-label bila diperlukan

---

# Performance Rules

Gunakan:

* Astro Image
* Lazy Loading
* Responsive Images
* Font Optimization

Hindari:

* gambar besar
* JavaScript yang tidak diperlukan
* library berat

---

# UI Patterns

Website mengikuti pola:

Hero

↓

Trust Indicators

↓

Value Proposition

↓

Programs

↓

Testimonials

↓

Call To Action

↓

Footer

Urutan ini digunakan pada landing page utama.

---

# Dark Mode

Belum menjadi prioritas pada versi 1.0.

Seluruh desain dioptimalkan untuk Light Mode.

---

# Future Design Expansion

Design System harus mampu berkembang tanpa mengubah fondasi.

Komponen baru wajib mengikuti:

* warna
* typography
* spacing
* naming
* accessibility
* responsive behavior

yang telah ditetapkan dalam dokumen ini.
