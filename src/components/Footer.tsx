import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <span className={styles.logoMark}>UK</span>
            <span className={styles.logoText}>Infotec</span>
          </div>
          <p className={styles.tagline}>Independent App Developer · UK</p>
        </div>
        <nav className={styles.links}>
          <a href="#apps">Apps</a>
          <Link to="/apps/tadah">Tadah</Link>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="/docs/PrivacyPolicy.md">Privacy Policy</a>
        </nav>
      </div>
      <div className={`container ${styles.bottom}`}>
        <p>&copy; {year} UK Infotec. All rights reserved.</p>
        <p>Registered in England &amp; Wales</p>
      </div>
    </footer>
  )
}
