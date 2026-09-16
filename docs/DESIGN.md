# Design Guide

## Swiss International Typographic Style

Objektive, klare Kommunikation statt Dekoration. Die Gestaltung tritt zurück, der Inhalt spricht. Grosse, strukturelle Typografie, sichtbares Raster, flache Flächen ohne Schatten oder Verläufe.

**Fünf Grundsätze:**

1. **Objektivität vor Ausdruck.** Jede gestalterische Entscheidung ist durch den Inhalt begründet.
2. **Das Raster ist Gesetz.** Asymmetrische Anordnung statt Zentrierung, sichtbar durch Rahmen und Rasterlinien.
3. **Typografie ist die Oberfläche.** Grösse, Gewicht und Position erzeugen Hierarchie, nicht Farbe oder Schmuck.
4. **Weissraum ist aktiv.** Grosszügiger Abstand strukturiert, statt Platz zu verschwenden.
5. **Flache Tiefe.** Keine Schatten, keine Verläufe. Tiefe entsteht durch Kontrast und Rahmen.

## Farben

Strikte Palette. `#FF1975` ist die einzige Signalfarbe. Keine weiteren, unverwandten Akzentfarben.

| Rolle | Hex | Verwendung |
|---|---|---|
| Hintergrund | `#FFFFFF` | Seitenfläche |
| Vordergrund | `#000000` | Text, Rahmen, Struktur |
| Akzent | `#FF1975` | CTAs, Hover, Links, Zitat-Unterstreichung |
| Akzent dunkel | `#C10F5D` | Hover-/Active-Zustand auf Akzentflächen |
| Getönt | `#FFE9F2` | Sparsame Flächen-Füllung (Formular-Hintergrund, Karten) |
| Grau | `#F2F2F2` | Sekundäre Flächen, Trennung ohne Farbe |

`#FF1975` niemals als grossflächige Dekoration. Nur für: primäre Buttons, Hover-Inversion, unterstrichene klickbare Zitate, Fokus-Zustand.

## Typografie

**Schrift:** Inter (Google Fonts), Gewichte 400 bis 900.

| Gewicht | Verwendung |
|---|---|
| 400 / 500 | Fliesstext |
| 700 | Formular-Labels, kleinere Überschriften |
| 900 | Seitentitel, H1/H2, Namen |

- Überschriften und Labels: `text-transform: uppercase`
- Grosse Titel: `letter-spacing: -0.02em`
- Kleine Labels: `letter-spacing: 0.08em bis 0.12em`
- Fliesstext: linksbündig, Flattersatz. Nie zentriert.
- Responsive über `clamp()`, keine Breakpoint-Sprünge in der Schriftgrösse.

## Rahmen & Radius

- **Radius:** `0px` überall. Keine Ausnahme.
- **Rahmen:** `2px solid #000000`, an Struktur-Elementen `3px`.

## Schatten

Keine. Depth kommt aus Kontrast und Rahmen, nicht aus Unschärfe. Interaktion zeigt sich durch Farbinversion (Schwarz → Weiss, Weiss → Akzent) oder minimale Verschiebung (`translateY(-1px)`), nie durch Fade.

## Komponenten

### Buttons

| Variante | Hintergrund | Text | Hover |
|---|---|---|---|
| Primär | `#000000` | `#FFFFFF` | Hintergrund → `#FF1975` |
| Sekundär | `#FFFFFF`, Rahmen schwarz | `#000000` | Hintergrund → `#000000`, Text weiss |

Rechteckig, uppercase, `font-weight: 800`, `letter-spacing: 0.08em`.

### Zitate (Unterstützende)

Klickbare Zitate sind unterstrichen (`text-decoration: underline`, Farbe `#FF1975`), Cursor `pointer`. Klick öffnet die Detailansicht. Kein Hover-Fade, nur `color` wechselt zu `#C10F5D`.

### Karten

Weiss oder `#FFE9F2`, Rahmen `2px solid #000000`, Innenabstand grosszügig (`24px`+).

### Formular

Felder mit voller Rahmenbox (`2px solid #000000`), nicht nur Unterstrich. Fokus: Rahmenfarbe wechselt zu `#FF1975`, kein Glow.

## Spacing

4px-Basisraster: `4 / 8 / 16 / 24 / 32 / 64`.

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

## Was vermeiden

| ✗ | ✓ |
|---|---|
| Rundungen | `border-radius: 0` |
| Weiche Schatten, Blur | Rahmen oder gar nichts |
| Zentrierter Fliesstext | Linksbündig |
| Mehrere Akzentfarben | Nur `#FF1975` und seine Abstufungen |
| Verläufe | Flächige Farbe plus Rahmen |
| Emoji im UI | Text, nötigenfalls `lucide-react`-Icons |

## Token-Referenz

```ts
// theme.ts
colors.accent      = '#FF1975'
colors.accentDark   = '#C10F5D'
colors.tint          = '#FFE9F2'
colors.muted         = '#F2F2F2'
colors.background   = '#FFFFFF'
colors.text            = '#000000'

border    = '2px solid #000000'
radius    = '0px'
shadow    = 'none'
```
