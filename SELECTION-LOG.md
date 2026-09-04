# Selection log — Silver Edge Electric

Design lead's working document. Started at Step 0, kept current through the
build and both finishing passes. Every section ran the three-phase process from
`section-style-repo.md` against the real reference files.

---

## Step 0 — Page inventory & ambition

**Page ambition:** restrained-and-quiet, per `DIRECTION.md`. The palette is five
greys with no hue anywhere, so there is nothing to hide behind: the page is
carried by a value ramp, a type scale, and one material accent.

**Page inventory, in order:**
Header → Hero (with the photo-diagnosis widget) → Google Reviews → Trust Badges
Banner → Why Us → Services → Coverage → Our Story → FAQ → Final CTA → Footer →
mobile sticky call bar.

**The material accent — "the silver edge".** The business is named after a
machined edge catching light, so the page's single non-typographic device is a
1px rule that is not flat grey but a gradient hairline (transparent → stone →
white → stone → transparent) reading as a bevel catching light. It appears as:
the top edge of the photo-diagnosis field, every section rule, the leading edge
of the trust-badge boxes, the active-tab indicator in Services, the footer
column dividers, and the base edge of every button on hover. Nothing else on
the page is decorated.

**Value blocking — the real compositional tool on a monochrome page:**

| Band | Value |
|---|---|
| Header | paper, hairline base, graphite subheader |
| Hero | ink (photo + graphite scrim) split against a paper field |
| Google Reviews | paper |
| Trust Badges Banner | stone tint + brushed-steel texture |
| Why Us | paper |
| Services | paper-050 (a half-step down) |
| Coverage | graphite — the page's mid-point dark moment |
| Our Story | paper |
| FAQ | paper-050 |
| Final CTA | black, photographic |
| Footer | paper, line dividers |

**Fonts.** Display **Poppins** (400/500/600). The brief's body face `futura-pt`
is a licensed font — **substituted with Jost** per the build brief's
substitution table, which is the closest freely-loadable geometric sans to
Futura. Jost also takes the utility role: uppercase, 0.14–0.2em tracking,
10–12px, for eyebrows, badge labels, map labels and form labels. Three type
roles out of two families, separated by case, tracking and weight rather than
by importing a third typeface.

**Tokens.** The five brand colours are the only literal colour values in
`tokens.css`; a fourteen-step value ramp (`--v-950` … `--v-000`) is derived from
them with `color-mix`, so nothing on the page is an invented hue. The type ramp
is thirteen steps from `--fs-nano` (10px) to `--fs-figure` (up to 96px); spacing
is a thirteen-step scale; four named elevations; radii are near-square (0–5px)
so surfaces read machined rather than soft.

**Imagery inventory — eleven photographs, none used twice:**

| Section | Image |
|---|---|
| Hero bed | `commercial-lift.webp` |
| Trust banner texture | `tex-steel.webp` |
| Why Us framed insert | `permit-tag.webp` |
| Services panel ×6 | `commercial-hero`, `commercial-panels`, `panel-tech`, `office-ti`, `panel-new`, `troubleshooting-hero` |
| Coverage | none — a hand-drawn SVG map is the visual |
| Our Story sticky frame | `about-crew.webp` |
| Final CTA bed | `street-dusk.webp` |

**Carry-through techniques assigned in DIRECTION.md:**
- *Framed or Bordered Photo Insert* — used three times, deliberately: the Our
  Story sticky photo, the Why Us insert, the widget's success-state thumbnail.
- *Depth Settle* — on every photograph, tuned to scale 1.045→1, blur 5px→0,
  880ms (the kit default is 1.04 / 4px / 800ms).

---

## Section decisions

### 1. Navigation
- **Layout:** Sticky Minimal Nav *(assigned)*. Deviation: the entry's "with
  Hidden Menu" half is dropped — the brief mandates a centred nav with two
  named dropdowns, so hiding the menu behind an icon would have destroyed the
  brief's own structure. Everything else about the entry (sticky, quiet over
  the hero, minimal chrome) is kept.
