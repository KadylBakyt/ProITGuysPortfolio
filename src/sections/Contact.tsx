import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { MessageCircle, Send, Mail, Phone, MapPin, Clock } from 'lucide-react'
import { staggerContainer, fadeUp } from '../hooks/useScrollAnimation'
import SectionTitle from '../components/ui/SectionTitle'

const PHONE = '+7 705 757 32 78'
const WHATSAPP_NUMBER = '87057573278'

export default function Contact() {
  const { t } = useTranslation()

  const contactMethods = [
    { label: t('contact.whatsappLabel'), href: `https://wa.me/${WHATSAPP_NUMBER}`, icon: MessageCircle, color: '#22C55E', bgColor: 'rgba(34,197,94,0.08)', borderColor: 'rgba(34,197,94,0.2)' },
    { label: t('contact.telegramLabel'), href: 'https://t.me/proitguys', icon: Send, color: '#38BDF8', bgColor: 'rgba(56,189,248,0.08)', borderColor: 'rgba(56,189,248,0.2)' },
    { label: t('contact.emailLabel'), href: 'mailto:info@proitguys.kz', icon: Mail, color: '#A78BFA', bgColor: 'rgba(167,139,250,0.08)', borderColor: 'rgba(167,139,250,0.2)' },
    { label: t('contact.phoneLabel'), href: `tel:${PHONE.replace(/\s/g, '')}`, icon: Phone, color: '#F59E0B', bgColor: 'rgba(245,158,11,0.08)', borderColor: 'rgba(245,158,11,0.2)' },
  ]

  const infoItems = [
    { icon: Phone, label: t('contact.phoneLabel'), value: PHONE },
    { icon: MapPin, label: t('contact.addressLabel'), value: t('contact.addressValue') },
    { icon: Clock, label: '', value: t('contact.responseTime') },
  ]

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(37,99,235,0.07) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="flex flex-col gap-16"
        >
          <SectionTitle
            label={t('contact.sectionLabel')}
            title={t('contact.title')}
            subtitle={t('contact.subtitle')}
          />

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="lg:col-span-3 flex flex-col gap-4">
              <motion.p variants={fadeUp} className="text-muted text-sm font-semibold uppercase tracking-widest mb-2">
                {t('contact.orContact')}
              </motion.p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactMethods.map(({ label, href, icon: Icon, color, bgColor, borderColor }) => (
                  <motion.a
                    key={label}
                    variants={fadeUp}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-5 rounded-2xl border backdrop-blur-sm transition-all duration-300"
                    style={{ borderColor, background: bgColor }}
                    whileHover={{ scale: 1.02, y: -2, transition: { duration: 0.15 } }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                      style={{ background: `${color}20` }}
                    >
                      <Icon size={22} style={{ color }} strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="text-foreground font-semibold text-sm">{label}</p>
                      <p className="text-muted text-xs mt-0.5">
                        {href.startsWith('https://wa.me') ? `+${WHATSAPP_NUMBER}` :
                         href.startsWith('tel:') ? PHONE :
                         href.startsWith('mailto:') ? 'info@proitguys.kz' :
                         't.me/proitguys'}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              variants={fadeUp}
              className="lg:col-span-2 flex flex-col gap-6 p-7 rounded-2xl border bg-surface/40 backdrop-blur-sm"
              style={{ borderColor: 'var(--card-border)' }}
            >
              <div>
                <h3 className="text-foreground font-bold text-xl mb-1">Pro IT Guys</h3>
                <p className="text-muted text-sm">
                  Custom software development and business automation company
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {infoItems.map(({ icon: Icon, label, value }, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={16} className="text-primary" />
                    </div>
                    <div>
                      {label && <p className="text-muted text-xs font-medium mb-0.5">{label}</p>}
                      <p className="text-foreground text-sm">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t" style={{ borderColor: 'var(--card-border)' }}>
                <p className="text-muted text-xs">Mon – Fri: 9:00 – 18:00 (AST)</p>
                <p className="text-muted text-xs mt-1">Emergency support: 24/7</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
