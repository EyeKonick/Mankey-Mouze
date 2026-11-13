---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/components/Hero.astro","src/components/Menu.astro","src/components/About.astro","src/components/Gallery.astro","src/components/Location.astro","src/components/Footer.astro"]
---

Scope: full landing page, Persuade. Astro port of the reviewed static page; the design was preserved exactly and pixel-diffed against it before that page was retired. The Lamplight hero is kept as is; the body extends it in the same world. Audience: locals and first-timers equally, mostly on phones. Action: Get directions (primary); Message on Facebook, Instagram @mankeymouze, Call 0991 175 4958.
Body content: the menu (Frappe and Non-coffee with real board prices, plus the ingredients printed on the boards), a short about section in the owner's own Facebook words, a photo gallery from the shop photos with factual captions, and a location/contact block. Unknowns that must never appear: street address, opening hours, hot-drink prices, reviews.

## Direction contract
THESIS: An evening at the shop, read top to bottom: the lamp corner, the board, the bar, the photos, then the way there. Each section is lit like the hero, not boxed into cards. Refuses the stock café template (icon-card features, testimonial carousel, embedded map).
OWN-WORLD: Inherited from the hero. Olive-black wall #14160f with a raised #1d2016, lamp amber #e9b867, bone #ece5d4, sage #a9b596. Hanken Grotesk 200 for display, 400/500 for text. Amber pill as the primary action, outline pills as secondary. Hairline rules at bone/16%. One bone card per page region at most. Photos fade into the wall the way the hero photo does.
STORY: They see the real menu and prices, believe it's a small, careful, cheap specialty bar, recognise the storefront, and tap Get directions.
FIRST VIEWPORT: The hero exactly as built (lamp photo on the right 64%, "The lamp's on. Come in.", amber Get directions, storefront card). The nav links become in-page anchors: Menu, About, Photos, Visit.
FORM: seed: none (pinned) — user: "Let's go with the 'Lamplight' version. Keep the hero as it is... build out the body in that aesthetic." Extension of heroes-hero-1-lamplight-html. Sections:
- Menu: two columns with leader dots; the ingredients from the board under each name; amber tabular prices; thumbnails of the two real boards that open full size.
- About: the owner's quote set large in weight 200, beside the pour-over photo fading into the wall.
- Photos: an uneven gallery of six real photos with factual captions; a native dialog lightbox with arrow keys and Esc.
- Visit: a bone card with the storefront crop, what to look for, and all four contact actions.
- Phone: a bottom dock (directions, Messenger, call) that appears once the hero has scrolled away.
Motion: the hero's lamp warm-up stays the only ambient moment. Everything else answers an action (lightbox, dock reveal).
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
