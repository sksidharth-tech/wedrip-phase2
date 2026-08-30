# Handwritten UI Design Skill

## Context & Constraints
Activate this skill for informal, creative notes, scrapbooks, indie web-zines, or sketchpad interfaces. Avoid mechanical lines, rigid grids, and cold geometric perfection.

## Core Rules
- **Lines & Shapes:** Use rough, organic strokes. Paths, dividers, and container edges must look hand-drawn, slightly uneven, or sketched.
- **Typography:** Force handwriting, cursive, or marker-style fonts.
- **Asymmetry:** Intentionally skew, tilt, or rotate elements by small random degrees (`transform: rotate(-1deg)`).
- **Texturizing:** Make cards look like sticky notes, torn paper strips, or index cards.

## Theme Presets
- **Background:** `#f1eedb` (Graph/Notebook Paper Grid texture or plain Manila)
- **Ink Primary:** `#1a2332` (Ballpoint Blue) or `#111111` (Felt Pen Black)
- **Highlight:** `#fff275` (Highlighter Yellow)
- **Tape/Pin:** `#e2b4bd` (Washi Tape Pink)

## Component Specifications
- **Containers:** Apply erratic `border-radius` combinations (e.g., `255px 15px 225px 15px/15px 225px 15px 255px`) to mimic dynamic sketch outlines.
- **Hover States:** Links get a messy hand-drawn underline accent or a highlighter-style background splash when focused.

## Implementation

### Typography
```css
.handwritten-display {
  font-family: 'Caveat', 'Patrick Hand', cursive;
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
}

.handwritten-body {
  font-family: 'Caveat', 'Patrick Hand', cursive;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.6;
}

.handwritten-note {
  font-family: 'Caveat', 'Patrick Hand', cursive;
  font-size: 1rem;
  font-weight: 400;
  color: rgba(26, 35, 50, 0.7);
  transform: rotate(-1deg);
}
```

### Container Styles
```css
.handwritten-card {
  background: #fff9e6;
  border: 2px solid #1a2332;
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  padding: 1.5rem;
  transform: rotate(-0.5deg);
  box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
}

.handwritten-sticky {
  background: #fff275;
  padding: 1rem;
  transform: rotate(2deg);
  box-shadow: 2px 3px 0 rgba(0, 0, 0, 0.15);
  border: none;
}

.handwritten-index-card {
  background: #f1eedb;
  border: 1px solid rgba(26, 35, 50, 0.2);
  padding: 1.5rem;
  background-image: 
    linear-gradient(rgba(26, 35, 50, 0.05) 1px, transparent 1px);
  background-size: 100% 1.5rem;
}

.handwritten-tape {
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%) rotate(-2deg);
  width: 80px;
  height: 20px;
  background: rgba(226, 180, 189, 0.7);
}
```

### Hover Effects
```css
.handwritten-link {
  text-decoration: none;
  color: #1a2332;
  position: relative;
  display: inline;
}

.handwritten-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: -2px;
  right: -2px;
  height: 3px;
  background: #fff275;
  transform: rotate(-0.5deg);
  z-index: -1;
}

.handwritten-link:hover::after {
  background: #e2b4bd;
}
```

### Anti-Patterns to Avoid
- Never use perfect circles or squares
- Never use smooth gradients
- Never use geometric/technical fonts
- Never use rigid grid alignment
- Never use cold/blue-white backgrounds
