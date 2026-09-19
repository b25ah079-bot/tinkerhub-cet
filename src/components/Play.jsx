import { useEffect, useRef, useState } from 'react'

const PALETTE = 6
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

export default function Play() {
  const [seq, setSeq] = useState([0, 2, 4])
  const [lit, setLit] = useState(-1)
  const [level, setLevel] = useState(1)
  const [status, setStatus] = useState('Watch the mosaic. Repeat it.')
  const [locked, setLocked] = useState(true)
  const step = useRef(0)

  const flash = async (pattern) => {
    setLocked(true)
    for (const n of pattern) {
      setLit(n)
      await sleep(420)
      setLit(-1)
      await sleep(140)
    }
    setLocked(false)
    setStatus('Your turn.')
  }

  useEffect(() => {
    flash(seq)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const press = async (n) => {
    if (locked) return
    setLit(n)
    await sleep(160)
    setLit(-1)
    if (n !== seq[step.current]) {
      setStatus('Desoldered. Watch again.')
      step.current = 0
      await sleep(500)
      flash(seq)
      return
    }
    step.current += 1
    if (step.current === seq.length) {
      const next = [...seq, Math.floor(Math.random() * PALETTE)]
      setSeq(next)
      setLevel((l) => l + 1)
      step.current = 0
      setStatus(`Level ${level + 1}. The workshop remembers.`)
      await sleep(500)
      flash(next)
    }
  }

  return (
    <section id="play">
      <div className="wrap">
        <div className="play">
          <div className="play-layout">
            <div>
              <p className="kicker" style={{ color: 'rgba(255,255,255,0.55)' }}>Mini-game · Mosaic memory</p>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Can you hold a pattern the way a community does?</h2>
              <p className="play-meta">Level {level} · {status}</p>
              <p style={{ opacity: 0.75 }}>
                Repeat the lights. Each round adds a tile — like a year of execom handing notes to the next.
                Type <b>BEKIND</b> anywhere on the site for a secret workshop.
              </p>
            </div>
            <div className="board" role="group" aria-label="Mosaic memory board">
              {Array.from({ length: PALETTE }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`cell c${i} ${lit === i ? 'lit' : ''}`}
                  onClick={() => press(i)}
                  aria-label={`Tile ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
