import type { PersonProfile } from '../types';

export type StaffGroup = 'mi' | 'mts' | 'tendik';
export interface StaffProfile extends PersonProfile {
  group: StaffGroup;
  unit: 'MI' | 'MTs' | 'MI & MTs';
}

export const staffPage = {
  title: 'Guru & Tenaga Kependidikan',
  description: 'Kenali guru MI, guru MTs, dan tenaga kependidikan yang mendampingi pembelajaran serta layanan di Khairul Falah.',
};

export const staffFilters = [
  { id: 'all', label: 'Semua' },
  { id: 'mi', label: 'MI' },
  { id: 'mts', label: 'MTs' },
  { id: 'tendik', label: 'Tendik' },
] as const;

export const staffDirectory: StaffProfile[] = [
  { id: 'muhammad-holili', name: 'Muhammad Holili, S.Pd.I', role: 'Kepala Madrasah / Qurdis', unit: 'MI', group: 'mi', placeholder: false },
  { id: 'siti-nur-hatiqoh', name: 'Siti Nur Hatiqoh, S.Pd', role: 'Wali Kelas I', unit: 'MI', group: 'mi', placeholder: false },
  { id: 'astuti-ramdhaniati-fitri', name: 'Astuti Ramdhaniati Fitri', role: 'Wali Kelas II.A', unit: 'MI', group: 'mi', placeholder: false },
  { id: 'fatihah-riu-ghadiza', name: 'Fatihah Riu Ghadiza', role: 'Wali Kelas II.B', unit: 'MI', group: 'mi', placeholder: false },
  { id: 'umi-khofizoh', name: 'Umi Khofizoh, S.Pd.I', role: 'Wali Kelas III.A', unit: 'MI', group: 'mi', placeholder: false },
  { id: 'siti-fitri-shobah', name: 'Siti Fitri Shobah, S.Pd.I', role: 'Wali Kelas III.A', unit: 'MI', group: 'mi', placeholder: false },
  { id: 'syifa-ayunda-fitri', name: 'Syifa Ayunda Fitri', role: 'Wali Kelas IV.A', unit: 'MI', group: 'mi', placeholder: false },
  { id: 'emah-suhaimah', name: 'Hj. Emah Suhaimah, S.Ag', role: 'Wali Kelas V.A / Aqidah', unit: 'MI', group: 'mi', placeholder: false },
  { id: 'musrifatus-sadiyah', name: 'Musrifatus Sa’diyah, S.Pd.I', role: 'Wali Kelas VI.A & MTk', unit: 'MI', group: 'mi', placeholder: false },
  { id: 'jubair', name: 'Jubair, S.Pd.I', role: 'Guru — Fiqih & Mulok', unit: 'MI', group: 'mi', placeholder: false },
  { id: 'muhammad-rifan-jamil', name: 'Muhammad Rifan Jamil', role: 'Guru — PJOK', unit: 'MI', group: 'mi', placeholder: false },
  { id: 'endah-sri-utami', name: 'Endah Sri Utami, SE', role: 'Guru — Seni Budaya', unit: 'MI', group: 'mi', placeholder: false },
  { id: 'afrizal', name: 'Afrizal, S.Pd', role: 'Guru — B. Inggris', unit: 'MI', group: 'mi', placeholder: false },
  { id: 'jamaluddin', name: 'Jamaluddin, S.Pd.I', role: 'Guru', unit: 'MI', group: 'mi', placeholder: false },
  { id: 'musaadah', name: "Dra. Musa'adah", role: 'Guru — B. Indonesia', unit: 'MI', group: 'mi', placeholder: false },
  { id: 'moh-jalaluddin', name: 'KH. Moh. Jalaluddin, S.Ag, M.Pd', role: 'Kepala Madrasah', unit: 'MTs', group: 'mts', placeholder: false },
  { id: 'jamilah-syairoh', name: 'Jamilah Syairoh, M.Pd', role: 'Wali Kelas IX', unit: 'MTs', group: 'mts', placeholder: false },
  { id: 'aripin', name: 'Ust. Aripin, S.Pd.I', role: 'Guru Fiqih & Mulok', unit: 'MTs', group: 'mts', placeholder: false },
  { id: 'neneng-fauziah', name: 'Neneng Fauziah, S.Pd', role: 'Guru — Matematika', unit: 'MTs', group: 'mts', placeholder: false },
  { id: 'neneng-hannanah', name: 'Neneng Hannanah, S.Pd.I', role: 'Guru — Bahasa Arab', unit: 'MTs', group: 'mts', placeholder: false },
  { id: 'nina-nur-sartika', name: 'Nina Nur Sartika, S.S', role: 'Guru — Bahasa Inggris, PKn', unit: 'MTs', group: 'mts', placeholder: false },
  { id: 'priyanti', name: 'Priyanti, S.Pd', role: 'Guru — IPA', unit: 'MTs', group: 'mts', placeholder: false },
  { id: 'aprinah', name: 'Aprinah, S.Pd', role: 'Guru — PJOK', unit: 'MTs', group: 'mts', placeholder: false },
  { id: 'zultaman', name: 'Zultaman', role: 'Operator EMIS, Verval PD, dan RDM', unit: 'MI & MTs', group: 'tendik', placeholder: false },
  { id: 'widia-reisya-yulianti', name: 'Widia Reisya Yulianti, S.Ak', role: 'Administrasi dan pengelolaan data siswa', unit: 'MI & MTs', group: 'tendik', placeholder: false },
];
