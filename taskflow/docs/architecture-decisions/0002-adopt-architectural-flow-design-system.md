# 2. Adopt "Architectural Flow" Design System

Date: 2026-03-31

## Status

Accepted

## Context

The TaskFlow application was initially built using standard Tailwind CSS utility classes and default Next.js templates. To elevate the user experience, we decided to adopt a premium, custom design system ("The Architectural Flow") specified in `DESIGN.md`. This system introduces specific rules: "No-Line" visual boundaries (using tone shifts instead of borders), profound but understated "glass & gradient" layered depth, bespoke custom colors mapping standard design tokens (`primary`, `surface-container-lowest`), and specific Google Fonts (Inter and Manrope) alongside Google Material Symbols Outlined icons.

## Decision

We will replace default `.geist` Next.js configurations and vanilla Tailwind usage with:
1. **Extended Tailwind Config:** We map the exact design tokens from the spec into `tailwind.config.ts`.
2. **Next Font Integration:** We swap the local geist fonts for `next/font/google` loaders configured for `Inter` and `Manrope`.
3. **Material Symbols Outlined:** We include the global font link for `Material Symbols Outlined` icons to handle iconography consistently.

## Consequences

- Improved UI/UX moving from generic prototyping to a premium application feel.
- Global class adjustments across `page.tsx` and `TaskForm.tsx` to utilize new `surface-*` and custom spacing utilities.
- Introduction of specific typography classes (`font-headline`, `font-body`, `font-label`).
