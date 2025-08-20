# Rum River Wedding Barn Design System

## Overview
This comprehensive design system ensures visual cohesion across all sections of the Rum River Wedding Barn website while maintaining the existing rustic elegance aesthetic. Every element follows consistent patterns for typography, spacing, colors, and components.

## 🎨 Color Palette

### Primary Colors
```css
--primary-brown: #8B6337    /* Main brand color, headings */
--accent-gold: #D4A574      /* Accent elements, highlights */
--warm-cream: #FAF6F2       /* Light text, backgrounds */
--deep-brown: #4A3426       /* Dark text, overlays */
```

### Supporting Colors
```css
--sage-green: #7A8B7F       /* Nature accents */
--text-dark: #2C2416        /* Primary dark text */
--text-light: #6B5D54       /* Secondary text */
--blush: #E8D5D0           /* Soft accents */
--wine: #722F37            /* Rich accents */
--soft-white: #FEFDFB      /* Pure whites */
--dark-bg: #2C2416         /* Dark backgrounds */
--medium-bg: #3D3328       /* Medium backgrounds */
```

### Color Usage Guidelines
- **Headlines (H1-H3)**: `--text-dark` or `--deep-brown`
- **Body Text**: `--text-dark` (default) or `--text-light` (secondary)
- **Interactive Elements**: `--accent-gold` for hover states
- **Backgrounds**: `--warm-cream` (light), `--dark-bg` (dark sections)
- **Dividers/Borders**: `--primary-brown` or `--accent-gold`

## 📝 Typography System

### Font Stack
```css
/* Primary Serif (Headers) */
font-family: var(--font-playfair), 'Georgia', serif;

/* Body Text */
font-family: 'Georgia', serif;

/* Script/Decorative */
font-family: 'Brush Script MT', cursive;
```

### Typography Scale
```css
/* Display Headings */
h1 { font-size: 3.5rem; line-height: 1.1; font-weight: 300; }    /* 56px */
h2 { font-size: 2.5rem; line-height: 1.2; font-weight: 400; }    /* 40px */
h3 { font-size: 1.75rem; line-height: 1.3; font-weight: 400; }   /* 28px */
h4 { font-size: 1.25rem; line-height: 1.4; font-weight: 500; }   /* 20px */

/* Body Text */
body { font-size: 1rem; line-height: 1.6; font-weight: 400; }    /* 16px */
.lead-text { font-size: 1.25rem; line-height: 1.5; }             /* 20px */
.small-text { font-size: 0.875rem; line-height: 1.5; }           /* 14px */

/* Special Text */
.script-font { font-size: 1.5rem; font-weight: 300; }            /* 24px */
.uppercase { text-transform: uppercase; letter-spacing: 0.15em; }
```

### Mobile Typography
```css
@media (max-width: 768px) {
  h1 { font-size: 2.5rem; }     /* 40px */
  h2 { font-size: 2rem; }       /* 32px */
  h3 { font-size: 1.5rem; }     /* 24px */
  h4 { font-size: 1.125rem; }   /* 18px */
}
```

## 📏 Spacing System

### Base Spacing Units
```css
--space-xs: 0.25rem;    /* 4px */
--space-sm: 0.5rem;     /* 8px */
--space-md: 1rem;       /* 16px */
--space-lg: 1.5rem;     /* 24px */
--space-xl: 2rem;       /* 32px */
--space-2xl: 3rem;      /* 48px */
--space-3xl: 4rem;      /* 64px */
--space-4xl: 6rem;      /* 96px */
--space-5xl: 8rem;      /* 128px */
```

### Section Spacing
- **Section Padding**: 5rem 0 (80px top/bottom)
- **Between Sections**: 0 (handled by dividers)
- **Container Max Width**: 1400px
- **Container Side Padding**: 40px desktop, 20px mobile

### Component Spacing
- **Card Padding**: 2.5rem (40px)
- **Button Padding**: 1.125rem 3rem (18px 48px)
- **Input Padding**: 1rem 1.5rem (16px 24px)
- **Grid Gaps**: 2rem (32px) desktop, 1.5rem (24px) mobile

## 🔘 Button System

### Primary Button (Light)
```css
.btn-light {
  background: rgba(255, 255, 255, 0.95);
  color: var(--deep-brown);
  backdrop-filter: blur(10px);
  padding: 1.125rem 3rem;
  font-family: 'Georgia', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  border: none;
  transition: all 0.3s ease;
}

.btn-light:hover {
  background: var(--soft-white);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(255, 255, 255, 0.3);
}
```

### Secondary Button (Outline)
```css
.btn-outline {
  background: transparent;
  color: var(--warm-cream);
  border: 2px solid var(--warm-cream);
  padding: 1rem 2.75rem;
  font-family: 'Georgia', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  transition: all 0.3s ease;
}

.btn-outline:hover {
  background: var(--warm-cream);
  color: var(--deep-brown);
  border-color: var(--warm-cream);
}
```

