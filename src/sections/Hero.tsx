import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Zap } from 'lucide-react'
import { FaServer, FaRobot, FaNetworkWired, FaDatabase, FaCloud, FaShieldAlt, FaMicrochip, FaWifi, FaSatelliteDish, FaHeadset } from 'react-icons/fa'
import { MdPhoneInTalk, MdSmartphone } from 'react-icons/md'
import { SiOpenai } from 'react-icons/si'
import Button from '../components/ui/Button'
import { useTheme } from '../contexts/ThemeContext'

const TECH_ICONS = [
  { Icon: FaServer,        top: '8%',  left: '5%',   size: 68, delay: 0,    opacity: 0.06 },
  { Icon: FaRobot,         top: '15%', left: '88%',  size: 75, delay: 1.2,  opacity: 0.06 },
  { Icon: FaNetworkWired,  top: '72%', left: '4%',   size: 64, delay: 0.5,  opacity: 0.06 },
  { Icon: FaDatabase,      top: '80%', left: '90%',  size: 56, delay: 2,    opacity: 0.06 },
  { Icon: FaCloud,         top: '40%', left: '92%',  size: 85, delay: 0.8,  opacity: 0.05 },
  { Icon: FaShieldAlt,     top: '60%', left: '6%',   size: 62, delay: 1.5,  opacity: 0.05 },
  { Icon: FaMicrochip,     top: '5%',  left: '50%',  size: 70, delay: 0.3,  opacity: 0.06 },
  { Icon: FaWifi,          top: '88%', left: '45%',  size: 58, delay: 2.3,  opacity: 0.06 },
  { Icon: FaSatelliteDish, top: '30%', left: '3%',   size: 66, delay: 1,    opacity: 0.05 },
  { Icon: FaHeadset,       top: '50%', left: '94%',  size: 62, delay: 1.7,  opacity: 0.06 },
  { Icon: MdPhoneInTalk,   top: '92%', left: '15%',  size: 60, delay: 0.6,  opacity: 0.06 },
  { Icon: MdSmartphone,    top: '18%', left: '25%',  size: 54, delay: 2.5,  opacity: 0.04 },
  { Icon: SiOpenai,        top: '75%', left: '70%',  size: 72, delay: 1.3,  opacity: 0.06 },
]

export default function Hero() {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const isLight = theme === 'light'

  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
  }

  const scrollToPortfolio = () => {
    const el = document.getElementById('portfolio')
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
  }

  const titleGradient = isLight
    ? 'linear-gradient(135deg, #0F172A 0%, #2563EB 50%, #38BDF8 100%)'
    : 'linear-gradient(135deg, #FFFFFF 0%, #38BDF8 50%, #2563EB 100%)'

  const iconColor = isLight ? '#2563EB' : '#38BDF8'

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(37,99,235,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.15) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />

        {/* Floating tech icons */}
        {TECH_ICONS.map(({ Icon, top, left, size, delay, opacity }, i) => (
          <motion.div
            key={i}
            className="absolute pointer-events-none select-none"
            style={{ top, left, color: iconColor, opacity }}
            animate={{ y: [0, -10, 0], rotate: [0, i % 2 === 0 ? 5 : -5, 0] }}
            transition={{ duration: 6 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay }}
          >
            <Icon size={size} />
          </motion.div>
        ))}

        {/* Glow orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.35, 0.65, 0.35] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.15) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.1) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.45, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase text-secondary bg-secondary/10 border border-secondary/20">
              <Zap size={12} className="fill-secondary text-secondary" />
              {t('hero.badge')}
            </span>
          </motion.div>

          {/* Headline */}
          <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight">
            {t('hero.title').split('\n').map((line, i) =>
              i === 0 ? (
                /* Plain lines — framer-motion safe */
                <motion.span
                  key={i}
                  className="block text-foreground"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
                >
                  {line}
                </motion.span>
              ) : (
                /* Gradient lines — pure CSS animation, NO framer-motion transform */
                <span
                  key={i}
                  className="block hero-gradient-text"
                  style={{ background: titleGradient }}
                >
                  {line}
                </span>
              )
            )}
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <Button variant="primary" size="lg" onClick={scrollToContact} icon={<ArrowRight size={18} />} className="w-full sm:w-auto min-w-[200px]">
              {t('hero.ctaConsult')}
            </Button>
            <Button variant="ghost" size="lg" onClick={scrollToPortfolio} className="w-full sm:w-auto min-w-[200px]">
              {t('hero.ctaProjects')}
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center gap-8 pt-4"
          >
            {[
              { value: t('hero.stat1Value'), label: t('hero.stat1Label') },
              { value: t('hero.stat2Value'), label: t('hero.stat2Label') },
              { value: t('hero.stat3Value'), label: t('hero.stat3Label') },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-black text-foreground">{stat.value}</div>
                <div className="text-xs text-muted font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-muted text-xs font-medium tracking-widest uppercase">{t('hero.scrollDown')}</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="text-muted" />
        </motion.div>
      </motion.div>
    </section>
  )
}
