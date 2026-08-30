# Swiss UI Design Skill

## Context & Constraints
Activate this skill for minimalist, objective, and highly structured modern interfaces. Prioritize mathematical clarity, geometric order, and information hierarchy over decorative elements.

## Core Rules
- **Grid:** Use a strict, visible, or strongly implied asymmetric multi-column grid layout.
- **Typography:** Exclusively use clean, heavy sans-serif fonts (e.g., Helvetica, Inter). Emphasize extreme size contrasts.
- **Whitespace:** Use massive, deliberate negative space to dictate reading priority.
- **Decorations:** Strictly prohibit shadows, gradients, and decorative borders. Use solid rules and blocks of color only.

## Theme Presets
- **Background:** `#f4f4f4` (Light Gray) or `#ffffff` (Pure White)
- **Text Primary:** `#000000` (Dense Black)
- **Accent Color:** `#d92727` (Swiss Red)
- **Secondary Block:** `#1a1a1a` (Dark Gray)

## Component Specifications
- **Navigation:** Flush layout aligned strictly to the left margin. Numbers or geometric symbols replace icons.
- **Cards:** No box boundaries. Group items purely through strategic spacing and bold horizontal divider lines (`1px solid #000`).

## Implementation

### Typography Scale
```css
.swiss-display {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: clamp(3rem, 8vw, 8rem);
  font-weight: 700;
  line-height: 0.9;
  letter-spacing: -0.03em;
}

.swiss-heading {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: clamp(1.5rem, 4vw, 3rem);
  font-weight: 400;
  line-height: 1.1;
}

.swiss-body {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  max-width: 60ch;
}

.swiss-caption {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}
```

### Grid System
```css
.swiss-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 2rem;
}

.swiss-divider {
  border: none;
  border-top: 1px solid #000;
  margin: 2rem 0;
}

.swiss-divider-thick {
  border: none;
  border-top: 3px solid #000;
  margin: 2rem 0;
}
```

### Color Hierarchy (Opacity Only)
```css
.swiss-text-primary { color: #000; }
.swiss-text-secondary { color: rgba(0, 0, 0, 0.7); }
.swiss-text-tertiary { color: rgba(0, 0, 0, 0.4); }
.swiss-text-ghost { color: rgba(0, 0, 0, 0.2); }
```

### Anti-Patterns to Avoid
- Never use shadows
- Never use gradients
- Never use decorative borders
- Never use border-radius on structural elements
- Never use more than one accent color
- Never use bold for headings (use weight 400 or less)
