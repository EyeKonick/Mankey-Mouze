---
name: Mankey Mouze Specialty Coffee
description: A small roadside specialty coffee bar in Roxas City, lit like its own lamp corner at evening.
colors:
  wall: "#14160f"
  wall-raised: "#1d2016"
  lamp-amber: "#e9b867"
  lamp-amber-hi: "#f4ca82"
  bone: "#ece5d4"
  bone-dim: "#bdb6a4"
  sage: "#a9b596"
  ink: "#1a1b13"
  ink-muted: "#4c4d42"
  hairline: "rgba(236,229,212,.16)"
  outline: "rgba(236,229,212,.32)"
  logo-plate: "#ffffff"
typography:
  display:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(3.2rem, 6.6vw, 6rem)"
    fontWeight: 200
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 4.6vw, 4.2rem)"
    fontWeight: 200
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  quote:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.8rem, 2.8vw, 2.6rem)"
    fontWeight: 200
    lineHeight: 1.4
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 500
    lineHeight: 1.25
  body:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1
  small:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 400
    lineHeight: 1.45
rounded:
  photo: "6px"
  thumb: "14px"
  card: "22px"
  card-large: "28px"
  pill: "999px"
spacing:
  gutter: "20px"
  row: "16px"
  gap-tight: "14px"
  head: "56px"
  column: "64px"
  section: "140px"
  section-phone: "96px"
components:
  button-primary:
    backgroundColor: "{colors.lamp-amber}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1.35rem"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.lamp-amber-hi}"
  button-outline:
    textColor: "{colors.bone}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1.35rem"
    height: "48px"
  button-on-bone:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bone}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1.35rem"
    height: "48px"
  bone-card:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "10px"
  visit-card:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card-large}"
    padding: "56px 56px 48px"
  tag-sage:
    backgroundColor: "{colors.sage}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.12rem 0.55rem"
  logo-plate:
    backgroundColor: "{colors.logo-plate}"
    rounded: "{rounded.pill}"
    padding: "5px 14px"
  nav-bar:
    backgroundColor: "rgba(20,22,15,.62)"
    textColor: "{colors.bone-dim}"
    rounded: "{rounded.pill}"
    padding: "8px 8px 8px 10px"
---

# Design System: Mankey Mouze Specialty Coffee

## Overview

**Creative North Star: "Lamplight"**

The site is an evening at the shop, read top to bottom: the lamp corner, the menu board, the bar, the photos, then the way there. Everything sits on one olive-black wall, and the only warm light in the room is a single lamp amber. Real shop photos are the lit objects; they dissolve into the wall at their edges instead of sitting in boxes. Type is one family, Hanken Grotesk, used whisper-thin (200) for anything large and at a sturdy 500 for anything you act on.

Density is calm. Sections are separated by generous dark air (140px) and hairline rules, not by panels or alternating backgrounds. Content is set as lists and ruled rows (menu, facts, contacts), the way a printed board or a receipt would be. A single bone-coloured card per region is the one surface allowed to float; it carries the practical "find us" information.

The world rejects the stock café template: icon-card feature grids, testimonial carousels, embedded maps, coffee-bean clip-art, beige templates, purple gradients and 3D blobs.

