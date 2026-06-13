import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--bg) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        'surface-2': 'rgb(var(--surface-2) / <alpha-value>)',
        foreground: 'rgb(var(--fg) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        primary: {
          DEFAULT: '#2563EB',
          hover: '#1D4ED8',
          light: '#3B82F6',
        },
        secondary: {
          DEFAULT: '#38BDF8',
          hover: '#0EA5E9',
        },
        border: 'rgb(var(--fg) / 0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #050816 0%, #0a0f2e 50%, #050816 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(15,23,42,0.9) 0%, rgba(22,32,50,0.9) 100%)',
        'primary-gradient': 'linear-gradient(135deg, #2563EB 0%, #38BDF8 100%)',
        'text-gradient': 'linear-gradient(135deg, #FFFFFF 0%, #94A3B8 100%)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(37,99,235,0.3)',
        'glow-sm': '0 0 20px rgba(37,99,235,0.2)',
        'glow-secondary': '0 0 40px rgba(56,189,248,0.2)',
        card: '0 4px 32px rgba(0,0,0,0.1)',
        'card-hover': '0 8px 48px rgba(0,0,0,0.18)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
} satisfies Config
