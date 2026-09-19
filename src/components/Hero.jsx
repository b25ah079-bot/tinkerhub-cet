import { useRef, useState } from 'react'
import { stickers } from '../data'

export default function Hero() {
  const bench = useRef(null)
  const [notes, setNotes] = useState(stickers)

  const onPointerDown = (event, id) => {
    const node = bench.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    const move = (e) => {
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      setNotes((list) =>
        list.map((s) => (s.id === id ? { ...s, x: Math.min(88, Math.max(4, x)), y: Math.min(86, Math.max(6, y)) } : s)),
      )
    }
    const up = () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', up)
    }
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', up)
    event.currentTarget.setPointerCapture?.(event.pointerId)
  }

  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="kicker">Official campus chapter · est. 2019</p>
        <h1>
          A campus that
          <br />
          <em>tinkers out loud.</em>
        </h1>
        <p className="lede">
          TinkerHub CET is a student-run workshop at College of Engineering Trivandrum.
          No barriers to entry. Peer learning, messy desks, hackathons that last 36 hours,
          and a community that still believes being kind is a technical skill.
        </p>
        <div className="hero-actions">
          <a className="solid" href="#crew">Meet the crew</a>
          <a className="ghost" href="#play">Play mosaic memory</a>
        </div>
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {Array.from({ length: 2 }).flatMap((_, i) =>
              ['Be kind', 'Learn in public', 'No barriers', 'Pay it forward', 'Maker Kootam', 'CODE reCET', 'Just tink'].map(
                (t) => <span key={`${t}-${i}`}>{t} ★</span>,
              ),
            )}
          </div>
        </div>
      </div>

      <div className="bench" ref={bench}>
        <div className="bench-grid" />
        <div className="mosaic" aria-hidden="true">
          <div className="tile" />
          <div className="tile" />
          <div className="tile" />
          <div className="tile" />
          <div className="tile" />
        </div>
        <div className="logo-word">
          TinkerHub
          <span>CET</span>
        </div>
        {notes.map((s) => (
          <button
            key={s.id}
            type="button"
            className="sticker"
            style={{ left: `${s.x}%`, top: `${s.y}%`, transform: `rotate(${s.rot}deg)`, background: s.color }}
            onPointerDown={(e) => onPointerDown(e, s.id)}
          >
            {s.text}
          </button>
        ))}
      </div>
    </section>
  )
}
