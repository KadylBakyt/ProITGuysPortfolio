import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { technologies } from '../data/technologies'
import { staggerContainer, fadeUp, scaleIn } from '../hooks/useScrollAnimation'
import SectionTitle from '../components/ui/SectionTitle'

const CATEGORY_LABELS: Record<string, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Database',
  devops: 'DevOps',
  telephony: 'Telephony',
  other: 'Integrations',
}

export default function Technologies() {
  const { t } = useTranslation()

  const categories = Array.from(new Set(technologies.map(t => t.category)))

  return (
    <section id="technologies" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-5" style={{ background: 'radial-gradient(ellipse, #2563EB 0%, transparent 70%)' }} />
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
            label={t('technologies.sectionLabel')}
            title={t('technologies.title')}
            subtitle={t('technologies.subtitle')}
          />

          <div className="flex flex-col gap-10">
            {categories.map(category => (
              <div key={category}>
                <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                  <span className="text-muted text-xs font-bold uppercase tracking-widest">
                    {CATEGORY_LABELS[category]}
                  </span>
                  <div className="flex-1 h-px" style={{ backgroundColor: 'var(--card-border)' }} />
                </motion.div>

                <motion.div variants={staggerContainer} className="flex flex-wrap gap-3">
                  {technologies.filter(tech => tech.category === category).map(tech => (
                    <motion.div
                      key={tech.name}
                      variants={scaleIn}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl border bg-surface/40 hover:bg-surface/80 backdrop-blur-sm transition-all duration-200 cursor-default"
                      style={{ borderColor: 'var(--card-border)' }}
                    >
                      <div
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: tech.color, boxShadow: `0 0 6px ${tech.color}` }}
                      />
                      <span className="text-foreground text-sm font-medium">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>

          <motion.div variants={fadeUp} className="text-center">
            <p className="text-muted text-sm">
              And many more tools and frameworks depending on your specific needs.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
