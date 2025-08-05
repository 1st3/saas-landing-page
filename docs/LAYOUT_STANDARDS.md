# Layout Standards

## Page Centering

All page content should be properly centered using the following pattern:

```tsx
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  {/* Content goes here */}
</div>
```

### Centering Classes Explained

- `mx-auto`: Centers the container horizontally
- `max-w-7xl`: Sets maximum width to 80rem (1280px) to prevent content from stretching too wide
- `px-4 sm:px-6 lg:px-8`: Responsive horizontal padding
  - Mobile: 16px padding
  - Small screens (640px+): 24px padding  
  - Large screens (1024px+): 32px padding

## Section Structure

Each major section should follow this pattern:

```tsx
<section className="py-20 md:py-32">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* Section content */}
  </div>
</section>
```

## Content Width Constraints

For text content that should be narrower than the full container:

```tsx
<div className="mx-auto max-w-4xl text-center">
  {/* Centered text content */}
</div>
```

## Grid Layouts

For grid layouts within sections:

```tsx
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    {/* Grid items */}
  </div>
</div>
```

## Header Navigation

The header should use the same centering pattern:

```tsx
<header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      {/* Navigation content */}
    </div>
  </div>
</header>
```

## Best Practices

1. **Always use the centering pattern** for main content containers
2. **Maintain consistent spacing** with the responsive padding system
3. **Use max-width constraints** for text content to improve readability
4. **Keep sections organized** with proper vertical spacing (`py-20 md:py-32`)
5. **Ensure responsive design** by testing on different screen sizes

## File Structure

- Main page layout: `app/page.tsx`
- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Layout standards: `docs/LAYOUT_STANDARDS.md`

## Future Updates

When adding new sections or pages, follow these standards to maintain consistency across the site. Update this documentation if new patterns are established. 