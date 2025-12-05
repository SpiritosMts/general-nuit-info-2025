# 🏰 Le Village NIRD — Description du Projet

## La Nuit de l'Info 2025 | Défi National

---

## 🌐 Informations Générales

| Élément | Détail |
|---------|--------|
| **Nom du projet** | Le Village NIRD |
| **URL publique** | https://village-nird-2025.netlify.app |
| **Thème** | Le Village Numérique Résistant |
| **Framework** | Next.js 14 (React 18) |
| **Hébergement** | Netlify |

---

## 🎯 Concept & Innovation

### Le Pitch

*"Et si votre établissement scolaire devenait un village gaulois résistant à l'Empire des Big Tech ?"*

**Le Village NIRD** est une plateforme web gamifiée qui accompagne les établissements scolaires français dans leur transition vers un **Numérique Inclusif, Responsable et Durable**. 

Inspirée de l'univers d'Astérix, l'application transforme le diagnostic de dépendance numérique en une aventure ludique où chaque action compte pour libérer son "village" de l'emprise des géants du numérique.

### Pourquoi ce projet est innovant ?

1. **Gamification complète** — Système de niveaux (Débutant → Village Gaulois), succès à débloquer, score évolutif
2. **Approche ludique** — Thème Astérix avec métaphores gauloises (résistance, potion magique du libre)
3. **Diagnostic personnalisé** — 15 questions couvrant 5 domaines NIRD avec conseils adaptés
4. **Catalogue actionnable** — 18+ alternatives libres avec indicateurs de difficulté et impact
5. **Feuille de route progressive** — Plan sur 2 ans avec étapes concrètes
6. **Persistance des données** — Progression sauvegardée localement
7. **Partage social** — Bouton de partage des résultats sur les réseaux

---

## ✨ Fonctionnalités Détaillées

### 1. 📋 Diagnostic Interactif
- **15 questions** réparties en 5 catégories :
  - 💻 Système d'exploitation
  - 📦 Logiciels
  - 🔧 Matériel
  - 📋 Pratiques
  - 🎓 Formation
- Score en temps réel avec explications
- Conseils personnalisés par question
- Résultats détaillés par catégorie

### 2. 🛡️ Arsenal du Résistant (Catalogue d'Alternatives)
- **18+ solutions libres** référencées :
  - Linux (Ubuntu, Mint, Debian Edu)
  - LibreOffice, OnlyOffice
  - Nextcloud, Apps.education.fr
  - BigBlueButton, Jitsi Meet
  - Firefox, Thunderbird
  - Et plus encore...
- Filtres par catégorie et difficulté
- Badges RGPD et adaptation éducation
- Liens directs vers les sites officiels

### 3. 🗺️ Feuille de Route Progressive
- **Plan sur 2 ans** en 6 étapes :
  1. Diagnostic initial (Mois 1-2)
  2. Premiers pas (Mois 3-4)
  3. Migration bureautique (Mois 5-8)
  4. Cloud souverain (Mois 9-12)
  5. Postes Linux (Année 2)
  6. Autonomie complète (Année 2+)
- Actions concrètes par étape
- Ressources associées

### 4. 🏆 Système de Gamification
- **5 niveaux de progression** :
  - 🌱 Débutant (0-20%)
  - 📚 Apprenti (20-40%)
  - ⚔️ Résistant (40-60%)
  - 🏆 Champion (60-80%)
  - 🏰 Village Gaulois (80-100%)
- **6 succès à débloquer** :
  - Premier Pas
  - Conscience Éveillée
  - Explorateur Libre
  - Résistant Numérique
  - Champion NIRD
  - Village Gaulois
- Notifications toast lors du déblocage
- Confettis à la fin du quiz

### 5. 📚 Centre de Ressources
- Liens vers le site officiel NIRD
- Vidéos pédagogiques
- Documentation des 3 piliers
- Communautés du libre (APRIL, Framasoft)

### 6. 📤 Partage des Résultats
- Bouton de partage flottant
- Export Twitter / LinkedIn
- Copie du texte personnalisé

---

## 🛠️ Stack Technique

| Technologie | Usage |
|-------------|-------|
| **Next.js 14** | Framework React avec App Router |
| **TypeScript** | Typage statique |
| **Tailwind CSS** | Styling (glassmorphism, gradients) |
| **Framer Motion** | Animations fluides |
| **Zustand** | State management avec persistance |
| **Lucide React** | Icônes modernes |
| **Netlify** | Déploiement et hébergement |

---

## 📊 Les 3 Piliers NIRD

| Pilier | Description | Icône |
|--------|-------------|-------|
| **Inclusif** | Accessible à tous, équité numérique, réduction de la fracture | ❤️ |
| **Responsable** | Protection des données, RGPD, souveraineté numérique | 🛡️ |
| **Durable** | Sobriété, réemploi du matériel, logiciels libres pérennes | 🌱 |

---

## 🎨 Design & UX

- **Thème sombre** avec accents dorés/verts (couleurs NIRD)
- **Glassmorphism** pour un effet moderne
- **Animations subtiles** pour l'engagement
- **Responsive** : mobile, tablette, desktop
- **Accessibilité** : focus visible, reduced motion support

---

## 📁 Structure du Projet

```
village-nird/
├── app/
│   ├── globals.css      # Styles globaux + animations
│   ├── layout.tsx       # Layout principal
│   └── page.tsx         # Page d'entrée
├── components/
│   ├── Navigation.tsx   # Barre de navigation
│   ├── HeroSection.tsx  # Page d'accueil
│   ├── DiagnosticSection.tsx  # Quiz interactif
│   ├── AlternativesSection.tsx # Catalogue
│   ├── RoadmapSection.tsx     # Feuille de route
│   ├── ResourcesSection.tsx   # Ressources
│   ├── VillageSection.tsx     # Gamification
│   ├── AchievementToast.tsx   # Notifications
│   ├── Confetti.tsx           # Animation confettis
│   └── ShareResults.tsx       # Partage social
├── lib/
│   ├── store.ts         # État global Zustand
│   ├── quiz-data.ts     # 15 questions du diagnostic
│   └── alternatives-data.ts # 18+ alternatives
└── public/              # Assets statiques
```

---

## 🔗 Liens Utiles

- **Application** : https://village-nird-2025.netlify.app
- **Site NIRD officiel** : https://nird.forge.apps.education.fr/
- **Apps.education.fr** : https://apps.education.fr/
- **Forge des Communs** : https://forge.apps.education.fr/

---

## 👥 Équipe

Projet réalisé dans le cadre de **La Nuit de l'Info 2025** (4-5 décembre 2025).

---

## 📜 Licence

Projet distribué sous licence libre, conformément aux valeurs NIRD.

---

*"Ils sont fous ces Romains... et leurs logiciels propriétaires !"* — Obélix 🏰
