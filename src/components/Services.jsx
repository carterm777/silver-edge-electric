import { useState } from 'react'
import {
  Building2, Factory, Home, Ruler, Gauge, Search, Plus, Phone,
} from 'lucide-react'
import { Reveal, useMediaQuery, useAccordion } from '../lib/motion.js'
import { SERVICES, PHONE_DISPLAY, PHONE_TEL } from '../data/site.js'
import './services.css'

const ICONS = { Building2, Factory, Home, Ruler, Gauge, Search }

function Panel({ svc, id, labelledBy }) {
  const Icon = ICONS[svc.icon]
  return (
    <div className="svc__panel" id={id} role="tabpanel" aria-labelledby={labelledBy}>
      <div className="svc__panel-head">
        <span className="svc__panel-icon">
          <Icon className="lucide" aria-hidden="true" />
        </span>
        <h3>{svc.title}</h3>
      </div>
      <span className="edge svc__panel-edge" aria-hidden="true" />
      <div className="svc__panel-body">
        <p>{svc.body}</p>
        <a className="btn btn--ghost btn--sm svc__panel-cta" href={PHONE_TEL}>
          <Phone className="lucide" aria-hidden="true" />
          <span>Talk Through This Scope</span>
        </a>
      </div>
      <span className="photo svc__panel-photo">
        <img
          src={svc.img}
          alt={svc.alt}
          loading="lazy"
          decoding="async"
          width="2000"
          height="1125"
        />
      </span>
    </div>
  )
}

export default function Services() {
  const isDesktop = useMediaQuery('(min-width: 901px)')
  const [active, setActive] = useState(0)
  const acc = useAccordion(0)

  return (
    <section className="section svc" id="services" aria-labelledby="svc-title">
      <div className="shell">
        <Reveal className="svc__head" technique="rise">
          <div className="sec-head">
            <p className="eyebrow">Core Services</p>
            <h2 id="svc-title">Electrical Scope For Every Kind Of Building</h2>
          </div>
          <p className="svc__head-note">
            Six of the fourteen scopes we contract across Southern Alberta. Select one to
            read what it covers.
          </p>
        </Reveal>

        {isDesktop ? (
          <Reveal className="svc__tabs" technique="rise" delay={90}>
            <div className="svc__rail" role="tablist" aria-orientation="vertical" aria-label="Services">
              <span className="svc__indicator" style={{ '--i': active }} aria-hidden="true" />
              {SERVICES.map((s, i) => {
                const Icon = ICONS[s.icon]
                return (
                  <button
                    key={s.title}
                    id={`svc-tab-${i}`}
                    type="button"
                    role="tab"
                    className="svc__tab"
                    aria-selected={active === i}
                    aria-controls={`svc-panel-${i}`}
                    tabIndex={active === i ? 0 : -1}
                    onClick={() => setActive(i)}
                    onKeyDown={(e) => {
                      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                        e.preventDefault()
                        const n = (i + 1) % SERVICES.length
                        setActive(n)
                        document.getElementById(`svc-tab-${n}`)?.focus()
                      }
                      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                        e.preventDefault()
                        const n = (i - 1 + SERVICES.length) % SERVICES.length
                        setActive(n)
                        document.getElementById(`svc-tab-${n}`)?.focus()
                      }
                    }}
                  >
                    <Icon className="lucide" aria-hidden="true" />
                    <span>{s.short}</span>
                  </button>
                )
              })}
            </div>

            <Panel
              svc={SERVICES[active]}
              id={`svc-panel-${active}`}
              labelledBy={`svc-tab-${active}`}
              key={active}
            />
          </Reveal>
        ) : (
          <div className="svc__acc">
            {SERVICES.map((s, i) => {
              const Icon = ICONS[s.icon]
              const open = acc.isOpen(i)
              return (
                <div className="svc__item" key={s.title} data-open={open ? 'true' : 'false'}>
                  <h3 className="svc__item-h">
                    <button
                      type="button"
                      className="svc__item-btn"
                      aria-expanded={open}
                      aria-controls={`svc-acc-${i}`}
                      onClick={() => acc.toggle(i)}
                    >
                      <Icon className="lucide svc__item-icon" aria-hidden="true" />
                      <span>{s.title}</span>
                      <Plus className="lucide svc__item-plus" aria-hidden="true" />
                    </button>
                  </h3>
                  <div className="svc__item-panel" id={`svc-acc-${i}`} hidden={!open}>
                    <span className="photo svc__item-photo">
                      <img
                        src={s.img}
                        alt={s.alt}
                        loading="lazy"
                        decoding="async"
                        width="2000"
                        height="1125"
                      />
                    </span>
                    <p>{s.body}</p>
                    <a className="btn btn--ghost btn--sm" href={PHONE_TEL}>
                      <Phone className="lucide" aria-hidden="true" />
                      <span>Call {PHONE_DISPLAY}</span>
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
