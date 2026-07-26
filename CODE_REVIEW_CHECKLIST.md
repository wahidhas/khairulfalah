# CODE_REVIEW_CHECKLIST.md

# Madrasah Khairul Falah Website

Version 1.0

---

# Purpose

Dokumen ini digunakan sebagai standar **Code Review** untuk memastikan setiap Sprint memenuhi kualitas yang ditetapkan sebelum dinyatakan selesai.

> **Aturan:** Tidak ada Sprint yang boleh dilanjutkan sebelum seluruh **Critical Checklist** terpenuhi.

---

# Review Workflow

```text
Development
      ↓
Build Verification
      ↓
Code Review
      ↓
Accessibility Review
      ↓
Performance Review
      ↓
SEO Review
      ↓
UI Review
      ↓
Refactoring (jika diperlukan)
      ↓
Sprint Approval
```

---

# Review Result

| Status     | Keterangan                                       |
| ---------- | ------------------------------------------------ |
| ✅ PASS     | Memenuhi standar                                 |
| ⚠️ WARNING | Perlu diperbaiki tetapi tidak menghalangi Sprint |
| ❌ FAIL     | Wajib diperbaiki sebelum Sprint selesai          |

---

# A. Build Verification (Critical)

| Item                               | Status |
| ---------------------------------- | ------ |
| Project berhasil build tanpa error | ☐      |
| Tidak ada TypeScript Error         | ☐      |
| Tidak ada lint error               | ☐      |
| Tidak ada runtime error            | ☐      |
| Tidak ada console error            | ☐      |
| Semua halaman dapat dibuka         | ☐      |

---

# B. Project Structure

| Item                                  | Status |
| ------------------------------------- | ------ |
| Struktur folder sesuai standar proyek | ☐      |
| Tidak ada file yang tidak digunakan   | ☐      |
| Tidak ada komponen duplikat           | ☐      |
| Penamaan folder konsisten             | ☐      |
| Penamaan file konsisten               | ☐      |

---

# C. Architecture Review

| Item                                        | Status |
| ------------------------------------------- | ------ |
| MainLayout digunakan dengan benar           | ☐      |
| Component reusable                          | ☐      |
| Tidak ada tight coupling                    | ☐      |
| Tidak ada logic yang seharusnya dipindahkan | ☐      |
| Folder sesuai tanggung jawab                | ☐      |

---

# D. Code Quality

| Item                                | Status |
| ----------------------------------- | ------ |
| Kode mudah dibaca                   | ☐      |
| Fungsi memiliki satu tanggung jawab | ☐      |
| Tidak ada duplikasi kode (DRY)      | ☐      |
| KISS diterapkan                     | ☐      |
| Tidak ada magic number atau string  | ☐      |
| Variabel memiliki nama yang jelas   | ☐      |
| Tidak ada komentar yang tidak perlu | ☐      |

---

# E. TypeScript

| Item                                      | Status |
| ----------------------------------------- | ------ |
| Strict Mode aktif                         | ☐      |
| Tidak menggunakan `any` tanpa alasan      | ☐      |
| Interface dan type digunakan dengan tepat | ☐      |
| Props terdokumentasi dengan baik          | ☐      |
| Tidak ada warning TypeScript              | ☐      |

---

# F. Components

| Item                                    | Status |
| --------------------------------------- | ------ |
| Ukuran komponen proporsional            | ☐      |
| Mudah digunakan kembali                 | ☐      |
| Tidak ada komponen terlalu kompleks     | ☐      |
| Props sederhana dan konsisten           | ☐      |
| Tidak ada komponen yang tidak digunakan | ☐      |

---

# G. Tailwind CSS

| Item                           | Status |
| ------------------------------ | ------ |
| Mengikuti Design System        | ☐      |
| Tidak ada inline style         | ☐      |
| Utility class tidak berlebihan | ☐      |
| Tidak ada duplikasi styling    | ☐      |
| Spacing konsisten              | ☐      |
| Warna konsisten                | ☐      |
| Typography konsisten           | ☐      |

---

# H. Responsive Design

Uji pada:

* Mobile
* Tablet
* Laptop
* Desktop

Checklist:

| Item                                 | Status |
| ------------------------------------ | ------ |
| Tidak ada horizontal scroll          | ☐      |
| Navbar responsif                     | ☐      |
| Footer responsif                     | ☐      |
| Grid responsif                       | ☐      |
| Gambar responsif                     | ☐      |
| Tombol mudah disentuh (touch target) | ☐      |

---

# I. Accessibility (WCAG 2.2 AA)

