# Typography

- **Primary: Plus Jakarta Sans** (Google Fonts, free) for everything from headlines to body. Lean toward Light, Regular and Medium for a clean, modern look; use SemiBold or Bold when extra emphasis or contrast is needed. Tracking 0.
- **Fallback: Readex Pro**, only in Canva without a Pro account. Not for other tools.
- **Non-Latin: Noto Sans** (matching language variant, e.g. Simplified Chinese, Arabic, Devanagari, Japanese). When Latin and non-Latin appear together, Plus Jakarta Sans for Latin and Noto Sans for the rest.
- **Secondary: Arvo** (slab serif, Regular) only for large quotes and callouts in editorial layouts such as press releases or the JCI magazine. Set in `jci-blue`. Everything else stays in Plus Jakarta Sans.

## Hierarchy

| Role | Style token | Face and size |
| --- | --- | --- |
| Title | `title` | Plus Jakarta Sans Regular 48, leading 120% |
| Subtitle | `subtitle` | Regular 24, leading 130% |
| Subheading | `subheading` | SemiBold 20, leading 140% |
| Paragraph | `paragraph` | Regular 16, leading 140% |
| Quote | `quote` | Arvo Regular 24, leading 130% |
| Location name in a logo | `location-name` | Bold 60 at a 570px logo, leading 110% |

Build hierarchy from weight, size, spacing and alignment so the structure reads at a glance. The system ships woff2 files for Plus Jakarta Sans (300 to 700) and Arvo (400), Latin subset; Readex Pro and Noto Sans are named in the `sans` and `nonlatin` families and load from Google Fonts.
