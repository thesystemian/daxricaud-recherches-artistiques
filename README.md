# Dax Ricaud | Recherches artistiques

Version statique bilingue du site `Le Registre des recherches`.

## Ouvrir localement

Depuis le dossier exact `Art/RecherchesArtistiques/`:

```bash
python3 -m http.server 4321 --bind 127.0.0.1
```

Puis ouvrir `http://localhost:4321` dans un navigateur.

Ne jamais lancer cette commande depuis la racine `TheSystemian/`: cela rendrait le contenu du vault, y compris ses fichiers sensibles, accessible par HTTP sur le réseau local.

## Direction

- Palette : papier, noir doux, gris ligne, zones chaudes et froides à intensité faible
- Typographies prévues: Poppins et Roboto Mono, avec fallbacks système
- Forme principale: registre Kanban public
- Aucune donnée privée, administrative ou client ne doit être publiée

## État

Version 0.5. Le site réintègre sur chaque accueil un diptyque photo-texte vers la page À propos, avec une chromie chaude de faible intensité et un copyright bilingue. Il comprend les versions française et anglaise, un timestamp vivant en UTC+4, une page `À propos` bilingue et un portrait traité par des températures chromatiques faibles en CSS. L'accueil ne comporte plus de présentation biographique : le Registre, ses recherches et leurs états restent au centre. Deux recherches sont publiées : `Signatures temporelles`, active, et `Les Convocations du milieu`, émergente. Les autres colonnes restent volontairement vides jusqu'à validation de leur contenu public.
