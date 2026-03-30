import fs from 'fs'
import path from 'path'

export interface Pack {
  slug: string
  name: string
  description: string
  tags: string[]
  nodes: string[]
}

export interface NodeMeta {
  slug: string
  title: string
  description: string
  pack: string
  packName: string
  tags: string[]
}

const PACK_ORDER = [
  'understanding-emotions',
  'anxiety-and-worry',
  'low-mood-and-depression',
  'stress-and-burnout',
  'self-awareness',
  'self-care-foundations',
  'relationships-and-connection',
  'grief-and-loss',
  'mindfulness-and-presence',
  'thinking-patterns',
  'identity-and-self-worth',
  'navigating-change',
  'personality',
  'trauma-and-healing',
]

export function getAllPacks(): Pack[] {
  const packsDir = path.join(process.cwd(), 'content/packs')
  const result: Pack[] = []
  for (const slug of PACK_ORDER) {
    const filePath = path.join(packsDir, `${slug}.json`)
    if (fs.existsSync(filePath)) {
      result.push(JSON.parse(fs.readFileSync(filePath, 'utf-8')) as Pack)
    }
  }
  return result
}

export function getPack(slug: string): Pack | null {
  const filePath = path.join(process.cwd(), 'content/packs', `${slug}.json`)
  if (!fs.existsSync(filePath)) return null
  return JSON.parse(fs.readFileSync(filePath, 'utf-8')) as Pack
}

export function titleFromSlug(slug: string): string {
  return slug
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

export function getNodeFirstLine(slug: string): string {
  const filePath = path.join(process.cwd(), 'content/nodes/logseq', `${slug}.md`)
  if (!fs.existsSync(filePath)) return ''
  const content = fs.readFileSync(filePath, 'utf-8')
  const lines = content.split('\n')
  const bullet = lines.find(l => l.startsWith('- ') && !l.startsWith('- _'))
  if (!bullet) return ''
  const text = bullet.slice(2).trim()
  if (text.length <= 100) return text
  // Break at word boundary around 100 chars
  const cut = text.lastIndexOf(' ', 97)
  return text.slice(0, cut > 0 ? cut : 97) + '…'
}

// Returns the content of a single node file for the given tool
export function getNodeFile(slug: string, tool: 'obsidian' | 'logseq'): string {
  const filePath = path.join(process.cwd(), `content/nodes/${tool}`, `${slug}.md`)
  if (!fs.existsSync(filePath)) return ''
  return fs.readFileSync(filePath, 'utf-8')
}

// Returns file map ready for zipping: { 'path/in/zip': fileContent }
export function getPackFiles(
  pack: Pack,
  tool: 'obsidian' | 'logseq'
): Record<string, string> {
  const files: Record<string, string> = {}
  const nodesDir = path.join(process.cwd(), `content/nodes/${tool}`)

  for (const nodeSlug of pack.nodes) {
    const filePath = path.join(nodesDir, `${nodeSlug}.md`)
    if (!fs.existsSync(filePath)) continue
    const content = fs.readFileSync(filePath, 'utf-8')
    const zipPath = tool === 'logseq' ? `pages/${nodeSlug}.md` : `${nodeSlug}.md`
    files[zipPath] = content
  }

  return files
}

export function getAllNodes(): NodeMeta[] {
  const packs = getAllPacks()
  const nodes: NodeMeta[] = []
  for (const pack of packs) {
    for (const nodeSlug of pack.nodes) {
      nodes.push({
        slug: nodeSlug,
        title: titleFromSlug(nodeSlug),
        description: getNodeFirstLine(nodeSlug),
        pack: pack.slug,
        packName: pack.name,
        tags: pack.tags,
      })
    }
  }
  return nodes
}
