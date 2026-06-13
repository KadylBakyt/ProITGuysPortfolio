export interface PortfolioItem {
  id: string
  gradient: string
  accentColor: string
  mockupType: 'dashboard' | 'chat' | 'library' | 'lms' | 'crm'
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'callCenter',
    gradient: 'from-blue-600/20 to-cyan-500/20',
    accentColor: '#38BDF8',
    mockupType: 'dashboard',
  },
  {
    id: 'crm',
    gradient: 'from-violet-600/20 to-purple-500/20',
    accentColor: '#A78BFA',
    mockupType: 'crm',
  },
  {
    id: 'library',
    gradient: 'from-emerald-600/20 to-teal-500/20',
    accentColor: '#34D399',
    mockupType: 'library',
  },
  {
    id: 'lms',
    gradient: 'from-orange-600/20 to-amber-500/20',
    accentColor: '#F59E0B',
    mockupType: 'lms',
  },
  {
    id: 'tgPlatform',
    gradient: 'from-sky-600/20 to-blue-400/20',
    accentColor: '#38BDF8',
    mockupType: 'chat',
  },
]
