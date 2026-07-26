import type { FeatureCard, SectionHeader } from '../../types';

export const learningApproachHeader: SectionHeader = {
  badge: 'Metode Belajar',
  title: 'Pendekatan Pembelajaran',
  description: 'Lima metode yang diterapkan secara konsisten di setiap Learning Domain.',
};

export const learningApproach: FeatureCard[] = [
  {
    id: 'project-based-learning',
    icon: 'rocket',
    title: 'Project Based Learning',
    description: 'Siswa belajar melalui proyek nyata yang relevan dengan kehidupan sehari-hari.',
  },
  {
    id: 'inquiry-learning',
    icon: 'search',
    title: 'Inquiry Learning',
    description: 'Mendorong siswa bertanya, menyelidiki, dan menemukan jawaban secara mandiri.',
  },
  {
    id: 'collaboration',
    icon: 'users',
    title: 'Collaboration',
    description: 'Bekerja sama dalam tim untuk menyelesaikan tantangan bersama.',
  },
  {
    id: 'reflection',
    icon: 'book-open',
    title: 'Reflection',
    description: 'Merefleksikan proses belajar untuk memahami perkembangan diri.',
  },
  {
    id: 'presentation',
    icon: 'presentation',
    title: 'Presentation',
    description: 'Mengomunikasikan hasil belajar dan karya secara percaya diri.',
  },
];
