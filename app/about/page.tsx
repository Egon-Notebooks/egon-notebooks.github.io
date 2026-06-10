import Image from 'next/image'
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
          A privacy-first psychological self-knowledge ecosystem, built on an open standard infrastructure for mental health and wellbeing.
          Egon Notebooks provides a trusted repository of mental health resources, journaling support tools, insight generator modules, and locally-run conversational AI interfaces to move self-therapy into the modern era.
          It is not a replacement of therapy or clinical care, but may be used to augment such care.
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
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)', lineHeight: 1.75, flex: '1 1 300px', margin: 0 }}>
              Egon Schiele was an Austrian painter who lived in Vienna around the turn of the 20th century, and was a contemporary of Sigmund Freud.
              He is known for his interior self-portraits.
              Drawings that looked inward without flinching.
              There is something in his posture that feels right for this project: a willingness to sit with the difficult, to give shape to the inner life without prettifying it.
              Egon Notebooks is not named after Schiele&apos;s technique, but after his willingness to look.
            </p>
            <Image
              src="/images/egon-schiele-sketch.webp"
              alt="Pencil sketch illustration of Egon Schiele drawing"
              width={220}
              height={147}
              style={{ borderRadius: '4px', flexShrink: 0, width: '220px', height: 'auto' }}
            />
          </div>
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
            Privacy-first and future-proof
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)', lineHeight: 1.75 }}>
            Some people do not mind sharing all of their most private thoughts with commercial AI companies.
            Others are more hesitant and worry what will happen to their data, especially in the longer term.
            We believe that you should feel completely safe in your self-exploration.
          </p>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)', lineHeight: 1.75, marginTop: '0.875rem' }}>
            This website and the supportive tools enclosed within it only *serve* knowledge.
            It does not receive anything back.
            When you download a pack, the files live on your device — in your personal &ldquo;vault&rdquo; — and Egon Notebooks has no awareness of what you do with them.
            There are no accounts, no sync services, no reading of your notes.
          </p>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)', lineHeight: 1.75, marginTop: '0.875rem' }}>
            This is not a technical limitation — it is a deliberate choice.
            Notes about the inner life should stay inner.
            We use Cloudflare Web Analytics for aggregate traffic counting (no cookies, no fingerprinting, no personal data).
            That is the extent of our data footprint.
          </p>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)', lineHeight: 1.75, marginTop: '0.875rem' }}>
            Your notes are simple Markdown files.
            These are essentially slightly fancier Text file, and are used ubiquitously in modern AI.
            This ensures that you have complete control over your personal journal, and you can take your journal to any future tool of your liking.
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
            The world knowledge graph is objective, curated, open, and portable.
            It is what the Registry offers: structured articles about human psychology — what emotions are, how the stress response works, what attachment styles mean.
            This knowledge does not belong to any individual.
            It is a shared foundation based on humanity&apos;s aggregate wisdom and knowledge.
          </p>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)', lineHeight: 1.75, marginTop: '0.875rem' }}>
            The personal knowledge graph is the opposite: subjective, private, local, yours.
            It is your journal entries, your annotations, your own map of what resonates and what doesn&apos;t.
            This is crucial in mental health care: some of use like to gratitude journal, some are inspired by religion or spirituality, some like to focus on practical habits.
            Egon Notebooks is agnostic to this, and empowers everyone to take ownership of their own wellbeing.
            The personal graph lives on your device and nowhere else.
          </p>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)', lineHeight: 1.75, marginTop: '0.875rem' }}>
            The power of Egon Notebooks comes from their intersection.
            No man is an island, and we all want to stand of the shoulders of giants.
            When you download a pack and open it in Obsidian or Logseq, you are selectively adding a piece of the world knowledge graph into your personal one.
            You can annotate it, link it to your own notes, and make it yours — while the underlying structure holds.
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
            In later phases, this means locally-hosted language models for private AI-assisted reflection, integration with digital phenotyping data (sleep, movement, mood patterns), and affective computing APIs for deeper insights.
            None of these touch a server you don&apos;t control.
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
            In fact, Egon Notebooks can be a natural complement to therapy, by making self-reflection more engaging, by generating reports to share with your therapist, or by tracking your wellbeing and realizing when it&apos;s time to go back to therapy.
          </p>
        </section>
      </div>
    </div>
  )
}
