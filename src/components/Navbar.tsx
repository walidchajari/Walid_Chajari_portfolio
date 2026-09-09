import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useLanguage, LANGS } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [showLangs, setShowLangs] = useState(false)
  const location = useLocation()
  const { isDark, toggle: toggleTheme } = useTheme()
  const { t, lang, setLang, isRTL } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false); setShowLangs(false) }, [location])

  const navLinks = [
    { label: t.nav.about, href: '/#about' },
    { label: t.nav.projects, href: '/#projects' },
    { label: t.nav.skills, href: '/#skills' },
    { label: t.nav.experience, href: '/#experience' },
    { label: t.nav.research, href: '/#research' },
    { label: t.nav.contact, href: '/#contact' },
  ]

  const handleNavClick = (href: string) => {
    setOpen(false)
    if (href.startsWith('/#')) {
      const id = href.slice(2)
      if (location.pathname === '/') {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.location.href = href
      }
    }
  }

  const currentFlag = LANGS.find(l => l.code === lang)?.flag ?? '🌐'

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      dir={isRTL ? 'rtl' : 'ltr'}
      style={{
        background: scrolled ? 'rgba(5,16,30,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(59,130,246,0.08)' : '1px solid transparent',
        boxShadow: scrolled ? '0 1px 24px rgba(0,8,24,0.35)' : 'none',
      }}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-mono text-sm font-bold tracking-widest" style={{ color: 'var(--text)' }}>
            W<span style={{ color: 'var(--accent)' }}>C</span>
            <span style={{ color: 'var(--accent-2)' }}>_</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 hover:text-white"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-2">
            {/* Language switcher */}
            <div className="relative">
              <button
                onClick={() => setShowLangs(!showLangs)}
                className="lang-btn flex items-center gap-1.5"
                style={{
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--border)',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '11px',
                }}
              >
                <span>{currentFlag}</span>
                <span>{lang.toUpperCase()}</span>
                <span style={{ fontSize: 8, opacity: 0.6 }}>▾</span>
              </button>
              {showLangs && (
                <div
                  className="absolute right-0 top-10 rounded-lg overflow-hidden z-50"
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    minWidth: 120,
                    boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                  }}
                >
                  {LANGS.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setShowLangs(false) }}
                      className="flex items-center gap-2.5 w-full px-4 py-2.5 text-left transition-colors hover:bg-white/5"
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '12px',
                        color: l.code === lang ? 'var(--accent)' : 'var(--text-secondary)',
                      }}
                    >
                      <span>{l.flag}</span>
                      <span>{l.label}</span>
                      {l.code === lang && <span style={{ marginLeft: 'auto', color: 'var(--accent)' }}>✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="btn-ghost p-2 rounded-lg"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              style={{
                border: '1px solid var(--border)',
                color: isDark ? '#F59E0B' : '#8B5CF6',
                background: isDark ? 'rgba(245,158,11,0.06)' : 'rgba(139,92,246,0.06)',
              }}
            >
              {isDark ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            <a
              href="/cv.pdf"
              download="Walid_CHAJARI_CV.pdf"
              className="btn-primary text-xs py-2 px-4"
            >
              {t.nav.resume}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-colors"
              aria-label="Toggle theme"
              style={{
                border: '1px solid var(--border)',
                color: isDark ? '#F59E0B' : '#8B5CF6',
                background: isDark ? 'rgba(245,158,11,0.06)' : 'rgba(139,92,246,0.06)',
              }}
            >
              {isDark ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-md"
              style={{ color: 'var(--text-secondary)' }}
              aria-label="Toggle menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t"
          style={{ background: 'rgba(5,16,30,0.98)', borderColor: 'var(--border)' }}
        >
          <div className="section-container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-3 py-2.5 text-sm font-medium rounded-md transition-colors hover:text-white"
                style={{ color: 'var(--text-secondary)' }}
              >
                {link.label}
              </button>
            ))}
            {/* Language in mobile */}
            <div
              className="flex items-center gap-2 mt-3 pt-3"
              style={{ borderTop: '1px solid var(--border)' }}
            >
              {LANGS.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`lang-btn flex items-center gap-1${l.code === lang ? ' active' : ''}`}
                >
                  <span style={{ fontSize: 14 }}>{l.flag}</span>
                  <span>{l.label}</span>
                </button>
              ))}
            </div>
            <div className="flex gap-3 mt-2">
              <a href="/cv.pdf" download className="btn-primary text-xs flex-1 justify-center">
                {t.nav.resume}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
