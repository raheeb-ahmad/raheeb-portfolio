'use client'
import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sectionIds = navLinks.map(l => l.href.slice(1))
    const observers: IntersectionObserver[] = []

    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoSymbol}>&gt;</span>
          <span className={styles.logoText}>RAHEEB</span>
          <span className={styles.logoCursor}>_</span>
        </a>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} className={`${styles.link} ${activeSection === link.href.slice(1) ? styles.linkActive : ''}`} onClick={() => setMenuOpen(false)}>
                <span className={styles.linkNum}>{'//'}  </span>{link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="https://drive.google.com/file/d/1AGmmi1asEBDYqrFNzz1mzbzlqy3PNVeQ/view?usp=sharing" className={styles.resumeBtn} target="_blank" rel="noopener noreferrer">
              RESUME
            </a>
          </li>
        </ul>

        <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span className={menuOpen ? styles.barActive : styles.bar} />
          <span className={menuOpen ? styles.barActive : styles.bar} />
          <span className={menuOpen ? styles.barActive : styles.bar} />
        </button>
      </div>
    </nav>
  )
}
