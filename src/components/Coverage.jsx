import { useState } from 'react'
import { Phone, Compass } from 'lucide-react'
import { Reveal } from '../lib/motion.js'
import { COVERAGE, PHONE_DISPLAY, PHONE_TEL } from '../data/site.js'
import './coverage.css'

export default function Coverage() {
  const [hot, setHot] = useState(null)

  return (
    <section className="section cov" id="service-areas" aria-labelledby="cov-title">
      <div className="shell cov__grid">
        <Reveal className="cov__copy" technique="rise">
          <p className="eyebrow eyebrow--ink">Coverage</p>
          <h2 id="cov-title">Serving Southern Alberta, Town By Town</h2>
          <p className="cov__lede">
            Our project list runs from single-family homes to multi-unit commercial builds
            across Southern Alberta. We serve Lethbridge, Brooks, Taber, Vulcan,
            Claresholm, Pincher Creek, Fort Macleod, and Coaldale, with the same estimate
            process and crew on every project regardless of scale.
          </p>

          <h3 className="cov__sub">Communities We Cover</h3>
          <ul className="cov__list list-reset">
            {COVERAGE.map((c, i) => (
              <li
                key={c.name}
                className="cov__list-item"
                data-hot={hot === i ? 'true' : 'false'}
                onMouseEnter={() => setHot(i)}
                onMouseLeave={() => setHot(null)}
              >
                <span className="cov__dot" aria-hidden="true" />
                <span>{c.name}</span>
              </li>
            ))}
          </ul>

          <a className="btn btn--on-ink cov__cta" href={PHONE_TEL}>
            <Phone className="lucide" aria-hidden="true" />
            <span>Call {PHONE_DISPLAY}</span>
          </a>
        </Reveal>

        <Reveal className="cov__mapwrap" technique="rise" delay={120}>
          <div className="cov__map">
            <svg
              className="cov__svg"
              viewBox="0 0 100 74"
              preserveAspectRatio="xMidYMid meet"
              role="img"
              aria-label="Schematic map of Southern Alberta showing the eight communities Silver Edge Electric serves"
            >
              <defs>
                <pattern id="cov-grid" width="6.25" height="6.25" patternUnits="userSpaceOnUse">
                  <path d="M6.25 0 L0 0 0 6.25" className="cov-grid" />
                </pattern>
              </defs>

              <rect x="0" y="0" width="100" height="74" fill="url(#cov-grid)" />

              <path
                className="cov-region"
                d="M9 6 L91 6 L91 68 L9 68 Z"
              />
              {/* Western mountain edge */}
              <path
                className="cov-range"
                d="M9 6 L12 12 L9.5 16 L13 21 L10 26 L14 32 L11 38 L15 44 L12 50 L16 56 L12.5 62 L15 68"
              />
              {/* Two highway corridors */}
              <path className="cov-road" d="M18 60 L28 48 L45 57 L60 44 L79 52" />
              <path className="cov-road" d="M43 14 L45 57" />
              <path className="cov-road cov-road--faint" d="M29 29 L43 14 L80 23" />
              {/* River */}
              <path className="cov-river" d="M16 68 L33 60 L48 61 L64 50 L80 45 L92 31" />
              {/* The 49th parallel, drawn as a border rather than a plain edge */}
              <path className="cov-border" d="M9 68 L91 68" />
              <path className="cov-border cov-border--ghost" d="M9 69.4 L91 69.4" />

              {COVERAGE.map((c, i) => (
                <g
                  key={c.name}
                  className="cov-pin"
                  data-hot={hot === i ? 'true' : 'false'}
                  style={{ '--d': `${i * 90}ms` }}
                >
                  <circle className="cov-pin__halo" cx={c.x} cy={c.y} r="4.2" />
                  <circle className="cov-pin__core" cx={c.x} cy={c.y} r="1.5" />
                </g>
              ))}
            </svg>

            {COVERAGE.map((c, i) => (
              <span
                key={c.name}
                className="cov__label"
                style={{ left: `${c.x}%`, top: `${c.y / 0.74}%`, '--d': `${i * 90}ms` }}
                data-hot={hot === i ? 'true' : 'false'}
                data-side={c.side}
                onMouseEnter={() => setHot(i)}
                onMouseLeave={() => setHot(null)}
              >
                {c.name}
              </span>
            ))}

          </div>
          <p className="cov__legend">
            <Compass className="lucide" aria-hidden="true" />
            <span>Schematic coverage map — not to scale. Hover a community to locate it.</span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
