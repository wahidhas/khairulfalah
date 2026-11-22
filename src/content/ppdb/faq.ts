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
      'Jadwal resmi pembukaan SPMB diumumkan melalui kanal komunikasi madrasah. Silakan hubungi panitia SPMB untuk informasi periode terbaru.',
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
      'Ketentuan dan mekanisme pembayaran dijelaskan oleh panitia SPMB saat proses pendaftaran. Silakan hubungi panitia untuk detailnya.',
  },
  {
    id: 'cicilan',
    question: 'Apakah tersedia cicilan?',
    answer:
      'Ketersediaan skema pembayaran bertahap mengikuti kebijakan yayasan yang berlaku. Silakan konfirmasikan langsung kepada panitia SPMB.',
  },
  {
    id: 'hubungi-panitia',
    question: 'Bagaimana cara menghubungi panitia?',
    answer:
      'Panitia SPMB dapat dihubungi melalui WhatsApp, telepon, atau email yang tercantum pada bagian Kontak SPMB di halaman ini.',
  },
];
