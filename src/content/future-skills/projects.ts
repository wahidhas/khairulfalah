import type { StudentProject, SectionHeader } from '../../types';

export const projectsHeader: SectionHeader = {
  badge: 'Contoh Project',
  title: 'Student Projects',
  description: 'Gambaran jenis karya yang dapat dihasilkan siswa — bukan karya nyata yang sudah ada.',
};

/** Seluruh project di bawah adalah CONTOH, bukan karya siswa nyata — placeholder wajib true. */
export const projects: StudentProject[] = [
  {
    id: 'game-sederhana',
    title: 'Game Sederhana',
    description: 'Contoh game interaktif dasar yang dapat dibuat siswa.',
    icon: 'sparkles',
    placeholder: true,
  },
  {
    id: 'website-sederhana',
    title: 'Website Sederhana',
    description: 'Contoh halaman web dasar hasil belajar coding.',
    icon: 'code',
    placeholder: true,
  },
  {
    id: 'robot-line-follower',
    title: 'Robot Line Follower',
    description: 'Contoh robot sederhana yang dapat mengikuti jalur secara otomatis.',
    icon: 'bot',
    placeholder: true,
  },
  {
    id: 'ai-story-generator',
    title: 'AI Story Generator',
    description: 'Contoh pemanfaatan AI untuk membantu menyusun cerita.',
    icon: 'cpu',
    placeholder: true,
  },
  {
    id: 'mini-business-project',
    title: 'Mini Business Project',
    description: 'Contoh proyek bisnis kecil hasil belajar kewirausahaan.',
    icon: 'lightbulb',
    placeholder: true,
  },
];
