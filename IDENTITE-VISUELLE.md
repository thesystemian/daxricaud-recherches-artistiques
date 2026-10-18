# Identité visuelle du Registre public

## Dax Ricaud, artiste plasticien

**Version de référence du site : 1.4**  
**Site :** https://daxricaud.com/

Cette fiche décrit l'identité visuelle publique du site consacré aux recherches artistiques de Dax Ricaud. Elle concerne le travail artistique et son registre public.

Le site est pensé comme un espace de recherche, de classement et d'observation. Il privilégie une forme sobre, lisible, documentaire et ouverte, plutôt qu'une présentation commerciale ou décorative.

## Palette claire

| Rôle | Nom d'usage | Code |
|---|---|---:|
| Fond principal | Papier | `#f7f6f2` |
| Fond chaud | Papier chaud | `#f3f1ed` |
| Fond froid | Papier froid | `#f0f2f3` |
| Contraste clair | Blanc | `#ffffff` |
| Texte principal | Noir doux | `#171817` |
| Texte secondaire fort | Anthracite | `#2d302f` |
| Texte secondaire | Graphite | `#696a66` |
| Ligne discrète | Gris ligne | `#d9d8d1` |
| Ligne forte | Gris ligne fort | `#a4a39b` |
| Marque chaude | Gris chaud | `#625d57` |
| Marque froide | Gris froid | `#535c62` |

## Palette sombre

Le mode sombre est appliqué automatiquement selon l'heure de Maurice. Il s'agit de la même identité visuelle dans un environnement nocturne.

| Rôle | Code |
|---|---:|
| Fond principal | `#111312` |
| Fond chaud | `#171917` |
| Fond froid | `#1c2020` |
| Contraste sombre | `#222625` |
| Texte principal | `#f2f1eb` |
| Texte secondaire fort | `#d6d7d2` |
| Texte secondaire | `#b5b7b1` |
| Ligne discrète | `#353936` |
| Ligne forte | `#656a65` |
| Marque chaude | `#bbb2a8` |
| Marque froide | `#aab6bd` |

### Logique de couleur

- Le fond évoque le papier et n'est pas blanc pur par défaut.
- Le texte reste plus doux que le noir absolu.
- Les zones chaudes et froides sont peu saturées.
- La couleur différencie une température ou un état, elle ne sert pas de décoration gratuite.
- Les images d'archive ne sont pas recolorisées par le thème temporel.
- Le portrait `Filtre Ardoise` conserve sa couleur propre sur les pages d'accueil et À propos.

## Typographies

### Poppins

Police principale utilisée pour les titres, les textes, la navigation et les liens :

```css
font-family: "Poppins", "Avenir Next", Avenir, "Helvetica Neue", Arial, sans-serif;
```

Poppins sert notamment pour :

- les titres et intertitres ;
- les paragraphes ;
- la navigation ;
- les liens ;
- les légendes courantes.

La graisse habituelle des titres est `500`.

Le nom correct est **Poppins**, avec deux `p` au milieu. « Popins » est une faute d'orthographe.

### Roboto Mono

Police secondaire utilisée pour les données, les repères et les informations de registre :

```css
font-family: "Roboto Mono", "SFMono-Regular", Consolas, "Liberation Mono", monospace;
```

Roboto Mono sert notamment pour :

- les dates et heures ;
- les numéros de recherche ;
- les versions ;
- les états ;
- les petits libellés en capitales ;
- le compteur Fibonacci ;
- les indications d'archive.

Elle ne doit pas être utilisée pour les longs paragraphes.

## Composition

La forme principale du site est un **registre Kanban public**. Les colonnes représentent des états de recherche :

- Émergentes / Emerging ;
- Actives / Active ;
- Interrompues / Interrupted ;
- Clôturées / Completed ;
- Transformées / Transformed.

Ces états ne classent pas les œuvres par valeur. Ils rendent visible une situation de travail.

La composition privilégie :

- les grilles ;
- les listes ;
- les colonnes ;
- les chaînes d'étapes ;
- les entrées d'archive ;
- les relations entre texte, date, image et état ;
- le vide et la respiration.

## Espacements

Les espacements de référence sont fluides et adaptés aux écrans :

```css
--page-gutter: clamp(1rem, 4vw, 4rem);
--section-space: clamp(4rem, 10vw, 9rem);
--radius: 0.25rem;
```

Les cartes et séparations restent discrètes. Les angles sont légèrement arrondis, sans effet ludique ou décoratif.

## Images

Les images publiques sont traitées comme des documents ou des traces.

Le portrait de référence est le portrait carré `Filtre Ardoise`, utilisé en couleur et affiché entièrement sur les accueils et les pages À propos / About.

La légende de référence est :

```text
PORTRAIT, ÉTAT CHROMATIQUE 01.
```

Les documents de l'archive `Signatures temporelles` doivent conserver leurs dates, leurs limites documentaires et leurs légendes publiques. Les textes alternatifs doivent décrire l'image sans présenter une interprétation comme un fait.

## Temporalité

Le site utilise le fuseau `Indian/Mauritius` :

- mode clair : de 06:00 à 18:29 ;
- mode sombre : de 18:30 à 05:59.

Le site affiche également une horloge locale en UTC+4, une progression de la minute et un compteur Fibonacci expérimental.

Origine fixe du compteur :

```text
2026-10-06 | 08:32 UTC+4
```

Le compteur indique un rang temporel. Il ne mesure ni la productivité ni la valeur du travail artistique.

## Ton associé

L'écriture visuelle et éditoriale doit rester :

- précise ;
- calme ;
- située ;
- non promotionnelle ;
- attentive aux limites de la preuve ;
- capable de distinguer un fait, une interprétation, une hypothèse, une information non vérifiée et une donnée inconnue.

## Règles de protection

Lors d'une modification du contenu public :

- ne pas modifier la palette sans décision artistique explicite ;
- ne pas remplacer Poppins ou Roboto Mono sans validation ;
- ne pas modifier les classes CSS ni les comportements existants ;
- ne pas modifier l'horloge, le thème Maurice ou le compteur Fibonacci ;
- conserver les URL et les balises canoniques ;
- ne publier aucune captation, aucun poème, aucune conversation et aucune archive privée ;
- comparer toute nouvelle version avec la référence 1.4.
