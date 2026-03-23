import type { Pack } from '@/lib/content'
import Link from 'next/link'

interface PackCardProps {
  pack: Pack
  tool: 'obsidian' | 'logseq'
}

export default function PackCard({ pack, tool }: PackCardProps) {
  const downloadPath = `/downloads/${tool}/${pack.slug}.zip`

  return (
    <article
      style={{
        backgroundColor: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: '4px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 1px 3px rgba(28,25,23,0.06)',
        transition: 'box-shadow 0.2s ease',
      }}
    >
      {/* Cover image placeholder */}
      <div
        aria-hidden="true"
        style={{
          aspectRatio: '16/9',
          backgroundColor: 'var(--color-accent-soft)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.8rem',
            color: 'var(--color-accent)',
            opacity: 0.5,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          {pack.slug}
        </span>
      </div>

      {/* Card body */}
      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
        <div>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.2rem',
              fontWeight: 600,
              color: 'var(--color-ink)',
              marginBottom: '0.4rem',
              lineHeight: 1.2,
            }}
          >
            {pack.name}
          </h3>
          <p
            style={{
              fontSize: '0.85rem',
              color: 'var(--color-ink-muted)',
              lineHeight: 1.55,
              margin: 0,
            }}
          >
            {pack.description}
          </p>
        </div>

        {/* Meta row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--color-ink-muted)' }}>
            {pack.nodes.length} {pack.nodes.length === 1 ? 'node' : 'nodes'}
          </span>
          <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
            {pack.tags.slice(0, 2).map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        {/* Download button */}
        <div style={{ marginTop: 'auto', paddingTop: '0.5rem' }}>
          <Link
            href={downloadPath}
            download
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M7 2v7M4 7l3 3 3-3M2 11h10" />
            </svg>
            Download for {tool === 'obsidian' ? 'Obsidian' : 'Logseq'}
          </Link>
        </div>
      </div>
    </article>
  )
}
