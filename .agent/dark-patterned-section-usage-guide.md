# Dark Patterned Section - Usage Guide

## Overview
The `DarkPatternedSection` component provides a sophisticated dark background with elegant patterns for special highlight sections in college detail pages.

## ✅ When to Use

Use this component for:
- **Call-to-Action sections** ("Ready to Apply?", "Start Your Journey")
- **"Why Choose This College"** highlight blocks
- **Admission Assistance** offerings
- **Important announcements** or featured content
- **Visual breaks** between long content sections
- **Premium feature highlights**

## ❌ When NOT to Use

DO NOT use for:
- ❌ Long tables or fee structures
- ❌ Dense text content or paragraphs
- ❌ Form inputs (poor visibility)
- ❌ Image galleries
- ❌ Data-heavy sections
- ❌ Main content areas

## Usage Examples

### Example 1: Ready to Apply CTA

```javascript
import DarkPatternedSection from '../../components/DarkPatternedSection/DarkPatternedSection';

<DarkPatternedSection>
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
      Ready to Apply?
    </h2>
    <p className="text-xl text-text-light mb-8 leading-relaxed">
      Start your journey towards academic excellence. Our admission team is here to guide you.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button className="bg-brand-primary hover:bg-brand-secondary text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300">
        Apply Now
      </button>
      <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-semibold px-8 py-4 rounded-lg transition-all duration-300">
        Download Brochure
      </button>
    </div>
  </div>
</DarkPatternedSection>
```

### Example 2: Why Choose This College

```javascript
<DarkPatternedSection>
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-white text-center mb-12">
      Why Choose {college.name}?
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {highlights.map((highlight, index) => (
        <div key={index} className="text-center">
          <div className="text-5xl mb-4">{highlight.icon}</div>
          <h3 className="text-xl font-semibold text-white mb-2">
            {highlight.title}
          </h3>
          <p className="text-text-light">
            {highlight.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</DarkPatternedSection>
```

### Example 3: Admission Assistance

```javascript
<DarkPatternedSection>
  <div className="max-w-5xl mx-auto px-6">
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Need Admission Assistance?
        </h2>
        <p className="text-lg text-text-light mb-6">
          Our expert counselors are available 24/7 to help you with the admission process, 
          documentation, and any queries you may have.
        </p>
        <ul className="space-y-3 text-text-light">
          <li className="flex items-center gap-2">
            <svg className="w-5 h-5 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            Free counseling sessions
          </li>
          <li className="flex items-center gap-2">
            <svg className="w-5 h-5 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            Application support
          </li>
          <li className="flex items-center gap-2">
            <svg className="w-5 h-5 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            Scholarship guidance
          </li>
        </ul>
      </div>
      <div className="flex-shrink-0">
        <button className="bg-brand-primary hover:bg-brand-secondary text-white font-bold px-10 py-4 rounded-xl text-lg transition-all duration-300">
          Get Help Now
        </button>
      </div>
    </div>
  </div>
</DarkPatternedSection>
```

### Example 4: Simple Announcement

```javascript
<DarkPatternedSection className="py-12">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <p className="text-2xl text-white font-semibold mb-4">
      🎓 Admissions Open for 2026-27
    </p>
    <p className="text-text-light">
      Limited seats available. Apply before March 31st to avail early bird benefits.
    </p>
  </div>
</DarkPatternedSection>
```

## Styling Guidelines

### Text Colors on Dark Background
- **Main Headings**: `text-white` (pure white, #FFFFFF)
- **Supporting Text**: `text-text-light` (#E5E7EB)
- **Labels/Tags**: `text-text-light` with opacity

### Button Colors on Dark Background
- **Primary CTA**: `bg-brand-primary hover:bg-brand-secondary` (#4F46E5 → #6366F1)
- **Secondary CTA**: `bg-white/10 hover:bg-white/20 border-2 border-white/30`
- **Outline**: `border-2 border-white text-white hover:bg-white hover:text-dark-primary`

### Spacing
- **Vertical Padding**: Default is `py-16 md:py-20`, adjust with className prop if needed
- **Container**: Always use `max-w-*xl mx-auto px-6` for proper centering
- **Content Spacing**: Use `mb-4`, `mb-6`, `mb-8` for consistent vertical rhythm

## Best Practices

1. **Keep it Short**: Dark sections should be concise highlights, not long content blocks
2. **Focus**: Use 1-2 dark sections per page maximum for visual impact
3. **Contrast**: Always use white or light gray text on this background
4. **CTAs**: Indigo buttons stand out perfectly on dark background
5. **Icons**: Use light-colored icons or brand-primary for accent
6. **Spacing**: Add sufficient padding around content for breathing room

## Alternate Light Version

For light-themed highlight sections, use white cards with brand accents:

```javascript
<section className="py-16 bg-light-primary">
  <div className="max-w-4xl mx-auto px-6">
    <div className="bg-white rounded-2xl shadow-lg border border-border p-8">
      <h2 className="text-3xl font-bold text-text-primary mb-4">
        Your Heading
      </h2>
      <p className="text-text-secondary mb-6">
        Your content
      </p>
      <button className="bg-brand-primary hover:bg-brand-secondary text-white px-6 py-3 rounded-lg">
        Action
      </button>
    </div>
  </div>
</section>
```

## Color Reference

```javascript
// Dark Background
bg-dark-primary: #0E1428

// Text on Dark
text-white: #FFFFFF
text-text-light: #E5E7EB

// Buttons on Dark
bg-brand-primary: #4F46E5
bg-brand-secondary: #6366F1

// Patterns (already in component)
Pattern colors: #4F46E5, #6366F1 (brand indigo shades)
```

## Performance Note

The component uses inline SVG patterns which are lightweight and performant. The patterns are absolute positioned and won't affect layout or cause reflows.
