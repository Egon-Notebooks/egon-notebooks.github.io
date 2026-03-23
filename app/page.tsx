import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPacks } from '@/lib/content'
import PackCard from '@/components/PackCard'

export const metadata: Metadata = {
  title: 'Egon Notebooks',
  description: 'A curated, downloadable graph of structured knowledge about the inner life — for Logseq and Obsidian.',
}

const FEATURED_SLUGS = ['understanding-emotions', 'thinking-patterns', 'self-awareness']

const PRINCIPLES = [
  {
    title: 'Privacy-first',
    body: 'Your notes never leave your device. The website serves knowledge — your personal graph stays entirely local.',
  },
  {
    title: 'Open format',
    body: 'Plain Markdown files. No proprietary databases, no lock-in. Your vault is always yours to export and move.',
  },
  {
    title: 'Portable',
    body: 'Works with Obsidian and Logseq. Download a pack, open a folder. No accounts, no installation, no sync services.',
  },
  {
    title: 'Curated',
    body: 'Every node is written with care and reviewed by a mental health professional before publication.',
  },
]

const HOW_IT_WORKS = [
  {
    step: '1',
    title: 'Browse the Registry',
    body: 'Explore 12 packs covering emotions, anxiety, relationships, grief, and more — 80 nodes in total.',
  },
  {
    step: '2',
    title: 'Download a Pack',
    body: 'Click Download and choose your tool. You\'ll get a folder of plain Markdown files, ready to use.',
  },
  {
    step: '3',
    title: 'Open in Obsidian or Logseq',
    body: 'Drop the folder into your vault. The knowledge graph integrates immediately with your own notes.',
  },
]

export default function HomePage() {
  const allPacks = getAllPacks()
  const featuredPacks = FEATURED_SLUGS
    .map(slug => allPacks.find(p => p.slug === slug))
    .filter(Boolean) as typeof allPacks

  return (
    <>
      {/* Hero */}
      <section
        style={{
          paddingBlock: '5rem 4rem',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '620px' }}>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
                fontWeight: 600,
                lineHeight: 1.1,
                color: 'var(--color-ink)',
                marginBottom: '1.25rem',
                letterSpacing: '-0.01em',
              }}
            >
              Structured knowledge<br />about the inner life.
            </h1>
            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--color-ink-muted)',
                lineHeight: 1.7,
                marginBottom: '2rem',
                maxWidth: '520px',
              }}
            >
              Egon Notebooks is a curated, downloadable graph of psychological knowledge — emotions,
              thinking patterns, grief, relationships — designed to live in your Obsidian or Logseq vault.
              Yours to keep, privately.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link href="/registry" className="btn-primary" style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}>
                Explore the Registry
              </Link>
              <Link href="/getting-started" className="btn-secondary" style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}>
                Getting Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Principle cards */}
      <section style={{ paddingBlock: '4rem' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: '1px',
              border: '1px solid var(--color-border)',
              borderRadius: '4px',
              overflow: 'hidden',
              backgroundColor: 'var(--color-border)',
            }}
          >
            {PRINCIPLES.map(p => (
              <div
                key={p.title}
                style={{
                  backgroundColor: 'var(--color-surface)',
                  padding: '1.5rem',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.15rem',
                    fontWeight: 600,
                    marginBottom: '0.5rem',
                    color: 'var(--color-ink)',
                  }}
                >
                  {p.title}
                </h3>
                <p style={{ fontSize: '0.83rem', color: 'var(--color-ink-muted)', lineHeight: 1.6, margin: 0 }}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        style={{
          paddingBlock: '4rem',
          borderTop: '1px solid var(--color-border)',
        }}
      >
        <div className="container">
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: 600,
              marginBottom: '2.5rem',
              color: 'var(--color-ink)',
            }}
          >
            How it works
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '2rem',
            }}
          >
            {HOW_IT_WORKS.map(step => (
              <div key={step.step} style={{ display: 'flex', gap: '1rem' }}>
                <div
                  aria-hidden="true"
                  style={{
                    width: '2rem',
                    height: '2rem',
                    minWidth: '2rem',
                    borderRadius: '50%',
                    border: '1px solid var(--color-accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: 'var(--color-accent)',
                    marginTop: '0.1rem',
                  }}
                >
                  {step.step}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.15rem',
                      fontWeight: 600,
                      marginBottom: '0.4rem',
                      color: 'var(--color-ink)',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-ink-muted)', lineHeight: 1.6, margin: 0 }}>
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured packs */}
      <section
        style={{
          paddingBlock: '4rem',
          borderTop: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-surface)',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              gap: '1rem',
              marginBottom: '2rem',
              flexWrap: 'wrap',
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                fontWeight: 600,
                color: 'var(--color-ink)',
              }}
            >
              Featured Packs
            </h2>
            <Link href="/registry" style={{ fontSize: '0.875rem', color: 'var(--color-accent)' }}>
              See all 12 packs →
            </Link>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {featuredPacks.map(pack => (
              <PackCard key={pack.slug} pack={pack} tool="obsidian" />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
