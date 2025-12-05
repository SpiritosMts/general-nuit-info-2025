'use client'

import { motion } from 'framer-motion'
import { ExternalLink, BookOpen, Video, FileText, Users, Globe, Heart, Shield, Leaf } from 'lucide-react'

interface Resource {
  title: string
  description: string
  url: string
  type: 'site' | 'video' | 'document' | 'community'
  pillar?: 'inclusion' | 'responsabilite' | 'durabilite'
}

const RESOURCES: Resource[] = [
  // Sites officiels
  {
    title: 'Site officiel NIRD',
    description: 'Le site de référence du projet Numérique Inclusif, Responsable et Durable',
    url: 'https://nird.forge.apps.education.fr/',
    type: 'site',
  },
  {
    title: 'Apps.education.fr',
    description: 'Suite d\'outils numériques du Ministère de l\'Éducation Nationale',
    url: 'https://apps.education.fr/',
    type: 'site',
  },
  {
    title: 'La Forge des Communs Numériques Éducatifs',
    description: 'Plateforme collaborative pour les ressources éducatives libres',
    url: 'https://forge.apps.education.fr/',
    type: 'site',
  },
  {
    title: 'APRIL - Promouvoir et défendre le logiciel libre',
    description: 'Association de référence pour le logiciel libre en France',
    url: 'https://www.april.org/',
    type: 'community',
  },
  // Vidéos
  {
    title: 'Windows 11 : l\'alternative des logiciels libres',
    description: 'Reportage France 3 Alpes (2 min)',
    url: 'https://video.echirolles.fr/w/hVykGUIRZqRen6eIutqRvQ',
    type: 'video',
  },
  {
    title: 'Logiciel obsolète : faut-il jeter des millions d\'ordinateurs ?',
    description: 'Reportage France Info (3 min)',
    url: 'https://www.youtube.com/watch?v=76T8oubek-c',
    type: 'video',
  },
  {
    title: 'Linux, c\'est facile ! - Lycée Carnot',
    description: 'Témoignage vidéo d\'une intervention d\'élèves (5 min)',
    url: 'https://tube-numerique-educatif.apps.education.fr/w/3LXem3XK4asbwZa5R1qGkW',
    type: 'video',
    pillar: 'durabilite',
  },
  {
    title: 'Le projet NIRD présenté par les élèves du Lycée Carnot',
    description: 'Présentation vidéo du projet (4 min)',
    url: 'https://tube-numerique-educatif.apps.education.fr/w/pZCnzPKTYtXiF38QH4ZHMQ',
    type: 'video',
  },
  // Documents
  {
    title: 'Mises à jour de Windows : le logiciel libre comme solution ?',
    description: 'Grand reportage France Inter (audio 4 min)',
    url: 'https://www.radiofrance.fr/franceinter/podcasts/le-grand-reportage-de-france-inter/le-grand-reportage-du-mardi-14-octobre-2025-4136495',
    type: 'document',
  },
  {
    title: 'En savoir plus sur le projet NIRD au Lycée Carnot',
    description: 'Article du Café Pédagogique',
    url: 'https://www.cafepedagogique.net/2025/04/27/bruay-la-buissiere-voyage-au-centre-du-libre-educatif/',
    type: 'document',
  },
  // Communautés
  {
    title: 'Framalibre',
    description: 'Annuaire du libre - Trouvez des alternatives libres',
    url: 'https://framalibre.org/',
    type: 'community',
  },
  {
    title: 'AlternativeTo',
    description: 'Trouvez des alternatives à n\'importe quel logiciel',
    url: 'https://alternativeto.net/',
    type: 'site',
  },
]

const NIRD_PILLARS = [
  {
    id: 'inclusion',
    title: 'Inclusion',
    icon: Heart,
    color: 'from-pink-500 to-rose-500',
    description: 'Rendre le numérique accessible à tous, sans discrimination. Favoriser l\'équité et réduire la fracture numérique.',
    actions: [
      'Proposer des interfaces adaptées (dyslexie, malvoyance)',
      'Former tous les publics sans prérequis',
      'Utiliser des outils gratuits et accessibles',
      'Accompagner les élèves en difficulté numérique'
    ]
  },
  {
    id: 'responsabilite',
    title: 'Responsabilité',
    icon: Shield,
    color: 'from-nird-gold to-yellow-500',
    description: 'Protéger les données personnelles, respecter le RGPD et garantir la souveraineté numérique de l\'établissement.',
    actions: [
      'Auditer la conformité RGPD des outils',
      'Privilégier les hébergeurs européens',
      'Sensibiliser à la protection des données',
      'Documenter les traitements de données'
    ]
  },
  {
    id: 'durabilite',
    title: 'Durabilité',
    icon: Leaf,
    color: 'from-nird-green to-emerald-500',
    description: 'Réduire l\'empreinte environnementale du numérique par la sobriété, le réemploi et l\'utilisation de logiciels libres.',
    actions: [
      'Prolonger la vie du matériel avec Linux',
      'Privilégier le matériel reconditionné',
      'Adopter une charte de sobriété numérique',
      'Mesurer et réduire la consommation énergétique'
    ]
  }
]

export default function ResourcesSection() {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'site': return Globe
      case 'video': return Video
      case 'document': return FileText
      case 'community': return Users
      default: return BookOpen
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'site': return 'bg-blue-500/20 text-blue-300'
      case 'video': return 'bg-red-500/20 text-red-300'
      case 'document': return 'bg-green-500/20 text-green-300'
      case 'community': return 'bg-purple-500/20 text-purple-300'
      default: return 'bg-gray-500/20 text-gray-300'
    }
  }

  return (
    <section className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            📚 Ressources & Documentation
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Tout ce dont vous avez besoin pour approfondir votre connaissance 
            de NIRD et accompagner la transition de votre établissement.
          </p>
        </motion.div>

        {/* NIRD Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Les 3 Piliers de NIRD
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {NIRD_PILLARS.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="glass rounded-2xl p-6 hover:bg-white/10 transition-all"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${pillar.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{pillar.title}</h3>
                  <p className="text-white/60 text-sm mb-4">{pillar.description}</p>
                  <div className="space-y-2">
                    {pillar.actions.map((action, i) => (
                      <div key={i} className="flex items-start gap-2 text-white/50 text-sm">
                        <span className="text-nird-gold">→</span>
                        {action}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">
            Ressources essentielles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {RESOURCES.map((resource, index) => {
              const Icon = getTypeIcon(resource.type)
              return (
                <motion.a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  className="glass rounded-xl p-5 hover:bg-white/20 transition-all group flex items-start gap-4"
                >
                  <div className={`w-10 h-10 rounded-lg ${getTypeColor(resource.type)} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white group-hover:text-nird-gold transition-colors flex items-center gap-2">
                      {resource.title}
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-white/50 text-sm mt-1">{resource.description}</p>
                  </div>
                </motion.a>
              )
            })}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8 inline-block">
            <h3 className="text-xl font-bold text-white mb-4">
              🎓 Rejoignez la communauté NIRD !
            </h3>
            <p className="text-white/60 mb-6 max-w-md">
              Des acteurs du NIRD sont disponibles pendant la Nuit de l'Info 
              pour répondre à vos questions et vous guider.
            </p>
            <a
              href="https://nird.forge.apps.education.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-nird-green to-nird-blue rounded-full font-bold text-white hover:opacity-90 transition-opacity"
            >
              Découvrir le collectif NIRD
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
