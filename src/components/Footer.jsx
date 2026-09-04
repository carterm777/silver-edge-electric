import { Phone, Mail, MapPin, MessageSquare, Linkedin, Facebook, Instagram, ArrowUp } from 'lucide-react'
import { Stagger } from '../lib/motion.js'
import Mark from './Mark.jsx'
import {
  MISSION, FOOTER_SERVICES, FOOTER_LINKS,
  PHONE_DISPLAY, PHONE_TEL, PHONE_SMS, EMAIL, REGION,
} from '../data/site.js'
import './footer.css'

export default function Footer() {
  return (
    <footer className="ftr" id="footer">
      <div className="shell">
        <Stagger className="ftr__cols" itemClassName="ftr__cell" technique="rise" step={110}>
          <div className="ftr__col ftr__col--brand">
            <a href="#top" aria-label="Silver Edge Electric, back to top"><Mark /></a>
            <p className="ftr__mission">{MISSION}</p>
            <ul className="ftr__social list-reset">
              <li>
                <a href="#footer" aria-label="Silver Edge Electric on LinkedIn (placeholder link)">
                  <Linkedin className="lucide" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#footer" aria-label="Silver Edge Electric on Facebook (placeholder link)">
                  <Facebook className="lucide" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#footer" aria-label="Silver Edge Electric on Instagram (placeholder link)">
                  <Instagram className="lucide" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>

          <div className="ftr__col">
            <h3>Our Services</h3>
            <span className="edge ftr__col-edge" aria-hidden="true" />
            <ul className="ftr__links list-reset">
              {FOOTER_SERVICES.map((s) => (
                <li key={s}><a href="#services"><span className="tlink">{s}</span></a></li>
              ))}
            </ul>
          </div>

          <div className="ftr__col">
            <h3>Quick Links</h3>
            <span className="edge ftr__col-edge" aria-hidden="true" />
            <ul className="ftr__links list-reset">
              {FOOTER_LINKS.map((l) => (
                <li key={l.label}><a href={l.href}><span className="tlink">{l.label}</span></a></li>
              ))}
            </ul>
          </div>

          <div className="ftr__col">
            <h3>Silver Edge Electric</h3>
            <span className="edge ftr__col-edge" aria-hidden="true" />
            <ul className="ftr__contact list-reset">
              <li>
                <MapPin className="lucide" aria-hidden="true" />
                <span>{REGION}</span>
              </li>
              <li>
                <Phone className="lucide" aria-hidden="true" />
                <a href={PHONE_TEL}><span className="tlink">{PHONE_DISPLAY}</span></a>
              </li>
              <li>
                <MessageSquare className="lucide" aria-hidden="true" />
                <a href={PHONE_SMS}><span className="tlink">Text {PHONE_DISPLAY}</span></a>
              </li>
              <li>
                <Mail className="lucide" aria-hidden="true" />
                <a href={`mailto:${EMAIL}`}><span className="tlink">{EMAIL}</span></a>
              </li>
            </ul>
          </div>
        </Stagger>

        <div className="ftr__base">
          <p>&copy; {new Date().getFullYear()} Silver Edge Electric. Full-service electrical contracting across Southern Alberta.</p>
          <p className="ftr__note">
            Demonstration site. Address, email and social links are placeholders pending
            confirmation.
          </p>
          <a className="ftr__top" href="#top">
            <span className="tlink">Back To Top</span>
            <ArrowUp className="lucide" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
