'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAppStore } from '@/lib/store'
import { ALTERNATIVES, CATEGORIES } from '@/lib/alternatives-data'
import { ExternalLink, Check, Star, Shield, Zap, BookOpen, Filter, X } from 'lucide-react'

export default function AlternativesSection() {
  const { completedActions, addCompletedAction } = useAppStore()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedAlternative, setSelectedAlternative] = useState<typeof ALTERNATIVES[0] | null>(null)
  const [difficultyFilter, setDifficultyFilter] = useState<string | null>(null)

  const filteredAlternatives = ALTERNATIVES.filter(alt => {
    if (selectedCategory && alt.category !== selectedCategory) return false
    if (difficultyFilter && alt.difficulty !== difficultyFilter) return false
    return true
  })

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'facile': return 'bg-green-500/20 text-green-300 border-green-500/50'
      case 'moyen': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/50'
      case 'avancé': return 'bg-red-500/20 text-red-300 border-red-500/50'
      default: return 'bg-gray-500/20 text-gray-300'
    }
  }

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'élevé': return 'text-green-400'
      case 'moyen': return 'text-yellow-400'
      case 'faible': return 'text-orange-400'
      default: return 'text-gray-400'
    }
  }

  const handleMarkAsExplored = (id: string) => {
    if (!completedActions.includes(id)) {
      addCompletedAction(id)
    }
  }

  return (
    <section className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            🛡️ Arsenal du Résistant Numérique
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Découvrez les alternatives libres et souveraines aux outils des Big Tech.
            Chaque solution présentée est respectueuse du RGPD et adaptée à l'éducation.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-2xl p-4 mb-8"
        >
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2 text-white/60">
              <Filter className="w-4 h-4" />
              <span className="text-sm">Filtres:</span>
            </div>
            
            {/* Category filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-3 py-1 rounded-full text-sm transition-all ${
                  !selectedCategory 
                    ? 'bg-nird-green text-white' 
                    : 'bg-white/10 text-white/60 hover:bg-white/20'
                }`}
              >
                Toutes
              </button>
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-full text-sm transition-all ${
                    selectedCategory === cat 
                      ? 'bg-nird-green text-white' 
                      : 'bg-white/10 text-white/60 hover:bg-white/20'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Difficulty filter */}
            <div className="flex gap-2 ml-auto">
              {['facile', 'moyen', 'avancé'].map(diff => (
                <button
                  key={diff}
                  onClick={() => setDifficultyFilter(difficultyFilter === diff ? null : diff)}
                  className={`px-3 py-1 rounded-full text-sm border transition-all ${
                    difficultyFilter === diff
                      ? getDifficultyColor(diff)
                      : 'border-white/20 text-white/40 hover:text-white/60'
                  }`}
                >
                  {diff}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Alternatives grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredAlternatives.map((alt, index) => {
              const isExplored = completedActions.includes(alt.id)
              
              return (
                <motion.div
                  key={alt.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setSelectedAlternative(alt)}
                  className={`glass rounded-2xl p-6 cursor-pointer hover:bg-white/20 transition-all relative overflow-hidden ${
                    isExplored ? 'ring-2 ring-nird-green/50' : ''
                  }`}
                >
                  {isExplored && (
                    <div className="absolute top-3 right-3">
                      <div className="w-6 h-6 bg-nird-green rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-nird-green/30 to-nird-blue/30 flex items-center justify-center text-2xl">
                      {alt.category.includes('Système') ? '🐧' :
                       alt.category.includes('bureautique') ? '📝' :
                       alt.category.includes('Cloud') ? '☁️' :
                       alt.category.includes('Visio') ? '📹' :
                       alt.category.includes('Navigateur') ? '🦊' :
                       alt.category.includes('Messagerie instantanée') ? '💬' :
                       alt.category.includes('Messagerie') ? '📧' :
                       alt.category.includes('pédagogique') ? '🎓' :
                       alt.category.includes('graphique') ? '🎨' :
                       alt.category.includes('vidéo') ? '🎬' :
                       alt.category.includes('Audio') ? '🎵' :
                       alt.category.includes('Programmation') ? '💻' : '📦'}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-white text-lg">{alt.name}</h3>
                      <p className="text-sm text-white/40">{alt.category}</p>
                    </div>
                  </div>

                  <p className="text-white/60 text-sm mb-4 line-clamp-2">{alt.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className={`px-2 py-1 rounded-full text-xs border ${getDifficultyColor(alt.difficulty)}`}>
                      {alt.difficulty}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs bg-white/10 ${getImpactColor(alt.impact)}`}>
                      Impact {alt.impact}
                    </span>
                    {alt.rgpdCompliant && (
                      <span className="px-2 py-1 rounded-full text-xs bg-blue-500/20 text-blue-300">
                        <Shield className="w-3 h-3 inline mr-1" />
                        RGPD
                      </span>
                    )}
                  </div>

                  <div className="text-xs text-white/40">
                    Remplace: {alt.replaces.join(', ')}
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* Detail modal */}
        <AnimatePresence>
          {selectedAlternative && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedAlternative(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                onClick={(e) => e.stopPropagation()}
                className="glass rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-nird-green/30 to-nird-blue/30 flex items-center justify-center text-4xl">
                      {selectedAlternative.category.includes('Système') ? '🐧' :
                       selectedAlternative.category.includes('bureautique') ? '📝' :
                       selectedAlternative.category.includes('Cloud') ? '☁️' :
                       selectedAlternative.category.includes('Visio') ? '📹' :
                       selectedAlternative.category.includes('Navigateur') ? '🦊' : '📦'}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">{selectedAlternative.name}</h2>
                      <p className="text-white/60">{selectedAlternative.category}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedAlternative(null)}
                    className="p-2 rounded-full hover:bg-white/10 text-white/60 hover:text-white"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <p className="text-white/80 mb-6">{selectedAlternative.description}</p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className={`px-3 py-1 rounded-full text-sm border ${getDifficultyColor(selectedAlternative.difficulty)}`}>
                    Difficulté: {selectedAlternative.difficulty}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm bg-white/10 ${getImpactColor(selectedAlternative.impact)}`}>
                    <Zap className="w-4 h-4 inline mr-1" />
                    Impact {selectedAlternative.impact}
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm bg-green-500/20 text-green-300">
                    <Star className="w-4 h-4 inline mr-1" />
                    {selectedAlternative.freeLevel}
                  </span>
                  {selectedAlternative.rgpdCompliant && (
                    <span className="px-3 py-1 rounded-full text-sm bg-blue-500/20 text-blue-300">
                      <Shield className="w-4 h-4 inline mr-1" />
                      Conforme RGPD
                    </span>
                  )}
                  {selectedAlternative.educationReady && (
                    <span className="px-3 py-1 rounded-full text-sm bg-purple-500/20 text-purple-300">
                      <BookOpen className="w-4 h-4 inline mr-1" />
                      Adapté éducation
                    </span>
                  )}
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="font-bold text-white mb-3">Fonctionnalités clés</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedAlternative.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-white/60 text-sm">
                        <Check className="w-4 h-4 text-nird-green" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Replaces */}
                <div className="mb-6">
                  <h3 className="font-bold text-white mb-3">Remplace</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedAlternative.replaces.map((item, i) => (
                      <span key={i} className="px-3 py-1 rounded-full text-sm bg-red-500/20 text-red-300 line-through">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <a
                    href={selectedAlternative.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleMarkAsExplored(selectedAlternative.id)}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-nird-green to-nird-blue rounded-full font-bold text-white hover:opacity-90 transition-opacity"
                  >
                    Visiter le site
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  {!completedActions.includes(selectedAlternative.id) && (
                    <button
                      onClick={() => handleMarkAsExplored(selectedAlternative.id)}
                      className="px-6 py-3 glass rounded-full font-bold text-white hover:bg-white/20 transition-all"
                    >
                      Marquer comme exploré
                    </button>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
