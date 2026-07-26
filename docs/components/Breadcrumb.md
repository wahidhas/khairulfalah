# Breadcrumb

`src/components/ui/Breadcrumb.astro`

## Purpose

Navigational trail (`Beranda / Tentang`) required by INFORMATION_ARCHITECTURE.md on every non-home page. Used internally by `PageHeader`; rarely needed standalone.

## Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `items` | `NavigationItem[]` | — | Required. Last item renders as the current page (not a link). |
| `id` | `string` | — | |
| `class` | `string` | — | |

## Example

```astro
<Breadcrumb items={[{ label: 'Beranda', href: '/' }, { label: 'Tentang', href: '/about' }]} />
```

## Accessibility Notes

- Wrapped in `<nav aria-label="Breadcrumb">`.
- Current page uses `aria-current="page"` and is not a link (matches WAI-ARIA breadcrumb pattern).
