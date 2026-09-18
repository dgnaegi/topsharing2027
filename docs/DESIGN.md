# Design Guide

## Plakat-Prinzip

Abgeleitet vom Wahlplakat der Alternativen Liste: ein Schild, keine Seite. Die Fläche ist in wenige, harte Farbbänder geteilt, die Typografie geht bis an die Kante. Swiss Grid als Fundament, Agitprop-Siebdruck als Oberfläche.

**Fünf Grundsätze:**

1. **Bänder statt Container.** Die Seite besteht aus vollbreiten Farbflächen, hart aneinandergesetzt. Die Bandgrenze ist die stärkste Struktur im Layout.
2. **Typografie geht bis an den Rand.** Displayzeilen werden randlos gesetzt und dürfen optisch angeschnitten werden. Die Schrift ist die Fläche, nicht ihr Inhalt.
3. **Eine Schrift trägt alles.** Ruder Plakat für die Ansage, Unica77 für alles Lesbare. Keine Illustration, keine Ikonografie als Ersatz für Typografie.
4. **Drei Farben, kein Zwischenton.** Kein Grauverlauf, keine vierte Farbe, keine Halbtransparenz als Ersatz für eine Entscheidung.
5. **Flache Tiefe.** Tiefe entsteht aus Kontrast, Rahmen und Überlappung. Nie aus Unschärfe.

## Farben

Drei Werte tragen das ganze System. `#FF1975` ist Bandfarbe und Signalfarbe zugleich, aber nie Lesefläche.

| Rolle | Hex | Verwendung |
|---|---|---|
| Papier | `#FFFFFF` | Lesebänder, Standardhintergrund |
| Tinte | `#000000` | Text, Rahmen, Struktur |
| Signal | `#FF1975` | Hero-Band, Sektionswechsel, CTAs, Fokus |
| Signal dunkel | `#C10F5D` | Hover/Active auf Signalflächen |
| Getönt | `#FFE9F2` | Sparsame Flächenfüllung (Karten, Formular) |
| Grau | `#F2F2F2` | Trennung ohne Farbe |

### Kontrastregeln (verbindlich)

| Kombination | Ratio | Erlaubt für |
|---|---|---|
| Schwarz auf `#FF1975` | 5.6:1 | alles, auch Fliesstext |
| `#FF1975` auf Schwarz | 5.6:1 | alles |
| Weiss auf `#FF1975` | 3.7:1 | nur Display ab 24px / 700+ |
| `#FF1975` auf Weiss | 3.7:1 | nur Display, **nie** Fliesstext |

**Text auf Pink ist schwarz, nicht weiss.** Das Plakat macht es so, und es ist der einzige Weg, der die Kontrastanforderung erfüllt.

Pinke Bänder tragen Displayzeilen, Claims, Kennzahlen, CTAs. Sobald ein Band mehr als ca. 60 Wörter enthält, wird es weiss.

## Typografie

Zwei Schnitte, klar getrennte Aufgaben. Kein Mischen innerhalb einer Ebene.

| Familie | Rolle | Grössenbereich |
|---|---|---|
| **AL Ruder Plakat** | Display: H1, H2, Claims, Zahlen | ab 40px |
| **LL Unica77** | Alles andere: Fliesstext, Labels, UI, Navigation | bis 32px |
| **LL Unica77 Mono** | Meta, Nummerierung, Code, Tabellenzahlen | optional |

```css
:root {
  --font-display: 'AL Ruder Plakat', 'Helvetica Neue', Arial, sans-serif;
  --font-text:    'LL Unica77', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  --font-mono:    'LL Unica77 Mono', ui-monospace, monospace;
}
```

> **Lizenz:** Die Ruder-Plakat-Dateien (`frontend/webfonts/`, eingebunden in `frontend/src/fonts.css`) sind laut Lineto-Disclaimer ausschliesslich für Domains von `al-zh.ch` lizenziert. Für `wyss-berner.ch` vor dem Livegang schriftlich bei der AL klären. Der Disclaimer in `fonts.css` darf nicht entfernt werden.
>
> **Unica77 fehlt:** Es wurden nur Ruder-Plakat-Dateien geliefert. Bis Unica77 als `woff2` vorliegt, greift der Fallback Helvetica Neue / Arial. Sobald die Dateien da sind, `@font-face` in `fonts.css` ergänzen, der Name steht schon im Font-Stack. Alle Schnitte als `woff2`, `font-display: swap`, selbst gehostet, keine Google Fonts.

