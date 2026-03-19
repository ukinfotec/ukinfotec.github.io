import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <div className={styles.grid} />
        <div className={styles.orb1} />
        <div className={styles.orb2} />
      </div>
      <div className={`container ${styles.content}`}>
        <div className={styles.badge}>Independent App Developer</div>
        <h1 className={styles.headline}>
          Apps Crafted with<br />
          <span className={styles.accent}>Purpose &amp; Precision</span>
        </h1>
        <p className={styles.sub}>
          UK Infotec is an independent software studio building focused, well-designed
          apps for iOS and the web. Less clutter, more craft.
        </p>
        <div className={styles.actions}>
          <a href="#apps" className={styles.btnPrimary}>See Our Apps</a>
          <a href="#contact" className={styles.btnSecondary}>Get in Touch</a>
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>Mobile</span>
            <span className={styles.statLabel}>iOS &amp; Android</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>Web</span>
            <span className={styles.statLabel}>React &amp; TypeScript</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>Solo</span>
            <span className={styles.statLabel}>Independent Studio</span>
          </div>
        </div>
      </div>
    </section>
  )
}
