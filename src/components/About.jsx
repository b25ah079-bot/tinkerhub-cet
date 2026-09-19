import { pillars, stats } from '../data'

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="kicker">About the chapter</p>
            <h2>Not a club you apply to. A floor you walk onto.</h2>
          </div>
          <p>
            The idea is simple: expose CETians to people, tools, and problems outside the
            curriculum — across departments, across years, without a velvet rope.
          </p>
        </div>
        <div className="about-grid">
          <article className="manifesto">
            <blockquote>
              “A student initiative, the key separator being that it is a community for all,
              with absolutely no barriers to entry.”
            </blockquote>
            <p className="lede" style={{ marginTop: 18 }}>
              We host sessions, ship projects that try to give something back, open internship
              pipelines, and keep a mentorship net from first-years to alumni in Amsterdam.
              Regular meetings. Open GitHub. Chaya optional, curiosity not.
            </p>
            <div className="stat-row">
              {stats.map((s) => (
                <div className="stat" key={s.label}>
                  <b>{s.value}</b>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </article>
          <div className="pillar-list">
            {pillars.map((p) => (
              <article className="pillar" key={p.code}>
                <code>{p.code}</code>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
