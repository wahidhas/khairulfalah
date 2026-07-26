import type { FAQ, SectionHeader } from '../../types';

export const contactFaqHeader: SectionHeader = {
  title: 'Pertanyaan yang Sering Diajukan',
};

/**
 * Jawaban sengaja mengarahkan ke panitia/halaman terkait untuk hal yang belum dikonfirmasi
 * (kebijakan pindahan, dst.) — jangan mengarang kebijakan (lihat pola sama di content/ppdb/faq.ts).
 */
export const contactFaq: FAQ[] = [
  {
    id: 'cara-mendaftar',
    question: 'Bagaimana cara mendaftar?',
    answer:
      'Alur pendaftaran lengkap tersedia di halaman PPDB. Anda juga dapat menghubungi panitia PPDB melalui kanal kontak pada halaman ini untuk pendampingan langsung.',
  },
  {
    id: 'survei-sekolah',
    question: 'Apakah bisa survei sekolah?',
    answer:
      'Bisa. Silakan hubungi kami melalui WhatsApp atau telepon untuk menjadwalkan kunjungan dan survei sekolah.',
  },
  {
    id: 'hubungi-panitia-ppdb',
    question: 'Bagaimana menghubungi panitia PPDB?',
    answer:
      'Panitia PPDB dapat dihubungi melalui WhatsApp, telepon, atau email yang tercantum pada bagian Informasi Kontak di halaman ini.',
  },
  {
    id: 'pindahan',
    question: 'Apakah menerima pindahan?',
    answer:
      'Kebijakan penerimaan siswa pindahan mengikuti ketentuan yang berlaku. Silakan hubungi kami untuk informasi lebih lanjut mengenai penerimaan siswa pindahan.',
  },
  {
    id: 'jam-operasional',
    question: 'Kapan jam operasional?',
    answer:
      'Kami beroperasi Senin–Jumat pukul 07.00–16.00 dan Sabtu pukul 07.00–12.00, sebagaimana tercantum pada bagian Jam Operasional di halaman ini.',
  },
];
