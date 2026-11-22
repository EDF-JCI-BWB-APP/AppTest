# Colour

Six brand colours: primary `jci-blue`, `jci-black`, `jci-white`; secondary `jci-navy`, `jci-teal`, `jci-yellow`. Each has 75/50/25% tints (`jci-blue-75` and so on; white has none). Prefer the semantic tokens (`surface`, `ink`, `accent`, `secondary`, `support`, `highlight`) in UI; they switch between the light and dark themes.

## Proportions (guideline, adjustable by context)

White 20%, jci-black 20%, jci-blue 35%, jci-navy 10%, jci-teal 10%, jci-yellow 5%. JCI Blue must be used prominently; black and white give calm and contrast around it; the secondary palette adds interest sparingly.

## Approved pairings

| Background | Approved foreground colours |
| --- | --- |
| jci-black | white, blue, navy, teal, yellow |
| jci-white | black, blue, navy, teal, yellow |
| jci-blue | black, white, navy |
| jci-navy | black, white, blue, teal, yellow |
| jci-teal | black, white, navy |
| jci-yellow | black, white, navy |

When in doubt, prioritise legibility. Contrast facts to respect for text (WCAG 4.5:1, or 3:1 at 24px+ or bold 19px+):

- Use jci-black on jci-blue (5.7:1), jci-teal (8.2:1) and jci-yellow (11.1:1); use white on jci-navy (9.0:1).
- The guide also allows white on jci-blue (3.3:1), white on jci-teal (2.3:1), white on jci-yellow (1.7:1) and navy on jci-blue (2.8:1). Those pairs fail for text: keep them to large display text (blue only), logos and graphics, and use the semantic `on-*` tokens for copy.
- jci-blue text on white is 3.3:1: large text only. Use `accent-text` for small text.

Note on tokens: `surface-tint` in dark is derived (not in the guide), as are spacing and radius scales.
