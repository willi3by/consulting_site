import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    author: z.string(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    draft: z.boolean().default(false),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional()
  })
});

const papers = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    authors: z.array(z.string()),
    publishDate: z.coerce.date(),
    journal: z.string(),
    downloadUrl: z.string(),
    coverImage: z.string().optional(),
    featured: z.boolean().default(false),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional()
  })
});

const team = defineCollection({
  schema: z.object({
    name: z.string(),
    role: z.string(),
    headshot: z.string().optional(),
    bio: z.string(),
    linkedin: z.string().optional(),
    email: z.string().email().optional(),
    sortOrder: z.number().default(100)
  })
});

const caseStudies = defineCollection({
  schema: z.object({
    title: z.string(),
    clientType: z.string(),
    problem: z.string(),
    solution: z.string(),
    outcomes: z.array(z.string()),
    heroImage: z.string().optional(),
    featured: z.boolean().default(false),
    ctaLabel: z.string().default('Start a consultation'),
    ctaUrl: z.string().default('/demo')
  })
});

export const collections = {
  blog,
  papers,
  team,
  'case-studies': caseStudies
};
