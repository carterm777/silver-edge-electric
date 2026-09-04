import { useEffect, useRef, useState } from 'react'
import { Phone, Mail, MapPin, ChevronDown } from 'lucide-react'
import { useScrollY, useMediaQuery } from '../lib/motion.js'
import Mark from './Mark.jsx'
import {
  NAV, SERVICE_LINKS, AREA_LINKS,
  PHONE_DISPLAY, PHONE_TEL, EMAIL, REGION,
} from '../data/site.js'
import './mark.css'
import './header.css'

const MENUS = {
  services: { title: 'Services', items: SERVICE_LINKS, href: '#services', cols: 3 },
  areas: { title: 'Service Areas', items: AREA_LINKS, href: '#service-areas', cols: 2 },
}

export default function Header() {
  const y = useScrollY()
  const scrolled = y > 24
  const isDesktop = useMediaQuery('(min-width: 901px)')
  const [open, setOpen] = useState(null)
  const navRef = useRef(null)
  const closeTimer = useRef(null)

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(null) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => () => clearTimeout(closeTimer.current), [])

  const hoverOpen = (key) => {
    if (!isDesktop) return
    clearTimeout(closeTimer.current)
    setOpen(key)
  }
  const hoverClose = () => {
    if (!isDesktop) return
    clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setOpen(null), 160)
  }

  return (
    <header className="hdr" data-scrolled={scrolled ? 'true' : 'false'} id="top">
      <div className="hdr__sub">
        <div className="shell shell--wide hdr__sub-inner">
          <a className="hdr__sub-item tlink" href={PHONE_TEL}>
            <Phone className="lucide" aria-hidden="true" />
            <span>{PHONE_DISPLAY}</span>
          </a>
          <a className="hdr__sub-item tlink" href={`mailto:${EMAIL}`}>
            <Mail className="lucide" aria-hidden="true" />
            <span>{EMAIL}</span>
          </a>
          <span className="hdr__sub-item">
            <MapPin className="lucide" aria-hidden="true" />
            <span>{REGION}</span>
          </span>
        </div>
      </div>

      <div className="hdr__bar">
        <div className="shell shell--wide hdr__bar-inner">
          <a className="hdr__brand" href="#top" aria-label="Silver Edge Electric, back to top">
            <Mark />
          </a>

          <nav className="hdr__nav" aria-label="Primary" ref={navRef}>
            <ul className="hdr__list list-reset">
              {NAV.map((item) => {
                const menu = item.menu ? MENUS[item.menu] : null
                const isOpen = open === item.menu
                return (
                  <li
                    key={item.label}
                    className="hdr__item"
                    onMouseEnter={() => menu && hoverOpen(item.menu)}
                    onMouseLeave={() => menu && hoverClose()}
                  >
                    <a className="hdr__link" href={item.href}>
                      <span>{item.label}</span>
                    </a>
                    {menu && (
                      <>
                        <button
                          type="button"
                          className="hdr__disc"
                          aria-expanded={isOpen}
                          aria-controls={`menu-${item.menu}`}
                          aria-label={`${item.label} menu`}
                          onClick={() => setOpen(isOpen ? null : item.menu)}
                        >
                          <ChevronDown className="lucide" aria-hidden="true" />
                        </button>
                        <div
                          id={`menu-${item.menu}`}
                          className="hdr__menu"
                          data-open={isOpen ? 'true' : 'false'}
                          data-cols={menu.cols}
                          hidden={!isOpen}
                        >
                          <span className="hdr__menu-edge" aria-hidden="true" />
                          <p className="hdr__menu-label">{menu.title}</p>
                          <ul className="hdr__menu-list list-reset">
                            {menu.items.map((s) => (
                              <li key={s}>
                                <a href={menu.href} onClick={() => setOpen(null)}>
                                  <span className="tlink">{s}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    )}
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="hdr__cta">
            <a className="btn btn--primary btn--sm hdr__call" href={PHONE_TEL}>
              <Phone className="lucide" aria-hidden="true" />
              <span className="hdr__call-num">{PHONE_DISPLAY}</span>
              <span className="hdr__call-word">Call Now</span>
            </a>
          </div>
        </div>
        <span className="hdr__edge" aria-hidden="true" />
      </div>
    </header>
  )
}
