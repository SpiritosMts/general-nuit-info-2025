'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAppStore, Achievement } from '@/lib/store'
import { Trophy, X } from 'lucide-react'

export default function AchievementToast() {
  const { achievements } = useAppStore()
  const [showToast, setShowToast] = useState<Achievement | null>(null)
  const [shownAchievements, setShownAchievements] = useState<Set<string>>(new Set())

  useEffect(() => {
    // Check for newly unlocked achievements
    const newlyUnlocked = achievements.find(
      a => a.unlockedAt && !shownAchievements.has(a.id)
    )
    
    if (newlyUnlocked) {
      setShowToast(newlyUnlocked)
      setShownAchievements(prev => {
        const newSet = new Set(Array.from(prev))
        newSet.add(newlyUnlocked.id)
        return newSet
      })
      
      // Auto-hide after 4 seconds
      const timer = setTimeout(() => {
        setShowToast(null)
      }, 4000)
      
      return () => clearTimeout(timer)
    }
  }, [achievements, shownAchievements])

  return (
    <AnimatePresence>
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: -100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -100, scale: 0.8 }}
          className="fixed top-20 left-1/2 -translate-x-1/2 z-[100]"
        >
          <div className="glass rounded-2xl p-4 flex items-center gap-4 bg-gradient-to-r from-nird-gold/30 to-yellow-600/30 border-2 border-nird-gold/50 shadow-lg">
            <motion.div
              initial={{ rotate: -180, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
              className="w-14 h-14 rounded-xl bg-nird-gold/30 flex items-center justify-center"
            >
              <span className="text-3xl">{showToast.icon}</span>
            </motion.div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Trophy className="w-4 h-4 text-nird-gold" />
                <span className="text-xs text-nird-gold font-semibold uppercase tracking-wider">
                  Succès débloqué !
                </span>
              </div>
              <h4 className="font-bold text-white text-lg">{showToast.title}</h4>
              <p className="text-white/60 text-sm">{showToast.description}</p>
            </div>
            <button
              onClick={() => setShowToast(null)}
              className="p-1 rounded-lg hover:bg-white/10 text-white/40 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
