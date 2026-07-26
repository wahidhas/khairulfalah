# IconBox

`src/components/ui/IconBox.astro`

## Purpose

Renders a colored square with a centered icon, driven entirely by data (icon name is a string key, never a direct Lucide import). This is what makes "tidak hardcoded icon" possible — content files store an icon name string, and only `IconBox` (plus `FAQItem`/`TestimonialCard`/`PersonCard`, which use the registry directly) knows how to resolve it.

## Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `icon` | `string` | — | Required. Must be a key in `src/lib/icons.ts`'s `iconRegistry`. Unknown keys render an empty box (no crash). |
| `color` | `emerald \| amber \| gray` | `emerald` | Intentionally uses Design System's literal color names, not Badge's semantic scheme — see note below. |
| `size` | `sm \| md \| lg` | `md` | |
| `id` | `string` | — | |
| `class` | `string` | — | |

## Example

```astro
<IconBox icon="shield-check" color="emerald" size="lg" />
```

## Why `color` isn't `primary/secondary/...` like Badge

`IconBox`'s color is usually driven directly by content data (`LearningDomain.color`, hardcoded per-section choices) where the literal Design System palette name is more meaningful than a UI-state label like "warning". Renaming it would also require rewriting `LearningDomain.color` values across every content file. Kept as-is deliberately, not an oversight.

## Accessibility Notes

- Always `aria-hidden="true"` — icons here are decorative; the adjacent heading/label carries the meaning.
