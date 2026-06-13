import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { portfolioItems } from '../data/portfolio'
import { staggerContainer, fadeUp } from '../hooks/useScrollAnimation'
import SectionTitle from '../components/ui/SectionTitle'

function MockupSVG({ type, accent }: { type: string; accent: string }) {
  if (type === 'dashboard') return (
    <svg viewBox="0 0 320 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" fill="#0F172A"/>
      <rect x="8" y="8" width="100" height="60" rx="6" fill={`${accent}22`} stroke={`${accent}44`} strokeWidth="1"/>
      <rect x="116" y="8" width="100" height="60" rx="6" fill={`${accent}22`} stroke={`${accent}44`} strokeWidth="1"/>
      <rect x="224" y="8" width="88" height="60" rx="6" fill={`${accent}22`} stroke={`${accent}44`} strokeWidth="1"/>
      <rect x="8" y="76" width="196" height="116" rx="6" fill={`${accent}11`} stroke={`${accent}33`} strokeWidth="1"/>
      <polyline points="20,160 60,130 100,145 140,110 180,125" fill="none" stroke={accent} strokeWidth="2" strokeLinecap="round"/>
      <circle cx="60" cy="130" r="3" fill={accent}/>
      <circle cx="100" cy="145" r="3" fill={accent}/>
      <circle cx="140" cy="110" r="3" fill={accent}/>
      <circle cx="180" cy="125" r="3" fill={accent}/>
      <rect x="212" y="76" width="100" height="52" rx="6" fill={`${accent}11`} stroke={`${accent}33`} strokeWidth="1"/>
      <rect x="212" y="136" width="100" height="56" rx="6" fill={`${accent}11`} stroke={`${accent}33`} strokeWidth="1"/>
    </svg>
  )
  if (type === 'chat') return (
    <svg viewBox="0 0 320 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" fill="#0F172A"/>
      <rect x="8" y="8" width="320" height="36" fill={`${accent}11`}/>
      <circle cx="24" cy="26" r="10" fill={`${accent}44`}/>
      <rect x="40" y="20" width="60" height="5" rx="2.5" fill="white" opacity="0.4"/>
      <rect x="20" y="56" width="160" height="32" rx="8" fill={`${accent}33`}/>
      <rect x="28" y="64" width="120" height="5" rx="2.5" fill="white" opacity="0.7"/>
      <rect x="140" y="100" width="160" height="32" rx="8" fill={`${accent}55`}/>
      <rect x="148" y="108" width="100" height="5" rx="2.5" fill="white" opacity="0.8"/>
      <rect x="20" y="144" width="130" height="32" rx="8" fill={`${accent}33`}/>
      <rect x="28" y="152" width="90" height="5" rx="2.5" fill="white" opacity="0.7"/>
    </svg>
  )
  if (type === 'crm') return (
    <svg viewBox="0 0 320 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" fill="#0F172A"/>
      <rect x="8" y="8" width="80" height="184" rx="6" fill={`${accent}11`} stroke={`${accent}22`} strokeWidth="1"/>
      {[0,1,2,3,4,5].map(i => <rect key={i} x="16" y={20 + i * 28} width="64" height="20" rx="4" fill={`${accent}${i === 2 ? '44' : '22'}`}/>)}
      <rect x="96" y="8" width="216" height="48" rx="6" fill={`${accent}11`} stroke={`${accent}22`} strokeWidth="1"/>
      <rect x="104" y="16" width="80" height="6" rx="3" fill="white" opacity="0.4"/>
      {[0,1,2].map(i => <rect key={i} x="96" y={64 + i * 46} width="216" height="38" rx="6" fill={`${accent}${i === 0 ? '22' : '11'}`} stroke={`${accent}22`} strokeWidth="1"/>)}
      {[0,1,2].map(i => <circle key={i} cx="108" cy={83 + i * 46} r="8" fill={`${accent}44`}/>)}
    </svg>
  )
  return (
    <svg viewBox="0 0 320 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" fill="#0F172A"/>
      <rect x="8" y="8" width="304" height="40" rx="6" fill={`${accent}11`} stroke={`${accent}22`} strokeWidth="1"/>
      <rect x="16" y="20" width="100" height="8" rx="4" fill={accent} opacity="0.4"/>
      {[0,1,2,3,4].map(i => (
        <g key={i}>
          <rect x="8" y={56 + i * 28} width="304" height="22" rx="4" fill={`${accent}${i % 2 === 0 ? '11' : '08'}`}/>
          <rect x="16" y={62 + i * 28} width="60" height="6" rx="3" fill="white" opacity="0.3"/>
          <rect x="90" y={62 + i * 28} width="100" height="6" rx="3" fill="white" opacity="0.2"/>
          <rect x="210" y={62 + i * 28} width="50" height="6" rx="3" fill={accent} opacity="0.4"/>
        </g>
      ))}
    </svg>
  )
}

export default function Portfolio() {
  const { t } = useTranslation()

  return (
    <section id="portfolio" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5" style={{ background: 'radial-gradient(circle, #38BDF8 0%, transparent 70%)' }} />
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
            label={t('portfolio.sectionLabel')}
            title={t('portfolio.title')}
            subtitle={t('portfolio.subtitle')}
          />

          <div className="flex flex-col gap-8">
            {portfolioItems.map((item, idx) => {
              const techList = (t(`portfolio.items.${item.id}.tech`, { returnObjects: true }) as string[]) || []
              const isEven = idx % 2 === 0

              return (
                <motion.div
                  key={item.id}
                  variants={fadeUp}
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center`}
                >
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div
                      className={`relative rounded-2xl overflow-hidden border aspect-[16/10] shadow-card group`}
                      style={{ borderColor: 'var(--card-border)' }}
                    >
                      <MockupSVG type={item.mockupType} accent={item.accentColor} />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                        style={{ boxShadow: `inset 0 0 60px ${item.accentColor}18` }}
                      />
                    </div>
                  </div>

                  <div className={`flex flex-col gap-5 ${!isEven ? 'lg:order-1' : ''}`}>
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: item.accentColor }} />
                        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: item.accentColor }}>
                          {t('portfolio.sectionLabel')} / {String(idx + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                        {t(`portfolio.items.${item.id}.title`)}
                      </h3>
                      <p className="text-muted leading-relaxed">
                        {t(`portfolio.items.${item.id}.desc`)}
                      </p>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-xl border bg-surface/30" style={{ borderColor: 'var(--card-border)' }}>
                      <CheckCircle2 size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-muted mb-1">{t('portfolio.resultLabel')}</p>
                        <p className="text-foreground text-sm font-medium">{t(`portfolio.items.${item.id}.result`)}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {techList.map((tech: string) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-xs font-semibold border"
                          style={{ borderColor: `${item.accentColor}40`, color: item.accentColor, background: `${item.accentColor}10` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
