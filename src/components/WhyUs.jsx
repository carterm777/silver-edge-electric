import { Building2, ShieldCheck, CalendarCheck, FileCheck, Phone } from 'lucide-react'
import { Reveal, Stagger } from '../lib/motion.js'
import { WHY_US, PHONE_DISPLAY, PHONE_TEL } from '../data/site.js'
import './why.css'

const ICONS = { Building2, ShieldCheck, CalendarCheck, FileCheck }
const STEP = 120
const START = 60

export default function WhyUs() {
  return (
    <section className="section why" id="why" aria-labelledby="why-title">
      <div className="shell why__grid">
        <Reveal className="why__statement" technique="rise">
          <p className="eyebrow">Why Silver Edge</p>
          <h2 id="why-title">One Standard Of Work, Whatever The Scale Of The Project</h2>
          <p className="why__lede">
            The same crew, the same estimate process, and the same code-compliant work on
            a bungalow rewire as on a multi-unit commercial build.
          </p>

          <figure className="frame why__frame">
            <span className="photo why__photo">
              <img
                src="/images/permit-tag.webp"
                alt="Gloved hands holding an inspection clipboard beside an electrical meter"
                loading="lazy"
                decoding="async"
                width="2000"
                height="1125"
                data-reveal="settle"
              />
            </span>
            <figcaption>Every project closes out to the code an inspector checks.</figcaption>
          </figure>

          <a className="btn btn--primary why__cta" href={PHONE_TEL}>
            <Phone className="lucide" aria-hidden="true" />
            <span>Call {PHONE_DISPLAY}</span>
          </a>
        </Reveal>

        <Stagger
          className="why__points"
          itemClassName="why__cell"
          technique="rise"
          step={STEP}
          start={START}
        >
          {WHY_US.map((w, i) => {
            const Icon = ICONS[w.icon]
            return (
              <article className="why__point" key={w.title}>
                <span className="edge why__point-edge" aria-hidden="true" />
                <span
                  className="why__icon"
                  data-reveal="wipe"
                  style={{ '--reveal-delay': `${START + i * STEP + 180}ms` }}
                >
                  <Icon className="lucide" aria-hidden="true" />
                </span>
                <div className="why__body">
                  <h3>{w.title}</h3>
                  <p>{w.body}</p>
                </div>
              </article>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
