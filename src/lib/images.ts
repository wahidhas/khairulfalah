import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const PUBLIC_DIR = fileURLToPath(new URL('../../public', import.meta.url));

/**
 * Cek keberadaan file gambar di public/ pada saat build/dev (server-only — hanya boleh
 * dipanggil dari frontmatter .astro, bukan client script). Memungkinkan sistem "drop file,
 * refresh" tanpa perlu mengubah kode: cukup ganti file di public/images/, hasil build
 * otomatis mendeteksi keberadaannya.
 */
export function imageExists(src: string | undefined | null): src is string {
  if (!src) return false;
  const relativePath = src.startsWith('/') ? src.slice(1) : src;
  return existsSync(`${PUBLIC_DIR}/${relativePath}`);
}

/** Mengembalikan `src` asli bila filenya ada di public/, atau `fallback` bila belum/tidak ada. */
export function resolveImage(src: string | undefined | null, fallback: string): string {
  return imageExists(src) ? src : fallback;
}