- **Visual style:** Minimal Underline Link Treatment *(assigned)*, minimal-clean.
  Beat Dark Contrast Nav Band, which would have fought the paper ground the
  rest of the page opens on.
- **Animation:** Underline Grow on Hover + Mega Menu Column Stagger Reveal
  (added in Pass 1, since the Services dropdown genuinely is a 14-item,
  three-column menu) + the subheader collapsing on scroll.
- **Element sequence:** no entrance — it is present at load. Resting states:
  per-link underline sweep 240ms ease-out-quart; chevron rotates 180° on
  expand; dropdown panel fades and rises over 260ms, then its columns stagger
  left to right at 70 / 150 / 230ms, one group per column. Reduced motion
  collapses all of it to instant.
- **Mobile:** no hamburger. Above the fold it is wordmark + a compact call
  chip; once scrolling starts the nav reduces to a single full-width
  click-to-call showing the number.

### 2. Hero (with the photo-diagnosis widget)
- **Layout:** Hero with Embedded Quote/Booking Form *(assigned)* —
  industrial-utilitarian. The embedded form *is* the photo-diagnosis widget, so
  the layout's "form on one side" is the signature element rather than a
  generic quote box.
- **Visual style:** Soft Vignette + Depth Layering *(assigned)*, executed in
  four layers: photograph → 100° graphite scrim → radial vignette → a slab of
  paper-white cut into the right of the frame. Plus, from
  `image-and-visual-richness.md`, **Layered Depth Composition** and
  **Full-Bleed Background Photo with Foreground Card**. Noted deviation: the
  assigned entry's family is warm-approachable; executed monochrome it reads
  industrial-utilitarian, which is what the brand's own palette dictates.
- **Animation:** Ken Burns Slow Zoom *(assigned)* — 34s alternating, scale
  1.02 → 1.11 — under a Staggered Load-In of the text stack. **Clip Reveal** on
  the H1 rather than Weighted Word Reveal (see *Techniques not used*).
- **Element sequence (load-triggered, 5 groups — budget 5):**
  bed focus-pull 0ms → eyebrow 120ms → H1 clip reveal 220ms → widget field fade
  360ms → subhead 520ms → badge row 660ms → CTA pair 780ms. Reduced motion:
  everything renders in place, Ken Burns off.
- **Fold discipline:** the eyebrow's top and the widget's accent hairline sit on
  the same line by construction — both are the first thing in their grid
  column, and the widget's top padding was moved inside the widget so the
  hairline lands on the grid row line rather than below it.

### 3. Photo-diagnosis widget — the signature element
- **Layout:** the form half of the hero; on mobile, a compact initial state
  (kicker, title, lede, drop target, one button) with the fields behind an
  "Add Your Details" reveal that also opens automatically when a photo is added.
- **Visual style:** Full-Bleed Immersive Widget *(assigned)*. Its premium
  execution note — "let the surrounding negative space do the framing instead
  of a visible container edge" — is the whole design: there is no card, no
  border, no shadow. The widget owns a field of paper-white that bleeds off the
  right edge of the viewport and down to the bottom of the hero, and the only
  drawn thing is one silver hairline along its top. Fields are Minimal
  Underline-Style Inputs; the drop target is marked by four machined corner
  ticks rather than a dashed box.
- **Animation:** widget entrance (fade only, so the slab does not slide) →
  hairline draw 900ms → Field Focus Highlight (label steps to full value, rule
  thickens to 2px, plus a real focus ring) → corner ticks extend 16px → 26px on
  hover and on drag → **Aperture Reveal** on the uploaded preview → Success
  State Confirmation with an SVG check drawn over 620ms.
- **Reassurance:** "No cost and no obligation. Your details are used to prepare
  your estimate and are not shared with anyone else."
