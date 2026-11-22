# Charte JCI complète

Source : JCI Brand Guidelines v1.4 (18 décembre 2025), traduite et structurée pour la production de contenu. En cas de doute sur une formulation, le texte d'origine est dans [`source/`](source/).

---

## 1. Identité et voix

JCI (Junior Chamber International) est un réseau mondial de jeunes leaders qui apprennent en faisant, grandissent en partageant et mènent en agissant.

**Signature** : *Become the Change.* (slogan de marque, gardé en anglais).

### Ton

- Voix active, encourageante, qui s'adresse directement aux jeunes leaders.
- JCI parle en « nous ».
- Titres en casse de phrase.
- Pas d'emoji décoratif.

### Les trois messages clés

Chaque contenu part d'un de ces messages. Ce sont des points de départ, pas des textes à recopier.

| Message | Idée centrale |
| --- | --- |
| **Focus on Real Impact** — un impact réel | Un impact concret sur les membres et leurs communautés. |
| **Developing Leadership Skills** — développer ses compétences de leader | Devenir meilleur en apprenant par la pratique. |
| **Diversity of Opportunities** — la diversité des opportunités | Quatre domaines d'opportunités et un sentiment d'appartenance. |

---

## 2. Couleurs

### Palette

| Token | Hex | Rôle | Pantone / CMJN |
| --- | --- | --- | --- |
| `jci-blue` | `#0097D7` | Primaire, couleur principale | 2925 C · 77/27/0/0 |
| `jci-black` | `#130F2D` | Primaire, texte et fonds sombres | 5395 C · 100/98/47/66 |
| `jci-white` | `#FFFFFF` | Primaire, fond | — |
| `jci-navy` | `#1F4789` | Secondaire | 2728 C · 96/76/15/3 |
| `jci-teal` | `#57BCBC` | Secondaire | 3265 C · 63/0/30/0 |
| `jci-yellow` | `#EFC40F` | Secondaire, accent de contraste | 142 C · 7/21/93/0 |

Teintes (couleur mélangée à du blanc), pour fonds et éléments secondaires :

| Couleur | 75 % | 50 % | 25 % |
| --- | --- | --- | --- |
| blue | `#40B1E1` | `#80CBEB` | `#BFE5F5` |
| black | `#4E4B62` | `#898796` | `#C4C3CA` |
| navy | `#5775A6` | `#8FA3C4` | `#C7D1E2` |
| teal | `#81CDCD` | `#ABDEDE` | `#D5EEEE` |
| yellow | `#F3D34B` | `#F7E287` | `#FBF0C3` |

### Proportions (indicatives, ajustables selon le contexte)

Blanc 20 % · noir JCI 20 % · bleu JCI 35 % · navy 10 % · teal 10 % · jaune 5 %.

Le bleu JCI doit être bien présent. Le noir et le blanc apportent calme et contraste ; la palette secondaire ajoute de l'intérêt avec parcimonie.

### Paires fond / texte autorisées par le guide

| Fond | Couleurs de premier plan autorisées |
| --- | --- |
| noir JCI | blanc, bleu, navy, teal, jaune |
| blanc | noir, bleu, navy, teal, jaune |
| bleu JCI | noir, blanc, navy |
| navy | noir, blanc, bleu, teal, jaune |
| teal | noir, blanc, navy |
| jaune | noir, blanc, navy |

### Contraste pour le texte (WCAG 4,5:1, ou 3:1 à partir de 24 px ou gras 19 px)

À utiliser pour le texte courant :

- noir JCI sur bleu (5,7:1), sur teal (8,2:1), sur jaune (11,1:1) ;
- blanc sur navy (9,0:1) et sur noir (18,5:1) ;
- noir sur blanc (18,5:1), navy sur blanc (9,0:1).

Autorisé par le guide mais **trop faible pour du texte courant** :

- blanc sur bleu (3,3:1) : grand texte seulement ;
- blanc sur teal (2,3:1), blanc sur jaune (1,7:1), navy sur bleu (2,8:1) : logos et graphismes uniquement ;
- texte bleu JCI sur blanc (3,3:1) : grand texte seulement. Pour le petit texte coloré, utiliser le navy.

En cas de doute, la lisibilité passe avant tout.

### Tokens sémantiques (interfaces, thèmes clair et sombre)

| Token | Clair | Sombre | Usage |
| --- | --- | --- | --- |
| `surface` | blanc | noir JCI | Fond de page |
| `surface-tint` | `#F2FAFD` | `#172049` (dérivé) | Panneaux, cartes |
| `ink` | noir JCI | blanc | Texte principal |
| `ink-muted` | black-75 | black-25 | Texte secondaire |
| `accent` | bleu | bleu | Aplats, filets, grand texte |
| `accent-text` | navy | blue-50 | Liens, petit texte coloré |
| `on-accent` | noir | noir | Texte sur aplat bleu |
| `highlight` / `on-highlight` | jaune / noir | jaune / noir | Mise en avant ponctuelle |
| `secondary` / `on-secondary` | navy / blanc | navy / blanc | Blocs secondaires |
| `support` / `on-support` | teal / noir | teal / noir | Aplats teal (jamais de texte blanc) |
| `border` | black-50 | black-50 | Contours porteurs de sens |

---

## 3. Typographie

- **Principale : Plus Jakarta Sans** (Google Fonts, gratuite), des titres au texte courant. Privilégier Light, Regular et Medium ; SemiBold ou Bold pour l'emphase. Interlettrage 0.
- **Secours : Readex Pro**, seulement dans Canva sans compte Pro.
- **Écritures non latines : Noto Sans** (variante de la langue). Si latin et non-latin se mélangent : Plus Jakarta Sans pour le latin, Noto Sans pour le reste.
- **Secondaire : Arvo** (Regular, à empattements), uniquement pour les grandes citations et accroches éditoriales (communiqués, magazine). Toujours en bleu JCI.

