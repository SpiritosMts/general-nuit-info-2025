'use client'

import { useEffect, useState } from 'react'
import { useAppStore } from '@/lib/store'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import DiagnosticSection from '@/components/DiagnosticSection'
import AlternativesSection from '@/components/AlternativesSection'
import RoadmapSection from '@/components/RoadmapSection'
import ResourcesSection from '@/components/ResourcesSection'
import VillageSection from '@/components/VillageSection'
import AchievementToast from '@/components/AchievementToast'
import ShareResults from '@/components/ShareResults'
import Confetti from '@/components/Confetti'

export default function Home() {
  const { currentSection, quizCompleted } = useAppStore()
  const [showConfetti, setShowConfetti] = useState(false)
  const [prevQuizCompleted, setPrevQuizCompleted] = useState(false)

  // Trigger confetti when quiz is completed
  useEffect(() => {
    if (quizCompleted && !prevQuizCompleted) {
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 100)
    }
    setPrevQuizCompleted(quizCompleted)
  }, [quizCompleted, prevQuizCompleted])

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <HeroSection />
      case 'diagnostic':
        return <DiagnosticSection />
      case 'alternatives':
        return <AlternativesSection />
      case 'roadmap':
        return <RoadmapSection />
      case 'resources':
        return <ResourcesSection />
      case 'village':
        return <VillageSection />
      default:
        return <HeroSection />
    }
  }

  return (
    <main className="min-h-screen">
      <Confetti trigger={showConfetti} />
      <AchievementToast />
      <ShareResults />
      <Navigation />
      {renderSection()}
      
      {/* Footer */}
      <footer className="glass border-t border-white/10 py-8 px-4 mt-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🏰</span>
                <span className="font-bold text-lg gradient-text">Village NIRD</span>
              </div>
              <p className="text-white/50 text-sm">
                Une application créée dans le cadre de La Nuit de l'Info 2025, 
                sur le thème du Numérique Inclusif, Responsable et Durable.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Liens utiles</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://nird.forge.apps.education.fr/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                    Site officiel NIRD ↗
                  </a>
                </li>
                <li>
                  <a href="https://apps.education.fr/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                    Apps.education.fr ↗
                  </a>
                </li>
                <li>
                  <a href="https://forge.apps.education.fr/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                    Forge des Communs ↗
                  </a>
                </li>
                <li>
                  <a href="https://www.april.org/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                    APRIL ↗
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Les 3 piliers NIRD</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-pink-400">❤️</span>
                  <span className="text-white/50">Inclusion</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-nird-gold">🛡️</span>
                  <span className="text-white/50">Responsabilité</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-nird-green">🌱</span>
                  <span className="text-white/50">Durabilité</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-sm">
              🇫🇷 La Nuit de l'Info 2025 — Du 4 au 5 décembre 2025
            </p>
            <p className="text-white/30 text-sm">
              Fait avec ❤️ pour un numérique plus libre
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
