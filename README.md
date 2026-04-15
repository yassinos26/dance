# 🎭 AI Dance Analysis Platform - Web Dashboard

Une plateforme d'analyse de danse propulsée par l'IA avec un tableau de bord web professionnel construit avec React, TypeScript et Tailwind CSS.

## ✨ Fonctionnalités

- 📊 **Dashboard Analytique** - Visualisez vos tendances de performance avec des graphiques interactifs
- 🎥 **Analyse Vidéo** - Téléchargez et analysez vos vidéos de danse avec feedback IA détaillé
- 🏆 **Classement Global** - Comparez vos performances avec d'autres danseurs
- 👤 **Profil Personnel** - Suivez vos statistiques, réalisations et objectifs
- 🔍 **Comparaison Pro** - Comparez votre technique avec des danseurs professionnels

## 🚀 Démarrage Rapide

### Prérequis

- Node.js (version 18 ou supérieure)
- npm, pnpm ou yarn

### Installation

1. **Cloner le projet** (ou extraire les fichiers)

2. **Installer les dépendances**

```bash
# Avec npm
npm install

# Ou avec pnpm (recommandé)
pnpm install

# Ou avec yarn
yarn install
```

3. **Lancer le serveur de développement**

```bash
# Avec npm
npm run dev

# Ou avec pnpm
pnpm dev

# Ou avec yarn
yarn dev
```

4. **Ouvrir dans le navigateur**

Le serveur démarre par défaut sur `http://localhost:5173`

Ouvrez votre navigateur et accédez à cette URL.

## 📦 Scripts Disponibles

```bash
# Démarrer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Prévisualiser la version de production
npm run preview
```

## 🛠️ Technologies Utilisées

- **React 18** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS v4** - Framework CSS utility-first
- **React Router** - Navigation et routing
- **Recharts** - Graphiques et visualisations
- **Lucide React** - Icônes modernes
- **Motion** - Animations fluides

## 📁 Structure du Projet

```
/
├── src/
│   ├── app/
│   │   ├── components/          # Composants React
│   │   │   ├── Dashboard.tsx    # Page principale
│   │   │   ├── VideoAnalysis.tsx # Analyse vidéo
│   │   │   ├── Leaderboard.tsx  # Classement
│   │   │   ├── Profile.tsx      # Profil utilisateur
│   │   │   ├── ComparePerformance.tsx # Comparaison
│   │   │   └── Layout.tsx       # Layout principal
│   │   ├── data/
│   │   │   └── mockData.ts      # Données de démonstration
│   │   ├── App.tsx              # Point d'entrée
│   │   └── routes.tsx           # Configuration routing
│   ├── styles/                  # Fichiers CSS globaux
│   └── imports/                 # Assets importés
├── package.json
└── README.md
```

## 🎨 Fonctionnalités Détaillées

### Dashboard
- Graphiques de tendances de performance
- Statistiques hebdomadaires
- Analyse des parties du corps
- Historique des analyses récentes

### Analyse Vidéo
- Upload de vidéos (simulation)
- Historique des analyses
- Feedback détaillé de l'IA
- Scores par catégorie (Posture, Fluidité, Rythme)

### Classement
- Top danseurs globaux
- Filtres par période
- Statistiques personnelles
- Indicateurs de tendance

### Profil
- Statistiques de performance
- Graphiques de progression
- Système de réalisations
- Objectifs hebdomadaires
- Historique d'activité

### Comparaison
- Sélection de danseurs professionnels
- Score de similarité
- Graphiques radar de comparaison
- Points forts et axes d'amélioration
- Plan de pratique recommandé

## 🔧 Configuration

Les données sont actuellement simulées dans `/src/app/data/mockData.ts`. 

Pour connecter à un vrai backend :
1. Remplacer les imports de `mockData` par des appels API
2. Configurer les endpoints dans un fichier de configuration
3. Ajouter la gestion d'état (Redux, Zustand, etc.) si nécessaire

## 📝 Notes Importantes

- Cette version utilise des **données simulées** pour la démonstration
- Les images utilisent **Unsplash** et **Pravatar** pour les démos
- Le téléchargement de vidéo est **simulé** (pas de traitement backend réel)
- Prêt à être connecté à un backend Express/FastAPI selon le design original

## 🚀 Prochaines Étapes

Pour transformer cette démo en application complète :

1. **Backend API** - Développer l'API Node.js/Express
2. **Base de données** - Configurer MySQL pour la persistance
3. **Service IA** - Implémenter le microservice Python/FastAPI
4. **Authentification** - Ajouter JWT et gestion des utilisateurs
5. **WebSocket** - Implémenter l'analyse en temps réel
6. **Mobile** - Développer l'app Flutter pour iOS/Android

## 📄 Licence

Ce projet est un prototype de démonstration.

## 🤝 Support

Pour toute question ou problème, vérifiez :
- Que Node.js version 18+ est installé
- Que toutes les dépendances sont installées
- Que le port 5173 est disponible

---

Développé avec ❤️ pour les danseurs passionnés
