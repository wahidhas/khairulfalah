# IMAGE_GUIDE.md

Panduan mengganti gambar di Website Resmi Madrasah Khairul Falah.

**Prinsip utama: cukup ganti file di folder `public/images/`, lalu refresh browser (atau
jalankan ulang `npm run build` untuk produksi). Tidak perlu membuka file kode apa pun.**

Setiap halaman sudah membaca nama file yang tetap di lokasi yang tetap. Selama file baru
memakai **nama file dan lokasi yang sama persis**, seluruh halaman otomatis menampilkan foto
yang baru.

Selama foto asli belum ada, halaman menampilkan **ilustrasi placeholder kontekstual** — bukan
kotak abu-abu kosong, dan bukan pula satu gambar generik yang diulang di mana-mana. Setiap
bagian situs (hero beranda, domain kurikulum, kategori galeri, dst.) punya ilustrasi placeholder
sendiri yang sesuai temanya, supaya situs tetap terlihat rapi dan tidak monoton walau belum ada
satu pun foto asli.

---

## Sistem Image Slot

Setiap gambar di situs punya **slot** — identitas semantik seperti `"kflf.iman-al-quran"` atau
`"homepage.hero"` — yang menentukan ilustrasi placeholder mana yang tampil selama foto aslinya
belum ada. Slot ditulis di kode section (bukan sesuatu yang perlu Anda ubah untuk sekadar
mengganti foto), tapi berguna dipahami karena menjelaskan KENAPA tiap bagian situs sekarang
punya gambar placeholder yang berbeda-beda, bukan satu gambar yang sama diulang-ulang seperti
sebelumnya.

Alurnya:

```
Foto asli ADA di public/images/... (path yang didokumentasikan di bawah)
       ↓
Foto asli tersebut yang ditampilkan

Foto asli BELUM ADA
       ↓
Ilustrasi placeholder sesuai slot yang ditampilkan (lihat "Inventaris Placeholder" di bawah)
```

**Anda tidak perlu menyentuh konsep slot ini sama sekali** untuk mengganti gambar — cukup ikuti
langkah per-halaman di bawah. Slot hanya relevan bila developer menambah *jenis* gambar baru
yang belum ada di situs (lihat "Catatan Teknis" di akhir dokumen ini).

---

## Cara Mengganti Hero Homepage

1. Buka folder `public/images/hero/`
2. Replace `homepage.webp`
3. Refresh website.

Selesai.

## Cara Mengganti Foto Halaman Tentang

Ganti `public/images/about/about.png` dengan gambar baru. Gambar ditampilkan utuh
di halaman Tentang dan dioptimalkan saat build menjadi WebP responsif.

Jika nama atau format file berubah, sesuaikan `image.src` dan deskripsi `image.alt`
di `src/content/about/hero.ts`. Commit dan push ke GitHub untuk memperbarui website publik.

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

## Cara Mengganti Foto Domain Kurikulum (7 Learning Domains / KFLF)

