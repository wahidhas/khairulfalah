# PersonCard

`src/components/ui/PersonCard.astro`

## Purpose

Profile card for people — used identically by Leadership (`Kepala Madrasah`, `Ketua Yayasan`) and Teachers Preview. Shows a generic avatar fallback (not a broken image) when no photo exists yet, and a visible "Placeholder" badge when the profile isn't verified real data.

## Props

Matches `PersonProfile` (minus `id`) from `src/types/content.ts`, plus:

| Prop | Type | Notes |
|---|---|---|
| `name`, `role` | `string` | Required. |
| `photo` | `ImageAsset` | Optional. Falls back to a generic user icon in a gray circle when missing/empty. |
| `bio` | `string` | Optional. |
| `placeholder` | `boolean` | Shows a "Placeholder" `Badge` when `true` — never invent a name/bio to avoid this. |
| `id` | `string` | For the DOM element (distinct from the data `id` on `PersonProfile`, which is omitted here). |
| `class` | `string` | |

## Example

```astro
<PersonCard name="[Nama akan diperbarui]" role="Kepala Madrasah" placeholder={true} />
```

## Accessibility Notes

- Fallback avatar icon is `aria-hidden`; real photos require real `alt` text via `ImageAsset.alt`.
