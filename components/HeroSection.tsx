'use client'

import { motion } from 'framer-motion'
import { useAppStore } from '@/lib/store'
import { ArrowRight, Shield, Leaf, Heart } from 'lucide-react'

export default function HeroSection() {
  const { setCurrentSection, unlockAchievement } = useAppStore()

  const handleStartDiagnostic = () => {
    unlockAchievement('first_step')
    setCurrentSection('diagnostic')
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Stars */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
        
        {/* Floating icons */}
        <motion.div
          className="absolute top-1/4 left-[10%] text-6xl opacity-20"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          🐧
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-[15%] text-5xl opacity-20"
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          🦊
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 left-[20%] text-4xl opacity-20"
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        >
          🏛️
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 right-[10%] text-5xl opacity-20"
          animate={{ y: [15, -15, 15] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          ♻️
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Le Village</span>
            <br />
            <span className="text-white">Numérique Résistant</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl text-white/80 mb-4 max-w-3xl mx-auto"
        >
          🏰 <em>Astérix contre l'Empire numérique</em> 🏰
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg text-white/60 mb-12 max-w-2xl mx-auto"
        >
          Aidez votre établissement scolaire à résister aux Big Tech et à adopter 
          un <span className="text-nird-green font-semibold">Numérique Inclusif</span>,{' '}
          <span className="text-nird-gold font-semibold">Responsable</span> et{' '}
          <span className="text-nird-blue font-semibold">Durable</span>.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(45, 90, 61, 0.5)' }}
          whileTap={{ scale: 0.95 }}
          onClick={handleStartDiagnostic}
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-nird-green to-nird-blue rounded-full text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all"
        >
          Commencer le diagnostic
          <ArrowRight className="w-5 h-5" />
        </motion.button>

        {/* NIRD Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16"
        >
          <div className="glass rounded-2xl p-6 hover:bg-white/20 transition-all">
            <Heart className="w-10 h-10 text-pink-400 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2 text-white">Inclusif</h3>
            <p className="text-white/60 text-sm">
              Accessible à tous, respectueux des différences, favorisant l'équité numérique
            </p>
          </div>
          <div className="glass rounded-2xl p-6 hover:bg-white/20 transition-all">
            <Shield className="w-10 h-10 text-nird-gold mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2 text-white">Responsable</h3>
            <p className="text-white/60 text-sm">
              Protection des données, respect du RGPD, souveraineté numérique
            </p>
          </div>
          <div className="glass rounded-2xl p-6 hover:bg-white/20 transition-all">
            <Leaf className="w-10 h-10 text-nird-green mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2 text-white">Durable</h3>
            <p className="text-white/60 text-sm">
              Sobriété numérique, réemploi du matériel, logiciels libres pérennes
            </p>
          </div>
        </motion.div>

        {/* Context quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 p-6 glass rounded-2xl max-w-3xl mx-auto"
        >
          <p className="text-white/80 italic">
            "À l'heure où la fin du support de Windows 10 met en évidence la dépendance 
            structurelle aux Big Tech, les établissements scolaires peuvent devenir un 
            <span className="text-nird-gold font-semibold"> village résistant</span>, 
            ingénieux, autonome et créatif — à l'image du célèbre village d'Astérix."
          </p>
          <p className="text-white/40 text-sm mt-3">— Sujet National NIRD 2025</p>
        </motion.div>
      </div>
    </section>
  )
}
