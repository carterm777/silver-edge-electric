import { ShieldCheck, Award, MapPin, CheckCircle2 } from 'lucide-react'
import { Stagger, Reveal } from '../lib/motion.js'
import { TRUST_BADGES } from '../data/site.js'
import './trust.css'

const ICONS = { ShieldCheck, Award, MapPin, CheckCircle2 }

export default function TrustBanner() {
  return (
    <section className="section section--tight tb" aria-labelledby="tb-title">
      <div className="tb__texture" aria-hidden="true">
        <img src="/images/tex-steel.webp" alt="" loading="lazy" decoding="async" width="1400" height="788" />
      </div>

      <div className="shell tb__inner">
        <Reveal className="tb__label" technique="rise">
          <h2 id="tb-title">Credentials And Commitments</h2>
          <span className="edge tb__label-edge" aria-hidden="true" />
        </Reveal>

        <Stagger className="tb__wall" itemClassName="tb__cell" technique="rise" step={110} start={80}>
          {TRUST_BADGES.map((b) => {
            const Icon = ICONS[b.icon]
            return (
              <div className="tb__badge vlift" key={b.label}>
                <Icon className="lucide tb__icon" aria-hidden="true" />
                <h3 className="tb__badge-title">{b.label}</h3>
                <p className="tb__badge-note">{b.note}</p>
              </div>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
