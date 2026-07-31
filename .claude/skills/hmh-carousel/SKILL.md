---
name: hmh-carousel
description: Build or restyle a Hacking Men's Health (Gabe Rocha) Instagram carousel in the Dan Go tweet/X style — vertically centered slide blocks, uniform 4:5 cards, the approved glasses PFP, @gabexrocha, HACK CTA, and before/after proof slides. Use whenever the user asks to make, remake, rewrite, or preview an HMH carousel, or a "carousel like Dan Go".
---

# Hacking Men's Health — Carousel Skill

Gabe Rocha's brand. Avatar: **men 30+** (busy, beginner-to-intermediate, want to
look good, feel strong, stay sharp). Voice: **punchy, direct, brotherly tough-love,
no fluff.** Template is modeled on Dan Go (@CoachDanGo) tweet-style slides.

## Non-negotiable rules

1. **PFP:** ALWAYS `assets/gabe-pfp.png` (sunglasses-in-car headshot). NEVER the
   blue smiling photo. If a glasses PFP file is missing, extract it from a supplied
   brand slide — do not substitute another image.
2. **Handle:** `@gabexrocha`. **Name:** "Gabe Rocha" + blue verified check.
3. **Centered layout:** the photo + name + text block is **vertically centered**
   on every slide (balanced whitespace top and bottom). Text is left-aligned
   inside that block. Never top-align with empty space dumped at the bottom.
4. **Uniform size:** every slide is the SAME fixed **4:5** card. Denser slides
   shrink their text to fit; cards never vary in height/shape. They must look
   identical when posted.
5. **Match Dan Go proportions** (size in `cqw` so they hold at any card width):
   - PFP diameter ≈ **13cqw**
   - Name ≈ 4.6cqw bold · handle ≈ 3.9cqw grey · check ≈ 4.1cqw
   - Body ≈ **4.8cqw**, regular weight, line-height ≈ 1.38, one size (no oversized
     bold headline, no blue lines). Auto-fit down (min ≈ 3cqw) only if a slide
     overflows.
6. **Nothing extra on the slide face:** no bottom progress bar, no `n/total`
   counter, no footer handle. (In an HTML preview, slide numbers go on a label
   ABOVE the card, never on the slide.)
7. **CTA slide** = Dan Go's 3-block close, original words:
   - "I'm taking on **N** new guys to work directly with me and my team."
   - "Follow @gabexrocha and comment **\"HACK\"** — I'll see if we're a good fit 🤝"
   - Qualifier in parentheses (e.g. accountability / no quick-fix).
8. **Before/after proof:** images in `assets/before-after/` go in as full-bleed
   proof slides (caption + image) before the CTA.
9. **Never copy the source carousel word-for-word.** Always rewrite in Gabe's voice.
10. If asked to reconstruct slides that weren't supplied, label them clearly in the
    preview (`reconstructed`) so Gabe can tell them apart.

## Deliverables

- `carousels/<name>.md` — slide-by-slide copy.
- `carousels/<name>-preview.html` — a self-contained visual preview, then publish
  it as an Artifact so Gabe can see the slides.

## Preview build notes

- Each slide: `container-type:inline-size`, `aspect-ratio:4/5`, `display:flex;
  flex-direction:column; justify-content:center; overflow:hidden`, padding ~7cqw.
- Auto-fit: measure with `justify-content:flex-start`, shrink body font from
  4.8cqw until `scrollHeight <= clientHeight`, then set back to `center`.
- Embed the PFP and before/after images as base64 data URIs (Artifact CSP blocks
  external hosts). System font stack (`-apple-system,"Segoe UI",Roboto,…`) matches
  the reference — do not link a webfont.
- Design light + dark page chrome; the slide cards themselves stay white like a
  real post.

## Reference implementation

`carousels/older-you-get-remake-preview.html` is the canonical, working example —
copy its structure for new carousels.
