/* The wordmark. The glyph is a drawn plate with one bevelled edge catching
   light — the page's material accent reduced to a mark. */
export default function Mark({ tone = 'ink', compact = false }) {
  return (
    <span className="mark" data-tone={tone} data-compact={compact ? 'true' : 'false'}>
      <svg className="mark__glyph" viewBox="0 0 28 28" aria-hidden="true" focusable="false">
        <rect x="3" y="3" width="22" height="22" rx="1" className="mark__plate" />
        <path d="M25 3 L25 25 L3 25 Z" className="mark__facet" />
        <path d="M3 25 L25 3" className="mark__bevel" />
      </svg>
      <span className="mark__type">
        <span className="mark__name">Silver Edge</span>
        <span className="mark__sub">Electric</span>
      </span>
    </span>
  )
}
