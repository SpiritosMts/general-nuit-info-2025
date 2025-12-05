'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAppStore } from '@/lib/store'
import { Share2, Copy, Check, Twitter, Linkedin, X } from 'lucide-react'

export default function ShareResults() {
  const { totalScore, nirdLevel, quizCompleted } = useAppStore()
  const [showModal, setShowModal] = useState(false)
  const [copied, setCopied] = useState(false)

  if (!quizCompleted) return null

  const getLevelEmoji = () => {
    switch (nirdLevel) {
      case 'village': return '🏰'
      case 'champion': return '🏆'
      case 'resistant': return '⚔️'
      case 'apprenti': return '📚'
      default: return '🌱'
    }
  }

  const shareText = `${getLevelEmoji()} Mon établissement a obtenu ${totalScore}% au diagnostic NIRD !

J'ai évalué notre dépendance numérique et découvert des alternatives libres et souveraines.

🛡️ Numérique Inclusif, Responsable et Durable
#NuitDelInfo2025 #NIRD #LogicielLibre

Faites le test → `

  const shareUrl = 'https://village-nird-2025.netlify.app'

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareText + shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const handleTwitterShare = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`
    window.open(twitterUrl, '_blank')
  }

  const handleLinkedInShare = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    window.open(linkedInUrl, '_blank')
  }

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowModal(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-nird-green to-nird-blue rounded-full text-white font-bold shadow-lg hover:shadow-xl transition-shadow"
      >
        <Share2 className="w-5 h-5" />
        <span className="hidden sm:inline">Partager</span>
      </motion.button>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="glass rounded-3xl p-8 max-w-md w-full"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Share2 className="w-6 h-6 text-nird-gold" />
                  Partager mes résultats
                </h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-2 rounded-full hover:bg-white/10 text-white/60 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Preview */}
              <div className="glass rounded-xl p-4 mb-6 text-sm text-white/70 whitespace-pre-line">
                {shareText}
                <span className="text-nird-blue">{shareUrl}</span>
              </div>

              {/* Share buttons */}
              <div className="grid grid-cols-3 gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCopy}
                  className="flex flex-col items-center gap-2 p-4 glass rounded-xl hover:bg-white/20 transition-all"
                >
                  {copied ? (
                    <Check className="w-6 h-6 text-nird-green" />
                  ) : (
                    <Copy className="w-6 h-6 text-white/60" />
                  )}
                  <span className="text-xs text-white/60">
                    {copied ? 'Copié !' : 'Copier'}
                  </span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleTwitterShare}
                  className="flex flex-col items-center gap-2 p-4 glass rounded-xl hover:bg-white/20 transition-all"
                >
                  <Twitter className="w-6 h-6 text-[#1DA1F2]" />
                  <span className="text-xs text-white/60">Twitter</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleLinkedInShare}
                  className="flex flex-col items-center gap-2 p-4 glass rounded-xl hover:bg-white/20 transition-all"
                >
                  <Linkedin className="w-6 h-6 text-[#0A66C2]" />
                  <span className="text-xs text-white/60">LinkedIn</span>
                </motion.button>
              </div>

              <p className="text-center text-white/40 text-xs mt-6">
                Partagez pour encourager d'autres établissements à adopter NIRD ! 🌱
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
