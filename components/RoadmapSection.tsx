'use client'

import { motion } from 'framer-motion'
import { useAppStore } from '@/lib/store'
import { Check, Clock, ArrowRight, AlertTriangle, Star, TrendingUp } from 'lucide-react'

interface RoadmapStep {
  id: string
  title: string
  description: string
  duration: string
  priority: 'haute' | 'moyenne' | 'basse'
  category: string
  actions: string[]
  resources: { name: string; url: string }[]
}

const ROADMAP_STEPS: RoadmapStep[] = [
  {
    id: 'step1',
    title: 'Semaine 1-2 : Audit et sensibilisation',
    description: 'Évaluer l\'existant et mobiliser les équipes',
    duration: '2 semaines',
    priority: 'haute',
    category: 'Fondation',
    actions: [
      'Inventaire complet du parc logiciel et matériel',
      'Identifier les dépendances critiques aux Big Tech',
      'Organiser une réunion de sensibilisation avec les équipes',
      'Créer un groupe de travail NIRD'
    ],
    resources: [
      { name: 'Site NIRD officiel', url: 'https://nird.forge.apps.education.fr/' },
      { name: 'Guide d\'audit numérique', url: 'https://www.april.org/' }
    ]
  },
  {
    id: 'step2',
    title: 'Semaine 3-4 : Quick wins navigateurs et bureautique',
    description: 'Remplacements à impact immédiat et faible risque',
    duration: '2 semaines',
    priority: 'haute',
    category: 'Migration',
    actions: [
      'Déployer Firefox comme navigateur par défaut',
      'Installer LibreOffice sur tous les postes',
      'Former les utilisateurs aux bases de LibreOffice',
      'Configurer Thunderbird pour les emails'
    ],
    resources: [
      { name: 'LibreOffice', url: 'https://fr.libreoffice.org/' },
      { name: 'Firefox', url: 'https://www.mozilla.org/fr/firefox/' }
    ]
  },
  {
    id: 'step3',
    title: 'Mois 2 : Cloud souverain',
    description: 'Migration vers des solutions de stockage conformes RGPD',
    duration: '1 mois',
    priority: 'haute',
    category: 'Migration',
    actions: [
      'Activer les comptes Apps.education.fr',
      'Migrer les documents vers Nextcloud académique',
      'Former à la collaboration avec OnlyOffice/Collabora',
      'Définir une politique de nommage et rangement'
    ],
    resources: [
      { name: 'Apps.education.fr', url: 'https://apps.education.fr/' },
      { name: 'Nextcloud', url: 'https://nextcloud.com/' }
    ]
  },
  {
    id: 'step4',
    title: 'Mois 3 : Visioconférence et communication',
    description: 'Adopter des outils de communication respectueux',
    duration: '1 mois',
    priority: 'moyenne',
    category: 'Migration',
    actions: [
      'Déployer BigBlueButton via l\'ENT',
      'Former aux bonnes pratiques de visioconférence',
      'Tester Jitsi pour les réunions rapides',
      'Mettre en place Element pour la messagerie d\'équipe'
    ],
    resources: [
      { name: 'BigBlueButton', url: 'https://bigbluebutton.org/' },
      { name: 'Jitsi Meet', url: 'https://meet.jit.si/' }
    ]
  },
  {
    id: 'step5',
    title: 'Mois 4-5 : Postes pilotes Linux',
    description: 'Tester Linux sur des machines de démonstration',
    duration: '2 mois',
    priority: 'moyenne',
    category: 'Système',
    actions: [
      'Identifier 3-5 machines pour pilote',
      'Installer Linux Mint ou Ubuntu',
      'Former les volontaires à l\'usage quotidien',
      'Documenter les retours d\'expérience'
    ],
    resources: [
      { name: 'Ubuntu', url: 'https://ubuntu.com/' },
      { name: 'Linux Mint', url: 'https://linuxmint.com/' }
    ]
  },
  {
    id: 'step6',
    title: 'Mois 6 : Matériel reconditionné',
    description: 'Initier une politique de réemploi',
    duration: '1 mois',
    priority: 'moyenne',
    category: 'Durabilité',
    actions: [
      'Contacter des fournisseurs de matériel reconditionné',
      'Créer un atelier de remise en état avec les élèves',
      'Prolonger la vie des anciens postes avec Linux',
      'Documenter les économies réalisées'
    ],
    resources: [
      { name: 'Back Market Pro', url: 'https://www.backmarket.fr/' },
      { name: 'AfB Social & Green IT', url: 'https://www.afbshop.fr/' }
    ]
  },
  {
    id: 'step7',
    title: 'Année 2 : Généralisation',
    description: 'Étendre les pratiques à l\'ensemble de l\'établissement',
    duration: '1 an',
    priority: 'basse',
    category: 'Consolidation',
    actions: [
      'Généraliser Linux sur les postes compatibles',
      'Former tous les enseignants aux outils libres',
      'Intégrer le numérique responsable dans les cours',
      'Partager l\'expérience avec d\'autres établissements'
    ],
    resources: [
      { name: 'Forge des Communs', url: 'https://forge.apps.education.fr/' },
      { name: 'APRIL', url: 'https://www.april.org/' }
    ]
  }
]

