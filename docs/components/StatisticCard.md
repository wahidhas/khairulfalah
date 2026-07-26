# StatisticCard

`src/components/ui/StatisticCard.astro`

## Purpose

Large-number stat display (e.g. "— Siswa Aktif"). Composes `Card` internally rather than duplicating its styling.

## Props

Matches `Statistic` (minus `id`) from `src/types/content.ts`, plus `id`/`class` for the DOM element.

| Prop | Type | Notes |
|---|---|---|
| `label` | `string` | Required. |
| `value` | `string` | Required. Use `"—"` for not-yet-available numbers — never invent a figure (see CLAUDE.md Content Rules). |
| `suffix` | `string` | Optional, e.g. `"+"` or `"%"`. |

## Example

```astro
<StatisticCard label="Siswa Aktif" value="—" />
```

## Accessibility Notes

- Plain text content, no special ARIA needed — the large/small text sizes are purely visual, the DOM order already reads value-then-label correctly.
