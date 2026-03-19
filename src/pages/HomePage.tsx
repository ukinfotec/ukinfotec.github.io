import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import Apps from '../components/Apps'
import About from '../components/About'
import Contact from '../components/Contact'

export default function HomePage() {
  const { state } = useLocation()

  useEffect(() => {
    const target = (state as { scrollTo?: string } | null)?.scrollTo
    if (target) {
      // Small delay to allow the page to render before scrolling
      const id = setTimeout(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })
      }, 50)
      return () => clearTimeout(id)
    }
  }, [state])

  return (
    <>
      <Hero />
      <Apps />
      <About />
      <Contact />
    </>
  )
}
