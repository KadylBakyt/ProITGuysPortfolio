import { useTranslation } from 'react-i18next'
import { LANGUAGES } from '../i18n'

function FlagKZ() {
  return (
    <svg viewBox="0 0 30 20" width="20" height="14" style={{ borderRadius: 2, display: 'block', flexShrink: 0 }}>
      <rect width="30" height="20" fill="#00AFCA" />
      <rect width="2" height="20" fill="#FEC50C" />
      <circle cx="16.5" cy="10" r="3.5" fill="none" stroke="#FEC50C" strokeWidth="1" />
      <circle cx="16.5" cy="10" r="1.1" fill="#FEC50C" />
      {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => {
        const r = (Math.PI / 180) * deg
        return <line key={i} x1={16.5 + Math.cos(r)*3.5} y1={10 + Math.sin(r)*3.5} x2={16.5 + Math.cos(r)*4.5} y2={10 + Math.sin(r)*4.5} stroke="#FEC50C" strokeWidth="0.5" />
      })}
    </svg>
  )
}

function FlagRU() {
  return (
    <svg viewBox="0 0 30 20" width="20" height="14" style={{ borderRadius: 2, display: 'block', flexShrink: 0 }}>
      <rect width="30" height="20" fill="#D52B1E" />
      <rect width="30" height="13.3" fill="#0039A6" />
      <rect width="30" height="6.7" fill="#FFFFFF" />
    </svg>
  )
}

function FlagEN() {
  return (
    <svg viewBox="0 0 30 20" width="20" height="14" style={{ borderRadius: 2, display: 'block', flexShrink: 0 }}>
      <rect width="30" height="20" fill="#012169" />
      <path d="M0,0 L30,20 M30,0 L0,20" stroke="#FFFFFF" strokeWidth="4" />
      <path d="M0,0 L30,20 M30,0 L0,20" stroke="#C8102E" strokeWidth="2.4" />
      <path d="M15,0 V20 M0,10 H30" stroke="#FFFFFF" strokeWidth="5.5" />
      <path d="M15,0 V20 M0,10 H30" stroke="#C8102E" strokeWidth="3.5" />
    </svg>
  )
}

function FlagZH() {
  return (
    <svg viewBox="0 0 30 20" width="20" height="14" style={{ borderRadius: 2, display: 'block', flexShrink: 0 }}>
      <rect width="30" height="20" fill="#DE2910" />
      <polygon points="5.5,1.5 6.4,4.3 9.3,4.3 7,6 7.9,8.8 5.5,7.1 3.1,8.8 4,6 1.7,4.3 4.6,4.3" fill="#FFDE00" />
      <polygon points="10.5,1 11.2,3.2 13.4,3.2 11.6,4.5 12.3,6.7 10.5,5.4 8.7,6.7 9.4,4.5 7.6,3.2 9.8,3.2" fill="#FFDE00" transform="scale(0.65) translate(6.5,0.5)" />
      <polygon points="12.5,4 13.2,6.2 15.4,6.2 13.6,7.5 14.3,9.7 12.5,8.4 10.7,9.7 11.4,7.5 9.6,6.2 11.8,6.2" fill="#FFDE00" transform="scale(0.65) translate(5,-3)" />
      <polygon points="12,8 12.7,10.2 14.9,10.2 13.1,11.5 13.8,13.7 12,12.4 10.2,13.7 10.9,11.5 9.1,10.2 11.3,10.2" fill="#FFDE00" transform="scale(0.65) translate(5,3)" />
      <polygon points="10,10.5 10.7,12.7 12.9,12.7 11.1,14 11.8,16.2 10,14.9 8.2,16.2 8.9,14 7.1,12.7 9.3,12.7" fill="#FFDE00" transform="scale(0.65) translate(6.5,6)" />
    </svg>
  )
}

const FLAG_MAP: Record<string, React.ReactNode> = {
  kz: <FlagKZ />,
  ru: <FlagRU />,
  en: <FlagEN />,
  zh: <FlagZH />,
}

interface LanguageSwitcherProps {
  mobile?: boolean
}

export default function LanguageSwitcher({ mobile = false }: LanguageSwitcherProps) {
  const { i18n } = useTranslation()

  const handleChange = (code: string) => {
    i18n.changeLanguage(code)
    localStorage.setItem('proitguys_language', code)
  }

  const baseBtn = 'flex items-center gap-1.5 rounded-lg font-semibold transition-all duration-200 border'
  const activeBtn = 'border-primary/50 bg-primary/12 text-foreground'
  const inactiveBtn = 'border-foreground/10 bg-foreground/[0.04] text-muted hover:bg-foreground/[0.08] hover:text-foreground hover:border-foreground/20'

  if (mobile) {
    return (
      <div className="flex flex-wrap gap-2">
        {LANGUAGES.map(lang => (
          <button
            key={lang.code}
            onClick={() => handleChange(lang.code)}
            className={`${baseBtn} px-2.5 py-1.5 text-xs ${i18n.language === lang.code ? activeBtn : inactiveBtn}`}
          >
            {FLAG_MAP[lang.code]}
            <span>{lang.label}</span>
          </button>
        ))}
      </div>
    )
  }

  return (
    <div className="flex items-center gap-1">
      {LANGUAGES.map(lang => (
        <button
          key={lang.code}
          onClick={() => handleChange(lang.code)}
          title={lang.nativeLabel}
          className={`${baseBtn} px-2 py-1.5 text-xs ${i18n.language === lang.code ? activeBtn : inactiveBtn}`}
        >
          {FLAG_MAP[lang.code]}
          <span className="hidden sm:inline">{lang.label}</span>
        </button>
      ))}
    </div>
  )
}
