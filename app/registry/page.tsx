import type { Metadata } from 'next'
import { Suspense } from 'react'
import { getAllPacks, getAllNodes, getPackFiles, getNodeFile } from '@/lib/content'
import { buildMetadata } from '@/lib/metadata'
import RegistryClient from '@/components/RegistryClient'

export const metadata: Metadata = buildMetadata({
  title: 'The Registry',
  description: 'Short articles about the inner life, in packs you can download into Obsidian or Logseq: emotions, anxiety, low mood, grief, relationships and more.',
  path: '/registry',
})

export default function RegistryPage() {
  const packs = getAllPacks()
  const nodes = getAllNodes()
  const packFiles = Object.fromEntries(
    packs.map(p => [p.slug, {
      obsidian: getPackFiles(p, 'obsidian'),
      logseq: getPackFiles(p, 'logseq'),
    }])
  )
  const nodeFiles = Object.fromEntries(
    nodes.map(n => [n.slug, {
      obsidian: getNodeFile(n.slug, 'obsidian'),
      logseq: getNodeFile(n.slug, 'logseq'),
    }])
  )

  return (
    <div style={{ paddingBlock: '3rem 5rem' }}>
      <div className="container">
        {/* Page header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 600,
              color: 'var(--color-ink)',
              marginBottom: '0.75rem',
              letterSpacing: '-0.01em',
            }}
          >
            The Registry
          </h1>
          <p
            style={{
              fontSize: '1rem',
              color: 'var(--color-ink-muted)',
              lineHeight: 1.65,
              maxWidth: '560px',
              margin: 0,
            }}
          >
            {nodes.length} short articles in {packs.length} packs. Each pack covers one topic and
            downloads as a folder of Markdown files for your notes app. Every article was written by
            AI and has not yet been reviewed by a professional.
          </p>
        </div>

        {/* Registry client (toolbar + grid/list) */}
        <Suspense fallback={null}>
          <RegistryClient packs={packs} nodes={nodes} packFiles={packFiles} nodeFiles={nodeFiles} />
        </Suspense>
      </div>
    </div>
  )
}
