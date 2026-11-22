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
 * Identitas 2027/2028; warna CSS disimpan sebagai token semantik di global.css.
 * Logo hanya dirender setelah file resmi tersedia. Tidak dibuat logo pengganti.
 */
export const brandingConfig: BrandingConfig = {
  primaryColor: '#075345',
  secondaryColor: '#ffffff',
  accentColor: '#FFD43B',
  logo: '/images/logos/yayasan.png',
  logoAlt: 'Logo resmi Yayasan Khairul Falah',
  favicon: '/favicon.svg',
  faviconIco: '/favicon.ico',
  defaultHeroImage: '',
};
