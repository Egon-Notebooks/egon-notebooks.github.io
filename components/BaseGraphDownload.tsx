'use client'

import { useState } from 'react'
import DownloadButton from './DownloadButton'

type Tool = 'obsidian' | 'logseq'

interface BaseGraphDownloadProps {
  obsidianFiles: Record<string, string>
  logseqFiles: Record<string, string>
}

export default function BaseGraphDownload({ obsidianFiles, logseqFiles }: BaseGraphDownloadProps) {
  const [tool, setTool] = useState<Tool>('obsidian')

  return (
    <div
      style={{
        backgroundColor: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: '4px',
        padding: '1.25rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <div>
        <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-ink)', margin: '0 0 0.25rem' }}>
          Or download everything at once
        </p>
        <p style={{ fontSize: '0.8rem', color: 'var(--color-ink-muted)', margin: 0, lineHeight: 1.55 }}>
          The Base Graph contains all 100 nodes across every pack — a complete starting collection for your vault.
        </p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
        {/* Tool toggle */}
        <div role="group" aria-label="Download format">
          {(['obsidian', 'logseq'] as Tool[]).map((t, i) => (
            <button
              key={t}
              onClick={() => setTool(t)}
              aria-pressed={tool === t}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                fontWeight: 500,
                padding: '0.4rem 1rem',
                border: '1px solid var(--color-border)',
                borderRadius: i === 0 ? '3px 0 0 3px' : '0 3px 3px 0',
                borderLeft: i === 1 ? 'none' : undefined,
                backgroundColor: tool === t ? 'var(--color-ink)' : 'var(--color-surface)',
                color: tool === t ? '#fff' : 'var(--color-ink-muted)',
                cursor: 'pointer',
                transition: 'background-color 0.15s ease, color 0.15s ease',
              }}
            >
              {t === 'obsidian' ? 'Obsidian' : 'Logseq'}
            </button>
          ))}
        </div>

        <DownloadButton
          packSlug="base-graph"
          tool={tool}
          files={tool === 'obsidian' ? obsidianFiles : logseqFiles}
        />
      </div>
    </div>
  )
}