**Key Characteristics:**
- One dark wall (#14160f), one warm accent (lamp amber), one paper tone (bone).
- Photos fade into the wall through gradient masks; they are never framed with borders.
- Hanken Grotesk 200 for display, 400 for reading, 500 for labels and prices.
- Pill-shaped controls everywhere; the amber pill is always Get directions.
- Hairline rules at bone 16% do all the structural work.
- One floating bone card per page region at most.

## Colors

A low-light palette: a near-black olive wall, a single lamp amber, and a warm bone that acts as both text and paper.

### Primary
- **Lamp Amber** (lamp-amber): the light of the room. The primary action fill (Get directions), menu prices, the quotation marks around the owner's words, focus rings, selection and the scrollbar thumb. Brightens to **Lamp Amber High** (lamp-amber-hi) on hover only.

### Secondary
- **Bone** (bone): primary text on the wall, and the paper of the floating cards. Full-strength bone also draws the one heavier rule under each menu board title.
- **Sage** (sage): the quiet secondary note. Used only for small factual tags (the "espresso" pill on menu items), with dark olive text.

### Neutral
- **Wall** (wall): the page background, and the colour every photo fades into.
- **Raised Wall** (wall-raised): placeholder fill behind gallery photos while they load.
- **Bone Dim** (bone-dim): secondary text on the wall: ledes, ingredients, captions, inactive nav links, fact values.
- **Ink** (ink): text on bone and amber surfaces; the dark pill on the bone card.
- **Ink Muted** (ink-muted): secondary text on bone surfaces.
- **Hairline** (hairline): bone at 16%, every divider and translucent-bar border on the wall.
- **Outline** (outline): bone at 32%, the stroke of outline pills and round icon buttons.
- **Logo Plate** (logo-plate): pure white, used only behind the logo.

### Named Rules
**The One Lamp Rule.** Lamp amber is the only warm light on the page. It marks the primary action, prices and the owner's quote marks; it never becomes a background panel or a decorative wash.

**The White Plate Rule.** The logo (`src/assets/images/logo.png`) is used exactly as provided, never recoloured, filtered, cropped, redrawn or rotated, and always sits on a pure white pill plate. White appears nowhere else.

## Typography

**Display Font:** Hanken Grotesk (with system-ui, sans-serif)
**Body Font:** Hanken Grotesk (with system-ui, sans-serif)

**Character:** One humanist grotesk at two extremes: hairline 200 for headlines and the quote, so big type reads like lamplight on a wall, and a firm 500 for names, prices and buttons, so the practical layer is solid.

### Hierarchy
- **Display** (200, clamp 3.2rem to 6rem, 0.98, -0.035em): the hero headline only, max 9ch, balanced. Fixed at 3rem on phones.
- **Headline** (200, clamp 2.5rem to 4.2rem, 1.02, -0.03em): section titles ("What's on the board", "Around the shop"); also on the bone card in ink.
- **Quote** (200, clamp 1.8rem to 2.6rem, 1.4, -0.02em): the owner's words, wrapped in amber curly quotes.
- **Title** (500, 1.12rem to 1.3rem, 1.25): menu board names, card titles, sub-block heads.
- **Body** (400, 1.0625rem, 1.6): reading text, held to 38ch to 56ch. Ledes step up to 1.125rem.
- **Label** (500, 1rem, 1): buttons, menu item names, prices (tabular numerals).
- **Small** (400, 0.9rem to 0.95rem, 1.4 to 1.45): ingredients, captions, contact labels, footer.

### Named Rules
**The Thin Voice Rule.** Anything larger than 1.8rem is set at weight 200. Weight 500 and 600 are kept for things you read as data or tap.

**The No Eyebrow Rule.** Headlines stand alone: no kicker or uppercase label above them.

## Layout

A single centred column, `min(1240px, 100% - 40px)` with 12px inner padding (20px side gutter on phones). Sections open with a two-part head: a headline on the left and a short bone-dim paragraph (max 38ch) aligned to its baseline on the right, 56px above the content (36px on phones). Sections are separated by 140px of wall (96px on phones), never by background bands.

Content grids: the menu is two equal columns 72px apart; the about block is a 1.05fr / 1fr split 64px apart, with its photo bleeding off the left edge of the viewport; the gallery is a 12-column, three-row uneven mosaic (240 / 240 / 380px) with 14px gaps. The visit card is a 0.9fr / 1.1fr photo-and-text split.

Breakpoints: at 980px every split collapses to one column and the gallery becomes a dense two-column grid (220px rows); at 640px the hero photo moves to the top 52% of the screen, text tightens, and a fixed bottom dock with directions, Messenger and call appears once the hero scrolls away.

**The Lit, Not Boxed Rule.** Sections are separated by darkness and hairlines, not by cards or tinted panels.

## Elevation & Depth

The wall is flat. Depth comes from light: photos glow against the dark and fade out through gradient masks, and translucent bars blur what passes beneath them. Shadows belong only to the bone cards, which float like paper held up to the lamp.

### Shadow Vocabulary
- **Floating card** (`box-shadow: 0 30px 60px -24px rgba(0,0,0,.7), 0 2px 6px rgba(0,0,0,.25)`): the small hero card.
- **Visit card** (`box-shadow: 0 40px 80px -40px rgba(0,0,0,.8)`): the large bone card in the visit section.
- **Frosted bar** (`backdrop-filter: blur(12px)` over wall at 62% to 86%): the top nav and the phone dock.

### Named Rules
**The Photo Fade Rule.** Photos that meet the wall dissolve into it with a linear-gradient mask or wall-coloured gradient overlay, never a border or frame.

## Shapes

Two shape families. Interactive things are full pills (999px): buttons, nav bar, logo plate, dock, tags, and round 44px icon buttons. Content surfaces are softly rounded rectangles: photos at 6px, card thumbnails at 14px (10px on phones), the hero card at 22px (16px on phones), the visit card at 28px (22px on phones). Rules are 1px; the only dotted line is the menu leader between a drink name and its price.

## Components

### Buttons
- **Shape:** full pill (999px), minimum 48px tall (44px in the nav).
- **Primary:** lamp amber fill, ink text, weight 500, a 18px stroke icon before the label. Always Get directions.
- **Hover / Focus:** amber brightens to lamp-amber-high over 0.25s (`cubic-bezier(.16,1,.3,1)`); focus is a 2px amber outline offset 3px.
- **Outline:** transparent with a 1px outline stroke and bone text; hover strengthens the stroke to bone and adds a faint bone wash. Used for Message us and Call.
- **On bone:** ink fill with bone text, darkening on hover; the primary action inside the bone visit card, where amber would lose contrast.

### Tags
- **Style:** sage pill, dark olive text, 0.75rem weight 600, sitting inline after a drink name. Factual only ("espresso").

### Cards / Containers
- **Corner Style:** 22px (hero card), 28px (visit card).
- **Background:** bone, with ink and ink-muted text.
- **Shadow Strategy:** see Elevation; the only shadowed surfaces.
- **Internal Padding:** 10px around a photo-plus-text grid (hero card); 56px text padding beside a full-bleed photo half (visit card).
- **Rule:** one bone card per page region at most.

### Navigation
- **Style:** a floating frosted pill bar at the top: logo on its white plate at left, bone-dim text links at 0.95rem (bone on hover), amber Get directions pill at right. Links hide below 980px; the button collapses to its icon below 640px.
- **Phone dock:** a fixed frosted pill at the bottom on phones: an amber Get directions button plus two 52px outline icon buttons (Messenger, call). Slides up once the hero leaves the viewport.

### Menu Board
Two ruled lists, one per physical board. Each board title sits over a full-strength bone rule with a bone-dim descriptor right-aligned. Each row: drink name (500), a dotted leader, an amber tabular price with a small dim peso sign, and the board's ingredients beneath in bone-dim. Rows divide on hairlines. Thumbnails of the real boards open full size.

### Photo Gallery and Lightbox
An uneven 12-column mosaic of real shop photos at 6px radius, each with a factual caption on a wall-coloured bottom gradient. Hover scales the photo to 1.03 over 0.6s. Tapping opens a native `<dialog>` lightbox over a 90% wall-black backdrop, with round 46px outline buttons for previous, close and next, and arrow-key and Esc support.

### Ruled Lists
Facts, contacts and the "what to look for" list share one pattern: rows divided by 1px rules, label left, value right (or a numbered counter in dark amber on bone). Contact values are underlined links whose underline darkens on hover.

## Do's and Don'ts

### Do:
- **Do** make Get directions the amber pill in every viewport, and the only amber-filled control in any region.
- **Do** put the logo `src/assets/images/logo.png` on a white pill plate, unaltered.
- **Do** use only the real shop photos in `src/assets/images/`, fading into the wall where they meet it.
- **Do** set headlines and quotes in Hanken Grotesk 200 with negative tracking (-0.02em to -0.035em).
- **Do** divide content with hairlines (bone 16%) and 140px of dark space.
- **Do** keep motion slow, heavy and warm: "a lamp slowly lighting a corner". The rules live in `src/styles/motion.css`:
  - The hero lamp warms up on load (2.2s, brightness .28 to 1).
  - The hero photo drifts and zooms with scroll (scroll-driven, up to 14% and 1.07x over the first viewport), and its copy settles back.
  - The hero falls off into the wall at its bottom edge.
  - Content fades up once as it enters (`[data-reveal]`: opacity 1.4s `cubic-bezier(.22,.61,.36,1)`, 22px rise 1.7s `cubic-bezier(.16,1,.3,1)`).
  - Photos lift a dim, warm veil (`[data-light]`, 2.4s).
  - Prices light .35s after their row.
  - Items entering together stagger 0.11s apart, capped at 0.77s.
- **Don't** animate anything but opacity and transform for these effects, add bounce or overshoot, re-run a reveal, or hide content without the `html.reveal-on` guard (it is skipped under `prefers-reduced-motion` and removed after 3s if the reveal script never runs).
- **Do** use tabular numerals for prices.

### Don't:
- **Don't** add icon-card feature grids, testimonial carousels or embedded maps.
- **Don't** use stock or AI-generated photos, coffee-bean clip-art, beige café templates, purple gradients or 3D blobs.
- **Don't** put an eyebrow or kicker label above a headline.
- **Don't** float more than one bone card in a page region.
- **Don't** use amber as a background panel or a gradient wash.
- **Don't** state a street address, opening hours, hot-drink prices or reviews; they are not known.

## Open Items

- The Facebook link `https://m.me/mankeymouze` is a placeholder; the real page URL is unconfirmed.
- Opening hours are unknown. The visit card says so plainly and points to Facebook; do not invent them.
- The street address is unknown; the Google Maps pin is the only location. Do not invent one.
- The site is built with Astro: tokens and shared rules in `src/styles/global.css`, each section's rules in its component under `src/components/` (kept verbatim and in the original cascade order).
