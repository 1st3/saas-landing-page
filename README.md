# StreamLine: SaaS landing page

A clean, responsive landing page for a made-up SaaS product called StreamLine. Use it as a starting point for your own product page, or just to see how the pieces fit together.

**Live demo: https://landing-page-template.w-b.dev**

## What's on the page

- A hero with a headline and calls to action
- A features grid
- Customer testimonials
- Pricing tiers
- A closing call to action and a footer with link columns

All the copy and images are placeholders. Swap in your own.

## Built with

- [Next.js](https://nextjs.org) 15 (App Router) and React 19
- [Tailwind CSS](https://tailwindcss.com) for styling
- [shadcn/ui](https://ui.shadcn.com) components on top of Radix UI
- TypeScript

It started life in [v0](https://v0.dev) and has been tidied by hand since.

## Run it locally

```bash
pnpm install
pnpm dev
```

Then open http://localhost:3000.

To build the production site:

```bash
pnpm build
pnpm start
```

## Project layout

| Path | What lives there |
|---|---|
| `app/page.tsx` | The whole landing page, section by section |
| `app/layout.tsx` | Page shell, fonts and metadata |
| `components/ui/` | shadcn/ui building blocks, plus our `Container` |
| `docs/CONTAINER_SYSTEM.md` | How the `Container` keeps every section centred and aligned |

## Making it yours

1. Edit the text and sections in `app/page.tsx`.
2. Replace the files in `public/` with your own logo and images.
3. Adjust colours and spacing in `tailwind.config.ts` and `app/globals.css`.

## Notes

- There are no secrets or environment variables to set up. It's a static page.
- Type errors and lint warnings don't fail the build (see `next.config.mjs`). Tighten that if you build on top of this.
