# ErrorState

`src/components/ui/ErrorState.astro`

## Purpose

Generic error display with an optional retry action. This site is fully static with no client-side data fetching yet, so "retry" here means reloading the current page — a genuinely functional action with zero custom JavaScript. Once real dynamic fetching exists, pass a specific `retryHref` (or extend with a client island) rather than relying on the page-reload default.

## Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `icon` | `string` | `triangle-alert` | Icon registry key. |
| `title` | `string` | — | Required. |
| `description` | `string` | — | |
| `retryLabel` | `string` | — | Retry button only renders when this is set. |
| `retryHref` | `string` | current page path | |
| `id` | `string` | — | |
| `class` | `string` | — | |

## Example

```astro
<ErrorState
  title="Gagal memuat data"
  description="Terjadi kesalahan. Silakan coba lagi."
  retryLabel="Muat Ulang"
/>
```

## Accessibility Notes

- Retry renders as a real `Button` (`href`-based `<a>`), fully keyboard operable, not a JS-only click handler.
