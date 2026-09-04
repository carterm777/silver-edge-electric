import { Phone, ArrowDownRight, ClipboardList, ShieldCheck, ThumbsUp, MapPin } from 'lucide-react'
import PhotoDiagnosis from './PhotoDiagnosis.jsx'
import { PHONE_DISPLAY, PHONE_TEL } from '../data/site.js'
import './hero.css'

const BADGE_ICONS = { ClipboardList, ShieldCheck, ThumbsUp, MapPin }

const BADGES = [
  { label: 'Free Project Estimates', icon: 'ClipboardList' },
  { label: 'Licensed & Insured', icon: 'ShieldCheck' },
  { label: 'Satisfaction Guaranteed', icon: 'ThumbsUp' },
  { label: 'Locally Owned & Operated', icon: 'MapPin' },
]

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__bed">
        <img
          src="/images/commercial-lift.webp"
          alt="Two electricians on a scissor lift installing linear ceiling lighting in an open commercial space"
          fetchpriority="high"
          decoding="async"
          width="2000"
          height="1125"
        />
        <span className="hero__scrim" aria-hidden="true" />
        <span className="hero__vignette" aria-hidden="true" />
      </div>

      <div className="hero__inner shell shell--wide">
        <div className="hero__copy">
          <p className="eyebrow eyebrow--ink hero__eyebrow" data-load style={{ '--reveal-delay': '120ms' }}>
            Southern Alberta Electrical Contractor
          </p>

          <h1 id="hero-title" className="hero__title" data-hero-clip>
            Professional Commercial &amp; Industrial Electricians Serving Southern Alberta
          </h1>

          <p className="hero__sub" data-load style={{ '--reveal-delay': '520ms' }}>
            A full-service Southern Alberta contractor delivering commercial, industrial,
            and residential electrical work backed by more than a decade of hands-on
            project experience.
          </p>

          <ul className="hero__badges list-reset" data-load style={{ '--reveal-delay': '660ms' }}>
            {BADGES.map((b) => {
              const Icon = BADGE_ICONS[b.icon]
              return (
                <li className="hero__badge" key={b.label}>
                  <span className="hero__badge-rule" aria-hidden="true" />
                  <Icon className="lucide" aria-hidden="true" />
                  <span>{b.label}</span>
                </li>
              )
            })}
          </ul>

          <div className="hero__actions" data-load style={{ '--reveal-delay': '780ms' }}>
            <a className="btn btn--on-ink hero__cta" href={PHONE_TEL}>
              <Phone className="lucide" aria-hidden="true" />
              <span>Call {PHONE_DISPLAY}</span>
            </a>
            <a className="btn btn--ghost-ink hero__cta" href="#services">
              <span className="hero__cta-long">View Our Services</span>
              <span className="hero__cta-short">Our Services</span>
              <ArrowDownRight className="lucide" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="hero__widget" data-load style={{ '--reveal-delay': '360ms', '--reveal-rise': '0px' }}>
          <PhotoDiagnosis />
        </div>
      </div>
    </section>
  )
}
