import type { SectionHeader } from '../../types';
import { learningDomains } from '../curriculum/learning-domains';

export const kflfPreviewHeader: SectionHeader = {
  badge: 'Kurikulum',
  title: 'Khairul Falah Learning Framework (KFLF)',
  description: 'Tujuh Learning Domains yang membentuk cara belajar siswa — pelajari selengkapnya di halaman Kurikulum.',
};

/** Data domain diambil langsung dari content/curriculum/learning-domains.ts — satu sumber kebenaran. */
export const kflfPreview = learningDomains;
