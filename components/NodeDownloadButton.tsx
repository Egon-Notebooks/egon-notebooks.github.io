'use client'

interface NodeDownloadButtonProps {
  filename: string
  tool: 'obsidian' | 'logseq'
  obsidianContent: string
  logseqContent: string
}

export default function NodeDownloadButton({ filename, tool, obsidianContent, logseqContent }: NodeDownloadButtonProps) {
  const handleDownload = () => {
    const content = tool === 'obsidian' ? obsidianContent : logseqContent
    const blob = new Blob([content], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <button
      onClick={handleDownload}
      title={`Download ${filename}`}
      style={{
        background: 'none',
        border: '1px solid var(--color-border)',
        borderRadius: '3px',
        padding: '0.3rem 0.55rem',
        cursor: 'pointer',
        color: 'var(--color-ink-muted)',
        fontSize: '0.75rem',
        fontFamily: 'var(--font-body)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.3rem',
        transition: 'border-color 0.15s ease, color 0.15s ease',
        whiteSpace: 'nowrap',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget
        el.style.borderColor = 'var(--color-accent)'
        el.style.color = 'var(--color-accent)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget
        el.style.borderColor = 'var(--color-border)'
        el.style.color = 'var(--color-ink-muted)'
      }}
    >
      <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M5.5 1.5v5M3 5l2.5 2.5L8 5M1.5 9h8" />
      </svg>
      .md
    </button>
  )
}
