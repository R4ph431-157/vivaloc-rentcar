import { useRef, useState, useEffect } from 'react'
import { useScrollNav } from '../hooks/useScrollNav'
import { useLanguage } from '../context/LanguageContext'
import Logo from './Logo'
import { ArrowRight } from './icons'

export default function Nav() {
  const navRef = useRef<HTMLElement>(null)
  useScrollNav(navRef)
  const { lang, setLang, tr } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(o => !o)
  const closeMenu = () => setMenuOpen(false)
  const toggleLang = () => setLang(lang === 'fr' ? 'en' : 'fr')

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return
    const handle = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handle)
    return () => document.removeEventListener('mousedown', handle)
  }, [menuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <nav ref={navRef}>
      <Logo />
      <div className={`nav-links${menuOpen ? ' open' : ''}`}>
        <a href="#fleet" onClick={closeMenu}>{tr.nav.fleet}</a>
        <a href="#why" onClick={closeMenu}>{tr.nav.advantages}</a>
        <a href="#contact" onClick={closeMenu}>{tr.nav.contact}</a>
        <a href="https://wa.me/2290129811111" target="_blank" rel="noopener noreferrer" className="btn" onClick={closeMenu}>
          {tr.nav.book} <ArrowRight />
        </a>
      </div>
      <div className="nav-right">
        <button className="lang-toggle" onClick={toggleLang} aria-label="Switch language">
          {lang === 'fr' ? 'EN' : 'FR'}
        </button>
        <div
          className={`burger${menuOpen ? ' open' : ''}`}
          onClick={toggleMenu}
          role="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </div>
      </div>
    </nav>
  )
}
