---
name: Cyber-Precision Studio
colors:
  surface: '#0f131d'
  surface-dim: '#0f131d'
  surface-bright: '#353944'
  surface-container-lowest: '#0a0e18'
  surface-container-low: '#171b26'
  surface-container: '#1c1f2a'
  surface-container-high: '#262a35'
  surface-container-highest: '#313540'
  on-surface: '#dfe2f1'
  on-surface-variant: '#bcc9cd'
  inverse-surface: '#dfe2f1'
  inverse-on-surface: '#2c303b'
  outline: '#869397'
  outline-variant: '#3d494c'
  surface-tint: '#4cd7f6'
  primary: '#4cd7f6'
  on-primary: '#003640'
  primary-container: '#06b6d4'
  on-primary-container: '#00424f'
  inverse-primary: '#00687a'
  secondary: '#4edea3'
  on-secondary: '#003824'
  secondary-container: '#00a572'
  on-secondary-container: '#00311f'
  tertiary: '#d0bcff'
  on-tertiary: '#3c0091'
  tertiary-container: '#b395ff'
  on-tertiary-container: '#4900ae'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#acedff'
  primary-fixed-dim: '#4cd7f6'
  on-primary-fixed: '#001f26'
  on-primary-fixed-variant: '#004e5c'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#e9ddff'
  tertiary-fixed-dim: '#d0bcff'
  on-tertiary-fixed: '#23005c'
  on-tertiary-fixed-variant: '#5516be'
  background: '#0f131d'
  on-background: '#dfe2f1'
  surface-variant: '#313540'
  surface-deep: '#0B0F19'
  surface-slate: '#0F172A'
  text-muted: '#94A3B8'
  border-glass: rgba(255, 255, 255, 0.1)
  glow-cyan: rgba(6, 182, 212, 0.4)
typography:
  headline-xl:
    fontFamily: Geist
    fontSize: 60px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 30px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 2rem
  margin-page: 5vw
  section-gap: 8rem
  stack-sm: 0.5rem
  stack-md: 1.5rem
---

## Brand & Style

This design system embodies the identity of a premium digital product studio. It is built on the pillars of technical superiority, minimalist elegance, and "engineered" precision. The visual narrative leans heavily into a sophisticated dark mode that prioritizes focus and high-end aesthetics.

The style is a blend of **Modern Corporate** and **Glassmorphism**, utilizing deep atmospheric layers, frosted translucent surfaces, and electric accents to simulate a high-tech console or a premium developer environment. Every element is designed to feel bespoke and intentional, evoking a sense of reliability and cutting-edge performance for high-ticket clients.

## Colors

The palette is anchored by a sophisticated deep-sea dark mode. 
- **Primary Action:** Electric Cyan (#06B6D4) is used for high-priority calls to action, active states, and focus indicators. 
- **Secondary Highlight:** Emerald (#10B981) serves as a success indicator and secondary accent for data visualization or specific feature highlights.
- **Base Surfaces:** The background uses a "Deep Zinc" (#0B0F19) for the lowest layer, with "Slate" (#0F172A) utilized for cards and elevated containers to create depth.
- **Typography:** Headlines remain pure white for maximum impact, while body copy uses Muted Slate (#94A3B8) to reduce eye strain and maintain a premium, subdued feel.

## Typography

The typography system is engineered for clarity and authority. 
- **Headlines:** Uses **Geist** with tight letter-spacing and heavy weights to create a "technical-sharp" look. These should be high-contrast (White against Dark backgrounds).
- **Body Text:** Uses **Inter** for its neutral, highly legible characteristics. Body text should always be set in Muted Slate (#94A3B8) to create a clear visual hierarchy between titles and content.
- **Labels:** Small caps or tracked-out labels in Geist are used for metadata, category tags, and overlines to reinforce the "engineered" aesthetic.

## Layout & Spacing

This design system utilizes a **Fixed Grid** approach for desktop to maintain control over line lengths and "bespoke" compositions, transitioning to a fluid model for mobile.

- **Desktop:** 12-column grid with a 1280px max-width. Gutters are generous (32px) to allow the glassmorphic borders room to "breathe."
- **Rhythm:** A vertical rhythm based on 8px increments. Section spacing is aggressive (128px+) to emphasize exclusivity and focus.
- **Mobile:** Margins shrink to 20px, and section gaps reduce to 64px. Complex grid layouts reflow into a single column stack.

## Elevation & Depth

Depth is achieved through **Glassmorphism** and tonal layering rather than traditional heavy shadows.

- **Tiers:** The background is #0B0F19. Floating elements like cards use #0F172A with a 1px "Glass" border (White at 10% opacity).
- **Glows:** Instead of black shadows, use subtle, colored ambient glows. For primary cards, a soft Cyan outer glow (blur: 20px, opacity: 15%) is applied on hover.
- **Backdrop Blur:** Modal overlays and navigation bars must use `backdrop-filter: blur(12px)` with a semi-transparent dark fill to maintain context of the background gradients.

## Shapes

The shape language is "Soft-Tech." While the brand is sharp and professional, completely square corners feel too aggressive. 

- **Standard Radius:** 8px (0.5rem) for cards and buttons.
- **Large Radius:** 16px (1rem) for major section containers or "hero" image wrappers.
- **Interactive Elements:** Buttons should maintain consistent 8px rounding to match the "engineered" precision of the grid.

## Components

- **Buttons:** 
  - *Primary:* Solid Electric Cyan with black text. No shadow, but a 4px Cyan outer glow on hover.
  - *Secondary:* Transparent with a 1px Cyan border. On hover, fills with a 10% Cyan tint.
- **Cards:** 
  - Use the Slate background (#0F172A). 
  - Apply a 1px top-and-left light border to simulate a light source.
  - Hover state: The 1px border transitions to pure Cyan and the element lifts slightly (4px).
- **Inputs:** 
  - Deep Zinc background, 1px border in #334155. 
  - Focus state: Border changes to Cyan with a subtle Cyan inner glow.
- **Chips/Badges:** 
  - Small, high-contrast labels. Use secondary Emerald for "Live" or "Success" status and Primary Cyan for "Feature" tags.
- **Lists:** 
  - Clean, bordered separators (1px, 5% White). Use custom Cyan chevron icons instead of default bullets.