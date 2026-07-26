# CLAUDE.md

# AI Development Guide

## Website Resmi Madrasah Khairul Falah

Version 1.0

---

# Purpose

Dokumen ini berisi aturan, standar, dan workflow yang WAJIB dipatuhi oleh Claude Code selama proses pengembangan.

Claude harus memperlakukan dokumen ini sebagai sumber kebenaran utama (single source of truth) bersama dengan:

* README.md
* PROJECT_CHARTER.md
* SRS.md
* DESIGN_SYSTEM.md
* CONTENT_STRATEGY.md
* INFORMATION_ARCHITECTURE.md

Apabila terdapat konflik, urutan prioritas adalah:

1. SRS.md
2. DESIGN_SYSTEM.md
3. INFORMATION_ARCHITECTURE.md
4. CONTENT_STRATEGY.md
5. PROJECT_CHARTER.md
6. README.md

---

# Project Goal

Membangun website resmi Madrasah Khairul Falah yang:

* Modern
* Cepat
* Mobile First
* SEO Friendly
* Accessibility First
* Mudah dipelihara
* Mudah dikembangkan
* Siap menjadi fondasi ekosistem digital yayasan

Website ini **bukan sekadar company profile**, tetapi merupakan fondasi jangka panjang yang nantinya akan terintegrasi dengan layanan digital lainnya.

---

# Tech Stack

Gunakan hanya teknologi berikut kecuali ada persetujuan eksplisit.

## Core

* Astro
* TypeScript
* Tailwind CSS

## Hosting

* Vercel

## Version Control

* Git
* GitHub

## Icons

* Lucide

## Fonts

* Plus Jakarta Sans

---

# Development Principles

Seluruh kode harus mengikuti prinsip berikut.

* Clean Code
* SOLID (jika relevan)
* DRY
* KISS
* YAGNI
* Component Based
* Progressive Enhancement
* Semantic HTML

---

# Project Architecture

Selalu pertahankan struktur berikut.

```text
src/
│
├── assets/
├── components/
│   ├── common/
│   ├── layout/
│   ├── sections/
│   └── ui/
│
├── content/
├── data/
├── layouts/
├── lib/
├── pages/
├── styles/
└── types/

public/
```

Jangan mengubah struktur folder tanpa alasan yang kuat.

---

# Before Writing Code

Setiap kali menerima tugas, lakukan langkah berikut:

1. Pahami tujuan fitur.
2. Baca dokumen terkait.
3. Cari apakah sudah ada komponen yang bisa digunakan kembali.
4. Hindari membuat komponen baru jika yang lama dapat digunakan.
5. Rencanakan implementasi terlebih dahulu.
6. Baru lakukan perubahan kode.

---

# Code Quality Rules

Claude WAJIB:

* menggunakan TypeScript strict
* menggunakan semantic HTML
* membuat reusable components
* menghindari inline styles
* menghindari duplikasi kode
* memberikan nama file yang jelas
* memberikan nama variabel yang bermakna

---

# Component Rules

Komponen harus:

* reusable
* kecil
* memiliki satu tanggung jawab
* mudah diuji
* mudah dibaca

Contoh:

✅ HeroSection

❌ HomepageComponentEverything

---

# Styling Rules

Gunakan:

Tailwind CSS

Jangan gunakan:

* CSS framework lain
* inline style
* hardcoded color
* hardcoded spacing

Gunakan utility Tailwind sesuai Design System.

---

# Responsive Rules

Website menggunakan pendekatan:

Mobile First

Support:

* Mobile
* Tablet
* Desktop

Tidak boleh ada horizontal scrolling.

---

# Accessibility Rules

Selalu gunakan:

* semantic HTML
* aria-label bila diperlukan
* alt image
* focus state
* keyboard navigation

Target:

WCAG 2.2 AA

---

# Performance Rules

Prioritas:

1. Performa
2. Accessibility
3. SEO
4. Visual

Gunakan:

* Astro Image bila sesuai
* lazy loading
* responsive image
* minimal JavaScript

Jangan menambahkan library besar tanpa alasan yang jelas.

---

# SEO Rules

Setiap halaman harus memiliki:

* title
* description
* canonical
* Open Graph
* structured data bila relevan

Heading harus berurutan.

---

# Design Rules

Ikuti DESIGN_SYSTEM.md.

Jangan:

* mengganti warna utama
* mengganti font
* membuat gaya visual yang tidak konsisten

---

# Content Rules