### Hiérarchie

| Rôle | Classe CSS | Style |
| --- | --- | --- |
| Titre | `.jci-title` | Regular 48 px, interligne 120 % |
| Sous-titre | `.jci-subtitle` | Regular 24 px, 130 % |
| Intertitre | `.jci-subheading` | SemiBold 20 px, 140 % |
| Paragraphe | `.jci-paragraph` | Regular 16 px, 140 % |
| Citation | `.jci-quote` | Arvo Regular 24 px, 130 %, bleu JCI |
| Nom de lieu dans un logo | `.jci-location-name` | Bold 60 px pour un logo de 570 px, 110 % |

Construire la hiérarchie par la graisse, la taille, l'espacement et l'alignement.

---

## 4. Logo

Fichiers : [`assets/logos/`](assets/logos/) (PNG transparents, 1600 px de large, ratio hauteur/largeur 662/1600). Pas de source vectorielle fournie.

### Versions

- **Principale** : wordmark JCI + bouclier (avec ™). Le choix par défaut, presque partout.
- **Secondaire** : ajoute « Junior Chamber International » dessous. Pour en-têtes de lettre, signatures mail, documents formels. Non fournie ici : à demander à JCI.
- **Nationale / locale** : logo principal + nom officiel du lieu dessous, aligné à gauche, Plus Jakarta Sans Bold, bleu JCI. Ligne 1 ne dépasse pas la première ligne extérieure du bouclier, ligne 2 ne dépasse pas le bouclier ; couper les noms longs sur deux lignes. Logos officiels : https://jci.cc/logo-generator/.
- **Bouclier seul** : quand la lisibilité prime (photo de profil, favicon, petit objet).

### Quel fichier selon le fond

| Fond | Fichier |
| --- | --- |
| Blanc ou clair | `jci-logo-default.png` |
| Noir JCI ou sombre | `jci-logo-inverted.png` |
| Bleu JCI, autre couleur, photo sombre | `jci-logo-white.png` |
| Monochrome, technique, photo claire | `jci-logo-black.png` |

`default` et `black` sont les masters fournis ; `white` et `inverted` ont été recolorés et seront remplacés par les fichiers officiels quand disponibles.

### Zone de protection, taille, placement

- Espace libre de chaque côté = moitié de la largeur du bouclier.
- Minimum 32 px de haut à l'écran, 5 mm en impression.
- Placement : de préférence en haut à gauche ou à droite ; sinon en bas à gauche ou à droite ; en dernier recours centré en haut ou en bas. Toujours sur un fond bien contrasté.

### Interdits

Redimensionner un élément séparément, étirer, faire pivoter, changer l'écart entre les éléments, retourner le bouclier, changer la disposition, recolorer, ajouter un contour, une ombre ou tout effet.

---

## 5. Ripple (motif graphique)

Tiré des lignes concentriques du logo, c'est le motif signature. Fichiers prêts : [`assets/ripple/`](assets/ripple/) ; composant `Ripple` dans [`composants/`](composants/).

- Anneaux concentriques, chacun coupé en quatre quarts égaux.
- Écart entre les quarts = largeur de l'anneau ; espace entre anneaux = largeur de l'anneau.
- Chaque anneau est tourné de 15° par rapport au plus petit.
- On l'agrandit en ajoutant des anneaux vers l'extérieur, même épaisseur et même espacement.
- Couleurs des quarts sur fond clair : teal, bleu, navy, noir (anneaux extérieurs en teintes 25 % pour la profondeur). Sur fond sombre : remplacer le noir par du blanc pour qu'aucun anneau ne disparaisse.
- Usage : discret en arrière-plan, ou grand élément distinctif (slides, papeterie, affiches), généralement coupé par un bord du format.
- Ne jamais arrondir ni déformer le ripple.

| Fichier | Pour |
| --- | --- |
| `ripple-fond-clair.svg` | fonds blancs ou clairs |
| `ripple-fond-sombre.svg` | fonds noir JCI ou navy |
| `ripple-blanc.svg` | aplats bleu JCI ou photo sombre |

---

## 6. Photographie

- **Les personnes d'abord** : visages, expressions, interactions.
- **Sur le vif et authentique** : pas posé, pas trop retouché.
- **Diversité** : membres de milieux, régions et parcours différents.
- **Énergie et optimisme** : lumineux, lumière naturelle, compositions ouvertes.
- Sur une photo, logo `white` si elle est sombre, `black` si elle est claire.

---

## 7. Iconographie

JCI ne définit pas de jeu d'icônes. Le seul pictogramme est le bouclier (logo sans le wordmark). Ne pas inventer d'icônes « style JCI » : utiliser du texte simple ou le bouclier.

---

## 8. Mise en page (repères dérivés)

Pas définis par le guide, déduits de ses mises en page :

- Espacements : `space-1` 4 px · `space-2` 8 px · `space-3` 16 px · `space-4` 24 px · `space-5` 32 px · `space-6` 48 px · `space-7` 64 px.
- Arrondis : `radius-sm` 8 px (petits contrôles) · `radius-md` 16 px (panneaux, cartes) · `radius-lg` 24 px (grands panneaux, cadres photo). Le logo, le bouclier et le ripple ne sont jamais arrondis.
- Fond : blanc avec panneaux `surface-tint` en clair, noir JCI en sombre.
