import Image from 'next/image'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Egon Notebooks',
  description:
    'A private journal in plain files, with a library of psychology to read alongside it. Everything stays on your own computer.',
}

// Everyday ways in (principle 9): what people notice, not clinical terms.
const NOTICES = [
  {
    question: 'Not sleeping well?',
    body: 'How sleep and mood pull on each other, and small changes that tend to help.',
    pack: 'self-care-foundations',
  },
  {
    question: "Can't stop worrying?",
    body: 'What anxiety does in your body, and ways to calm it down.',
    pack: 'anxiety-and-worry',
  },
  {
    question: 'Feeling flat or low?',
    body: 'Why everything feels harder, and how to start again with very small steps.',
    pack: 'low-mood-and-depression',
  },
  {
    question: 'Running on empty?',
    body: 'The signs of burnout, and what recovery usually looks like.',
    pack: 'stress-and-burnout',
  },
  {
    question: 'Missing someone?',
    body: 'Grief in its many forms, including the losses nobody talks about.',
    pack: 'grief-and-loss',
  },
  {
    question: 'Being hard on yourself?',
    body: "Perfectionism, comparison and the voice that says you're not enough.",
    pack: 'identity-and-self-worth',
  },
]

const STEPS = [
  {
    title: 'Write',
    body: "Sometimes you just need somewhere to put the day. Open a daily note in Obsidian or Logseq and write whatever is on your mind. It doesn't have to be good, and nobody else will read it.",
  },
  {
    title: 'Read',
    body: 'When something keeps coming up, like a bad run of sleep or a short temper, there is usually a name for it and some ideas that help. Add short articles about it to the same notes app, next to what you wrote.',
  },
  {
    title: 'Look back',
    body: 'After a few weeks there is enough to look back on. If you like, a private report shows how your mood, stress and sleep have moved, using your entries and your Apple Health data.',
  },
]

const PRINCIPLES = [
  {
    title: 'Private',
    body: 'No account, no sync and no copy of your notes on our side. This website sends knowledge out and never receives anything back.',
  },
  {
    title: 'Plain files',
    body: 'Everything is a Markdown file that opens in any text editor, today or in twenty years.',
  },
  {
    title: 'Open source',
    body: 'The code is MIT licensed and on GitHub, and the file format is documented, so anyone can build a tool that reads it.',
  },
  {
    title: 'Honest about AI',
    body: 'The articles were written by AI and have not yet been reviewed by a mental health professional. Each one says so.',
  },
]

const h2: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
  fontWeight: 600,
  color: 'var(--color-ink)',
  marginBottom: '0.75rem',
}

const lede: React.CSSProperties = {
  fontSize: '1rem',
  color: 'var(--color-ink-muted)',
  lineHeight: 1.7,
  maxWidth: '640px',
  marginBottom: '2.5rem',
}

const h3: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: '1.2rem',
  fontWeight: 600,
  color: 'var(--color-ink)',
  marginBottom: '0.4rem',
}

const small: React.CSSProperties = {
  fontSize: '0.875rem',
  color: 'var(--color-ink-muted)',
  lineHeight: 1.65,
  margin: 0,
}

