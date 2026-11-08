import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata({
  title: 'Reports',
  description:
    'Private, interactive reports on your mood, stress, personality, sleep and activity — generated on your own device from your journal and Apple Health data.',
  path: '/reports',
})

const DEMO_REPORT = '/demo/report-david-osei-2025-Q1.html'

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
  items: {
    name: string
    description: string
    command?: string
    extra?: string
    appleHealth?: boolean
  }[]
}[] = [
  {
    section: 'Journal insights',
    items: [
      {
        name: 'Word count',
        description: 'Words per entry with a 7-day trend — a quiet signal of how engaged you are with writing, and of changes in rhythm.',
        command: 'uv run egon report-word-count',
      },
      {
        name: 'Frequent words',
        description: 'The most frequent meaningful words across a period, ranked — what kept coming up. Opt-in: set wordcloud = true in egon.toml.',
        command: 'uv run egon report-wordcloud',
      },
      {
        name: 'Self-focus in language',
        description: 'The share of first-person pronouns (I, me, my) in your writing. A sustained rise can reflect turning inward — healthy reflection or rumination.',
      },
      {
        name: 'Topics',
        description: 'Recurring themes discovered with BERTopic, ranked by size, and how they shift from month to month.',
        command: 'uv run egon report-topics',
        extra: 'topics',
      },
    ],
  },
  {
    section: 'Personality & affective patterns',
    items: [
      {
        name: 'Sentiment',
        description: 'Daily tone of your writing (VADER, −1 to +1) as positive and negative bars around a neutral band, with a 7-day trend. Fast and fully local.',
        command: 'uv run egon report-sentiment',
      },
      {
        name: 'Stress',
        description: 'Daily probability that your writing reads as stressed (DistilBERT fine-tuned on the Dreaddit dataset), with a 7-day trend.',
        command: 'uv run egon report-stress',
        extra: 'limbic',
      },
      {
        name: 'Loneliness',
        description: 'Daily probability that your writing expresses loneliness (MentalBERT), with a 7-day trend.',
        command: 'uv run egon report-loneliness',
        extra: 'limbic',
      },
      {
        name: 'Emotional tone',
        description: 'The balance of seven emotions in your writing (DistilRoBERTa): positive affect above a neutral band, negative below, plus a period profile. Click an emotion to isolate it.',
        command: 'uv run egon report-emotion',
        extra: 'limbic',
      },
      {
        name: 'Thinking traps',
        description: 'Cognitive distortions such as catastrophizing and should statements (BERT-tiny classifier): a daily distortion signal and a week-by-week heatmap of which traps appear most.',
        command: 'uv run egon report-cognitive-bias',
        extra: 'limbic',
      },
      {
        name: 'Big Five traits',
        description: 'Openness, Conscientiousness, Extraversion, Agreeableness and Neuroticism as reflected in your writing (DistilBERT), with period averages compared to the population.',
        command: 'uv run egon report-bigfive',
        extra: 'limbic',
      },
      {
        name: 'MBTI type',
        description: 'Your type for the period (e.g. INFJ) and the daily lean on each of the four dimensions. A playful lens rather than a measurement.',
        command: 'uv run egon report-mbti',
        extra: 'limbic',
      },
    ],
  },
  {
    section: 'Physiological measures',
    items: [
      {
        name: 'Weight',
        description: 'Daily body weight (and lean body mass, if recorded) with a 7-day trend and an optional personal target.',
        command: 'uv run egon report-weight',
        appleHealth: true,
      },
      {
        name: 'Resting heart rate',
        description: 'Daily resting heart rate with a 7-day trend. A sustained rise above your baseline is an early sign of strain.',
        command: 'uv run egon report-resting-heart-rate',
        appleHealth: true,
      },
      {
        name: 'Heart rate variability',
        description: 'Daily HRV (SDNN) with a 7-day trend — a mirror of stress and recovery.',
        command: 'uv run egon report-hrv',
        appleHealth: true,
      },
      {
        name: 'Sleep',
        description: 'Nightly time asleep with 7 h and 9 h reference lines, and when you fell asleep — the narrower the band, the more regular your bedtime.',
        command: 'uv run egon report-sleep',
        appleHealth: true,
      },
      {
        name: 'Steps',
        description: 'Daily steps with a 7-day trend and a 7,000-step reference line — the range where benefits for mood show up in research.',
        command: 'uv run egon report-step-count',
        appleHealth: true,
      },
      {
        name: 'Exercise',
        description: 'Daily Apple Exercise Time with the WHO guideline of 30 minutes a day, or your own target.',
        command: 'uv run egon report-exercise',
        appleHealth: true,
      },
      {
        name: 'VO₂ max',
        description: 'Cardiorespiratory fitness estimates over time — best read over months.',
        command: 'uv run egon report-vo2max',
        appleHealth: true,
      },
    ],
  },
  {
    section: 'Cross-signal analysis',
    items: [
      {
        name: 'Correlations',
        description: 'How your journal and health signals move together: an interactive heatmap (click a cell to see that pair day by day), the ten strongest pairs, and four pairs with known links to mental health, such as sleep and next-day mood.',
        command: 'uv run egon report-correlations',
        appleHealth: true,
      },
    ],
  },
]

