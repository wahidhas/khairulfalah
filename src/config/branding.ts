export interface BrandingConfig {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  logo: string;
  logoAlt: string;
  favicon: string;
  faviconIco: string;
  defaultHeroImage: string;
}

/**
 * Warna diambil langsung dari token Design System (emerald-600, white, amber-500),
 * bukan nilai hex yang diciptakan bebas — lihat DESIGN_SYSTEM.md Color System.
 * logo & defaultHeroImage masih kosong: belum ada aset resmi dari yayasan.
 */
export const brandingConfig: BrandingConfig = {
  primaryColor: '#009966',
  secondaryColor: '#ffffff',
  accentColor: '#fe9a00',
  logo: '',
  logoAlt: 'Logo Madrasah Khairul Falah',
  favicon: '/favicon.svg',
  faviconIco: '/favicon.ico',
  defaultHeroImage: '',
};
