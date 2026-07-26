import type { SectionHeader } from '../../types';
import { graduateProfile } from '../curriculum';

export const transformationGraduateProfileHeader: SectionHeader = {
  badge: 'Profil Lulusan',
  title: 'Profil Insan Khairul Falah',
  description: 'Tujuh karakter yang menjadi target pencapaian setiap lulusan Madrasah Khairul Falah.',
};

/** Data diambil langsung dari content/curriculum/graduate-profile.ts — satu sumber kebenaran. */
export { graduateProfile as transformationGraduateProfile };
