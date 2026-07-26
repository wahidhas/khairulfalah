# FAQItem

`src/components/ui/FAQItem.astro`

## Purpose

Single accordion entry. Uses native `<details>`/`<summary>` — expand/collapse needs zero JavaScript and is fully keyboard/screen-reader supported by the browser natively.

## Props

| Prop | Type | Notes |
|---|---|---|
| `question` | `string` | Required. |
| `answer` | `string` | Required. |
| `id` | `string` | |
| `class` | `string` | |

## Example

```astro
<FAQItem question="Bagaimana cara mendaftar?" answer="Lihat halaman PPDB." />
```

## Accessibility Notes

- Native `<details>` gives free keyboard support (Enter/Space on the `<summary>` toggles it) and correct ARIA semantics — don't replace with a `<div>` + JS click handler.
- Chevron icon is `aria-hidden`; the open/closed state is conveyed by the native `<details open>` attribute, which assistive tech already understands.
