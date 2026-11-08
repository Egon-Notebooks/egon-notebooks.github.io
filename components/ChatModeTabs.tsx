'use client'

import { useRef, useState } from 'react'

type Mode = 'local' | 'cloud'

const MODES: { id: Mode; label: string }[] = [
  { id: 'local', label: 'Running locally' },
  { id: 'cloud', label: 'Running in the cloud' },
]

export default function ChatModeTabs({ local, cloud }: { local: React.ReactNode; cloud: React.ReactNode }) {
  const [mode, setMode] = useState<Mode>('local')
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  // Arrow keys move between tabs (WAI-ARIA tabs pattern)
  const handleKeyDown = (e: React.KeyboardEvent, i: number) => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return
    e.preventDefault()
    const next = (i + (e.key === 'ArrowRight' ? 1 : -1) + MODES.length) % MODES.length
    setMode(MODES[next].id)
    tabRefs.current[next]?.focus()
  }

  return (
    <div>
      <div role="tablist" aria-label="Where the chat runs" style={{ display: 'flex', gap: 0, marginBottom: '1.75rem' }}>
        {MODES.map((m, i) => (
          <button
            key={m.id}
            ref={el => { tabRefs.current[i] = el }}
            id={`chat-tab-${m.id}`}
            role="tab"
            aria-selected={mode === m.id}
            aria-controls={`chat-panel-${m.id}`}
            tabIndex={mode === m.id ? 0 : -1}
            onClick={() => setMode(m.id)}
            onKeyDown={e => handleKeyDown(e, i)}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
              fontWeight: 500,
              padding: '0.45rem 1rem',
              border: '1px solid var(--color-border)',
              borderRadius: i === 0 ? '3px 0 0 3px' : '0 3px 3px 0',
              borderLeft: i === 1 ? 'none' : undefined,
              backgroundColor: mode === m.id ? 'var(--color-ink)' : 'var(--color-surface)',
              color: mode === m.id ? '#fff' : 'var(--color-ink-muted)',
              cursor: 'pointer',
              transition: 'background-color 0.15s ease, color 0.15s ease',
            }}
          >
            {m.label}
          </button>
        ))}
      </div>

      {MODES.map(m => (
        <div
          key={m.id}
          id={`chat-panel-${m.id}`}
          role="tabpanel"
          aria-labelledby={`chat-tab-${m.id}`}
          hidden={mode !== m.id}
        >
          {m.id === 'local' ? local : cloud}
        </div>
      ))}
    </div>
  )
}
