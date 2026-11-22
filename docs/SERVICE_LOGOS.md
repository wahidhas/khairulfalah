# Logo aplikasi Layanan Digital

Logo dari pemilik situs ditampilkan di atas nama aplikasi pada kartu Layanan Digital.
Sumber final berada di `public/images/logos/apps/`:

- `sajada.png`: SAJADA Islamic Education Logo.png, latar dihapus dengan built-in image_gen.
- `ruang-baca.png`: Ruang Baca Islamic Library Logo.png, latar dihapus dengan built-in image_gen.
- `infaq.png`: Infaq Berdaya Mosque and Book Logo.png, latar dihapus dengan built-in image_gen.
- `karya.webp`: karya-growth-logo.webp, file asli yang sudah memiliki alpha transparan.

Path logo dikelola di `src/content/digital-services.ts`. Astro Image menghasilkan
WebP kecil dengan alpha untuk layar biasa dan retina. Setiap logo memakai area
160 × 144 px dengan object-contain, di dalam ruang setinggi 160 px, agar komposisi
tetap utuh dan judul kartu sejajar. Logo Karya tidak diperbesar melampaui resolusi sumber.

## Prompt penghapusan latar

Mode: built-in image_gen, edit gambar referensi, `transparent_background: true`.
Template berikut digunakan sekali untuk setiap logo SAJADA, Ruang Baca, dan Infaq:

> Edit target: the attached existing {id} application logo. Remove only the plain white
> background, making it genuinely transparent with alpha, including the negative spaces
> between disconnected shapes and letters. Preserve the complete existing logo, all
> original green/gold colors, exact shapes, proportions, typography, arrangement and
> exact wording ({wording}). Do not redesign, add, omit, restyle, or retype anything.
> Preserve intentional white design details, such as white book pages or white lettering
> on a colored badge. Keep sharp clean edges, no shadow, no checkerboard painted into
> the image. Deliver this one complete logo alone, centered and tightly framed with
> small transparent padding.

Nilai id / wording:

- sajada / SAJADA; Sistem Aplikasi; Jurnal Guru dan Adab Siswa
- ruang-baca / RuangBaca; Madrasah Khairul Falah
- infaq / Infaq Berdaya; Madrasah Khairul Falah
