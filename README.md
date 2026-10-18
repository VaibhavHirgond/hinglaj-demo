# Shree Hinglaj Sales & Services — Production Website
#hello
Static HTML/CSS/JavaScript production build of the Shree Hinglaj
Sales & Services website (converted from the original Frappe + Vue 3 SPA).

No frameworks, no build step, no dependencies — pure HTML, CSS and vanilla JS.

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, about preview, services preview, spares preview, auto-sliding clients carousel |
| About Us | `about-us.html` | Who we are slideshow, what we do, applications, why us |
| Services | `services.html` | 9 services with anchor targets, applications + 6-image slideshow |
| Spares | `spares.html` | 9 spare-part products, support section |
| Clients | `clients.html` | 41 client logos grid |
| Contact | `contact.html` | Contact details, embedded Google Map, company info |

## Features

- Responsive layout (mobile menu, tablet, desktop)
- Navbar services dropdown (hover on desktop, tap on mobile)
- Auto-advancing image slideshows (home 4s, about-us 4.5s, services 4s)
- Auto-advancing clients carousel with dots (3.5s)
- Footer phone-call confirmation popup
- Floating WhatsApp chat button
- Active navigation highlighting
- Inter font (self-hosted)
- Heroicons SVG icons (inlined)
- Dynamic copyright year

## Structure

```
shree-hinglaj-website/
├── index.html
├── about-us.html
├── services.html
├── spares.html
├── clients.html
├── contact.html
├── favicon.png
├── css/
│   ├── style.css          # All site styles
│   └── inter.css          # Inter font faces
├── js/
│   └── main.js            # All interactivity
├── fonts/                 # Inter woff/woff2 files
└── files/                 # ← Put business images here (see files/README.md)
```

## Deploy

Upload the entire folder contents to any static host (nginx, Apache,
Netlify, shared hosting, etc.). No server-side processing required.

For local preview:

```bash
# Python
python -m http.server 8080

# or Node
npx serve .
```

Then open http://localhost:8080

## Images

Copy all images from the original Frappe site's
`sites/<site>/public/files/` directory into this project's `files/`
folder. See `files/README.md` for the full list.
