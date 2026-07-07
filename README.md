# Website-Entwürfe – Dermatologie am Berliner Platz

Neue One-Pager-Website für die Hautarztpraxis **Dr. med. Irene Venten und Kollegen**
(Berliner Platz 9, 41061 Mönchengladbach). Reines statisches HTML/CSS/JS, kein Build-Step –
direkt lauffähig auf GitHub Pages.

`/index.html` ist eine schlichte Auswahlseite mit Links zu den drei Entwürfen.

## Die 3 Entwürfe

| Ordner | Richtung |
|---|---|
| `entwurf-1/` | **Bild-Hero:** Vollflächen-Hero mit automatischer Crossfade-Slideshow im Hintergrund (3 Praxisfotos, ~5,5 s pro Bild, 1,5 s Überblendung, Dots), Türkis-Overlay für Lesbarkeit. Serif-Überschriften, Karten-Grid, klassisch-seriös. |
| `entwurf-2/` | **Clinical Minimalism:** Viel Weiß, feine Linien, verfeinerte/gedecktere Töne der Türkis-Familie (oklch), ruhige Serif-Akzente, großes Praxisfoto rechts im Hero, Leistungen als feines Raster. |
| `entwurf-3/` | **Warm & einladend:** warmer Creme-Fond (#F7F5F0) mit Türkis-Akzenten, zentrierter Hero mit Badge, „Einblicke"-Galerie der Praxis, hervorgehobene Leistungskarte, Notdienst-Karte (116 117), „Route planen"-Link, mehrspaltiger Footer. |

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
   Die Entwürfe liegen dann unter `…/entwurf-1/`, `…/entwurf-2/`, `…/entwurf-3/`.

**Einen Entwurf übernehmen:** Inhalt des gewählten Ordners (`index.html`,
`impressum.html`, `datenschutz.html`, `styles.css`, `script.js`, ggf. `assets/`)
ins Repo-Root kopieren und die übrigen Ordner löschen.

## Vom Betreiber noch zu ergänzen / zu prüfen

- **HD-Bilder:** Alle eingesetzten Fotos (Hero-Slideshow, Team-Portrait, Hero-Foto,
  „Einblicke"-Galerie) stammen aus der alten Website drventen.de und sind daher
  **niedrig aufgelöst** (Web-Bilder von 2013, ca. 240–980 px breit). Für den echten
  Livegang sollten sie durch hochauflösende Aufnahmen ersetzt werden – einfach
  **unter gleichem Dateinamen** im jeweiligen `assets/`-Ordner ablegen, dann werden
  sie 1:1 an gleicher Stelle verwendet.
  - `entwurf-1/assets/`: `hero1.jpg` (Behandlungsraum), `hero2.jpg` (Fassade),
    `hero3.jpg` (Hautkrebs-Screening), `portrait-venten.jpg`
  - `entwurf-2/assets/`: `hero-foto.jpg` (Behandlungsraum), `portrait-venten.jpg`
  - `entwurf-3/assets/`: `g1.jpg`–`g4.jpg` (Galerie), `portrait-venten.jpg`
- **Impressum:** alle `[…]`-Platzhalter – zuständige Ärztekammer, KV,
  Aufsichtsbehörde, Berufshaftpflichtversicherung (Name, Sitz, Geltungsraum),
  Link zur Berufsordnung.
- **Datenschutz:** Datenschutzbeauftragter (ja/nein), Stand-Datum, ggf. Hoster-Angaben,
  Zuständigkeit der Aufsichtsbehörde prüfen.
- **Rechtstexte insgesamt** vor Veröffentlichung juristisch prüfen lassen
  (Muster, keine Rechtsberatung).
- Optional: eigene Domain (z. B. drventen.de) in **Settings → Pages → Custom domain**.
