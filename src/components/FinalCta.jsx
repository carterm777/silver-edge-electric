import { Phone, MessageSquare, ArrowRight, Lock, Check } from 'lucide-react'
import { Reveal, useCursorGlow } from '../lib/motion.js'
import { useDemoForm } from '../lib/usePhotoDiagnosis.js'
import { PHONE_DISPLAY, PHONE_TEL, PHONE_SMS, formatPhone } from '../data/site.js'
import './cta.css'

export default function FinalCta() {
  const form = useDemoForm({ phone: '' }, { required: ['phone'] })
  const glowRef = useCursorGlow()
  const done = form.status === 'done'

  return (
    <section className="section section--loose cta" id="contact" aria-labelledby="cta-title">
      <div className="cta__bed" aria-hidden="true">
        <img
          src="/images/street-dusk.webp"
          alt=""
          loading="lazy"
          decoding="async"
          width="2000"
          height="1125"
        />
        <span className="cta__scrim" />
      </div>

      <div className="shell cta__inner" ref={glowRef} data-glow-surface>
        <Reveal className="cta__copy" technique="rise">
          <p className="eyebrow eyebrow--ink">Next Step</p>
          <h2 id="cta-title">Get A Written Estimate For Your Next Project</h2>
          <p className="cta__lede">
            Call to talk through your commercial, industrial, or residential electrical
            project — we'll give you a clear estimate before anything starts.
          </p>
          <p className="cta__action">Call {PHONE_DISPLAY} or text us to get started.</p>

          <div className="cta__buttons">
            <a className="btn btn--on-ink" href={PHONE_TEL}>
              <Phone className="lucide" aria-hidden="true" />
              <span>Call {PHONE_DISPLAY}</span>
            </a>
            <a className="btn btn--ghost-ink" href={PHONE_SMS}>
              <MessageSquare className="lucide" aria-hidden="true" />
              <span>Text Us Instead</span>
            </a>
          </div>
        </Reveal>

        <Reveal className="cta__callback" technique="rise" delay={120}>
          <span className="edge edge--ink cta__callback-edge" aria-hidden="true" />
          {!done ? (
            <form onSubmit={form.submit} noValidate>
              <h3>Rather Be Called Back?</h3>
              <p className="cta__callback-note">
                Leave a number and an electrician calls you to scope the project.
              </p>
              <div className="cta__field">
                <label className="sr-only" htmlFor="cta-phone">Your phone number</label>
                <input
                  id="cta-phone"
                  className="cta__input"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="(403) 000-0000"
                  value={form.fields.phone}
                  onChange={form.setField('phone')}
                  aria-invalid={form.errors.phone ? 'true' : undefined}
                />
                <button type="submit" className="cta__go" aria-label="Request a callback">
                  <ArrowRight className="lucide" aria-hidden="true" />
                </button>
              </div>
              {form.errors.phone && <p className="cta__err">{form.errors.phone}</p>}
              <p className="reassure cta__reassure">
                <Lock className="lucide" aria-hidden="true" />
                <span>No cost, no obligation, and your number is not shared with anyone.</span>
              </p>
            </form>
          ) : (
            <div className="cta__done" role="status">
              <span className="cta__done-mark" aria-hidden="true">
                <Check className="lucide" />
              </span>
              <h3>Your Number Is In</h3>
              <p className="cta__callback-note">
                We call {formatPhone(form.fields.phone)} within one business day to walk through the
                scope. If it is faster to talk now, the line is open.
              </p>
              <a className="btn btn--on-ink btn--sm" href={PHONE_TEL}>
                <Phone className="lucide" aria-hidden="true" />
                <span>Call {PHONE_DISPLAY}</span>
              </a>
              <p className="reassure cta__reassure">
                <Check className="lucide" aria-hidden="true" />
                <span>This is a demonstration form. Nothing was transmitted or stored.</span>
              </p>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  )
}
