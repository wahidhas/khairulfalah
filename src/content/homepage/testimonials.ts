import type { Testimonial, SectionHeader } from '../../types';

export const testimonialsHeader: SectionHeader = {
  title: 'Testimoni',
};

/**
 * Seluruh testimoni placeholder: true — belum ada testimoni nyata yang terverifikasi.
 * Nama sengaja generik (bukan nama orang karangan) agar tidak terkesan sebagai testimoni asli.
 */
export const testimonials: Testimonial[] = [
  {
    id: 'testimoni-1',
    name: 'Orang Tua Siswa',
    role: 'Wali Murid',
    quote: 'Testimoni akan ditambahkan setelah proses pengumpulan selesai.',
    placeholder: true,
  },
  {
    id: 'testimoni-2',
    name: 'Orang Tua Siswa',
    role: 'Wali Murid',
    quote: 'Testimoni akan ditambahkan setelah proses pengumpulan selesai.',
    placeholder: true,
  },
  {
    id: 'testimoni-3',
    name: 'Orang Tua Siswa',
    role: 'Wali Murid',
    quote: 'Testimoni akan ditambahkan setelah proses pengumpulan selesai.',
    placeholder: true,
  },
];
