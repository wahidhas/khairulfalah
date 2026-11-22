import type { SkillProgram, SectionHeader } from '../../types';

export const programsHeader: SectionHeader = {
  badge: 'Program Pendukung',
  title: 'Featured Programs',
  description: 'Pilihan pengembangan keterampilan pendukung. Ketersediaan, usia peserta, dan jadwal setiap program akan dikonfirmasi oleh madrasah.',
};

/** duration & ageRange sengaja placeholder — jadwal dan rentang usia resmi menyusul dari tim program. */
export const programs: SkillProgram[] = [
  {
    id: 'coding-creator',
    title: 'Coding Creator',
    description: 'Belajar dasar pemrograman melalui proyek yang menyenangkan.',
    icon: 'code',
    duration: '[Durasi akan diperbarui]',
    ageRange: '[Usia akan diperbarui]',
  },
  {
    id: 'ai-creator',
    title: 'AI Creator',
    description: 'Mengenal dan memanfaatkan kecerdasan buatan secara bertanggung jawab.',
    icon: 'cpu',
    duration: '[Durasi akan diperbarui]',
    ageRange: '[Usia akan diperbarui]',
  },
  {
    id: 'robotics-explorer',
    title: 'Robotics Explorer',
    description: 'Eksplorasi dasar robotika melalui rancang-bangun sederhana.',
    icon: 'bot',
    duration: '[Durasi akan diperbarui]',
    ageRange: '[Usia akan diperbarui]',
  },
  {
    id: 'digital-creator',
    title: 'Digital Creator',
    description: 'Menciptakan karya digital seperti presentasi dan konten kreatif.',
    icon: 'presentation',
    duration: '[Durasi akan diperbarui]',
    ageRange: '[Usia akan diperbarui]',
  },
  {
    id: 'young-entrepreneur',
    title: 'Young Entrepreneur',
    description: 'Mengenal dasar kewirausahaan melalui proyek bisnis sederhana.',
    icon: 'lightbulb',
    duration: '[Durasi akan diperbarui]',
    ageRange: '[Usia akan diperbarui]',
  },
  {
    id: 'public-speaking',
    title: 'Public Speaking',
    description: 'Melatih kepercayaan diri berbicara dan menyampaikan gagasan.',
    icon: 'mic',
    duration: '[Durasi akan diperbarui]',
    ageRange: '[Usia akan diperbarui]',
  },
];
