# Pixel Art UI Design Skill

## Context & Constraints
Activate this skill for 8-bit, 16-bit, RPG, or arcade-themed game interfaces. Every element must respect a low-resolution grid aesthetic. Never use gradients, smooth shadows, or anti-aliased borders.

## Core Rules
- **Sizing:** Scale components using strict pixel multiples (e.g., 4px, 8px, 16px).
- **Borders:** Use solid, uniform borders. No rounded corners (`border-radius: 0`).
- **Typography:** Force pixelated, monospaced, or block fonts. Set `font-smooth: never` and `image-rendering: pixelated`.
- **Icons:** Use primitive geometric shapes or raw sprite sheets.

## Theme Presets
- **Background:** `#141013` (Dark Charcoal)
- **Container Surface:** `#2c272e` (Stone Purple)
- **Primary Text:** `#deeed6` (Off-White/Mint)
- **Accent High:** `#e43b44` (Ruby Red)
- **Accent Low:** `#4d65b4` (Cobalt Blue)

## Component Specifications
- **Buttons:** 4px thick black outer border with a 4px inner highlight line. On hover, translate down-right by 2px and shrink the bottom shadow to simulate a physical depression.
- **Progress Bars:** Blocky segmented chunks (`■■■■□□□□`) instead of smooth loading transitions.

## Implementation

### Pixel Border
```css
.pixel-border {
  border: 4px solid #000;
  box-shadow: 
    inset -4px -4px 0 0 #555,
    inset 4px 4px 0 0 #fff;
}
```

### Pixel Button
```css
.pixel-btn {
  background: #2c272e;
  color: #deeed6;
  border: 4px solid #000;
  box-shadow: 
    inset -4px -4px 0 0 #555,
    inset 4px 4px 0 0 #fff,
    4px 4px 0 0 #000;
  padding: 8px 16px;
  font-family: 'Press Start 2P', monospace;
  font-size: 12px;
  image-rendering: pixelated;
  cursor: pointer;
}

.pixel-btn:hover {
  transform: translate(2px, 2px);
  box-shadow: 
    inset -4px -4px 0 0 #555,
    inset 4px 4px 0 0 #fff,
    2px 2px 0 0 #000;
}

.pixel-btn:active {
  transform: translate(4px, 4px);
  box-shadow: 
    inset 4px 4px 0 0 #555,
    inset -4px -4px 0 0 #fff,
    0 0 0 0 #000;
}
```

### Progress Bar
```css
.pixel-progress {
  display: flex;
  gap: 4px;
  font-family: 'Press Start 2P', monospace;
}

.pixel-progress-filled {
  color: #4d65b4;
}

.pixel-progress-empty {
  color: #555;
}
```

### Anti-Patterns to Avoid
- Never use `border-radius`
- Never use gradients
- Never use smooth/soft shadows
- Never use anti-aliased fonts
- Never animate with smooth easing (use steps)
