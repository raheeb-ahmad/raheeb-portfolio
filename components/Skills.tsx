import styles from './Skills.module.css'

const skillGroups = [
  {
    label: 'GAME DEV',
    color: 'cyan',
    skills: ['Unity 6 URP', 'Unity (Mobile)', 'C#', 'FPS Engine', 'NavMesh/AI', 'Shader Graph', 'URP Rendering', 'ScriptableObjects'],
  },
  {
    label: 'AI & TOOLING',
    color: 'magenta',
    skills: ['MCP Protocol', 'LLM Integration', 'Claude API', 'Anthropic SDK', 'AI Playtesting', 'EditorMind MCP', 'Prompt Engineering'],
  },
  {
    label: 'ENGINEERING',
    color: 'yellow',
    skills: ['TypeScript', 'Node.js', 'Next.js', 'Python', 'C#', 'REST APIs', 'Git/GitHub', 'CI/CD', 'VS Code'],
  },
  {
    label: 'SHIPPED ON',
    color: 'green',
    skills: ['iOS (App Store)', 'Android (Play Store)', 'Steam', 'itch.io', 'Vercel', 'Mobile F2P'],
  },
]

const experience = [
  { company: 'Geniteam', role: 'Software Engineer', period: 'November 2025 – Present', note: 'Scary Teacher 3D, Playtime Adventure' },
  { company: 'Game District', role: 'Associate Software Engineer', period: 'April 2025 – September 2025', note: 'House Makeover, Smash Frustrating Guy' },
  { company: 'Finz Games / Voodoo', role: 'Associate Software Engineer', period: 'March 2024 – April 2025', note: 'Light Fortress, Monkey Cannon Mania' },
]

export default function Skills() {
  return (
    <section id="skills" className="section-wrapper">
      <div className="container">
        <p className="section-label">// 03. STACK</p>
        <h2 className="section-title">
          SKILLS &amp; <span>EXPERIENCE</span>
        </h2>
        <div className="neon-line" />

        <div className={styles.layout}>
          <div className={styles.skillsGrid}>
            {skillGroups.map(group => (
              <div key={group.label} className={`${styles.skillGroup} ${styles[`color_${group.color}`]}`}>
                <h3 className={styles.groupLabel}>{group.label}</h3>
                <div className={styles.skillTags}>
                  {group.skills.map(s => (
                    <span key={s} className={styles.skillTag}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.expSection}>
            <h3 className={styles.expTitle}>EXPERIENCE</h3>
            <div className={styles.timeline}>
              {experience.map((e, i) => (
                <div key={i} className={styles.timelineItem}>
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineTop}>
                      <span className={styles.timelineCompany}>{e.company}</span>
                      <span className={styles.timelinePeriod}>{e.period}</span>
                    </div>
                    <p className={styles.timelineRole}>{e.role}</p>
                    <p className={styles.timelineNote}>{e.note}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.education}>
              <h3 className={styles.expTitle} style={{ marginTop: '40px' }}>EDUCATION</h3>
              <div className={styles.eduCard}>
                <span className={styles.timelineCompany}>PUCIT</span>
                <p className={styles.timelineRole}>BS Computer Science</p>
                <p className={styles.timelineNote}>Punjab University College of Information Technology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
