import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false, // set to `true` to fetch from edge cache
  apiVersion: '2024-01-01', // use current date (YYYY-MM-DD) to target the latest API version
})

const builder = imageUrlBuilder(client)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source)
}

export async function sanityFetch<T = unknown>({
  query,
  qParams = {},
  tags,
}: {
  query: string
  qParams?: Record<string, unknown>
  tags: string[]
}): Promise<T> {
  return client.fetch<T>(query, qParams, {
    next: { revalidate: 0, tags },
  })
}