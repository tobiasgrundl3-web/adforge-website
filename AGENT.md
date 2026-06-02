# AGENT.md — AdForge Performance Marketing

> Zentrales Briefing- und Wissensdokument für diese Website. Enthält alle Markendaten, die Strategie und Pflegehinweise. Wer (Mensch oder KI) an der Seite weiterarbeitet, liest zuerst dieses Dokument.

---

## 1. Marke & Eckdaten

| Feld | Wert |
|------|------|
| Markenname | **AdForge** (Schreibweise im Logo: ADFORGE) |
| Domain | https://www.adforge-marketing.de |
| Tagline | „Wir schmieden Ads, die Ergebnisse erzielen." |
| Gründer / Ansprechpartner | **Tobias Gründl** – Performance Marketing Experte |
| E-Mail (offiziell) | info@adforge-marketing.de |
| Telefon | +49 159 01967533 |
| Standort | DACH-Region, 100 % remote |
| Positionierung | Performance-Marketing-Agentur, persönliche 1:1-Betreuung (kein Callcenter, kein Junior-Account-Manager) |
| Tonalität | Du-Ansprache, direkt, kompetent, vertrauenswürdig, datengetrieben |
| Sprache | Deutsch (de-DE) |

### Markenfarben (Dark Premium)
- Hintergrund tief: `#0a0b12`
- Surface / Karten: `#13151f`
- Primär (Indigo/Blau): `#5b6cff`
- Forge-Akzent (Ember/Orange): `#ff7a2f` → `#ffb347` (Verlauf, greift den „Schmiede"-Gedanken auf)
- Text hell: `#f5f6fa`, gedämpft: `#9aa0b5`

---

## 2. Angebot / Leistungen

**Hauptdienstleistung:** Google Ads & Meta Ads (Performance Marketing).

Full-Service von A–Z:
1. **Google Ads** – Search, Shopping, Performance Max, YouTube
2. **Meta Ads** – Facebook & Instagram, Lookalikes, Retargeting, Dynamic Creatives
3. **Leadgenerierung** – planbare, qualifizierte Anfragen für Dienstleister & B2B
4. **E-Commerce** – Shopping-Feeds, ROAS-Skalierung für Online-Shops
5. **Tracking & Analytics** – Server-Side Tagging, Conversion API, GA4, lückenlose Attribution
6. **Reporting** – transparente, verständliche Dashboards & regelmäßige Reports
7. **Website-Erstellung** – moderne, schnelle, conversion-optimierte Websites & Landingpages
8. **Design & Creatives** – Ad-Creatives, Branding, Social-Media-Design

---

## 3. Trust-Elemente (auf der Website verbaut)

- Zertifizierungen/Partner: Google Partner, Meta Business Partner, Google Analytics, Shopify, HubSpot
- „Über 1,1 Mio. € verwaltetes Werbebudget"
- „5,0 von 5 Sternen" Kundenbewertungen
- Persönliche Betreuung durch den Gründer (Foto + Statement)
- Garantien: kostenlose Erstberatung, keine Knebelverträge, transparentes Reporting, Angebot in 48 h
- Case-Ergebnisse (E-Commerce, SaaS, Dienstleistung)
- FAQ

> ⚠️ **Platzhalter:** Alle mit `[PLATZHALTER]` markierten Inhalte (echte Kundenlogos, Testimonials, Impressums-/Datenschutzdaten, Reviews-Links) müssen vor dem Live-Gang durch echte Daten ersetzt werden. Zahlen aus der alten Seite (4,2x ROAS, −47 % CPA, +230 % Conversions, Cases) wurden übernommen — bitte auf Korrektheit prüfen.

---

## 4. Strategie (Kurzfassung)

Siehe `STRATEGIE.md` für die Langfassung. Kern:
- **Conversion-Ziel:** kostenloses Erstgespräch buchen (1 klarer CTA, mehrfach platziert).
- **Trust vor Verkauf:** Social Proof, Partner-Badges, persönliche Betreuung früh sichtbar.
- **SEO-First:** sauberes technisches Fundament (Meta, Schema.org, OG, sitemap, robots, Performance, semantisches HTML).
- **Lebendigkeit:** dezente Effekte (Scroll-Reveals, animierte Counter, Glow, Hover-Tilt, Logo-Marquee, Forge-Funken) — performant und nicht aufdringlich.

---

## 5. Dateistruktur

```
Website Adforge/
├── index.html        # One-Pager (Hero, Leistungen, Ergebnisse, Prozess, Über, FAQ, Kontakt-CTA)
├── kontakt.html      # Kontaktseite mit Formular
├── impressum.html    # Rechtliches [PLATZHALTER-Daten]
├── datenschutz.html  # Rechtliches [PLATZHALTER-Daten]
├── styles.css        # zentrales Stylesheet (Dark Premium)
├── script.js         # Animationen, Effekte, Counter, Mobile-Nav, FAQ
├── robots.txt
├── sitemap.xml
├── AGENT.md          # dieses Dokument
└── STRATEGIE.md      # ausführliche Strategie
```

---

## 6. Bilder
- **Logo:** als `images/adforge-logo.svg` (Amboss + Flamme) nachgebaut – wird in Header, Footer und als Favicon genutzt. Bei Bedarf durch die Originaldatei ersetzen.
- **Foto (noch offen):** `images/tobias-grundl.jpg` ablegen → erscheint automatisch in der Über-mich-Sektion (bis dahin dezenter Fallback).

## Formular
Das Kontaktformular sendet per `fetch` (POST) an den Zapier-Webhook `https://hooks.zapier.com/hooks/catch/26752793/upw0gkz/` – inkl. aller Felder, zusammengefasster Kanäle, Quelle und Zeitstempel. Erfolgs-/Fehlermeldung wird direkt im Formular angezeigt. Logik in `script.js` (`form[data-webhook]`), URL im `data-webhook`-Attribut in `kontakt.html`.

## 7. Bewertungen
6 echte 5,0-Sterne-Reviews sind als Sektion „Bewertungen" eingebaut + als `Review`/`AggregateRating` JSON-LD für Google-Rich-Results. Neue Reviews einfach im Block `<section id="bewertungen">` ergänzen.

## 8. To-do vor Go-Live (Checkliste)
- [ ] Foto `images/tobias-grundl.jpg` und Logo `images/adforge-icon.png` ablegen
- [ ] `info@adforge-marketing.de` als Mailempfänger / Formular-Backend anbinden (aktuell mailto)
- [ ] Impressum & Datenschutz mit echten Daten (Name, Anschrift, USt-IdNr.) füllen
- [ ] OG-Bild (`og-image.jpg`, 1200×630) und Favicon erstellen & hochladen
- [ ] Zahlen/Claims rechtlich prüfen (Werbeversprechen)
- [ ] Google Search Console & Analytics/GA4 + Consent-Tool (Cookie-Banner) einrichten
- [ ] Domain auf HTTPS, sitemap.xml in Search Console einreichen
