# IMAGE_GUIDE.md

Panduan mengganti gambar di Website Resmi Madrasah Khairul Falah.

**Prinsip utama: cukup ganti file di folder `public/images/`, lalu refresh browser (atau
jalankan ulang `npm run build` untuk produksi). Tidak perlu membuka file kode apa pun.**

Setiap halaman sudah membaca nama file yang tetap di lokasi yang tetap. Selama file baru
memakai **nama file dan lokasi yang sama persis**, seluruh halaman otomatis menampilkan foto
yang baru. Selama file belum ada, halaman menampilkan gambar placeholder (bukan kotak abu-abu
kosong) supaya tampilan tetap rapi.

---

## Cara Mengganti Hero Homepage

1. Buka folder `public/images/hero/`
2. Replace `homepage.webp`
3. Refresh website.

Selesai.

## Cara Mengganti Foto Halaman Tentang

Replace `public/images/about/about.webp`

(Foto ini dipakai di dua tempat: halaman Tentang dan preview "Mengenal Madrasah Khairul Falah"
di homepage — cukup ganti satu file.)

## Cara Mengganti Foto Transformasi

Replace `public/images/transformation/hero.webp`

## Cara Mengganti Foto Kurikulum

Replace `public/images/curriculum/hero.webp`

## Cara Mengganti Foto Future Skills

Replace `public/images/future-skills/hero.webp`

## Cara Mengganti Foto Kehidupan Madrasah

Replace `public/images/student-life/hero.webp`

## Cara Mengganti Foto PPDB

Replace `public/images/ppdb/hero.webp`

## Cara Mengganti Foto Kontak

Replace `public/images/contact/hero.webp`

---

## Cara Mengganti Foto Galeri

Galeri (di halaman Kehidupan Madrasah, dan preview "Kehidupan Madrasah" di homepage) memakai
folder per kategori:

```
public/images/gallery/
  pembelajaran/1.webp
  tahfiz/1.webp
  project/1.webp
  prestasi/1.webp
  kegiatan/1.webp
  event/1.webp
```

Replace file `1.webp` di kategori yang ingin diganti. Nama kategori tidak boleh diubah (harus
tetap `pembelajaran`, `tahfiz`, `project`, `prestasi`, `kegiatan`, `event`) karena nama folder
itu yang dibaca sistem.

---

## Cara Menambah Artikel (dengan Foto)

Setiap artikel punya folder foto sendiri di `public/images/articles/nama-artikel/`, berisi:

```
public/images/articles/nama-artikel/
  cover.webp      (wajib — foto sampul artikel)
  1.webp          (opsional — foto galeri di dalam artikel)
  2.webp
  3.webp
  ...
```

Langkah:

1. Copy folder `public/images/articles/nama-artikel/` (sesuaikan nama dengan slug artikel).
2. Masukkan `cover.webp`, dan `1.webp`/`2.webp`/`3.webp` dst. bila artikel punya galeri foto.
3. Di file artikel (`src/content/articles/.../nama-artikel.md`), pastikan frontmatter `image.src`
   menunjuk ke `cover.webp` tersebut, dan (bila ada galeri) tambahkan array `gallery` — lihat
   contoh nyata di `src/content/articles/activities/keseruan-ekstrakurikuler-di-khairul-falah.md`.

Menambah/mengedit teks artikel tetap butuh menyunting file `.md` seperti biasa (ini di luar
sistem gambar) — tapi selama nama file foto & path-nya cocok, fotonya otomatis muncul tanpa
menyentuh kode Astro/TypeScript.

---

## Cara Upload Foto Guru

1. Copy file foto ke `public/images/teachers/` — beri nama sesuai identitas guru, mis.
   `nama-guru.webp`.
2. Edit data guru di `src/content/about/teachers.ts` (bagian data teks, bukan komponen), isi
   field `photo: { src: '/images/teachers/nama-guru.webp', alt: 'Nama Guru' }`.

(Langkah 2 tetap perlu menyunting data teks guru karena nama & filenya saling terkait — begitu
foto & data cocok, kartu guru otomatis menampilkan fotonya.)

---

## Cara Mengganti Logo

Folder `public/images/logos/` sudah disiapkan untuk logo resmi yayasan. **Belum diaktifkan di
navigasi** pada sprint ini (situs masih menampilkan nama teks "Madrasah Khairul Falah") —
menunggu aset logo resmi dan keputusan penempatan sebelum disambungkan ke Navbar, supaya
navigasi yang sudah berjalan tidak berubah tanpa aset final.

---

## Ukuran Gambar yang Direkomendasikan

| Jenis | Ukuran |
|---|---|
| Hero | 1920×1080 |
| About | 1600×900 |
| Card | 800×600 |
| Gallery | 1200×900 |
| Teacher | 600×600 |

**Format:** WebP
**Quality:** 80%

Gambar dengan rasio berbeda tetap akan tampil (dipotong otomatis mengikuti bentuk kotaknya,
bukan diregangkan) — ukuran di atas hanya rekomendasi supaya hasilnya paling tajam dan ringan.

---

## Bila Foto Belum Diganti

Selama file belum ada di lokasi yang seharusnya, halaman otomatis menampilkan gambar
placeholder bergaya emerald (bukan kotak abu-abu kosong). Ini normal — begitu file asli
ditambahkan dengan nama yang sama, placeholder otomatis tergantikan tanpa perubahan kode.

---

## Catatan Teknis (untuk developer)

- Seluruh path gambar berasal dari **Content Layer** (`src/content/**/*.ts` dan frontmatter
  `.md`), tidak ada path gambar yang ditulis langsung di file `.astro`.
- Pengecekan keberadaan file dilakukan di `src/lib/images.ts` (`resolveImage`/`imageExists`) —
  jalan saat build/dev di Node, memeriksa `public/` secara langsung.
- Komponen `SmartImage` (`src/components/ui/SmartImage.astro`) adalah satu-satunya tempat yang
  merender `<img>` untuk foto section — dipakai di seluruh Hero, About Preview, Kehidupan
  Madrasah, Galeri, dan kartu Artikel.
- Astro's built-in `<Image />` component **sengaja tidak dipakai** — komponen tersebut hanya
  bisa mengoptimalkan gambar yang di-import lewat ESM dari `src/assets/`, sementara sistem ini
  butuh path dinamis dari `public/images/` (dokumentasi resmi Astro: gambar di `public/`
  disajikan apa adanya, tidak diproses `<Image />`). `<img>` biasa dengan `width`/`height`/
  `loading="lazy"`/`decoding="async"` eksplisit dipakai sebagai gantinya — tetap responsive,
  lazy-loaded, dan mencegah layout shift, hanya tanpa resize/convert otomatis saat build.
- Foto guru (`PersonCard`) dan avatar testimoni (`TestimonialCard`) sengaja TIDAK memakai
  placeholder SVG baru — keduanya sudah punya fallback ikon lingkaran yang sudah berjalan baik,
  jadi hanya ditambah pengecekan keberadaan file (supaya path yang salah tidak menampilkan ikon
  gambar rusak), tanpa mengubah tampilan yang sudah ada.
