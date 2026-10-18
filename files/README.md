# Images Folder

Place all website images in this folder. These images are referenced
by the website using relative `files/...` paths.

Copy them from your Frappe site's public files directory
(`sites/<site>/public/files/`) into this `files/` folder.

## Required images

| File | Used on |
|------|---------|
| `hinglaj-logo.png` | Navbar, Footer |
| `hinglaj-favicon.png` | (optional — site uses `favicon.png` from project root) |
| `gas.png` | Home hero |
| `a1.png`, `a2.png`, `a3.png` | Home about slideshow, About Us page |
| `s1.png` … `s6.png` | Services page applications slideshow |
| `sp1.png` … `sp7.png`, `spp.png`, `sp9.png` | Spares page + Home spares preview |
| `g1.jpg` … `g13.jpg` | Clients (also used on Home carousel) |
| `g14.png` … `g41.png` | Clients page (Home uses g14–g22) |

Total: ~60 images.

The site works without them (broken image icons), but copy the files
from the original Frappe deployment for a complete production site.
