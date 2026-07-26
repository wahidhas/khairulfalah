import type { JourneyStep, SectionHeader } from '../../types';

export const journeyHeader: SectionHeader = {
  badge: 'Roadmap',
  title: 'Learning Journey',
  description: 'Empat tahap perjalanan belajar menuju siswa yang siap menghadapi masa depan.',
};

/**
 * Tidak ada di daftar folder eksplisit Sprint 5, tapi Page Structure mewajibkan section
 * "Learning Journey" — dibuat sebagai content file terpisah agar tetap "tidak ada hardcoded
 * content" sesuai Technical Requirements. Deskripsi tiap level masih umum (draft), menyusul
 * kurikulum resmi per level dari tim program.
 */
export const journey: JourneyStep[] = [
  {
    id: 'level-1',
    label: 'Level 1',
    title: 'Pengenalan',
    description: 'Mengenal dasar-dasar setiap Future Skill melalui aktivitas yang menyenangkan.',
  },
  {
    id: 'level-2',
    label: 'Level 2',
    title: 'Eksplorasi',
    description: 'Mencoba dan bereksperimen langsung dengan alat dan konsep sederhana.',
  },
  {
    id: 'level-3',
    label: 'Level 3',
    title: 'Penerapan',
    description: 'Menerapkan keterampilan pada proyek nyata secara mandiri maupun berkelompok.',
  },
  {
    id: 'level-4',
    label: 'Level 4',
    title: 'Pendalaman',
    description: 'Memperdalam kemampuan dan mulai menghasilkan karya yang lebih kompleks.',
  },
  {
    id: 'future-ready-graduate',
    label: 'Future Ready Graduate',
    title: 'Siap Masa Depan',
    description: 'Siswa lulus dengan bekal keterampilan masa depan yang siap dikembangkan lebih lanjut.',
  },
];
