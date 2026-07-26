# Stack

`src/components/layout/Stack.astro`

## Purpose

Reusable flex row/column with a consistent gap scale, replacing ad-hoc `flex flex-col gap-3` / `flex flex-wrap gap-4` markup.

## Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `direction` | `row \| column` | `column` | |
| `gap` | `sm \| md \| lg` | `md` | 8px / 16px / 24px. |
| `align` | `start \| center \| end \| stretch` | `stretch` | Maps to `items-*`. |
| `wrap` | `boolean` | `false` | |
| `as` | `string` | `div` | |
| `id` | `string` | — | |
| `class` | `string` | — | |

## Example

```astro
<Stack direction="row" gap="md" wrap>
  <Button variant="primary">Daftar PPDB</Button>
  <Button variant="outline">Hubungi Kami</Button>
</Stack>
```

## Accessibility Notes

- Purely layout — no semantic role. Use `as="ul"`/`li` children if the stacked items form a list.
