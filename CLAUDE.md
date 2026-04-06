# MERN-PROJECT

## Description
Projet d'apprentissage full-stack en cours de construction.
Propriétaire : Ludovic AIME

## Stack technique
- **M** — MongoDB (à venir)
- **E** — Express.js v5
- **R** — React (à venir)
- **N** — Node.js (CommonJS, pas ESM)
- Nodemon pour le hot-reload en développement
- dotenv pour les variables d'environnement

## Structure actuelle
- `server.js` — point d'entrée du serveur Express (port 5000)
- `package.json` — dépendances et scripts
- `.env` — variables d'environnement (ne jamais committer)
- `client/` — application React (frontend)

## Lancer le projet

**Commande unique (recommandée)** depuis la racine :
```bash
npm run dev
```
→ Lance les 2 serveurs en parallèle via `concurrently`
→ Backend Express sur `http://localhost:5000`
→ Frontend React sur `http://localhost:3000`

**Séparément si besoin :**
- Backend seul : `npm start`
- Frontend seul : `cd client && npm start`

## Conventions à respecter
- Module system : CommonJS (`require`/`module.exports`), pas d'ESM (`import`/`export`)
- Port serveur : 5000
- Ne jamais committer le fichier `.env`
- Garder une structure simple pendant la phase d'apprentissage

## État du projet
- Serveur Express de base en place
- MongoDB, React et les routes API sont à venir
- Projet en cours d'apprentissage : privilégier les explications pédagogiques
