# Container

`src/components/layout/Container.astro`

## Purpose

Centers content and applies the responsive page gutter (16px mobile / 24px tablet / 32px desktop per DESIGN_SYSTEM.md). Used inside nearly every `Section`.

## Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `size` | `narrow \| default \| wide \| full` | `default` | `narrow`=42rem (672px, e.g. FAQ), `default`=1280px, `wide`=1440px, `full`=no max-width. |
| `as` | `string` | `div` | |
| `id` | `string` | — | |
| `class` | `string` | — | Don't pass another `max-w-*` class here — it collides with the size class at equal CSS specificity and the winner depends on Tailwind's generation order, not the order you wrote them. Use the `size` prop instead. |

## Example

```astro
<Container size="narrow">
  <SectionHeader title="FAQ" />
</Container>
```

## Accessibility Notes

- No semantic role by default (`div`) — pass `as="main"` etc. only where that landmark isn't already provided elsewhere on the page.
