# 🏰 Le Village NIRD - La Nuit de l'Info 2025

> **Astérix contre l'Empire numérique** — Une application web interactive pour accompagner les établissements scolaires vers un Numérique Inclusif, Responsable et Durable.

![NIRD](https://img.shields.io/badge/NIRD-Numérique%20Responsable-green)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![License](https://img.shields.io/badge/License-Libre-blue)

## � Accès à l'Application

**🔗 URL Publique : https://village-nird-2025.netlify.app**

---

## �🎯 Présentation

**Le Village NIRD** est une plateforme gamifiée qui aide les établissements scolaires français à :
- **Diagnostiquer** leur dépendance aux Big Tech
- **Découvrir** des alternatives libres et souveraines
- **Planifier** leur transition vers un numérique responsable
- **Suivre** leur progression comme un village gaulois résistant !

## ✨ Fonctionnalités

### 📋 Diagnostic interactif
- Quiz de 15 questions couvrant 5 domaines (système, logiciels, matériel, pratiques, formation)
- Score détaillé par catégorie
- Conseils personnalisés

### 🛡️ Arsenal du Résistant
- Catalogue de 18+ alternatives libres
- Filtres par catégorie et difficulté
- Indicateurs RGPD et adaptation éducation

### 🗺️ Feuille de route
- Plan progressif sur 2 ans
- Actions concrètes par étape
- Ressources associées

### 🏆 Système de gamification
- Niveaux (Débutant → Village Gaulois)
- Succès à débloquer
- Village évolutif

### 📚 Centre de ressources
- Documentation NIRD officielle
- Vidéos et articles
- Liens vers les communautés

## 🚀 Installation

```bash
# Cloner le projet
git clone [url-du-projet]
cd village-nird

# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Construire pour la production
npm run build
```

## 🛠️ Technologies

- **Framework**: Next.js 14 (React)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **State**: Zustand (persisté en localStorage)
- **Icons**: Lucide React
- **Déploiement**: Netlify

## 📁 Structure du projet

```
village-nird/
├── app/
│   ├── globals.css      # Styles globaux
│   ├── layout.tsx       # Layout principal
│   └── page.tsx         # Page d'entrée
├── components/
│   ├── Navigation.tsx   # Barre de navigation
│   ├── HeroSection.tsx  # Accueil
│   ├── DiagnosticSection.tsx  # Quiz
│   ├── AlternativesSection.tsx # Catalogue
│   ├── RoadmapSection.tsx     # Feuille de route
│   ├── ResourcesSection.tsx   # Ressources
│   └── VillageSection.tsx     # Gamification
├── lib/
│   ├── store.ts         # État global Zustand
│   ├── quiz-data.ts     # Questions du diagnostic
│   └── alternatives-data.ts # Base d'alternatives
└── public/              # Assets statiques
```

## 🌍 Les 3 piliers NIRD

| Pilier | Description |
|--------|-------------|
| ❤️ **Inclusion** | Accessible à tous, équité numérique |
| 🛡️ **Responsabilité** | Protection des données, RGPD, souveraineté |
| 🌱 **Durabilité** | Sobriété, réemploi, logiciels libres |

## 📊 Alternatives proposées

L'application référence des alternatives libres dans ces catégories :
- Systèmes d'exploitation (Ubuntu, Linux Mint, Debian Edu)
- Suites bureautiques (LibreOffice, OnlyOffice)
- Cloud et stockage (Nextcloud, Apps.education.fr)
- Visioconférence (BigBlueButton, Jitsi)
- Navigateurs (Firefox)
- Et bien plus...

## 🔗 Liens utiles

- [Site officiel NIRD](https://nird.forge.apps.education.fr/)
- [Apps.education.fr](https://apps.education.fr/)
- [Forge des Communs Numériques Éducatifs](https://forge.apps.education.fr/)
- [APRIL](https://www.april.org/)

## 📜 Licence

Ce projet est distribué sous licence libre, conformément aux exigences de La Nuit de l'Info.

---

**🇫🇷 La Nuit de l'Info 2025** — Du 4 au 5 décembre 2025

*"Ils sont fous ces Romains... et leurs logiciels propriétaires !"* — Obélix