export default function ReportsPage() {
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
          Reports
        </h1>
        <p style={{ ...bodyText, fontSize: '1rem', marginBottom: '1rem' }}>
          Patterns in how you feel are hard to see day to day. Egon reports bring your journal and
          your Apple Health data together over a week, a month, a quarter or a year — mood, stress,
          personality, sleep, activity, and how they relate.
        </p>
        <p style={{ ...bodyText, fontSize: '1rem', marginBottom: '3.5rem' }}>
          Every report is generated on your own device and saved as a single HTML file that works
          offline and never makes a network request. Each chart explains why it matters for your
          wellbeing and how to read it. Use reports for self-reflection, or choose to share one with
          someone you trust — print it or save it as a PDF from your browser.
        </p>

        {/* Example */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={sectionHeading}>See an example</h2>
          <p style={{ ...bodyText, marginBottom: '1rem' }}>
            A full quarterly report for <em>David Osei</em>, a fictional 58-year-old who retired
            early after a heart scare and is finding his feet again. He represents our{' '}
            <em>Self-Directed Individual</em> persona. His journal and health data are synthetic —
            no real person&apos;s data — but the report was made with exactly the same command and
            local models you would use yourself. Hover, zoom, and click around. Its AI health
            summary was written by a small model (qwen2.5:7b) on an older laptop; a newer
            computer can run larger models for more reliable summaries.
          </p>
          <div
            style={{
              border: '1px solid var(--color-border)',
              borderRadius: '6px',
              overflow: 'hidden',
              backgroundColor: 'var(--color-surface)',
            }}
          >
            <iframe
              src={DEMO_REPORT}
              title="Example Egon report with synthetic data"
              loading="lazy"
              style={{ width: '100%', height: '720px', border: 0, display: 'block' }}
            />
          </div>
          <p style={{ ...bodyText, marginTop: '0.75rem' }}>
            <a href={DEMO_REPORT} target="_blank" rel="noopener noreferrer">
              Open the example report in a new tab →
            </a>
          </p>
        </section>

        {/* Generating reports */}
        <section style={section}>
          <h2 style={sectionHeading}>Generating your own reports</h2>
          <p style={{ ...bodyText, marginBottom: '1.25rem' }}>
            Reports are part of the <code>egon-journal</code> CLI. If you haven&apos;t set it up yet,
            start with the <Link href="/journal">Journal</Link> page. Then point it at your Apple
            Health export (optional) in <code>.env</code>:
          </p>
          <div style={codeBlock}>{`EGON_JOURNAL_DIR=/path/to/your/graph/journal
EGON_APPLE_HEALTH_XML=/path/to/apple_health_export/export.xml`}</div>
          <p style={{ ...bodyText, marginTop: '0.75rem', marginBottom: '1.25rem' }}>
            To export from your iPhone: Health app → your profile picture → Export All Health Data,
            then unzip the file. Optional targets (<code>EGON_TARGET_BODY_MASS</code>,{' '}
            <code>EGON_TARGET_RESTING_HEART_RATE</code>, <code>EGON_TARGET_EXERCISE_MINUTES</code>)
            add a personal goal line to the matching charts.
          </p>
          <p style={{ ...bodyText, marginBottom: '0.75rem' }}>
            Generate every chart for a period plus one combined report:
          </p>
          <div style={codeBlock}>{`uv run egon report --for 2026-Q1 --full     # a specific quarter
uv run egon report --period month --full    # the last complete month`}</div>
          <p style={{ ...bodyText, marginTop: '0.75rem', marginBottom: '1.25rem' }}>
            The terminal shows one line per chart and where the combined report was saved
            (<code>reports/full_report/</code> by default — set <code>EGON_REPORTS_DIR</code> in{' '}
            <code>.env</code> to keep reports in another folder). Periods can be weeks (<code>2026-W14</code>), months
            (<code>2026-02</code>), quarters (<code>2026-Q1</code>) or years (<code>2026</code>). Which
            analyses are included is set in <code>egon.toml</code>.
          </p>
          <p style={{ ...bodyText, marginBottom: '1.25rem' }}>
            Every run also writes all journal entries of the period into one Markdown file,{' '}
            <code>reports/journal_entries/2026-Q1.md</code>, with a dated section per entry. Most AI chatbots accept only a few uploaded files, so this is
            the easy way to share a whole period with one. Egon only writes the file to your
            computer; whatever you upload to a chatbot leaves it.
          </p>

          <h3 style={subsectionHeading}>Optional extras</h3>
          <p style={{ ...bodyText, marginBottom: '0.75rem' }}>
            Charts marked below need an optional install. Everything runs locally; models are
            downloaded once on first use.
          </p>
          <div style={codeBlock}>{`uv sync --extra limbic        # language models: stress, emotion, personality …
uv sync --extra topics        # topic discovery (BERTopic)
uv sync --extra local-llm     # AI health summary — also needs the Ollama app running
                              # (larger models give better summaries on newer computers)

# combine them, e.g.
uv sync --extra limbic --extra local-llm`}</div>
          <p style={{ ...bodyText, marginTop: '0.75rem' }}>
            On an Intel Mac, run <code>bash scripts/setup_limbic.sh</code> once instead of the{' '}
            <code>limbic</code> extra.
          </p>
        </section>

        {/* What's in a report */}
        <section style={section}>
          <h2 style={sectionHeading}>What&apos;s in a report</h2>
          <p style={{ ...bodyText, marginBottom: '2rem' }}>
            The full report has four sections. Each chart is also available on its own.
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
                    <h4
                      style={{
                        ...subsectionHeading,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                      }}
                    >
                      {item.name}
                      {item.appleHealth && (
                        <Image
                          src="/images/apple-health.png"
                          alt="Apple Health"
                          title="Reads from an Apple Health export"
                          width={18}
                          height={18}
                          style={{ display: 'inline-block' }}
                        />
                      )}
                    </h4>
                    <p style={{ ...bodyText, marginBottom: '0.75rem' }}>{item.description}</p>
                    {item.command ? (
                      <div style={{ ...codeBlock, marginTop: 0 }}>{item.command}</div>
                    ) : (
                      <p style={{ ...bodyText, fontStyle: 'italic' }}>Included in the full report (<code>--full</code>).</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <p style={bodyText}>
            All report commands accept <code>--period</code> (week, month, quarter, year, all-time)
            and <code>--for</code> (e.g. 2026-02, 2026-W14, 2026-Q1). Health reports also accept{' '}
            <code>--xml</code> to point at an Apple Health export directly.
          </p>
        </section>

        {/* Privacy */}
        <section style={section}>
          <h2 style={sectionHeading}>Private by design</h2>
          <ul style={{ ...bodyText, listStyle: 'disc', paddingLeft: '1.25rem', lineHeight: 1.85 }}>
            <li>Your journal and health data are read from local files and analyzed on your device.</li>
            <li>Reports contain your data and are marked confidential — share them only if you mean to.</li>
            <li>Model scores are estimates from language, not a diagnosis. If something in a report worries you, talk to someone you trust or a professional.</li>
          </ul>
        </section>

      </div>
    </div>
  )
}
