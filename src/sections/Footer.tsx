import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { MessageCircle, Send, Mail, Phone, MapPin } from 'lucide-react'

const PHONE = '+7 705 757 32 78'
const WHATSAPP_NUMBER = '87057573278'

const NAV_LINKS = ['about', 'services', 'portfolio', 'technologies', 'process', 'contact'] as const

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: MessageCircle, href: `https://wa.me/${WHATSAPP_NUMBER}`, label: 'WhatsApp', color: '#22C55E' },
    { icon: Send, href: 'https://t.me/proitguys', label: 'Telegram', color: '#38BDF8' },
    { icon: Mail, href: 'mailto:info@proitguys.kz', label: 'Email', color: '#A78BFA' },
  ]

  return (
    <footer className="border-t bg-surface/30 backdrop-blur-sm" style={{ borderColor: 'var(--card-border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <img
                src={`${import.meta.env.BASE_URL}logos/logo-icon-white.png`}
                alt="Pro IT Guys"
                className="w-10 h-10 rounded-xl object-cover flex-shrink-0"
              />
              <span className="text-foreground font-bold text-xl tracking-tight whitespace-nowrap">
                Pro <span className="text-primary">IT</span> Guys
              </span>
            </div>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              {t('footer.description')}
            </p>

            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-200"
                  style={{ background: `${color}10`, borderColor: 'var(--card-border)' }}
                  whileHover={{ scale: 1.1, transition: { duration: 0.15 } }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} style={{ color }} strokeWidth={1.75} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-foreground font-semibold text-sm uppercase tracking-widest">{t('footer.quickLinks')}</h4>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map(key => (
                <button
                  key={key}
                  onClick={() => scrollTo(key)}
                  className="text-muted text-sm hover:text-foreground transition-colors duration-200 text-left"
                >
                  {t(`nav.${key}`)}
                </button>
              ))}
            </nav>
          </div>

          {/* Contacts */}
          <div className="flex flex-col gap-4">
            <h4 className="text-foreground font-semibold text-sm uppercase tracking-widest">{t('footer.contacts')}</h4>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${PHONE.replace(/\s/g, '')}`}
                className="flex items-center gap-2 text-muted text-sm hover:text-foreground transition-colors duration-200"
              >
                <Phone size={14} className="text-primary flex-shrink-0" />
                {PHONE}
              </a>
              <a
                href="mailto:info@proitguys.kz"
                className="flex items-center gap-2 text-muted text-sm hover:text-foreground transition-colors duration-200"
              >
                <Mail size={14} className="text-primary flex-shrink-0" />
                info@proitguys.kz
              </a>
              <div className="flex items-start gap-2 text-muted text-sm">
                <MapPin size={14} className="text-primary flex-shrink-0 mt-0.5" />
                <span>{t('contact.addressValue')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="py-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: 'var(--card-border)' }}>
          <p className="text-muted text-sm">
            {t('footer.copyright', { year })}
          </p>
          <div className="flex items-center gap-1 text-muted text-sm">
            <span>Built with</span>
            <span className="text-primary">♥</span>
            <span>in Astana, Kazakhstan</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
