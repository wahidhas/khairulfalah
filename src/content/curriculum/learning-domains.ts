import type { LearningDomain, SectionHeader } from '../../types';

export const learningDomainsHeader: SectionHeader = {
  badge: 'Kurikulum',
  title: '7 Learning Domains',
  description: 'Tujuh domain pembelajaran yang menjadi inti Khairul Falah Learning Framework (KFLF).',
};

export const learningDomains: LearningDomain[] = [
  {
    id: 'iman-al-quran',
    title: "Iman & Al-Qur'an",
    description: 'Penguatan akidah, ibadah, dan kedekatan dengan Al-Qur’an sebagai fondasi utama.',
    color: 'emerald',
    icon: 'moon',
  },
  {
    id: 'komunikasi-global',
    title: 'Komunikasi Global',
    description: 'Kemampuan berbahasa dan berkomunikasi secara efektif lintas budaya.',
    color: 'amber',
    icon: 'languages',
  },
  {
    id: 'matematika-computational-thinking',
    title: 'Matematika & Computational Thinking',
    description: 'Kemampuan berpikir logis, terstruktur, dan menyelesaikan masalah secara sistematis.',
    color: 'emerald',
    icon: 'calculator',
  },
  {
    id: 'sains-inovasi',
    title: 'Sains & Inovasi',
    description: 'Eksplorasi ilmiah dan semangat mencipta solusi berbasis sains.',
    color: 'amber',
    icon: 'flask-conical',
  },
  {
    id: 'peradaban-kepemimpinan-entrepreneurship',
    title: 'Peradaban, Kepemimpinan & Entrepreneurship',
    description: 'Wawasan sejarah peradaban serta kemampuan memimpin dan berwirausaha.',
    color: 'emerald',
    icon: 'graduation-cap',
  },
  {
    id: 'life-skills-wellbeing',
    title: 'Life Skills & Wellbeing',
    description: 'Kecakapan hidup dan kesejahteraan fisik-mental siswa sehari-hari.',
    color: 'amber',
    icon: 'heart',
  },
  {
    id: 'creativity-impact-project',
    title: 'Creativity & Impact Project',
    description: 'Proyek kreatif yang memberi dampak nyata bagi lingkungan sekitar.',
    color: 'emerald',
    icon: 'sparkles',
  },
];
