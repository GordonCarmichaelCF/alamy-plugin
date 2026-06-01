# Alamy Figma plugin — prototype brief

A working brief for building a **functional UI prototype** of an Alamy plugin for Figma. This document is the single source of truth — it captures the brand, design system, and what we're building.

---

## Role

Act as a senior front-end developer building a functional UI prototype for a new Figma plugin. This plugin is for Alamy, designed for art directors and creative professionals to search, verify, and license editorial images directly within their design workflow.

This is a **pitch prototype**, not production code. Optimise for: feels real, demos well, easy to tweak live during a presentation.

---

## What we're building

A floating modal plugin that lives inside Figma. Four sequential steps representing the AI-native user journey:

1. **SSO & Recognition** — automatic auth, welcome state, "Enterprise subscription" acknowledgement
2. **Search assistant** — plain-language input (no keyword filters), conceptually powered by an AI agent that can parse creative briefs
3. **AI-curated results** — masonry/grid of real Alamy images; hover or click surfaces provenance data (Verified Contributor, Capture Context, Content-Safety Check)
4. **Clearance & one-click licensing** — image detail view with "Cleared for Re-use" and "Indemnified" badges; primary "License & Insert" button for one-click checkout

Build this as state transitions in a single page. The prototype `index.html` already has all four states scaffolded behind a `currentStep` variable — work from there.

---

## Visual requirements

### Frame / environment
The plugin sits on a Figma canvas background. The starter HTML uses a neutral grey radial gradient as a placeholder. **Swap this for a real Figma canvas screenshot** by setting `.canvas` background-image once you have one to drop in.

### Plugin modal
A floating modal window. Reference Unsplash's Figma plugin, Iconify, and other "search a feed of media" plugin patterns for modal proportions and step-by-step transitions.

The starter uses 360px width — typical Figma plugin panel size. Resize if needed but stay within 320–400px.

### Brand — Alamy

**Tagline / spirit:** "Electrify creativity." Direct, second-person, no jargon. "Drop in any image to search" beats "Initiate visual similarity query."

**Visual identity:**
- Monochrome + one electric green pop. The green is rare by intent — it earns attention because nothing else competes.
- Bold condensed display type for headings (PP Formula Condensed Bold)
- Clean neutral sans for everything else (Noto Sans)
- Hard edges, no shadows, no gradients (except where shadows are necessary for the modal itself)
- Pill-shaped buttons and toggles; 4–6px radius on cards and inputs

---

## Design system

Two-layer token architecture. Light mode only.

### Tokens
See [`tokens.css`](./tokens.css) and [`tailwind.config.js`](./tailwind.config.js).

### Colour
| Token | Value | Use |
|---|---|---|
| `color-action` | `#00FF70` | Primary CTAs, Smart-search ON state, focus rings |
| `color-action-hover` | `#00E063` | Hover state on primary actions |
| `color-action-subtle` | `#E6FFF1` | Subtle green tint for backgrounds |
| `color-bg` | `#FFFFFF` | Default surface |
| `color-bg-inverse` | `#000000` | Dark sections, Smart-search OFF state |
| `color-text` | `#1A1A1A` | Primary text |
| `color-text-secondary` | `#4D4D4D` | Supporting text |
| `color-text-tertiary` | `#808080` | Placeholder, hint |
| `color-text-on-action` | `#000000` | Text on green (green is light, black passes WCAG AA) |
| `color-border` | `#E5E5E5` | Default borders |
| `color-danger` | `#E5484D` | Errors only |

### Type scale
| Class | Font · weight · size / line-height |
|---|---|
| `.text-display-xl` | PP Formula Condensed Bold · 32 / 38 |
| `.text-display-lg` | PP Formula Condensed Bold · 24 / 29 |
| `.text-heading` | Noto Sans SemiBold · 18 / 24 |
| `.text-body-lg` | Noto Sans Regular · 15 / 21 |
| `.text-body` | Noto Sans Regular · 13 / 18 (default UI text) |
| `.text-body-strong` | Noto Sans Medium · 13 / 18 |
| `.text-caption` | Noto Sans Regular · 12 / 17 |
| `.text-micro` | Noto Sans Medium · 11 / 14 (uppercase labels) |

**PP Formula Condensed Bold** is licensed from Pangram Pangram. Fallback in `tokens.css` is Arial Narrow. If you don't have the licence, the prototype degrades cleanly to the fallback.

### Spacing (4px base)
`4 8 12 16 20 24 32 40 48` — use semantic aliases (`space-inset-md`, `space-stack-lg`) in components where the meaning is clearer than the raw value.

### Radii
`sm: 4px` (inputs, cards), `md: 6px` (panels), `lg: 8px` (modals), `pill: 9999px` (buttons, toggles, search field)

