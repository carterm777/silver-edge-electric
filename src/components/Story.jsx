import { Reveal, useScrub } from '../lib/motion.js'
import { STORY } from '../data/site.js'
import './story.css'

function Beat({ item }) {
  const ref = useScrub({ disableBelow: 901 })
  return (
    <li className="story__beat" ref={ref}>
      <span className="story__tick" aria-hidden="true" />
      <h3>{item.marker}</h3>
      <p>{item.body}</p>
    </li>
  )
}

export default function Story() {
  return (
    <section className="section story" id="about" aria-labelledby="story-title">
      <div className="shell story__grid">
        <Reveal className="story__aside" technique="rise">
          <figure className="frame story__frame">
            <span className="photo story__photo">
              <img
                src="/images/about-crew.webp"
                alt="A five-person electrical crew standing in front of two service vans inside a shop"
                loading="lazy"
                decoding="async"
                width="2000"
                height="1125"
                data-reveal="settle"
              />
            </span>
            <figcaption>The crew that shows up when the schedule says so.</figcaption>
          </figure>

          <div className="story__stat">
            <span className="story__stat-figure">10+</span>
            <span className="story__stat-label">
              Years contracting commercial, industrial and residential electrical work in
              Southern Alberta
            </span>
          </div>
        </Reveal>

        <div className="story__main">
          <Reveal className="story__head" technique="rise">
            <p className="eyebrow">Our Story</p>
            <h2 id="story-title">Ten Years Of Projects, One Way Of Working</h2>
          </Reveal>

          <ol className="story__beats list-reset">
            {STORY.map((item) => (
              <Beat key={item.marker} item={item} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
