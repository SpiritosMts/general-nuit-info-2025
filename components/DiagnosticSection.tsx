'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAppStore } from '@/lib/store'
import { QUIZ_QUESTIONS, CATEGORIES } from '@/lib/quiz-data'
import { ChevronLeft, ChevronRight, Check, AlertCircle, Lightbulb, RotateCcw } from 'lucide-react'

export default function DiagnosticSection() {
  const { 
    currentQuizStep, 
    setCurrentQuizStep, 
    quizAnswers, 
    addQuizAnswer, 
    quizCompleted,
    completeQuiz,
    resetQuiz,
    totalScore,
    nirdLevel,
    setCurrentSection
  } = useAppStore()

  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [showTip, setShowTip] = useState(false)

  const currentQuestion = QUIZ_QUESTIONS[currentQuizStep]
  const progress = ((currentQuizStep + 1) / QUIZ_QUESTIONS.length) * 100
  const existingAnswer = quizAnswers.find(a => a.questionId === currentQuestion?.id)

  const handleSelectOption = (optionIndex: number) => {
    setSelectedOption(optionIndex)
    const option = currentQuestion.options[optionIndex]
    addQuizAnswer({
      questionId: currentQuestion.id,
      answer: option.text,
      score: option.score
    })
  }

  const handleNext = () => {
    if (currentQuizStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuizStep(currentQuizStep + 1)
      setSelectedOption(null)
      setShowTip(false)
    } else {
      completeQuiz()
    }
  }

  const handlePrevious = () => {
    if (currentQuizStep > 0) {
      setCurrentQuizStep(currentQuizStep - 1)
      setSelectedOption(null)
      setShowTip(false)
    }
  }

  const handleRestart = () => {
    resetQuiz()
    setSelectedOption(null)
    setShowTip(false)
  }

  const getLevelInfo = () => {
    const levels = {
      debutant: { emoji: '🌱', title: 'Débutant', color: 'text-gray-400', message: 'Votre voyage commence !' },
      apprenti: { emoji: '📚', title: 'Apprenti', color: 'text-blue-400', message: 'Vous êtes sur la bonne voie.' },
      resistant: { emoji: '⚔️', title: 'Résistant', color: 'text-green-400', message: 'Vous résistez bien aux Big Tech !' },
      champion: { emoji: '🏆', title: 'Champion', color: 'text-yellow-400', message: 'Excellent ! Vous montrez l\'exemple.' },
      village: { emoji: '🏰', title: 'Village Gaulois', color: 'text-purple-400', message: 'Invincible ! Votre village résiste à l\'envahisseur !' },
    }
    return levels[nirdLevel]
  }

  // Results screen
  if (quizCompleted) {
    const levelInfo = getLevelInfo()
    
    return (
      <section className="min-h-screen pt-24 pb-12 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass rounded-3xl p-8 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="text-8xl mb-6"
            >
              {levelInfo.emoji}
            </motion.div>

            <h2 className={`text-3xl font-bold mb-2 ${levelInfo.color}`}>
              Niveau: {levelInfo.title}
            </h2>
            
            <div className="mb-6">
              <div className="text-6xl font-bold text-white mb-2">{totalScore}%</div>
              <p className="text-white/60">{levelInfo.message}</p>
            </div>

            {/* Score breakdown */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-8">
              {Object.entries(CATEGORIES).map(([key, cat]) => {
                const categoryQuestions = QUIZ_QUESTIONS.filter(q => q.category === key)
                const categoryAnswers = quizAnswers.filter(a => 
                  categoryQuestions.some(q => q.id === a.questionId)
                )
                const categoryScore = categoryAnswers.reduce((sum, a) => sum + a.score, 0)
                const maxScore = categoryQuestions.length * 3
                const percentage = maxScore > 0 ? Math.round((categoryScore / maxScore) * 100) : 0
                
                return (
                  <div key={key} className="glass rounded-xl p-3">
                    <div className="text-2xl mb-1">{cat.icon}</div>
                    <div className="text-sm text-white/60">{cat.name}</div>
                    <div className="text-lg font-bold text-white">{percentage}%</div>
                  </div>
                )
              })}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentSection('alternatives')}
                className="px-6 py-3 bg-gradient-to-r from-nird-green to-nird-blue rounded-full font-bold text-white"
              >
                Découvrir les alternatives
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentSection('roadmap')}
                className="px-6 py-3 glass rounded-full font-bold text-white hover:bg-white/20"
              >
                Voir ma feuille de route
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleRestart}
                className="px-6 py-3 glass rounded-full text-white/60 hover:text-white hover:bg-white/10 flex items-center gap-2 justify-center"
              >
                <RotateCcw className="w-4 h-4" />
                Refaire le diagnostic
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  const category = CATEGORIES[currentQuestion.category as keyof typeof CATEGORIES]

  return (
    <section className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-white/60">
              Question {currentQuizStep + 1} / {QUIZ_QUESTIONS.length}
            </span>
            <span className={`text-sm px-2 py-1 rounded-full ${category.color} text-white`}>
              {category.icon} {category.name}
            </span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-nird-green to-nird-blue"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Question card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuizStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="glass rounded-3xl p-8"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-8">
              {currentQuestion.question}
            </h2>

            {/* Options */}
            <div className="space-y-4 mb-8">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedOption === index || existingAnswer?.answer === option.text
                
                return (
                  <motion.button
                    key={index}
                    onClick={() => handleSelectOption(index)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full text-left p-4 rounded-xl transition-all ${
                      isSelected
                        ? 'bg-gradient-to-r from-nird-green/50 to-nird-blue/50 border-2 border-nird-green'
                        : 'glass hover:bg-white/20 border-2 border-transparent'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                        isSelected ? 'bg-nird-green' : 'bg-white/20'
                      }`}>
                        {isSelected ? (
                          <Check className="w-4 h-4 text-white" />
                        ) : (
                          <span className="text-sm text-white/60">{index + 1}</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <span className="text-white">{option.text}</span>
                        {isSelected && option.explanation && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="text-sm text-white/60 mt-2"
                          >
                            {option.explanation}
                          </motion.p>
                        )}
                      </div>
                      <div className={`px-2 py-1 rounded text-xs ${
                        option.score === 3 ? 'bg-green-500/30 text-green-300' :
                        option.score === 2 ? 'bg-yellow-500/30 text-yellow-300' :
                        option.score === 1 ? 'bg-orange-500/30 text-orange-300' :
                        'bg-red-500/30 text-red-300'
                      }`}>
                        {option.score === 3 ? '★★★' :
                         option.score === 2 ? '★★' :
                         option.score === 1 ? '★' : '—'}
                      </div>
                    </div>
                  </motion.button>
                )
              })}
            </div>

            {/* Tip */}
            {currentQuestion.tip && (
              <motion.div
                initial={false}
                animate={{ height: showTip ? 'auto' : 48 }}
                className="overflow-hidden"
              >
                <button
                  onClick={() => setShowTip(!showTip)}
                  className="w-full flex items-center gap-2 text-nird-gold hover:text-yellow-300 transition-colors"
                >
                  <Lightbulb className="w-5 h-5" />
                  <span className="text-sm font-semibold">
                    {showTip ? 'Masquer le conseil' : 'Voir un conseil'}
                  </span>
                </button>
                {showTip && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-3 p-4 bg-nird-gold/10 rounded-xl border border-nird-gold/30"
                  >
                    <p className="text-white/80 text-sm">{currentQuestion.tip}</p>
                  </motion.div>
                )}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrevious}
            disabled={currentQuizStep === 0}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              currentQuizStep === 0 
                ? 'text-white/30 cursor-not-allowed' 
                : 'text-white/60 hover:text-white hover:bg-white/10'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
            Précédent
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            disabled={selectedOption === null && !existingAnswer}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold ${
              selectedOption === null && !existingAnswer
                ? 'bg-white/10 text-white/30 cursor-not-allowed'
                : 'bg-gradient-to-r from-nird-green to-nird-blue text-white'
            }`}
          >
            {currentQuizStep === QUIZ_QUESTIONS.length - 1 ? 'Voir les résultats' : 'Suivant'}
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </section>
  )
}
