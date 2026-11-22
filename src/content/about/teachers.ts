import type { SectionHeader, Button } from '../../types';
import { staffDirectory } from '../teachers';

export const teachersHeader: SectionHeader = {
  badge: 'Tenaga Pendidik',
  title: 'Guru & Tenaga Kependidikan',
  description: 'Sebagian tim guru dan tenaga kependidikan yang mendampingi keseharian madrasah. Kenali seluruh tim melalui halaman lengkap.',
};

const previewIds = ['siti-nur-hatiqoh', 'astuti-ramdhaniati-fitri', 'jamilah-syairoh', 'neneng-fauziah', 'zultaman', 'widia-reisya-yulianti'];
export const teachersPreview = staffDirectory.filter(person => previewIds.includes(person.id));

export const teachersCta: Button = {
  label: 'Lihat Seluruh Guru & Tendik',
  href: '/teachers',
  variant: 'outline',
};
