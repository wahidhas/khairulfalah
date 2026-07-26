# Card

`src/components/ui/Card.astro`

## Purpose

Generic content container. Foundation for `StatisticCard`, `TestimonialCard`, `PersonCard`, and every card grid in `sections/`.

## Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `variant` | `default \| bordered \| elevated \| flat` | `default` | `elevated` includes hover lift + shadow increase (Design System: "translate sedikit, shadow bertambah", max 200ms). |
| `padding` | `sm \| md \| lg` | `md` | `sm`=16px, `md`=24px, `lg`=32px. |
| `as` | `string` | `div` | Override the wrapping tag (e.g. `article`, `li`). |
| `id` | `string` | — | |
| `class` | `string` | — | |

## Example

```astro
<Card variant="elevated" padding="lg">
  <h3>Judul</h3>
  <p>Konten kartu.</p>
</Card>
```

## Accessibility Notes

- Purely presentational — semantics come from the `as` tag and its content. Use `as="article"` when the card represents standalone syndicated content (e.g. a program or testimonial).