- **Success state:** drawn check, a framed thumbnail of the photo actually
  uploaded, a real three-step sequence of what happens next, call + "send
  another", and an honest note that nothing was transmitted.

### 4. Google Reviews
- **Layout:** Testimonial Carousel *(assigned)* — five reviews, two per view on
  desktop, one on mobile. Beat Testimonial Card Grid, which the "Avoid when" on
  Minimal Divider-Line Testimonial List rules against pairing with.
- **Visual style:** Minimal Divider-Line Testimonial List *(assigned)* — the
  dividers turned on their side so they separate slides instead of rows, with
  no card borders anywhere. The aggregate callout is a stone panel with the
  silver edge across its top, an oversized 4.9 against deliberately small
  labels, and a monochrome Google mark so the block still reads unmistakably as
  Google without importing a four-colour logo into a hueless page.
- **Animation:** Carousel Auto-Advance with Manual Override (6.5s, pauses on
  hover and on focus, off entirely under reduced motion) + Counting Numerals on
  4.9 and 38 + Star Rating Fill sweep on the aggregate stars (added in Pass 1).
- **Element sequence (scroll, threshold 0.18 / rootMargin -12%, 3 groups):**
  head + placeholder note → aggregate panel at +90ms, its rule drawing and then
  its stars sweeping at 220–500ms → carousel. Slides swap as whole units; two
  testimonials never stagger into view together.
- **Placeholder marked:** a dashed-outline note directly under the H2.

### 5. Trust Badges Banner
- **Layout:** Certification Badge Wall pared to exactly four *(assigned)*,
  hairline-boxed, generous internal padding. Its premium note — equal size and
  consistent padding on every badge — is enforced by a four-column grid of
  identical cells.
- **Visual style:** Badge or Seal treatment over `tex-steel` at 16% opacity —
  **Background Pattern Behind Foreground Photo** from the richness file. The
  four icons (shield-check, award, map-pin, check-circle) are all 26px at
  stroke 1.4, optically aligned at the same point in each cell, so the row
  reads as one system.
- **Animation:** Badge Fade and Scale-In on Scroll, staggered 110ms badge by
  badge after the section label's rule draws; **Value Lift** on hover.
- **Element sequence (scroll, 2 groups):** label + rule → four badges at
  80 / 190 / 300 / 410ms.

### 6. Why Us
- **Layout:** Single Statement + Supporting Points *(assigned)*. The statement
  ("One Standard Of Work, Whatever The Scale Of The Project") carries the
  hierarchy the entry asks for; the four brief-supplied points sit beneath it
  as equal evidence. Chosen over Icon + Blurb Grid, which would have been the
  page's third four-up grid.
- **Visual style:** Icon Line-Art Treatment *(assigned)* + Underline Accent Rule
  + a **Framed Photo Insert** (`permit-tag`) in the sticky statement column, so
  the section is not text on flat white.
- **Animation:** Sequential Reveal on Scroll with **Icon Draw-In** — each icon
  is uncovered by a left-to-right clip wipe as the leading beat of its own item,
  followed by that item's heading and body; each item's top rule draws in with
  it (Underline Draw).
- **Element sequence (scroll, 5 groups):** statement column → point 1 at 60ms
  (icon wipe +180ms) → 180 → 300 → 420ms.

### 7. Services
- **Layout:** Tabbed or Accordion Service Panel *(assigned)* — a vertical tab
  rail on desktop, the same six scopes as a line-divided accordion on mobile.
  Six services is past the point where the entry says a flat grid stays
  scannable.
- **Visual style:** Bordered Card with Icon Header *(assigned)* — the panel is
  the bordered card, its icon header sits over a drawn silver rule, and the
  service photograph fills the panel's full height beside the copy.
- **Animation:** Active Tab Indicator Slide (480ms ease-out-quart on a 2px
  vertical bar) + panel Depth Settle on every switch + Image Zoom on Hover
  (added in Pass 1) + Accordion Smooth Expand with an Icon Morph (plus → cross)
  on mobile. Full arrow-key roving-tabindex support on the rail.
