import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

const sectionLinks = [
  { label: 'Apps', section: 'apps' },
  { label: 'About', section: 'about' },
  { label: 'Contact', section: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleSection = (e: React.MouseEvent, section: string) => {
    e.preventDefault()
    setMenuOpen(false)
    if (location.pathname === '/') {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/', { state: { scrollTo: section } })
    }
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoMark}>UK</span>
          <span className={styles.logoText}>Infotec</span>
        </Link>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          {sectionLinks.map(link => (
            <a
              key={link.section}
              href={`#${link.section}`}
              className={styles.navLink}
              onClick={e => handleSection(e, link.section)}
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/apps/tadah"
            className={styles.navLink}
            onClick={() => setMenuOpen(false)}
          >
            Tadah
          </Link>
          <a
            href="#contact"
            className={styles.cta}
            onClick={e => handleSection(e, 'contact')}
          >
            Get in Touch
          </a>
        </nav>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? styles.burgerLineOpen1 : styles.burgerLine} />
          <span className={menuOpen ? styles.burgerLineHidden : styles.burgerLine} />
          <span className={menuOpen ? styles.burgerLineOpen2 : styles.burgerLine} />
        </button>
      </div>
    </header>
  )
}
