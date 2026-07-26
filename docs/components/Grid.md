# Grid

`src/components/layout/Grid.astro`

## Purpose

Reusable replacement for the `grid gap-6 md:grid-cols-2 lg:grid-cols-N` markup repeated across most sections. New sections should use this instead of hand-writing the grid classes; existing sections were left as-is (not force-migrated) to avoid unnecessary regression risk — see Sprint 4 recommendation.

## Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `cols` | `1 \| 1-2 \| 1-2-3 \| 1-2-4 \| 1-3 \| 2-3 \| 2-4` | `1-2-3` | Fixed presets, not an arbitrary number — Tailwind's JIT scanner only generates classes it can see as literal text, so a dynamically-built `grid-cols-${n}` would silently not work. |
| `gap` | `sm \| md \| lg` | `md` | 16px / 24px / 32px. |
| `as` | `string` | `div` | |
| `id` | `string` | — | |
| `class` | `string` | — | |

## Example

```astro
<Grid cols="1-2-4" gap="md">
  {items.map((item) => <Card>{item.title}</Card>)}
</Grid>
```

## Accessibility Notes

- No inherent semantics — if the grid is a list of like items, consider `as="ul"` with `<li>` children.
