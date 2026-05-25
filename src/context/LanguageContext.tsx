import { createContext, useContext, useState, ReactNode } from 'react'
import { translations, Lang, Translations } from '../i18n/translations'

interface LanguageContextType {
  lang: Lang
  setLang: (l: Lang) => void
  tr: Translations
}

const LanguageContext = createContext<LanguageContextType>(null!)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('fr')
  const tr = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, setLang, tr }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
