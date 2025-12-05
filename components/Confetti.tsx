'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface ConfettiPiece {
  id: number
  x: number
  color: string
  delay: number
  duration: number
  rotation: number
}

export default function Confetti({ trigger }: { trigger: boolean }) {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([])

  useEffect(() => {
    if (trigger) {
      const colors = ['#c9a227', '#2d5a3d', '#1e3a5f', '#ec4899', '#22c55e', '#3b82f6']
      const newPieces: ConfettiPiece[] = []
      
      for (let i = 0; i < 100; i++) {
        newPieces.push({
          id: i,
          x: Math.random() * 100,
          color: colors[Math.floor(Math.random() * colors.length)],
          delay: Math.random() * 0.5,
          duration: 2 + Math.random() * 2,
          rotation: Math.random() * 360,
        })
      }
      
      setPieces(newPieces)
      
      // Clear confetti after animation
      const timer = setTimeout(() => {
        setPieces([])
      }, 5000)
      
      return () => clearTimeout(timer)
    }
  }, [trigger])

  if (pieces.length === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[200] overflow-hidden">
      {pieces.map((piece) => (
        <motion.div
          key={piece.id}
          initial={{ 
            x: `${piece.x}vw`, 
            y: -20,
            rotate: 0,
            opacity: 1 
          }}
          animate={{ 
            y: '110vh',
            rotate: piece.rotation * 3,
            opacity: [1, 1, 0]
          }}
          transition={{ 
            duration: piece.duration,
            delay: piece.delay,
            ease: 'linear'
          }}
          className="absolute w-3 h-3 rounded-sm"
          style={{ backgroundColor: piece.color }}
        />
      ))}
    </div>
  )
}
