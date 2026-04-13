import styles from './About.module.css'

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '50+', label: 'Shipped + Contributed Projects' },
  { value: '100M+', label: 'Player Downloads' },
  { value: '1', label: 'Steam Projects' },
]

export default function About() {
  return (
    <section id="about" className="section-wrapper">
      <div className="container">
        <p className="section-label">// 01. ABOUT</p>
        <h2 className="section-title">
          WHO AM <span>I</span>
        </h2>
        <div className="neon-line" />

        <div className={styles.layout}>
          <div className={styles.text}>
            <p className={styles.para}>
              Software Engineer and game developer based in <span className={styles.ac}>Lahore, Pakistan</span>.
              Currently at <span className={styles.ac}>Geniteam</span>, working on signature mobile titles with millions of downloads.
            </p>
            <p className={styles.para}>
              Beyond shipping games, I build <span className={styles.acMag}>AI tooling for game development</span> —
              specifically <strong>EditorMind MCP</strong>, an open-source Unity Editor AI bridge using the Model Context Protocol.
              Long-term vision: autonomous AI playtesting.
            </p>
            <p className={styles.para}>
              Also developing <span className={styles.ac}>The Hawala Network</span> — a post-apocalyptic co-op FPS roguelite
              on Steam with South Asian cultural aesthetics, built in Unity 6 URP.
            </p>
            <p className={styles.para} style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
              Active content creator on Instagram &amp; LinkedIn covering AI, Unity, and game dev in Hinglish for South Asian devs.
            </p>
          </div>

          <div className={styles.stats}>
            {stats.map(s => (
              <div key={s.label} className={styles.statCard}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
