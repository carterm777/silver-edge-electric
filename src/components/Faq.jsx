import { Plus, Phone, MessageSquare } from 'lucide-react'
import { Reveal, useAccordion } from '../lib/motion.js'
import { FAQ_GROUPS, PHONE_DISPLAY, PHONE_TEL, PHONE_SMS } from '../data/site.js'
import './faq.css'

export default function Faq() {
  const acc = useAccordion('0-0')

  return (
    <section className="section faq" id="faq" aria-labelledby="faq-title">
      <div className="shell">
        <Reveal className="faq__head" technique="rise">
          <div className="sec-head">
            <p className="eyebrow">Questions</p>
            <h2 id="faq-title">What Clients Ask Before They Book</h2>
          </div>
          <a className="btn btn--ghost btn--sm faq__cta" href={PHONE_TEL}>
            <Phone className="lucide" aria-hidden="true" />
            <span>Ask Us Directly — {PHONE_DISPLAY}</span>
          </a>
        </Reveal>

        <div className="faq__cols">
          {FAQ_GROUPS.map((group, gi) => (
            <Reveal
              className="faq__col"
              technique="rise"
              delay={gi * 110}
              key={group.category}
            >
              <h3 className="faq__cat">{group.category}</h3>
              <span className="edge faq__cat-edge" aria-hidden="true" />
              <div className="faq__items">
                {group.items.map((item, ii) => {
                  const id = `${gi}-${ii}`
                  const open = acc.isOpen(id)
                  return (
                    <div className="faq__item" key={item.q} data-open={open ? 'true' : 'false'}>
                      <h4 className="faq__q">
                        <button
                          type="button"
                          className="faq__trigger"
                          aria-expanded={open}
                          aria-controls={`faq-a-${id}`}
                          onClick={() => acc.toggle(id)}
                        >
                          <span>{item.q}</span>
                          <Plus className="lucide faq__plus" aria-hidden="true" />
                        </button>
                      </h4>
                      <div className="faq__a" id={`faq-a-${id}`} hidden={!open}>
                        <p>{item.a}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {gi === 1 && (
                <div className="faq__aside">
                  <p className="faq__aside-lead">
                    Something specific to your building or your scope? Ask an electrician
                    directly — there is no charge for the conversation.
                  </p>
                  <div className="faq__aside-links">
                    <a className="tlink" href={PHONE_TEL}>
                      <Phone className="lucide" aria-hidden="true" />
                      <span>Call {PHONE_DISPLAY}</span>
                    </a>
                    <a className="tlink" href={PHONE_SMS}>
                      <MessageSquare className="lucide" aria-hidden="true" />
                      <span>Text Us</span>
                    </a>
                  </div>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
