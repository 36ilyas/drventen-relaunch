# Website-Entwürfe – Dermatologie am Berliner Platz

Neue One-Pager-Website für die Hautarztpraxis **Dr. med. Irene Venten und Kollegen**
(Berliner Platz 9, 41061 Mönchengladbach). Reines statisches HTML/CSS/JS, kein Build-Step –
direkt lauffähig auf GitHub Pages.

`/index.html` ist eine schlichte Auswahlseite mit Links zu den vier Entwürfen.

## Die 4 Entwürfe

| Ordner | Richtung |
|---|---|
| `entwurf-1/` | **Kräftig & modern:** heller Vollflächen-Foto-Hero (Crossfade-Slideshow + sanfter Ken-Burns-Zoom) mit seitlichem Petrol-Verlauf – Foto klar sichtbar, Text lesbar; große Display-Serif **Fraunces** + **Manrope**, Kennzahlen-Leiste im Hero, kontrastreiche Petrol-Sektionen mit hellen Karten. |
| `entwurf-2/` | **Editorial Minimal:** klar und selbstbewusst statt leer – große Grotesk-Headlines (**Space Grotesk** + **Manrope**), aussagekräftiges Hero-Bild rechts, feine Rasterlinien, interaktive Leistungs-Kacheln (Hover füllt sich Petrol), Kennzahlen im Hero. |
| `entwurf-3/` | **Warm & einladend:** warmer Creme-Fond (#F7F5F0) mit Türkis-Akzenten, zentrierter Hero mit Badge, „Einblicke"-Galerie der Praxis, hervorgehobene Leistungskarte, Notdienst-Karte (116 117), „Route planen"-Link, mehrspaltiger Footer. |
| `entwurf-4/` | **Premium & ruhig (neu):** Agentur-Stil nach Vorbild der Beispiel-Entwürfe – Vollbild-Foto-Hero mit Scrim und beim Scrollen einfärbender Fixed-Nav, edle Serifen **Cormorant Garamond** + **Jost**, Petrol/Creme/Seafoam-Palette (Türkis-Familie der Praxis), Leistungen als zweispaltige Serifen-Liste, dunkle Statement- und Sprechzeiten-Bänder. |

Gemeinsam in allen Entwürfen: identischer Inhalt (Leistungen, Team, Sprechzeiten, Kontakt),
Anker-Navigation mit Smooth-Scroll, Mobile-first responsiv, Fokus-States,
`prefers-reduced-motion` wird respektiert (dann keine Slideshow-/Scroll-Animationen),
Google-Maps-Karte lädt erst nach Klick (DSGVO), eigene Impressum-/Datenschutz-Seiten.

**Schriften:** Die Entwürfe binden Web-Schriften über **Google Fonts** ein. Für volle
DSGVO-Sicherheit können die Schriften lokal gehostet werden (in der Datenschutzerklärung
von Entwurf 4 bereits als Punkt vermerkt).

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

- **Bilder = Stock-Platzhalter (Unsplash):** Alle Hero-Hintergründe und alle
  Personen-Porträts (auch „Dr. Venten") sind aktuell **helle, hochauflösende
  Stock-Platzhalter von Unsplash** – bewusst, weil die alten drventen.de-Fotos nur
  niedrig aufgelöst (240–980 px) vorliegen. Vor dem Livegang durch **echte,
  hochauflösende Praxisfotos** ersetzen (Hero-URLs in der jeweiligen `styles.css`
  bzw. `index.html`, Porträts in `index.html`).
  - Ausnahme: Der Hero von **Entwurf 3** nutzt bereits ein **echtes Praxisfoto**
    (`entwurf-3/assets/praxis.png`, Empfang). Die Hero-Stockbilder zeigen bewusst
    **klinische/medizinische** Motive (Untersuchung, Praxisräume) – keine Beauty-Optik.
  - Die echten Low-Res-Dateien (`assets/hero*.jpg`, `assets/portrait-venten.jpg`,
    `entwurf-3/assets/g1–g4.jpg`) liegen weiterhin im Repo und können jederzeit wieder
    eingesetzt werden (z. B. sobald HD-Aufnahmen vorliegen).
  - Team-Namen in Entwurf 4 (Dr. Lachman, Dr. Herrmann-Wendt) stammen vom Praxisschild
    – **bitte prüfen**; die zugehörigen Porträts sind Platzhalter.
- **Impressum:** alle `[…]`-Platzhalter – zuständige Ärztekammer, KV,
  Aufsichtsbehörde, Berufshaftpflichtversicherung (Name, Sitz, Geltungsraum),
  Link zur Berufsordnung.
- **Datenschutz:** Datenschutzbeauftragter (ja/nein), Stand-Datum, ggf. Hoster-Angaben,
  Zuständigkeit der Aufsichtsbehörde prüfen.
- **Rechtstexte insgesamt** vor Veröffentlichung juristisch prüfen lassen
  (Muster, keine Rechtsberatung).
- Optional: eigene Domain (z. B. drventen.de) in **Settings → Pages → Custom domain**.
