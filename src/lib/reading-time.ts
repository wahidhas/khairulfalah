const WORDS_PER_MINUTE = 200;

/**
 * Estimasi waktu baca dari teks markdown mentah. Cukup hitung kata (strip syntax markdown
 * dasar dulu agar heading/tautan tidak ikut menambah jumlah kata secara tidak wajar),
 * dibulatkan ke atas, minimal 1 menit.
 */
export function calculateReadingTime(rawBody: string): number {
  const plainText = rawBody
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[.*?\]\(.*?\)/g, ' ')
    .replace(/\[(.*?)\]\(.*?\)/g, '$1')
    .replace(/[#>*_`~-]/g, ' ');

  const wordCount = plainText.trim().split(/\s+/).filter(Boolean).length;

  return Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));
}

export function formatReadingTime(minutes: number): string {
  return `${minutes} menit baca`;
}
