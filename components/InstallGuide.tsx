'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Tool = 'obsidian' | 'logseq'

type Step = { n: string; title: string; body: React.ReactNode }

const OBSIDIAN_STEPS: Step[] = [
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
    body: "Drag the folder into your Obsidian vault, or use File → Open Folder as Vault if you're starting fresh.",
  },
  {
    n: '4',
    title: 'Explore',
    body: 'Open any node. Wiki-links connect related concepts. Switch to Graph View to see the knowledge structure at a glance.',
  },
]

const LOGSEQ_STEPS: Step[] = [
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
    body: "Copy or move the pages/ contents into your Logseq graph's pages/ directory. Logseq will pick them up automatically on the next index.",
  },
  {
    n: '4',
    title: 'Explore',
    body: 'Search for any node by name. Use [[wiki-links]] or the Graph View to trace connections across concepts.',
  },
]

function StepList({ steps }: { steps: Step[] }) {
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

export default function InstallGuide() {
  const [tool, setTool] = useState<Tool>('obsidian')

  return (
    <>
      <div role="group" aria-label="Installation guide for" style={{ display: 'flex', gap: 0, marginBottom: '2rem' }}>
        {(['obsidian', 'logseq'] as Tool[]).map((t, i) => (
          <button
            key={t}
            onClick={() => setTool(t)}
            aria-pressed={tool === t}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
              fontWeight: 500,
              padding: '0.45rem 1.1rem',
              border: '1px solid var(--color-border)',
              borderRadius: i === 0 ? '3px 0 0 3px' : '0 3px 3px 0',
              borderLeft: i === 1 ? 'none' : undefined,
              backgroundColor: tool === t ? 'var(--color-ink)' : 'var(--color-surface)',
              color: tool === t ? '#fff' : 'var(--color-ink-muted)',
              cursor: 'pointer',
              transition: 'background-color 0.15s ease, color 0.15s ease',
            }}
          >
            {t === 'obsidian' ? 'Obsidian' : 'Logseq'}
          </button>
        ))}
      </div>

      <StepList steps={tool === 'obsidian' ? OBSIDIAN_STEPS : LOGSEQ_STEPS} />

      <div style={{ marginTop: '2rem', borderRadius: '4px', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
        <Image
          src={tool === 'obsidian' ? '/images/obsidian-base-graph.png' : '/images/logseq-base-graph.png'}
          alt={tool === 'obsidian' ? 'Egon Notebooks pack open in Obsidian graph view' : 'Egon Notebooks pack open in Logseq graph view'}
          width={1200}
          height={675}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>
    </>
  )
}