- **Element sequence (scroll + click, 3 groups):** head → rail and panel enter
  together at +90ms → on click, only the panel re-enters (520ms) while the
  indicator slides; nothing else re-animates.

### 8. Coverage
- **Layout:** Neighborhood or Landmark Mention Block *(assigned)* — the eight
  towns are named in the brief's running copy and again as a cross-referenced
  list beside the map.
- **Visual style:** Custom Styled Map *(assigned)* — a hand-drawn SVG on a
  graphite ground: coordinate grid, a jagged mountain edge on the west, two
  highway corridors, a river, the 49th parallel as a doubled border line, and
  eight hand-placed pins with HTML labels above or below each pin so nothing
  collides. **This is the page's one deliberate no-photograph section: the
  drawing is the image.**
- **Animation:** Map Pin Drop-In cascading at 90ms intervals with labels
  following 260ms behind, then Coverage Zone Highlight on Hover keyed *both
  ways* — hovering a town in the list lights its pin, and hovering a pin lights
  the list row.
- **Element sequence (scroll, 3 groups):** copy column → map frame at +120ms →
  pins and labels cascade.

### 9. Our Story
- **Layout:** Split Story with Sticky Photo or Quote *(assigned)* — the framed
  crew photograph and the "10+ years" figure hold position while the three
  narrative beats scroll past.
- **Visual style:** Minimal Line Timeline *(assigned)* — one hairline down the
  column with small ringed ticks, plus the second **Framed Photo Insert**.
- **Animation:** Story Section Sticky Scroll Progress *(assigned)* + a
  **Progressive Reveal Scrub**: each beat's opacity and its tick's scale are
  tied to its distance from viewport centre rather than firing once. Kept
  deliberately shallow (0.62 → 1) so the copy is legible at every scroll
  position; desktop only, static below 901px and under reduced motion.
- **Element sequence (scroll, 3 groups):** sticky aside → head → three beats,
  each scrub-linked rather than staggered.

### 10. FAQ
- **Layout:** Two-Column Category Split *(assigned)*. The five questions sort
  honestly — three about scope and experience, two about estimates and
  scheduling — so the split carries information instead of decorating.
- **Visual style:** Minimal Line-Divided Accordion *(assigned)*, each category
  headed by a drawn silver rule.
- **Animation:** Staggered Fade-In per column (110ms apart) + Accordion Expand
  with a height/opacity transition + Icon Morph, the plus rotating 45° to a
  cross on the same click.
- **Pass 1 addition:** a hairline panel closes the shorter right column with a
  last, quiet ask (call / text), which balances the columns and gives the page
  one more conversion point without another loud banner.

### 11. Final CTA
- **Layout:** Full-Width CTA Banner *(assigned)*, with a single-field callback
  capture beside it — one field stays inside the banner's brevity budget, and
  it gives the page a second non-backend form with its own success state.
- **Visual style:** Dark Cinematic CTA Background *(assigned)* — `street-dusk`
  under a three-stop black scrim, with a frosted callback panel over it.
- **Animation:** Banner Background Slow Pan (40s) + a grouped entrance +
  **Cursor-Reactive Glow** — used exactly once on the page, on its darkest
  panel, exactly as that entry's Avoid-when demands.
- **Element sequence (scroll, 2 groups):** copy column → callback panel at
  +120ms, its rule drawing after it lands.

### 12. Footer
- **Layout:** Minimal Two-Column Footer expanded to the brief's four columns
  *(assigned)*.
- **Visual style:** Minimal Light Footer with Line Dividers *(assigned)* — a
  quiet exit after the black CTA rather than a second dark slab.
- **Animation:** Link Column Staggered Fade-In left to right, one group per
  column (110ms apart) + Underline Sweep on every link + a hover lift on the
  social marks. Pass 1 added a Back To Top link in the base row.

