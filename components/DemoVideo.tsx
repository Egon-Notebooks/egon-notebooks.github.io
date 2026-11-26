'use client'

import { useEffect, useRef } from 'react'

/**
 * A short, silent demo scene that loops. People who prefer reduced motion see the still
 * frame instead, and the description is always available as text.
 */
export default function DemoVideo({ name, description }: { name: string; description: string }) {
  const video = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!reduced) video.current?.play().catch(() => {})
  }, [])

  return (
    <video
      ref={video}
      src={`/videos/${name}.mp4`}
      poster={`/videos/${name}-poster.webp`}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={description}
      style={{
        width: '100%',
        height: 'auto',
        aspectRatio: '16 / 9',
        display: 'block',
        borderRadius: '4px',
        border: '1px solid var(--color-border)',
        backgroundColor: '#f7f4ef',
      }}
    />
  )
}
