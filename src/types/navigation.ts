export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
  /** True bila halaman tujuan belum dibangun — dirender sebagai teks non-klik, bukan tautan rusak. */
  comingSoon?: boolean;
}

export interface FooterLink extends NavigationItem {}

export interface NavigationGroup {
  title: string;
  items: FooterLink[];
}
