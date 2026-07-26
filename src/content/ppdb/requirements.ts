import type { ChecklistItem, SectionHeader } from '../../types';

export const requirementsHeader: SectionHeader = {
  badge: 'Berkas',
  title: 'Persyaratan',
  description:
    'Berkas yang perlu disiapkan saat mendaftar. Ketentuan lengkap dapat dikonfirmasi ke panitia PPDB.',
};

/**
 * Daftar berkas umum sesuai arahan Sprint 7. Jumlah salinan/ukuran pas foto sengaja
 * TIDAK dicantumkan — detail teknis tersebut belum dikonfirmasi panitia, jangan mengarang.
 */
export const requirements: ChecklistItem[] = [
  { id: 'kartu-keluarga', label: 'Fotokopi Kartu Keluarga (KK)' },
  { id: 'akta-kelahiran', label: 'Fotokopi Akta Kelahiran' },
  { id: 'pas-foto', label: 'Pas Foto', note: 'Ukuran dan jumlah dikonfirmasi panitia.' },
  { id: 'formulir-pendaftaran', label: 'Formulir Pendaftaran yang telah diisi' },
];
