import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import MainLayout from './layouts/MainLayout'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Technologies from './sections/Technologies'
import Portfolio from './sections/Portfolio'
import WhyUs from './sections/WhyUs'
import Process from './sections/Process'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

const META: Record<string, { title: string; description: string }> = {
  kz: {
    title: 'Pro IT Guys — Кастомды бағдарламалық жасақтама және автоматтандыру | Астана',
    description: 'Pro IT Guys — Қазақстандағы жетекші IT-компания. Кастомды веб-әзірлеу, CRM, ERP, call-орталық шешімдері, Telegram боттар және кәсіпорын платформалары.',
  },
  ru: {
    title: 'Pro IT Guys — Разработка ПО и автоматизация бизнеса | Астана',
    description: 'Pro IT Guys — ведущая IT-компания в Казахстане. Разработка на заказ: CRM, ERP, колл-центры, Telegram-боты, WhatsApp-автоматизация и корпоративные платформы.',
  },
  en: {
    title: 'Pro IT Guys — Custom Software & Business Automation | Astana, Kazakhstan',
    description: 'Pro IT Guys — Kazakhstan\'s premier IT company. Custom web development, CRM, ERP, call center solutions, Telegram bots and enterprise platforms.',
  },
  zh: {
    title: 'Pro IT Guys — 定制软件开发与业务自动化 | 阿斯塔纳，哈萨克斯坦',
    description: 'Pro IT Guys — 哈萨克斯坦领先IT公司。提供定制Web开发、CRM、ERP、呼叫中心解决方案、Telegram机器人和企业平台服务。',
  },
}

export default function App() {
  const { i18n } = useTranslation()
  const lang = i18n.language in META ? i18n.language : 'kz'

  useEffect(() => {
    const meta = META[lang]
    document.title = meta.title
    document.documentElement.lang = lang

    let descEl = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!descEl) {
      descEl = document.createElement('meta')
      descEl.name = 'description'
      document.head.appendChild(descEl)
    }
    descEl.content = meta.description
  }, [lang])

  return (
    <MainLayout>
      <Hero />
      <About />
      <Services />
      <Technologies />
      <Portfolio />
      <WhyUs />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </MainLayout>
  )
}