---

## Components

All present in the starter `index.html` as CSS classes:

- **`.btn`** + `.btn--primary` / `.btn--secondary` / `.btn--ghost` — pill-shaped
- **`.input`** — single-line, focus ring uses brand green
- **`.toggle`** — Alamy's signature pill toggle. White fill with black keyline, knob position flips by state (`data-state="on"` → knob right; `off` → knob left). Always renders in black-on-white *standalone*; sits inside the Smart-search pill where its surrounding context handles colour
- **`.search`** — the signature Alamy search field, composed of `.search__dropdown` + `.search__smart` (which contains the `.toggle`) + `.search__input` + `.search__trail` icons
- **`.card`** — list-row with thumbnail + title + meta
- **`.tile`** — result grid item with hover-revealed provenance overlay
- **`.badge`** / `.clearance-badge` — provenance and trust indicators

---

## Rules of thumb

These came out of the Figma design system page:

1. **Bind, don't hardcode.** Every fill, padding, gap, and radius should reference a token. Reach for the hex picker only when there's genuinely no semantic colour that fits.
2. **One green moment per screen.** The brand green is loud by design. Use it for the primary action and the Smart-search toggle. Two greens compete; three are noise.
3. **Pill or square, not both.** Buttons and toggles are pill-shaped. Inputs, dropdowns, and cards take the 4–6px radius. Mixing pill and square radii in the same view breaks the rhythm.
4. **Density over decoration.** Plugin width is 320–400px. Pick the smallest type and tightest spacing that still reads — usually 13/18 body, 12px caption, 8–12px padding.
5. **Image first, type second.** Alamy is photography. Where the plugin shows results, give thumbnails the visual weight. Type works around the image.
6. **Plain language.** Direct, second-person, no jargon. "Drop in any image to search" beats "Initiate visual similarity query." Confidence without poetry.

---

## Data: the live feel

To make the prototype feel real, integrate real Alamy images in Step 3. Options in order of preference:

1. **Public Alamy RSS feed** — best fidelity, but requires checking what's available
2. **Lightweight API call** if any unauthenticated endpoint exists for watermarked public images
3. **JSON array of 10–15 real Alamy URLs + metadata** — the pragmatic fallback. Put it in `src/data/results.json` and load it in JS.

The starter currently uses Picsum placeholder images. Replace `MOCK_RESULTS` in `index.html` with the real data.

**For Step 1 (welcome)**, just use a static placeholder. The live feed only kicks in after the search runs.

---

## Project files

```
alamy-plugin/
├── index.html              # The prototype — all four states
├── tokens.css              # Design tokens (light mode)
├── tailwind.config.js      # Optional Tailwind config wired to the tokens
├── BRIEF.md                # This file
├── alamy-logo.svg          # (Drop in from your design folder)
├── icons/                  # (Drop in from your design folder)
│   ├── camera.svg
│   ├── magnifier.svg
│   ├── image.svg
│   ├── chevron-down.svg
│   └── help.svg
└── src/                    # Add as the prototype grows
    ├── data/
    │   └── results.json
    └── ...
```

The starter uses inline SVG placeholders for icons so it works without the asset files. **Swap to your real Alamy icons** by replacing each `<svg class="icon">…</svg>` with `<img src="./icons/x.svg" />` or by inlining the SVG content from your files.

The starter uses `alamy` as a text wordmark. **Replace with `<img src="./alamy-logo.svg" alt="Alamy" height="14" />`** when running locally.

---

## What's next (suggested order)

1. **Drop in the real assets** — logo, icons. Five-minute job; transforms the visual feel.
2. **Wire up real Alamy images** — RSS, API, or JSON array. The brief calls this out as critical for the "live feel."
3. **Refine Step 1** — the SSO state is intentionally minimal in the starter. Brief it more (org name? recent activity? "you have 12 lightboxes"?).
4. **Polish the search field interactions** — placeholder rotation between brief-like prompts. Smart-search toggle has actual functional difference (maybe: ON = AI agent, OFF = keyword search, with different placeholder text).
5. **Step 3 hover states** — currently the provenance gradient overlay reveals on hover. Consider adding a small click-to-pin interaction so users can keep the data visible.
6. **Step 4 license button** — wire to a fake success state showing the image inserted "into Figma" (e.g. flip to a confirmation screen, then back to results).
7. **A Figma canvas screenshot** as the `.canvas` background to anchor the plugin in context.

---

## Out of scope (for the prototype)

- Real authentication
- Real license transactions
- Actually inserting images into Figma (it's a mockup of the experience, not a real plugin)
- Dark mode (decided up front)
- Mobile responsive (Figma plugins are desktop)
