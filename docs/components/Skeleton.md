# Skeleton

`src/components/ui/Skeleton.astro`

## Purpose

Loading placeholder. Pure CSS (`animate-pulse`, a built-in Tailwind utility) — zero JavaScript.

## Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `variant` | `card \| avatar \| text` | `text` | |
| `lines` | `number` | `3` | Only used by `variant="text"`. |
| `id` | `string` | — | |
| `class` | `string` | — | |

## Example

```astro
<Skeleton variant="card" />
<Skeleton variant="avatar" />
<Skeleton variant="text" lines={2} />
```

## Accessibility Notes

- Always `aria-hidden="true"` — it's a visual loading placeholder, not content. If used, wrap the loading region in a live region (e.g. `aria-busy="true"` on the container) at the call site so assistive tech knows content is pending.