### Ruder Plakat: Display

Der Schnitt ist eine sehr schmale, schwere Plakatgrotesk und funktioniert nur gross. Unter 40px verliert er seinen Charakter. Es gibt nur ein Gewicht: `font-weight: 400` setzen, sonst entsteht Fake-Bold.

```css
.display {
  font-family: var(--font-display);
  font-size: clamp(3.5rem, 17vw, 18rem);   /* XL */
  line-height: 0.85;
  letter-spacing: 0.05em;
  word-spacing: 0.1em;
  text-transform: lowercase;
  margin-left: -0.055em;   /* optische Kante, kompensiert Seitenbearing */
}
```

- **Kleinschreibung** bei Claims und Hauptzeilen. Versalanfang nur bei Eigennamen und Organisationsnamen.
- Zeilenabstand unter 1, die Zeilen sollen als Block stehen, nicht als Absatz.
- Buchstabenabstand öffnen (`letter-spacing: 0.05em`), sonst verschmelzen die Buchstaben des schweren Schnitts. Wortabstand ebenfalls leicht öffnen.
- Nie in Fliesstextlänge. Maximal 4 Wörter pro Zeile.
- **Ausnahme Zentrierung:** Der Hero-Slogan „radikal sozial" steht immer exakt mittig (`text-align: center`, `margin-left: 0`, `padding-left` in Höhe des `letter-spacing`, damit der Nachlauf nach dem letzten Buchstaben die Mitte nicht verschiebt). Alle anderen Displayzeilen und aller Fliesstext bleiben linksbündig.
- Eine Kontur-Variante (Outline) ist nicht im gelieferten Paket.

### Unica77: Text und UI

| Gewicht | Verwendung |
|---|---|
| Regular | Fliesstext |
| Medium | Einleitungen, Lead-Absätze |
| Bold | Labels, H3/H4, Buttons, Navigation |
| Black | Eckenmetadaten, Kennzeichnungen |

```css
body {
  font-family: var(--font-text);
  font-size: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
  line-height: 1.5;
}
p { max-width: 68ch; }

.meta {
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
```

- Fliesstext linksbündig, Flattersatz. Nie zentriert, nie Blocksatz.
- Labels und Buttons uppercase mit `letter-spacing: 0.08em` bis `0.12em`.
- Responsive ausschliesslich über `clamp()`, keine Breakpoint-Sprünge in der Schriftgrösse.

### Skalensprung

Zwischen Display und Text liegt bewusst nichts. Wer viele Zwischengrössen einführt, hat ein Corporate-Template statt eines Plakats.

| Stufe | Grösse | Schrift |
|---|---|---|
| Display XL | `clamp(3.5rem, 17vw, 18rem)` | Ruder Plakat |
| Display L | `clamp(3rem, 10vw, 8rem)` | Ruder Plakat |
| Claim, Zitat | `clamp(1.25rem, 2.2vw, 2rem)` | Unica77 Bold / Medium |
| Text | `1rem bis 1.125rem` | Unica77 Regular |
| Meta | `0.75rem` | Unica77 Bold, uppercase |

## Layout

### Bänder

Jede Sektion ist ein vollbreites Band. Farbe wechselt hart, ohne Übergangszone.

```css
.band {
  width: 100%;
  padding-block: clamp(4rem, 10vw, 10rem);
  padding-inline: clamp(1rem, 4vw, 4rem);
  border-bottom: 4px solid #000;
}
.band--signal { background: #FF1975; color: #000; }
.band--paper  { background: #FFF;    color: #000; }
.band--ink    { background: #000;    color: #FFF; }
```

Rhythmus: Signal → Papier → Ink. Zwei Signalbänder nie direkt hintereinander.

### Eckenmetadaten

