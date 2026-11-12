import Link from 'next/link'
import { version } from '@/package.json'

// Before v1.0 the site is a preview; the version follows the product release (VERSIONING.md).
const RELEASE = `v${version.split('.').slice(0, 2).join('.')}`

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--color-border)',
        backgroundColor: 'var(--color-base)',
        marginTop: '6rem',
      }}
    >
      <div
        className="container"
        style={{
          paddingBlock: '3rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          {/* Brand */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.1rem',
                fontWeight: 600,
                color: 'var(--color-ink)',
                marginBottom: '0.25rem',
              }}
            >
              Egon Notebooks
            </p>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-ink-muted)', maxWidth: '320px' }}>
              A private journal in plain files, with a library to read alongside it.
            </p>
          </div>

          {/* Links */}
          <nav
            aria-label="Footer navigation"
            style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'flex-end' }}
          >
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <Link
                href="https://github.com/egon-notebooks"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '0.8rem', color: 'var(--color-ink-muted)' }}
              >
                GitHub
              </Link>
              <Link
                href="https://huggingface.co/Egon-Notebooks"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '0.8rem', color: 'var(--color-ink-muted)' }}
              >
                HuggingFace
              </Link>
              <Link
                href="https://www.linkedin.com/company/egon-notebooks/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '0.8rem', color: 'var(--color-ink-muted)' }}
              >
                LinkedIn
              </Link>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <Link href="/about" style={{ fontSize: '0.8rem', color: 'var(--color-ink-muted)' }}>
                About
              </Link>
              <Link href="/registry" style={{ fontSize: '0.8rem', color: 'var(--color-ink-muted)' }}>
                Registry
              </Link>
            </div>
          </nav>
        </div>

        {/* Disclaimer */}
        <p
          style={{
            fontSize: '0.73rem',
            color: 'var(--color-ink-muted)',
            lineHeight: 1.6,
            maxWidth: '720px',
            borderTop: '1px solid var(--color-border)',
            paddingTop: '1.25rem',
          }}
        >
          The articles were written by Claude (Anthropic) and have not yet been reviewed by a mental
          health professional. They are for education only, and not a substitute for professional
          advice, diagnosis or treatment. If you are in crisis, you can find a helpline in your country
          at{' '}
          <a href="https://findahelpline.com" target="_blank" rel="noopener noreferrer">
            findahelpline.com
          </a>
          . Articles are licensed under{' '}
          <a
            href="https://creativecommons.org/licenses/by-nc/4.0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CC BY-NC 4.0
          </a>
          .
        </p>

        <p style={{ fontSize: '0.73rem', color: 'var(--color-ink-muted)' }}>
          © {new Date().getFullYear()} Egon Notebooks · Preview · {RELEASE} ·{' '}
          <a
            href="https://github.com/Egon-Notebooks/egon-journal/releases"
            target="_blank"
            rel="noopener noreferrer"
          >
            What&apos;s new
          </a>
        </p>
      </div>
    </footer>
  )
}
