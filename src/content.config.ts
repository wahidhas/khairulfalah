import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// 5 kategori artikel — sesuai brief Sprint 8 & nama subfolder di src/content/articles/.
export const articleCategories = [
  'News',
  'Education',
  'Activities',
  'Achievements',
  'Announcements',
] as const;

/**
 * Konten artikel dikelompokkan ke subfolder per kategori (news/, education/, dst.) hanya
 * untuk kerapian penulis konten — `glob` di bawah membaca seluruh subfolder ke SATU
 * collection, dan `category` di frontmatter (bukan nama folder) yang jadi sumber kebenaran
 * agar tetap type-safe & mudah di-query lintas kategori.
 */
const articles = defineCollection({
  loader: glob({
    pattern: 'articles/**/*.md',
    base: './src/content',
    // Subfolder (news/, education/, dst.) hanya untuk kerapian penulis konten — slug URL
    // tetap flat (/articles/[slug]) memakai nama file saja, tanpa prefix folder kategori.
    generateId: ({ entry }) => entry.split('/').pop()!.replace(/\.md$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string(),
    category: z.enum(articleCategories),
    featured: z.boolean().default(false),
    // Konsisten dengan ImageAsset di src/types/content.ts — src string kosong = belum ada foto,
    // ditangani section dengan fallback visual (lihat pola di HeroSection.astro dkk).
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .default({ src: '', alt: '' }),
    // Galeri foto tambahan per artikel (opsional) — Sprint Image Management. caption opsional,
    // ditampilkan ArticleGallerySection hanya bila array ini tidak kosong.
    gallery: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          caption: z.string().optional(),
        })
      )
      .default([]),
    tags: z.array(z.string()).default([]),
  }),
});

const authors = defineCollection({
  loader: glob({ pattern: 'authors/**/*.md', base: './src/content' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    bio: z.string().optional(),
  }),
});

export const collections = { articles, authors };
