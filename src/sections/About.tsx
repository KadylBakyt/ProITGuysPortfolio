import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Clock, Code2, Briefcase, Target } from 'lucide-react'
import { staggerContainer, fadeUp, slideRight } from '../hooks/useScrollAnimation'
import { useCounter } from '../hooks/useCounter'
import SectionTitle from '../components/ui/SectionTitle'

function StatCard({ valueStr, suffix, label, delay }: { valueStr: string; suffix: string; label: string; delay: number }) {
  const numVal = parseInt(valueStr, 10)
  const { count, ref } = useCounter(numVal, 2000)

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      variants={fadeUp}
      transition={{ delay }}
      className="flex flex-col items-center justify-center p-6 rounded-2xl border bg-surface/50 backdrop-blur-sm group hover:border-primary/30 transition-all duration-300"
      style={{ borderColor: 'var(--card-border)' }}
    >
      <div
        className="text-4xl md:text-5xl font-black mb-2 text-gradient-primary"
      >
        {count}{suffix}
      </div>
      <div className="text-muted text-sm font-medium text-center">{label}</div>
    </motion.div>
  )
}

export default function About() {
  const { t } = useTranslation()

  const features = [
    { key: 'experience', icon: Clock, color: '#38BDF8' },
    { key: 'technologies', icon: Code2, color: '#A78BFA' },
    { key: 'industries', icon: Briefcase, color: '#34D399' },
    { key: 'approach', icon: Target, color: '#F59E0B' },
  ]

  const stats = [
    { key: 'projects', valueKey: 'value', suffix: 'suffix' },
    { key: 'clients', valueKey: 'value', suffix: 'suffix' },
    { key: 'support', valueKey: 'value', suffix: 'suffix' },
    { key: 'integrations', valueKey: 'value', suffix: 'suffix' },
  ]

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5" style={{ background: 'radial-gradient(circle, #2563EB 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="flex flex-col gap-8"
          >
            <SectionTitle
              label={t('about.sectionLabel')}
              title={t('about.title')}
              subtitle=""
              align="left"
            />

            <motion.p variants={fadeUp} className="text-muted leading-relaxed">
              {t('about.description1')}
            </motion.p>
            <motion.p variants={fadeUp} className="text-muted leading-relaxed">
              {t('about.description2')}
            </motion.p>

            <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-4">
              {features.map(({ key, icon: Icon, color }) => (
                <motion.div
                  key={key}
                  variants={fadeUp}
                  className="flex gap-3 p-4 rounded-xl border bg-surface/30 hover:bg-surface/50 transition-all duration-300 group"
                  style={{ borderColor: 'var(--card-border)' }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: `${color}1a` }}
                  >
                    <Icon size={16} style={{ color }} />
                  </div>
                  <div>
                    <p className="text-foreground text-sm font-semibold">{t(`about.features.${key}.title`)}</p>
                    <p className="text-muted text-xs mt-0.5 leading-relaxed">{t(`about.features.${key}.desc`)}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ key }, i) => (
                <StatCard
                  key={key}
                  valueStr={t(`about.stats.${key}.value`)}
                  suffix={t(`about.stats.${key}.suffix`)}
                  label={t(`about.stats.${key}.label`)}
                  delay={i * 0.1}
                />
              ))}
            </div>

            <motion.div
              variants={slideRight}
              className="mt-6 p-6 rounded-2xl border border-primary/20 bg-primary/5 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-500 text-sm font-semibold">Available for new projects</span>
              </div>
              <p className="text-muted text-sm">
                We're actively taking on new clients. Contact us to discuss your project and get a free consultation within 24 hours.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
