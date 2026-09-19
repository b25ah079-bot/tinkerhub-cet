import { useEffect, useState } from 'react'

const COLORS = ['#3ec6c9', '#f5c518', '#e85d4c', '#7cb342', '#1a4d8f']

export function MosaicCursor() {
  const [pos, setPos] = useState({ x: -40, y: -40, c: COLORS[0] })

  useEffect(() => {
    const move = (e) => {
      setPos({
        x: e.clientX,
        y: e.clientY,
        c: COLORS[Math.floor((e.clientX + e.clientY) / 80) % COLORS.length],
      })
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])

  return <div className="mosaic-cursor" style={{ left: pos.x, top: pos.y, background: pos.c }} />
}

export function Secret({ open, onClose }) {
  if (!open) return null
  return (
    <div className="secret" role="dialog" aria-modal="true">
      <div>
        <p className="kicker" style={{ color: '#f5c518' }}>Easter egg unlocked</p>
        <h2>The secret workshop</h2>
        <p>You typed BEKIND. That is still the only password that matters here.</p>
        <pre>{`
  [cyan][navy]
  [yellow][coral]
  [green][green]

  TinkerHub CET · since 2019
  no barriers / learn in public
        `}</pre>
        <button className="solid" type="button" onClick={onClose}>Back to the floor</button>
      </div>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <span>© TinkerHub CET · College of Engineering Trivandrum</span>
      <span>A redesign of the campus chapter site — mosaic kept, layout reinvented.</span>
    </footer>
  )
}
