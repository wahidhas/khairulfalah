# Pembukaan website

- Halaman: `/coming-soon`.
- Jadwal: **25 November 2026, pukul 10.00 WIB (Asia/Jakarta)**.
- Sumber jadwal: `src/content/launch.ts`.
- Konten dan hitung mundur: `src/components/sections/ComingSoonSection.astro`.
- Sebelum jadwal tersebut, beranda `/` mengarahkan pengunjung ke `/coming-soon` melalui JavaScript di head. Setelah jadwal, beranda lengkap tampil tanpa deploy ulang. Halaman lain tetap dapat diakses melalui alamat langsung.
- Ini merupakan pemberitahuan peluncuran, bukan pembatasan akses. Waktu mengikuti jam perangkat pengunjung; tanpa JavaScript, beranda lengkap tetap terbuka dan halaman coming soon tetap menampilkan tanggal pembukaan.
- Hitung mundur menggunakan zona waktu eksplisit `+07:00`. Saat selesai, tombol **Masuk ke website** muncul. Tidak ada langganan, pengumpulan data, atau layanan eksternal untuk hitung mundur.
- Logo yayasan menggunakan aset resmi yang sudah tersedia. Ilustrasi Hari Guru menggunakan gambar artikel Hari Guru yang sebelumnya diberikan pengguna.

Untuk mengakhiri tampilan sementara lebih awal, hapus script `slot="head"` dari `src/pages/index.astro`, lalu build dan terbitkan kembali.