### Special Buttons
```css
/* Package Buttons */
.package-btn {
  background: var(--accent-gold);
  color: var(--deep-brown);
  padding: 0.75rem 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border: none;
  transition: all 0.3s ease;
}

/* Filter Buttons */
.filter-btn {
  background: transparent;
  color: var(--text-light);
  border: 1px solid var(--text-light);
  padding: 0.5rem 1.5rem;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: all 0.3s ease;
}

.filter-btn.active,
.filter-btn:hover {
  background: var(--accent-gold);
  color: var(--deep-brown);
  border-color: var(--accent-gold);
}
```

## 🏗️ Layout Components

### Container System
```css
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

@media (max-width: 768px) {
  .container {
    padding: 0 20px;
  }
}
```

### Grid System
```css
.grid-2 { 
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  gap: 2rem; 
}

.grid-3 { 
  display: grid; 
  grid-template-columns: repeat(3, 1fr); 
  gap: 2rem; 
}

.grid-4 { 
  display: grid; 
  grid-template-columns: repeat(4, 1fr); 
  gap: 2rem; 
}

@media (max-width: 768px) {
  .grid-2, .grid-3, .grid-4 {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
```

### Card Components
```css
.card {
  background: var(--soft-white);
  padding: 2.5rem;
  border-radius: 0;
  box-shadow: 0 4px 20px rgba(44, 36, 22, 0.08);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(44, 36, 22, 0.15);
}
```

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
@media (min-width: 480px) { /* Small Mobile */ }
@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1400px) { /* Large Desktop */ }
```

## 🎭 Section Templates

### Standard Section Header
```html
<div class="section-header">
  <p class="script-font">Descriptive</p>
  <h2>Main Section Title</h2>
  <p class="section-description">Optional description text that provides context.</p>
</div>
```

### Section CSS Template
```css
.section {
  padding: 5rem 0;
  position: relative;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header .script-font {
  color: var(--accent-gold);
  margin-bottom: 1rem;
}

.section-header h2 {
  color: var(--text-dark);
  margin-bottom: 1.5rem;
}

.section-description {
  color: var(--text-light);
  max-width: 600px;
  margin: 0 auto;
}
```

## 🌊 Shape Dividers

### Implementation
```css
.divider-wave-down {
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - var(--divider-size)),
    75% 100%,
    50% calc(100% - var(--divider-size)),
    25% 100%,
    0 calc(100% - var(--divider-size))
  );
}

.divider-wave-up {
  clip-path: polygon(
    0 0,
    25% var(--divider-size),
    50% 0,
    75% var(--divider-size),
    100% 0,
    100% 100%,
    0 100%
  );
  margin-top: calc(var(--divider-gap) - var(--divider-size));
  z-index: 2;
}
```

## ⚡ Animations

### Standard Transitions
```css
--transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
```

### Hover Effects
```css
/* Subtle Lift */
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.hover-lift:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.15);
}

/* Fade In Up */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## 🎯 Implementation Checklist

### Typography Consistency
- [ ] All H1 elements use same font-size and line-height
- [ ] All H2 elements use same font-size and line-height  
- [ ] All H3 elements use same font-size and line-height
- [ ] Body text uses consistent font-size and line-height
- [ ] Script fonts (.script-font) are consistent across sections

### Button Consistency
- [ ] All primary buttons use .btn-light class
- [ ] All secondary buttons use .btn-outline class
- [ ] All buttons have consistent padding and typography
- [ ] Button hover effects are uniform

### Spacing Consistency
- [ ] All sections use standard padding (5rem 0)
- [ ] All containers use consistent max-width and padding
- [ ] Card components use consistent padding (2.5rem)
- [ ] Grid gaps are uniform (2rem desktop, 1.5rem mobile)

### Color Consistency
- [ ] All dark text uses --text-dark
- [ ] All light text uses --text-light  
- [ ] All accent elements use --accent-gold
- [ ] All backgrounds use defined color variables

### Component Consistency
- [ ] All cards use .card class with hover effects
- [ ] All section headers follow template structure
- [ ] All forms use consistent input styling
- [ ] All overlays use consistent opacity values

## 🚀 Next Steps

1. **Audit Current Implementation**: Review all existing components against this system
2. **Create Component Library**: Build reusable components following these guidelines
3. **Documentation**: Update code comments to reference design system classes
4. **Testing**: Verify visual consistency across all breakpoints
5. **Optimization**: Remove duplicate styles and consolidate CSS

---

*This design system ensures the Rum River Wedding Barn website maintains its beautiful rustic elegance while achieving perfect visual cohesion across all sections.*