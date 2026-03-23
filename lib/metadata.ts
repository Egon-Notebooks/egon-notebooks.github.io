import type { Metadata } from 'next'

const BASE_URL = 'https://egon-notebooks.github.io'
const SITE_NAME = 'Egon Notebooks'

export function buildMetadata({
  title,
  description,
  path = '',
}: {
  title: string
  description: string
  path?: string
}): Metadata {
  const url = `${BASE_URL}${path}`
  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      type: 'website',
      images: [
        {
          url: `${BASE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE_NAME}`,
      description,
    },
    alternates: {
      canonical: url,
    },
  }
}
