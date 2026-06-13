import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronRight } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from './ThemeToggle'

const NAV_KEYS = ['about', 'services', 'portfolio', 'technologies', 'process', 'contact'] as const

export default function Navigation() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'backdrop-blur-xl border-b border-foreground/[0.06] shadow-card'
            : 'bg-transparent'
        }`}
        style={scrolled ? { backgroundColor: 'var(--nav-bg)' } : {}}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18 gap-3">

            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2.5 flex-shrink-0 group"
            >
              <img
                src="/logos/logo-icon-white.png"
                alt="Pro IT Guys"
                className="w-9 h-9 rounded-xl object-cover flex-shrink-0"
              />
              <span className="text-foreground font-bold text-base tracking-tight whitespace-nowrap">
                Pro <span className="text-primary">IT</span> Guys
              </span>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-0.5 flex-1 justify-center">
              {NAV_KEYS.map(key => (
                <button
                  key={key}
                  onClick={() => scrollTo(key)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-muted hover:text-foreground hover:bg-foreground/[0.05] transition-all duration-200 whitespace-nowrap"
                >
                  {t(`nav.${key}`)}
                </button>
              ))}
            </nav>

            {/* Desktop Right */}
            <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
              <LanguageSwitcher />
              <ThemeToggle />
              <motion.button
                onClick={() => scrollTo('contact')}
                className="px-4 py-2 rounded-xl bg-primary hover:bg-primary-hover text-white text-sm font-semibold transition-all duration-200 shadow-glow-sm whitespace-nowrap"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {t('nav.getStarted')}
              </motion.button>
            </div>

            {/* Mobile Right */}
            <div className="lg:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="w-9 h-9 flex items-center justify-center rounded-xl bg-foreground/[0.05] border border-foreground/10 text-foreground transition-all duration-200 hover:bg-foreground/10"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              >
                <AnimatePresence mode="wait">
                  {mobileOpen ? (
                    <motion.span key="x" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.15 }}>
                      <X size={18} />
                    </motion.span>
                  ) : (
                    <motion.span key="menu" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }} transition={{ duration: 0.15 }}>
                      <Menu size={18} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 backdrop-blur-sm"
              style={{ backgroundColor: 'rgba(var(--bg), 0.85)' }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              className="absolute right-0 top-0 bottom-0 w-72 backdrop-blur-xl border-l border-foreground/[0.06] flex flex-col"
              style={{ backgroundColor: 'rgb(var(--surface) / 0.97)' }}
            >
              <div className="flex items-center justify-between p-5 border-b border-foreground/[0.06]">
                <div className="flex items-center gap-2.5">
                  <img src="/logos/logo-icon-white.png" alt="" className="w-8 h-8 rounded-xl object-cover" />
                  <span className="text-foreground font-bold text-sm whitespace-nowrap">
                    Pro <span className="text-primary">IT</span> Guys
                  </span>
                </div>
                <button onClick={() => setMobileOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-lg bg-foreground/5 text-muted">
                  <X size={16} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto p-5 flex flex-col gap-1.5">
                {NAV_KEYS.map((key, i) => (
                  <motion.button
                    key={key}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => scrollTo(key)}
                    className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-left text-foreground font-medium hover:bg-foreground/[0.05] transition-all duration-200 group"
                  >
                    {t(`nav.${key}`)}
                    <ChevronRight size={15} className="text-muted group-hover:text-primary transition-colors" />
                  </motion.button>
                ))}
              </nav>

              <div className="p-5 border-t border-foreground/[0.06] space-y-4">
                <div>
                  <p className="text-muted text-xs font-semibold uppercase tracking-widest mb-3">Тіл / Language</p>
                  <LanguageSwitcher mobile />
                </div>
                <motion.button
                  onClick={() => scrollTo('contact')}
                  className="w-full py-3 rounded-xl bg-primary text-white font-semibold text-sm"
                  whileTap={{ scale: 0.97 }}
                >
                  {t('nav.getStarted')}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
