'use client'

import { useState } from 'react'
import { zipSync, strToU8 } from 'fflate'

interface DownloadButtonProps {
  packSlug: string
  tool: 'obsidian' | 'logseq'
  // { 'pages/anger.md': '...content...' } for logseq
  // { 'anger.md': '...content...' } for obsidian
  files: Record<string, string>
}

export default function DownloadButton({ packSlug, tool, files }: DownloadButtonProps) {
  const [loading, setLoading] = useState(false)

  const handleDownload = () => {
    setLoading(true)
    try {
      // Convert file contents to Uint8Arrays for fflate
      const zipInput: Record<string, Uint8Array> = {}
      for (const [filePath, content] of Object.entries(files)) {
        zipInput[filePath] = strToU8(content)
      }

      const zipped = zipSync(zipInput)
      const blob = new Blob([zipped.buffer as ArrayBuffer], { type: 'application/zip' })
      const url = URL.createObjectURL(blob)

      const a = document.createElement('a')
      a.href = url
      a.download = `${packSlug}-${tool}.zip`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className="btn-primary"
      style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.7 : 1 }}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M7 2v7M4 7l3 3 3-3M2 11h10" />
      </svg>
      {loading ? 'Preparing…' : `Download for ${tool === 'obsidian' ? 'Obsidian' : 'Logseq'}`}
    </button>
  )
}
