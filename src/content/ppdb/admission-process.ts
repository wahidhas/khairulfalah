import type { JourneyStep, SectionHeader } from '../../types';

export const admissionProcessHeader: SectionHeader = {
  badge: 'Alur',
  title: 'Alur Pendaftaran',
  description: 'Lima langkah proses penerimaan peserta didik baru.',
};

/** Memakai tipe JourneyStep yang sudah ada (Sprint 5) — bentuknya identik, tidak perlu tipe baru. */
export const admissionProcess: JourneyStep[] = [
  {
    id: 'isi-formulir',
    label: 'Langkah 1',
    title: 'Isi Formulir',
    description: 'Mengisi formulir pendaftaran yang disediakan panitia PPDB.',
  },
  {
    id: 'verifikasi-data',
    label: 'Langkah 2',
    title: 'Verifikasi Data',
    description: 'Panitia memeriksa kelengkapan berkas dan data calon siswa.',
  },
  {
    id: 'observasi-wawancara',
    label: 'Langkah 3',
    title: 'Observasi / Wawancara',
    description: 'Observasi calon siswa dan wawancara bersama orang tua.',
  },
  {
    id: 'pengumuman',
    label: 'Langkah 4',
    title: 'Pengumuman',
    description: 'Hasil seleksi disampaikan kepada orang tua melalui kanal resmi madrasah.',
  },
  {
    id: 'daftar-ulang',
    label: 'Langkah 5',
    title: 'Daftar Ulang',
    description: 'Menyelesaikan proses daftar ulang untuk memastikan tempat siswa.',
  },
];
