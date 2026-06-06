# Portfolio Website

## Overview
A single-page personal portfolio for a hotel professional based in UAE who is active on TikTok, Facebook, and Instagram. The site showcases their story, career journey, social presence, and allows people to get in touch. All content uses smart placeholders — the owner just replaces text and photos.

## How the Site Is Structured

The page flows top to bottom in this order:

1. **Header** — sticky nav with logo, links, mobile hamburger
2. **Hero** — name, tagline, photo, social icons, two CTA buttons
3. **About** — bio, stats (experience, followers, countries)
4. **Journey** — Education and Work tabs with a timeline
5. **Vision & Mission** — two cards on a coral gradient background
6. **Plans & Ideas** — six goal cards
7. **Social Media** — TikTok, Facebook, Instagram profile cards
8. **Contact** — form + info cards (email, phone, location)
9. **Footer** — links, social icons, copyright

## How to Customize (Non-Tech Guide)

**Change the name:** Open `index.html`, find all instances of `John Sharma` and replace with the real name.

**Change the photo:** Replace the Unsplash URLs (search for `images.unsplash.com`) with a real photo URL, or save a photo in `assets/images/` and point to it like `assets/images/your-photo.jpg`.

**Update social links:** Find all `href="#"` next to TikTok/Facebook/Instagram and paste the real profile URLs.

**Update contact info:** Find `hello@johnsharma.com` and the phone/location placeholders and replace with real details.

**Change timeline entries:** Find the timeline section and edit the job titles, company names, dates, and descriptions.

## Design Decisions

- **No build step** — plain HTML + CDN links. Open `index.html` in any browser — it works.
- **Tailwind CSS** for responsive layout without writing lots of CSS.
- **Dark Sky Blue theme** (`#025a8e` primary) — slightly deeper than typical sky blue for a more premium feel.
- **Dark/Light mode toggle** — pill-shaped button in the header labeled "Dark / Light", saved to localStorage.
- **Glass morphism** on Vision & Mission cards using `backdrop-filter: blur()`.
- **AOS library** adds scroll-triggered animations without JavaScript complexity.
- **Contact form opens WhatsApp** — no backend needed. The Nepali phone number in `main.js` (`9779813456789`) and displayed in the contact card should be updated to the real number.
- **Vision & Mission text is in Roman Nepali** — deliberate, for authentic cultural feel.
- **Font Awesome icons** used throughout — no emoji in content sections.
- **Hero photo** uses an ambient glow backdrop (not a hard offset box) for a cleaner, more natural look.

## Files

```
index.html       ← The entire website (one file)
css/style.css    ← Glass effects, colors, custom animations
js/main.js       ← Mobile menu, scroll effects, tab switcher
assets/images/   ← Place real photos here
docs/            ← This file
```
