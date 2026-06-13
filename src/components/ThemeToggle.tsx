import { motion } from 'framer-motion'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from '../contexts/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isLight = theme === 'light'

  return (
    <motion.button
      onClick={toggle}
      className="w-9 h-9 flex items-center justify-center rounded-xl border border-foreground/10 bg-foreground/5 hover:bg-foreground/10 text-muted hover:text-foreground transition-all duration-200"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      title={isLight ? 'Қара тема' : 'Ашық тема'}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -30, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.25 }}
      >
        {isLight ? <FiMoon size={16} /> : <FiSun size={16} />}
      </motion.div>
    </motion.button>
  )
}
