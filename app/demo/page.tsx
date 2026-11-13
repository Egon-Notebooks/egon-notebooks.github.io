import Image from 'next/image'
import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata({
  title: 'Demo',
  description:
    'Four made-up people who use Egon Notebooks in different ways, each with a report made from three months of their synthetic journal and health data.',
  path: '/demo',
})

type Persona = {
  slug: string
  name: string
  line: string
  story: string
  use: string
  reports: { label: string; href: string }[]
}

// Synthetic personas from egon-content (docs/USER_PERSONAS.md). Their reports cover 2025-Q1.
const PERSONAS: Persona[] = [
  {
    slug: 'david-osei',
    name: 'David Osei, 58',
    line: 'Retired hospital administrator · Manchester',
    story:
      "David retired early after a heart scare. The house is quiet now, and he isn't sure what to do with his days. He isn't in therapy and wouldn't call himself unwell, just a bit lost.",
    use: 'He writes most mornings, reads about loneliness and finding purpose, and every few months looks at his report to see whether the walks, the garden and the volunteering are making a difference.',
    reports: [{ label: "David's report", href: '/demo/report-david-osei-2025-Q1.html' }],
  },
  {
    slug: 'marcus-webb',
    name: 'Marcus Webb, 45',
    line: 'High school history teacher · Columbus, Ohio',
    story:
      'Marcus is going through a divorce and sees a therapist every two weeks. The evenings after his kids go back to their mother are the hardest part of the week.',
    use: "He writes on those evenings. Before a session he makes the shorter report to share, so he doesn't have to piece the last few weeks together from memory.",
    reports: [
      { label: "Marcus's report", href: '/demo/report-marcus-webb-2025-Q1.html' },
      { label: 'His report to share', href: '/demo/report-marcus-webb-2025-Q1-share.html' },
    ],
  },
  {
    slug: 'priya-sharma',
    name: 'Priya Sharma, 26',
    line: 'Neuroscience PhD student · London',
    story:
      'Priya likes systems. Her notes are full of links, lists and papers, and lately of a model that won’t work and a supervisor she wants to impress.',
    use: 'She keeps the packs on perfectionism and impostor syndrome next to her entries, and reads her report the way she reads her data, looking for what moves together.',
    reports: [{ label: "Priya's report", href: '/demo/report-priya-sharma-2025-Q1.html' }],
  },
  {
    slug: 'lena-fischer',
    name: 'Lena Fischer, 29',
    line: 'UX designer · Amsterdam',
    story:
      'Lena moved from Munich for a new job and finds groups hard. She misses her friends, and her partner is still in Germany.',
    use: 'Writing is part of her mindfulness practice, often only a few lines a day. Her report shows how her mood follows her sleep and her week, which helps on the days the anxiety comes back.',
    reports: [{ label: "Lena's report", href: '/demo/report-lena-fischer-2025-Q1.html' }],
  },
]

const body: React.CSSProperties = {
  fontSize: '0.92rem',
  color: 'var(--color-ink-muted)',
  lineHeight: 1.7,
  margin: '0 0 0.75rem',
}

export default function DemoPage() {
  return (
    <div style={{ paddingBlock: '3rem 5rem' }}>
      <div className="container">
        <div style={{ maxWidth: '680px', marginBottom: '3rem' }}>
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
            Four people, four ways in
          </h1>
          <p style={{ ...body, fontSize: '1.02rem' }}>
            It is easier to understand Egon by seeing it used. These four people are made up, and
            so are their journals and health data, but their reports were made with the same
            command you would use. Each covers January to March 2025.
          </p>
          <p style={{ ...body, fontSize: '1.02rem' }}>
            Reports open in a new tab. Hover over the charts and click around. The journal summary
            at the top of each was written by a cloud model from the synthetic entries, to show a
            best case. In your own reports, a model on your computer writes it.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: '2rem' }}>
          {PERSONAS.map(p => (
            <article
              key={p.slug}
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Image
                src={`/images/personas/${p.slug}.webp`}
                alt={`Pencil sketch of ${p.name.split(',')[0]}, a fictional persona`}
                width={640}
                height={640}
                style={{ width: '100%', height: 'auto', aspectRatio: '1 / 1', objectFit: 'cover', borderBottom: '1px solid var(--color-border)' }}
              />
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-ink)', margin: 0 }}>
                  {p.name}
                </h2>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-accent)', margin: '0.25rem 0 1rem' }}>{p.line}</p>
                <p style={body}>{p.story}</p>
                <p style={{ ...body, marginBottom: '1.25rem' }}>{p.use}</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: 'auto' }}>
                  {p.reports.map((r, i) => (
                    <a
                      key={r.href}
                      href={r.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={i === 0 ? 'btn-primary' : 'btn-secondary'}
                      style={{ fontSize: '0.82rem' }}
                    >
                      {r.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p style={{ ...body, marginTop: '3rem', maxWidth: '680px' }}>
          Ready to try it yourself? <Link href="/getting-started">Getting started</Link> takes a
          few minutes.
        </p>
      </div>
    </div>
  )
}
