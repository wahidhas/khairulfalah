export type ServiceContext = 'home' | 'mi' | 'mts' | 'about' | 'student-life';
type ServiceId = 'sajada' | 'ruang-baca' | 'infaq' | 'karya';

interface ServiceLink {
  label: string;
  href: string;
  level?: 'mi' | 'mts';
}

interface DigitalService {
  id: ServiceId;
  name: string;
  logo: string;
  description: string;
  links: ServiceLink[];
}

export const digitalServices: DigitalService[] = [
  {
    id: 'sajada',
    name: 'SAJADA',
    logo: '/images/logos/apps/sajada.png',
    description: 'Jurnal mengajar, presensi, dan arsip kegiatan untuk mendukung refleksi serta perencanaan pembelajaran guru.',
    links: [
      { label: 'SAJADA MI', href: 'https://sajada-mi.khairulfalah.my.id/', level: 'mi' },
      { label: 'SAJADA MTs', href: 'https://sajada-mts.khairulfalah.my.id/', level: 'mts' },
    ],
  },
  {
    id: 'ruang-baca',
    name: 'Ruang Baca',
    logo: '/images/logos/apps/ruang-baca.png',
    description: 'Layanan perpustakaan untuk katalog buku, pencatatan kunjungan, pendaftaran, dan jadwal penggunaan.',
    links: [{ label: 'Buka Ruang Baca', href: 'https://ruangbaca.khairulfalah.my.id/' }],
  },
  {
    id: 'infaq',
    name: 'Laporan Infaq',
    logo: '/images/logos/apps/infaq.png',
    description: 'Laporan penerimaan dan pengeluaran gerakan infaq bersama warga madrasah.',
    links: [{ label: 'Lihat Laporan Infaq', href: 'https://infaq.khairulfalah.or.id/' }],
  },
  {
    id: 'karya',
    name: 'Karya',
    logo: '/images/logos/apps/karya.webp',
    description: 'Jurnal ekstrakurikuler dan pencatatan prestasi siswa Khairul Falah.',
    links: [{ label: 'Buka Karya', href: 'https://karya-app.khairulfalah.my.id/' }],
  },
];

export const serviceSections: Record<ServiceContext, { title: string; description: string; services: ServiceId[] }> = {
  home: {
    title: 'Layanan Digital Khairul Falah',
    description: 'Akses aplikasi untuk pembelajaran, perpustakaan, laporan infaq, serta kegiatan dan prestasi siswa.',
    services: ['sajada', 'ruang-baca', 'infaq', 'karya'],
  },
  mi: {
    title: 'Layanan Digital MI',
    description: 'Akses jurnal guru dan layanan perpustakaan untuk mendukung keseharian belajar di MI.',
    services: ['sajada', 'ruang-baca'],
  },
  mts: {
    title: 'Layanan Digital MTs',
    description: 'Akses jurnal guru, layanan perpustakaan, serta jurnal ekstrakurikuler dan prestasi siswa.',
    services: ['sajada', 'ruang-baca', 'karya'],
  },
  about: {
    title: 'Gerakan Infaq Bersama',
    description: 'Ikuti laporan penerimaan dan pengeluaran infaq bersama warga madrasah.',
    services: ['infaq'],
  },
  'student-life': {
    title: 'Catatan Kegiatan & Prestasi',
    description: 'Akses jurnal ekstrakurikuler dan prestasi siswa melalui aplikasi Karya.',
    services: ['karya'],
  },
};
