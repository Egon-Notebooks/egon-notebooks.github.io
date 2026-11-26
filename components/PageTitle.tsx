/** The large editorial title at the top of a page, with a small label above it. */
export default function PageTitle({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <header style={{ marginBottom: '1.5rem' }}>
      <p className="eyebrow" style={{ margin: '0 0 1.25rem' }}>{eyebrow}</p>
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.8rem, 6vw, 4.8rem)',
          fontWeight: 400,
          lineHeight: 1,
          letterSpacing: '-0.025em',
          color: 'var(--color-ink)',
          margin: 0,
        }}
      >
        {children}
      </h1>
    </header>
  )
}
