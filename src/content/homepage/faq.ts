import type { FAQ, SectionHeader } from '../../types';

export const faqHeader: SectionHeader = {
  title: 'Pertanyaan yang Sering Diajukan',
};

/** Jawaban bersifat umum & mengarahkan ke halaman/kontak resmi — tidak mengarang jadwal, biaya, atau syarat spesifik. */
export const faq: FAQ[] = [
  {
    id: 'cara-mendaftar',
    question: 'Bagaimana cara mendaftar di Madrasah Khairul Falah?',
    answer: 'Informasi alur pendaftaran lengkap dapat dilihat di halaman SPMB.',
  },
  {
    id: 'syarat-pendaftaran',
    question: 'Apa saja persyaratan pendaftaran?',
    answer: 'Persyaratan lengkap akan ditampilkan di halaman SPMB setelah tersedia.',
  },
  {
    id: 'jadwal-ppdb',
    question: 'Kapan jadwal SPMB dibuka?',
    answer: 'Jadwal resmi akan diumumkan melalui halaman SPMB dan kanal komunikasi madrasah.',
  },
  {
    id: 'hubungi-admin',
    question: 'Bagaimana cara menghubungi admin madrasah?',
    answer: 'Silakan hubungi kami melalui informasi kontak yang tersedia di halaman Kontak.',
  },
];
