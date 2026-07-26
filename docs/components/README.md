# Component Library Reference

Brief docs for every reusable component in `src/components/ui/` and the reusable parts of `src/components/layout/`. Not covered: `Navbar`, `Footer`, `MobileMenu` (page chrome, not reusable across contexts) or `src/components/sections/*` (page-specific, composed from the components below).

## UI (`src/components/ui/`)

- [Button](Button.md) · [Badge](Badge.md) · [Card](Card.md) · [SectionHeader](SectionHeader.md) · [IconBox](IconBox.md)
- [Breadcrumb](Breadcrumb.md) · [PersonCard](PersonCard.md) · [TestimonialCard](TestimonialCard.md) · [StatisticCard](StatisticCard.md) · [FAQItem](FAQItem.md)
- [EmptyState](EmptyState.md) · [ErrorState](ErrorState.md) · [Skeleton](Skeleton.md)

## Layout (`src/components/layout/`)

- [Container](Container.md) · [Section](Section.md) · [Grid](Grid.md) · [Stack](Stack.md) · [PageHeader](PageHeader.md)

## Tokens

- [Typography](Typography.md) — `text-display`/`text-h1`–`h5`/`text-lead` (custom) + `text-base`/`text-sm`/`text-xs` (Tailwind default, already matches Body/Small/Caption).
- Spacing — `Section`'s `spacing` prop (`sm`/`md`/`lg`), all values from DESIGN_SYSTEM.md's 4px scale.
- Color — every component uses Tailwind's `emerald`/`amber`/`gray`/`white` palette only. No raw hex/rgb anywhere in `src/components/`.
- Icons — `src/lib/icons.ts`'s `iconRegistry` is the **only** place that imports from `@lucide/astro`. Every other component receives an icon *name* (string) and looks it up.

## Cross-component conventions

Every component that renders a single root element supports `id` and `class`. Variant-style props (`variant`, `size`, `color`, `align`, `spacing`) always use a `Record<Variant, string>` lookup internally — never string concatenation, so Tailwind's JIT scanner can always see the full class list.

## Import path

All of the above are re-exported from `src/components/ui/index.ts` and `src/components/layout/index.ts` — prefer `import { Button, Card } from '../ui'` over deep imports.
