import { personal } from '../data'
import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t, isRTL } = useLanguage()

  return (
    <footer
      className="border-t"
      style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="glow-line" />
      <div className="section-container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold" style={{ color: 'var(--text)' }}>
            W<span style={{ color: 'var(--accent)' }}>C</span>
            <span style={{ color: 'var(--accent-2)' }}>_</span>
          </span>
          <span className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
            · {t.footer.role}
          </span>
        </div>
        <div className="flex items-center gap-5">
          {[
            { label: 'GitHub', href: personal.github },
            { label: 'LinkedIn', href: personal.linkedin },
            { label: 'Email', href: `mailto:${personal.email}` },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="font-mono text-xs transition-colors"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--accent)')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--text-muted)')}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
