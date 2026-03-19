import { Link } from 'react-router-dom'
import IPhoneMockup from '../components/IPhoneMockup'
import styles from './TadahPage.module.css'

import tadahTitle from '../assets/tadah/Tadah Title-White.png'
import iosIcon from '../assets/tadah/ios-icon-tadah.png'
import screenshot1 from '../assets/tadah/screenshot-1.png'
import screenshot2 from '../assets/tadah/screenshot-2.png'
import screenshot3 from '../assets/tadah/screenshot-3.png'
import screenshot4 from '../assets/tadah/screenshot-4.png'
import screenshot5 from '../assets/tadah/screenshot-5.png'

const features = [
  {
    emoji: '🏆',
    title: 'Achievements',
    desc: 'Unlock achievements as you hit milestones. Every task completed is a step toward something to celebrate.',
  },
  {
    emoji: '🔥',
    title: 'Streaks',
    desc: "Keep your momentum going with daily streaks. Miss a day? No guilt — just pick up where you left off.",
  },
  {
    emoji: '📋',
    title: 'Custom Lists',
    desc: 'Build lists that match how your brain works. Work tasks, errands, side projects — all in one place.',
  },
  {
    emoji: '🗂️',
    title: 'Categories',
    desc: 'Colour-coded categories give you instant clarity at a glance. Group, filter, and focus.',
  },
  {
    emoji: '📅',
    title: 'Calendar View',
    desc: 'See your tasks mapped to the week ahead. Visualise your workload and stay ahead of deadlines.',
  },
  {
    emoji: '✨',
    title: 'Made to Delight',
    desc: 'Smooth animations, satisfying interactions, and a design that makes you actually want to open it.',
  },
]

export default function TadahPage() {
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
            <Link to="/" className={styles.backLink}>← All Apps</Link>
            <div className={styles.appIconWrap}>
              <img src={iosIcon} alt="iOS Icon" className={styles.appIcon} />
            </div>
            <div className={styles.badge}>iOS App · Coming Soon</div>
            <h1 className={styles.heroTitle}><img src={tadahTitle} alt="Tadah" width="200" /></h1>
            <p className={styles.heroTagline}>Task management that actually rewards you</p>
            <p className={styles.heroDesc}>
              Tadah turns your to-do list into something you look forward to. Earn
              achievements, keep streaks alive, and stay on top of everything with
              custom lists, categories, and a calendar view — all wrapped in an
              interface that makes you smile.
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
            <IPhoneMockup src={screenshot5} srcAlt={screenshot1} />
          </div>
        </div>
      </section>

      {/* ── Features ───────────────────────────────────────── */}
      <section className={styles.features}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.tag}>Features</div>
            <h2 className={styles.sectionTitle}>Everything You Need, Nothing You Don't</h2>
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
            <div className={styles.mockupSide}><IPhoneMockup src={screenshot2} /></div>
            <div className={styles.mockupCenter}><IPhoneMockup src={screenshot3} /></div>
            <div className={styles.mockupSide}><IPhoneMockup src={screenshot4} /></div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaCard}>
            <span className={styles.ctaEmoji}>🎉</span>
            <h2 className={styles.ctaTitle}>Tadah is Coming Soon</h2>
            <p className={styles.ctaDesc}>
              Tadah is currently in development. Get in touch if you'd like to be
              notified when it launches or to join the beta.
            </p>
            <a href="/#contact" className={styles.ctaBtn}>Get Notified</a>
          </div>
        </div>
      </section>

    </div>
  )
}
