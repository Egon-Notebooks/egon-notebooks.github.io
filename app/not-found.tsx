import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      style={{
        paddingBlock: '6rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      <div className="container" style={{ maxWidth: '560px' }}>
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            color: 'var(--color-ink-muted)',
            marginBottom: '1.25rem',
            letterSpacing: '0.06em',
          }}
        >
          404
        </p>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: 600,
            color: 'var(--color-ink)',
            marginBottom: '1rem',
            lineHeight: 1.15,
          }}
        >
          This page doesn&apos;t exist.
        </h1>
        <p
          style={{
            fontSize: '0.9rem',
            color: 'var(--color-ink-muted)',
            lineHeight: 1.65,
            marginBottom: '2rem',
          }}
        >
          The path you followed doesn&apos;t lead anywhere. Perhaps the URL changed, or you followed
          a broken link.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Link href="/registry" className="btn-primary">
            Browse the Registry
          </Link>
          <Link href="/" className="btn-secondary">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
