import type { FAQ, SectionHeader } from '../../types';

export const studentLifeFaqHeader: SectionHeader = {
  title: 'Pertanyaan yang Sering Diajukan',
};

/** Jawaban bersifat umum, tidak mengarang detail teknis yang belum diverifikasi. */
export const studentLifeFaq: FAQ[] = [
  {
    id: 'suasana-belajar',
    question: 'Bagaimana suasana belajar di Khairul Falah?',
    answer:
      'Suasana belajar dirancang aktif dan menyenangkan, memadukan pembelajaran di kelas dengan pengalaman langsung melalui project dan kegiatan sehari-hari.',
  },
  {
    id: 'banyak-project',
    question: 'Apakah siswa banyak mengerjakan project?',
    answer:
      'Ya. Project Based Learning menjadi bagian rutin dari proses belajar di berbagai bidang, mulai dari sains hingga kewirausahaan.',
  },
  {
    id: 'kegiatan-keagamaan-harian',
    question: 'Apakah ada kegiatan keagamaan harian?',
    answer:
      'Ya. Tahfiz dan pembiasaan ibadah menjadi bagian dari rutinitas harian siswa, sebagaimana tergambar pada jadwal "Sehari di Khairul Falah".',
  },
  {
    id: 'pembinaan-karakter',
    question: 'Bagaimana pembinaan karakter dilakukan?',
    answer:
      'Pembinaan karakter dilakukan melalui pembiasaan adab harian, penguatan akhlak, dan keteladanan yang terintegrasi dalam keseharian siswa.',
  },
  {
    id: 'ada-ekstrakurikuler',
    question: 'Apakah ada ekstrakurikuler?',
    answer:
      'Ya. Tersedia berbagai pilihan ekstrakurikuler seperti Pramuka, Futsal, Tahfiz Club, Coding Club, English Club, dan Seni Kreatif.',
  },
];
