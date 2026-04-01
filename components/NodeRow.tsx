import type { NodeMeta } from '@/lib/content'
import NodeDownloadButton from './NodeDownloadButton'

interface NodeRowProps {
  node: NodeMeta
  tool: 'obsidian' | 'logseq'
  obsidianContent: string
  logseqContent: string
}

export default function NodeRow({ node, tool, obsidianContent, logseqContent }: NodeRowProps) {
  return (
    <tr
      style={{
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <td
        style={{
          padding: '0.875rem 1rem 0.875rem 0',
          fontFamily: 'var(--font-body)',
          fontWeight: 500,
          fontSize: '0.875rem',
          color: 'var(--color-ink)',
          verticalAlign: 'top',
          minWidth: '180px',
        }}
      >
        {node.title}
      </td>
      <td
        style={{
          padding: '0.875rem 1rem',
          fontSize: '0.8rem',
          color: 'var(--color-ink-muted)',
          lineHeight: 1.5,
          verticalAlign: 'top',
        }}
        className="node-desc-col"
      >
        {node.description}
      </td>
      <td
        style={{
          padding: '0.875rem 1rem',
          fontSize: '0.8rem',
          color: 'var(--color-ink-muted)',
          verticalAlign: 'top',
          whiteSpace: 'nowrap',
        }}
        className="node-pack-col"
      >
        {node.packName}
      </td>
      <td style={{ padding: '0.875rem 0 0.875rem 1rem', verticalAlign: 'middle' }}>
        <NodeDownloadButton
          slug={node.slug}
          tool={tool}
          obsidianContent={obsidianContent}
          logseqContent={logseqContent}
        />
      </td>
    </tr>
  )
}
