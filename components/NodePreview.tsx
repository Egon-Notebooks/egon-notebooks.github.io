'use client'

import { useEffect, useRef } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type { NodeMeta } from '@/lib/content'
import NodeDownloadButton from './NodeDownloadButton'

interface NodePreviewProps {
  node: NodeMeta
  tool: 'obsidian' | 'logseq'
  obsidianContent: string
  logseqContent: string
  knownSlugs: Set<string>
  onOpenNode: (slug: string) => void
  onClose: () => void
}

export function slugFromTitle(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

/** The Obsidian file as plain Markdown for display: no frontmatter, no title, links made clickable. */
function toDisplayMarkdown(content: string, knownSlugs: Set<string>): string {
  const link = (title: string, text: string) => {
    const slug = slugFromTitle(title)
    return knownSlugs.has(slug) ? `[${text}](#node=${slug})` : text
  }
  return content
    .replace(/^---\n[\s\S]*?\n---\n/, '')
    .replace(/^\s*# .*\n/, '')
    .replace(/^> \[!\w+\]\s*\n/gm, '')
    .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, (_, title, text) => link(title, text))
    .replace(/\[\[([^\]]+)\]\]/g, (_, title) => link(title, title))
}

export default function NodePreview({
  node,
  tool,
  obsidianContent,
  logseqContent,
  knownSlugs,
  onOpenNode,
  onClose,
}: NodePreviewProps) {
  const dialog = useRef<HTMLDialogElement>(null)
  const body = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!dialog.current?.open) dialog.current?.showModal()
    body.current?.scrollTo(0, 0)
    body.current?.focus() // start reading, rather than on the close button
  }, [node.slug])

  return (
    <dialog
      ref={dialog}
      className="node-preview"
      aria-labelledby="node-preview-title"
      onClose={onClose}
      onClick={e => {
        if (e.target === dialog.current) dialog.current?.close() // click on the backdrop
      }}
    >
      <header className="node-preview-head">
        <div>
          <p className="node-preview-pack">{node.packName}</p>
          <h2 id="node-preview-title">{node.title}</h2>
        </div>
        <button type="button" className="node-preview-close" aria-label="Close" onClick={() => dialog.current?.close()}>
          ×
        </button>
      </header>
      <div ref={body} className="node-preview-body" tabIndex={-1}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            a: ({ href, children }) =>
              href?.startsWith('#node=') ? (
                <a
                  href={href}
                  onClick={e => {
                    e.preventDefault()
                    onOpenNode(href.slice('#node='.length))
                  }}
                >
                  {children}
                </a>
              ) : (
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {children}
                </a>
              ),
          }}
        >
          {toDisplayMarkdown(obsidianContent, knownSlugs)}
        </ReactMarkdown>
      </div>
      <footer className="node-preview-foot">
        <NodeDownloadButton
          filename={node.filename}
          tool={tool}
          obsidianContent={obsidianContent}
          logseqContent={logseqContent}
        />
      </footer>
    </dialog>
  )
}
