import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { staggerContainer, fadeUp } from '../hooks/useScrollAnimation'
import SectionTitle from '../components/ui/SectionTitle'

export default function Testimonials() {
  const { t } = useTranslation()
  const items = t('testimonials.items', { returnObjects: true }) as Array<{
    name: string
    position: string
    company: string
    text: string
  }>

  const COLORS = ['#38BDF8', '#A78BFA', '#34D399']

  return (
    <section id="testimonials" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full opacity-4" style={{ background: 'radial-gradient(ellipse, #A78BFA 0%, transparent 70%)' }} />
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
            label={t('testimonials.sectionLabel')}
            title={t('testimonials.title')}
            subtitle={t('testimonials.subtitle')}
          />

          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative flex flex-col gap-6 p-7 rounded-2xl border bg-surface/30 hover:bg-surface/60 backdrop-blur-sm transition-all duration-300 overflow-hidden"
                style={{ borderColor: 'var(--card-border)' }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="absolute top-4 right-4 text-foreground opacity-[0.06]">
                  <Quote size={64} />
                </div>

                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-muted text-sm leading-relaxed flex-1 relative z-10">
                  "{item.text}"
                </blockquote>

                <div className="flex items-center gap-3 border-t pt-5" style={{ borderColor: 'var(--card-border)' }}>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black flex-shrink-0"
                    style={{ background: `${COLORS[i % COLORS.length]}20`, color: COLORS[i % COLORS.length] }}
                  >
                    {item.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="text-foreground font-semibold text-sm truncate">{item.name}</p>
                    <p className="text-muted text-xs truncate">{item.position}, {item.company}</p>
                  </div>
                </div>

                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${COLORS[i % COLORS.length]}, transparent)` }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
