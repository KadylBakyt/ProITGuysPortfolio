import { motion } from 'framer-motion'
import { fadeUp } from '../../hooks/useScrollAnimation'

interface SectionTitleProps {
  label?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionTitle({ label, title, subtitle, align = 'center', className = '' }: SectionTitleProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col gap-4 ${alignClass} ${className}`}>
      {label && (
        <motion.div variants={fadeUp}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-secondary bg-secondary/10 border border-secondary/20">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            {label}
          </span>
        </motion.div>
      )}
      <motion.h2
        variants={fadeUp}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight"
        style={{ lineHeight: '1.15' }}
      >
        {title.split('\n').map((line, i) => (
          <span key={i}>
            {i > 0 && <br />}
            {line}
          </span>
        ))}
      </motion.h2>
      {subtitle && (
        <motion.p variants={fadeUp} className={`text-muted text-lg max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
