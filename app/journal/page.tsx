import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata({
  title: 'Journal',
  description:
    'Structured journaling for your Egon graph. Write daily entries, follow guided programs and write summaries — all as plain Markdown on your own device.',
  path: '/journal',
})

const sectionHeading: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: '1.6rem',
  fontWeight: 600,
  color: 'var(--color-ink)',
  marginBottom: '0.75rem',
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
      <div className="container" style={{ maxWidth: '760px' }}>

        {/* Header */}
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
          The Egon Journal
        </h1>
        <p style={{ ...bodyText, fontSize: '1rem', marginBottom: '3.5rem' }}>
          Egon Notebooks does not aim to be an &quot;AI therapist&quot;.
          Rather, we believe that journaling, in combination with human connection and support, is a more sustainable long-term self-help approach that also doesn&apos;t risk developing parasocial relationships with AI.
          The <code>egon-journal</code> CLI adds structured journaling to your Egon graph.
          Write daily entries linked to the content you already have and follow guided programs — without any data leaving your device.
          When you have a few weeks of entries, turn them into private <Link href="/reports">reports</Link>.
        </p>

        {/* Getting started */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={sectionHeading}>Getting started</h2>
          <p style={{ ...bodyText, marginBottom: '1.25rem' }}>
            For now, the Egon journal is a suite of CLI commands.
            You need Python 3.13+ and <a href="https://docs.astral.sh/uv/" target="_blank" rel="noopener noreferrer">uv</a>.
            Clone the repository and install:
          </p>
          <div style={codeBlock}>{`git clone https://github.com/egon-notebooks/egon-journal
cd egon-journal
uv sync`}</div>

          <p style={{ ...bodyText, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
            Configure your local graph directories by copying the example env file:
          </p>
          <div style={codeBlock}>{`cp .env.example .env`}</div>
          <p style={{ ...bodyText, marginTop: '0.75rem', marginBottom: '1.25rem' }}>
            Open <code>.env</code> and set the three paths:
          </p>
          <div style={codeBlock}>{`EGON_JOURNAL_DIR=/path/to/your/graph/journal
EGON_SUMMARIES_DIR=/path/to/your/graph/summaries
EGON_GRAPH_DIR=/path/to/your/graph`}</div>

          <p style={{ ...bodyText, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
            You can create new daily entries directly in Logseq or Obsidian.
            Logseq even creates a new daily entry every day automatically.
            Or you can create your first journal entry yourself:
          </p>
          <div style={codeBlock}>{`uv run egon new-entry        # today
uv run egon new-entry --open  # open immediately in $EDITOR`}</div>

          <p style={{ ...bodyText, marginTop: '1.25rem' }}>
            Entries are named <code>Journal — YYYY-MM-DD.md</code> and written as plain Markdown with YAML frontmatter.
            They land in <code>EGON_JOURNAL_DIR</code> and sit alongside your content nodes in Obsidian or Logseq.
            The more journal entries you have, the better Egon Notebooks will understand you.
          </p>
        </section>

        {/* Prompts & programs */}
        <section style={section}>
          <h2 style={sectionHeading}>Prompts and programs</h2>
          <p style={{ ...bodyText, marginBottom: '1.25rem' }}>
            Journaling prompts are short, topic-linked questions that sit as nodes in your graph
            alongside the content they refer to. Structured programs are time-bounded sequences —
            each day is a node that frames a reading and a reflection.
          </p>
          <div style={codeBlock}>{`# Generate all prompt nodes
uv run egon generate-prompts

# List available programs
uv run egon list-programs

# Generate a specific program
uv run egon generate-program --name "14-Day Sleep Improvement"

# Generate all programs
uv run egon generate-all-programs`}</div>
        </section>

        {/* Summaries */}
        <section style={section}>
          <h2 style={sectionHeading}>Weekly and monthly summaries</h2>
          <p style={{ ...bodyText, marginBottom: '1.25rem' }}>
            Summary nodes give each week or month a structured reflection: overall tone, recurring
            themes, one thing noticed, and what to carry forward. Fill them in by hand or use a
            local AI tool to draft them from your entries.
          </p>
          <div style={codeBlock}>{`uv run egon new-summary --period week
uv run egon new-summary --period month`}</div>
        </section>

        {/* Export context */}
        <section style={section}>
          <h2 style={sectionHeading}>Exporting entries as LLM context</h2>
          <p style={{ ...bodyText, marginBottom: '1.25rem' }}>
            The export command aggregates your recent journal entries into a single Markdown
            document, ordered by date. This is useful when you want to feed your journal into the
            LLM of your choice to do some self-reflection — paste the file into a conversation and
            ask it to surface recurring themes, blind spots, or questions worth journaling about
            next.
          </p>
          <div style={codeBlock}>{`uv run egon export-context                          # last 3 months, printed to stdout
uv run egon export-context --months 6
uv run egon export-context --output context.md`}</div>
          <p style={{ ...bodyText, marginTop: '1.25rem' }}>
            The export is a plain local file — nothing is sent anywhere by Egon itself. Keep in
            mind that whatever you paste into a hosted LLM leaves your device, so prefer a local
            model if your entries are sensitive.
          </p>
        </section>

        {/* Reports */}
        <section style={section}>
          <h2 style={sectionHeading}>Reports</h2>
          <p style={bodyText}>
            Your entries — together with your Apple Health data, if you like — can be turned into
            private, interactive reports on mood, stress, personality, sleep and activity. See the{' '}
            <Link href="/reports">Reports</Link> page for what&apos;s included, an example report and
            how to generate your own.
          </p>
        </section>

        {/* Next steps */}
        <section style={section}>
          <h2 style={sectionHeading}>Next steps</h2>
          <ul style={{ ...bodyText, paddingLeft: '1.25rem', lineHeight: 1.85 }}>
            <li>See what your entries can tell you on the <Link href="/reports">Reports</Link> page</li>
            <li>Browse the <Link href="/registry">Registry</Link> to download content packs to read alongside your entries</li>
            <li>Follow the <Link href="/getting-started">Getting Started guide</Link> to set up your Obsidian or Logseq vault</li>
            <li>
              View the full source on{' '}
              <a href="https://github.com/egon-notebooks/egon-journal" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </section>

      </div>
    </div>
  )
}
