import type { Metadata } from 'next'
import Link from 'next/link'
import { BASE_GRAPH_PACKS, getBaseGraphFiles } from '@/lib/content'
import BaseGraphDownload from '@/components/BaseGraphDownload'
import { buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata({
  title: 'Getting started',
  description:
    'Start a private journal in Obsidian or Logseq in a few minutes, add some reading, and go further with prompts and reports if you like.',
  path: '/getting-started',
})

const TOOLS = [
  {
    name: 'Obsidian',
    url: 'https://obsidian.md',
    body: 'Looks like a familiar notes app. A good choice if you are not sure.',
  },
  {
    name: 'Logseq',
    url: 'https://logseq.com',
    body: 'Open source, and you write in bullet points, which some people find easier to start with.',
  },
]

const QUESTIONS = [
  'What stayed with you from today?',
  'Describe one moment from today as if you were telling a friend.',
  'What did you notice about your energy today?',
]

const h2: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: '1.6rem',
  fontWeight: 600,
  color: 'var(--color-ink)',
  marginBottom: '0.75rem',
}

const body: React.CSSProperties = {
  fontSize: '0.95rem',
  color: 'var(--color-ink-muted)',
  lineHeight: 1.7,
  marginBottom: '1rem',
}

const partLabel: React.CSSProperties = {
  fontSize: '0.75rem',
  fontWeight: 600,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'var(--color-accent)',
  marginBottom: '0.5rem',
}

const card: React.CSSProperties = {
  backgroundColor: 'var(--color-surface)',
  border: '1px solid var(--color-border)',
  borderRadius: '4px',
  padding: '1.25rem',
}

const codeBlock: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.82rem',
  backgroundColor: 'var(--color-surface)',
  border: '1px solid var(--color-border)',
  borderRadius: '4px',
  padding: '1rem 1.25rem',
  whiteSpace: 'pre',
  overflowX: 'auto',
  marginBottom: '1rem',
}

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: '3rem' }}>
      <h2 style={h2}>
        <span style={{ color: 'var(--color-accent)', marginRight: '0.6rem' }}>{n}</span>
        {title}
      </h2>
      {children}
    </section>
  )
}

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
          Getting started
        </h1>
        <p style={{ ...body, fontSize: '1.05rem', marginBottom: '1rem' }}>
          You can start in a few minutes, without installing anything technical. All you need is
          a notes app and a little time to write.
        </p>
        <p style={{ ...body, marginBottom: '3.5rem' }}>
          Curious what it looks like after a few months? The <Link href="/demo">demo</Link> shows
          four made-up people and their reports.
        </p>

        <p style={partLabel}>Start writing</p>

        <Step n={1} title="Pick a notes app">
          <p style={body}>
            Both are free and keep your notes as plain files on your own computer, so you can
            switch later without losing anything.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
            {TOOLS.map(tool => (
              <div key={tool.name} style={card}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                  {tool.name}
                </h3>
                <p style={{ ...body, fontSize: '0.85rem' }}>{tool.body}</p>
                <a href={tool.url} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ fontSize: '0.8rem' }}>
                  Get {tool.name} ↗
                </a>
              </div>
            ))}
          </div>
        </Step>

        <Step n={2} title="Write your first entry">
          <p style={body}>
            The most important step is to start writing. It doesn&apos;t matter what, and it
            doesn&apos;t have to be good. One note for each day is enough, and both apps will make
            it for you. In Obsidian, turn on <em>Daily notes</em> in the settings and click the
            calendar icon. In Logseq, the <em>Journals</em> page already has today waiting.
          </p>
          <p style={body}>
            Sometimes you don&apos;t know what to write about. You could start from one of these,
            or ignore them completely:
          </p>
          <ul style={{ ...card, listStyle: 'none', margin: '0 0 1rem' }}>
            {QUESTIONS.map(q => (
              <li key={q} style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', color: 'var(--color-ink)', padding: '0.3rem 0' }}>
                {q}
              </li>
            ))}
          </ul>
          <p style={body}>
            The more you write, the more there is to look back on. A few lines on most days will
            tell you more after a month than a long entry once in a while.
          </p>
        </Step>

        <Step n={3} title="Add some reading">
          <p style={body}>
            When something keeps coming up, you can read about it in the same app. Pick a pack in
            the <Link href="/registry">registry</Link>, or take the base graph below. Unzip it and
            put the files in your Obsidian vault, or in the <code>pages</code> folder of your
            Logseq graph.
          </p>
          <p style={body}>
            The articles link to each other, and you can link your own entries to them by typing
            the title in double square brackets, like <code>[[Sleep and mental health]]</code>.
          </p>
          <BaseGraphDownload obsidianFiles={obsidianFiles} logseqFiles={logseqFiles} packCount={BASE_GRAPH_PACKS.size} />
        </Step>

        <p style={{ ...body, fontStyle: 'italic', marginBottom: '4rem' }}>
          That is enough to begin. Many people never need more.
        </p>

        <p style={partLabel}>Going further, if you like</p>
        <section style={{ marginBottom: '1rem' }}>
          <h2 style={h2}>Prompts, summaries and reports</h2>
          <p style={body}>
            If you are comfortable with a terminal, <code>egon-journal</code> adds writing prompts,
            weekly summaries and private reports on your mood, stress and sleep. It runs on your
            own computer and needs <a href="https://docs.astral.sh/uv/" target="_blank" rel="noopener noreferrer">uv</a>.
          </p>
          <div style={codeBlock}>{`uv tool install git+https://github.com/Egon-Notebooks/egon-journal
egon new-entry
egon report --period month --full`}</div>
          <p style={body}>
            Tell it where your journal lives in a <code>.env</code> file, and set{' '}
            <code>app = &quot;logseq&quot;</code> in <code>egon.toml</code> if you use Logseq. The{' '}
            <Link href="/journal">Journal</Link> and <Link href="/reports">Reports</Link> pages
            explain each part.
          </p>
        </section>
      </div>
    </div>
  )
}
