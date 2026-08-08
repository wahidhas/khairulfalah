import { existsSync } from 'node:fs';
import path from 'node:path';

// PENTING: jangan ganti ke `fileURLToPath(new URL(..., import.meta.url))` — di production
// build itu resolve ke path chunk bundel Vite, BUKAN lokasi source file, sehingga
// imageExists() selalu false meski file asli sudah ada di public/. process.cwd() adalah
// fix yang benar untuk arsitektur proyek ini (Astro build dijalankan dari root proyek).
const PUBLIC_DIR = path.join(process.cwd(), 'public');

/**
 * Cek keberadaan file gambar di public/ pada saat build/dev (server-only — hanya boleh
 * dipanggil dari frontmatter .astro, bukan client script). Memungkinkan sistem "drop file,
 * refresh" tanpa perlu mengubah kode: cukup ganti file di public/images/, hasil build
 * otomatis mendeteksi keberadaannya.
 */
export function imageExists(src: string | undefined | null): src is string {
  if (!src) return false;
  const relativePath = src.startsWith('/') ? src.slice(1) : src;
  return existsSync(path.join(PUBLIC_DIR, relativePath));
}

/** Mengembalikan `src` asli bila filenya ada di public/, atau `fallback` bila belum/tidak ada. */
export function resolveImage(src: string | undefined | null, fallback: string): string {
  return imageExists(src) ? src : fallback;
}

/**
 * ── Image Slot System ──────────────────────────────────────────────────────────────────
 *
 * Setiap image di situs punya `slot`: identitas semantik berformat "namespace.key", mis.
 * "homepage.hero" atau "kflf.iman-al-quran". Slot menentukan SATU hal: kategori placeholder
 * kontekstual yang ditampilkan bila foto asli belum ada — supaya tidak ada lagi 10 section
 * berbeda menampilkan 1 gambar placeholder yang sama.
 *
 * Slot TIDAK menggantikan `src` — path foto asli tetap ditulis eksplisit di content file
 * seperti biasa (tidak berubah dari sistem sebelumnya, workflow di IMAGE_GUIDE.md tetap sama).
 * `slot` murni memilih placeholder yang tepat ketika `src` tersebut belum ada filenya.
 */

const PLACEHOLDER_DIR = '/images/placeholders';

/** Registry: kategori placeholder -> file ilustrasi di public/images/placeholders/. Satu-satunya
 * sumber kebenaran untuk daftar placeholder yang tersedia (lihat IMAGE_GUIDE.md untuk inventarisnya). */
const PLACEHOLDER_CATEGORY_FILE: Record<string, string> = {
  hero: 'hero.webp',
  school: 'school.webp',
  transformation: 'transformation.webp',
  kflf: 'kflf.webp',
  'future-skills': 'future-skills.webp',
  student: 'student.webp',
  enrollment: 'enrollment.webp',
  location: 'location.webp',
  quran: 'quran.webp',
  communication: 'communication.webp',
  'computational-thinking': 'computational-thinking.webp',
  science: 'science.webp',
  leadership: 'leadership.webp',
  'life-skills': 'life-skills.webp',
  creativity: 'creativity.webp',
  coding: 'coding.webp',
  ai: 'ai.webp',
  robotics: 'robotics.webp',
  'digital-literacy': 'digital-literacy.webp',
  entrepreneurship: 'entrepreneurship.webp',
  teacher: 'teacher.webp',
  testimonial: 'testimonial.webp',
  gallery: 'gallery.webp',
  article: 'article.webp',
};

/** Slot eksplisit ("namespace.key") -> kategori placeholder. Dicek dulu sebelum heuristik
 * per-namespace di bawah, untuk slot yang key-nya bukan nama kategori (mis. domain KFLF). */
