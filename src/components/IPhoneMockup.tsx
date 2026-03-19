import { useState, useEffect } from 'react'
import styles from './IPhoneMockup.module.css'

interface IPhoneMockupProps {
  src?: string
  srcAlt?: string   // when provided, crossfades between src and srcAlt on a timer
  alt?: string
}

const DISPLAY_MS = 3000   // how long each image is shown
const FADE_MS   = 800     // CSS transition duration (must match --fade-ms in CSS)

export default function IPhoneMockup({ src, srcAlt, alt = 'App screenshot' }: IPhoneMockupProps) {
  const [showAlt, setShowAlt] = useState(false)

  useEffect(() => {
    if (!src || !srcAlt) return
    const id = setInterval(() => setShowAlt(v => !v), DISPLAY_MS + FADE_MS)
    return () => clearInterval(id)
  }, [src, srcAlt])

  return (
    <div className={styles.phone}>
      <div className={styles.buttons} />
      <div className={styles.screen}>
        <div className={styles.dynamicIsland} />
        <div className={styles.display}>
          {src ? (
            <>
              <img
                src={src}
                alt={alt}
                className={`${styles.screenshot} ${styles.screenshotA} ${showAlt ? styles.hidden : ''}`}
              />
              {srcAlt && (
                <img
                  src={srcAlt}
                  alt={alt}
                  className={`${styles.screenshot} ${styles.screenshotB} ${showAlt ? '' : styles.hidden}`}
                />
              )}
            </>
          ) : (
            <div className={styles.placeholder}>
              <span className={styles.placeholderIcon}>📱</span>
              <span className={styles.placeholderText}>Screenshot coming soon</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
