import type { LevelContent, ProgramFeature } from '../../types/levels';

export const mi: LevelContent = {
  id: 'mi',
  name: 'MI Khairul Falah',
  identity: 'Madrasah Adab & Life Skills',
  tagline: 'Beradab • Mandiri • Terampil',
  headline: 'Bukan Hanya Pintar, Tapi Juga Beradab dan Mandiri.',
  description: 'Melalui pembiasaan adab, Al-Qur’an, praktik keterampilan hidup, dan pembelajaran bermakna, kami mendampingi anak bertumbuh menjadi pribadi yang beriman, bertanggung jawab, dan terampil.',
  summary: 'Membentuk anak beradab, mandiri, dan terampil dalam kehidupan sehari-hari.',
  photo: '/images/mi/life-skills.webp',
  photoAlt: 'Siswa MI Khairul Falah mempraktikkan keterampilan hidup dalam kegiatan belajar',
  photoLabel: 'Pembiasaan adab & keterampilan hidup',
  icon: 'leaf',
  secondaryCta: 'Lihat Program',
  programHeader: { badge: 'Tumbuh dari kebiasaan baik', title: 'Bekal kecil hari ini. Berarti untuk masa depan.', description: 'Adab, kemandirian, dan kecakapan hidup menjadi arah utama pendidikan MI Khairul Falah.' },
  programs: [
    { title: 'Adab & Karakter', description: 'Pembiasaan santun, disiplin, tanggung jawab, kepedulian, dan akhlak sehari-hari.', icon: 'heart-handshake' },
    { title: 'Life Skills', description: 'Latihan kemandirian, merawat diri dan lingkungan, kerja sama, serta keterampilan praktis.', icon: 'leaf' },
    { title: 'Al-Qur’an & Ibadah', description: 'Penguatan bacaan Al-Qur’an, tahfiz, pembiasaan doa, dan ibadah.', icon: 'book-open' },
    { title: 'Student Growth Portal', description: 'Sarana yang sedang dikembangkan untuk pemantauan perkembangan adab, ibadah, karakter, dan life skills anak bersama keluarga.', icon: 'list-checks' },
  ],
  finalCta: 'Mari Bentuk Adab, Kemandirian, dan Masa Depan Anak Bersama Khairul Falah.',
  seoTitle: 'MI Khairul Falah Bekasi | Madrasah Adab & Life Skills',
  seoDescription: 'Kenali MI Khairul Falah Bekasi: pendidikan Al-Qur’an, adab, karakter, kemandirian, dan keterampilan hidup. Informasi SPMB 2027/2028.',
};

export const miExperience = {
  header: { badge: 'Belajar lewat pengalaman', title: 'Ruang untuk mencoba, berlatih, dan bertumbuh.', description: 'Arah pengalaman belajar MI. Kesiapan ruang, fasilitas, dan jadwal pelaksanaannya akan diinformasikan oleh madrasah.' },
  items: [
    { title: 'Ruang Baca & Learning Space', description: 'Menumbuhkan kebiasaan membaca, bertanya, dan berbagi cerita.', icon: 'book-open' },
    { title: 'LEGO Corner', description: 'Merangkai ide, melatih ketekunan, dan memecahkan tantangan bersama.', icon: 'layers' },
    { title: 'Kebun Mini / Learning Garden', description: 'Belajar merawat kehidupan dan bertanggung jawab terhadap lingkungan.', icon: 'leaf' },
    { title: 'Home Mission', description: 'Latihan kebiasaan baik dan kemandirian bersama keluarga di rumah.', icon: 'heart' },
    { title: 'Project & Portfolio', description: 'Mencatat proses belajar melalui proyek dan karya sederhana.', icon: 'presentation' },
    { title: 'Eksperimen Sains dan Pengenalan Teknologi', description: 'Sains, STEM, AI, dan coding dasar mendukung kemampuan berpikir dan kreativitas.', icon: 'flask-conical' },
  ] satisfies ProgramFeature[],
};

export const growthPortal = {
  badge: 'Kemitraan madrasah & keluarga',
  title: 'Setiap anak tumbuh. Setiap langkah berarti.',
  description: 'Student Growth Portal sedang dikembangkan untuk membantu keluarga dan guru mengikuti proses tumbuh anak, melampaui nilai akademik.',
  label: 'Ilustrasi fitur dalam pengembangan.',
  appName: 'Student Growth',
  appSubtitle: 'Catatan tumbuh bersama',
  greeting: 'Perkembangan anak',
  period: 'Contoh tampilan',
  note: 'Setiap anak memiliki ritme belajar yang berbeda.',
  items: [
    { name: 'Adab', status: 'Mulai terbiasa', icon: 'heart-handshake' },
    { name: 'Karakter', status: 'Berkembang', icon: 'heart' },
    { name: 'Life Skills', status: 'Terus berlatih', icon: 'leaf' },
    { name: 'Ibadah', status: 'Mulai terbiasa', icon: 'moon' },
    { name: 'Karya', status: 'Sedang mencoba', icon: 'sparkles' },
  ],
};

export const miGraduate = {
  badge: 'Profil lulusan yang diharapkan',
  title: 'Tumbuh utuh, siap melangkah.',
  description: 'Kemampuan yang menjadi arah pendampingan anak selama belajar di MI Khairul Falah.',
  items: ['Beriman dan beradab.', 'Cinta Al-Qur’an.', 'Mandiri dan bertanggung jawab.', 'Mampu membaca, menulis, dan bernalar.', 'Berkomunikasi dengan percaya diri.', 'Mampu bekerja sama.', 'Mampu membuat karya sederhana.', 'Menggunakan teknologi secara bijak.'],
};
