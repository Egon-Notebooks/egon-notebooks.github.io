import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'
import ChatModeTabs from '@/components/ChatModeTabs'

export const metadata: Metadata = buildMetadata({
  title: 'Chat',
  description:
    'Talk a day or a thought through with AI, then keep a short summary as a journal entry. Planned for Egon Notebooks: run it on your own computer, or knowingly share with a cloud chatbot.',
  path: '/chat',
})

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

const list: React.CSSProperties = {
  ...bodyText,
  listStyle: 'disc',
  paddingLeft: '1.25rem',
  lineHeight: 1.85,
  margin: 0,
}

function ProsCons({ pros, cons }: { pros: string[]; cons: string[] }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginTop: '1.25rem' }}>
      <div style={card}>
        <h4 style={subsectionHeading}>What you gain</h4>
        <ul style={list}>{pros.map(p => <li key={p}>{p}</li>)}</ul>
      </div>
      <div style={card}>
        <h4 style={subsectionHeading}>What you give up</h4>
        <ul style={list}>{cons.map(c => <li key={c}>{c}</li>)}</ul>
      </div>
    </div>
  )
}

const localPanel = (
  <>
    <h3 style={subsectionHeading}>On your own computer</h3>
    <p style={{ ...bodyText, marginBottom: '0.75rem' }}>
      A language model runs on your own machine through{' '}
      <a href="https://ollama.com" target="_blank" rel="noopener noreferrer">Ollama</a>, the same
      setup that already writes the AI health summary in <Link href="/reports">reports</Link>. Rather
      than build a chat app from scratch, Egon will build on an existing local chat tool and add what
      is missing: a setup guide, a careful system prompt, the link to your graph and the summary at
      the end. The conversation never leaves your computer, and it works offline.
    </p>
    <ProsCons
      pros={[
        'Nothing you say leaves your machine: no account, no provider, no terms of service.',
        'Works offline and costs nothing to run.',
        'Your graph can be read in full, because there is no one to share it with.',
      ]}
      cons={[
        'Needs a reasonably recent computer; around 16 GB of memory is a practical minimum for a useful model.',
        'Local models are smaller than the best cloud models: replies can be slower, flatter or lose the thread in a long conversation.',
        'Some setup: installing Ollama and downloading a model of a few gigabytes.',
      ]}
    />
  </>
)

const cloudPanel = (
  <>
    <div
      role="note"
      style={{
        ...card,
        borderLeft: '3px solid var(--color-accent)',
        backgroundColor: 'var(--color-accent-soft)',
        marginBottom: '1.5rem',
      }}
    >
      <p style={{ ...bodyText, color: 'var(--color-ink)', margin: 0 }}>
        <strong>This means sharing your personal data.</strong> Whatever you upload or type into a
        cloud chatbot (journal entries, feelings, names of people in your life) is sent to that
        company&apos;s servers and handled under its terms. Depending on the provider and your
        settings, it may be stored, reviewed or used to train future models, and once it is shared
        you cannot fully take it back. That can still be a reasonable choice. It should be a
        deliberate one.
      </p>
    </div>

    <h3 style={subsectionHeading}>With a chatbot of your choice</h3>
    <p style={{ ...bodyText, marginBottom: '0.75rem' }}>
      Egon never connects to a cloud model itself: there are no API keys and no hosted Egon
      service. Instead, Egon writes a context file on your computer, and you decide whether to take
      it to Claude, ChatGPT or any other chatbot. You can already do this today:
    </p>
    <div style={codeBlock}>{`egon export-context --months 3 --output context.md`}</div>
    <p style={{ ...bodyText, marginTop: '0.75rem', marginBottom: '0.75rem' }}>
      Upload <code>context.md</code> to the chatbot and talk. At the end, ask it for a short summary
      and paste that into a journal entry for the day, so what you took from the conversation lives
      in your graph rather than only on their servers. <em>Planned:</em> choosing exactly which
      entries and content nodes go into the file, and seeing what is included before you share it.
    </p>
    <ProsCons
      pros={[
        'The most capable models available, with more nuanced and fluent replies.',
        'Nothing to install, and it runs on any device, including your phone.',
        'Fast, even in long conversations.',
      ]}
      cons={[
        'Your data leaves your machine and is held by a company under its policies.',
        'Usually an account, and often a subscription.',
        'The chatbot keeps its own memory of you on its servers, which you cannot fully see or edit.',
        'Before you share, check the provider’s settings for training and data retention, and consider leaving out names.',
      ]}
    />
  </>
)

