import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Opens the user's mail client with a pre-filled mailto
    const subject = encodeURIComponent(`Enquiry from ${form.name} – ${form.company}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\n\n${form.message}`
    )
    window.location.href = `mailto:hello@ukinfotec.co.uk?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.info}>
            <div className={styles.tag}>Get in Touch</div>
            <h2 className={styles.title}>Have an Idea? Let's Talk.</h2>
            <p className={styles.sub}>
              Got feedback on an app, a feature request, or just want to say hello?
              Drop a message — every one is read and replied to personally.
            </p>
            <div className={styles.contactItems}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📧</span>
                <div>
                  <div className={styles.contactLabel}>Email</div>
                  <a href="mailto:hello@ukinfotec.co.uk" className={styles.contactValue}>
                    hello@ukinfotec.co.uk
                  </a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <div>
                  <div className={styles.contactLabel}>Location</div>
                  <div className={styles.contactValue}>United Kingdom</div>
                </div>
              </div>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            {sent ? (
              <div className={styles.success}>
                <span>✅</span>
                <p>Your mail client should have opened. We look forward to hearing from you!</p>
              </div>
            ) : (
              <>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="name" className={styles.label}>Full Name</label>
                    <input
                      id="name" name="name" type="text" required
                      className={styles.input}
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="company" className={styles.label}>Company</label>
                    <input
                      id="company" name="company" type="text"
                      className={styles.input}
                      placeholder="Acme Ltd"
                      value={form.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className={styles.field}>
                  <label htmlFor="email" className={styles.label}>Email Address</label>
                  <input
                    id="email" name="email" type="email" required
                    className={styles.input}
                    placeholder="jane@example.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="message" className={styles.label}>How can we help?</label>
                  <textarea
                    id="message" name="message" rows={5} required
                    className={styles.textarea}
                    placeholder="Tell us about your IT environment and what you are looking for..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className={styles.submit}>
                  Send Enquiry
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
