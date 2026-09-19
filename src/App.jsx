import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Culture from './components/Culture'
import Events from './components/Events'
import Projects from './components/Projects'
import History from './components/History'
import Team from './components/Team'
import Stories from './components/Stories'
import Play from './components/Play'
import Contact from './components/Contact'
import { Footer, MosaicCursor, Secret } from './components/Chrome'

export default function App() {
  const [secret, setSecret] = useState(false)

  useEffect(() => {
    let buffer = ''
    const onKey = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      buffer = (buffer + e.key).slice(-6).toUpperCase()
      if (buffer.includes('BEKIND')) setSecret(true)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <a className="skip" href="#about">Skip to content</a>
      <MosaicCursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Culture />
        <Events />
        <Projects />
        <History />
        <Team />
        <Stories />
        <Play />
        <Contact />
      </main>
      <Footer />
      <Secret open={secret} onClose={() => setSecret(false)} />
    </>
  )
}
