import Image from 'next/image'
import type { Pack } from '@/lib/content'
import DownloadButton from './DownloadButton'

interface PackCardProps {
  pack: Pack
  tool: 'obsidian' | 'logseq'
  obsidianFiles: Record<string, string>
  logseqFiles: Record<string, string>
}

export default function PackCard({ pack, tool, obsidianFiles, logseqFiles }: PackCardProps) {
  const files = tool === 'obsidian' ? obsidianFiles : logseqFiles

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
      }}
    >
      {/* Cover image */}
      <div style={{ aspectRatio: '16/9', position: 'relative', borderBottom: '1px solid var(--color-border)' }}>
        <Image
          src={`/images/packs/${pack.slug}.webp`}
          alt={pack.name}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
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
          <DownloadButton packSlug={pack.slug} tool={tool} files={files} />
        </div>
      </div>
    </article>
  )
}
