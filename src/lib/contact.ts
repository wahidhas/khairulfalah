/**
 * Diekstrak dari src/content/ppdb/contact.ts (Sprint 7) karena logika yang sama sekarang
 * dipakai lagi di src/content/contact/ (Sprint 9) — DRY, tanpa mengubah perilaku.
 */
export function isPlaceholder(value: string): boolean {
  return !value || value.trim().startsWith('[');
}

export function hrefIfReal(value: string, build: (value: string) => string): string | undefined {
  return isPlaceholder(value) ? undefined : build(value);
}

export function whatsappHref(value: string): string | undefined {
  return hrefIfReal(value, (v) => `https://wa.me/${v.replace(/\D/g, '')}`);
}

export function phoneHref(value: string): string | undefined {
  return hrefIfReal(value, (v) => `tel:${v.replace(/\s/g, '')}`);
}

export function emailHref(value: string): string | undefined {
  return hrefIfReal(value, (v) => `mailto:${v}`);
}

/** Tautan pencarian Google Maps dari teks alamat — tidak butuh place ID/koordinat nyata. */
export function mapsSearchUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
