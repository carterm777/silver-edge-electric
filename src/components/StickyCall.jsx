import { Phone, MessageSquare } from 'lucide-react'
import { useScrollY } from '../lib/motion.js'
import { PHONE_DISPLAY, PHONE_TEL, PHONE_SMS } from '../data/site.js'
import './sticky.css'

export default function StickyCall() {
  const y = useScrollY()
  const shown = y > 460
  return (
    <div className="sticky-call" data-shown={shown ? 'true' : 'false'} aria-hidden={!shown}>
      <span className="edge sticky-call__edge" data-in="true" aria-hidden="true" />
      <a className="sticky-call__main" href={PHONE_TEL} tabIndex={shown ? 0 : -1}>
        <Phone className="lucide" aria-hidden="true" />
        <span>Call {PHONE_DISPLAY}</span>
      </a>
      <a className="sticky-call__alt" href={PHONE_SMS} aria-label="Text Silver Edge Electric" tabIndex={shown ? 0 : -1}>
        <MessageSquare className="lucide" aria-hidden="true" />
      </a>
    </div>
  )
}
