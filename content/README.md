# Contenu éditable du Registre public

Ce dossier contient les textes publics du site. Les fichiers sont en UTF-8 et au format JSON.

## Règle simple

- `fr/` contient les textes français.
- `en/` contient les textes anglais.
- Un fichier correspond à une page ou à un ensemble éditorial public.
- Les fichiers CSS, JavaScript, images et liens ne sont pas du contenu éditable.
- Ne jamais copier ici un texte provenant d'une recherche privée si ce texte n'est pas déjà publié.

## Clés prévues

| Clé | Signification |
|---|---|
| `title` | Grand titre visible de la page ou de la recherche. |
| `subtitle` | Phrase située sous le titre principal. |
| `eyebrow` | Petit libellé en capitales au-dessus d'un titre. |
| `state` | État public, par exemple `Active` ou `Emerging`. |
| `version` | Version publique de la page ou de la recherche. |
| `question` | Question de recherche affichée dans l'en-tête. |
| `body` | Texte principal de présentation. |
| `metadata` | Informations courtes affichées sous le titre. |
| `sections` | Blocs éditoriaux de la page. |
| `steps` | Étapes d'une chaîne de recherche ou d'un protocole. |
| `entries` | Liste d'entrées, par exemple les cartes du registre ou les archives. |
| `caption` | Légende publique d'une image. |
| `alt` | Description publique d'une image pour l'accessibilité. |
| `links` | Textes et adresses des liens éditoriaux. |
| `footer` | Texte public affiché dans le pied de page. |

Les clés techniques de navigation, les classes CSS, les identifiants HTML, les chemins de fichiers, le thème Maurice, l'horloge et le compteur Fibonacci restent dans le code. Ils ne doivent pas être modifiés lors d'une édition de contenu.

## Statut de la séparation

La copie `Documentation/Versions/SourcesVersion1.5AvantSeparation/` conserve l'état exact de la version 1.4 avant cette phase. Les fiches JSON seront remplies à partir des 13 HTML publics existants, sans importer de données privées.
