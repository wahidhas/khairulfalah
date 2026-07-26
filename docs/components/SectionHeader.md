# SectionHeader

`src/components/ui/SectionHeader.astro`

## Purpose

Standard title block used at the top of nearly every section — badge (eyebrow), heading, optional subtitle/description. Also used as the page's single `<h1>` (via `as="h1"`) inside `Hero`-style sections.

## Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `badge` | `string` | — | Renders inside a `warning`-variant `Badge`. |
| `title` | `string` | — | Required. |
| `subtitle` | `string` | — | |
| `description` | `string` | — | |
| `as` | `h1 \| h2` | `h2` | **Only one `SectionHeader` per page should use `as="h1"`** — that page's Hero. Every other section must stay `h2` to keep heading hierarchy valid. |
| `align` | `center \| left` | `center` | |
| `invert` | `boolean` | `false` | White/amber text for dark backgrounds (e.g. `FinalCTASection`'s emerald panel). |
| `id` | `string` | — | |
| `class` | `string` | — | |

## Example

```astro
<SectionHeader as="h1" align="left" title={hero.title} description={hero.description} />
<SectionHeader badge="Kurikulum" title="KFLF" invert />
```

## Accessibility Notes

- Heading level is explicit via `as`, never inferred from font size — this is what keeps the page's heading outline correct regardless of visual size (see `text-h1`/`text-h2` in Typography).
