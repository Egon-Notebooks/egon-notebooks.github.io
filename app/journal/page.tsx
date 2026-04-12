import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Journal — Egon Notebooks',
  description:
    'Structured journaling for your Egon graph. Write daily entries, follow guided programs, and generate local reports across mood, physiology, and personality.',
}

const sectionHeading: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: '1.6rem',
  fontWeight: 600,
  color: 'var(--color-ink)',
  marginBottom: '0.75rem',
}

const subsectionHeading: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: '1.15rem',
  fontWeight: 600,
  color: 'var(--color-ink)',
  marginBottom: '0.375rem',
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

const card: React.CSSProperties = {
  backgroundColor: 'var(--color-surface)',
  border: '1px solid var(--color-border)',
  borderRadius: '4px',
  padding: '1.25rem',
}

const tag: React.CSSProperties = {
  display: 'inline-block',
  fontSize: '0.7rem',
  backgroundColor: 'var(--color-accent-soft)',
  color: 'var(--color-accent)',
  borderRadius: '3px',
  padding: '0.15rem 0.5rem',
  marginBottom: '0.5rem',
}

const REPORTS: {
  section: string
  items: { name: string; description: string; command: string; extra?: string }[]
}[] = [
  {
    section: 'Journal insights',
    items: [
      {
        name: 'Word count',
        description: 'Daily word count across all entries as a bar chart — a proxy for how much you\'ve been engaging with your graph.',
        command: 'uv run egon report-word-count',
      },
      {
        name: 'Sentiment',
        description: 'Daily sentiment score (VADER, −1 to +1) as a line chart with a neutral band. A fast, local measure of overall emotional tone.',
        command: 'uv run egon report-sentiment',
      },
      {
        name: 'Word cloud',
        description: 'A visual summary of the most frequent words across a period. Opt-in: set wordcloud = true in egon.toml.',
        command: 'uv run egon report-wordcloud',
      },
      {
        name: 'Topics',
        description: 'Latent theme discovery using BERTopic — a bar chart of recurring topics and a stacked timeline showing how they shift across months.',
        command: 'uv run egon report-topics',
        extra: 'topics',
      },
    ],
  },
  {
    section: 'Personality & affective patterns',
    items: [
      {
        name: 'Big Five traits',
        description: 'Scores each entry on the five personality dimensions (Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism) using a DistilBERT regression model. Five subplots, one per trait, with the period average annotated.',
        command: 'uv run egon report-bigfive',
        extra: 'bigfive',
      },
      {
        name: 'MBTI dimensions',
        description: 'Classifies each entry into four binary MBTI dimensions (E/I, N/S, T/F, J/P) and shows the dominant pole and proportion across the period.',
        command: 'uv run egon report-mbti',
        extra: 'bigfive',
      },
      {
        name: 'Emotion',
        description: 'Daily emotion profile across seven categories (anger, disgust, fear, joy, neutral, sadness, surprise) using a DistilRoBERTa model. Includes a joy-vs-sadness overlay.',
        command: 'uv run egon report-emotion',
        extra: 'bigfive',
      },
    ],
  },
  {
    section: 'Physiological measures',
    items: [
      {
        name: 'Sleep',
        description: 'Nightly time asleep (hours) from an Apple Health export, with 7 h and 9 h reference lines. Sleep quality is strongly correlated with mood and mental health symptoms.',
        command: 'uv run egon report-sleep --xml ~/export.xml',
      },
      {
        name: 'Resting heart rate',
        description: 'Daily resting heart rate (bpm) from Apple Health. A useful proxy for stress and recovery. Set a target via EGON_TARGET_RESTING_HEART_RATE in .env.',
        command: 'uv run egon report-resting-heart-rate --xml ~/export.xml',
      },
      {
        name: 'HRV',
        description: 'Daily heart rate variability (ms, SDNN) from Apple Health. HRV is associated with autonomic nervous system function and stress levels.',
        command: 'uv run egon report-hrv --xml ~/export.xml',
      },
      {
        name: 'Weight',
        description: 'Daily body weight (kg) from Apple Health. Sudden weight changes can be an early indicator of shifts in mental health.',
        command: 'uv run egon report-weight --xml ~/export.xml',
      },
      {
        name: 'Step count',
        description: 'Daily steps from Apple Health as a bar chart with a 10,000-step reference line.',
        command: 'uv run egon report-step-count --xml ~/export.xml',
      },
      {
        name: 'Exercise time',
        description: 'Daily Apple Exercise Time (minutes) with a WHO-recommended 30 min/day reference line. Customise via EGON_TARGET_EXERCISE_MINUTES in .env.',
        command: 'uv run egon report-exercise --xml ~/export.xml',
      },
      {
        name: 'VO2 max',
        description: 'Daily mean VO2 max (mL/min/kg) from Apple Health with the period average annotated.',
        command: 'uv run egon report-vo2max --xml ~/export.xml',
      },
    ],
  },
  {
    section: 'Cross-signal analysis',
    items: [
      {
        name: 'Correlations',
        description: 'Pairwise Pearson correlations across all available journal and health signals — a full heatmap and a top-pairs chart. Requires at least two signals.',
        command: 'uv run egon report-correlations --xml ~/export.xml',
      },
    ],
  },
]

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
          Journal
        </h1>
        <p style={{ ...bodyText, fontSize: '1rem', marginBottom: '3.5rem' }}>
          <code>egon-journal</code> adds structured journaling to your Egon graph. Write daily entries
          linked to the content you already have, follow guided programs, and run local reports across
          mood, physiology, and personality — without any data leaving your device.
        </p>

        {/* Getting started */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={sectionHeading}>Getting started</h2>
          <p style={{ ...bodyText, marginBottom: '1.25rem' }}>
            You need Python 3.13+ and <a href="https://docs.astral.sh/uv/" target="_blank" rel="noopener noreferrer">uv</a>.
            Clone the repository and install:
          </p>
          <div style={codeBlock}>{`git clone https://github.com/egon-notebooks/egon-journal
cd egon-journal
uv sync`}</div>

          <p style={{ ...bodyText, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
            Configure your graph directories by copying the example env file:
          </p>
          <div style={codeBlock}>{`cp .env.example .env`}</div>
          <p style={{ ...bodyText, marginTop: '0.75rem', marginBottom: '1.25rem' }}>
            Open <code>.env</code> and set the three paths:
          </p>
          <div style={codeBlock}>{`EGON_JOURNAL_DIR=/path/to/your/graph/journal
EGON_SUMMARIES_DIR=/path/to/your/graph/summaries
EGON_GRAPH_DIR=/path/to/your/graph`}</div>

          <p style={{ ...bodyText, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
            Create your first journal entry:
          </p>
          <div style={codeBlock}>{`uv run egon new-entry        # today
uv run egon new-entry --open  # open immediately in $EDITOR`}</div>

          <p style={{ ...bodyText, marginTop: '1.25rem' }}>
            Entries are named <code>Journal — YYYY-MM-DD.md</code> and written as plain Markdown
            with YAML frontmatter. They land in <code>EGON_JOURNAL_DIR</code> and sit alongside
            your content nodes in Obsidian or Logseq.
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

        {/* Reports */}
        <section style={section}>
          <h2 style={sectionHeading}>Reports</h2>
          <p style={{ ...bodyText, marginBottom: '0.75rem' }}>
            Reports are generated locally as PDFs (or <code>.png</code> / <code>.svg</code>) and
            saved to <code>./reports/</code>. They read only from your local files — no API calls,
            no data transmitted.
          </p>
          <p style={{ ...bodyText, marginBottom: '1.5rem' }}>
            Run everything at once with the full report command:
          </p>
          <div style={{ ...codeBlock, marginBottom: '1.5rem' }}>{`uv run egon report                  # current month
uv run egon report --period week
uv run egon report --for 2026-Q1`}</div>
          <p style={{ ...bodyText, marginBottom: '2rem' }}>
            Which analyses appear is controlled by <code>egon.toml</code> in the project root. All
            analyses are enabled by default except <code>wordcloud</code> (opt-in) and{' '}
            <code>topics</code> (requires the <code>topics</code> extra).
          </p>

          {REPORTS.map(group => (
            <div key={group.section} style={{ marginBottom: '2.5rem' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: 'var(--color-ink)',
                  marginBottom: '1rem',
                  paddingBottom: '0.5rem',
                  borderBottom: '1px solid var(--color-border)',
                }}
              >
                {group.section}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {group.items.map(item => (
                  <div key={item.name} style={card}>
                    {item.extra && (
                      <span style={tag}>requires --extra {item.extra}</span>
                    )}
                    <h4 style={subsectionHeading}>{item.name}</h4>
                    <p style={{ ...bodyText, marginBottom: '0.75rem' }}>{item.description}</p>
                    <div style={{ ...codeBlock, marginTop: 0 }}>{item.command}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <p style={bodyText}>
            All report commands accept <code>--period</code> (week, month, quarter, year, all-time)
            and <code>--for</code> (e.g. 2026-02, 2026-W14, 2026-Q1). Health reports also
            accept <code>--xml</code> to specify an Apple Health export path.
          </p>
        </section>

        {/* Next steps */}
        <section style={section}>
          <h2 style={sectionHeading}>Next steps</h2>
          <ul style={{ ...bodyText, paddingLeft: '1.25rem', lineHeight: 1.85 }}>
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
