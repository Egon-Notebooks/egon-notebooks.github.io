import Image from 'next/image'
import type { Metadata } from 'next'
import Link from 'next/link'
import DemoVideo from '@/components/DemoVideo'
import Ink from '@/components/Ink'
import JournalPage from '@/components/JournalPage'

export const metadata: Metadata = {
  title: 'Egon Notebooks',
  description:
    'A private journal in plain and portable files, with an integrated library of psychology. Everything stays on your own computer.',
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
    video: 'write',
    description: 'A handwritten journal entry appears on a ruled page, line by line.',
    body: "Sometimes you just need somewhere to put the day. Open a daily note in Obsidian or Logseq and write whatever is on your mind. It doesn't have to be good, and nobody else will read it. Over time, Egon can gently support and guide you in your writing.",
  },
  {
    title: 'Read',
    video: 'graph',
    description: 'Journal entries from three days in March link to articles about sleep, low mood, mindfulness and loneliness, and a new article joins the graph.',
    body: 'When something keeps coming up, like a bad run of sleep or a short temper, there is usually a name for it and some ideas that help. Egon curates short articles about it that you can add to the same notes app, right next to what you wrote.',
  },
  {
    title: 'Look back',
    video: 'report',
    description: 'A report command runs, and a chart of the tone of three months of writing draws itself in.',
    body: 'After a few weeks there is enough to look back on. If you like, a private report shows how your mood, stress and sleep have moved, using your entries and your Apple Health data. Egon can also create custom reports you can share with your therapist.',
  },
]

