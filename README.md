# Dax Ricaud | Recherches artistiques

Version statique bilingue du site `Le Registre des recherches`.

## Ouvrir localement

Depuis le dossier exact `Art/RecherchesArtistiques/RegistrePublic/Sources/`:

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

Version 1.4 préparée avec un thème temporel automatique fondé sur l’heure de Maurice (`Indian/Mauritius`) : mode clair de 06:00 à 18:29, puis mode sombre de 18:30 à 05:59. Le même script s’exécute sur les 13 pages FR et EN, actualise la couleur d’interface du navigateur et ne modifie pas les photographies ou documents d’archive. La version 1.3 publiée est préservée dans `../Documentation/Versions/SourcesVersion1.3Publiee/`.

Version 1.3 publiée le 11/10/2026 au commit `54d081f`, puis corrigée au commit `9430cf2` pour conserver la couleur Ardoise sur les pages `À propos` et `About`, avec le portrait carré Instagram `Filtre Ardoise`, affiché entièrement sans recadrage. Dans le bloc `Artiste.` des accueils FR et EN, le titre, le texte et le lien restent à gauche sur environ deux tiers, tandis que le portrait en couleur apparaît à droite sur environ un tiers. Les pages `À propos` et `About` conservent également le texte à gauche et placent le même portrait carré à droite dans sa couleur `Filtre Ardoise`, sans conversion en noir et blanc. La légende française reste `PORTRAIT, ÉTAT CHROMATIQUE 01.`. L’essai antérieur avec le portrait vertical est préservé dans `../Documentation/Versions/SourcesVersion1.3PortraitVerticalLocal/`, et la version 1.2 publiée dans `../Documentation/Versions/SourcesVersion1.2Publiee/`.

Version 1.2 publiée le 10/10/2026 au commit `a0b436f`. Elle ramène le protocole public d’`Études de l’ordinaire` de huit à cinq étapes : `Performance → Captation → Questionnement → Poème de l’après-coup → Composition HTML`. Le dialogue est inclus dans le questionnement, le manuscrit et la transcription servent le même poème, et l’archivage reste essentiel sans devenir une sixième étape créative. La version 1.1 publiée est préservée dans `../Documentation/Versions/SourcesVersion1.1Publiee/`.

Version 1.1 publiée le 10/10/2026. Elle ajoute `Études de l’ordinaire` comme `RECHERCHE 03 / ÉMERGENTE` au Registre et à l’Index bilingues, avec une introduction française et anglaise. La page nomme `Balayer`, `Devant le ventilateur` et `Debout face à la caméra avec les mains sur les hanches` comme trois études documentées dans l’archive privée, sans publier leurs captations, Poèmes de l’après-coup, conversations ni fichiers HTML. La version 1.0 complète est préservée dans `../Documentation/Versions/SourcesVersion1.0/`. La sélection publique a été copiée dans `Deploiement/`, contrôlée localement puis publiée sur GitHub Pages.

Depuis le 07/10/2026, l'anglais est la langue d'accueil : `https://daxricaud.com/` affiche directement le registre anglais. L'accueil français est accessible à `/fr/` via le sélecteur `EN | FR`. L'ancien accueil `/en/` reste accessible, avec une URL canonique vers `/`. Les URL des recherches FR/EN existantes sont conservées ; les liens de retour et de légende respectent la langue de la page. Aucun changement du numéro de version 1.0 ni des contenus artistiques.

Version 1.0. Le Registre reste la vue centrale des états et s'enrichit d'un `Index` bilingue qui relie chaque carte à une page de recherche dédiée. `Signatures temporelles`, version 0.3, présente une définition, une chaîne de recherche et une archive provisoire de sept documents datés de 2012 à 2026. Les trois entrées de 2026 mettent en évidence l'underscore, le pipe, le cadre et le cercle comme opérateurs plastiques de séparation et de liaison. `Les Convocations du milieu`, version 0.1, expose son principe, sa chaîne indicielle, la direction `Signaux de rive` et un registre d'occurrences volontairement vide tant qu'aucune occurrence n'est constituée. La finition locale du 07/10/2026 conserve la structure mais remplace les accents EcoSystem par le papier, le graphite et des gris aux températures chaudes ou froides très faibles. Les titres des cartes et leurs liens ouvrent les pages dédiées. Une légende critique distingue fait documenté, interprétation, hypothèse, non vérifié et inconnu. Les cartes et pages rendent ces distinctions visibles : détail d'inscription réel pour Signatures temporelles, protocole à éprouver et absence d'occurrence constituée pour Les Convocations du milieu. Version 1.0 validée par Dax et publiée le 07/10/2026 au commit `c8cc265` dans le dépôt public séparé. Les dix pages FR/EN, sept images d'archive, styles et script ont été vérifiés en HTTP 200 sur `https://daxricaud.com/`. Les 404 des pages de recherche et de l'Index sont résolues.

Le compteur Fibonacci conserve son origine fixe au `2026-10-06 à 08:32 UTC+4`. Une seconde fait avancer d'un rang : le navigateur recalcule uniquement le rang courant à chaque ouverture, sans base de données et sans produire le nombre de Fibonacci devenu trop volumineux. Le bloc est compact et porte l'explication « Mesure temporelle expérimentale ». Sa pertinence artistique reste à éprouver ; il ne mesure pas la productivité.

Le site présente Dax simplement comme `Artiste`, tandis que les textes décrivent sa pratique comme conceptuelle et précisent les médiums qu'elle peut activer. Les accueils conservent une présentation textuelle et un lien vers À propos. Le portrait est réservé aux pages À propos / About, en niveaux de gris par CSS sans modification de l'image source. Le copyright reste bilingue. Le site comprend les versions française et anglaise, un timestamp vivant à date ISO (YYYY-MM-DD), en heure locale UTC+4, une page `À propos` bilingue, un `Index` bilingue, deux pages de recherche bilingues et un portrait en niveaux de gris par CSS. Le Registre, ses recherches et leurs états restent au centre. Dans la version 1.0 publiée, deux recherches sont présentes : `Signatures temporelles`, active, et `Les Convocations du milieu`, émergente. La version 1.1 ajoute une troisième entrée émergente, `Études de l’ordinaire`, dont le protocole passe à cinq étapes dans la version 1.2. Les autres colonnes restent volontairement vides jusqu'à validation de leur contenu public.

La version anglaise utilise `The Summons of the Milieu` et `Shore Signals`. La navigation mobile conserve tous ses liens. Le script et les styles sont versionnés pour éviter un affichage périmé en cache.