Ikuti CONTENT_STRATEGY.md.

Claude tidak boleh:

* membuat klaim yang tidak dapat diverifikasi
* mengarang angka
* mengarang prestasi
* mengarang sejarah
* mengarang statistik

Jika data belum tersedia, gunakan placeholder yang jelas.

---

# Navigation Rules

Ikuti INFORMATION_ARCHITECTURE.md.

Jangan:

* menambah menu baru
* menghapus menu
* mengubah struktur URL

tanpa instruksi.

---

# Reusable Components

Selalu gunakan komponen.

Contoh:

* Button
* Card
* Badge
* Hero
* CTA
* Navbar
* Footer
* Container

Jangan mengulang kode UI yang sama.

---

# File Naming

Gunakan:

PascalCase

Contoh:

HeroSection.astro

FeatureCard.astro

PrimaryButton.astro

---

# Folder Naming

Gunakan:

lowercase

Contoh:

components

layouts

styles

---

# Import Rules

Gunakan import yang rapi.

Urutan:

1. Library
2. Components
3. Utils
4. Types

---

# Comment Rules

Berikan komentar hanya bila:

* logika kompleks
* algoritma
* keputusan desain

Jangan memberi komentar pada kode yang sudah jelas.

---

# Git Commit Convention

Gunakan:

```text
feat:
fix:
docs:
style:
refactor:
perf:
test:
chore:
```

---

# Error Handling

Selalu:

* tampilkan pesan yang jelas
* jangan membiarkan aplikasi crash
* gunakan fallback

---

# Dependencies

Sebelum menambahkan dependency baru:

Claude harus menjelaskan:

* alasan
* manfaat
* alternatif

Jangan menambahkan dependency tanpa persetujuan.

---

# Refactoring Rules

Claude boleh melakukan refactor apabila:

* meningkatkan keterbacaan
* mengurangi duplikasi
* meningkatkan performa

Namun:

Jangan mengubah perilaku sistem tanpa instruksi.

---

# Sprint Workflow

Setiap sprint harus mengikuti urutan berikut.

1. Analisis
2. Rencana
3. Implementasi
4. Review
5. Self QA
6. Build Check

---

# After Completing a Task

Claude harus melaporkan:

## Files Created

## Files Updated

## Summary

## Next Recommendation

---

# Forbidden Actions

Claude TIDAK BOLEH:

* menghapus file tanpa alasan
* mengganti arsitektur
* mengubah stack teknologi
* mengubah struktur folder utama
* menghapus reusable component
* membuat hardcoded data permanen
* menambahkan library besar tanpa izin
* menambahkan fitur di luar sprint yang sedang dikerjakan

---

# Preferred Workflow

Untuk setiap permintaan implementasi:

1. Jelaskan rencana singkat.
2. Sebutkan file yang akan dibuat atau diubah.
3. Implementasikan perubahan.
4. Jalankan pemeriksaan build jika memungkinkan.
5. Berikan ringkasan hasil.

---

# Definition of Done

Sebuah tugas dianggap selesai apabila:

* Kode bersih dan konsisten.
* Tidak ada error TypeScript.
* Tidak ada error build.
* Responsive pada mobile dan desktop.
* Mengikuti Design System.
* Mengikuti Information Architecture.
* Mengikuti SRS.
* Tidak ada duplikasi kode.
* Komponen reusable digunakan dengan benar.
* Dokumentasi diperbarui jika diperlukan.

---

# Long-Term Vision

Setiap keputusan teknis harus mempertimbangkan bahwa website ini akan berkembang menjadi ekosistem digital yang terintegrasi dengan:

* PPDB Online
* Portal Guru
* Portal Orang Tua
* CRM Wali Murid
* Sistem Keuangan Yayasan
* Sistem Inventaris
* Transparansi Infaq
* Dashboard Yayasan

Claude harus selalu memilih solusi yang sederhana untuk saat ini, namun tetap mudah dikembangkan di masa depan.

---

# Final Instruction

Jika terdapat keraguan terhadap suatu implementasi:

* Jangan menebak.
* Jangan membuat asumsi penting.
* Jelaskan pilihan yang tersedia.
* Minta arahan apabila keputusan akan memengaruhi arsitektur, pengalaman pengguna, atau ruang lingkup proyek.

Tujuan utama adalah menghasilkan kode yang berkualitas tinggi, mudah dipelihara, konsisten dengan dokumentasi proyek, dan siap dikembangkan dalam jangka panjang.
