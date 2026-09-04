import { useEffect, useRef, useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Info } from 'lucide-react'
import { Reveal, useCountUp, useMediaQuery, prefersReducedMotion } from '../lib/motion.js'
import { REVIEWS } from '../data/site.js'
import './reviews.css'

function Stars({ label }) {
  return (
    <span className="rv__stars" role="img" aria-label={label}>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className="lucide" fill="currentColor" aria-hidden="true" />
      ))}
    </span>
  )
}

function GoogleMark() {
  return (
    <svg className="rv__g" viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
    </svg>
  )
}

export default function Reviews() {
  const perView = useMediaQuery('(min-width: 901px)') ? 2 : 1
  const maxIndex = Math.max(0, REVIEWS.length - perView)
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [ratingRef, rating] = useCountUp(4.9, { decimals: 1, duration: 1500 })
  const [countRef, count] = useCountUp(38, { duration: 1500 })
  const trackRef = useRef(null)

  useEffect(() => { setIndex((i) => Math.min(i, maxIndex)) }, [maxIndex])

  useEffect(() => {
    if (paused || prefersReducedMotion()) return
    const t = setInterval(() => setIndex((i) => (i >= maxIndex ? 0 : i + 1)), 6500)
    return () => clearInterval(t)
  }, [paused, maxIndex])

  const go = (dir) => setIndex((i) => Math.min(maxIndex, Math.max(0, i + dir)))

  return (
    <section className="section rv" id="reviews" aria-labelledby="rv-title">
      <div className="shell">
        <Reveal className="rv__head" technique="rise">
          <div className="sec-head">
            <p className="eyebrow">Google Reviews</p>
            <h2 id="rv-title">Rated By The People Who Hired Us</h2>
          </div>
          <p className="placeholder-note">
            <Info className="lucide" aria-hidden="true" />
            Placeholder reviews — replace with the live Google Business Profile feed before launch
          </p>
        </Reveal>

        {/* Aggregate callout */}
        <Reveal className="rv__agg" technique="rise" delay={90}>
          <span className="edge rv__agg-edge" aria-hidden="true" />
          <div className="rv__agg-score">
            <span className="rv__figure" ref={ratingRef}>{rating.toFixed(1)}</span>
            <span className="rv__outof">out of 5</span>
          </div>
          <div className="rv__agg-meta">
            <Stars label="Rated 4.9 out of 5 stars" />
            <p className="rv__agg-line">
              Based on <span ref={countRef}>{count}</span> Google reviews
            </p>
            <p className="rv__agg-context">
              Collected from commercial, industrial, and residential clients across
              Southern Alberta.
            </p>
          </div>
          <div className="rv__agg-source">
            <GoogleMark />
            <span>
              <strong>Google</strong>
              Business Profile
            </span>
          </div>
        </Reveal>

        {/* Carousel */}
        <div
          className="rv__carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <div className="rv__bar">
            <p className="rv__bar-label">
              Showing {Math.min(index + perView, REVIEWS.length)} of {REVIEWS.length}
            </p>
            <div className="rv__nav">
              <button
                type="button"
                className="rv__btn"
                onClick={() => go(-1)}
                disabled={index === 0}
                aria-label="Previous reviews"
              >
                <ChevronLeft className="lucide" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="rv__btn"
                onClick={() => go(1)}
                disabled={index >= maxIndex}
                aria-label="Next reviews"
              >
                <ChevronRight className="lucide" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="rv__viewport">
            <ul
              className="rv__track list-reset"
              ref={trackRef}
              style={{ '--i': index }}
              aria-live="polite"
            >
              {REVIEWS.map((r, i) => (
                <li
                  className="rv__slide"
                  key={r.name}
                  aria-hidden={i < index || i >= index + perView ? 'true' : undefined}
                >
                  <article className="rv__quote">
                    <Stars label="Five out of five stars" />
                    <blockquote>
                      <p>{r.quote}</p>
                    </blockquote>
                    <footer className="rv__by">
                      <cite>{r.name}</cite>
                      {r.role && <span className="rv__role">{r.role}</span>}
                    </footer>
                  </article>
                </li>
              ))}
            </ul>
          </div>

          <div className="rv__rail" aria-hidden="true">
            <span
              className="rv__rail-fill"
              style={{
                '--w': `${(1 / (maxIndex + 1)) * 100}%`,
                '--x': `${index * 100}%`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
