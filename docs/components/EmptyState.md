# EmptyState

`src/components/ui/EmptyState.astro`

## Purpose

Placeholder for a spot that will hold dynamic data later but currently has none (e.g. a future empty article list, empty gallery). Distinct from the `placeholder: true` pattern used in `Testimonial`/`PersonProfile`/`Achievement`, which marks *individual items* as unverified — `EmptyState` is for when there's *nothing to show at all*.

## Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `icon` | `string` | `inbox` | Icon registry key. |
| `title` | `string` | — | Required. |
| `description` | `string` | — | |
| `id` | `string` | — | |
| `class` | `string` | — | |

## Example

```astro
<EmptyState icon="inbox" title="Belum ada artikel" description="Artikel akan tampil di sini setelah dipublikasikan." />
```

## Accessibility Notes

- Icon is decorative (`aria-hidden` via `IconBox`); the title/description text carries the meaning for screen readers.
