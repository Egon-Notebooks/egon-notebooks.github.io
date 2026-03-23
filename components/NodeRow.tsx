import type { NodeMeta } from '@/lib/content'

interface NodeRowProps {
  node: NodeMeta
}

export default function NodeRow({ node }: NodeRowProps) {
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
      <td
        style={{
          padding: '0.875rem 0 0.875rem 1rem',
          verticalAlign: 'top',
        }}
      >
        <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
          {node.tags.slice(0, 2).map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </td>
    </tr>
  )
}
