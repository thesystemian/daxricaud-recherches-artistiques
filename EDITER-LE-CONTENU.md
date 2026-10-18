# Éditer le contenu du Registre public

Ce guide explique comment modifier les textes publics du site sans toucher à son apparence ni à son fonctionnement.

## Règle principale

Tu modifies uniquement les fichiers JSON dans :

```text
Sources/content/
```

Tu ne modifies pas directement :

- les fichiers `index.html` générés ;
- les fichiers dans `templates/` ;
- `styles.css` ;
- `script.js` ;
- les chemins d'images ;
- les URL et les balises canoniques.

Si une modification semble nécessiter du HTML, du CSS ou du JavaScript, arrête-toi et demande une vérification.

## Quel fichier ouvrir ?

| Contenu à modifier | Fichier |
|---|---|
| Accueil français | `content/fr/registre.json` |
| Accueil anglais | `content/en/registre.json` |
| Alias de l'accueil anglais `/en/` | `content/en/accueil-alternatif.json` |
| À propos | `content/fr/a-propos.json` |
| About | `content/en/about.json` |
| Index français | `content/fr/index-des-recherches.json` |
| Research Index | `content/en/research-index.json` |
| Les Convocations du milieu | `content/fr/les-convocations-du-milieu.json` |
| The Summons of the Milieu | `content/en/the-summons-of-the-milieu.json` |
| Signatures temporelles | `content/fr/signatures-temporelles.json` |
| Temporal Signatures | `content/en/temporal-signatures.json` |
| Études de l'ordinaire | `content/fr/etudes-de-lordinaire.json` |
| Studies of the Ordinary | `content/en/studies-of-the-ordinary.json` |

## Les clés les plus importantes

| Clé | Ce qu'elle contrôle |
|---|---|
| `title` | Le titre principal de la page ou de la recherche. |
| `eyebrow` | Le petit libellé en capitales au-dessus d'un titre. |
| `state` | L'état public, par exemple `Active` ou `Emerging`. |
| `version` | La version de la recherche. |
| `question` | La question affichée sous le titre d'une recherche. |
| `paragraphs` | Une liste de paragraphes, dans leur ordre d'affichage. |
| `metadata` | Les informations courtes affichées sous un titre. |
| `steps` | Les étapes d'un protocole ou d'une chaîne de recherche. |
| `entries` | Une liste d'éléments, notamment les entrées d'archive. |
| `evidenceLabel` | Le type d'information, par exemple `Fait documenté` ou `Hypothèse`. |
| `evidenceNote` | La précision associée au type d'information. |
| `alt` | La description d'une image pour les personnes qui ne la voient pas. |
| `caption` | La légende visible sous une image. |
| `footerStatus` | Le petit texte de statut du pied de page. |

## Modifier un texte

1. Ouvre le fichier correspondant à la page.
2. Repère la clé concernée.
3. Modifie uniquement le texte entre guillemets.
4. Conserve les virgules, les accolades et les crochets.
5. Enregistre le fichier en UTF-8.
6. Vérifie que les guillemets français ou les apostrophes ne cassent pas la structure JSON.
7. Lance la génération locale seulement après vérification.

Exemple :

```json
"title": "Nouveau titre public"
```

Ne supprime pas les guillemets autour du texte.

## Modifier une version ou un état

Les valeurs d'état existantes sont actuellement :

- `Active` / `Active` ;
- `Émergente` / `Emerging` ;
- les autres états du registre public selon la langue.

Ne change pas la casse ou la traduction d'un état sans vérifier les cartes, l'Index et la page de recherche correspondante.

Une version doit rester un texte court, par exemple :

```json
"version": "0.3"
```

## Modifier une date

Les dates publiques peuvent apparaître dans plusieurs fichiers :

- la carte du Registre ;
- l'Index ;
- la page de recherche ;
- la légende de l'archive.

Après toute modification de date, il faut vérifier les quatre endroits. Ne modifie pas l'origine technique du compteur Fibonacci dans `script.js`.

## Modifier une image

Une image publique peut avoir :

- un chemin de fichier ;
- un texte alternatif ;
- une légende.

Ne change jamais le chemin d'une image sans vérifier qu'elle existe dans `assets/`. Ne copie pas d'image provenant d'un dossier privé du vault.

## Ce qui reste dans le code

Les éléments suivants ne sont pas des contenus à éditer :

- la palette ;
- Poppins et Roboto Mono ;
- les classes CSS ;
- les marges et les espacements ;
- le thème clair et sombre ;
- l'heure de Maurice ;
- la progression de la minute ;
- le compteur Fibonacci ;
- les URL canoniques ;
- la structure des liens ;
- les fonctions JavaScript.

Pour l'identité visuelle, voir `IDENTITE-VISUELLE.md`.

## Données interdites

Ne publie jamais :

- des captations privées ;
- des poèmes non publiés ;
- des conversations d'atelier ;
- des documents administratifs ;
- des informations client ;
- des clés API ou mots de passe ;
- des fichiers provenant d'une recherche privée non sélectionnée.

Le site public est une sélection. Il ne doit pas reproduire le contenu du vault.

## Sveltia CMS

Une interface Sveltia CMS est préparée dans le dépôt public, à l'adresse :

```text
https://daxricaud.com/admin/
```

Elle ne donne accès qu'aux 13 fichiers JSON publics copiés dans le dépôt de déploiement. Les templates, le générateur et le workflow GitHub Actions reconstruisent les pages HTML après la fusion d'une modification.

Le workflow est éditorial :

1. ouvrir `/admin/` ;
2. se connecter avec GitHub ;
3. modifier uniquement un contenu public ;
4. enregistrer la proposition ;
5. relire le diff ;
6. fusionner seulement après validation humaine ;
7. attendre la reconstruction GitHub Actions ;
8. vérifier la page publique.

Pour la première connexion, Sveltia peut demander un token GitHub personnel. Ne jamais transmettre ce token dans une conversation et ne jamais le placer dans un fichier du vault. Le token doit avoir uniquement les permissions nécessaires sur le dépôt public.

## Publication

La publication se fait en plusieurs étapes :

1. modifier le JSON localement ;
2. générer le site local ;
3. vérifier les 13 pages ;
4. comparer avec la référence 1.4 ;
5. présenter la page de test ;
6. attendre la validation de Dax ;
7. copier les fichiers validés dans `Deploiement/` ;
8. présenter le diff Git ;
9. attendre la validation du push ;
10. pousser sur GitHub ;
11. vérifier les URL publiques.

Aucune modification de contenu ne doit être poussée directement sans cette vérification.
