---
trigger: always_on
---

# Antigravity UI Rules & Design Constitution

## Purpose
This document defines strict UI/UX and frontend development rules.
Whenever a task is given, the AI must generate output that looks and feels
like a premium, production-grade website.

This file is the single source of truth for frontend creation.

---

## Tech Stack (Strict)
- React (Functional Components only)
- Tailwind CSS
- Modern ES6+ JavaScript
- No unnecessary third-party UI libraries

---

## Design Philosophy
- Premium, clean, and professional UI
- Inspired by modern SaaS websites
- Minimal but visually rich
- Focus on clarity, spacing, and hierarchy

Avoid:
- Overcrowded layouts
- Loud colors
- Amateur-looking UI patterns

---

## Layout Rules
- Use container-based layouts
- Maximum content width with centered alignment
- Generous padding and margins
- Clear section separation

Structure:
- Header
- Hero section
- Content sections
- CTA
- Footer

---

## Color System
- Base background: light or soft neutral
- Accent color: single primary (blue, purple, or gradient-based)
- Text colors:
  - Primary: dark neutral
  - Secondary: muted gray
- Use gradients only for hero sections or highlights

Never:
- Use more than 2 accent colors
- Use pure red/green for main UI

---

## Typography Rules
- Clear font hierarchy
- Headings: bold, confident
- Body text: readable, calm
- Line height must feel breathable

Use:
- Consistent spacing between text blocks
- Proper heading levels (h1 → h4)

---

## Component Design Rules
### Buttons
- Rounded corners
- Subtle hover transitions
- Clear primary vs secondary actions

### Cards
- Soft shadows
- Hover elevation effect
- Rounded edges
- Clean internal spacing

### Navbar
- Sticky or fixed
- Minimal links
- Clear brand presence

### Sections
- Each section must have:
  - Title
  - Short description
  - Clear purpose

---

## Tailwind Usage Rules
- Use utility classes cleanly
- Avoid class overloading
- Prefer readability over micro-optimizations
- Extract reusable components instead of repeating classes

---

## Animation & Interaction
- Use subtle animations only
- Hover effects must be smooth
- Avoid flashy or distracting animations
- Prefer transition-based effects

Examples:
- Button hover
- Card hover lift
- Section fade-in

---

## Responsiveness (Mandatory)
- Mobile-first approach
- All layouts must adapt to:
  - Mobile
  - Tablet
  - Desktop

Rules:
- Use responsive Tailwind utilities
- No horizontal scrolling
- Touch-friendly spacing

---

## Accessibility Basics
- Proper contrast ratios
- Readable font sizes
- Clear clickable elements
- Semantic HTML structure

---

## React Development Rules
- Functional components only
- Clean folder structure
- Reusable components
- Props-driven UI
- Minimal state unless required

Avoid:
- Overuse of global state
- Deeply nested components
- Hardcoded values

---

## Code Quality Standards
- Clean and readable JSX
- Meaningful component names
- Logical file separation
- Comments only where necessary

---

## AI Output Rules (Critical)
Whenever a task is given, the AI must:
- Think like a senior frontend engineer
- Deliver production-quality UI
- Follow all rules in this document
- Output structured, clean React + Tailwind code
- Never produce beginner-level UI

The final result must look:
- Professional
- Premium
- Modern
- Ready for real-world deployment

---

## Final Instruction
If any decision is unclear, always choose:
- Simplicity over complexity
- Quality over quantity
- Professional polish over experimentation
