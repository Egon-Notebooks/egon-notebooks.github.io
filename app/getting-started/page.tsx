import Link from 'next/link'
import { getBaseGraphFiles } from '@/lib/content'
import InstallGuide from '@/components/InstallGuide'
import BaseGraphDownload from '@/components/BaseGraphDownload'

export default function GettingStartedPage() {
  const obsidianFiles = getBaseGraphFiles('obsidian')
  const logseqFiles = getBaseGraphFiles('logseq')

  return (
    <div style={{ paddingBlock: '3rem 5rem' }}>
      <div className="container" style={{ maxWidth: '760px' }}>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 600,
            color: 'var(--color-ink)',
            marginBottom: '0.75rem',
            letterSpacing: '-0.01em',
          }}
        >
          Getting Started
        </h1>
        <p style={{ fontSize: '1rem', color: 'var(--color-ink-muted)', lineHeight: 1.65, marginBottom: '3.5rem' }}>
          Egon Notebooks packs are plain Markdown files. They work with any tool that opens a folder
          of <code>.md</code> files — but they are optimized for Obsidian and Logseq.
        </p>

        {/* Step 1: Choose tool */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.6rem',
              fontWeight: 600,
              color: 'var(--color-ink)',
              marginBottom: '1.25rem',
            }}
          >
            1. Choose your tool
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: '1rem',
            }}
          >
            {[
              {
                id: 'obsidian',
                name: 'Obsidian',
                description: 'A local-first knowledge base with a rich plugin ecosystem. Download at obsidian.md.',
                url: 'https://obsidian.md',
              },
              {
                id: 'logseq',
                name: 'Logseq',
                description: 'An open-source, outliner-based knowledge graph. Download at logseq.com.',
                url: 'https://logseq.com',
              },
            ].map(tool => (
              <div
                key={tool.id}
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '4px',
                  padding: '1.25rem',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.15rem',
                    fontWeight: 600,
                    color: 'var(--color-ink)',
                    marginBottom: '0.375rem',
                  }}
                >
                  {tool.name}
                </h3>
                <p style={{ fontSize: '0.83rem', color: 'var(--color-ink-muted)', lineHeight: 1.6, marginBottom: '1rem' }}>
                  {tool.description}
                </p>
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ fontSize: '0.8rem' }}
                >
                  Download {tool.name} ↗
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Step 2: Download */}
        <section
          style={{
            marginBottom: '3.5rem',
            paddingTop: '2.5rem',
            borderTop: '1px solid var(--color-border)',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.6rem',
              fontWeight: 600,
              color: 'var(--color-ink)',
              marginBottom: '0.75rem',
            }}
          >
            2. Download a Pack
          </h2>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-ink-muted)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
            Head to the Registry, pick a pack that interests you, and click the Download button.
            Use the tool toggle to switch between Obsidian and Logseq formats.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <Link href="/registry" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
              Browse the Registry →
            </Link>
            <BaseGraphDownload obsidianFiles={obsidianFiles} logseqFiles={logseqFiles} />
          </div>
        </section>

        {/* Step 3: Install */}
        <section
          style={{
            marginBottom: '3.5rem',
            paddingTop: '2.5rem',
            borderTop: '1px solid var(--color-border)',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.6rem',
              fontWeight: 600,
              color: 'var(--color-ink)',
              marginBottom: '1.25rem',
            }}
          >
            3. Install
          </h2>
          <InstallGuide />
        </section>

        {/* What's in a pack */}
        <section
          style={{
            marginBottom: '3.5rem',
            paddingTop: '2.5rem',
            borderTop: '1px solid var(--color-border)',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.6rem',
              fontWeight: 600,
              color: 'var(--color-ink)',
              marginBottom: '0.75rem',
            }}
          >
            What&apos;s in a Pack?
          </h2>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-ink-muted)', lineHeight: 1.65, marginBottom: '1rem' }}>
            Each pack is a flat folder of <code>.md</code> files — one per concept. Nodes contain:
          </p>
          <ul
            style={{
              fontSize: '0.875rem',
              color: 'var(--color-ink-muted)',
              lineHeight: 1.75,
              paddingLeft: '1.25rem',
              marginBottom: '1.5rem',
            }}
          >
            <li>A frontmatter block (YAML for Obsidian, <code>property::</code> for Logseq)</li>
            <li>3–5 paragraphs of structured, readable prose</li>
            <li>Wiki-links to related concepts within the pack</li>
            <li>A disclaimer noting AI authorship and professional review</li>
          </ul>
          <div
            style={{
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: '4px',
              padding: '1.25rem 1.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              color: 'var(--color-ink-muted)',
              lineHeight: 1.7,
              whiteSpace: 'pre',
              overflowX: 'auto',
            }}
            aria-label="Example node file (Logseq format)"
          >
{`author:: Claude
date:: 2026-03-23
tags:: mental-health

- Anger is a natural human emotion...
- One of the most helpful things to understand...

- _This article was generated by Claude (Anthropic)..._`}
          </div>
        </section>

        {/* Next steps */}
        <section
          style={{
            paddingTop: '2.5rem',
            borderTop: '1px solid var(--color-border)',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.6rem',
              fontWeight: 600,
              color: 'var(--color-ink)',
              marginBottom: '0.75rem',
            }}
          >
            Next steps
          </h2>
          <ul
            style={{
              fontSize: '0.875rem',
              color: 'var(--color-ink-muted)',
              lineHeight: 1.75,
              paddingLeft: '1.25rem',
            }}
          >
            <li>Explore the nodes and add your own annotations alongside them</li>
            <li>Create links from your personal notes to nodes in the pack</li>
            <li>Return to the Registry to download more packs</li>
            <li>Read the <Link href="/about">About page</Link> to understand the longer vision</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
