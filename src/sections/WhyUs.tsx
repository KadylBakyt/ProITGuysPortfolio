import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Code, Shield, TrendingUp, Rocket, HeartHandshake, Workflow } from 'lucide-react'
import { staggerContainer, fadeUp } from '../hooks/useScrollAnimation'
import SectionTitle from '../components/ui/SectionTitle'

const FEATURES = [
  { key: 'custom', icon: Code, color: '#38BDF8', bgColor: 'rgba(56,189,248,0.1)' },
  { key: 'security', icon: Shield, color: '#34D399', bgColor: 'rgba(52,211,153,0.1)' },
  { key: 'scalable', icon: TrendingUp, color: '#A78BFA', bgColor: 'rgba(167,139,250,0.1)' },
  { key: 'fast', icon: Rocket, color: '#F59E0B', bgColor: 'rgba(245,158,11,0.1)' },
  { key: 'support', icon: HeartHandshake, color: '#EC4899', bgColor: 'rgba(236,72,153,0.1)' },
  { key: 'automation', icon: Workflow, color: '#F97316', bgColor: 'rgba(249,115,22,0.1)' },
]

export default function WhyUs() {
  const { t } = useTranslation()

  return (
    <section id="why-us" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent, rgba(37,99,235,0.03) 50%, transparent)' }} />
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
            label={t('whyUs.sectionLabel')}
            title={t('whyUs.title')}
            subtitle={t('whyUs.subtitle')}
          />

          <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map(({ key, icon: Icon, color, bgColor }) => (
              <motion.div
                key={key}
                variants={fadeUp}
                className="group relative p-7 rounded-2xl border bg-surface/30 hover:bg-surface/60 backdrop-blur-sm transition-all duration-300 overflow-hidden"
                style={{ borderColor: 'var(--card-border)' }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div
                  className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full -translate-y-1/2 translate-x-1/2"
                  style={{ background: `radial-gradient(circle, ${color}18 0%, transparent 70%)` }}
                />

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: bgColor }}
                >
                  <Icon size={22} style={{ color }} strokeWidth={1.75} />
                </div>

                <h3 className="text-foreground font-bold text-lg mb-3">
                  {t(`whyUs.items.${key}.title`)}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {t(`whyUs.items.${key}.desc`)}
                </p>

                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"
                  style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
