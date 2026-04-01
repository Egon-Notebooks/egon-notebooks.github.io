import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata({
  title: 'About',
  description: 'The philosophy behind Egon Notebooks — privacy-first psychological knowledge infrastructure for Obsidian and Logseq.',
  path: '/about',
})

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
        <p
          style={{
            fontSize: '1rem',
            color: 'var(--color-ink-muted)',
            lineHeight: 1.7,
            marginBottom: '3rem',
          }}
        >
          A privacy-first psychological knowledge infrastructure, built for your own vault.
        </p>

        <section style={{ marginBottom: '2.75rem' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.55rem',
              fontWeight: 600,
              color: 'var(--color-ink)',
              marginBottom: '0.875rem',
            }}
          >
            The name
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)', lineHeight: 1.75 }}>
            Egon Schiele was an Austrian painter known for his unflinching, interior self-portraits — drawings
            that looked inward without flinching. There is something in his posture that feels right for this
            project: a willingness to sit with the difficult, to give shape to the inner life without prettifying
            it. Egon Notebooks is not named after Schiele&apos;s technique, but after his willingness to look.
          </p>
        </section>

        <section style={{ marginBottom: '2.75rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.55rem',
              fontWeight: 600,
              color: 'var(--color-ink)',
              marginBottom: '0.875rem',
            }}
          >
            Privacy-first
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)', lineHeight: 1.75 }}>
            This website serves knowledge. It does not receive anything back. When you download a pack,
            the files live on your device — in your vault — and this website has no awareness of what
            you do with them. There are no accounts, no sync services, no reading of your notes.
          </p>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)', lineHeight: 1.75, marginTop: '0.875rem' }}>
            This is not a technical limitation — it is a deliberate choice. Notes about the inner life
            should stay inner. We use Cloudflare Web Analytics for aggregate traffic counting (no cookies,
            no fingerprinting, no personal data). That is the extent of our data footprint.
          </p>
        </section>

        <section style={{ marginBottom: '2.75rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.55rem',
              fontWeight: 600,
              color: 'var(--color-ink)',
              marginBottom: '0.875rem',
            }}
          >
            Two graphs
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)', lineHeight: 1.75 }}>
            There is a distinction at the heart of this project: the <em>world knowledge graph</em> and
            the <em>personal knowledge graph</em>.
          </p>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)', lineHeight: 1.75, marginTop: '0.875rem' }}>
            The world knowledge graph is objective, curated, open, and portable. It is what the Registry
            offers: structured articles about human psychology — what emotions are, how the stress
            response works, what attachment styles mean. This knowledge does not belong to any individual.
            It is a shared foundation based on humanity's aggregate wisdom and knowledge.
          </p>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)', lineHeight: 1.75, marginTop: '0.875rem' }}>
            The personal knowledge graph is the opposite: subjective, private, local, yours. It is your
            journal entries, your annotations, your own map of what resonates and what doesn&apos;t. It lives
            on your device and nowhere else.
          </p>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)', lineHeight: 1.75, marginTop: '0.875rem' }}>
            The power of Egon Notebooks comes from their intersection. When you download a pack and
            open it in Obsidian or Logseq, you are adding the world knowledge graph into your personal
            one. You can annotate it, link it to your own notes, and make it yours — while the
            underlying structure holds.
          </p>
        </section>

        <section style={{ marginBottom: '2.75rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.55rem',
              fontWeight: 600,
              color: 'var(--color-ink)',
              marginBottom: '0.875rem',
            }}
          >
            The longer vision
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)', lineHeight: 1.75 }}>
            The Registry at launch is the beginning of something larger: a self-therapy and psychological
            insight platform that is locally-hosted, private, and progressively accessible to the general
            population.
          </p>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)', lineHeight: 1.75, marginTop: '0.875rem' }}>
            In later phases, this means locally-hosted language models for private AI-assisted reflection,
            integration with digital phenotyping data (sleep, movement, mood patterns), and optional
            affective computing APIs for deeper insights. None of these touch a server you don&apos;t control.
          </p>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)', lineHeight: 1.75, marginTop: '0.875rem' }}>
            Initially, this will require technical comfort — running a local model takes setup. Early adopters will 
            have a bit of a learning curve. But the intention is to simplify the experience until it is accessible 
            to anyone who wants to take their inner life seriously.
          </p>
        </section>

        <section style={{ marginBottom: '2.75rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.55rem',
              fontWeight: 600,
              color: 'var(--color-ink)',
              marginBottom: '0.875rem',
            }}
          >
            AI authorship
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)', lineHeight: 1.75 }}>
            The node content in the Registry is generated by Claude (Anthropic) and not yet reviewed by a mental
            health professional before publication. This is disclosed in every node file and we consider
            it a baseline ethical requirement for publishing mental health content.
          </p>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)', lineHeight: 1.75, marginTop: '0.875rem' }}>
            The content is intended for educational purposes only. It is not a substitute for professional
            mental health advice, diagnosis, or treatment. If you are struggling, please reach out to a
            trained professional or a crisis service in your country. Visit{' '}
            <a href="https://findahelpline.com" target="_blank" rel="noopener noreferrer">findahelpline.com</a>.
          </p>
        </section>

        <section style={{ paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.55rem',
              fontWeight: 600,
              color: 'var(--color-ink)',
              marginBottom: '0.875rem',
            }}
          >
            What we are not
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)', lineHeight: 1.75 }}>
            Egon Notebooks is not a SaaS product. There is no subscription, no account, no server
            that holds your data. It is not a walled garden — every pack you download is a folder of
            plain text files that will open in any text editor, forever.
          </p>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)', lineHeight: 1.75, marginTop: '0.875rem' }}>
            It is not a replacement for therapy. It is a starting point: a structured vocabulary for
            the inner life, offered freely, to anyone who wants it.
          </p>
        </section>
      </div>
    </div>
  )
}
