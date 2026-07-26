# Section

`src/components/layout/Section.astro`

## Purpose

Vertical rhythm wrapper — every homepage/About section is a `Section` containing a `Container`. Provides the section-level padding tokens (`section-sm`/`section-md`/`section-lg` from the brief) via the `spacing` prop.

## Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `spacing` | `sm \| md \| lg` | `md` | `sm`=32/48/64px, `md`=64/80/96px (unchanged default), `lg`=80/96/128px across mobile/tablet/desktop. All values from DESIGN_SYSTEM.md's 4px spacing scale. |
| `as` | `string` | `section` | |
| `id` | `string` | — | Useful for in-page anchor links. |
| `class` | `string` | — | Don't pass another `py-*` class — same specificity-collision risk as `Container`'s `max-w-*`. Use `spacing` instead. |

## Example

```astro
<Section spacing="sm" class="bg-gray-50">
  <Container>...</Container>
</Section>
```

## Accessibility Notes

- Renders `<section>` by default (a landmark) — if the section has a heading, that's sufficient for it to be an accessible landmark; otherwise consider `as="div"`.
