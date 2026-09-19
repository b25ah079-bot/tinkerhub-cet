import { useState } from 'react'
import { timeline } from '../data'

export default function History() {
  const [active, setActive] = useState(0)
  const item = timeline[active]

  return (
    <section id="history">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="kicker">Into the history</p>
            <h2>An archive of people who kept the lights on.</h2>
          </div>
          <p>
            Execoms rotate. The workshop stays. Scroll the years — this is a living plaque
            for founders, campus leads, and unnamed volunteers who stacked chairs.
          </p>
        </div>
        <div className="timeline">
          <div className="years" role="tablist" aria-label="Chapter years">
            {timeline.map((t, i) => (
              <button key={t.year} className={i === active ? 'active' : ''} type="button" onClick={() => setActive(i)}>
                {t.year}
              </button>
            ))}
          </div>
          <article className="year-card">
            <p className="kicker">{item.year}</p>
            <h3 style={{ fontSize: '2rem', margin: '8px 0' }}>{item.title}</h3>
            <p className="lede">{item.copy}</p>
            <div className="people-row">
              {item.people.map((p) => <span key={p}>{p}</span>)}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
