# Retro UI Design Skill

## Context & Constraints
Use this skill whenever the user explicitly requests "retro", "vintage", "90s", "Windows 95", or "arcade" design aesthetics. Avoid modern flat or minimalist SaaS layouts.

## Core Rules
- **Layouts:** Use strict grid alignments, heavy containers, and fixed-width sidebars.
- **Borders:** Implement pixelated borders and chunky bevels.
- **Typography:** Force monospace, blocky sans-serif, or pixel fonts. 
- **States:** Interactive elements must have dramatic, immediate visual shifts on hover and click.

## Theme Presets

### 1. Windows 95 / Classic Desktop
- **Background:** `#008080` (Classic Teal)
- **Surface:** `#c0c0c0` (Light Gray)
- **Text:** `#000000` (Pure Black)
- **Accent:** `#000080` (Navy Blue Window Headers)
- **Borders:** 2px bevel (`border-top: white`, `border-left: white`, `border-bottom: #808080`, `border-right: #808080`)
- **Active Button:** Invert the border shades to create a "sunken" click effect.

### 2. 80s Arcade / Synthwave Neon
- **Background:** `#0d0221` (Deep Space Violet)
- **Surface:** `#241734` (Dark Purple)
- **Text:** `#00ffff` (Cyan Neon)
- **Accent:** `#ff007f` (Hot Pink)
- **Borders:** 1px solid neon with CSS `box-shadow` glows.

### 3. VHS / Physical Media
- **Background:** `#1a1a1a` (VHS Black)
- **Surface:** `#2a2a2a` (VHS Dark Gray)
- **Text:** `#f5f5f5` (VHS White)
- **Accent:** `#ff6b35` (VHS Orange)
- **Secondary:** `#eab308` (Tracking Yellow)
- **Borders:** 1px solid with scanline overlays
- **Effects:** Film grain, tracking lines, static noise, CRT scanlines

### 4. Pixel Art / 8-bit
- **Background:** `#1a1c2c` (Dark Pixel)
- **Surface:** `#5d275d` (Pixel Purple)
- **Text:** `#f4f4f4` (Pixel White)
- **Accent:** `#ffcd75` (Pixel Gold)
- **Borders:** 2px solid, no anti-aliasing, `image-rendering: pixelated`

## Implementation Guide

### Windows 95 Bevel Effect
```css
.win95-border {
  border: 2px solid;
  border-color: #ffffff #808080 #808080 #ffffff;
  box-shadow: inset 1px 1px 0 #dfdfdf, inset -1px -1px 0 #000000;
}

.win95-border-inset {
  border: 2px solid;
  border-color: #808080 #ffffff #ffffff #808080;
  box-shadow: inset 1px 1px 0 #000000, inset -1px -1px 0 #dfdfdf;
}

.win95-button {
  background: #c0c0c0;
  border: 2px solid;
  border-color: #ffffff #808080 #808080 #ffffff;
  padding: 4px 12px;
  font-family: 'MS Sans Serif', Arial, sans-serif;
  font-size: 12px;
  cursor: pointer;
}

.win95-button:active {
  border-color: #808080 #ffffff #ffffff #808080;
  padding: 5px 11px 3px 13px;
}
```

### Neon Glow Effect
```css
.neon-glow {
  color: #00ffff;
  text-shadow: 
    0 0 5px #00ffff,
    0 0 10px #00ffff,
    0 0 20px #00ffff,
    0 0 40px #00ffff;
}

.neon-border {
  border: 1px solid #00ffff;
  box-shadow: 
    0 0 5px #00ffff,
    inset 0 0 5px rgba(0, 255, 255, 0.1);
}

.neon-pink-glow {
  color: #ff007f;
  text-shadow: 
    0 0 5px #ff007f,
    0 0 10px #ff007f,
    0 0 20px #ff007f;
}
```

### VHS / Physical Media Effects
```css
.vhs-scanlines {
  position: relative;
}
.vhs-scanlines::after {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 0, 0, 0.03) 2px,
    rgba(0, 0, 0, 0.03) 4px
  );
  pointer-events: none;
}

.vhs-tracking {
  position: fixed;
  left: 0;
  right: 0;
  height: 2px;
  background: rgba(255, 255, 255, 0.1);
  animation: vhsTracking 8s linear infinite;
  pointer-events: none;
  z-index: 9999;
}

@keyframes vhsTracking {
  0% { transform: translateY(-100vh); }
  100% { transform: translateY(100vh); }
}

.vhs-static {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 150px 150px;
  animation: tvStatic 0.5s steps(10) infinite;
}

@keyframes tvStatic {
  0% { background-position: 0 0; }
  100% { background-position: 100% 100%; }
}
```

### Pixel Art Effects
```css
.pixel-border {
  border: 2px solid;
  image-rendering: pixelated;
  image-rendering: crisp-edges;
}

.pixel-text {
  font-family: 'Press Start 2P', 'Courier New', monospace;
  font-size: 8px;
  line-height: 1.5;
  letter-spacing: 1px;
}

.pixel-shadow {
  box-shadow: 
    2px 2px 0 #000000,
    4px 4px 0 rgba(0, 0, 0, 0.5);
}
```

### Typography Presets
```css
/* Windows 95 */
.font-win95 {
  font-family: 'MS Sans Serif', 'Segoe UI', Arial, sans-serif;
  font-size: 12px;
}

/* Arcade / Terminal */
.font-arcade {
  font-family: 'VT323', 'Courier New', monospace;
  letter-spacing: 0.1em;
}

/* Pixel Art */
.font-pixel {
  font-family: 'Press Start 2P', 'Courier New', monospace;
  font-size: 8px;
}

/* VHS / Retro Mono */
.font-vhs {
  font-family: 'Space Mono', 'Courier New', monospace;
  font-size: 11px;
  letter-spacing: 0.05em;
}
```

## Interactive States

### Button States (All Presets)
- **Default:** Standard border/shadow
- **Hover:** Brighten background or add glow
- **Active/Pressed:** Invert borders (sunken effect) or scale(0.98)
- **Disabled:** Reduce opacity to 0.5, remove pointer events

### Card States
- **Default:** Static border/shadow
- **Hover:** Lift with `transform: translateY(-2px)` and enhanced shadow
- **Active:** Subtle scale or color shift

## Color Palette Quick Reference

| Preset | Background | Surface | Text | Accent |
|--------|------------|---------|------|--------|
| Win95 | `#008080` | `#c0c0c0` | `#000000` | `#000080` |
| Arcade | `#0d0221` | `#241734` | `#00ffff` | `#ff007f` |
| VHS | `#1a1a1a` | `#2a2a2a` | `#f5f5f5` | `#ff6b35` |
| Pixel | `#1a1c2c` | `#5d275d` | `#f4f4f4` | `#ffcd75` |

## Anti-Patterns to Avoid
- Don't mix presets (Win95 borders with Neon glows looks wrong)
- Don't use smooth/rounded corners on Win95 or Pixel styles
- Don't animate VHS scanlines (they should be static overlays)
- Don't use thin/light fonts with retro styles (they need weight)
- Don't apply neon glows to large surface areas (performance cost)
