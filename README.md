# Pro IT Guys — Corporate Website

Official website for **Pro IT Guys**, a Kazakhstan-based IT company specializing in custom software development, business automation, SIP telephony, and AI integration.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Bundler | Vite 5 |
| Styling | Tailwind CSS 3 |
| Animation | Framer Motion 11 |
| i18n | i18next (KZ / RU / EN / ZH) |
| Icons | Lucide React + React Icons |

## Features

- **4-language support** — Kazakh, Russian, English, Chinese
- **Dark / Light theme** — toggle with localStorage persistence
- **Animated particle background** — mouse-tracked canvas lines
- **Fully responsive** — mobile-first design
- **SEO-ready** — dynamic meta title & description per language

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── assets/          # Static assets (logo SVG)
├── components/      # Shared UI components
│   ├── ui/          # Button, SectionTitle
│   ├── Navigation.tsx
│   ├── LanguageSwitcher.tsx
│   ├── ThemeToggle.tsx
│   └── ParticleBackground.tsx
├── contexts/        # ThemeContext (dark/light)
├── data/            # services, technologies, portfolio data
├── hooks/           # useCounter, useScrollAnimation
├── layouts/         # MainLayout
├── locales/         # Translation JSON files (kz, ru, en, zh)
├── sections/        # Page sections (Hero, About, Services…)
└── i18n.ts          # i18next configuration
public/
└── logos/           # Logo PNG variants (full & icon)
```

## Logos

Four logo variants are available in `public/logos/`:

| File | Usage |
|---|---|
| `logo-icon-white.png` | Navigation & Footer (dark sites) |
| `logo-icon-dark.png` | Light backgrounds |
| `logo-full-dark.png` | Full logo on dark background |
| `logo-full-white.png` | Full logo on light background |

## Contact

- **Website:** proitguys.kz
- **Email:** info@proitguys.kz
- **Phone:** +7 705 757 32 78
- **Telegram:** [@proitguys](https://t.me/proitguys)
- **Location:** Astana, Kazakhstan
