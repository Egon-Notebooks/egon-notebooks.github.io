import type { Metadata } from 'next'
import { Suspense } from 'react'
import { getAllPacks, getAllNodes, getPackFiles, getNodeFile } from '@/lib/content'
import { buildMetadata } from '@/lib/metadata'
import RegistryClient from '@/components/RegistryClient'

export const metadata: Metadata = buildMetadata({
  title: 'The Registry',
  description: 'Browse and download curated psychological knowledge packs for Obsidian and Logseq. 12 packs, 80 nodes.',
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
            {packs.length} curated packs · {nodes.length} nodes. Browse packs to download a complete
            topic as a Markdown vault, or explore the full node inventory below.
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
