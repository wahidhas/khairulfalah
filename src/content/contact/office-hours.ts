import type { OfficeHours, SectionHeader } from '../../types';

export const officeHoursHeader: SectionHeader = {
  badge: 'Operasional',
  title: 'Jam Operasional',
  description: 'Jam layanan kantor madrasah untuk kunjungan dan pertanyaan langsung.',
};

export const officeHours: OfficeHours[] = [
  { id: 'senin-jumat', day: 'Senin–Jumat', hours: '07.00–16.00' },
  { id: 'sabtu', day: 'Sabtu', hours: '07.00–12.00' },
];
