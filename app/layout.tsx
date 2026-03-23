import type { Metadata } from 'next'
import './globals.css'
import '@fontsource/cormorant-garamond/400.css'
import '@fontsource/cormorant-garamond/600.css'
import '@fontsource/cormorant-garamond/400-italic.css'
import '@fontsource/dm-sans/400.css'
import '@fontsource/dm-sans/500.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Egon Notebooks',
    template: '%s | Egon Notebooks',
  },
  description: 'A curated, downloadable graph of structured knowledge about the inner life — for Logseq and Obsidian.',
  metadataBase: new URL('https://egon-notebooks.github.io'),
  openGraph: {
    siteName: 'Egon Notebooks',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
