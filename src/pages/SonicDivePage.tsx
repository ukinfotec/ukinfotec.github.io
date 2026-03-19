import { useNavigate } from 'react-router-dom'
import IPhoneMockup from '../components/IPhoneMockup'
import styles from './SonicDivePage.module.css'

import logo from '../assets/sonicdive/logo.png'

const features = [
  {
    emoji: '🎵',
    title: 'Stream Your Library',
    desc: 'Connect to your Subsonic server and stream your entire music collection anywhere, beautifully.',
  },
  {
    emoji: '⏭️',
    title: 'Gapless Playback',
    desc: 'True gapless playback so albums flow exactly as they were meant to — no interruptions between tracks.',
  },
  {
    emoji: '📥',
    title: 'Offline Downloads',
    desc: 'Download tracks and albums for offline listening. Take your music wherever you go, even without a connection.',
  },
  {
    emoji: '🚗',
    title: 'CarPlay Support',
    desc: 'Full CarPlay integration for seamless listening on the road. Browse albums and playlists right from your dashboard.',
  },
  {
    emoji: '🎤',
    title: 'Artist Information',
    desc: 'Rich artist biographies, social links, and fan art powered by TheAudioDB — dive deeper into the music you love.',
  },
  {
    emoji: '🗂️',
    title: 'Multi-Server Support',
    desc: 'Manage and switch between multiple Subsonic servers effortlessly from a single app.',
  },
]

export default function SonicDivePage() {
  const navigate = useNavigate()

  const goBack = () => {
    window.scrollTo(0, 0)
    navigate('/')
  }

  return (
    <div className={styles.page}>

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.heroGrid} />
          <div className={styles.heroOrb1} />
          <div className={styles.heroOrb2} />
        </div>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <button onClick={goBack} className={styles.backLink}>← All Apps</button>
            <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div className={styles.appIconWrap}>
                <img src={logo} alt="SonicDive" className={styles.appIcon} />
              </div>
              <h1 className={styles.heroTitle}>SonicDive</h1>
            </div>
            <p className={styles.heroTagline}>A premium Subsonic client for iOS</p>
            <p className={styles.heroDesc}>
              SonicDive is a beautifully designed, native iOS app for streaming your personal
              Subsonic music library. Gapless playback, offline downloads, CarPlay support, and
              rich artist info — all in one place.
            </p>
            <div className={styles.heroActions}>
              <div className={styles.appStoreBadge}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                App Store — Coming Soon
              </div>
            </div>
          </div>
          <div className={styles.heroMockup}>
            <IPhoneMockup />
          </div>
        </div>
      </section>

      {/* ── Features ───────────────────────────────────────── */}
      <section className={styles.features}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.tag}>Features</div>
            <h2 className={styles.sectionTitle}>Your Music, Your Server, Your Way</h2>
          </div>
          <div className={styles.featureGrid}>
            {features.map(f => (
              <div key={f.title} className={styles.featureCard}>
                <span className={styles.featureEmoji}>{f.emoji}</span>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Screenshots ─────────────────────────────────────── */}
      <section className={styles.screenshots}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={`${styles.tag} ${styles.tagLight}`}>Screenshots</div>
            <h2 className={`${styles.sectionTitle} ${styles.sectionTitleLight}`}>See It in Action</h2>
          </div>
          <div className={styles.mockupRow}>
            <div className={styles.mockupSide}><IPhoneMockup /></div>
            <div className={styles.mockupCenter}><IPhoneMockup /></div>
            <div className={styles.mockupSide}><IPhoneMockup /></div>
          </div>
        </div>
      </section>

      {/* ── Free vs Pro ─────────────────────────────────────── */}
      <section className={styles.pricing}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={`${styles.tag} ${styles.tagLight}`}>Pricing</div>
            <h2 className={`${styles.sectionTitle} ${styles.sectionTitleLight}`}>Free to Stream, Pro to Download</h2>
          </div>
          <div className={styles.pricingRow}>
            <div className={styles.pricingCard}>
              <h3 className={styles.pricingTier}>Free</h3>
              <ul className={styles.pricingList}>
                <li>Unlimited streaming</li>
                <li>Full library browsing</li>
                <li>Playlists & favourites</li>
                <li>CarPlay support</li>
                <li>Artist info & biographies</li>
                <li>Multi-server management</li>
              </ul>
            </div>
            <div className={`${styles.pricingCard} ${styles.pricingCardPro}`}>
              <div className={styles.proBadge}>Pro</div>
              <h3 className={styles.pricingTier}>SonicDive Pro</h3>
              <p className={styles.pricingNote}>One-time purchase — no subscription</p>
              <ul className={styles.pricingList}>
                <li>Everything in Free</li>
                <li>Offline downloads</li>
                <li>Download queue management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaCard}>
            <span className={styles.ctaEmoji}>🎧</span>
            <h2 className={styles.ctaTitle}>SonicDive is Coming Soon</h2>
            <p className={styles.ctaDesc}>
              SonicDive is currently in development. Get in touch if you'd like to be
              notified when it launches or to join the beta.
            </p>
            <a href="/#contact" className={styles.ctaBtn}>Get Notified</a>
          </div>
        </div>
      </section>

    </div>
  )
}
