import { useNavigate } from 'react-router-dom'
import styles from './TadahPrivacyPage.module.css'

const sections = [
  {
    title: 'Introduction',
    content: (
      <p>
        <strong>Tadah</strong> (<em>"the App"</em>) is developed by <em>Richard P</em> (<em>"we", "us", "our"</em>).
        This privacy policy explains how we handle information when you use the App.
      </p>
    ),
  },
  {
    title: 'Information We Collect',
    content: (
      <p>
        We do not collect, store, or transmit any personal information. The App does not require an
        account, login, or registration of any kind.
      </p>
    ),
  },
  {
    title: 'Data Storage',
    content: (
      <p>
        All data you create in the App — including task lists, tasks, categories, achievements, and
        preferences — is stored locally on your device. If you have <em>iCloud</em> enabled, your data
        is synced across your devices using <em>Apple's CloudKit</em> service. This data is stored in
        your personal <em>iCloud</em> account and is not accessible to us.
        <br /><br />
        Local preferences (such as display settings) are stored on-device using <em>UserDefaults</em> and
        are never transmitted.
      </p>
    ),
  },
  {
    title: 'Third-Party Services',
    content: (
      <>
        <p>The App uses the following Apple services:</p>
        <ul>
          <li>
            <strong>Apple CloudKit (iCloud):</strong> Used to sync your data across your devices. This
            data is governed by Apple's privacy policy and stored in your personal iCloud account. We do
            not have access to your iCloud data.
          </li>
          <li>
            <strong>Apple StoreKit:</strong> Used to process in-app purchases. All payment information is
            handled entirely by Apple. We do not receive, store, or have access to any payment or
            financial information.
          </li>
        </ul>
        <p><strong>The App does not use any third-party analytics, advertising, or tracking services.</strong></p>
      </>
    ),
  },
  {
    title: 'Data Sharing',
    content: (
      <p>
        We do not share, sell, or disclose any user data to third parties. We do not have access to any
        of your data.
      </p>
    ),
  },
  {
    title: 'Data Retention',
    content: (
      <p>
        Since all data is stored locally on your device and in your personal <em>iCloud</em> account, you
        have full control over your data at all times. You can delete all app data by deleting the App
        from your device. <em>iCloud</em> data can be managed through your device's <em>iCloud</em> settings.
      </p>
    ),
  },
  {
    title: "Children's Privacy",
    content: (
      <p>
        The App does not knowingly collect any personal information from anyone, including children under
        the age of 13. Since no personal data is collected, the App is suitable for use by all ages.
      </p>
    ),
  },
  {
    title: 'Changes to This Policy',
    content: (
      <p>
        We may update this privacy policy from time to time. Any changes will be reflected by the "Last
        updated" date at the top of this page.
      </p>
    ),
  },
  {
    title: 'Contact',
    content: (
      <p>
        If you have any questions about this privacy policy, please contact us at:{' '}
        <a href="mailto:apps@ukinfotec.com">apps@ukinfotec.com</a>
      </p>
    ),
  },
]

export default function TadahPrivacyPage() {
  const navigate = useNavigate()

  return (
    <div className={styles.page}>
      <div className={styles.heroBg}>
        <div className={styles.heroGrid} />
        <div className={styles.heroOrb} />
      </div>

      <div className={`container ${styles.inner}`}>
        <button onClick={() => navigate('/apps/tadah')} className={styles.backLink}>
          ← Back to Tadah
        </button>

        <header className={styles.header}>
          <div className={styles.tag}>Legal</div>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.meta}>
            <strong>Tadah</strong> &nbsp;·&nbsp; Version 1.0 &nbsp;·&nbsp; Last updated: 19 March 2026
          </p>
        </header>

        <div className={styles.content}>
          {sections.map(s => (
            <section key={s.title} className={styles.section}>
              <h2 className={styles.sectionTitle}>{s.title}</h2>
              <div className={styles.sectionBody}>{s.content}</div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
