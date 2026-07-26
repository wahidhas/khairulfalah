# Badge

`src/components/ui/Badge.astro`

## Purpose

Small status/label pill. Used for section eyebrows (via `SectionHeader`) and "Placeholder" markers on unverified content (`TestimonialCard`, `PersonCard`, `AchievementsSection`).

## Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `variant` | `primary \| secondary \| success \| warning \| gray` | `primary` | Design System has only 3 colors (emerald/amber/gray) — `secondary` and `success` are intentionally the same visual treatment (subtle emerald); there's no dedicated "success" color. `warning` = amber. |
| `uppercase` | `boolean` | `true` | Set `false` for full-sentence text. CONTENT_STRATEGY.md forbids excessive capitals, and a whole sentence in ALL CAPS is harder to read. Short eyebrow labels keep the default. |
| `id` | `string` | — | |
| `class` | `string` | — | |

## Example

```astro
<Badge variant="gray">Placeholder</Badge>
<Badge variant="warning">Sorotan</Badge>
```

## Accessibility Notes

- Renders as `<span>` — decorative/supplementary by default. If a badge conveys essential status info (not just decoration), ensure the surrounding text also states it in words, since color alone shouldn't carry meaning.
