import React from 'react'
import Navigation from '../components/Navigation'
import ParticleBackground from '../components/ParticleBackground'

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <ParticleBackground />
      <Navigation />
      <main className="relative" style={{ zIndex: 1 }}>{children}</main>
    </div>
  )
}
