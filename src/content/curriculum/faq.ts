import type { FAQ, SectionHeader } from '../../types';

export const curriculumFaqHeader: SectionHeader = {
  title: 'Pertanyaan yang Sering Diajukan',
};

/** Jawaban bersifat umum, tidak mengarang detail teknis (jadwal/skor) yang belum diverifikasi. */
export const curriculumFaq: FAQ[] = [
  {
    id: 'apa-itu-kflf',
    question: 'Apa itu KFLF?',
    answer:
      'KFLF (Khairul Falah Learning Framework) adalah kerangka kurikulum madrasah yang memadukan 7 Learning Domains — mulai dari Iman & Al-Qur\'an hingga Creativity & Impact Project — untuk membentuk karakter, kompetensi akademik, dan kesiapan masa depan siswa.',
  },
  {
    id: 'kurikulum-nasional',
    question: 'Apakah tetap mengikuti kurikulum nasional?',
    answer:
      'Ya. KFLF dirancang untuk memperkaya dan memperdalam kurikulum nasional, bukan menggantikannya, sehingga siswa tetap memenuhi standar kompetensi nasional.',
  },
  {
    id: 'tahfiz',
    question: 'Bagaimana Tahfiz dilakukan?',
    answer:
      'Tahfiz menjadi bagian dari rutinitas belajar harian siswa, terintegrasi dengan domain Iman & Al-Qur\'an dalam KFLF.',
  },
  {
    id: 'coding-ai',
    question: 'Apakah ada Coding & AI?',
    answer:
      'Ya. Coding dan AI Literacy menjadi bagian dari domain Matematika & Computational Thinking serta Readiness Framework yang disiapkan bagi siswa.',
  },
  {
    id: 'penilaian',
    question: 'Bagaimana penilaian dilakukan?',
    answer:
      'Penilaian dilakukan secara menyeluruh — mencakup pencapaian akademik, proyek nyata (project based learning), serta perkembangan karakter siswa, bukan hanya nilai ujian tertulis.',
  },
  {
    id: 'anbk',
    question: 'Apakah siswa siap menghadapi ANBK?',
    answer:
      'Kesiapan ANBK menjadi bagian dari Readiness Framework, terintegrasi dengan penguatan literasi dan numerasi dalam proses belajar sehari-hari, bukan sekadar latihan menjelang ujian.',
  },
];
