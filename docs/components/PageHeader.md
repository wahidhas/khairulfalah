# PageHeader

`src/components/layout/PageHeader.astro`

## Purpose

Standard header for inner pages (About, and every future page) — breadcrumb + `<h1>` + description. Renders the page's *only* `<h1>`.

## Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `title` | `string` | — | Required. |
| `description` | `string` | — | |
| `breadcrumb` | `NavigationItem[]` | — | Rendered via `Breadcrumb`. Omit on pages that don't need one (shouldn't happen per INFORMATION_ARCHITECTURE.md — every non-home page needs a breadcrumb). |

## Example

```astro
<PageHeader title="Tentang Madrasah Khairul Falah" description={aboutHero.description} breadcrumb={aboutHero.breadcrumb} />
```

## Accessibility Notes

- Only one `PageHeader` (or other `as="h1"` `SectionHeader`) should exist per page — don't combine both on the same page or you'll get two `<h1>`s.
