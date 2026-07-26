import type { NavigationItem } from './navigation';

export interface Button {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
  external?: boolean;
}

export interface ImageAsset {
  src: string;
  alt: string;
}

export interface SectionHeader {
  badge?: string;
  title: string;
  subtitle?: string;
  description?: string;
}

export interface HeroContent {
  header: SectionHeader;
  primaryCTA: Button;
  secondaryCTA?: Button;
  image: ImageAsset;
  /** Opsional — hanya diisi oleh halaman dalam yang butuh breadcrumb (bukan Homepage). */
  breadcrumb?: NavigationItem[];
}

export interface FeatureCard {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
}

export interface LearningDomain {
  id: string;
  title: string;
  description: string;
  color: string;
  icon: string;
}

export interface Statistic {
  id: string;
  label: string;
  value: string;
  suffix?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar?: string;
  placeholder: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface CTASection {
  header: SectionHeader;
  primaryCTA: Button;
  secondaryCTA?: Button;
}

/** Hero generik untuk halaman dalam (About, Transformation, dst.) — judul + breadcrumb + foto. */
export interface PageHeroContent {
  title: string;
  description?: string;
  breadcrumb: NavigationItem[];
  image: ImageAsset;
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface VisionMission {
  vision: string;
  mission: string[];
}

/** Dipakai untuk Pimpinan Madrasah maupun Guru & Tenaga Kependidikan — bentuknya sama. */
export interface PersonProfile {
  id: string;
  name: string;
  role: string;
  photo?: ImageAsset;
  bio?: string;
  placeholder: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  year?: string;
  placeholder: boolean;
}

/** Contoh jadwal pengalaman belajar per hari (mis. Weekly Learning Experience di Kurikulum). */
export interface DaySchedule {
  id: string;
  day: string;
  activities: string[];
}

/** Program dengan durasi & rentang usia — dipakai Featured Programs (Future Skills, dst.). */
export interface SkillProgram {
  id: string;
  title: string;
  description: string;
  icon: string;
  duration: string;
  ageRange: string;
}

/** Contoh karya siswa yang belum tentu nyata — placeholder wajib true hingga ada data terverifikasi. */
export interface StudentProject {
  id: string;
  title: string;
  description: string;
  icon: string;
  placeholder: boolean;
}

/** Satu tahap dalam roadmap/journey bertingkat (mis. Level 1-4 Learning Journey). */
export interface JourneyStep {
  id: string;
  label: string;
  title: string;
  description: string;
}

/** Satu titik waktu dalam jadwal harian (mis. "Sehari di Khairul Falah"). */
export interface ScheduleItem {
  id: string;
  time: string;
  activity: string;
}

/** Item checklist (mis. Persyaratan PPDB). */
export interface ChecklistItem {
  id: string;
  label: string;
  note?: string;
}

/**
 * Komponen biaya. `amount` sengaja string agar bisa diisi penanda placeholder
 * (mis. "[Akan diinformasikan]") — jangan pernah diisi angka karangan.
 */
export interface FeeItem {
  id: string;
  name: string;
  amount: string;
  icon: string;
  note?: string;
}

/**
 * Kanal kontak yang ditampilkan. `href` opsional dan HANYA diisi bila nilainya
 * sudah data nyata — jangan membuat tel:/wa.me/mailto: dari teks placeholder.
 */
export interface ContactChannel {
  id: string;
  icon: string;
  label: string;
  value: string;
  href?: string;
}

/** Satu baris jam operasional (mis. "Senin–Jumat" / "07.00–16.00"). */
export interface OfficeHours {
  id: string;
  day: string;
  hours: string;
}
