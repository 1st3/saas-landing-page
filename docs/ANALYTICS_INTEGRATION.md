# Analytics Integration Standards

## Google Analytics Setup

This project uses Google Analytics 4 (GA4) integrated through Next.js 15+ `@next/third-parties` package for optimal performance and privacy compliance.

### Current Implementation

**Analytics ID**: `G-YMHM7SWWR2`

**Package**: `@next/third-parties` (installed)

**Location**: Root layout (`app/layout.tsx`)

### Implementation Pattern

```tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <GoogleAnalytics gaId="G-YMHM7SWWR2" />
      </body>
    </html>
  )
}
```

### Why @next/third-parties?

1. **Performance Optimized**: Automatically loads scripts with optimal timing
2. **Privacy Compliant**: Built-in consent management compatibility
3. **Next.js Integration**: Designed specifically for Next.js 13+ App Router
4. **Type Safety**: Full TypeScript support
5. **Cloudflare Compatible**: Works seamlessly with Cloudflare Pages

### Key Benefits

- **Script Loading Optimization**: Uses `next/script` with optimal loading strategies
- **Bundle Size**: Doesn't increase client bundle size
- **Hydration**: Prevents hydration mismatches
- **CSP Compatible**: Works with Content Security Policy
- **Performance Monitoring**: Built-in Core Web Vitals tracking

### Custom Event Tracking

For custom event tracking, use the `gtag` function:

```tsx
// In a client component
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

// Track custom events
const trackEvent = (eventName: string, parameters?: object) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters)
  }
}

// Example usage
const handleButtonClick = () => {
  trackEvent('button_click', {
    button_name: 'cta_signup',
    page_location: window.location.pathname
  })
}
```

### Privacy and Compliance

1. **EU GDPR Compliance**: Consider implementing consent banners
2. **CCPA Compliance**: Analytics respects user privacy preferences
3. **Data Retention**: Configure in Google Analytics dashboard
4. **IP Anonymization**: Enabled by default in GA4

### Environment Configuration

For different environments, use environment variables:

```typescript
// In production, development, etc.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-YMHM7SWWR2'

<GoogleAnalytics gaId={GA_ID} />
```

### Testing Analytics

1. **Development**: Use Google Analytics Debugger extension
2. **Real-time**: Check Google Analytics Real-time reports
3. **GTM Preview**: If using Google Tag Manager

### Deployment Considerations

#### Cloudflare Pages
- Analytics scripts load correctly with Cloudflare's edge optimization
- No additional configuration needed
- Works with Cloudflare Web Analytics alongside GA4

#### Performance
- Scripts are loaded asynchronously
- No impact on initial page load performance
- Utilizes Cloudflare's CDN for optimal delivery

### Maintenance

1. **Regular Audits**: Review analytics data monthly
2. **Property Updates**: Keep GA4 property settings current
3. **Goal Tracking**: Set up conversion goals in GA dashboard
4. **Data Studio**: Connect to Google Data Studio for advanced reporting

### Migration Notes

If migrating from Universal Analytics (GA3):
1. Keep both tags during transition period
2. Update conversion tracking code
3. Verify data consistency
4. Remove GA3 after transition complete

### Best Practices

1. **Single Source**: Only include GoogleAnalytics component once (in root layout)
2. **Environment Separation**: Use different GA properties for dev/staging/prod
3. **Event Naming**: Use consistent naming conventions for custom events
4. **Performance**: Monitor Core Web Vitals in GA4
5. **Privacy**: Implement consent management for EU users

### Future Enhancements

Consider implementing:
- Enhanced e-commerce tracking
- Custom dimensions and metrics
- Cross-domain tracking (if needed)
- Server-side tracking for API events
- Google Tag Manager integration

### Dependencies

```json
{
  "@next/third-parties": "^15.x.x"
}
```

### Related Documentation

- [Layout Standards](./LAYOUT_STANDARDS.md)
- [Willis Brown Standards](./WILLIS_BROWN_STANDARDS.md)
- [Build Optimizations](./BUILD_OPTIMIZATIONS.md)

---

**Last Updated**: December 2024  
**Next Review**: March 2025