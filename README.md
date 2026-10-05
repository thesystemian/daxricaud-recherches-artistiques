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

Version 0.3. Le site comprend les versions française et anglaise, un timestamp vivant en UTC+4, une page `À propos` bilingue et un portrait traité par des températures chromatiques faibles en CSS. L'accueil ne comporte plus de présentation biographique : le Registre, ses recherches et leurs états restent au centre. La seule recherche publiée est `Signatures temporelles`. Les autres colonnes restent volontairement vides jusqu'à validation de leur contenu public.
