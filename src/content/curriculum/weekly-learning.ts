import type { DaySchedule, SectionHeader } from '../../types';

export const weeklyLearningHeader: SectionHeader = {
  badge: 'Contoh Pengalaman Belajar',
  title: 'Weekly Learning Experience',
  description: 'Gambaran singkat aktivitas belajar siswa dalam seminggu — pola serupa berlanjut di hari-hari berikutnya.',
};

/** Hanya 2 hari contoh sesuai arahan Sprint 4 — tidak mengarang aktivitas untuk hari lain. */
export const weeklyLearning: DaySchedule[] = [
  {
    id: 'senin',
    day: 'Senin',
    activities: ['Morning Circle', 'Tahfiz', 'Numerasi'],
  },
  {
    id: 'selasa',
    day: 'Selasa',
    activities: ['Project', 'Coding', 'Presentasi'],
  },
];