const PRINCIPLES = [
  {
    title: 'Private',
    body: 'No account, no sync and no copy of your notes on our side. This website sends knowledge out and never receives anything back.',
  },
  {
    title: 'Plain files',
    body: (
      <>
        Everything is a Markdown file that opens in any text editor, today or{' '}
        <a href="https://stephango.com/file-over-app" target="_blank" rel="noopener noreferrer">
          in twenty years
        </a>
        .
      </>
    ),
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

const ROMAN = ['I', 'II', 'III', 'IV', 'V']

const display: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontWeight: 400,
  letterSpacing: '-0.015em',
  color: 'var(--color-ink)',
}

const h2: React.CSSProperties = {
  ...display,
  fontSize: 'clamp(2rem, 4.2vw, 3.2rem)',
  lineHeight: 1.05,
  margin: '0 0 1rem',
}

const lede: React.CSSProperties = {
  fontSize: '1.02rem',
  color: 'var(--color-ink-muted)',
  lineHeight: 1.75,
  maxWidth: '34rem',
  margin: 0,
}

const small: React.CSSProperties = {
  fontSize: '0.92rem',
  color: 'var(--color-ink-muted)',
  lineHeight: 1.7,
  margin: 0,
}

/** A section with its roman numeral and label in the margin, like a chapter in a notebook. */
function Chapter({ n, label, children, tint = false }: { n: number; label: string; children: React.ReactNode; tint?: boolean }) {
  return (
    <section
      className="reveal"
      style={{
        paddingBlock: '6rem',
        borderTop: '1px solid var(--color-border)',
        backgroundColor: tint ? 'rgba(255,255,255,0.45)' : undefined,
      }}
    >
      <div className="container">
        <p className="eyebrow" style={{ display: 'flex', gap: '0.9rem', alignItems: 'baseline', margin: '0 0 2.5rem' }}>
          <span className="numeral" style={{ fontSize: '1.35rem', letterSpacing: 0, textTransform: 'none' }}>{ROMAN[n - 1]}.</span>
          {label}
        </p>
        {children}
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingBlock: 'clamp(4rem, 9vw, 7.5rem) 5rem' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: '3rem', alignItems: 'end' }}>
          <div>
            <p className="eyebrow" style={{ margin: '0 0 1.75rem' }}>A private notebook · plain files · thoughtful AI</p>
            <h1 style={{ ...display, fontSize: 'clamp(3rem, 7.2vw, 6.2rem)', lineHeight: 0.98, letterSpacing: '-0.025em', margin: '0 0 2rem' }}>
              Structured knowledge about your{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--color-accent)', fontWeight: 400 }}>
                <Ink>inner life.</Ink>
              </em>
            </h1>
            <p style={{ ...lede, fontSize: '1.08rem', marginBottom: '2.25rem' }}>
              Egon Notebooks is a private journal in plain and portable files, with an integrated
              library of psychology. Write a little each day and read about what you notice. Over
              time, your notes show you how you have been, and where you can go. Everything stays
              on your own computer.
            </p>
            <div style={{ display: 'flex', gap: '1.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <Link href="/getting-started" className="btn-primary" style={{ fontSize: '0.9rem', padding: '0.8rem 1.6rem' }}>
                Get started
              </Link>
              <Link href="/demo" className="link-draw" style={{ fontSize: '0.95rem' }}>
                See four people use it →
              </Link>
            </div>
          </div>
          <figure style={{ margin: 0, justifySelf: 'center' }}>
            <Image
              src="/images/notebook-hero.webp"
              alt="A pencil sketch of an open notebook with a fountain pen"
              width={1100}
              height={733}
              priority
              style={{ width: '100%', maxWidth: '520px', height: 'auto', transform: 'rotate(-2deg)' }}
            />
            <figcaption style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1rem', color: 'var(--color-ink-muted)', textAlign: 'right', marginTop: '0.5rem' }}>
              Fig. 1, a notebook, waiting.
            </figcaption>
          </figure>
        </div>
      </section>

      <Chapter n={1} label="How it works">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: '2rem 4rem', alignItems: 'end', marginBottom: '3.5rem' }}>
          <h2 style={{ ...h2, margin: 0 }}>You don&apos;t need a plan, or a method.</h2>
          <p style={lede}>
            Most people start by writing a few lines and add the rest when they feel like it. The
            most important thing is to start.
          </p>
        </div>
        <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '4.5rem' }}>
          {STEPS.map((step, i) => (
            <li key={step.title} className="step-row">
              <div className="step-video">
                <DemoVideo name={step.video} description={step.description} />
              </div>
              <div style={{ borderTop: '1px solid var(--color-ink)', paddingTop: '1.25rem' }}>
                <p className="numeral" style={{ fontSize: '3.2rem', lineHeight: 1, margin: '0 0 0.75rem' }}>{i + 1}</p>
                <h3 style={{ ...display, fontSize: '1.9rem', fontWeight: 500, margin: '0 0 0.6rem' }}>{step.title}</h3>
                <p style={small}>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Chapter>

      <Chapter n={2} label="What it looks like" tint>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: '2rem 4rem', alignItems: 'end', marginBottom: '3.5rem' }}>
          <h2 style={{ ...h2, margin: 0 }}>
            A few lines on a Sunday. <em style={{ fontStyle: 'italic' }}>Three months, at a glance.</em>
          </h2>
          <p style={lede}>
            Lena, one of our made-up demo people, writes a little most days. At the end of the
            quarter her report shows how the tone of her writing moved, along with her sleep,
            daylight and more.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))', gap: '3.5rem', alignItems: 'center' }}>
          <JournalPage
            date="Sunday, 16 March"
            lines={[
              'Sundays are still difficult, but today was one of the better ones.',
              'I made a real breakfast and watched it rain without trying to be productive.',
              'There were snowdrops in the park last week. The days are getting longer, just barely, but I notice.',
            ]}
            signature="From Lena's journal. Lena and her entries are made up."
          />
          <figure style={{ margin: 0 }}>
            <Image
              src="/images/demo-tone-chart.webp"
              alt="A chart from Lena's report: the tone of her writing from January to March, mostly positive with a few low days"
              width={1100}
              height={506}
              style={{ width: '100%', height: 'auto', border: '1px solid var(--color-border)', borderRadius: '4px', boxShadow: '0 18px 40px -26px rgba(28,25,23,0.4)' }}
            />
            <figcaption style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', alignItems: 'baseline', marginTop: '1rem', flexWrap: 'wrap' }}>
              <span className="hand" style={{ fontSize: '1.15rem', color: 'var(--color-accent)' }}>her quarter, in one chart</span>
              <Link href="/demo" className="link-draw" style={{ fontSize: '0.92rem' }}>Open her full report →</Link>
            </figcaption>
          </figure>
        </div>
      </Chapter>

      <Chapter n={3} label="Start from what you notice">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: '2rem 4rem', alignItems: 'end', marginBottom: '3rem' }}>
          <h2 style={{ ...h2, margin: 0 }}>Most of us don&apos;t start with a diagnosis.</h2>
          <p style={lede}>
            We start with a feeling that something is off. Pick the one that sounds like you and
            see what has been written about it.
          </p>
        </div>
        <nav aria-label="Everyday entry points">
          {NOTICES.map((n, i) => (
            <Link key={n.pack} href={`/registry#${n.pack}`} className="index-row">
              <span className="numeral" style={{ fontSize: '1.1rem' }}>{String(i + 1).padStart(2, '0')}</span>
              <span className="index-q">{n.question}</span>
              <span className="index-body" style={small}>{n.body}</span>
              <span className="index-arrow" aria-hidden="true">→</span>
            </Link>
          ))}
        </nav>
      </Chapter>

      <Chapter n={4} label="Privacy and AI" tint>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: '4rem' }}>
          <div>
            <h2 style={{ ...h2, fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)' }}>The AI stays on your computer.</h2>
            <p style={{ ...small, marginBottom: '1rem' }}>
              Reports use language models to estimate things like stress and mood in your writing,
              and to draft a short summary of your month. The models are open and run on your own
              machine, so your words are never sent anywhere. If you skip them, everything else
              still works.
            </p>
            <p style={{ ...small, marginBottom: '1.5rem' }}>
              Before each release, the models are tested against a set of difficult, made-up
              entries, and a person reads every answer.
            </p>
            <Link href="/reports" className="link-draw" style={{ fontSize: '0.92rem' }}>See an example report →</Link>
          </div>
          <div>
            <h2 style={{ ...h2, fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)' }}>Why not just ask ChatGPT or Claude?</h2>
            <p style={{ ...small, marginBottom: '1rem' }}>
              You can, as long as you treat it as a sparring partner rather than a counselor.
              Talking a day through with a chatbot is a good way to journal out loud. But a single
              conversation rarely changes much, and what you said ends up on a company&apos;s
              servers instead of in a record you keep.
            </p>
            <p style={{ ...small, marginBottom: '1rem' }}>
              Egon builds that record: your entries and what you read, linked together in files
              you own, with reports on how your mood and sleep have moved. Change over months
              shows up there, not in one chat. Egon can also gather your entries into one file to
              take to a chatbot, if you decide to.
            </p>
            <p style={{ ...small, marginBottom: '1.5rem' }}>
              Both are for everyday ups and downs. If things feel severe, please talk to a
              professional.
            </p>
            <Link href="/chat" className="link-draw" style={{ fontSize: '0.92rem' }}>Local or cloud: the trade-off →</Link>
          </div>
        </div>
      </Chapter>

      <Chapter n={5} label="What we hold to">
        <dl style={{ margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '2.5rem 2.5rem' }}>
          {PRINCIPLES.map(p => (
            <div key={p.title} style={{ borderTop: '1px solid var(--color-ink)', paddingTop: '1rem' }}>
              <dt style={{ ...display, fontSize: '1.5rem', fontWeight: 500, fontStyle: 'italic', marginBottom: '0.5rem' }}>{p.title}</dt>
              <dd style={{ ...small, margin: 0 }}>{p.body}</dd>
            </div>
          ))}
        </dl>
      </Chapter>
    </>
  )
}
