import { useState } from 'react'

const letters = 'BE KIND'.split('')

export default function Culture() {
  const [on, setOn] = useState(() => letters.map((ch) => ch === ' '))

  const toggle = (i) => {
    if (letters[i] === ' ') return
    setOn((arr) => arr.map((v, idx) => (idx === i ? !v : v)))
  }

  return (
    <section id="culture">
      <div className="wrap">
        <div className="kind-wall">
          <p className="kicker" style={{ color: 'rgba(255,255,255,0.6)' }}>TinkerHub culture, CET edition</p>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', margin: '8px 0 0' }}>
            Community is the stack. Kindness is the runtime.
          </h2>
          <div className="kind-letters" aria-label="Be kind interactive letters">
            {letters.map((ch, i) =>
              ch === ' ' ? (
                <span key={i} style={{ width: 18 }} />
              ) : (
                <button
                  key={`${ch}-${i}`}
                  type="button"
                  className={on[i] ? 'on' : ''}
                  style={{ '--r': `${(i % 2 ? 1 : -1) * 4}deg` }}
                  onClick={() => toggle(i)}
                >
                  {ch}
                </button>
              ),
            )}
          </div>
          <p style={{ opacity: 0.75, maxWidth: '40rem' }}>
            Tap the tiles. The parent community’s shortest manifesto still holds in our classrooms:
            be kind, learn in public, pay it forward. CET adds its own dialect — late-night labs,
            poster tape on pillars, and a hackathon that refuses to end at midnight.
          </p>
          <div className="culture-grid">
            <div className="card">
              <h3>How a week can feel</h3>
              <p>A Git workshop in an EC classroom. A first-year asking a final-year about internships. An Instagram live with an alumnus who still answers questions after the stream ends.</p>
            </div>
            <div className="card">
              <h3>House rules</h3>
              <div className="chips">
                <span>beginners first</span>
                <span>build in public</span>
                <span>no gatekeeping</span>
                <span>document it</span>
                <span>leave the room better</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