### 13. Mobile sticky call bar
- **Layout:** Sticky or Floating CTA Bar. **Animation:** Sticky Bar Slide-In on
  Scroll Threshold — it holds back until 460px of scroll so it never competes
  with the mobile fold, then slides up with the silver edge along its top.

---

## Site-specific motion techniques written for this build

Beyond the kit, composed from real entries in
`references/animation-and-motion-richness.md`:

1. **Silver Edge Sweep** — `.edge`. Sequential Line Draw + Underline Sweep: the
   hairline draws left to right over 820ms, then a single specular highlight
   travels its length 300ms later. Used on every section rule. Reduced motion:
   rule at full width, no highlight.
2. **Value Lift** — `.vlift`. A monochrome page cannot lift a card with colour,
   so it lifts with *value*: the ground steps one notch, the leading hairline
   grows from 20% to full height, and the element moves 2px. Adapted from
   Magnetic Lift. Reduced motion: value and rule only, no translate.
3. **Edge Wipe** — every button's base edge takes a silver hairline that sweeps
   across on hover, in place of the colour change the palette cannot supply.
4. **Aperture Reveal** — the uploaded photo opens from its centre line like a
   shutter (`clip-path: inset(50% 0 50% 0)` → `inset(0)`, 620ms): a Clip Reveal
   turned on its side for a camera-shaped moment.
5. **Icon Draw-In as a clip wipe** — Lucide glyphs carry no path-length data, so
   the Why Us icons are "drawn" by a left-to-right mask instead of a stroke
   animation. Same read, no dependency on the icon set.

## Techniques considered and not used

- **Weighted Word Reveal.** The natural once-per-page home is the hero H1, but
  the kit's implementation wraps every word in an inline-block with the space
  *inside* it, which removes all soft-wrap opportunities — the H1 would refuse
  to break across the 2–3 lines the brief mandates. Clip Reveal was used
  instead, and the kit file was left untouched.
- **Scroll-Cue Bounce Indicator.** The hero is full-viewport-height, which is
  the entry's Best-for, but a bouncing chevron is the templated move and the
  white widget field already bleeds past the fold and implies continuation.
- **Layered Parallax Drift.** The hero already carries Ken Burns; the entry's
  own Avoid-when warns against stacking continuous background motion under
  active foreground motion.

---

## Pass 1 — Elevation sweep

