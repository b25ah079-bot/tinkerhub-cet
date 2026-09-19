import { useState } from 'react'
import { socials } from '../data'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = data.get('name')
    const email = data.get('email')
    const message = data.get('message')
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`)
    window.location.href = `mailto:tinkercet@gmail.com?subject=${encodeURIComponent('TinkerHub CET — hello')}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="kicker">Contact</p>
            <h2>Pull up a chair. Or send a cable.</h2>
          </div>
          <p>Questions, partnerships, first-year nerves, alumni who want to teach a TECHBITE — the inbox is open.</p>
        </div>
        <div className="contact-grid">
          <form onSubmit={onSubmit}>
            <label>
              Name
              <input name="name" required placeholder="Your name" />
            </label>
            <label>
              Email
              <input name="email" type="email" required placeholder="you@cet.ac.in" />
            </label>
            <label>
              Message
              <textarea name="message" rows="5" required placeholder="I want to tinker…" />
            </label>
            <button className="solid" type="submit">{sent ? 'Opening mail…' : 'Send to tinkercet@gmail.com'}</button>
          </form>
          <aside className="contact-aside">
            <h3>Find us in the wild</h3>
            <p>College of Engineering Trivandrum · the workshop is a people, not a room number.</p>
            <div className="social-list">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                  {s.label} →
                </a>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
