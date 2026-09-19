import { projects } from '../data'

export default function Projects() {
  return (
    <section id="makers">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="kicker">Maker Kootam / projects</p>
            <h2>Things the floor has actually shipped.</h2>
          </div>
          <p>
            From GitHub learning spaces to civic hackathon prototypes — the kootam is a
            pile of unfinished courage and a few finished gifts.
          </p>
        </div>
        <div className="bento">
          {projects.map((p) => (
            <a key={p.title} href={p.href} target={p.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              <div>
                <span className="kind">{p.kind}</span>
                <h3>{p.title}</h3>
              </div>
              <p>{p.copy}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
