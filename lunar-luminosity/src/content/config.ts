import { defineCollection, z } from 'astro:content'

const docs = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
})

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.date(),
  }),
})

const features = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
})

export const collections = {
  docs,
  blog,
  features,
}
