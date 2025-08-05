# Willis Brown Website Standards & Development Guide

## Overview

This document outlines the standards, practices, and guidelines for maintaining and developing the Willis Brown website. Future AI agents and developers should follow these standards to ensure consistency and professional quality.

## Company Information

- **Company Name**: Willis Brown, LLC
- **Legal Structure**: Delaware Corporation
- **Formation**: Founded via Stripe Atlas
- **Business Focus**: Technology investment and development company
- **Core Activity**: Building, acquiring, and scaling SaaS solutions

## Brand Guidelines

### Visual Identity

- **Primary Colors**: Slate/Gray palette (slate-800, slate-600, slate-50)
- **Logo Icon**: Building2 from Lucide React
- **Typography**: Clean, professional, modern sans-serif
- **Gradient**: `from-slate-800 to-slate-600` for primary elements

### Brand Voice & Messaging

- **Tone**: Professional, trustworthy, approachable
- **Focus**: Strategic partnership, technical excellence, growth-oriented
- **Key Messages**:
  - Delaware incorporation for credibility
  - Stripe Atlas partnership
  - Technology-first approach
  - Portfolio company synergies
  - Long-term partnership mindset

## Architecture & Technology Stack

### Core Technologies
- **Framework**: Next.js 15.2.4+ with React 19+
- **Styling**: Tailwind CSS with shadcn/ui components
- **Typography**: Geist Sans & Mono fonts
- **Icons**: Lucide React
- **Language**: TypeScript

### Component Standards

#### Page Structure
All pages should follow this structure:
1. Header with navigation
2. Hero section with badge, heading, description
3. Content sections with cards and proper spacing
4. Call-to-action section
5. Simplified footer

#### Header Navigation
- **Logo**: Building2 icon + "Willis Brown" text
- **Navigation Items**: About, Portfolio, Our Approach, Contact
- **CTA Button**: "Get in Touch" linking to contact page

#### Footer Guidelines
- **Branding**: Logo + company description
- **Link Categories**: Portfolio, Company, Partnership
- **Legal**: Privacy Policy, Terms of Service, Legal Disclosures
- **Copyright**: "© YEAR Willis Brown, LLC. Delaware Corporation. All rights reserved."

## Content Guidelines

### Page Requirements

#### Landing Page (/)
- Hero section with company positioning
- About section highlighting approach
- Portfolio/testimonials from entrepreneurs
- Partnership models instead of pricing
- Strong trust indicators (Delaware, Stripe Atlas)

#### About Page (/about)
- Company story and mission
- Corporate structure details
- Values and approach
- Delaware incorporation emphasis
- Contact CTA

#### Contact Page (/contact)
- Professional contact form
- Multiple contact methods
- Response time expectations
- Types of inquiries section
- FAQ section

#### Legal Pages
- **Privacy Policy** (/privacy): Comprehensive data protection
- **Terms of Service** (/terms): Business relationship terms
- Both must reference Delaware jurisdiction

### Content Tone

#### Professional Language
- Use business-appropriate vocabulary
- Emphasize credibility and expertise
- Include legal compliance mentions
- Highlight strategic approach

#### Trust Building Elements
- Delaware Corporation status
- Stripe Atlas partnership
- Professional development approach
- Portfolio company focus
- Regulatory compliance

## Development Standards

### File Organization
```
app/
├── page.tsx                 # Landing page
├── about/page.tsx          # Company information
├── contact/page.tsx        # Contact form and info
├── privacy/page.tsx        # Privacy policy
├── terms/page.tsx          # Terms of service
├── layout.tsx              # Root layout
└── globals.css             # Global styles
```

### Code Quality Standards

#### Component Structure
- Use TypeScript for all components
- Import icons from lucide-react
- Use shadcn/ui components consistently
- Follow Next.js 15+ patterns

#### Styling Guidelines
- Use Tailwind CSS classes
- Maintain consistent spacing (py-20 md:py-32 for sections)
- Use shadow-lg for cards
- Consistent color palette (slate variants)

#### Responsive Design
- Mobile-first approach
- Use responsive grid layouts (md:grid-cols-2, lg:grid-cols-3)
- Responsive typography (text-4xl sm:text-5xl md:text-6xl)
- Hidden/shown elements for mobile (hidden md:flex)

### Metadata Standards

#### SEO Requirements
- Professional titles mentioning "Technology Investment & Development Company"
- Comprehensive descriptions
- Proper keywords: SaaS, technology, Delaware corporation, digital innovation
- Open Graph tags for social sharing

#### Legal Metadata
- Reference Delaware incorporation
- Include Stripe Atlas mention where appropriate
- Professional contact information

## Content Creation Guidelines

### Writing Standards

#### Headlines
- Use action-oriented language
- Emphasize partnership and growth
- Include trust indicators
- Professional but approachable tone

#### Body Copy
- Clear, concise sentences
- Business-focused language
- Include specific benefits
- Emphasize expertise and experience

#### Call-to-Actions
- Professional language ("Get in Touch", "Start a Conversation")
- Clear value propositions
- Multiple engagement options
- Low-pressure approach

### Image and Media

#### Placeholder Usage
- Use existing placeholder images consistently
- Professional, business-appropriate imagery
- Consistent aspect ratios
- High-quality visuals

#### Icons
- Use Lucide React icons consistently
- Match icons to content (Building2 for company, Shield for security, etc.)
- Consistent sizing and styling
- Appropriate color matching

## Legal and Compliance

### Required Legal Pages
- Privacy Policy with GDPR considerations
- Terms of Service with Delaware jurisdiction
- Contact information for legal inquiries
- Professional disclaimer language

### Corporate Information
- Always reference Delaware incorporation
- Mention Stripe Atlas when relevant
- Include proper copyright notices
- Professional contact methods

### Investment Disclaimers
- Include appropriate risk disclaimers
- No investment advice claims
- Professional consultation recommendations
- Past performance disclaimers

## Maintenance Guidelines

### Regular Updates
- Keep copyright years current
- Update "last modified" dates on legal pages
- Review and update company information
- Maintain current contact information

### Content Reviews
- Quarterly review of all copy
- Annual legal page updates
- Regular link checking
- Contact form functionality testing

### Performance Standards
- Optimize for fast loading
- Maintain accessibility standards
- Responsive design compliance
- SEO best practices

## Future Development

### Expansion Areas
- Portfolio company showcase pages
- Case study sections
- Team/leadership pages
- Blog or news section
- Investor portal (if needed)

### Technical Improvements
- Contact form backend integration
- Analytics implementation
- Performance optimization
- Enhanced SEO features

### Content Enhancement
- More detailed service descriptions
- Portfolio company spotlights
- Success stories and case studies
- Industry expertise content

## Contact for Development

For questions about these standards or development decisions:
- **Email**: hello@willisbrown.com
- **Legal**: legal@willisbrown.com
- **Privacy**: privacy@willisbrown.com

---

*This document should be updated as the Willis Brown website evolves. Maintain these standards to ensure consistency and professionalism across all future development.*