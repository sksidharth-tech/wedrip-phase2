# Editorial UI Design Skill

## Context & Constraints
Activate this skill for digital magazines, portfolios, essays, or high-end lifestyle content. The interface must mimic high-quality print journalism layout systems.

## Core Rules
- **Typography Hybrid:** Pair elegant serif headers (e.g., Playfair, Garamond) with highly legible sans-serif body copy.
- **Layout:** Use multi-column text wrap, justified alignments, large drop caps, and asymmetrical block placements.
- **Imagery:** Treat media like full-bleed print spreads or frame them with generous white margins and small italic captions.

## Theme Presets
- **Background:** `#fdfbf7` (Warm Cream/Newsprint)
- **Text Main:** `#1c1a17` (Ink Black)
- **Muted Accent:** `#5a6b5c` (Sage Green) or `#8c7b6e` (Taupe)
- **Highlight:** `#bd9352` (Muted Gold)

## Component Specifications
- **Articles/Cards:** Use ultra-thin divider lines (`0.5px solid rgba(0,0,0,0.15)`). Place dates and categories in tiny, tracked-out uppercase typography (`letter-spacing: 0.15em`).
- **Headers:** Section titles should utilize massive font scaling that purposely scales near container edges.

## Implementation

### Typography Scale
```css
.editorial-display {
  font-family: 'Playfair Display', 'Georgia', serif;
  font-size: clamp(3rem, 8vw, 7rem);
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: -0.02em;
}

.editorial-subhead {
  font-family: 'Playfair Display', 'Georgia', serif;
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 400;
  font-style: italic;
  line-height: 1.2;
}

.editorial-body {
  font-family: 'Inter', 'Helvetica Neue', sans-serif;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.7;
  max-width: 65ch;
}

.editorial-caption {
  font-family: 'Inter', 'Helvetica Neue', sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  font-style: italic;
  color: rgba(28, 26, 23, 0.6);
}

.editorial-meta {
  font-family: 'Inter', 'Helvetica Neue', sans-serif;
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(28, 26, 23, 0.5);
}
```

### Layout Elements
```css
.editorial-divider {
  border: none;
  border-top: 0.5px solid rgba(0, 0, 0, 0.15);
  margin: 3rem 0;
}

.editorial-dropcap::first-letter {
  font-family: 'Playfair Display', serif;
  font-size: 4em;
  font-weight: 900;
  float: left;
  line-height: 0.8;
  margin-right: 0.1em;
  color: #1c1a17;
}

.editorial-columns {
  column-count: 2;
  column-gap: 3rem;
  column-rule: 0.5px solid rgba(0, 0, 0, 0.1);
}

.editorial-fullbleed {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}

.editorial-spread {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}
```

### Anti-Patterns to Avoid
- Never use bold sans-serif for display headers
- Never use thin divider lines thicker than 1px
- Never use bright/saturated accent colors
- Never use box shadows on cards
- Never use more than 2 fonts (serif + sans)
