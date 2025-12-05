import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface QuizAnswer {
  questionId: string
  answer: string
  score: number
}

export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  unlockedAt?: Date
}

export interface SchoolProfile {
  name: string
  type: 'primaire' | 'college' | 'lycee' | 'superieur'
  region: string
}

interface AppState {
  // School profile
  school: SchoolProfile | null
  setSchool: (school: SchoolProfile) => void

  // Quiz state
  currentQuizStep: number
  quizAnswers: QuizAnswer[]
  quizCompleted: boolean
  setCurrentQuizStep: (step: number) => void
  addQuizAnswer: (answer: QuizAnswer) => void
  completeQuiz: () => void
  resetQuiz: () => void

  // Score
  totalScore: number
  nirdLevel: 'debutant' | 'apprenti' | 'resistant' | 'champion' | 'village'
  calculateScore: () => void

  // Achievements
  achievements: Achievement[]
  unlockAchievement: (id: string) => void

  // Progress in NIRD journey
  completedActions: string[]
  addCompletedAction: (actionId: string) => void

  // UI state
  currentSection: 'home' | 'diagnostic' | 'alternatives' | 'roadmap' | 'resources' | 'village'
  setCurrentSection: (section: AppState['currentSection']) => void
}

const ACHIEVEMENTS: Achievement[] = [
  { id: 'first_step', title: 'Premier Pas', description: 'Commencez votre diagnostic', icon: '🚀' },
  { id: 'quiz_complete', title: 'Conscience Éveillée', description: 'Terminez le diagnostic complet', icon: '🎯' },
  { id: 'explorer', title: 'Explorateur Libre', description: 'Découvrez 5 alternatives libres', icon: '🔍' },
  { id: 'resistor', title: 'Résistant Numérique', description: 'Atteignez le niveau Résistant', icon: '⚔️' },
  { id: 'champion', title: 'Champion NIRD', description: 'Atteignez 80% de score', icon: '🏆' },
  { id: 'village', title: 'Village Gaulois', description: 'Complétez toutes les étapes', icon: '🏰' },
]

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // School profile
      school: null,
      setSchool: (school) => set({ school }),

      // Quiz state
      currentQuizStep: 0,
      quizAnswers: [],
      quizCompleted: false,
      setCurrentQuizStep: (step) => set({ currentQuizStep: step }),
      addQuizAnswer: (answer) => {
        const answers = [...get().quizAnswers.filter(a => a.questionId !== answer.questionId), answer]
        set({ quizAnswers: answers })
      },
      completeQuiz: () => {
        set({ quizCompleted: true })
        get().calculateScore()
        get().unlockAchievement('quiz_complete')
      },
      resetQuiz: () => set({ currentQuizStep: 0, quizAnswers: [], quizCompleted: false }),

      // Score
      totalScore: 0,
      nirdLevel: 'debutant',
      calculateScore: () => {
        const answers = get().quizAnswers
        const total = answers.reduce((sum, a) => sum + a.score, 0)
        const maxScore = answers.length * 3
        const percentage = maxScore > 0 ? (total / maxScore) * 100 : 0
        
        let level: AppState['nirdLevel'] = 'debutant'
        if (percentage >= 80) level = 'village'
        else if (percentage >= 60) level = 'champion'
        else if (percentage >= 40) level = 'resistant'
        else if (percentage >= 20) level = 'apprenti'

        set({ totalScore: Math.round(percentage), nirdLevel: level })

        if (percentage >= 40) get().unlockAchievement('resistor')
        if (percentage >= 80) get().unlockAchievement('champion')
      },

      // Achievements
      achievements: ACHIEVEMENTS,
      unlockAchievement: (id) => {
        set({
          achievements: get().achievements.map(a => 
            a.id === id && !a.unlockedAt 
              ? { ...a, unlockedAt: new Date() }
              : a
          )
        })
      },

      // Progress
      completedActions: [],
      addCompletedAction: (actionId) => {
        const actions = [...get().completedActions, actionId]
        set({ completedActions: actions })
        if (actions.length >= 5) get().unlockAchievement('explorer')
        if (actions.length >= 20) get().unlockAchievement('village')
      },

      // UI state
      currentSection: 'home',
      setCurrentSection: (section) => set({ currentSection: section }),
    }),
    {
      name: 'village-nird-storage',
    }
  )
)
