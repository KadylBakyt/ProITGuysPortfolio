import {
  Globe,
  Users,
  BarChart3,
  PhoneCall,
  Radio,
  Puzzle,
  Building2,
  Bot,
  MessageCircle,
  Headphones,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Service {
  id: string
  icon: LucideIcon
  color: string
  bgColor: string
}

export const services: Service[] = [
  { id: 'webDev', icon: Globe, color: '#38BDF8', bgColor: 'rgba(56,189,248,0.1)' },
  { id: 'crm', icon: Users, color: '#A78BFA', bgColor: 'rgba(167,139,250,0.1)' },
  { id: 'erp', icon: BarChart3, color: '#34D399', bgColor: 'rgba(52,211,153,0.1)' },
  { id: 'callCenter', icon: PhoneCall, color: '#F59E0B', bgColor: 'rgba(245,158,11,0.1)' },
  { id: 'freepbx', icon: Radio, color: '#F97316', bgColor: 'rgba(249,115,22,0.1)' },
  { id: 'api', icon: Puzzle, color: '#2563EB', bgColor: 'rgba(37,99,235,0.1)' },
  { id: 'govIS', icon: Building2, color: '#10B981', bgColor: 'rgba(16,185,129,0.1)' },
  { id: 'tgBot', icon: Bot, color: '#38BDF8', bgColor: 'rgba(56,189,248,0.1)' },
  { id: 'wa', icon: MessageCircle, color: '#22C55E', bgColor: 'rgba(34,197,94,0.1)' },
  { id: 'support', icon: Headphones, color: '#EC4899', bgColor: 'rgba(236,72,153,0.1)' },
]