Setiap domain di halaman Kurikulum (Iman & Al-Qur'an, Komunikasi Global, dst.) punya thumbnail
sendiri:

```
public/images/kflf/
  iman-al-quran.webp
  komunikasi-global.webp
  matematika-computational-thinking.webp
  sains-inovasi.webp
  peradaban-kepemimpinan-entrepreneurship.webp
  life-skills-wellbeing.webp
  creativity-impact-project.webp
```

Replace file domain yang ingin diganti fotonya. Sebelum foto asli ditambahkan, tiap domain
menampilkan ilustrasi placeholder yang berbeda sesuai temanya (mis. domain Iman & Al-Qur'an
menampilkan ilustrasi bertema Al-Qur'an, domain Sains & Inovasi menampilkan ilustrasi
laboratorium) — bukan satu gambar yang sama untuk ketujuh domain.

## Cara Mengganti Foto Domain Future Skills

Sama seperti KFLF, berlaku untuk halaman Future Skills Academy (AI Literacy, Coding, Robotics,
Communication, Entrepreneurship, Digital Citizenship):

```
public/images/future-skills/
  ai-literacy.webp
  coding.webp
  robotics.webp
  communication.webp
  entrepreneurship.webp
  digital-citizenship.webp
```

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

Dua cara, pilih salah satu:

**Cara cepat (tanpa edit kode):** taruh file di `public/images/teachers/{id-guru}.webp` — id
guru mengikuti `id` yang sudah ada di `src/content/about/teachers.ts` (mis. `guru-1.webp` untuk
entri `id: 'guru-1'`). Foto otomatis terdeteksi tanpa perlu mengedit file data.

**Cara eksplisit (bila ingin path/nama file bebas):**
1. Copy file foto ke `public/images/teachers/` — nama file bebas, mis. `nama-guru.webp`.
2. Edit data guru di `src/content/about/teachers.ts`, isi field
   `photo: { src: '/images/teachers/nama-guru.webp', alt: 'Nama Guru' }`.

**Penting:** selama foto asli belum ada, kartu guru TIDAK menampilkan ilustrasi/foto apa pun —
tetap memakai ikon orang generik yang sama untuk semua guru (bukan gambar baru). Ini sengaja:
menampilkan foto/ilustrasi berbeda per orang padahal belum ada fotonya berisiko terkesan
mengklaim identitas orang tertentu. Nama tetap ditampilkan apa adanya dari content file — jangan
pernah mengisi field `name` dengan nama karangan hanya supaya kartu terlihat lebih lengkap.

## Cara Upload Foto Testimoni

Sama seperti foto guru: taruh file di `public/images/testimonials/{id-testimoni}.webp` (id
mengikuti `src/content/homepage/testimonials.ts`, mis. `testimoni-1.webp`), atau isi field
`avatar` secara eksplisit di file yang sama. Selama belum ada foto, avatar tetap memakai ikon
generik (bukan foto orang), dan **nama/isi testimoni itu sendiri hanya boleh diisi setelah ada
testimoni asli yang terverifikasi** — jangan mengarang nama maupun kutipan.

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
| Card / Domain thumbnail | 800×450 |
| Gallery | 1200×1200 |
| Teacher / Testimonial | 600×600 |

**Format:** WebP
**Quality:** 80%

Gambar dengan rasio berbeda tetap akan tampil (dipotong otomatis mengikuti bentuk kotaknya,
bukan diregangkan) — ukuran di atas hanya rekomendasi supaya hasilnya paling tajam dan ringan.

---

## Inventaris Placeholder

24 ilustrasi placeholder kontekstual, di `public/images/placeholders/`. Masing-masing dipakai
oleh satu atau beberapa slot yang temanya cocok (lihat tabel di bawah) — tidak ada lagi satu
gambar yang dipakai berulang untuk konteks yang tidak berhubungan.

```
placeholders/
├── hero.webp                      — hero beranda
├── school.webp                    — profil madrasah (About, preview homepage)
├── transformation.webp            — hero halaman Transformasi
├── kflf.webp                      — hero halaman Kurikulum
├── future-skills.webp             — hero halaman Future Skills
├── student.webp                   — hero Kehidupan Madrasah, galeri Pembelajaran
├── enrollment.webp                — hero PPDB
├── location.webp                  — hero Kontak
├── quran.webp                     — domain Iman & Al-Qur'an, galeri Tahfiz
├── communication.webp             — domain Komunikasi Global / Communication
├── computational-thinking.webp    — domain Matematika & Computational Thinking
├── science.webp                   — domain Sains & Inovasi
├── leadership.webp                — domain Peradaban & Kepemimpinan, galeri Prestasi
├── life-skills.webp               — domain Life Skills & Wellbeing
├── creativity.webp                — domain Creativity & Impact, galeri Project
├── coding.webp                    — domain Future Skills: Coding
├── ai.webp                        — domain Future Skills: AI Literacy
├── robotics.webp                  — domain Future Skills: Robotics
├── digital-literacy.webp          — domain Future Skills: Digital Citizenship
├── entrepreneurship.webp          — domain Future Skills: Entrepreneurship
├── teacher.webp                   — (tidak dipakai langsung — lihat catatan di bawah)
├── testimonial.webp               — (tidak dipakai langsung — lihat catatan di bawah)
├── gallery.webp                   — galeri Kegiatan/Event, galeri artikel generik
└── article.webp                   — sampul artikel
```

Catatan: kartu **guru** dan **testimoni** TIDAK menampilkan file `teacher.webp`/`testimonial.webp`
ini — keduanya memakai ikon orang generik bawaan komponen (lihat bagian "Cara Upload Foto Guru"
di atas). Kedua file placeholder ini tetap ada di registry untuk konsistensi sistem/dipakai bila
suatu saat ada slot person baru yang butuh tampilan gambar (bukan ikon).

---

## Bila Foto Belum Diganti

Selama file belum ada di lokasi yang seharusnya, halaman otomatis menampilkan salah satu
ilustrasi placeholder di atas sesuai konteksnya (bukan kotak abu-abu kosong, dan bukan satu
gambar generik yang sama di semua tempat). Ini normal — begitu file asli ditambahkan dengan
nama yang sama, placeholder otomatis tergantikan tanpa perubahan kode. Teks alternatif (alt
text) gambar juga otomatis berubah: selama placeholder yang tampil, alt text-nya generik dan
jujur ("Ilustrasi — foto/dokumentasi asli belum tersedia"), BUKAN deskripsi konten asli — supaya
pembaca pembaca layar (screen reader) tidak salah mengira ilustrasi sebagai foto sungguhan.

---

## Catatan Teknis (untuk developer)

- Seluruh path gambar berasal dari **Content Layer** (`src/content/**/*.ts` dan frontmatter
  `.md`), tidak ada path gambar yang ditulis langsung di file `.astro`.
- Pengecekan keberadaan file dilakukan di `src/lib/images.ts` (`resolveImage`/`imageExists`) —
  jalan saat build/dev di Node, memeriksa `public/` secara langsung, memakai `process.cwd()`
  untuk resolve lokasi `public/`. **Jangan** ganti ke `fileURLToPath(new URL(..., import.meta.url))`
  — pola itu resolve ke path chunk bundel Vite saat production build (bukan lokasi source file),
  sehingga `imageExists()` selalu `false` walau file aslinya sudah ada (bug ini pernah terjadi
  dan sudah diperbaiki).
- **Sistem Image Slot** (`slotToPlaceholder`, `slotToRealPath`, `resolveImageSlot` di
  `src/lib/images.ts`): setiap gambar punya `slot` (identitas "namespace.key", mis.
  `"kflf.iman-al-quran"`) yang menentukan (1) kandidat path foto asli
  (`/images/{namespace}/{key}.webp`, dipakai bila content file belum mengisi `src` eksplisit)
  dan (2) kategori placeholder kontekstual yang tampil bila foto belum ada. Registry lengkapnya
  ada di `PLACEHOLDER_CATEGORY_FILE` (kategori -> file) dan `SLOT_CATEGORY_OVERRIDE` (slot ->
  kategori) di file yang sama — ini SATU-SATUNYA tempat yang perlu diedit untuk menambah
  kategori placeholder baru.
- Komponen `SmartImage` (`src/components/ui/SmartImage.astro`) merender gambar untuk section
  lama — dipakai di Hero, About Preview, domain
  Kurikulum/Future Skills, Kehidupan Madrasah, Galeri, dan kartu Artikel. Prop `slot` (opsional)
  memilih placeholder kontekstual; prop lama `fallback` (path literal) tetap didukung untuk
  kompatibilitas mundur tapi sebaiknya tidak dipakai lagi di kode baru. Alt text otomatis
  diganti ke teks generik jujur selama yang tampil adalah placeholder (lihat bagian di atas).
- `SmartImage` mengimpor aset dalam `public/images/about/` melalui `import.meta.glob`
  dan memakai Astro `<Image />` untuk menghasilkan WebP responsif saat build. Gambar lain
  tetap memakai `<img>` dengan dimensi dan pengaturan loading eksplisit.
  `ActivityMedia` juga mengoptimalkan gambar MI/MTs, sedangkan `FoundationLogo`
  mengoptimalkan logo yayasan. Path konten tetap disimpan di Content Layer.
- Foto guru (`PersonCard`) dan avatar testimoni (`TestimonialCard`) sengaja TIDAK memakai
  placeholder gambar — keduanya sudah punya fallback ikon lingkaran generik yang sudah berjalan
  baik dan sengaja dipertahankan (satu ikon yang sama untuk semua orang, supaya tidak terkesan
  mengklaim identitas siapa pun sebelum foto asli ada). Prop `slot` di kedua komponen ini hanya
  dipakai untuk menurunkan kandidat path foto asli otomatis (`slotToRealPath`), bukan untuk
  memilih ilustrasi placeholder.
