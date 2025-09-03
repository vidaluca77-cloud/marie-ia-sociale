# Marie - Assistante Sociale IA de Caen

Marie est une assistante sociale virtuelle utilisant l'intelligence artificielle pour aider les personnes en difficulté sociale dans la région de Caen, en Normandie.

## ✨ Fonctionnalités

- **🎤 Interface vocale** : Parlez directement à Marie grâce à la reconnaissance vocale
- **🤖 Réponses IA adaptées** : Utilise OpenAI GPT-3.5 pour des réponses personnalisées à chaque situation
- **🔄 Système de fallback** : Réponses intelligentes basées sur des mots-clés si l'IA n'est pas disponible
- **📍 Solutions locales** : Contacts et services spécialisés pour Caen et le Calvados
- **🔒 Sécurisé** : Clé API gérée côté serveur pour la sécurité

## 🚀 Déploiement sur Vercel

### Configuration requise

1. **Variable d'environnement** : 
   - `OPENAI_API_KEY` : Votre clé API OpenAI (déjà configurée)

2. **Structure du projet** :
   ```
   /
   ├── index.html              # Interface utilisateur
   ├── marie-config.js         # Configuration et logique
   ├── api/
   │   └── chat.js            # API sécurisée pour OpenAI
   └── package.json           # Configuration Node.js
   ```

### Déploiement

Le projet est prêt pour le déploiement automatique sur Vercel. L'API `/api/chat` sera automatiquement déployée comme fonction serverless.

## 🎯 Comment ça marche

1. **Utilisateur** : Clique sur "Parler à Marie" et pose sa question vocalement
2. **Reconnaissance vocale** : Conversion de la parole en texte
3. **API sécurisée** : Appel à `/api/chat` avec la question
4. **Intelligence artificielle** : OpenAI GPT-3.5 génère une réponse adaptée
5. **Fallback intelligent** : Si l'IA n'est pas disponible, utilise le système de mots-clés
6. **Synthèse vocale** : Marie répond vocalement avec les solutions et contacts

## 🏥 Services couverts

- **Emploi** : Pôle Emploi, RSA, formations
- **Logement** : APL, FSL, logement social
- **Famille** : Allocations, aide parent isolé
- **Santé** : Complémentaire santé, CPAM
- **Étudiants** : CROUS, aides spécifiques
- **Seniors** : APA, aide à domicile
- **Handicap** : MDPH, AAH, adaptations

## 🔧 Support navigateur

- **Recommandé** : Chrome, Edge, Safari récent
- **Reconnaissance vocale** : Requiert un navigateur moderne
- **HTTPS** : Nécessaire pour la reconnaissance vocale en production

## 📞 Contacts principaux intégrés

- **CCAS Caen** : 02 31 30 47 90
- **Restos du Cœur Caen** : 02 31 84 12 34
- **Secours Populaire Caen** : 02 31 86 88 31
- **CAF Calvados** : 32 30
- **Pôle Emploi Caen** : 39 49

## 🛡️ Sécurité

- ✅ Clé API OpenAI gérée côté serveur
- ✅ Pas d'exposition de données sensibles côté client
- ✅ Validation des entrées utilisateur
- ✅ Gestion d'erreurs robuste

## 🚀 Prêt pour la production

Le projet est maintenant entièrement configuré pour utiliser l'intelligence artificielle avec une intégration sécurisée. Marie peut s'adapter à chaque demande spécifique des utilisateurs tout en gardant une expertise locale sur les services sociaux de Caen.