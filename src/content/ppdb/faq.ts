import type { FAQ, SectionHeader } from '../../types';

export const ppdbFaqHeader: SectionHeader = {
  title: 'Pertanyaan yang Sering Diajukan',
};

/**
 * Jawaban sengaja mengarahkan ke panitia untuk hal yang belum dikonfirmasi
 * (jadwal, nominal, skema cicilan) — jangan mengarang kebijakan.
 */
export const ppdbFaq: FAQ[] = [
  {
    id: 'kapan-dibuka',
    question: 'Kapan pendaftaran dibuka?',
    answer:
      'Jadwal resmi pembukaan PPDB diumumkan melalui kanal komunikasi madrasah. Silakan hubungi panitia PPDB untuk informasi periode terbaru.',
  },
  {
    id: 'tes-masuk',
    question: 'Apakah ada tes masuk?',
    answer:
      'Proses seleksi mencakup observasi calon siswa dan wawancara bersama orang tua, sebagaimana tercantum pada Alur Pendaftaran.',
  },
  {
    id: 'sistem-pembayaran',
    question: 'Bagaimana sistem pembayaran?',
    answer:
      'Ketentuan dan mekanisme pembayaran dijelaskan oleh panitia PPDB saat proses pendaftaran. Silakan hubungi panitia untuk detailnya.',
  },
  {
    id: 'cicilan',
    question: 'Apakah tersedia cicilan?',
    answer:
      'Ketersediaan skema pembayaran bertahap mengikuti kebijakan yayasan yang berlaku. Silakan konfirmasikan langsung kepada panitia PPDB.',
  },
  {
    id: 'hubungi-panitia',
    question: 'Bagaimana cara menghubungi panitia?',
    answer:
      'Panitia PPDB dapat dihubungi melalui WhatsApp, telepon, atau email yang tercantum pada bagian Kontak PPDB di halaman ini.',
  },
];