| Section | Change |
|---|---|
| Navigation | **Added** Mega Menu Column Stagger Reveal — the Services dropdown genuinely is a three-column, 14-item menu, which is exactly that entry's Best-for. The menu list was switched to column-major flow so the stagger runs left to right by column, not item by item. |
| Hero | **Left as is** — already at the page's highest ambition; a scroll cue would have been decoration. |
| Photo-diagnosis widget | **Left as is** — it is the page's ambition ceiling by design. |
| Google Reviews | **Added** a real line of context inside the aggregate panel (its middle column was reading as a void), and a Star Rating Fill sweep on the aggregate stars only — once, not on every slide. |
| Trust banner | **Left as is** — the entry's own premium note is about restraint and equal weight; more would break it. |
| Why Us | **Left as is** — icon draw-in, rule draws and the framed insert already cover the element inventory. |
| Services | **Fixed** a real flaw: the tab rail and the panel had different heights, which read as unfinished. They now share a height and the photograph fills the panel. **Added** Image Zoom on Hover so the panel is not inert under the cursor. |
| Coverage | **Fixed** two label/pin collisions and moved the legend out of the map frame into a caption. **Added** the 49th parallel as a doubled border line so the region outline is not a plain rectangle. |
| Our Story | **Left as is** — a sticky pin plus a scroll scrub is already two techniques on one section. |
| FAQ | **Added** a closing hairline panel with call/text in the shorter column — balances the split and adds a conversion point. |
| Final CTA | **Left as is** — slow pan plus the page's only cursor glow is the motion ceiling for one section. |
| Footer | **Added** a Back To Top link (the desktop page is ~7,500px, so the entry's Best-for genuinely applies) — as a text link in the base row rather than a floating button that would fight the mobile call bar. |

Also fixed in this pass, found by measurement rather than by eye:
- An author-level `display: grid` was beating the UA `[hidden]` rule, so every
  mobile service accordion panel rendered open. Mobile page height fell from
  12,206px to 10,844px.
- Auto-sized grid tracks in `.why__statement` were resolving to max-content and
  pushing 28px of horizontal overflow at 390px and 25px at 768px. Every grid
  stack now declares `minmax(0, 1fr)` explicitly.
- The widget's inputs had `outline: none` on `:focus-visible`, which removed
  visible keyboard focus from three fields. Restored, with the underline focus
  treatment kept alongside it.

## Pass 2 — Coherence sweep

- **Style-family concentration is deliberate, not accidental.** Nine of eleven
  sections sit in minimal-clean, because `DIRECTION.md` names it as the primary
  family and sets the page to restrained-and-quiet. The variety that would
  normally come from mixing families comes instead from *layout* (carousel,
  badge wall, statement-and-points, tab rail, drawn map, sticky split,
  two-column accordion, banner, four-column footer — nine distinct armatures)
  and from *value* (paper / stone / half-tone / graphite / black). Two
  dark-moody moments (Coverage, Final CTA) and one textured moment (the trust
  banner) break the sequence at even intervals.
- **Nothing Pass 1 added was walked back.** Each addition was one technique on
  a section that had a real gap; none of them put two continuous motions on the
  same section.
- **Motion load checked end to end:** one continuous background motion per dark
  section and never two at once; one cursor-linked effect on the whole page;
  counting numerals used once; the carousel is the only auto-advancing thing
  and it stops on hover and on focus.
- **Type scale audited across the page:** thirteen steps in genuine use, from
  10px map ticks to a 96px aggregate figure, with three weights and four
  tracking values. No section is two sizes and one weight.
- **Vertical rhythm audited:** `--section-y` was raised from a 78px desktop
  value to 95px, and the banner (`--tight`) and the final CTA (`--loose`) are
  the two deliberate departures from it, so the page is not a stack of
  identical slabs.
- **Mid-width regression caught here:** at 1024px the H1 was breaking to four
  lines with "Alberta" alone on the last one — exactly what the brief forbids.
  The `--fs-h1` clamp was re-sloped (`-0.8rem + 4.57vw`) so the headline holds
  three lines from 1024px up and two lines at 768px, and the hero badges and
  CTAs were tightened in the 901–1180px band so nothing wraps raggedly.
- **One phrasing fix:** both success states were echoing the visitor's raw
  digits back. A `formatPhone` helper now prints them in the same shape the
  site prints its own number.

---

## Verification

- Fold constraint holds at 1440×900 and 390×844 — all six required elements
  measured inside the viewport at scroll 0.
- Zero horizontal overflow at 390 / 768 / 1024 / 1440, measured per element.
- Every focusable element has a visible 2px focus ring; tab order verified for
  the first 26 stops; the service tab rail is arrow-key operable.
- Reduced motion verified by emulation: no element renders below full opacity,
  and every custom technique has an explicit fallback.
- Both forms exercised end to end: validation errors, upload, submit, success
  state, reset.
- No console errors, no failed requests, no broken images.

## Build note

The shared `src/lib/motion.js` contains JSX but carries a `.js` extension, which
Vite does not parse as JSX by default. This build initially worked around it
with a `motion.jsx` re-export shim so `vite.config.js` could stay untouched;
once the campaign settled on the `esbuild: { loader: 'jsx' }` config used by the
sibling sites, the shim was removed and `src/lib/motion.js` restored byte-for-byte
to the kit original. `vite.config.js` is now identical to the rest of the batch.
