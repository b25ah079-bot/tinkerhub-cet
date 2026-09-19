import { useState } from 'react'
import { nav } from '../data'
import Logo from './Logo'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <a className="brand" href="#top" onClick={() => setOpen(false)}>
        <Logo />
        <span>
          TinkerHub CET
          <small>College of Engineering Trivandrum</small>
        </span>
      </a>
      <button className="menu-btn" type="button" onClick={() => setOpen((v) => !v)}>
        {open ? 'Close' : 'Menu'}
      </button>
      <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Primary">
        {nav.map((item) => (
          <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>
          Join the floor
        </a>
      </nav>
    </header>
  )
}
