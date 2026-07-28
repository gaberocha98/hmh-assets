# HMH Assets — working notes

Brand standards for all carousels / content in this repo. Keep these consistent:

- **Display name:** Gabe Rocha
- **Handle:** @gabexrocha
- **Avatar:** `gabe-profile.jpg` (the only avatar — never reuse older ones)
- **Verified badge:** on
- **CTA keyword:** **PEP** — every carousel CTA uses `Comment "PEP"` (not "skool")

## Voice
- Speak directly to **"you"**. Neutral — no "guys" / "men".
- No em-dashes or en-dashes in slide copy. Use short sentences instead.
- Punchy, first-person, curiosity-driven hooks. Don't copy source posts word-for-word.

## Carousel generator
- Edit copy in the `SLIDES` array in `carousel.html` (`<b>…</b>` for bold).
- Render: `NODE_PATH=$(npm root -g) node render.js` → PNGs in `slides/` (2160×2700, 4:5).
