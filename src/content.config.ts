import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const gallery = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/gallery' }),
  schema: ({ image }) =>
    z.object({
      image: image(),
      alt: z.string(),
      caption: z.string().optional(),
      order: z.number().default(0),
      featured: z.boolean().default(false)
    })
});

const pricing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pricing' }),
  schema: ({ image }) =>
    z.object({
      intro: z.string().optional(),
      outro: z.string().optional(),
      categories: z.array(
        z.object({
          name: z.string(),
          image: image().optional(),
          packages: z.array(
            z.object({
              name: z.string(),
              price: z.string(),
              description: z.string(),
              features: z.array(z.string()).default([]),
              highlighted: z.boolean().default(false)
            })
          )
        })
      )
    })
});

const homepage = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/homepage' }),
  schema: ({ image }) =>
    z.object({
      heroTitle: z.string(),
      heroSubtitle: z.string(),
      heroImage: image().optional(),
      aboutTitle: z.string(),
      aboutBody: z.string(),
      werkwijzeTitle: z.string(),
      werkwijzeBody: z.string(),
      ctaLabel: z.string()
    })
});

const site = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/site' }),
  schema: z.object({
    businessName: z.string(),
    kvkNumber: z.string(),
    btwNumber: z.string().optional(),
    address: z.string(),
    city: z.string(),
    email: z.string().email(),
    phone: z.string().optional(),
    instagramUrl: z.string().url().optional(),
    facebookUrl: z.string().url().optional()
  })
});

const legal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/legal' }),
  schema: z.object({
    title: z.string(),
    lastUpdated: z.date()
  })
});

export const collections = { gallery, pricing, homepage, site, legal };
