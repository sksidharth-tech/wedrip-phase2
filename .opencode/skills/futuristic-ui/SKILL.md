# Futuristic UI Design Skill

## Context & Constraints
Activate this skill for sci-fi panels, cyberpunk layouts, command centers, and data-heavy telemetry HUDs. Avoid organic shapes, soft pastel palettes, and standard corporate card components.

## Core Rules
- **Layouts:** Use hyper-dense configurations, nested modular frames, split-screen diagnostics, and telemetry sidebars.
- **Geometry:** Cut container corners at 45-degree angles (chamfered edges). Incorporate target crosshairs, framing brackets, and coordinate grids.
- **Typography:** Force monospace, highly geometric technical sans-serifs, or micro-fonts. Use tracked-out uppercase letters (`letter-spacing: 0.2em`) for system labels.
- **Motion & Depth:** Layer components using translucent backdrops. Use sharp scanlines, visual glitches, flickering states, and glowing data nodes.

## Theme Presets
- **Background:** `#020617` (Deep Space Obsidian)
- **Surface:** `rgba(15, 23, 42, 0.6)` (Translucent Dark Slate)
- **Text Main:** `#38bdf8` (Holographic Cyan)
- **Accent High:** `#f43f5e` (Alert Crimson) or `#22c55e` (Quantum Matrix Green)
- **Grid Lines:** `rgba(56, 189, 248, 0.15)` (Faint Laser Blue)

## Component Specifications
- **Containers:** Use `clip-path` for angular corners. Add thin, high-contrast border borders (`1px solid`). Attach tiny technical telemetry markers like `[SYS-OK]` or time stamps to frame edges.
- **Interactive Elements:** Use neon outer glows (`box-shadow: 0 0 12px`). Clicking a button should trigger a fast visual scanline or inverted color flash.

## Implementation

### Typography
```css
.futuristic-display {
  font-family: 'Orbitron', 'Share Tech Mono', monospace;
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #38bdf8;
}

.futuristic-label {
  font-family: 'Share Tech Mono', 'Courier New', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(56, 189, 248, 0.6);
}

.futuristic-data {
  font-family: 'Share Tech Mono', 'Courier New', monospace;
  font-size: 0.875rem;
  color: #38bdf8;
  font-variant-numeric: tabular-nums;
}

.futuristic-mono {
  font-family: 'Share Tech Mono', 'Courier New', monospace;
  font-size: 0.75rem;
  letter-spacing: 0.05em;
}
```

### Container Styles
```css
.futuristic-panel {
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(56, 189, 248, 0.3);
  clip-path: polygon(
    0 0,
    calc(100% - 20px) 0,
    100% 20px,
    100% 100%,
    20px 100%,
    0 calc(100% - 20px)
  );
  position: relative;
}

.futuristic-panel::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #38bdf8, transparent);
}

.futuristic-bracket {
  position: relative;
  padding: 1rem;
}

.futuristic-bracket::before,
.futuristic-bracket::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  border: 1px solid #38bdf8;
}

.futuristic-bracket::before {
  top: 0;
  left: 0;
  border-right: none;
  border-bottom: none;
}

.futuristic-bracket::after {
  bottom: 0;
  right: 0;
  border-left: none;
  border-top: none;
}
```

### Glow Effects
```css
.futuristic-glow {
  box-shadow: 0 0 12px rgba(56, 189, 248, 0.4);
}

.futuristic-glow-red {
  box-shadow: 0 0 12px rgba(244, 63, 94, 0.4);
}

.futuristic-glow-green {
  box-shadow: 0 0 12px rgba(34, 197, 94, 0.4);
}

.futuristic-text-glow {
  text-shadow: 0 0 8px rgba(56, 189, 248, 0.6);
}

.futuristic-scanline {
  position: relative;
  overflow: hidden;
}

.futuristic-scanline::after {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(56, 189, 248, 0.03) 2px,
    rgba(56, 189, 248, 0.03) 4px
  );
  pointer-events: none;
}
```

### Interactive States
```css
.futuristic-btn {
  background: transparent;
  border: 1px solid #38bdf8;
  color: #38bdf8;
  padding: 0.75rem 1.5rem;
  font-family: 'Share Tech Mono', monospace;
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.15s ease;
}

.futuristic-btn:hover {
  background: rgba(56, 189, 248, 0.1);
  box-shadow: 0 0 20px rgba(56, 189, 248, 0.3);
  border-color: #38bdf8;
}

.futuristic-btn:active {
  background: #38bdf8;
  color: #020617;
  box-shadow: 0 0 30px rgba(56, 189, 248, 0.5);
}

.futuristic-btn-red {
  border-color: #f43f5e;
  color: #f43f5e;
}

.futuristic-btn-red:hover {
  background: rgba(244, 63, 94, 0.1);
  box-shadow: 0 0 20px rgba(244, 63, 94, 0.3);
}
```

### Grid Background
```css
.futuristic-grid-bg {
  background-image: 
    linear-gradient(rgba(56, 189, 248, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(56, 189, 248, 0.05) 1px, transparent 1px);
  background-size: 40px 40px;
}

.futuristic-grid-bg-dense {
  background-image: 
    linear-gradient(rgba(56, 189, 248, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(56, 189, 248, 0.03) 1px, transparent 1px);
  background-size: 20px 20px;
}
```

### Anti-Patterns to Avoid
- Never use organic/rounded shapes
- Never use pastel or soft colors
- Never use standard card layouts with border-radius
- Never use serif fonts
- Never animate with slow/ease-in-out (use sharp/ease-out)
- Never use drop shadows without glow
