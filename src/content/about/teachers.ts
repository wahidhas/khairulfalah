import type { PersonProfile, SectionHeader, Button } from '../../types';

export const teachersHeader: SectionHeader = {
  badge: 'Tenaga Pendidik',
  title: 'Guru & Tenaga Kependidikan',
  description: 'Pratinjau profil guru — daftar lengkap akan tersedia setelah halaman Guru dibuat.',
};

/** Placeholder — belum ada profil guru resmi. Jangan mengarang biodata. */
export const teachersPreview: PersonProfile[] = [
  { id: 'guru-1', name: '[Nama akan diperbarui]', role: 'Tenaga Pengajar', placeholder: true },
  { id: 'guru-2', name: '[Nama akan diperbarui]', role: 'Tenaga Pengajar', placeholder: true },
  { id: 'guru-3', name: '[Nama akan diperbarui]', role: 'Tenaga Pengajar', placeholder: true },
];

/** href menunjuk ke /teachers — halaman tersebut belum dibuat (di luar scope Sprint 3). */
export const teachersCta: Button = {
  label: 'Lihat Seluruh Guru',
  href: '/teachers',
  variant: 'outline',
};