export default function ChatPage() {
  return (
    <div style={{ paddingBlock: '3rem 5rem' }}>
      <div className="container" style={{ maxWidth: '760px' }}>

        {/* Header */}
        <span style={tag}>Planned for v0.5</span>
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
          Chat
        </h1>
        <p style={{ ...bodyText, fontSize: '1rem', marginBottom: '1rem' }}>
          Some days a blank page is exactly right. On others you don&apos;t know where to start, or you
          keep circling the same thought. A good question, such as <em>what happened just before you felt
          that?</em>, can help you explore it, notice what sits underneath and see it from another
          angle. That is what a conversation offers that writing alone sometimes doesn&apos;t.
        </p>
        <p style={{ ...bodyText, fontSize: '1rem', marginBottom: '1rem' }}>
          Egon will make room for that: a quiet chat that asks follow-up questions about your day, a
          topic or a prompt. When you are done, it offers a short summary that you can edit and save
          as the journal entry for that day. The summary joins your graph like any other entry, and
          the full transcript is not kept unless you ask.
        </p>
        <p style={{ ...bodyText, fontSize: '1rem', marginBottom: '3.5rem' }}>
          Chat is optional, and everything else in Egon keeps working without it. It is a way to
          reflect, not therapy and not a replacement for it.
        </p>

        {/* Local or cloud */}
        <section style={section}>
          <h2 style={sectionHeading}>Where the conversation happens</h2>
          <p style={{ ...bodyText, marginBottom: '1.5rem' }}>
            You can talk to a model on your own computer, or take your context to a cloud chatbot.
            The best models today run in the cloud, and you may decide that is worth it. Here is the
            trade-off, plainly.
          </p>
          <ChatModeTabs local={localPanel} cloud={cloudPanel} />
        </section>

        {/* Context over models */}
        <section style={section}>
          <h2 style={sectionHeading}>Why context matters more than the model</h2>
          <p style={{ ...bodyText, marginBottom: '1rem' }}>
            Language models are improving quickly, and the leading ones are becoming more alike. Our
            view is that, for a conversation that actually helps you understand yourself, what the
            model is given will soon matter more than which model it is. A brilliant model that knows
            nothing about you asks generic questions. A modest one that knows what you wrote last
            week, what you said matters to you and what has helped before can ask the right one.
          </p>
          <p style={{ ...bodyText, marginBottom: '1.25rem' }}>
            Choosing that well is called <em>context engineering</em>: deciding what is worth bringing
            into a conversation and what is better left out. It is also where most chatbots are weakest:
            they either forget you between sessions or keep a hidden memory you can&apos;t read. This
            is what Egon is designed around.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={card}>
              <h3 style={subsectionHeading}>Your graph is the memory</h3>
              <p style={bodyText}>
                Egon remembers nothing beyond what is in your graph: journal entries, chat summaries
                and the content nodes you chose to add. It is plain Markdown on your own disk, so you
                can read, edit or delete any of it, and so can the next tool you use.
              </p>
            </div>
            <div style={card}>
              <h3 style={subsectionHeading}>Structured, not just a pile of text</h3>
              <p style={bodyText}>
                Entries are dated and linked to topics, and content nodes describe what they are
                about. That structure lets a conversation start from what is relevant (the anxiety
                article when you want to talk about anxiety, or the last few entries that mention
                sleep) instead of everything at once.
              </p>
            </div>
            <div style={card}>
              <h3 style={subsectionHeading}>You decide what comes in</h3>
              <p style={bodyText}>
                A chat reads your existing journal only when you allow it for that session, and you can
                see what it was given. Leaving things out is as much a part of good context as putting
                them in.
              </p>
            </div>
          </div>

          <p style={{ ...bodyText, marginTop: '1.25rem' }}>
            That is why Egon puts its effort into the graph rather than into building its own model.
            Better models will keep arriving; a well-kept graph makes every one of them more useful,
            whether it runs on your laptop or in the cloud.
          </p>
        </section>

        {/* Boundaries */}
        <section style={section}>
          <h2 style={sectionHeading}>What chat is not</h2>
          <ul style={list}>
            <li>Not a person, a therapist or a counselor, and it will not claim to be one.</li>
            <li>Not a diagnosis. Like everything a model says, its replies are estimates from language, and can be wrong.</li>
            <li>
              Not for a crisis. If a conversation suggests you may be at risk, it points you to people
              who can help. If you need support now, find a helpline at{' '}
              <a href="https://findahelpline.com" target="_blank" rel="noopener noreferrer">findahelpline.com</a>.
            </li>
          </ul>
          <p style={{ ...bodyText, marginTop: '1.25rem' }}>
            Until chat is ready, the <Link href="/journal">Journal</Link> page shows how to write
            entries and use prompts to get started.
          </p>
        </section>

      </div>
    </div>
  )
}
