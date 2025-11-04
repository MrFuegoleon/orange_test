#  Safe Reports Checker — Node.js Data Validation

Ce projet lit des rapports chiffrés ligne par ligne depuis un fichier `.devtools`, puis applique des règles pour déterminer si chaque rapport est "sûr" (graduellement croissant/décroissant) — avec ou sans "amortisseur de problème".

##  Fonctionnalités

- Analyse ligne par ligne de fichiers de données.
- Vérifie si un rapport est :
  - **Graduellement croissant** (écarts de 1 à 3).
  - **Graduellement décroissant** (écarts de 1 à 3).
  - Peut devenir valide en retirant un seul élément ("Problem Dampener").
- Support des fichiers `.env` pour une configuration flexible.

---

##  Règles d’analyse

- Un rapport est **sûr** si les nombres augmentent ou diminuent strictement avec un pas de **1 à 3 inclus**.
- Un rapport est **presque sûr** si le retrait d’un seul nombre le rend valide.

---
##  Installation

```bash
git clone https://github.com/MrFuegoleon/orange_test.git
cd orange_test
npm install

---

## Lancer le script

node code.js

---
