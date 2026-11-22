import type { PersonProfile, SectionHeader } from '../../types';

export const leadershipHeader: SectionHeader = {
  badge: 'Pimpinan',
  title: 'Pimpinan Yayasan & Madrasah',
  description: 'Pengurus yayasan, koordinator pendidikan, konsultan, dan kepala satuan pendidikan Khairul Falah.',
};

export const leadership: PersonProfile[] = [
  {
    id: 'ketua-yayasan',
    name: 'H. Amir Mahmud, S.Ag',
    role: 'Ketua Yayasan',
    placeholder: false,
  },
  {
    id: 'koordinator-pendidikan',
    name: 'Wahid Hasyim, S.Kom',
    role: 'Koordinator Pendidikan',
    placeholder: false,
  },
  {
    id: 'konsultan',
    name: 'Dr. H. Hasbiyallah, M.Ag',
    role: 'Konsultan',
    placeholder: false,
  },
  {
    id: 'kepala-ra',
    name: 'Neneng Huliyah, S.Pd.I',
    role: 'Kepala RA',
    placeholder: false,
  },
  {
    id: 'kepala-mi',
    name: 'Ust. Muhammad Holili, S.Pd.I',
    role: 'Kepala MI',
    placeholder: false,
  },
  {
    id: 'kepala-mts',
    name: 'KH. Moh. Jalaluddin, S.Ag, M.Pd',
    role: 'Kepala MTs',
    placeholder: false,
  },
];
