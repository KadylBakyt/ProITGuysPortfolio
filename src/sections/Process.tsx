import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Search, Cpu, Hammer, TestTube2, Cloud, LifeBuoy } from 'lucide-react'
import { staggerContainer, fadeUp } from '../hooks/useScrollAnimation'
import SectionTitle from '../components/ui/SectionTitle'

const STEPS = [
  { key: 'analysis', icon: Search, color: '#38BDF8' },
  { key: 'architecture', icon: Cpu, color: '#A78BFA' },
  { key: 'development', icon: Hammer, color: '#34D399' },
  { key: 'testing', icon: TestTube2, color: '#F59E0B' },
  { key: 'deployment', icon: Cloud, color: '#2563EB' },
  { key: 'support', icon: LifeBuoy, color: '#EC4899' },
]

export default function Process() {
  const { t } = useTranslation()

  return (
    <section id="process" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-5" style={{ background: 'radial-gradient(circle, #A78BFA 0%, transparent 70%)' }} />
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
            label={t('process.sectionLabel')}
            title={t('process.title')}
            subtitle={t('process.subtitle')}
          />

          {/* Desktop timeline */}
          <div className="hidden lg:block relative">
            <div className="absolute top-10 left-10 right-10 h-px" style={{ backgroundColor: 'var(--card-border)' }} />
            <div className="absolute top-10 left-[8.33%] right-[8.33%] h-px">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.3 }}
                className="w-full h-full origin-left"
                style={{ background: 'linear-gradient(90deg, #2563EB, #38BDF8, #A78BFA, #F59E0B, #2563EB, #EC4899)' }}
              />
            </div>

            <motion.div variants={staggerContainer} className="grid grid-cols-6 gap-4">
              {STEPS.map(({ key, icon: Icon, color }, i) => (
                <motion.div key={key} variants={fadeUp} className="flex flex-col items-center text-center gap-4 group">
                  <div className="relative">
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center border-2 transition-all duration-300 group-hover:scale-110 bg-background"
                      style={{ borderColor: `${color}66`, boxShadow: `0 0 0 4px ${color}11` }}
                    >
                      <Icon size={28} style={{ color }} strokeWidth={1.5} />
                    </div>
                    <div
                      className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black"
                      style={{ background: color, color: '#050816' }}
                    >
                      {i + 1}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-foreground font-bold text-base mb-2">
                      {t(`process.steps.${key}.title`)}
                    </h3>
                    <p className="text-muted text-xs leading-relaxed">
                      {t(`process.steps.${key}.desc`)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Mobile accordion */}
          <div className="lg:hidden flex flex-col gap-4">
            {STEPS.map(({ key, icon: Icon, color }, i) => (
              <motion.div
                key={key}
                variants={fadeUp}
                className="flex gap-4 p-5 rounded-2xl border bg-surface/30"
                style={{ borderColor: 'var(--card-border)' }}
              >
                <div className="flex flex-col items-center gap-2 flex-shrink-0">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${color}15`, border: `1px solid ${color}44` }}
                  >
                    <Icon size={20} style={{ color }} strokeWidth={1.75} />
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="w-px flex-1 min-h-[20px]" style={{ background: `${color}30` }} />
                  )}
                </div>
                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-black px-2 py-0.5 rounded-full" style={{ background: `${color}20`, color }}>
                      0{i + 1}
                    </span>
                    <h3 className="text-foreground font-bold">{t(`process.steps.${key}.title`)}</h3>
                  </div>
                  <p className="text-muted text-sm leading-relaxed">{t(`process.steps.${key}.desc`)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
