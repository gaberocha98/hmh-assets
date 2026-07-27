# HMH Assets

Public static assets for Hacking Men's Health content generation.

## Files
- `gabe-profile.jpg` — 160x160 avatar, used by carousel generators
- `carousel.html` — self-contained tweet-card carousel template (edit `SLIDES`, `NAME`, `HANDLE`)
- `render.js` — renders each slide in `carousel.html` to an exact 1080x1350 PNG (2x) in `slides/`
- `slides/slide-1..7.png` — rendered "Why alcohol hits harder on Reta" carousel

## Rebuild the carousel
```bash
NODE_PATH=$(npm root -g) node render.js
```
Slides are written to `slides/`. Edit the `SLIDES` array in `carousel.html` to
change copy; use `<b>…</b>` for bold runs. Preview a single frame in a browser
with `carousel.html?slide=3`.
