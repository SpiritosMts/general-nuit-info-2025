import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Le Village NIRD - Numérique Inclusif, Responsable et Durable',
  description: 'Aidez votre établissement scolaire à résister aux Big Tech et adopter un numérique libre, responsable et durable. Inspiré par Astérix contre l\'Empire numérique.',
  keywords: ['NIRD', 'numérique responsable', 'école', 'logiciels libres', 'Linux', 'sobriété numérique'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
