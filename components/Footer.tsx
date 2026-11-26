import Link from 'next/link'
import { version } from '@/package.json'

// Before v1.0 the site is a preview; the version follows the product release (VERSIONING.md).
const RELEASE = `v${version.split('.').slice(0, 2).join('.')}`

const COLUMNS: { title: string; links: { label: string; href: string; external?: boolean }[] }[] = [
  {
    title: 'Begin',
    links: [
      { label: 'Getting started', href: '/getting-started' },
      { label: 'Registry', href: '/registry' },
      { label: 'Demo', href: '/demo' },
    ],
  },
  {
    title: 'Tools',
    links: [
      { label: 'Journal', href: '/journal' },
      { label: 'Reports', href: '/reports' },
      { label: 'Chat', href: '/chat' },
    ],
  },
  {
    title: 'Elsewhere',
    links: [
      { label: 'GitHub', href: 'https://github.com/egon-notebooks', external: true },
      { label: 'Hugging Face', href: 'https://huggingface.co/Egon-Notebooks', external: true },
      { label: 'Barentsz Foundation', href: 'https://www.linkedin.com/company/144105252/', external: true },
    ],
  },
]

const muted: React.CSSProperties = { fontSize: '0.8rem', color: 'var(--color-ink-muted)', lineHeight: 1.65 }

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--color-ink)', marginTop: '3rem' }}>
      <div className="container" style={{ paddingBlock: '3.5rem 2.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: '2.5rem', marginBottom: '4rem' }}>
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.35rem', lineHeight: 1.3, color: 'var(--color-ink)', margin: 0 }}>
              A private journal in plain and portable files, with an integrated library of psychology.
            </p>
          </div>
          {COLUMNS.map(col => (
            <nav key={col.title} aria-label={col.title}>
              <p className="eyebrow" style={{ margin: '0 0 0.9rem' }}>{col.title}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.45rem' }}>
                {col.links.map(l => (
                  <li key={l.label}>
                    {l.external ? (
                      <a href={l.href} target="_blank" rel="noopener noreferrer" className="link-draw" style={{ fontSize: '0.9rem' }}>
                        {l.label} ↗
                      </a>
                    ) : (
                      <Link href={l.href} className="link-draw" style={{ fontSize: '0.9rem' }}>
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <p
          aria-hidden="true"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
            fontSize: 'clamp(3.2rem, 13vw, 11rem)',
            lineHeight: 1.05,
            paddingBottom: '0.08em',
            letterSpacing: '-0.035em',
            color: 'var(--color-ink)',
            margin: '0 0 2.5rem',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          }}
        >
          Egon <em style={{ color: 'var(--color-accent)' }}>Notebooks</em>
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '1.5rem 3rem', borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem' }}>
          <p style={{ ...muted, margin: 0 }}>
            The articles were written by Claude (Anthropic) and have not yet been reviewed by a mental
            health professional. They are for education only, and not a substitute for professional
            advice, diagnosis or treatment. If you are in crisis, you can find a helpline in your country
            at{' '}
            <a href="https://findahelpline.com" target="_blank" rel="noopener noreferrer">findahelpline.com</a>.
            Articles are licensed under{' '}
            <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel="noopener noreferrer">CC BY-NC 4.0</a>.
          </p>
          <p style={{ ...muted, margin: 0 }}>
            Everything you write stays on your own computer.
            <br />
            © {new Date().getFullYear()} Egon Notebooks · Preview · {RELEASE} ·{' '}
            <a href="https://github.com/Egon-Notebooks/egon-journal/releases" target="_blank" rel="noopener noreferrer">
              What&apos;s new
            </a>
            {' · '}
            <Link href="/about">About</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
