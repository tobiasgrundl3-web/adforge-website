# Website-Strategie — AdForge

Erstellt vor dem Bau, basierend auf der Analyse der bestehenden Seite (adforge-marketing.de) und der fünf Referenzseiten (klixpert.io, jonas-strambach.de, hertz6.de, teamlewis.com/de, ecomhouse.com/de).

---

## 1. Ziel der Website

**Primärziel:** Mehr qualifizierte Erstgespräch-Anfragen (Lead-Generierung für die Agentur selbst).
**Sekundärziel:** Vertrauen aufbauen und AdForge als hochwertige, persönlich geführte Performance-Marketing-Agentur positionieren.

Eine einzige, klare Conversion-Aktion: **„Kostenloses Erstgespräch"** — mehrfach, aber konsistent platziert.

---

## 2. Was ich von den Referenzseiten übernehme (nur die guten Punkte)

| Quelle | Übernommene Stärke |
|--------|--------------------|
| **jonas-strambach.de** | Massive Trust-Sektion (Ergebnis-Kacheln mit konkreten Zahlen), „Typische Agentur vs. Wir"-Vergleich, persönlicher Brief des Gründers, „nur wenige Plätze"-Verknappung, klare 3-Schritte-Journey |
| **klixpert.io** | Animierte Zahlen-/Wachstumsgrafiken, Tool-/Tech-Logos als Kompetenzbeweis, ruhiger datengetriebener Reporting-Block, FAQ mit echten Antworten |
| **ecomhouse.com** | Große aggregierte Kennzahlen (verwaltetes Budget, generierter Umsatz), „Kommt dir das bekannt vor?"-Pain-Points, klare Prozess-Schritte, mehrere Trust-Badges |
| **hertz6.de** | Emotionaler, lebendiger Auftritt; „Alles aus einer Hand"; Kurze-Wege-Argument; verspielte, hochwertige Optik |
| **teamlewis.com** | Professionelle, internationale Agentur-Anmutung, klare Leistungs-Gliederung, seriöse Struktur |

**Bewusst NICHT übernommen:** überladene Endlos-Testimonial-Wände, aggressive Pop-ups/Countdowns, Cookie-Wall-Härte. AdForge bleibt seriös und aufgeräumt.

---

## 3. Seitenarchitektur (One-Pager + Unterseiten)

**index.html** – Abschnitte in dieser Reihenfolge (bewährte Conversion-Dramaturgie):
1. **Hero** – Headline, Sub, Doppel-CTA, animierte Kennzahlen, Forge-Glow-Effekt
2. **Trust-Bar** – Partner/Zertifizierungs-Logos (Marquee)
3. **Pain-Points** – „Kennst du das?" (Problembewusstsein)
4. **Leistungen** – Google/Meta Ads als Hauptfokus + Lead-Gen, E-Com, Tracking, Reporting, Web, Design
5. **Warum AdForge** – Vergleich „Typische Agentur vs. AdForge"
6. **Ergebnisse** – Case-Kacheln mit Zahlen + aggregierte Kennzahlen
7. **Prozess** – 4 Schritte
8. **Über / Gründer** – persönliche Betreuung, Trust
9. **FAQ** – Akkordeon
10. **Final-CTA** – Erstgespräch
11. **Footer** – Navigation, Recht, Kontakt

**Unterseiten:** kontakt.html (Formular), impressum.html, datenschutz.html.

---

## 4. SEO-Strategie

**Technisch:**
- Ein `<h1>` pro Seite, saubere Heading-Hierarchie, semantische Tags (`header`, `nav`, `main`, `section`, `footer`).
- Vollständige Meta-Tags: title, description, keywords, canonical, robots, theme-color.
- Open Graph + Twitter Cards für Social Sharing.
- **Schema.org JSON-LD:** `ProfessionalService`/`LocalBusiness` (Agentur + Geo DACH), `Person` (Gründer), `FAQPage`, `BreadcrumbList`, `WebSite`.
- `sitemap.xml` + `robots.txt`.
- `lang="de"`, korrekte Charset/Viewport.
- Performance: kein schweres Framework, inline-kritisches CSS möglich, `loading="lazy"` für Bilder, System-/Web-Fonts sparsam, `prefers-reduced-motion` respektiert.
- Barrierefreiheit: Alt-Texte, Fokuszustände, ausreichende Kontraste, aria-Labels.

**Inhaltlich / Keywords (DE, Performance-Marketing):**
- Primär: „Performance Marketing Agentur", „Google Ads Agentur", „Meta Ads Agentur", „Facebook Ads Agentur"
- Sekundär: „Leadgenerierung", „E-Commerce Marketing", „ROAS steigern", „Conversion Tracking", „Server-Side Tracking", „Landingpage erstellen lassen", „DACH"
- Long-Tail in FAQ & Leistungstexten natürlich eingebaut.

---

## 5. Lebendigkeit / Effekte (performant)

- Sticky Header mit Blur, der beim Scrollen kompakter wird
- Hero: animierter Gradient-/Mesh-Glow + dezente „Funken" (Forge-Thema)
- Scroll-Reveal (IntersectionObserver) für Sektionen
- Animierte Counter (Kennzahlen zählen hoch, sobald sichtbar)
- Hover-Effekte auf Leistungs-Karten (Glow + leichtes Anheben)
- Endlos-Marquee für Partner-/Tech-Logos
- FAQ-Akkordeon mit weichem Auf-/Zuklappen
- Smooth Scroll für Anker-Links
- **`prefers-reduced-motion`** wird respektiert → Animationen aus für empfindliche Nutzer

---

## 6. Vertrauens-Hebel (Trust)

Persönliche Betreuung (Gründer-Foto + Zitat), Partner-Badges, aggregierte Kennzahlen, Case-Ergebnisse, 5,0-Sterne, klare Garantien (keine Knebelverträge, transparentes Reporting, kostenlose Analyse, Angebot in 48 h), DSGVO-konformer Auftritt mit Impressum/Datenschutz.
