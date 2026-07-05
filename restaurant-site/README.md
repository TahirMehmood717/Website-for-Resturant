# The Olive & Oak — Website

A 9-page static restaurant website (placeholder name/content — swap in real branding, photos, and copy before launch).

## Pages
- `index.html` — Home
- `about.html` — About Us
- `menu.html` — Menu
- `banquet.html` — Banquet Facility
- `catering.html` — Catering
- `gallery.html` — Gallery
- `booking.html` — Online Booking
- `contact.html` — Contact Us (includes Visiting Hours)
- `menu-kit.html` — Printable/downloadable menu kit

No shopping cart — as requested.

## Images
Every placeholder block now shows a real image — hero backgrounds, the 3 dish photos on the home page, About page photos, banquet room, and all 8 gallery photos. These come from **Lorem Picsum** (a free stock-photo placeholder service, no API key needed) so you can see the actual layout with photos in place. They are **generic stock images, not real photos of this restaurant** — swap each `<img src="...">` for real photography before launch. Search each HTML file for `picsum.photos` to find every spot that needs a real photo. The Contact page's map block is intentionally left as a labeled placeholder (not a photo) since it should become a real Google Maps embed.



## Forms — now wired to Formspree (real backend)
The Booking, Contact, Banquet, and Catering forms now actually submit — via [Formspree](https://formspree.io), no server code needed. To finish activating them:

1. Create a free account at formspree.io and create one new form.
2. Copy the form ID Formspree gives you (looks like `xzbqkvwa`).
3. In each of `booking.html`, `contact.html`, `banquet.html`, and `catering.html`, find:
   ```
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
   and replace `YOUR_FORM_ID` with the real ID. (Same ID in all four files is fine — each submission includes a hidden `_subject` field so you can tell them apart in your inbox/dashboard.)
4. Formspree will ask you to confirm your email the first time a submission comes in — do a test submission from each form after deploying to confirm it.

That's it — no server, no database, submissions land in your email and the Formspree dashboard. Free tier covers up to 50 submissions/month; paid plans start around $10/month if you outgrow that.

**Note on Booking specifically:** this still doesn't check real table availability — it just sends you a request. For actual live availability and no-show protection, replace the form on `booking.html` with an OpenTable/Resy/Tock embed instead (see note on that page).


1. **Restaurant name** — currently "The Olive & Oak" (search/replace across all files, plus `<title>` tags)
2. **Photos** — every `.dish-media` / `.g-item` block is a CSS gradient placeholder. Replace with real `background-image` or `<img>` tags.
3. **Address, phone, email, hours** — in `contact.html`, `index.html`, and the footer (repeated on every page).
4. **Menu items and prices** — `menu.html` and `menu-kit.html`.
5. **Forms** — already wired to Formspree (see setup steps above) — just drop in your real Formspree form ID.

## Making forms real (no backend needed)
Covered above — Formspree is already wired in. If you'd rather use Netlify Forms instead (only works if you host on Netlify), add a `netlify` attribute to each `<form>` tag and remove the `action`/Formspree wiring; Netlify auto-detects the form at deploy time.

For actual table booking with live availability (not just a request form), embed OpenTable, Resy, or Tock on `booking.html` instead of the custom form.

## Hosting — cost breakdown
This is a static site (HTML/CSS/JS, no server/database), so hosting is cheap:

| Option | Cost | Notes |
|---|---|---|
| **Netlify** | Free tier (site hosting + forms + SSL) | Easiest — drag-and-drop deploy, free HTTPS, form handling built in |
| **GitHub Pages** | Free | Great if you're already using Git; no built-in form handling |
| **Vercel** | Free tier | Similar to Netlify |
| **Domain name** | ~$12–20/year | e.g. `theoliveandoak.com` via Namecheap, Google Domains, etc. |
| **Shared hosting (Bluehost/Hostinger)** | ~$3–10/month | Only needed if you want traditional cPanel hosting instead of the above |

**Realistic total to go live:** $0–15/year (Netlify/Vercel + a domain), or up to ~$120/year on traditional shared hosting. No hosting plan needs to charge monthly just to serve static pages like these.

## Local preview
Open `index.html` directly in a browser, or run a local server from this folder:
```
python3 -m http.server 8000
```
then visit `http://localhost:8000`.
