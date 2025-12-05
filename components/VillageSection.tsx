'use client'

import { motion } from 'framer-motion'
import { useAppStore } from '@/lib/store'
import { Trophy, Lock, Sparkles, RotateCcw } from 'lucide-react'

export default function VillageSection() {
  const { 
    achievements, 
    totalScore, 
    nirdLevel, 
    quizCompleted,
    completedActions,
    quizAnswers,
    resetQuiz,
    setCurrentSection
  } = useAppStore()

  const unlockedAchievements = achievements.filter(a => a.unlockedAt)
  const lockedAchievements = achievements.filter(a => !a.unlockedAt)

  const getVillageState = () => {
    if (!quizCompleted) return 'not_started'
    if (totalScore >= 80) return 'champion'
    if (totalScore >= 60) return 'resistant'
    if (totalScore >= 40) return 'apprenti'
    return 'debutant'
  }

  const villageState = getVillageState()

  const getVillageMessage = () => {
    switch (villageState) {
      case 'not_started':
        return 'Votre village attend d\'être construit ! Commencez le diagnostic pour révéler son potentiel.'
      case 'debutant':
        return 'Les fondations sont posées. Votre village commence à prendre forme, mais le chemin est encore long.'
      case 'apprenti':
        return 'Les premières maisons libres apparaissent ! Les villageois commencent à résister aux légions numériques.'
      case 'resistant':
        return 'Votre village résiste vaillamment ! Les druides Linux préparent leurs potions open-source.'
      case 'champion':
        return 'Par Toutatis ! Votre village gaulois tient tête à l\'Empire numérique ! César lui-même en tremble !'
      default:
        return ''
    }
  }

  return (
    <section className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            🏰 Mon Village Numérique
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Suivez la progression de votre établissement vers l'autonomie numérique 
            et débloquez des succès en adoptant les pratiques NIRD.
          </p>
        </motion.div>

        {/* Village visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-3xl p-8 mb-8 relative overflow-hidden"
        >
          {/* Background decorations */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 text-6xl">🏠</div>
            <div className="absolute top-20 right-20 text-4xl">🌲</div>
            <div className="absolute bottom-10 left-1/4 text-5xl">🏛️</div>
            <div className="absolute bottom-20 right-10 text-4xl">⛲</div>
          </div>

          <div className="relative z-10 text-center">
            {/* Village level indicator */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-block mb-6"
            >
              <div className="text-8xl mb-4">
                {villageState === 'not_started' ? '🏕️' :
                 villageState === 'debutant' ? '🏘️' :
                 villageState === 'apprenti' ? '🏡' :
                 villageState === 'resistant' ? '🏰' : '🏰'}
              </div>
              {quizCompleted && (
                <div className="text-4xl font-bold gradient-text">
                  {totalScore}%
                </div>
              )}
            </motion.div>

            <h2 className="text-2xl font-bold text-white mb-4">
              {villageState === 'not_started' ? 'Village en construction' :
               villageState === 'debutant' ? 'Petit Village' :
               villageState === 'apprenti' ? 'Village Grandissant' :
               villageState === 'resistant' ? 'Village Résistant' : 'Village Gaulois Invincible'}
            </h2>

            <p className="text-white/70 max-w-lg mx-auto mb-6">
              {getVillageMessage()}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
              <div className="glass rounded-xl p-4">
                <div className="text-2xl font-bold text-nird-gold">{quizAnswers.length}</div>
                <div className="text-xs text-white/50">Questions répondues</div>
              </div>
              <div className="glass rounded-xl p-4">
                <div className="text-2xl font-bold text-nird-green">{completedActions.length}</div>
                <div className="text-xs text-white/50">Alternatives explorées</div>
              </div>
              <div className="glass rounded-xl p-4">
                <div className="text-2xl font-bold text-nird-blue">{unlockedAchievements.length}</div>
                <div className="text-xs text-white/50">Succès débloqués</div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              {!quizCompleted ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentSection('diagnostic')}
                  className="px-6 py-3 bg-gradient-to-r from-nird-green to-nird-blue rounded-full font-bold text-white"
                >
                  Commencer le diagnostic
                </motion.button>
              ) : (
                <>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setCurrentSection('alternatives')}
                    className="px-6 py-3 bg-gradient-to-r from-nird-green to-nird-blue rounded-full font-bold text-white"
                  >
                    Explorer les alternatives
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={resetQuiz}
                    className="px-6 py-3 glass rounded-full text-white/60 hover:text-white hover:bg-white/10 flex items-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Recommencer
                  </motion.button>
                </>
              )}
            </div>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Trophy className="w-6 h-6 text-nird-gold" />
            Succès
          </h2>

          {/* Unlocked achievements */}
          {unlockedAchievements.length > 0 && (
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-white/60 mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Débloqués ({unlockedAchievements.length})
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {unlockedAchievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="glass rounded-xl p-4 bg-gradient-to-r from-nird-gold/20 to-yellow-600/20 border border-nird-gold/30"
                  >
                    <div className="text-3xl mb-2">{achievement.icon}</div>
                    <h4 className="font-bold text-white">{achievement.title}</h4>
                    <p className="text-white/50 text-sm">{achievement.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Locked achievements */}
          {lockedAchievements.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-white/40 mb-4 flex items-center gap-2">
                <Lock className="w-4 h-4" />
                À débloquer ({lockedAchievements.length})
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {lockedAchievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    className="glass rounded-xl p-4 opacity-50"
                  >
                    <div className="text-3xl mb-2 grayscale">🔒</div>
                    <h4 className="font-bold text-white/60">{achievement.title}</h4>
                    <p className="text-white/30 text-sm">{achievement.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Inspirational quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="glass rounded-2xl p-6 inline-block">
            <p className="text-white/70 italic">
              "Ils sont fous ces Romains... et leurs logiciels propriétaires !"
            </p>
            <p className="text-white/40 text-sm mt-2">— Obélix, défenseur du Libre</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
