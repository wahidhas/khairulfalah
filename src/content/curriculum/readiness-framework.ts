import type { FeatureCard, SectionHeader } from '../../types';

export const readinessFrameworkHeader: SectionHeader = {
  badge: 'Readiness Framework',
  title: 'Siap Ujian, Siap Masa Depan',
  description:
    'Madrasah Khairul Falah tidak hanya mengejar nilai ujian — kerangka kesiapan ini memastikan siswa juga tumbuh dalam literasi, numerasi, dan kecakapan masa depan.',
};

export const readinessFramework: FeatureCard[] = [
  {
    id: 'tka',
    icon: 'target',
    title: 'TKA',
    description: 'Kesiapan menghadapi Tes Kemampuan Akademik melalui pembelajaran yang terstruktur.',
  },
  {
    id: 'anbk',
    icon: 'list-checks',
    title: 'ANBK',
    description: 'Persiapan Asesmen Nasional Berbasis Komputer secara terintegrasi dalam kurikulum.',
  },
  {
    id: 'literasi',
    icon: 'book-open',
    title: 'Literasi',
    description: 'Kemampuan memahami, menganalisis, dan mengomunikasikan informasi secara efektif.',
  },
  {
    id: 'numerasi',
    icon: 'calculator',
    title: 'Numerasi',
    description: 'Kemampuan bernalar menggunakan angka dan konsep matematis dalam kehidupan nyata.',
  },
  {
    id: 'english',
    icon: 'languages',
    title: 'English',
    description: 'Kecakapan berbahasa Inggris untuk komunikasi dan pembelajaran global.',
  },
  {
    id: 'ai-literacy',
    icon: 'cpu',
    title: 'AI Literacy',
    description: 'Pemahaman dasar kecerdasan buatan dan cara memanfaatkannya secara bertanggung jawab.',
  },
  {
    id: 'entrepreneurship',
    icon: 'lightbulb',
    title: 'Entrepreneurship',
    description: 'Kecakapan mengenali peluang dan mengelola ide menjadi karya bernilai.',
  },
];
