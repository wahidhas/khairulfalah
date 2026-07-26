# Button

`src/components/ui/Button.astro`

## Purpose

Primary interactive action element. Renders as `<a>` when `href` is passed, otherwise `<button>`.

## Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `variant` | `primary \| secondary \| outline \| ghost` | `primary` | `outline` and `secondary` are visually identical (bordered emerald) — Design System only defines 3 button styles, `outline` maps to "Secondary Button". |
| `size` | `sm \| md \| lg` | `md` | |
| `href` | `string` | — | Renders as `<a>` when set. |
| `external` | `boolean` | `false` | Adds `target="_blank" rel="noopener noreferrer"` (only with `href`). |
| `type` | `button \| submit \| reset` | `button` | Ignored when `href` is set. |
| `disabled` | `boolean` | `false` | Native `disabled` for `<button>`; `aria-disabled` + `tabindex="-1"` for `<a>` (anchors have no native disabled state). |
| `id` | `string` | — | |
| `class` | `string` | — | Merged, doesn't replace base styles. |
| `ariaLabel` | `string` | — | Use when the visible label alone isn't descriptive enough. |

## Example

```astro
<Button href="/ppdb" variant="primary">Daftar PPDB</Button>
<Button variant="outline" size="sm" disabled>Tidak tersedia</Button>
```

## Accessibility Notes

- Focus ring via the shared `focus-ring` utility (2px solid emerald-600 outline).
- Disabled links are `aria-disabled` + unfocusable, not just visually dimmed.
- `ariaLabel` overrides visible text for assistive tech when needed (e.g. icon-only buttons).
