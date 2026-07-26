import type { StudentProject, SectionHeader } from '../../types';

export const projectsHeader: SectionHeader = {
  badge: 'Contoh Project',
  title: 'Project Based Learning',
  description: 'Gambaran jenis proyek yang dapat dikerjakan siswa lintas bidang.',
};

/**
 * Tidak ada di daftar folder eksplisit Sprint 6, tapi Page Structure mewajibkan section
 * "Project Based Learning" terpisah dari "Tahfiz & Karakter" — dibuat sebagai file sendiri
 * (pola sama seperti projects.ts di Future Skills Sprint 5) agar tidak hardcode konten.
 * Seluruh contoh di bawah adalah CONTOH, bukan karya siswa nyata — placeholder wajib true.
 */
export const projects: StudentProject[] = [
  {
    id: 'sains',
    title: 'Sains',
    description: 'Contoh proyek eksperimen sains sederhana yang dapat dikerjakan siswa.',
    icon: 'flask-conical',
    placeholder: true,
  },
  {
    id: 'kewirausahaan',
    title: 'Kewirausahaan',
    description: 'Contoh proyek bisnis kecil hasil belajar kewirausahaan.',
    icon: 'lightbulb',
    placeholder: true,
  },
  {
    id: 'lingkungan',
    title: 'Lingkungan',
    description: 'Contoh proyek yang mengangkat isu dan solusi lingkungan sekitar.',
    icon: 'leaf',
    placeholder: true,
  },
  {
    id: 'teknologi',
    title: 'Teknologi',
    description: 'Contoh proyek pemanfaatan teknologi untuk menyelesaikan masalah sehari-hari.',
    icon: 'cpu',
    placeholder: true,
  },
];