const SLOT_CATEGORY_OVERRIDE: Record<string, string> = {
  'homepage.hero': 'hero',
  'homepage.school': 'school',
  'about.hero': 'school',
  'transformation.hero': 'transformation',
  'curriculum.hero': 'kflf',
  'future-skills.hero': 'future-skills',
  'student-life.hero': 'student',
  'ppdb.hero': 'enrollment',
  'contact.hero': 'location',
  'kflf.iman-al-quran': 'quran',
  'kflf.komunikasi-global': 'communication',
  'kflf.matematika-computational-thinking': 'computational-thinking',
  'kflf.sains-inovasi': 'science',
  'kflf.peradaban-kepemimpinan-entrepreneurship': 'leadership',
  'kflf.life-skills-wellbeing': 'life-skills',
  'kflf.creativity-impact-project': 'creativity',
  'future-skills.ai-literacy': 'ai',
  'future-skills.coding': 'coding',
  'future-skills.robotics': 'robotics',
  'future-skills.communication': 'communication',
  'future-skills.entrepreneurship': 'entrepreneurship',
  'future-skills.digital-citizenship': 'digital-literacy',
  'gallery.pembelajaran': 'student',
  'gallery.tahfiz': 'quran',
  'gallery.project': 'creativity',
  'gallery.prestasi': 'leadership',
  'gallery.kegiatan': 'gallery',
  'gallery.event': 'gallery',
  'gallery.aktivitas-harian': 'student',
  'gallery.ekstrakurikuler': 'gallery',
};

/** Fallback per-namespace bila slot tidak ada di SLOT_CATEGORY_OVERRIDE (mis. slot person baru
 * seperti "teacher.guru-baru" yang key-nya adalah id orang, bukan nama kategori). */
const NAMESPACE_DEFAULT_CATEGORY: Record<string, string> = {
  homepage: 'hero',
  about: 'school',
  // Namespace "teachers"/"testimonials" (jamak) sengaja mengikuti nama folder yang sudah ada
  // (public/images/teachers/, ditetapkan di sprint sebelumnya) — bukan "teacher" tunggal.
  teachers: 'teacher',
  student: 'student',
  'student-life': 'student',
  program: 'gallery',
  kflf: 'kflf',
  'future-skills': 'future-skills',
  gallery: 'gallery',
  article: 'article',
  testimonials: 'testimonial',
};

/** Kategori placeholder untuk sebuah slot. */
export function slotToPlaceholderCategory(slot: string): string {
  if (SLOT_CATEGORY_OVERRIDE[slot]) return SLOT_CATEGORY_OVERRIDE[slot];
  const namespace = slot.split('.')[0] ?? slot;
  return NAMESPACE_DEFAULT_CATEGORY[namespace] ?? 'gallery';
}

/** Path file placeholder kontekstual (di public/) untuk sebuah slot. */
export function slotToPlaceholder(slot: string): string {
  const category = slotToPlaceholderCategory(slot);
  const file = PLACEHOLDER_CATEGORY_FILE[category] ?? PLACEHOLDER_CATEGORY_FILE.gallery;
  return `${PLACEHOLDER_DIR}/${file}`;
}

/**
 * Kandidat path foto asli yang diturunkan otomatis dari slot: "namespace.key" ->
 * /images/namespace/key.webp. Dipakai sebagai fallback saat content file belum (atau tidak
 * perlu) mengisi `src` secara eksplisit — supaya foto baru bisa langsung terdeteksi cukup
 * dengan menaruh file di path yang diturunkan dari slot-nya, tanpa perlu ubah content file.
 */
export function slotToRealPath(slot: string): string {
  const [namespace, ...rest] = slot.split('.');
  const key = rest.join('-') || namespace;
  return `/images/${namespace}/${key}.webp`;
}

/**
 * Resolver berbasis slot: REAL IMAGE EXISTS -> pakai foto asli (dari `src` eksplisit bila
 * diisi, atau kandidat path yang diturunkan dari `slot` bila `src` kosong); REAL IMAGE DOES
 * NOT EXIST -> placeholder kontekstual sesuai `slot`. Dipakai SmartImage bila prop `slot` diisi.
 */
export function resolveImageSlot(slot: string, src: string | undefined | null): string {
  const candidate = src || slotToRealPath(slot);
  return imageExists(candidate) ? candidate : slotToPlaceholder(slot);
}
