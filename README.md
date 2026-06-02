# AdForge – Performance Marketing Website

Moderne, conversion- und SEO-optimierte Website für **AdForge** (Performance-Marketing-Agentur, Google &amp; Meta Ads).
Statische Website (HTML/CSS/JS), ohne Build-Schritt – direkt deploybar.

## Struktur
- `index.html` – Startseite (One-Pager)
- `kontakt.html` – Kontakt + Formular (sendet an Zapier-Webhook)
- `impressum.html`, `datenschutz.html` – Rechtliches
- `styles.css`, `script.js` – Styling &amp; Interaktivität
- `images/` – Bilder (Foto `tobias-grundl.jpg` ergänzen)
- `sitemap.xml`, `robots.txt` – SEO
- `vercel.json` – Hosting-Konfiguration (Clean URLs, Caching, Security-Header)
- `AGENT.md`, `STRATEGIE.md` – internes Briefing &amp; Strategie

## Deployment (Vercel)
Kein Build nötig – Vercel erkennt die statische Seite automatisch.
Framework Preset: **Other**. Build Command: leer. Output Directory: leer (Root).

## Lokale Vorschau
Einfach `index.html` im Browser öffnen, oder:
```bash
npx serve .
```
