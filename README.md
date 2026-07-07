# Website-Entwürfe – Dermatologie am Berliner Platz

Neue One-Pager-Website für die Hautarztpraxis **Dr. med. Irene Venten und Kollegen**
(Berliner Platz 9, 41061 Mönchengladbach). Reines statisches HTML/CSS/JS, kein Build-Step –
direkt lauffähig auf GitHub Pages.

`/index.html` ist eine schlichte Auswahlseite mit Links zu den drei Entwürfen.

## Die 3 Entwürfe

| Ordner | Richtung |
|---|---|
| `entwurf-1/` | **Bild-Hero:** Hero mit automatischer Crossfade-Slideshow (3 Bestandsfotos, ~5,5 s pro Bild, 1,5 s Überblendung, Dots). Die niedrig aufgelösten Originalbilder (240×115) laufen als weichgezeichneter Hintergrund + scharfes, gerahmtes Vorschaubild. Serif-Überschriften, Karten-Grid, klassisch-seriös. |
| `entwurf-3/` | **Clinical Minimalism:** Viel Weiß, feine Linien, verfeinerte/gedecktere Töne der Türkis-Familie (oklch), ruhige Serif-Akzente, großer Bild-Platzhalter rechts im Hero, Leistungen als feines Raster. |
| `entwurf-4/` | **Warm & einladend** (inspiriert von drangelov.de/ailyas.com): warmer Creme-Fond (#F7F5F0) mit Türkis-Akzenten, zentrierter Hero mit Badge, „Einblicke"-Galerie der Praxisräume (Foto-Platzhalter), hervorgehobene Leistungskarte, Notdienst-Karte (116 117), „Route planen"-Link, mehrspaltiger Footer. |

Gemeinsam in allen Entwürfen: identischer Inhalt (Leistungen, Team, Sprechzeiten, Kontakt),
Anker-Navigation mit Smooth-Scroll, Mobile-first responsiv, WCAG-AA-Kontraste, Fokus-States,
`prefers-reduced-motion` wird respektiert (dann keine Slideshow-/Scroll-Animationen),
Google-Maps-Karte lädt erst nach Klick (DSGVO), eigene Impressum-/Datenschutz-Seiten.

## GitHub Pages aktivieren

1. Repository zu GitHub pushen (z. B. `drventen-website`).
2. Im Repo: **Settings → Pages**.
3. Unter **Build and deployment**: Source = „Deploy from a branch",
   Branch = `main`, Ordner = `/ (root)` → **Save**.
4. Nach ca. 1 Minute ist die Seite unter
   `https://<benutzername>.github.io/<repo-name>/` erreichbar.
   Die Entwürfe liegen dann unter `…/entwurf-1/`, `…/entwurf-3/`, `…/entwurf-4/`.

**Einen Entwurf übernehmen:** Inhalt des gewählten Ordners (`index.html`,
`impressum.html`, `datenschutz.html`, `styles.css`, `script.js`, ggf. `assets/`)
ins Repo-Root kopieren und die übrigen Ordner löschen.

## Vom Betreiber noch zu ergänzen / zu prüfen

- **HD-Bilder:** Die drei Hero-Bilder in `entwurf-1/assets/` (`hero1.jpg`–`hero3.jpg`)
  sind aktuell generierte Platzhalter in Originalauflösung 240×115 px.
  Hochauflösende Ersatzbilder einfach **unter gleichem Dateinamen** ablegen – sie
  werden 1:1 an gleicher Stelle verwendet.
- **Portraitfoto** von Dr. Venten (Platzhalter in der Team-Sektion aller Entwürfe).
- **Praxisraum-Fotos** für die „Einblicke"-Galerie in Entwurf 4 (4 Platzhalter-Kacheln) und den großen Hero-Bild-Platzhalter in Entwurf 3.
- **Impressum:** alle `[…]`-Platzhalter – zuständige Ärztekammer, KV,
  Aufsichtsbehörde, Berufshaftpflichtversicherung (Name, Sitz, Geltungsraum),
  Link zur Berufsordnung.
- **Datenschutz:** Datenschutzbeauftragter (ja/nein), Stand-Datum, ggf. Hoster-Angaben,
  Zuständigkeit der Aufsichtsbehörde prüfen.
- **Rechtstexte insgesamt** vor Veröffentlichung juristisch prüfen lassen
  (Muster, keine Rechtsberatung).
- Optional: eigene Domain (z. B. drventen.de) in **Settings → Pages → Custom domain**.
