import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'
import Ink from '@/components/Ink'
import PageTitle from '@/components/PageTitle'

export const metadata: Metadata = buildMetadata({
  title: 'Journal',
  description:
    'egon-journal helps you keep a private journal in Obsidian or Logseq: daily entries, prompts when you are stuck, summaries and reports, all on your own computer.',
  path: '/journal',
})

const sectionHeading: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
  fontWeight: 400,
  lineHeight: 1.1,
  letterSpacing: '-0.01em',
  color: 'var(--color-ink)',
  marginBottom: '1rem',
}

const bodyText: React.CSSProperties = {
  fontSize: '0.875rem',
  color: 'var(--color-ink-muted)',
  lineHeight: 1.65,
}

const section: React.CSSProperties = {
  marginBottom: '3.5rem',
  paddingTop: '2.5rem',
  borderTop: '1px solid var(--color-border)',
}

const codeBlock: React.CSSProperties = {
  backgroundColor: 'var(--color-surface)',
  border: '1px solid var(--color-border)',
  borderRadius: '4px',
  padding: '1rem 1.25rem',
  fontFamily: 'var(--font-mono)',
  fontSize: '0.78rem',
  color: 'var(--color-ink-muted)',
  lineHeight: 1.7,
  whiteSpace: 'pre',
  overflowX: 'auto',
  marginTop: '0.75rem',
}

export default function JournalPage() {
  return (
    <div style={{ paddingBlock: '3rem 5rem' }}>
      <div className="container chapters" style={{ maxWidth: '760px' }}>
        <PageTitle eyebrow="Writing">The <Ink>journal</Ink></PageTitle>
        <p style={{ ...bodyText, fontSize: '1rem', marginBottom: '1rem' }}>
          Writing things down helps. It slows a thought down enough to look at it, and over weeks
          it leaves a record you can learn from. Research suggests the benefit is real but modest (Sohal et al., 2022),
          and that it works best alongside the people and care in your life rather than instead
          of them.
        </p>
        <p style={{ ...bodyText, fontSize: '1rem', marginBottom: '3.5rem' }}>
          You can keep your journal in Obsidian or Logseq with nothing else installed (see{' '}
          <Link href="/getting-started">Getting started</Link>). <code>egon-journal</code> is an
          optional command-line tool that adds a few things on top. Nothing it does leaves your
          computer. To see how different people use it, have a look at the{' '}
          <Link href="/demo">demo</Link>.
        </p>

        <section style={section}>
          <h2 style={sectionHeading}>Install</h2>
          <p style={bodyText}>
            You need <a href="https://docs.astral.sh/uv/" target="_blank" rel="noopener noreferrer">uv</a>.
            Then one command installs <code>egon</code>:
          </p>
          <div style={codeBlock}>{`uv tool install git+https://github.com/Egon-Notebooks/egon-journal`}</div>
          <p style={{ ...bodyText, marginTop: '1rem' }}>
            You write your entries in Obsidian or Logseq, as daily notes. In the folder you run{' '}
            <code>egon</code> from, create a <code>.env</code> file that says where those notes are
            saved:
          </p>
          <div style={codeBlock}>{`# .env
EGON_JOURNAL_DIR=/path/to/your/graph/journal`}</div>
        </section>

        <section style={section}>
          <h2 style={sectionHeading}>When you don&apos;t know what to write</h2>
          <p style={bodyText}>
            Sometimes you sit down and nothing comes. A prompt gives you one question to start
            from.
          </p>
          <div style={codeBlock}>{`egon generate-prompts`}</div>
          <p style={{ ...bodyText, marginTop: '1rem' }}>
            With <a href="https://ollama.com" target="_blank" rel="noopener noreferrer">Ollama</a>{' '}
            installed, a model on your own computer can also suggest one question based on your
            recent entries:
          </p>
          <div style={codeBlock}>{`egon suggest-prompt`}</div>
        </section>

        <section style={section}>
          <h2 style={sectionHeading}>Looking back on a week or a month</h2>
          <p style={bodyText}>
            It is easy to forget how a month actually went. A summary page gives you a few short
            questions to answer at the end of a week or month: how it felt, what came up, and what
            you want to carry forward.
          </p>
          <div style={codeBlock}>{`egon new-summary --period week
egon new-summary --period month`}</div>
          <p style={{ ...bodyText, marginTop: '1rem' }}>
            For charts of your mood, stress and sleep over time, see{' '}
            <Link href="/reports">Reports</Link>.
          </p>
        </section>

        <section style={section}>
          <h2 style={sectionHeading}>Talking it through with a chatbot</h2>
          <p style={bodyText}>
            If you want to talk a few months over with a chatbot, this gathers your entries into
            one file. Egon only writes the file. Whatever you upload to a cloud chatbot leaves your
            computer, so decide what you are comfortable sharing first.
          </p>
          <div style={codeBlock}>{`egon export-context --months 3 --output context.md`}</div>
          <p style={{ ...bodyText, marginTop: '1rem' }}>
            The <Link href="/chat">Chat</Link> page explains the trade-off between local and cloud
            models.
          </p>
        </section>
      </div>
    </div>
  )
}
