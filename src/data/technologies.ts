export interface Technology {
  name: string
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'telephony' | 'other'
  color: string
}

export const technologies: Technology[] = [
  { name: 'React', category: 'frontend', color: '#61DAFB' },
  { name: 'TypeScript', category: 'frontend', color: '#3178C6' },
  { name: 'Vue.js', category: 'frontend', color: '#42B883' },
  { name: 'Node.js', category: 'backend', color: '#339933' },
  { name: 'Laravel', category: 'backend', color: '#FF2D20' },
  { name: 'PHP', category: 'backend', color: '#777BB4' },
  { name: 'PostgreSQL', category: 'database', color: '#4169E1' },
  { name: 'MySQL', category: 'database', color: '#4479A1' },
  { name: 'Redis', category: 'database', color: '#DC382D' },
  { name: 'FreePBX', category: 'telephony', color: '#F97316' },
  { name: 'Asterisk', category: 'telephony', color: '#F59E0B' },
  { name: 'Docker', category: 'devops', color: '#2496ED' },
  { name: 'Linux', category: 'devops', color: '#FCC624' },
  { name: 'Nginx', category: 'devops', color: '#009639' },
  { name: 'REST API', category: 'other', color: '#38BDF8' },
  { name: 'Telegram API', category: 'other', color: '#26A5E4' },
  { name: 'WhatsApp API', category: 'other', color: '#25D366' },
]
