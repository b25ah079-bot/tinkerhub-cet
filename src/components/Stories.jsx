import { stories } from '../data'

export default function Stories() {
  return (
    <section id="stories">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="kicker">Member stories</p>
            <h2>Proof that the workshop leaks into real life.</h2>
          </div>
          <p>Hackathon wins, fellowships, internships — told in their own words from the original chapter archive.</p>
        </div>
        <div className="story-rail">
          {stories.map((s) => (
            <article className="story" key={s.who}>
              <span className="kind">{s.badge}</span>
              <h3>{s.who}</h3>
              <q>{s.quote}</q>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
