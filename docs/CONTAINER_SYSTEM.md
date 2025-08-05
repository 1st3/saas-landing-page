# Container System Documentation

## Overview

This document outlines the container system used in the StreamLine landing page to ensure consistent centering and responsive behavior across all sections.

## Container Configuration

### Tailwind Config
The container is configured in `tailwind.config.ts` with the following settings:

```typescript
container: {
  center: true,
  padding: {
    DEFAULT: '1rem',
    sm: '2rem',
    lg: '4rem',
    xl: '5rem',
    '2xl': '6rem',
  },
  screens: {
    '2xl': '1400px',
  },
}
```

### Container Component
A reusable `Container` component is available at `components/ui/container.tsx`:

```typescript
import { Container } from "@/components/ui/container"

// Usage
<Container>
  <div>Your content here</div>
</Container>

// With custom className
<Container className="py-8">
  <div>Content with custom padding</div>
</Container>
```

## Usage Guidelines

### 1. Always Use the Container Component
Instead of using raw `container` classes, use the `Container` component for consistent behavior:

```tsx
// ✅ Correct
<section className="py-20">
  <Container>
    <div>Content</div>
  </Container>
</section>

// ❌ Avoid
<section className="py-20">
  <div className="container mx-auto px-4">
    <div>Content</div>
  </div>
</section>
```

### 2. Responsive Design
The container automatically handles responsive padding:
- Mobile: `px-4` (1rem)
- Small screens: `px-6` (1.5rem)
- Large screens: `px-8` (2rem)

### 3. Content Width Control
For content that needs specific max-widths, use additional classes:

```tsx
<Container>
  <div className="mx-auto max-w-4xl text-center">
    {/* Centered content with max-width */}
  </div>
</Container>
```

### 4. Section Structure
Follow this pattern for all sections:

```tsx
<section className="py-20 bg-gray-50">
  <Container>
    {/* Section header */}
    <div className="mx-auto max-w-2xl text-center mb-16">
      <h2>Section Title</h2>
      <p>Section description</p>
    </div>
    
    {/* Section content */}
    <div className="grid gap-8 md:grid-cols-3">
      {/* Content items */}
    </div>
  </Container>
</section>
```

## Benefits

1. **Consistent Centering**: All content is properly centered across different screen sizes
2. **Responsive Padding**: Automatic padding adjustments for different breakpoints
3. **Maintainable**: Single source of truth for container behavior
4. **Flexible**: Easy to extend with custom classes when needed

## Next.js 15+ Considerations

In Next.js 15+, this approach provides:
- Better performance with optimized container handling
- Consistent behavior across different rendering modes
- Easy integration with App Router patterns
- Type-safe component usage with TypeScript

## Future Updates

When updating the container system:
1. Update the Tailwind config if global changes are needed
2. Modify the Container component for new features
3. Update this documentation
4. Test across different screen sizes and devices 