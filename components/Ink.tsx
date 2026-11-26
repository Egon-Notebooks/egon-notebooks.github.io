/** A word underlined with a hand-drawn ink stroke, like a note in the margin of a notebook. */
export default function Ink({ children }: { children: React.ReactNode }) {
  return (
    <span className="ink">
      {children}
      <svg viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true">
        <path
          d="M2 8.5 C 30 4.5, 62 10, 96 6.5 S 160 3.5, 198 7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </span>
  )
}
