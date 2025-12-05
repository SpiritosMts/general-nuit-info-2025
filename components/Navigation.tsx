'use client'

import { useAppStore } from '@/lib/store'
import { Home, ClipboardCheck, Package, Map, BookOpen, Castle } from 'lucide-react'
import { motion } from 'framer-motion'

const navItems = [
  { id: 'home', label: 'Accueil', icon: Home },
  { id: 'diagnostic', label: 'Diagnostic', icon: ClipboardCheck },
  { id: 'alternatives', label: 'Alternatives', icon: Package },
  { id: 'roadmap', label: 'Feuille de route', icon: Map },
  { id: 'resources', label: 'Ressources', icon: BookOpen },
  { id: 'village', label: 'Mon Village', icon: Castle },
] as const

export default function Navigation() {
  const { currentSection, setCurrentSection, totalScore, quizCompleted } = useAppStore()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => setCurrentSection('home')}
          >
            <span className="text-2xl">🏰</span>
            <span className="font-bold text-lg hidden sm:block gradient-text">Village NIRD</span>
          </motion.div>

          {/* Navigation items */}
          <div className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = currentSection === item.id
              
              return (
                <motion.button
                  key={item.id}
                  onClick={() => setCurrentSection(item.id as typeof currentSection)}
                  className={`relative flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                    isActive 
                      ? 'bg-white/20 text-white' 
                      : 'text-white/60 hover:text-white hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                  <span className="hidden md:block text-sm">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-nird-green/30 to-nird-blue/30 rounded-lg -z-10"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              )
            })}
          </div>

          {/* Score badge */}
          {quizCompleted && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex items-center gap-2 px-3 py-1 rounded-full bg-nird-gold/20 border border-nird-gold/50"
            >
              <span className="text-nird-gold font-bold">{totalScore}%</span>
              <span className="text-xs text-white/60 hidden sm:block">Score NIRD</span>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  )
}
