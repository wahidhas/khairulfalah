import type { FeatureCard, SectionHeader } from '../../types';

export const learningExperienceHeader: SectionHeader = {
  badge: 'Cara Belajar',
  title: 'Pengalaman Belajar',
  description: 'Pendekatan belajar yang diterapkan dalam keseharian siswa.',
};

export const learningExperience: FeatureCard[] = [
  {
    id: 'collaborative-learning',
    icon: 'users',
    title: 'Collaborative Learning',
    description: 'Siswa belajar bersama dalam kelompok untuk menyelesaikan tantangan.',
  },
  {
    id: 'inquiry-learning',
    icon: 'search',
    title: 'Inquiry Learning',
    description: 'Mendorong siswa bertanya dan menemukan jawaban secara mandiri.',
  },
  {
    id: 'project-learning',
    icon: 'rocket',
    title: 'Project Learning',
    description: 'Belajar melalui proyek nyata yang relevan dengan kehidupan sehari-hari.',
  },
  {
    id: 'presentation',
    icon: 'presentation',
    title: 'Presentation',
    description: 'Melatih siswa mengomunikasikan hasil belajar dengan percaya diri.',
  },
  {
    id: 'reflection',
    icon: 'book-open',
    title: 'Reflection',
    description: 'Merefleksikan proses belajar untuk memahami perkembangan diri.',
  },
];
