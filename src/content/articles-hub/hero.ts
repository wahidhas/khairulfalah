import type { NavigationItem } from '../../types';

interface ArticlesHeroContent {
  title: string;
  description: string;
  breadcrumb: NavigationItem[];
}

export const articlesHero: ArticlesHeroContent = {
  title: 'Artikel & Berita',
  description: 'Kabar, kegiatan, dan informasi terbaru seputar Madrasah Khairul Falah.',
  breadcrumb: [
    { label: 'Beranda', href: '/' },
    { label: 'Artikel', href: '/articles' },
  ],
};
