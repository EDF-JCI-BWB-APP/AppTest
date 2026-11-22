# Charte JCI — point d'entrée pour les agents IA

Adresse publique : https://edf-jci-bwb-app.github.io/AppTest/charte-jci/ — tous les chemins ci-dessous sont relatifs à cette adresse (ex. `charte.json` → https://edf-jci-bwb-app.github.io/AppTest/charte-jci/charte.json).

Ce dossier reprend la **charte officielle JCI** (*JCI Brand Guidelines v1.4*, 18 décembre 2025 — [PDF officiel](https://jci.cc/wp-content/uploads/2025/07/251218_JCI_Brand-Guide-v1-4.pdf)) sous une forme qu'un agent IA peut lire et appliquer directement pour produire du contenu : posts, visuels, slides, vidéos, pages, documents. Le PDF fait foi en cas de doute.

Il sert à l'École de la Formation JCI Bruxelles-Wallonie (EDF) et à l'app Trainer Match.

## Ordre de lecture

1. **Ce fichier** : règles essentielles et checklist.
2. [`charte.md`](charte.md) : la charte officielle en français, dans l'ordre du guide (01 Histoire, 02 Logo, 03 Couleurs, 04 Typographie, 05 Marque en action), pages citées. Les compléments non officiels sont isolés à la fin.
3. [`charte.json`](charte.json) : les mêmes règles en données structurées, chaque bloc avec un champ `statut` (officiel ou convention EDF).
4. Selon le livrable :
   - visuel ou page web : [`tokens/tokens.css`](tokens/tokens.css) (variables CSS + polices) ;
   - code React : [`composants/`](composants/) (`Logo`, `LocalLogo`, `Ripple`) ;
   - fichiers prêts à poser : [`assets/`](assets/) (logos, polices, ripples SVG).
5. [`source/`](source/) : texte d'origine du design system (anglais), en cas de doute sur une formulation.

Pour l'interface de l'app Trainer Match, voir aussi `docs/DESIGN-SYSTEM.md` dans le dépôt (privé) `trainermatch` : il décrit comment la charte est appliquée dans l'app.

## Les 10 règles à ne jamais oublier

1. **Bleu JCI `#0097D7` bien visible** : environ 35 % de la composition. Blanc ou noir JCI ~40 %, navy ~10 %, teal ~10 %, jaune ~5 % (accent seulement).
2. **Contraste** : texte noir JCI `#130F2D` sur bleu, teal et jaune ; texte blanc sur navy et noir. Jamais de texte blanc sur teal ou jaune. Blanc sur bleu : uniquement grand texte (24 px+ ou gras 19 px+).
3. **Petit texte coloré sur fond clair** : navy `#1F4789` (token `accent-text`), pas le bleu.
4. **Une seule police** : Plus Jakarta Sans pour tout. Arvo uniquement pour une grande citation éditoriale, en bleu JCI.
5. **Titres en casse de phrase** (« Devenir formateur ») — convention EDF.
6. **Logo choisi selon le fond** : `default` sur clair, `inverted` sur noir/sombre, `white` sur bleu ou couleur et photo sombre, `black` en monochrome et photo claire.
7. **Logo intouchable** : pas de déformation, rotation, recoloration, contour, ombre. Zone de protection = moitié de la largeur du bouclier. Jamais sous 32 px de haut à l'écran (5 mm en print). Placement préféré : en haut à gauche ou à droite.
8. **Ripple** (anneaux concentriques coupés en quarts, rotation de 15° par anneau) : grand et coupé par le bord du format. Ne pas modifier ses proportions.
9. **Photos** : vraies personnes, prises sur le vif, diversité, lumière naturelle, énergie positive.
10. **Pas d'emoji décoratif. Pas d'icônes inventées « style JCI »** : texte simple, ou le bouclier seul (convention EDF : le guide ne traite pas des icônes).

## Checklist de vérification avant livraison

L'agent vérifie chaque point et corrige tant qu'un point échoue.

- [ ] Le bleu JCI domine visiblement ; le jaune reste un petit accent.
- [ ] Chaque texte respecte une paire autorisée (voir `charte.json` → `couleurs.paires_autorisees`) et le contraste WCAG (4,5:1, ou 3:1 au-delà de 24 px / gras 19 px).
- [ ] Tous les textes sont en Plus Jakarta Sans (sauf citation Arvo).
- [ ] Le bon fichier logo est utilisé pour ce fond, sans déformation, avec sa zone de protection, à au moins 32 px de haut.
- [ ] Les titres sont en casse de phrase.
- [ ] Le message s'appuie sur un des trois messages clés (impact réel, compétences de leadership, diversité des opportunités).
- [ ] Aucun emoji décoratif, aucune icône inventée.
- [ ] Les seules couleurs utilisées sont celles de la palette (et leurs teintes 75/50/25 %).

## Ce qui n'est pas dans le guide officiel

Le guide ne couvre pas : règles de ton, icônes, mission/vision, modèles (réseaux sociaux, slides, papeterie, signatures mail), co-branding. Les règles de ton ci-dessus et les éléments suivants sont des conventions EDF : échelles d'espacement (`space-*`) et d'arrondis (`radius-*`), `surface-tint` en thème sombre, et les logos `white` et `inverted` (recolorés à partir des masters). À remplacer par les fichiers officiels JCI quand ils sont disponibles. Le logo secondaire (« Junior Chamber International » sous le logo) n'est pas fourni. Les logos locaux officiels se génèrent sur https://jci.cc/logo-generator/.

## Mise à jour

Source : PDF officiel ci-dessus, et design system « JCI » de Martin Lisen pour les tokens. Si JCI publie une nouvelle version, mettre à jour `charte.md` et `charte.json`, puis remplacer `tokens/tokens.json` et les fichiers de `source/`, puis régénérer `tokens/tokens.css`.
