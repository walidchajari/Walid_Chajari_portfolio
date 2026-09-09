import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Lang, Translations, translations } from '../data/translations'

interface LangCtx {
  lang: Lang
  t: Translations
  setLang: (l: Lang) => void
  isRTL: boolean
}

const LanguageContext = createContext<LangCtx>({
  lang: 'fr',
  t: translations.fr,
  setLang: () => {},
  isRTL: false,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem('lang') as Lang | null
    return saved && ['en', 'fr', 'ar', 'de'].includes(saved) ? saved : 'fr'
  })

  const isRTL = lang === 'ar'

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('lang', l)
  }

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr'
  }, [lang, isRTL])

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], setLang, isRTL }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}

export const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: 'fr', label: 'FR', flag: '🇫🇷' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'ar', label: 'AR', flag: '🇲🇦' },
  { code: 'de', label: 'DE', flag: '🇩🇪' },
]
