# TestimonialCard

`src/components/ui/TestimonialCard.astro`

## Purpose

Quote card with attribution. Structurally similar to `PersonCard` (same avatar-fallback + placeholder-badge pattern) but field names differ (`quote`, `avatar: string` vs `photo: ImageAsset`) since it's built directly from the `Testimonial` content type.

## Props

Matches `Testimonial` (minus `id`) from `src/types/content.ts`, plus `id`/`class` for the DOM element.

| Prop | Type | Notes |
|---|---|---|
| `name`, `role`, `quote` | `string` | Required. |
| `avatar` | `string` | Optional image URL. Falls back to a generic user icon. |
| `placeholder` | `boolean` | Shows a "Placeholder" badge — every testimonial currently ships with this `true` until real, consented testimonials exist. |

## Example

```astro
<TestimonialCard name="Orang Tua Siswa" role="Wali Murid" quote="..." placeholder={true} />
```

## Accessibility Notes

- Quote wrapped in real curly quotes (`&ldquo;…&rdquo;`), not styled to look like a blockquote without being one — consider `<blockquote>` if this component is revisited.
