import type { LevelContent } from '../../types/levels';

export const mts: LevelContent = {
  id: 'mts',
  name: 'MTs Khairul Falah',
  identity: 'Madrasah Digital Creator',
  tagline: 'Beradab • Kreatif • Produktif',
  headline: 'Dari Pengguna Teknologi Menjadi Kreator Digital.',
  description: 'MTs Khairul Falah mengembangkan keterampilan digital kreatif melalui pembelajaran konten, AI, komunikasi, dan kewirausahaan digital, dengan fondasi Al-Qur’an dan adab.',
  summary: 'Mengembangkan siswa menjadi kreator digital yang beradab, kreatif, dan produktif.',
  photo: '/images/mts/digital-creator.webp',
  photoAlt: 'Siswa MTs Khairul Falah belajar membuat karya digital dengan kamera dan komputer',
  photoLabel: 'Kreativitas, teknologi & karya digital',
  icon: 'code',
  secondaryCta: 'Jelajahi Digital Creator',
  developmentNote: 'Arah Program Unggulan 2027/2028',
  programHeader: { badge: 'Arah Program Unggulan 2027/2028', title: 'Punya ide. Belajar membuatnya nyata.', description: 'Empat kelompok program dalam pengembangan. Pelaksanaan dan kesiapan setiap program akan diinformasikan oleh madrasah.' },
  programs: [
    { title: 'Content Creator', description: 'Belajar menyampaikan ide dengan cerita dan visual yang bermanfaat.', icon: 'presentation', items: ['Storytelling', 'Fotografi', 'Video pendek', 'Video editing', 'Desain grafis', 'Presentasi digital'] },
    { title: 'AI Creator', description: 'Memahami AI sebagai alat bantu berkarya dengan tetap berpikir kritis.', icon: 'cpu', items: ['Literasi AI', 'AI yang aman dan bertanggung jawab', 'AI untuk membantu ide dan naskah', 'AI untuk mendukung karya kreatif'] },
    { title: 'Digital Marketing', description: 'Mengomunikasikan nilai sebuah ide kepada audiens yang tepat.', icon: 'mic', items: ['Branding dasar', 'Copywriting', 'Pembuatan materi promosi', 'Konten media sosial', 'Pengenalan audiens'] },
    { title: 'Digital Entrepreneurship', description: 'Mengenal usaha digital lewat proyek belajar dan simulasi sesuai usia.', icon: 'lightbulb', items: ['Membuat ide produk', 'Katalog digital', 'Simulasi promosi', 'Simulasi affiliate marketing', 'Perhitungan harga, biaya, dan keuntungan'] },
  ],
  finalCta: 'Saatnya Anak Bukan Hanya Menggunakan Teknologi, Tetapi Mampu Berkarya Dengannya.',
  seoTitle: 'MTs Khairul Falah Bekasi | Madrasah Digital Creator',
  seoDescription: 'Kenali arah MTs Khairul Falah Bekasi sebagai Madrasah Digital Creator, berlandaskan Al-Qur’an dan adab. Informasi SPMB 2027/2028.',
};

export const mtsJourney = {
  badge: 'Rancangan jalur belajar',
  title: 'Dari eksplorasi hingga portofolio.',
  description: 'Arah pembelajaran kelas 7–9 untuk dikembangkan bertahap, bukan pernyataan bahwa seluruh tahap sudah berjalan.',
  items: [
    { label: 'Kelas 7', title: 'Digital Explorer', description: 'Literasi, numerasi, keterampilan komputer dasar, komunikasi, dan adab digital.', icon: 'compass' },
    { label: 'Kelas 8', title: 'Digital Creator', description: 'Desain, naskah, foto, video, AI untuk berkarya, dan proyek kelompok.', icon: 'sparkles' },
    { label: 'Kelas 9', title: 'Digital Portfolio', description: 'Portofolio karya, presentasi, branding dasar, dan simulasi usaha digital.', icon: 'layers' },
  ],
};

export const mtsSafety = 'Pemasaran dan affiliate dipelajari melalui simulasi yang aman dan sesuai usia. Tidak ada janji penghasilan atau kewajiban memiliki akun platform komersial siswa.';

export const portfolio = {
  badge: 'Student Portfolio', title: 'Karya yang bercerita tentang proses.',
  description: 'Ruang untuk dokumentasi karya siswa yang telah mendapat izin publikasi.',
  emptyTitle: 'Galeri karya sedang disiapkan',
  emptyDescription: 'Karya asli akan ditampilkan setelah kurasi dan persetujuan publikasi. Kategori berikut merupakan rencana isi galeri.',
  categories: ['Poster digital', 'Video edukasi', 'Presentasi', 'Desain kreatif', 'Proyek AI', 'Simulasi bisnis digital'],
};
