import type { LearningDomain, SectionHeader } from '../../types';

export const futureReadyHeader: SectionHeader = {
  badge: 'Future Ready',
  title: 'Future Ready School',
  description: 'Enam kompetensi yang membekali siswa Khairul Falah menghadapi masa depan.',
};

export const futureReady: LearningDomain[] = [
  {
    id: 'ai-literacy',
    title: 'AI Literacy',
    description: 'Memahami dan memanfaatkan kecerdasan buatan secara bijak dan bertanggung jawab.',
    color: 'emerald',
    icon: 'cpu',
  },
  {
    id: 'coding',
    title: 'Coding',
    description: 'Kemampuan pemrograman dasar sebagai bekal berpikir komputasional.',
    color: 'amber',
    icon: 'code',
  },
  {
    id: 'robotics',
    title: 'Robotics',
    description: 'Eksplorasi robotika untuk melatih kreativitas dan pemecahan masalah.',
    color: 'emerald',
    icon: 'bot',
  },
  {
    id: 'english-communication',
    title: 'English Communication',
    description: 'Kepercayaan diri berkomunikasi dalam bahasa Inggris secara aktif.',
    color: 'amber',
    icon: 'languages',
  },
  {
    id: 'entrepreneurship',
    title: 'Entrepreneurship',
    description: 'Menumbuhkan jiwa wirausaha, inisiatif, dan kemandirian.',
    color: 'emerald',
    icon: 'lightbulb',
  },
  {
    id: 'project-based-learning',
    title: 'Project Based Learning',
    description: 'Belajar melalui proyek nyata yang relevan dengan kehidupan sehari-hari.',
    color: 'amber',
    icon: 'rocket',
  },
];
