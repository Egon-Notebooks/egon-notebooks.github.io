'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import type { Pack, NodeMeta } from '@/lib/content'
import PackCard from './PackCard'
import NodeRow from './NodeRow'

interface PackFiles {
  obsidian: Record<string, string>
  logseq: Record<string, string>
}

interface RegistryClientProps {
  packs: Pack[]
  nodes: NodeMeta[]
  packFiles: Record<string, PackFiles>
}

type View = 'packs' | 'nodes'
type Tool = 'obsidian' | 'logseq'

const TOOL_KEY = 'egon-preferred-tool'

export default function RegistryClient({ packs, nodes, packFiles }: RegistryClientProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const viewParam = searchParams.get('view')
  const view: View = viewParam === 'nodes' ? 'nodes' : 'packs'

  const [tool, setTool] = useState<Tool>('obsidian')

  // Read tool preference from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(TOOL_KEY)
    if (saved === 'obsidian' || saved === 'logseq') {
      setTool(saved)
    }
  }, [])

  const handleViewChange = (v: View) => {
    const params = new URLSearchParams(searchParams.toString())
    if (v === 'nodes') {
      params.set('view', 'nodes')
    } else {
      params.delete('view')
    }
    router.replace(`/registry${params.toString() ? '?' + params.toString() : ''}`, { scroll: false })
  }

  const handleToolChange = (t: Tool) => {
    setTool(t)
    localStorage.setItem(TOOL_KEY, t)
  }

  return (
    <div>
      {/* Toolbar */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2.5rem',
          paddingBottom: '1.25rem',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        {/* View toggle */}
        <div role="group" aria-label="View" style={{ display: 'flex', gap: 0 }}>
          {(['packs', 'nodes'] as const).map((v, i) => (
            <button
              key={v}
              onClick={() => handleViewChange(v)}
              aria-pressed={view === v}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                fontWeight: 500,
                padding: '0.45rem 1rem',
                border: '1px solid var(--color-border)',
                borderRadius: i === 0 ? '3px 0 0 3px' : '0 3px 3px 0',
                borderLeft: i === 1 ? 'none' : undefined,
                backgroundColor: view === v ? 'var(--color-ink)' : 'var(--color-surface)',
                color: view === v ? '#fff' : 'var(--color-ink-muted)',
                cursor: 'pointer',
                transition: 'background-color 0.15s ease, color 0.15s ease',
              }}
            >
              {v === 'packs' ? 'Packs' : 'Nodes'}
            </button>
          ))}
        </div>

        {/* Tool toggle */}
        <div role="group" aria-label="Download format" style={{ display: 'flex', gap: 0 }}>
          {(['obsidian', 'logseq'] as const).map((t, i) => (
            <button
              key={t}
              onClick={() => handleToolChange(t)}
              aria-pressed={tool === t}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                fontWeight: 500,
                padding: '0.45rem 1rem',
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
      </div>

      {/* Pack Grid */}
      {view === 'packs' && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {packs.map(pack => (
            <PackCard
                key={pack.slug}
                pack={pack}
                tool={tool}
                obsidianFiles={packFiles[pack.slug]?.obsidian ?? {}}
                logseqFiles={packFiles[pack.slug]?.logseq ?? {}}
              />
          ))}
        </div>
      )}

      {/* Node List */}
      {view === 'nodes' && (
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
                {['Node', 'Description', 'Pack', 'Tags'].map((h, i) => (
                  <th
                    key={h}
                    className={i === 1 ? 'node-desc-col' : i === 2 ? 'node-pack-col' : ''}
                    style={{
                      textAlign: 'left',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: 'var(--color-ink-muted)',
                      padding: i === 0 ? '0 1rem 0.75rem 0' : i === 3 ? '0 0 0.75rem 1rem' : '0 1rem 0.75rem',
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {nodes.map(node => (
                <NodeRow key={node.slug} node={node} />
              ))}
            </tbody>
          </table>
          <style>{`
            @media (max-width: 639px) {
              .node-desc-col { display: none !important; }
              .node-pack-col { display: none !important; }
            }
          `}</style>
        </div>
      )}
    </div>
  )
}
