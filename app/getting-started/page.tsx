'use client'

import { useState } from 'react'
import Link from 'next/link'

const OBSIDIAN_STEPS = [
  {
    n: '1',
    title: 'Download a Pack',
    body: (
      <>
        Go to the <Link href="/registry">Registry</Link> and make sure the tool toggle is set to{' '}
        <strong>Obsidian</strong>. Click <em>Download for Obsidian</em> on any pack.
        You&apos;ll receive a <code>.zip</code> file.
      </>
    ),
  },
  {
    n: '2',
    title: 'Unzip the file',
    body: (
      <>
        Unzip the archive. You&apos;ll find a flat folder of <code>.md</code> files — one per node —
        with YAML frontmatter and prose paragraphs.
      </>
    ),
  },
  {
    n: '3',
    title: 'Add to your vault',
    body: 'Drag the folder into your Obsidian vault, or use File → Open Folder as Vault if you\'re starting fresh.',
  },
  {
    n: '4',
    title: 'Explore',
    body: 'Open any node. Wiki-links connect related concepts. Switch to Graph View to see the knowledge structure at a glance.',
  },
]

const LOGSEQ_STEPS = [
  {
    n: '1',
    title: 'Download a Pack',
    body: (
      <>
        Go to the <Link href="/registry">Registry</Link> and set the tool toggle to{' '}
        <strong>Logseq</strong>. Click <em>Download for Logseq</em> on any pack.
        You&apos;ll receive a <code>.zip</code> file.
      </>
    ),
  },
  {
    n: '2',
    title: 'Unzip the file',
    body: (
      <>
        Unzip the archive. You&apos;ll find a <code>pages/</code> folder containing{' '}
        <code>.md</code> files in Logseq&apos;s native format — bullet-point body, <code>property::</code> frontmatter.
      </>
    ),
  },
  {
    n: '3',
    title: 'Add to your graph',
    body: 'Copy or move the pages/ contents into your Logseq graph\'s pages/ directory. Logseq will pick them up automatically on the next index.',
  },
  {
    n: '4',
    title: 'Explore',
    body: 'Search for any node by name. Use [[wiki-links]] or the Graph View to trace connections across concepts.',
  },
]

function StepList({ steps }: { steps: typeof OBSIDIAN_STEPS }) {
  return (
    <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
      {steps.map(step => (
        <li key={step.n} style={{ display: 'flex', gap: '1.25rem' }}>
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
            {step.n}
          </div>
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.15rem',
                fontWeight: 600,
                marginBottom: '0.375rem',
                color: 'var(--color-ink)',
              }}
            >
              {step.title}
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-ink-muted)', lineHeight: 1.65, margin: 0 }}>
              {step.body}
            </p>
          </div>
        </li>
      ))}
    </ol>
  )
}

type Tool = 'obsidian' | 'logseq'

export default function GettingStartedPage() {
  const [installTool, setInstallTool] = useState<Tool>('obsidian')

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
          of <code>.md</code> files — but they are optimised for Obsidian and Logseq.
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
                id: 'obsidian' as Tool,
                name: 'Obsidian',
                description: 'A local-first knowledge base with a rich plugin ecosystem. Download at obsidian.md.',
                url: 'https://obsidian.md',
              },
              {
                id: 'logseq' as Tool,
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
          <Link href="/registry" className="btn-primary">
            Browse the Registry →
          </Link>
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

          {/* Tab toggle */}
          <div
            role="group"
            aria-label="Installation guide for"
            style={{ display: 'flex', gap: 0, marginBottom: '2rem' }}
          >
            {(['obsidian', 'logseq'] as Tool[]).map((t, i) => (
              <button
                key={t}
                onClick={() => setInstallTool(t)}
                aria-pressed={installTool === t}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  padding: '0.45rem 1.1rem',
                  border: '1px solid var(--color-border)',
                  borderRadius: i === 0 ? '3px 0 0 3px' : '0 3px 3px 0',
                  borderLeft: i === 1 ? 'none' : undefined,
                  backgroundColor: installTool === t ? 'var(--color-ink)' : 'var(--color-surface)',
                  color: installTool === t ? '#fff' : 'var(--color-ink-muted)',
                  cursor: 'pointer',
                  transition: 'background-color 0.15s ease, color 0.15s ease',
                }}
              >
                {t === 'obsidian' ? 'Obsidian' : 'Logseq'}
              </button>
            ))}
          </div>

          <StepList steps={installTool === 'obsidian' ? OBSIDIAN_STEPS : LOGSEQ_STEPS} />
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
