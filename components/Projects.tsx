'use client'
import { useState } from 'react'
import { projects } from './projectsData'
import styles from './Projects.module.css'

const filters = [
  { key: 'all', label: 'ALL' },
  { key: 'featured', label: 'FEATURED' },
  { key: 'voodoo', label: 'VOODOO' },
  { key: 'studio', label: 'STUDIO' },
  { key: 'personal', label: 'PERSONAL' },
]

export default function Projects() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all' ? projects : projects.filter(p => p.category === active)

  return (
    <section id="projects" className="section-wrapper">
      <div className="container">
        <p className="section-label">// 02. WORK</p>
        <h2 className="section-title">
          SHIPPED <span>PROJECTS</span>
        </h2>
        <div className="neon-line" />

        {/* Filter tabs */}
        <div className={styles.filters}>
          {filters.map(f => (
            <button
              key={f.key}
              className={`${styles.filterBtn} ${active === f.key ? styles.active : ''}`}
              onClick={() => setActive(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Featured projects (full width) */}
        {active !== 'voodoo' && active !== 'studio' && active !== 'personal' && (
          <div className={styles.featured}>
            {filtered.filter(p => p.featured).map(p => (
              <div key={p.id} className={styles.featuredCard}>
                <div className={styles.featuredBadge}>{p.categoryLabel}</div>
                <h3 className={styles.featuredTitle}>{p.title}</h3>
                <p className={styles.featuredDesc}>{p.description}</p>
                <div className={styles.tags}>
                  {p.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                </div>
                <div className={styles.links}>
                  {p.links.map(l => (
                    <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                      {l.label} →
                    </a>
                  ))}
                </div>
                <div className={styles.cornerDecor} />
              </div>
            ))}
          </div>
        )}

        {/* Regular grid */}
        <div className={styles.grid}>
          {filtered.filter(p => !p.featured).map((p, i) => (
            <div key={p.id} className={styles.card} style={{ animationDelay: `${i * 0.1}s` }}>
              {p.image && <img src={p.image} alt={p.title} className={styles.cardImage} />}
              <div className={styles.cardContent}>
                <div className={styles.cardTop}>
                  <span className={styles.cardBadge}>{p.categoryLabel}</span>
                  {p.stats && <span className={styles.cardStat}>{p.stats}</span>}
                </div>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardDesc}>{p.description}</p>
                <div className={styles.tags}>
                  {p.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                </div>
                <div className={styles.cardLinks}>
                  {p.links.map(l => (
                    <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                      {l.label} →
                    </a>
                  ))}
                </div>
              </div>
              <div className={styles.cardGlow} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
