import type { NavigationItem, NavigationGroup } from '../types';

export const mainNavItems: NavigationItem[] = [
  { label: 'Tentang', href: '/about' },
  { label: 'Transformasi', href: '/transformasi' },
  { label: 'Kurikulum', href: '/kurikulum' },
  { label: 'Kehidupan', href: '/student-life' },
  { label: 'Artikel', href: '/articles' },
  { label: 'PPDB', href: '/ppdb' },
  { label: 'Kontak', href: '/contact' },
];

export const navCta: NavigationItem = { label: 'Daftar Sekarang', href: '/ppdb' };

export const footerNavGroups: NavigationGroup[] = [
  {
    title: 'Profil',
    items: [
      { label: 'Tentang', href: '/about' },
      { label: 'Visi', href: '/transformasi' },
      { label: 'Guru', href: '/teachers', comingSoon: true },
    ],
  },
  {
    title: 'Akademik',
    items: [
      { label: 'Kurikulum', href: '/kurikulum' },
      { label: 'Future Skills', href: '/programs/future-skills' },
      { label: 'Kehidupan Madrasah', href: '/student-life' },
    ],
  },
  {
    title: 'Informasi',
    items: [
      { label: 'Artikel', href: '/articles' },
      { label: 'Galeri', href: '/gallery', comingSoon: true },
      { label: 'PPDB', href: '/ppdb' },
    ],
  },
];
