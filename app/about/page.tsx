import Image from 'next/image'
import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata({
  title: 'About',
  description:
    'Why Egon Notebooks exists: a private, open place to understand yourself, with a library of psychology and tools that run on your own computer.',
  path: '/about',
})

const h2: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: '1.55rem',
  fontWeight: 600,
  color: 'var(--color-ink)',
  marginBottom: '0.875rem',
}

const p: React.CSSProperties = {
  fontSize: '0.95rem',
  color: 'var(--color-ink-muted)',
  lineHeight: 1.75,
  marginBottom: '1rem',
}

const section: React.CSSProperties = {
  marginBottom: '2.75rem',
  paddingTop: '2rem',
  borderTop: '1px solid var(--color-border)',
}

export default function AboutPage() {
  return (
    <div style={{ paddingBlock: '3rem 5rem' }}>
      <div className="container" style={{ maxWidth: '680px' }}>
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
          About
        </h1>
        <p style={{ ...p, fontSize: '1.05rem', marginBottom: '3rem' }}>
          Egon Notebooks is an open, private place to understand yourself: a library of
          psychology, tools for journaling, and reports that run on your own computer. We think
          of it as a way to bring self-therapy into the modern era. It does not replace therapy or
          clinical care, and it works well alongside them.
        </p>

        <section style={{ marginBottom: '2.75rem' }}>
          <h2 style={h2}>The name</h2>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <p style={{ ...p, flex: '1 1 300px', margin: 0 }}>
              Egon Schiele was an Austrian painter who worked in Vienna around 1910, at the same
              time as Sigmund Freud. He is known for his self-portraits: drawings that looked
              inward without flinching. He was willing to sit with what is difficult and give the
              inner life a shape without prettifying it. Egon Notebooks is named after that
              willingness to look, not after his technique.
            </p>
            <Image
              src="/images/egon-schiele-sketch.webp"
              alt="Pencil sketch illustration of Egon Schiele drawing"
              width={220}
              height={147}
              style={{ borderRadius: '4px', flexShrink: 0, width: '220px', maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </section>

        <section style={section}>
          <h2 style={h2}>Private, and built to last</h2>
          <p style={p}>
            Some people are happy to share their most private thoughts with an AI company. Others
            worry about what happens to that data, especially over years. You should be able to
            explore your inner life without having to trust anyone with it.
          </p>
          <p style={p}>
            This website only sends knowledge out. When you download a pack, the files live on
            your computer and we have no idea what you do with them. There are no accounts, no
            sync and no copy of your notes anywhere but on your own device. That is a choice, not a
            technical limit: notes about the inner life should stay inner. The site is served
            through Cloudflare, which keeps aggregate traffic counts. There are no cookies and no
            tracking scripts.
          </p>
          <p style={p}>
            Your notes are Markdown files, which are plain text with a little formatting. Almost
            every tool can read them, including today&apos;s AI models, so you can take your journal
            to whatever comes next.
          </p>
        </section>

        <section style={section}>
          <h2 style={h2}>Two graphs</h2>
          <p style={p}>
            At the heart of the project are two graphs. The <em>world knowledge graph</em> is shared
            and open: articles about how emotions work, what the stress response does and what
            attachment styles mean. It is what the <Link href="/registry">registry</Link> offers,
            and it belongs to no one in particular.
          </p>
          <p style={p}>
            The <em>personal knowledge graph</em> is yours: your entries, your notes, your own map
            of what rings true. What helps is different for everyone. Some people keep a gratitude
            list, some draw on faith, some focus on habits. Egon doesn&apos;t choose for you.
          </p>
          <p style={p}>
            The interesting part is where the two meet. When you add a pack to your notes app, you
            bring a piece of shared knowledge into your private graph, where you can annotate it
            and link it to your own days.
          </p>
        </section>

        <section style={section}>
          <h2 style={h2}>Where it is going</h2>
          <p style={p}>
            Egon is early, and some of it still needs a terminal. Over time we want it to be
            simple enough for anyone who takes their inner life seriously: private reflection with
            AI on your own machine, sleep and movement data next to your writing, and clearer ways
            to see how you are doing. None of it will need a server you don&apos;t control.
          </p>
        </section>

        <section style={section}>
          <h2 style={h2}>Who wrote the articles</h2>
          <p style={p}>
            The articles in the registry were written by Claude (Anthropic) and have not yet been
            reviewed by a mental health professional. Every article says so. We think that is the
            least you should expect from writing about mental health.
          </p>
          <p style={p}>
            They are for education, and not a substitute for professional advice, diagnosis or
            treatment. If you are struggling, please reach out to a professional. If you are in
            crisis, you can find a helpline in your country at{' '}
            <a href="https://findahelpline.com" target="_blank" rel="noopener noreferrer">findahelpline.com</a>.
          </p>
        </section>

        <section style={section}>
          <h2 style={h2}>What we are not</h2>
          <p style={p}>
            Egon Notebooks is not a subscription or an app that holds your data. Every pack is a
            folder of plain text files that will open in any text editor, for as long as text
            editors exist.
          </p>
          <p style={p}>
            It is not therapy either, but it can sit well next to it. It can make it easier to
            reflect between sessions, give you a report to bring to your therapist, or help you
            notice when it might be time to go back.
          </p>
        </section>
      </div>
    </div>
  )
}
