import { useMemo, useState } from 'react'
import { events } from '../data'

export default function Events() {
  const [filter, setFilter] = useState('All')
  const tags = useMemo(() => ['All', ...new Set(events.map((e) => e.tag))], [])
  const list = filter === 'All' ? events : events.filter((e) => e.tag === filter)

  return (
    <section id="events">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="kicker">Events / activities</p>
            <h2>Rooms that become rituals.</h2>
          </div>
          <p>
            Workshops, live alumni hours, statewide maker days, and a 36-hour hackathon
            that now belongs to CET’s calendar.
          </p>
        </div>
        <div className="event-toolbar">
          {tags.map((t) => (
            <button key={t} className={`filter ${filter === t ? 'active' : ''}`} type="button" onClick={() => setFilter(t)}>
              {t}
            </button>
          ))}
        </div>
        <div className="event-board">
          {list.map((e, i) => (
            <article key={e.title} className={`event ${e.hue}`} style={{ '--tilt': `${i % 2 ? 1.2 : -1.4}deg` }}>
              <div>
                <span className="tag">{e.tag} · {e.year}</span>
                <h3>{e.title}</h3>
              </div>
              <p>{e.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
