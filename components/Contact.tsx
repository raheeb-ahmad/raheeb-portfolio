import styles from './Contact.module.css'

const socials = [
  { label: 'GitHub', url: 'https://github.com/raheeb-ahmad', handle: '@raheeb-ahmad' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/raheeb-ahmad/', handle: 'raheeb-ahmad' },
  { label: 'Instagram', url: 'https://www.instagram.com/raheeb_ahmad/', handle: '@raheeb_ahmad' },
  { label: 'itch.io', url: 'https://rfantasy.itch.io/', handle: 'rfantasy' },
]

export default function Contact() {
  return (
    <section id="contact" className="section-wrapper">
      <div className="container">
        <p className="section-label">// 04. CONNECT</p>
        <h2 className="section-title">
          GET IN <span>TOUCH</span>
        </h2>
        <div className="neon-line" />

        <div className={styles.layout}>
          <div className={styles.left}>
            <p className={styles.tagline}>
              Open to roles in <span className={styles.ac}>AI/LLM tooling</span>, <span className={styles.ac}>game development</span>, and <span className={styles.acMag}>applied AI engineering</span>.
              Based in Lahore — available remotely.
            </p>

            <a href="mailto:raheebahmad1062@gmail.com" className={styles.emailBtn}>
              <span className={styles.emailLabel}>SEND MESSAGE</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <div className={styles.right}>
            <h3 className={styles.socialTitle}>FIND ME AT</h3>
            <div className={styles.socials}>
              {socials.map(s => (
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className={styles.socialItem}>
                  <span className={styles.socialLabel}>{s.label}</span>
                  <span className={styles.socialHandle}>{s.handle}</span>
                  <span className={styles.socialArrow}>→</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <p className={styles.footerLeft}>
            <span className={styles.footerCode}>{'<'}</span>
            Built with Next.js · Deployed on Vercel · No templates
            <span className={styles.footerCode}>{' />'}</span>
          </p>
          <p className={styles.footerRight}>
            © 2025 Raheeb Ahmad
          </p>
        </div>
      </div>
    </section>
  )
}