export default function RoadmapSection() {
  const { quizCompleted, totalScore, completedActions } = useAppStore()

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'haute': return 'bg-red-500/20 text-red-300 border-red-500/50'
      case 'moyenne': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/50'
      case 'basse': return 'bg-green-500/20 text-green-300 border-green-500/50'
      default: return 'bg-gray-500/20 text-gray-300'
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Fondation': return 'from-blue-500/20 to-blue-600/20'
      case 'Migration': return 'from-purple-500/20 to-purple-600/20'
      case 'Système': return 'from-orange-500/20 to-orange-600/20'
      case 'Durabilité': return 'from-green-500/20 to-green-600/20'
      case 'Consolidation': return 'from-nird-gold/20 to-yellow-600/20'
      default: return 'from-gray-500/20 to-gray-600/20'
    }
  }

  return (
    <section className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            🗺️ Feuille de Route NIRD
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Un plan progressif sur 2 ans pour transformer votre établissement 
            en village numérique résistant.
          </p>
        </motion.div>

        {/* Score reminder */}
        {quizCompleted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl p-6 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-nird-green to-nird-blue flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-white/60 text-sm">Votre score actuel</p>
                <p className="text-2xl font-bold text-white">{totalScore}%</p>
              </div>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-white/60 text-sm">Alternatives explorées</p>
              <p className="text-xl font-bold text-nird-green">{completedActions.length}</p>
            </div>
          </motion.div>
        )}

        {/* Roadmap timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-nird-green via-nird-blue to-nird-gold hidden sm:block" />

          {ROADMAP_STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative mb-8 sm:ml-16"
            >
              {/* Timeline dot */}
              <div className="absolute -left-16 top-6 w-8 h-8 rounded-full bg-gradient-to-r from-nird-green to-nird-blue hidden sm:flex items-center justify-center text-white font-bold text-sm">
                {index + 1}
              </div>

              <div className={`glass rounded-2xl p-6 bg-gradient-to-r ${getCategoryColor(step.category)}`}>
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="sm:hidden w-8 h-8 rounded-full bg-gradient-to-r from-nird-green to-nird-blue flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </span>
                      <h3 className="text-lg font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="text-white/60">{step.description}</p>
                  </div>
                  <div className="flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs border ${getPriorityColor(step.priority)}`}>
                      {step.priority === 'haute' && <AlertTriangle className="w-3 h-3 inline mr-1" />}
                      Priorité {step.priority}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs bg-white/10 text-white/60">
                      <Clock className="w-3 h-3 inline mr-1" />
                      {step.duration}
                    </span>
                  </div>
                </div>

                {/* Actions checklist */}
                <div className="mb-4">
                  <h4 className="font-semibold text-white/80 mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4 text-nird-green" />
                    Actions à réaliser
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {step.actions.map((action, i) => (
                      <div key={i} className="flex items-start gap-2 text-white/60 text-sm">
                        <ArrowRight className="w-4 h-4 text-nird-gold flex-shrink-0 mt-0.5" />
                        {action}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Resources */}
                <div>
                  <h4 className="font-semibold text-white/80 mb-2 flex items-center gap-2">
                    <Star className="w-4 h-4 text-nird-gold" />
                    Ressources
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {step.resources.map((resource, i) => (
                      <a
                        key={i}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 rounded-full text-sm bg-white/10 text-white/80 hover:bg-white/20 transition-colors"
                      >
                        {resource.name} ↗
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="glass rounded-2xl p-8 inline-block">
            <p className="text-white/80 mb-4">
              Besoin d'accompagnement ? Les acteurs NIRD sont disponibles !
            </p>
            <a
              href="https://nird.forge.apps.education.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-nird-green to-nird-blue rounded-full font-bold text-white hover:opacity-90 transition-opacity"
            >
              Contacter la communauté NIRD
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
