import type { ScheduleItem, SectionHeader } from '../../types';

export const dailyLifeHeader: SectionHeader = {
  badge: 'Rutinitas Harian',
  title: 'Sehari di Khairul Falah',
  description: 'Gambaran umum ritme belajar siswa dalam sehari.',
};

export const dailyLife: ScheduleItem[] = [
  { id: 'morning-culture', time: '07.00', activity: 'Morning Culture' },
  { id: 'tahfiz', time: '08.00', activity: 'Tahfiz' },
  { id: 'pembelajaran-tematik', time: '09.00', activity: 'Pembelajaran Tematik' },
  { id: 'istirahat', time: '10.00', activity: 'Istirahat' },
  { id: 'project-learning', time: '10.30', activity: 'Project Learning' },
  { id: 'shalat-dzuhur', time: '12.00', activity: 'Shalat Dzuhur' },
  { id: 'refleksi', time: '13.00', activity: 'Refleksi' },
];
