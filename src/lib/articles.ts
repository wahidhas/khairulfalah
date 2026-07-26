import { getCollection, type CollectionEntry } from 'astro:content';
import { articleCategories } from '../content.config';

export type ArticleEntry = CollectionEntry<'articles'>;
export type ArticleCategory = (typeof articleCategories)[number];

export function categorySlug(category: string): string {
  return category.toLowerCase();
}

export function categoryFromSlug(slug: string): ArticleCategory | undefined {
  return articleCategories.find((category) => categorySlug(category) === slug);
}

export async function getAllArticles(): Promise<ArticleEntry[]> {
  const entries = await getCollection('articles');
  return entries.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
}

export function getFeaturedArticle(articles: ArticleEntry[]): ArticleEntry | undefined {
  return articles.find((article) => article.data.featured) ?? articles[0];
}

export function getArticlesByCategory(articles: ArticleEntry[], category: string): ArticleEntry[] {
  return articles.filter((article) => article.data.category === category);
}

export function getRelatedArticles(
  articles: ArticleEntry[],
  current: ArticleEntry,
  limit = 3
): ArticleEntry[] {
  return articles
    .filter((article) => article.id !== current.id && article.data.category === current.data.category)
    .slice(0, limit);
}

/**
 * `author` di artikel adalah nama (string bebas, lihat contoh di brief), bukan reference
 * collection formal — supaya penulis konten tidak perlu tahu skema ID internal. Fungsi ini
 * mencocokkan nama tsb ke collection `authors` untuk data tambahan (role/bio) bila tersedia;
 * bila tidak ketemu, halaman cukup menampilkan nama saja.
 */
export async function getAuthorProfile(name: string) {
  const authors = await getCollection('authors');
  return authors.find((author) => author.data.name === name);
}
