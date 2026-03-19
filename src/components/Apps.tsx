import { Link } from 'react-router-dom'
import styles from './Apps.module.css'

interface App {
  icon: string
  name: string
  tagline: string
  description: string
  platforms: string[]
  status: 'live' | 'coming-soon'
  route?: string
  link?: string
}

const apps: App[] = [
  {
    icon: '✅',
    name: 'Tadah',
    tagline: 'Task management that rewards you',
    description: 'Fun, rewarding task management with achievements, daily streaks, custom lists, categories, and a calendar view. Because getting things done should feel good.',
    platforms: ['iOS'],
    status: 'coming-soon',
    route: '/apps/tadah',
  },
]

export default function Apps() {
  return (
    <section id="apps" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.tag}>Our Apps</div>
          <h2 className={styles.title}>What We're Building</h2>
          <p className={styles.sub}>
            Small, focused tools designed to do one thing really well.
          </p>
        </div>
        <div className={styles.grid}>
          {apps.map(app => (
            <div key={app.name} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.icon}>{app.icon}</div>
                <span className={`${styles.status} ${styles[app.status]}`}>
                  {app.status === 'live' ? 'Live' : 'Coming Soon'}
                </span>
              </div>
              <h3 className={styles.appName}>{app.name}</h3>
              <p className={styles.tagline}>{app.tagline}</p>
              <p className={styles.desc}>{app.description}</p>
              <div className={styles.footer}>
                <div className={styles.platforms}>
                  {app.platforms.map(p => (
                    <span key={p} className={styles.platform}>{p}</span>
                  ))}
                </div>
                {app.route && (
                  <Link to={app.route} className={styles.link}>
                    Learn More →
                  </Link>
                )}
                {app.link && app.status === 'live' && (
                  <a href={app.link} className={styles.link} target="_blank" rel="noopener noreferrer">
                    View App →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