| Item                                 | Status |
| ------------------------------------ | ------ |
| Semantic HTML                        | ☐      |
| Heading hierarchy benar              | ☐      |
| Keyboard navigation                  | ☐      |
| Focus indicator terlihat             | ☐      |
| Alt text tersedia                    | ☐      |
| aria-label digunakan bila diperlukan | ☐      |
| Kontras warna memadai                | ☐      |
| Form mudah diakses                   | ☐      |

---

# J. Performance

Target Lighthouse:

| Metrik         | Target |
| -------------- | ------ |
| Performance    | ≥95    |
| Accessibility  | ≥95    |
| Best Practices | ≥95    |
| SEO            | ≥95    |

Checklist:

| Item                                                | Status |
| --------------------------------------------------- | ------ |
| JavaScript minimal                                  | ☐      |
| Lazy loading digunakan bila perlu                   | ☐      |
| Tidak ada aset berukuran berlebihan                 | ☐      |
| Font dioptimalkan                                   | ☐      |
| Tidak ada render-blocking resource yang tidak perlu | ☐      |

---

# K. SEO

| Item                   | Status |
| ---------------------- | ------ |
| Meta Title             | ☐      |
| Meta Description       | ☐      |
| Canonical URL          | ☐      |
| Open Graph             | ☐      |
| Sitemap                | ☐      |
| Robots                 | ☐      |
| Heading SEO benar      | ☐      |
| Internal link tersedia | ☐      |

---

# L. UI Consistency

| Item                       | Status |
| -------------------------- | ------ |
| Mengikuti DESIGN_SYSTEM.md | ☐      |
| Border radius konsisten    | ☐      |
| Warna konsisten            | ☐      |
| Icon konsisten             | ☐      |
| Button konsisten           | ☐      |
| Card konsisten             | ☐      |
| Spacing konsisten          | ☐      |

---

# M. Security

| Item                                | Status |
| ----------------------------------- | ------ |
| Tidak ada secret dalam source code  | ☐      |
| Tidak ada hardcoded credential      | ☐      |
| Tidak ada data sensitif pada client | ☐      |
| Link eksternal aman                 | ☐      |

---

# N. Documentation

| Item                                     | Status |
| ---------------------------------------- | ------ |
| README diperbarui bila perlu             | ☐      |
| Dokumentasi sprint diperbarui            | ☐      |
| Struktur proyek tetap sesuai dokumentasi | ☐      |

---

# O. Technical Debt

Periksa apakah terdapat:

* Kode sementara (temporary code)
* TODO tanpa penjelasan
* FIXME
* Komponen yang perlu dipecah
* Fungsi yang terlalu panjang
* Struktur yang berpotensi menyulitkan pengembangan berikutnya

Catatan:

```
....................................................................

....................................................................

....................................................................
```

---

# P. Sprint Acceptance

## Critical Issues

Jumlah:

```
_____
```

---

## Warning

Jumlah:

```
_____
```

---

## Recommendation

```
....................................................................

....................................................................

....................................................................
```

---

# Final Score

| Area          | Score |
| ------------- | ----: |
| Build         |   /10 |
| Architecture  |   /10 |
| Code Quality  |   /10 |
| Components    |   /10 |
| TypeScript    |   /10 |
| Responsive    |   /10 |
| Accessibility |   /10 |
| Performance   |   /10 |
| SEO           |   /10 |
| Documentation |   /10 |

---

# Overall Score

```
____ /100
```

---

# Sprint Decision

Pilih salah satu:

* ☐ ✅ APPROVED — Sprint dapat ditutup dan lanjut ke sprint berikutnya.
* ☐ ⚠️ APPROVED WITH MINOR FIXES — Sprint dapat ditutup setelah perbaikan kecil.
* ☐ ❌ REJECTED — Sprint belum memenuhi standar dan wajib diperbaiki sebelum melanjutkan.

---

# Reviewer Notes

```
....................................................................

....................................................................

....................................................................

....................................................................
```

---

# AI Review Instructions

Saat diminta melakukan Code Review, Claude Code harus:

1. Bertindak sebagai **Principal Software Engineer**, bukan sebagai penulis kode.
2. Bersikap objektif dan kritis terhadap hasil implementasi.
3. Tidak menambahkan fitur baru selama proses review.
4. Mengelompokkan temuan menjadi:

   * Critical
   * Major
   * Minor
   * Suggestion
5. Memberikan rekomendasi refactoring yang spesifik, termasuk file yang perlu diperbaiki.
6. Menyatakan sprint **APPROVED** hanya jika tidak ada temuan **Critical** yang tersisa.
