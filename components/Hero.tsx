'use client'
import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    // Typewriter effect for subtitle
    const text = "SOFTWARE ENGINEER // GAME DEVELOPER // AI TOOLING"
    const el = document.getElementById('typewriter')
    if (!el) return
    let i = 0
    el.textContent = ''
    const interval = setInterval(() => {
      el.textContent += text[i]
      i++
      if (i >= text.length) clearInterval(interval)
    }, 40)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className={styles.hero}>
      {/* Background effects */}
      <div className={styles.bgGlow1} />
      <div className={styles.bgGlow2} />
      <div className={styles.scanline} />

      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.greeting}>
            <span className={styles.greetingLine} />
            <span className={styles.greetingText}>INITIALIZING PROFILE...</span>
          </div>

          <h1 className={styles.name} ref={titleRef}>
            <span className={styles.nameFirst}>RAHEEB</span>
            <br />
            <span className={styles.nameLast}>AHMAD</span>
            {/* Glitch layers */}
            <span className={styles.glitch1} aria-hidden>RAHEEB<br />AHMAD</span>
            <span className={styles.glitch2} aria-hidden>RAHEEB<br />AHMAD</span>
          </h1>

          <p className={styles.typewriter} id="typewriter" />

          <p className={styles.bio}>
            Unity developer with <span className={styles.accent}>3+ years</span> &amp; <span className={styles.accent}>50+ games shipped</span>.
            Building <span className={styles.accentMag}>EditorMind MCP</span> — an open-source AI bridge for Unity Editor.
            Currently @ <span className={styles.accent}>Geniteam</span>, Lahore.
          </p>

          <div className={styles.ctas}>
            <a href="#projects" className={styles.ctaPrimary}>
              <span>VIEW PROJECTS</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="https://github.com/raheeb-ahmad" target="_blank" rel="noopener noreferrer" className={styles.ctaSecondary}>
              GITHUB
            </a>
            <a href="https://www.linkedin.com/in/raheeb-ahmad/" target="_blank" rel="noopener noreferrer" className={styles.ctaSecondary}>
              LINKEDIN
            </a>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.hexFrame}>
            <div className={styles.hexInner}>
              <div className={styles.hexCode}>
                <p><span className={styles.kw}>const</span> dev = {'{'}</p>
                <p>&nbsp;&nbsp;name: <span className={styles.str}>"Raheeb Ahmad"</span>,</p>
                <p>&nbsp;&nbsp;role: <span className={styles.str}>"SWE + Game Dev"</span>,</p>
                <p>&nbsp;&nbsp;stack: [<span className={styles.str}>"Unity"</span>, <span className={styles.str}>"C#"</span>, <span className={styles.str}>"AI"</span>],</p>
                <p>&nbsp;&nbsp;shipped: <span className={styles.num}>50</span>,</p>
                <p>&nbsp;&nbsp;building: <span className={styles.str}>"EditorMind MCP"</span>,</p>
                <p>&nbsp;&nbsp;location: <span className={styles.str}>"Lahore, PK"</span></p>
                <p>{'}'}</p>
              </div>
            </div>
            <div className={styles.hexCorner} data-pos="tl" />
            <div className={styles.hexCorner} data-pos="tr" />
            <div className={styles.hexCorner} data-pos="bl" />
            <div className={styles.hexCorner} data-pos="br" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>SCROLL</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
