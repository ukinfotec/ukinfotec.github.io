import { Link, useNavigate, useLocation } from 'react-router-dom'
import styles from './Footer.module.css'

const sectionLinks = [
  { label: 'Apps', section: 'apps' },
  { label: 'About', section: 'about' },
  { label: 'Contact', section: 'contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  const navigate = useNavigate()
  const location = useLocation()

  const handleSection = (e: React.MouseEvent, section: string) => {
    e.preventDefault()
    if (location.pathname === '/') {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/', { state: { scrollTo: section } })
    }
  }

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <span className={styles.logoDiamond} aria-hidden="true" />
            <span className={styles.logoText}>
              <span className={styles.logoUK}>UK</span>Infotec
            </span>
          </div>
          <p className={styles.tagline}>Independent App Developer</p>
        </div>
        <nav className={styles.links}>
          {sectionLinks.map(link => (
            <a
              key={link.section}
              href={`#${link.section}`}
              onClick={e => handleSection(e, link.section)}
            >
              {link.label}
            </a>
          ))}
          <Link to="/apps/tadah">Tadah</Link>
          <a href="/docs/PrivacyPolicy.md">Privacy Policy</a>
        </nav>
      </div>
      <div className={`container ${styles.bottom}`}>
        <p>&copy; {year} UK Infotec. All rights reserved.</p>
      </div>
    </footer>
  )
}
