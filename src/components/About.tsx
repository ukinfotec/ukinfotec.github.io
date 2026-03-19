import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.visual}>
          <div className={styles.card1}>
            <div className={styles.cardIcon}>🎯</div>
            <div className={styles.cardText}>
              <strong>Solo &amp; Independent</strong>
              <span>One developer, no committees</span>
            </div>
          </div>
          <div className={styles.card2}>
            <div className={styles.cardIcon}>🛠️</div>
            <div className={styles.cardText}>
              <strong>Full-Stack Builds</strong>
              <span>From concept to App Store</span>
            </div>
          </div>
          <div className={styles.bgBox} />
        </div>
        <div className={styles.text}>
          <div className={styles.tag}>About</div>
          <h2 className={styles.title}>Built by One Developer Who Cares</h2>
          <p className={styles.body}>
            UK Infotec is a one-person software studio. Every app is designed,
            developed, and maintained by the same pair of hands — which means no
            bloat, no hand-offs, and no one hiding behind a ticket queue.
          </p>
          <p className={styles.body}>
            The focus is on building tools that solve real problems simply and
            elegantly. If an app can't be explained in a sentence, it probably
            shouldn't be built.
          </p>
          <div className={styles.certs}>
            <span className={styles.cert}>Swift &amp; SwiftUI</span>
            <span className={styles.cert}>React &amp; TypeScript</span>
            <span className={styles.cert}>Node.js</span>
          </div>
        </div>
      </div>
    </section>
  )
}
