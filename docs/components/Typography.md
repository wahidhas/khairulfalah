# Typography

`src/styles/global.css`

## Purpose

Reusable text-size utilities matching DESIGN_SYSTEM.md's Heading Scale exactly, usable on any element regardless of semantic tag (so heading *level* — set via a component's `as` prop — never has to match visual *size*).

## Tokens

| Utility | Size | Responsive | Weight | Source |
|---|---|---|---|---|
| `text-display` | 36 → 40 → 56px | mobile/tablet/desktop | 700 | Extension (not in DESIGN_SYSTEM.md) — hero headlines. |
| `text-h1` | 32 → 36 → 48px | mobile/tablet/desktop | 700 | DESIGN_SYSTEM.md H1. |
| `text-h2` | 40px | flat | 600 | DESIGN_SYSTEM.md H2 (no breakpoint variation specified in the doc). |
| `text-h3` | 32px | flat | 600 | DESIGN_SYSTEM.md H3. |
| `text-h4` | 24px | flat | 600 | DESIGN_SYSTEM.md H4. |
| `text-h5` | 20px | flat | 500 | DESIGN_SYSTEM.md H5. |
| `text-lead` | 18px | flat | 400 | Extension — intro paragraphs. |
| `text-base` | 16px | flat | — | **Tailwind default**, matches Body exactly. Don't redefine. |
| `text-sm` | 14px | flat | — | **Tailwind default**, matches Small exactly. |
| `text-xs` | 12px | flat | — | **Tailwind default**, matches Caption exactly. |

All headings use `line-height: 1.2` (120%, matching DESIGN_SYSTEM.md); `text-lead`/`text-base`/`text-sm`/`text-xs` use 160% (Tailwind's defaults for body copy already match).

## Example

```astro
<h1 class="text-h1 text-gray-900">Judul Halaman</h1>
<p class="text-lead text-gray-600">Paragraf pembuka.</p>
```

## Accessibility Notes

- Always pair the semantic tag with the size utility independently — e.g. a card's `<h3>` inside a grid is correctly `<h3>` for outline purposes even when styled at `text-base` size, and vice versa. Never pick a heading tag *because* of its default browser size.
