# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro 6 static site (`output: 'static'`), no UI framework. Client-side JS only for the photo viewer and the phone dock. Menu and shop details live in `src/data/menu.json` and `src/data/business.json`. Photos are optimised to responsive WebP at build time.

## Users

Locals and visitors equally. Locals: students, workers and families in Roxas City, Capiz, who could make the shop a regular stop. Visitors: people passing through Roxas or Capiz, or discovering the shop online, who have never been and need to find it the first time. Most arrive on a phone, often from the Facebook page.

## Product Purpose

Mankey Mouze Specialty Coffee is a small roadside specialty coffee bar in Roxas City, Philippines. The website exists to get people to the physical shop. Success is a tap on Get Directions (Google Maps pin). Secondary success: a Facebook message or a phone call.

## Positioning

Specialty coffee made by hand (pour-over, latte art, espresso drinks) at budget-friendly prices, from a small dark-wood shopfront with a hanging monkey-mouse sign. Owner's words: "Passionate about creating great beverages and dedicated to giving every customer an exceptional experience." The storefront sign reads "Budget friendly. Iced and Hot Coffee here."

## Operating Context

- Directions: https://maps.app.goo.gl/rqrYBFUWFbJk5x6G8
- Phone: 0991 175 4958 (tel:+639911754958)
- Instagram: @mankeymouze
- Facebook: page "Mankey Mouze (Specialty Coffee)", about 984 followers. The exact page URL is unconfirmed; `m.me/mankeymouze` is a placeholder to verify.
- The shop has a window counter, an outdoor wooden bench, and an indoor lamp-lit corner.

## Capabilities and Constraints

- Menu (₱), read from the shop's boards. The live source of truth is `src/data/menu.json`; this list is the original reading:
  - Frappe: Dark Choco 115, Oreo 115, Choco Oreo 125, Matcha 125, Biscoff Milk 130, Biscoffee 135, Salted Caramel 135, Spanish Latte 135.
  - Non-coffee: Strawberry Milk 75, Blueberry Milk 75, Chocolate 85, Thai Milk Tea 90, Matcha 90, Pink Matcha 110, Choco Matcha 110, Biscoff Milk 120.
- Also served (prices not on the boards): pour-over, hot espresso and milk drinks with latte art, iced coffees.
- Undecided or unknown: street address, opening hours, hot-coffee prices. Never state these.

## Brand Commitments

- Use the logo `src/assets/images/logo.png` exactly as provided: no recolour, filter, crop, redraw or rotation. The logo has a white background, so it sits on a white plate or label.
- Imagery: only the real shop photos in `src/assets/images/`. No stock or AI-generated images, no coffee-bean clip-art, no generic beige café template, no purple gradients or 3D blobs.
- Every hero carries a monumental real photo.

## Evidence on Hand

Shop photos are in `src/assets/images/`:

- `logo.png`: logo, black on white, 949×337.
- `lamp-corner.png`: lamp-lit corner with the framed logo, 1536×2048.
- `storefront.png`: storefront with the hanging sign, bench and "Budget friendly" A-frame sign, 680×453.
- `pour-over.png`: pour-over at the bar, 680×453.
- `latte-art.png`: latte-art pour into a red cup, 680×453.
- `iced-lineup.png`: iced lineup in branded cups on the bar, 680×510.
- `cheers.png`: customers clinking matcha, strawberry and choco drinks, 376×510.
- `menu-board-frappe.png`: frappe menu board, 361×510.
- `menu-board-non-coffee.png`: non-coffee menu board, 361×510.
- `docs/facebook-page-header.png` (not shipped): Facebook page header (source of the tagline, follower count and contacts).

There are no testimonials, reviews, press, awards or ratings. Do not invent any.

## Product Principles

1. Getting there beats everything: Get Directions is always the most prominent action.
2. Show the real shop. The photos are the proof, and invented claims are not allowed.
3. Budget friendly and specialty at the same time; neither undercuts the other.
4. Phone first: one-thumb access to directions, Messenger and call.
