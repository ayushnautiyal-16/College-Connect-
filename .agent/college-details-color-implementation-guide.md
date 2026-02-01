# College Details Page - Premium Color Scheme Implementation Guide

## Overview
Update the CollegeDetails.js page to use a clean, content-focused color scheme that prioritizes readability and trust.

## Color Palette to Apply

### Background Colors
- **Page Background**: `bg-light-primary` (#F8FAFC) - Light and comfortable for reading
- **College Header Section**: `bg-dark-primary` (#0E1428) or `bg-dark-secondary` (#19203B) - Strong first impression
- **Content Cards**: `bg-light-secondary` (#FFFFFF) - Clean white cards
- **Table Alternating Rows**: `bg-white` and `bg-slate-50` 

### Text Colors
- **Header Headings (on dark)**: `text-white` (#FFFFFF)
- **Header Supporting Text (on dark)**: `text-text-light` (#E5E7EB)
- **Card Headings (on white)**: `text-text-primary` (#1E293B)
- **Card Descriptive Text**: `text-text-secondary` (#475569)

### Interactive Elements
- **Primary Actions** (Apply Now, Download Brochure, Compare): `bg-brand-primary` with `hover:bg-brand-secondary`
- **Active Tabs**: `bg-brand-primary` or `border-brand-primary`
- **Input Focus**: `focus:border-brand-primary` and `focus:ring-brand-primary`

### Borders & Dividers
- **All Borders**: `border-border` (#CBD5E1)
- **Table Borders**: `border-border` (#CBD5E1)
- **Dividers**: `border-border` (#CBD5E1)

### Icons & Badges
- **Approved/Ranked Badges**: `bg-brand-primary/10` with `text-brand-primary`
- **Private/Government Tags**: `bg-brand-primary/10` with `text-brand-primary`
- **Icons**: Use `text-brand-primary` sparingly

## Key Sections to Update

1. **College Header Section**
   - Background: `bg-dark-primary`
   - College Name: `text-white text-4xl font-bold`
   - Location/Rating: `text-text-light`
   - Badges: `bg-brand-primary/20 text-text-light border-text-light/30`

2. **Navigation Tabs**
   - Container: `bg-light-secondary border-b border-border`
   - Active Tab: `text-brand-primary border-b-2 border-brand-primary`
   - Inactive Tab: `text-text-secondary hover:text-brand-primary`

3. **Content Cards** (Courses, Fees, Eligibility, etc.)
   - Container: `bg-light-secondary shadow-sm border border-border rounded-lg`
   - Card Heading: `text-text-primary text-2xl font-bold`
   - Card Description: `text-text-secondary`

4. **Tables** (Fees, Cutoff, Placement Stats)
   - Table Container: `bg-light-secondary border border-border rounded-lg`
   - Header Row: `bg-slate-50 border-b border-border`
   - Header Text: `text-text-primary font-semibold`
   - Even Rows: `bg-white`
   - Odd Rows: `bg-slate-50`
   - Cell Borders: `border-border`

5. **Image Gallery**
   - Background: `bg-light-secondary` or `bg-white`
   - Image Cards: `bg-white shadow-sm border border-border`

6. **Form Elements**
   - Input Background: `bg-white`
   - Input Border: `border-border`
   - Focus State: `focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20`
   - Labels: `text-text-primary font-medium`

7. **Action Buttons**
   - Primary: `bg-brand-primary hover:bg-brand-secondary text-white`
   - Secondary: `bg-white border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white`
   - Download/Compare: `bg-brand-primary/10 hover:bg-brand-primary/20 text-brand-primary`

## Implementation Strategy

### Step 1: Update Main Layout
```javascript
// Page wrapper
<div className="min-h-screen bg-light-primary">
```

### Step 2: Update College Header
```javascript
// Header section with dark background
<section className="bg-dark-primary py-8">
  <h1 className="text-white text-4xl md:text-5xl font-bold">
  <p className="text-text-light text-lg">
  <div className="flex gap-2">
    <span className="bg-brand-primary/20 text-text-light border border-text-light/30 px-3 py-1 rounded-full text-sm">
```

### Step 3: Update Navigation Tabs
```javascript
<div className="bg-light-secondary border-b border-border sticky top-16">
  <button className={activeSection === 'overview' ? 
    'text-brand-primary border-b-2 border-brand-primary' : 
    'text-text-secondary hover:text-brand-primary'}>
```

### Step 4: Update Content Cards
```javascript
<div className="bg-light-secondary shadow-sm border border-border rounded-lg p-6">
  <h2 className="text-text-primary text-2xl font-bold mb-4">
  <p className="text-text-secondary leading-relaxed">
```

### Step 5: Update Tables
```javascript
<div className="bg-light-secondary border border-border rounded-lg overflow-hidden">
  <table className="w-full">
    <thead className="bg-slate-50 border-b border-border">
      <th className="text-text-primary font-semibold">
    </thead>
    <tbody>
      <tr className="even:bg-slate-50 odd:bg-white border-b border-border">
        <td className="text-text-secondary">
```

### Step 6: Update Buttons
```javascript
// Primary action
<button className="bg-brand-primary hover:bg-brand-secondary text-white font-semibold px-6 py-3 rounded-lg">

// Secondary action
<button className="bg-white border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white">

// Icon button
<button className="bg-brand-primary/10 hover:bg-brand-primary/20 text-brand-primary">
```

## Notes
- Avoid using too many dark sections inside the page
- Maintain consistent spacing and padding
- Ensure all text has sufficient contrast
- Use the brand indigo color sparingly for maximum impact
- Keep card shadows subtle (shadow-sm or shadow-md)
- Ensure responsive design works on all devices
