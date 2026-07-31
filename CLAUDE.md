# HMH Assets — Working Notes

Static assets + content for **Hacking Men's Health** (Gabe Rocha).

## Carousel / content rules

- **Profile photo (PFP): ALWAYS use `assets/gabe-pfp.png`** — the sunglasses-in-car
  headshot. This is the only approved avatar for carousels, slide headers, and any
  post mockup.
- **Do NOT use `gabe-profile.jpg`** (blue background, smiling). It has been removed
  and must not be reintroduced.
- Slide template style is **tweet/X-style**, modeled on Dan Go (@CoachDanGo):
  circular PFP + bold name "Gabe Rocha" + blue verified check, grey @handle
  underneath, then the body text. Handle: **@gabexrocha**.
- **Layout is CENTERED (critical):** the whole photo + name + text block is
  **vertically centered** on the slide, so short slides have balanced whitespace
  top AND bottom — never name-at-top with a pile of empty space at the bottom.
  Text is left-aligned within that centered block.
- **Uniform size:** every slide is the SAME fixed size (4:5). Denser slides shrink
  their text to fit; cards never grow taller or shorter than each other. When
  posted they must all look identical in dimensions.
- **Match Dan Go's proportions** for the profile photo and the body text (photo
  ~13% of slide width, body text ~4.8% of slide width, one regular weight, no
  oversized headline). Size type in `cqw` so it holds at any card size.
- **No bottom progress bar / no `n/total` counter / no footer handle** on the
  slide face. (Slide numbers can appear as a label OUTSIDE the slide in previews.)
- **CTA slide** mirrors Dan Go's 3-block close: "I'm taking on N new guys…" →
  "Follow @gabexrocha and comment 'HACK' — I'll see if we're a good fit 🤝" →
  a qualifier line in parentheses. Keep the keyword **HACK**.
- **Never copy the reference word-for-word** — always rewrite in Gabe's voice.
- Before/after transformation photos live in `assets/before-after/` and are
  dropped in as full-bleed proof slides before the CTA.

See the **`hmh-carousel` skill** (`.claude/skills/hmh-carousel/`) for the full
build spec and template.

## Files
- `assets/gabe-pfp.png` — approved PFP (sunglasses). Use this everywhere.
- `assets/before-after/` — client transformation before/after images.
- `carousels/` — carousel copy (`.md`) and visual previews (`.html`).