const band: React.CSSProperties = {
  paddingBlock: '4.5rem',
  borderTop: '1px solid var(--color-border)',
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingBlock: '5rem 4.5rem' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '3rem', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 380px', minWidth: 0 }}>
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
                Structured knowledge<br />about your inner life.
              </h1>
              <p style={{ ...lede, fontSize: '1.08rem', maxWidth: '520px', marginBottom: '2rem' }}>
                Egon Notebooks is a private journal in plain files, with a library of psychology to
                read alongside it. Write a little each day and read about what you notice. Over
                time, your notes show you how you have been. Everything stays on your own computer.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link href="/getting-started" className="btn-primary" style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}>
                  Get started
                </Link>
                <Link href="/registry" className="btn-secondary" style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}>
                  Browse the registry
                </Link>
              </div>
            </div>
            <Image
              src="/images/notebook-for-journaling.webp"
              alt="A notebook open for journaling"
              width={340}
              height={227}
              priority
              style={{ borderRadius: '6px', width: '100%', maxWidth: '340px', height: 'auto' }}
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={band}>
        <div className="container">
          <h2 style={h2}>How it works</h2>
          <p style={lede}>
            You don&apos;t need a plan or a method. Most people start by writing a few lines and
            add the rest when they feel like it.
          </p>
          <ol
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {STEPS.map((step, i) => (
              <li key={step.title}>
                <p
                  aria-hidden="true"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.95rem',
                    color: 'var(--color-accent)',
                    marginBottom: '0.35rem',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 style={h3}>{step.title}</h3>
                <p style={small}>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Start from what you notice */}
      <section style={{ ...band, backgroundColor: 'var(--color-surface)' }}>
        <div className="container">
          <h2 style={h2}>Start from what you notice</h2>
          <p style={lede}>
            Most of us don&apos;t start with a diagnosis. We start with a feeling that something
            is off. Pick the one that sounds like you and see what has been written about it.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1px',
              backgroundColor: 'var(--color-border)',
              border: '1px solid var(--color-border)',
              borderRadius: '4px',
              overflow: 'hidden',
            }}
          >
            {NOTICES.map(n => (
              <Link
                key={n.pack}
                href={`/registry#${n.pack}`}
                className="notice-card"
                style={{ display: 'block', backgroundColor: 'var(--color-base)', padding: '1.5rem' }}
              >
                <h3 style={h3}>{n.question}</h3>
                <p style={{ ...small, marginBottom: '0.75rem' }}>{n.body}</p>
                <span style={{ fontSize: '0.82rem', color: 'var(--color-accent)' }}>Read about it →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Local AI */}
      <section style={band}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          <div>
            <h2 style={h2}>The AI stays on your computer</h2>
            <p style={{ ...small, fontSize: '0.95rem', marginBottom: '1rem' }}>
              Reports use language models to estimate things like stress and mood in your writing,
              and to draft a short summary of your month. The models are open and run on your own
              machine, so your words are never sent anywhere. If you skip them, everything else
              still works.
            </p>
            <p style={{ ...small, fontSize: '0.95rem', marginBottom: '1.25rem' }}>
              Before each release, the models are tested against a set of difficult, made-up
              entries, and a person reads every answer.
            </p>
            <Link href="/reports" style={{ fontSize: '0.875rem', color: 'var(--color-accent)' }}>
              See an example report →
            </Link>
          </div>
          <div>
            <h2 style={h2}>Why not just ask ChatGPT or Claude?</h2>
            <p style={{ ...small, fontSize: '0.95rem', marginBottom: '1rem' }}>
              You can, as long as you treat it as a sparring partner rather than a counselor.
              Talking a day through with a chatbot is a good way to journal out loud. But a single
              conversation rarely changes much, and what you said ends up on a company&apos;s
              servers instead of in a record you keep.
            </p>
            <p style={{ ...small, fontSize: '0.95rem', marginBottom: '1rem' }}>
              Egon builds that record: your entries and what you read, linked together in files
              you own, with reports on how your mood and sleep have moved. Change over months
              shows up there, not in one chat. Egon can also gather your entries into one file to
              take to a chatbot, if you decide to.
            </p>
            <p style={{ ...small, fontSize: '0.95rem', marginBottom: '1.25rem' }}>
              Both are for everyday ups and downs. If things feel severe, please talk to a
              professional.
            </p>
            <Link href="/chat" style={{ fontSize: '0.875rem', color: 'var(--color-accent)' }}>
              Local or cloud: the trade-off →
            </Link>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section style={band}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: '2rem',
            }}
          >
            {PRINCIPLES.map(p => (
              <div key={p.title}>
                <h3 style={{ ...h3, fontSize: '1.1rem' }}>{p.title}</h3>
                <p style={small}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
