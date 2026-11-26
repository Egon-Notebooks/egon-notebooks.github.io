/** A journal entry shown as a handwritten page. The text is always synthetic (a demo persona). */
export default function JournalPage({ date, lines, signature }: { date: string; lines: string[]; signature?: string }) {
  return (
    <figure style={{ margin: 0 }}>
      <div className="journal-page">
        <p style={{ color: 'var(--color-accent)', marginBottom: '0.2rem' }}>{date}</p>
        {lines.map(line => (
          <p key={line}>{line}</p>
        ))}
      </div>
      {signature && (
        <figcaption style={{ fontSize: '0.8rem', color: 'var(--color-ink-muted)', marginTop: '1.25rem' }}>
          {signature}
        </figcaption>
      )}
    </figure>
  )
}