Die Marginalien des Plakats („Liste 6", Datum, Ort) werden zum Navigationsprinzip: jedes Band trägt oben links eine Sektionsnummer und oben rechts ein Kennzeichen, beide in `.meta`.

```
01 / ÖFFENTLICH UNTERSTÜTZEN                    BERNER & WYSS 2027
```

### Raster

12 Spalten, Gutter `24px`, asymmetrische Belegung. Displayzeilen laufen voll (der Hero-Slogan zentriert). Textblöcke halten sich strikt daran und sitzen nie mittig, sondern auf Spalte 1 bis 5 (Lead) und 6 bis 12 (Inhalt).

## Rahmen & Radius

- **Radius:** `0px` überall. Keine Ausnahme.
- **Rahmen:** `2px solid #000000`, an Struktur-Elementen und Bandkanten `4px`.
- Auf Signalflächen bleibt der Rahmen schwarz, nie weiss.

## Schatten

Keine. Interaktion zeigt sich durch Farbinversion oder `translateY(-1px)`, nie durch Fade oder Blur.

## Komponenten

### Buttons

| Variante | Hintergrund | Text | Hover |
|---|---|---|---|
| Primär | `#000000` | `#FFFFFF` | Hintergrund → `#FF1975`, Text schwarz |
| Sekundär | transparent, Rahmen `2px` schwarz | `#000000` | Hintergrund → `#000000`, Text weiss |
| Auf Signalband | `#000000` | `#FFFFFF` | Hintergrund → `#FFFFFF`, Text schwarz |

Rechteckig, Unica77 Bold, uppercase, `letter-spacing: 0.08em`, Padding `16px 32px`.

### Links

Schwarz, unterstrichen in `#FF1975`:

```css
a {
  color: #000;
  text-decoration: underline;
  text-decoration-color: #FF1975;
  text-decoration-thickness: 3px;
  text-underline-offset: 4px;
}
a:hover { text-decoration-color: #C10F5D; }
```

### Karten

Weiss oder `#FFE9F2`, Rahmen `2px solid #000000`, Innenabstand `24px` und mehr. Pinkes Kopfband innerhalb der Karte, Höhe `8px`, statt einer Überschriftfarbe.

### Formular

Felder mit voller Rahmenbox (`2px solid #000000`), nicht nur Unterstrich. Fokus: Rahmenfarbe → `#FF1975`, kein Glow.

### Fokus

```css
:focus-visible {
  outline: 3px solid #000;
  outline-offset: 3px;
}
```

Auf schwarzen Flächen `outline-color: #FF1975`.

### Dialog

Solide Signalfläche als Hintergrund statt halbtransparentem Schwarz, Dialog weiss mit `4px` Rahmen.

## Spacing

4px-Basisraster: `4 / 8 / 16 / 24 / 32 / 64 / 128`. Bandinnenabstände über `clamp()`.

## Bewegung

Sofort, mechanisch, kein Easing mit Überschwingen.

```css
transition: background 0.15s ease-out, color 0.15s ease-out, transform 0.1s ease-out;

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Drucktextur (optional)

Sparsam und nur auf einem Element pro Screen, üblicherweise der Hero-Headline: feines Grain-Overlay (`opacity: .04`, `mix-blend-mode: multiply`) oder ein Passerversatz von 2px in `#FF1975` hinter der schwarzen Zeile. Über die ganze Seite gezogen wird der Effekt Dekoration und widerspricht Grundsatz 1.

## Was vermeiden

| ✗ | ✓ |
|---|---|
| Rundungen | `border-radius: 0` |
| Weiche Schatten, Blur | Rahmen oder gar nichts |
| Weisser Text auf Pink im Fliesstext | Schwarz auf Pink |
| Pink als Seitenhintergrund für Lesetext | Pink als Band, Weiss als Lesefläche |
| Ruder Plakat unter 40px | Unica77 Bold |
| Fake-Bold auf Ruder Plakat | `font-weight: 400` |
| Viele Zwischengrössen zwischen Display und Text | harter Sprung |
| Zentrierter Fliesstext | Linksbündig |
| Mehrere Akzentfarben | Nur `#FF1975` und seine Abstufungen |
| Verläufe, Halbtransparenz | Flächige Farbe plus Rahmen |
| Emoji im UI | Text, nötigenfalls `lucide-react`-Icons |

## Token-Referenz

```ts
// theme.ts
colors.signal      = '#FF1975'
colors.signalDark  = '#C10F5D'
colors.tint        = '#FFE9F2'
colors.muted       = '#F2F2F2'
colors.paper       = '#FFFFFF'
colors.ink         = '#000000'

fonts.display      = "'AL Ruder Plakat', 'Helvetica Neue', Arial, sans-serif"
fonts.text         = "'LL Unica77', 'Helvetica Neue', Helvetica, Arial, sans-serif"
fonts.mono         = "'LL Unica77 Mono', ui-monospace, monospace"

border             = '2px solid #000000'
borderStructural   = '4px solid #000000'
radius             = '0px'
shadow             = 'none'
```
