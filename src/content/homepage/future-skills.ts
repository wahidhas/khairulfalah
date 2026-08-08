import type { LearningDomain, SectionHeader } from '../../types';

export const futureSkillsHeader: SectionHeader = {
  badge: 'Kesiapan Masa Depan',
  title: 'Future Skills',
  description: 'Kompetensi masa depan yang dikembangkan bagi siswa Madrasah Khairul Falah.',
};

/**
 * Kategori & urutan mengikuti arahan Sprint 2.3 (AI Literacy, Coding, Robotics,
 * Communication, Entrepreneurship, Digital Citizenship) — seluruhnya kategori yang
 * sudah didokumentasikan di README/PROJECT_CHARTER/CONTENT_STRATEGY, bukan karangan.
 * Deskripsi tiap kategori masih placeholder, menyusul dari tim kurikulum.
 */
export const futureSkills: LearningDomain[] = [
  {
    id: 'ai-literacy',
    title: 'AI Literacy',
    description: 'Deskripsi akan diperbarui oleh tim kurikulum.',
    color: 'emerald',
    icon: 'cpu',
    imageSlot: 'future-skills.ai-literacy',
  },
  {
    id: 'coding',
    title: 'Coding',
    description: 'Deskripsi akan diperbarui oleh tim kurikulum.',
    color: 'amber',
    icon: 'code',
    imageSlot: 'future-skills.coding',
  },
  {
    id: 'robotics',
    title: 'Robotics',
    description: 'Deskripsi akan diperbarui oleh tim kurikulum.',
    color: 'emerald',
    icon: 'bot',
    imageSlot: 'future-skills.robotics',
  },
  {
    id: 'communication',
    title: 'Communication',
    description: 'Deskripsi akan diperbarui oleh tim kurikulum.',
    color: 'amber',
    icon: 'mic',
    imageSlot: 'future-skills.communication',
  },
  {
    id: 'entrepreneurship',
    title: 'Entrepreneurship',
    description: 'Deskripsi akan diperbarui oleh tim kurikulum.',
    color: 'emerald',
    icon: 'lightbulb',
    imageSlot: 'future-skills.entrepreneurship',
  },
  {
    id: 'digital-citizenship',
    title: 'Digital Citizenship',
    description: 'Deskripsi akan diperbarui oleh tim kurikulum.',
    color: 'amber',
    icon: 'globe',
    imageSlot: 'future-skills.digital-citizenship',
  },
];
