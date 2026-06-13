import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { services } from '../data/services'
import { staggerContainer, fadeUp } from '../hooks/useScrollAnimation'
import SectionTitle from '../components/ui/SectionTitle'

export default function Services() {
  const { t } = useTranslation()

  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-5" style={{ background: 'radial-gradient(circle, #38BDF8 0%, transparent 70%)' }} />
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
            label={t('services.sectionLabel')}
            title={t('services.title')}
            subtitle={t('services.subtitle')}
          />

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5"
          >
            {services.map(({ id, icon: Icon, color, bgColor }) => (
              <motion.div
                key={id}
                variants={fadeUp}
                className="group relative p-6 rounded-2xl border bg-surface/40 hover:bg-surface/70 backdrop-blur-sm transition-all duration-300 cursor-default overflow-hidden"
                style={{ borderColor: 'var(--card-border)' }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${color}12 0%, transparent 70%)` }}
                />

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: bgColor }}
                >
                  <Icon size={22} style={{ color }} strokeWidth={1.75} />
                </div>

                <h3 className="text-foreground font-bold text-base mb-2">
                  {t(`services.items.${id}.title`)}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {t(`services.items.${id}.desc`)}
                </p>

                <div className="mt-4 flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0" style={{ color }}>
                  {t('services.learnMore')}
                  <ArrowUpRight size={14} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
