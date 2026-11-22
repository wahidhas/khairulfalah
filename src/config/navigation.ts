import type { NavigationItem, NavigationGroup } from '../types';
import { digitalServices } from '../content/digital-services';
export const mainNavItems: NavigationItem[] = [
  { label: 'Beranda', href: '/' },
  { label: 'Jenjang Pendidikan', href: '/#jenjang', children: [
    { label: 'MI Khairul Falah', href: '/mi' },
    { label: 'MTs Khairul Falah', href: '/mts' },
    { label: 'RA · Informasi melalui admin', href: '/contact#ra' },
  ] },
  { label: 'Kegiatan & Karya', href: '/student-life' },
  { label: 'Tentang Kami', href: '/about' },
  { label: 'Kontak', href: '/contact' },
];
export const navCta: NavigationItem = { label: 'Daftar SPMB', href: '/ppdb' };
export const footerNavGroups: NavigationGroup[] = [
  { title: 'Yayasan', items: [{ label: 'Tentang Kami', href: '/about' }, { label: 'Guru & Tendik', href: '/teachers' }, { label: 'Arah Transformasi', href: '/transformasi' }, { label: 'Artikel & Berita', href: '/articles' }] },
  { title: 'Pendidikan', items: [{ label: 'MI Adab & Life Skills', href: '/mi' }, { label: 'MTs Digital Creator', href: '/mts' }, { label: 'RA · Hubungi Admin', href: '/contact#ra' }, { label: 'Kurikulum KFLF', href: '/kurikulum' }, { label: 'KAFA Future Skills', href: '/programs/future-skills' }, { label: 'Kegiatan & Karya', href: '/student-life' }] },
  { title: 'SPMB 2027/2028', items: [{ label: 'Pusat Informasi SPMB', href: '/ppdb' }, { label: 'Pendaftaran MI', href: '/spmb/mi' }, { label: 'Pendaftaran MTs', href: '/spmb/mts' }] },
  { title: 'Layanan Digital', items: digitalServices.flatMap(service => service.links.map(link => ({ label: link.label, href: link.href, external: true }))) },
];
