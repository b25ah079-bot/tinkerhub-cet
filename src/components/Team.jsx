import { alumni, crew } from '../data'

export default function Team() {
  return (
    <section id="crew">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="kicker">Current core / locker wall</p>
            <h2>The execom is a set of open lockers.</h2>
          </div>
          <p>
            Names rotate with the academic year. Publicly documented roles sit beside seats
            that are meant to be claimed — because this community is bigger than a poster.
          </p>
        </div>
        <div className="crew-wall">
          {crew.map((c, i) => (
            <article key={c.name} className="polaroid" style={{ '--r': `${(i % 2 ? 2 : -2.4)}deg` }}>
              <div className="avatar" style={{ background: c.color }}>{c.initials}</div>
              <h3>{c.name}</h3>
              <p>{c.role}</p>
              <p>{c.note}</p>
            </article>
          ))}
        </div>
        <div className="section-head" style={{ marginTop: 48 }}>
          <div>
            <p className="kicker">People who built the weather</p>
            <h2>Alumni of the floor.</h2>
          </div>
        </div>
        <div className="event-board">
          {alumni.map((a) => (
            <article key={a.name} className="event yellow" style={{ minHeight: 180 }}>
              <span className="tag">{a.era}</span>
              <h3>{a.name}</h3>
              <p>{a.blurb}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
