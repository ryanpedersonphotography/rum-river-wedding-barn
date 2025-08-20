# Component Library - Quick Reference

## SocialProofRibbon Component

**What it is:** Beautiful sage green section with curved dividers on top and bottom, creating a "ribbon" effect.

**Where used:** Rum River Wedding Barn - social proof section with testimonial and logos

### Code to Copy/Paste:

```jsx
{/* Social Proof Section - Dark Sage */}
<section className="social-proof">
  <div className="container social-content">
    <div className="social-logos">
      <span className="social-logo">THE KNOT</span>
      <span className="social-logo">WEDDINGWIRE</span>
      <span className="social-logo">MARTHA STEWART</span>
      <span className="social-logo">MINNESOTA BRIDE</span>
    </div>
    <p className="social-text">
      "Rum River Barn isn't just a venue—it's <span className="highlight">where dreams come to life</span>. 
      Their commitment to saying 'yes' to every couple's vision sets them apart as 
      <span className="highlight">Minnesota's most accommodating wedding destination</span>."
    </p>
  </div>
  
  {/* Inverted Curved Divider Bottom */}
  <div className="shape-divider bottom soft-curve">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M0,120 L1200,120 L1200,0 Q600,40 0,0 Z" fill="var(--warm-cream)"></path>
    </svg>
  </div>
</section>
```

### Required CSS:

```css
/* Social Proof Section - Dark Sage */
.social-proof {
  padding: 80px 0;
  background: linear-gradient(90deg, var(--sage-green) 0%, var(--deep-brown) 100%);
  position: relative;
  overflow: hidden;
}

.social-proof::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="stars" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255, 255, 255, 0.1)"/><circle cx="90" cy="30" r="1" fill="rgba(255, 255, 255, 0.1)"/><circle cx="50" cy="50" r="1" fill="rgba(255, 255, 255, 0.1)"/><circle cx="30" cy="80" r="1" fill="rgba(255, 255, 255, 0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23stars)"/></svg>');
}

.social-content {
  position: relative;
  z-index: 1;
  text-align: center;
}

.social-logos {
  display: flex;
  justify-content: center;
  gap: 60px;
  margin-bottom: 40px;
  flex-wrap: wrap;
  opacity: 0.6;
}

.social-logo {
  color: white;
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.social-text {
  font-size: 32px;
  color: white;
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.4;
}

.social-text .highlight {
  color: var(--accent-gold);
  font-style: italic;
}

/* Shape Dividers */
.shape-divider {
  position: absolute;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  z-index: 1;
}

.shape-divider.bottom {
  bottom: 0;
}

.shape-divider svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
}

.shape-divider.soft-curve svg {
  height: 50px;
}
```

## 🚨 READ THIS FIRST - Why This Component is Tricky

This component creates a "ribbon" effect using TWO curved SVG dividers. It looks simple but has multiple gotchas:

1. **The top divider goes on the PREVIOUS section, not this section**
2. **The bottom divider fill color must exactly match the NEXT section** 
3. **SVG path directions matter - wrong direction = visual bugs**
4. **CSS positioning requirements are strict**

**If you skip the details below, it WILL break visually.**

### Visual Example of What We're Building:

```
[Previous Section - Light Background]
    ╭─────────────────────╮  ← Top curved divider (on previous section)
   ╱                       ╲
  ╱   [SocialProofRibbon]   ╲ ← Dark sage green ribbon section
 ╱                           ╲
╱                             ╲
╲                             ╱ ← Bottom curved divider (on this section)
 ╲                           ╱
  ╲   [Next Section]        ╱
   ╲_____________________╱
[Next Section - Light Background]
```

### Detailed Implementation Guide:

#### ⚠️ CRITICAL: Implementation Order (DO THIS FIRST)

**STEP 1: Add Top Curved Divider to Previous Section**
The top curved divider must be added to the section BEFORE the SocialProofRibbon, not TO the SocialProofRibbon itself.

```jsx
{/* Add this to the BOTTOM of the section that comes BEFORE SocialProofRibbon */}
<div className="shape-divider bottom soft-curve">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
    <path d="M0,40 Q600,80 1200,40 L1200,120 L0,120 Z" fill="#7A8B7F"></path>
  </svg>
</div>
```

**STEP 2: Add the SocialProofRibbon Section**
Place the main component code (from above) after the previous section.

**STEP 3: Update Bottom Divider Fill Color**
The bottom divider's `fill` attribute MUST match the background color of the section that comes AFTER SocialProofRibbon:

```jsx
{/* In the bottom divider, change fill to match next section */}
<path d="M0,120 L1200,120 L1200,0 Q600,40 0,0 Z" fill="var(--next-section-bg-color)"></path>
```

#### 🎨 Color Configuration:

**Required CSS Variables:**
```css
:root {
  --sage-green: #7A8B7F;           /* Main ribbon background start */
  --deep-brown: #4A3426;           /* Gradient end color */
  --accent-gold: #D4A574;          /* Highlight text */
  --warm-cream: #F5F1E8;           /* Bottom divider fill (match next section) */
}
```

#### 🐛 Common Issues & Solutions:

**Problem:** "I don't see any curved dividers at all"
**Root Cause:** Fill colors don't contrast with backgrounds
**Solution:** 
- Open browser dev tools and inspect the SVG elements
- Top divider fill MUST be `#7A8B7F` (sage green) - this creates the flowing IN effect
- Bottom divider fill MUST match next section's exact background color - this creates flowing OUT effect
- If both sections are the same color, you won't see the curves!

**Problem:** "There's a weird gap/notch at the bottom instead of a smooth curve"
**Root Cause:** Wrong SVG path direction or incorrect coordinates
**Solution:** 
- Copy this EXACT path: `M0,120 L1200,120 L1200,0 Q600,40 0,0 Z`
- Do NOT modify the numbers - they create the specific curve shape
- The `Q600,40` creates the quadratic curve - changing this breaks the shape

**Problem:** "Top looks like a sharp cut instead of flowing curve"
**Root Cause:** Top divider placed on wrong section
**Solution:**
- The top divider goes on the section BEFORE SocialProofRibbon
- Find the `</section>` tag of the previous section
- Add the top divider code right BEFORE that closing tag
- Previous section MUST have `position: relative` in its CSS

**Problem:** "Curves appear but look jagged or pixelated"
**Root Cause:** SVG rendering issues
**Solution:**
- Add `shape-rendering="geometricPrecision"` to SVG element
- Ensure `preserveAspectRatio="none"` is set
- Check that `width: calc(100% + 1.3px)` is applied to SVG

**Problem:** "Everything works on desktop but breaks on mobile"
**Root Cause:** Responsive design issues
**Solution:**
- Test on actual mobile device, not just browser resize
- Ensure SVG viewBox scales properly: `viewBox="0 0 1200 120"`
- Check that parent containers don't have `overflow: hidden` that clips the curves

#### 📋 DETAILED Implementation Checklist:

**Before You Start:**
- [ ] Identify the section that comes BEFORE SocialProofRibbon (call it "Section A")
- [ ] Identify the section that comes AFTER SocialProofRibbon (call it "Section C") 
- [ ] Note Section C's background color (you'll need this exact value)

**Step 1: Prepare Section A (Previous Section):**
- [ ] Add `position: relative;` to Section A's CSS class
- [ ] Find Section A's closing `</section>` tag in your JSX
- [ ] Copy the top divider code and paste it RIGHT BEFORE that `</section>` tag
- [ ] Verify the top divider's fill is exactly `#7A8B7F`

**Step 2: Add SocialProofRibbon:**
- [ ] Place the main SocialProofRibbon code immediately after Section A's closing tag
- [ ] Verify all CSS variables are defined in your stylesheet
- [ ] Check that the section has the class `social-proof`

**Step 3: Configure Bottom Divider:**
- [ ] Look at Section C's CSS - find its background color
- [ ] Update the bottom divider's fill attribute to match Section C's background exactly
- [ ] If Section C uses CSS variables, use the same variable name in the fill

**Step 4: Test Visual Result:**
- [ ] Refresh page and scroll to the component area
- [ ] You should see a smooth curve flowing FROM Section A TO SocialProofRibbon
- [ ] You should see a smooth curve flowing FROM SocialProofRibbon TO Section C
- [ ] No gaps, notches, or sharp edges should be visible

**Step 5: Responsive Testing:**
- [ ] Test on mobile device (not just browser resize)
- [ ] Check tablets and larger screens
- [ ] Verify curves don't break at different viewport widths

**Step 6: Browser Testing:**
- [ ] Test in Chrome, Firefox, Safari
- [ ] Check that SVG renders smoothly in all browsers
- [ ] Verify no browser-specific rendering issues

#### 🔧 Customization:

**Change Content:**
- Update `.social-logo` spans with your brand names
- Modify `.social-text` with your testimonial
- Adjust `.highlight` spans for emphasized text

**Change Colors:**
- Update CSS variables for different color schemes
- Ensure sufficient contrast for accessibility
- Test gradient combinations

**Change Size:**
- Modify `padding: 80px 0` for section height
- Adjust `font-size: 32px` for text size
- Update `gap: 60px` for logo spacing

#### ⚡ Pro Tips:

- Always test the full sequence: previous section → SocialProofRibbon → next section
- Use browser dev tools to inspect SVG paths if curves look wrong
- The star pattern overlay adds subtle texture - remove `::before` pseudo-element if not wanted
- Curved dividers work best between contrasting background colors

## 📚 Complete Working Example

**BEFORE - Separate sections with no curves:**
```jsx
{/* Section A - Services */}
<section className="services-section">
  <div className="container">
    <h2>Our Services</h2>
    <p>Content here...</p>
  </div>
</section>

{/* Section C - Venue Showcase */}
<section className="venue-showcase">
  <div className="container">
    <h2>Venue Spaces</h2>
    <p>Content here...</p>
  </div>
</section>
```

**AFTER - With SocialProofRibbon and curved transitions:**
```jsx
{/* Section A - Services (with top divider added) */}
<section className="services-section">
  <div className="container">
    <h2>Our Services</h2>
    <p>Content here...</p>
  </div>
  
  {/* ADD THIS: Top curved divider */}
  <div className="shape-divider bottom soft-curve">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M0,40 Q600,80 1200,40 L1200,120 L0,120 Z" fill="#7A8B7F"></path>
    </svg>
  </div>
</section>

{/* NEW: SocialProofRibbon */}
<section className="social-proof">
  <div className="container social-content">
    <div className="social-logos">
      <span className="social-logo">THE KNOT</span>
      <span className="social-logo">WEDDINGWIRE</span>
      <span className="social-logo">MARTHA STEWART</span>
      <span className="social-logo">MINNESOTA BRIDE</span>
    </div>
    <p className="social-text">
      "Rum River Barn isn't just a venue—it's <span className="highlight">where dreams come to life</span>. 
      Their commitment to saying 'yes' to every couple's vision sets them apart as 
      <span className="highlight">Minnesota's most accommodating wedding destination</span>."
    </p>
  </div>
  
  {/* Bottom curved divider - fill matches next section */}
  <div className="shape-divider bottom soft-curve">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M0,120 L1200,120 L1200,0 Q600,40 0,0 Z" fill="var(--warm-cream)"></path>
    </svg>
  </div>
</section>

{/* Section C - Venue Showcase (background: var(--warm-cream)) */}
<section className="venue-showcase">
  <div className="container">
    <h2>Venue Spaces</h2>
    <p>Content here...</p>
  </div>
</section>
```

## 🎯 Required CSS Updates

```css
/* Add to services section */
.services-section {
  position: relative; /* REQUIRED for divider positioning */
  /* your existing styles */
}

/* Add to venue showcase section */
.venue-showcase {
  background: var(--warm-cream); /* This color MUST match bottom divider fill */
  /* your existing styles */
}

/* All the SocialProofRibbon CSS from above goes here */
```

## 🚀 Final Result

You'll get a beautiful "ribbon" effect where:
1. Services section flows smoothly INTO the sage green social proof section
2. Social proof section flows smoothly OUT into the cream venue section
3. Creates an elegant floating ribbon appearance
4. Works perfectly on all devices and browsers

## ❌ WRONG WAY Examples (Don't Do This!)

### Wrong Example #1: Putting Top Divider on SocialProofRibbon Section

```jsx
{/* WRONG - Don't do this! */}
<section className="social-proof">
  {/* ❌ TOP DIVIDER PLACED HERE - WRONG LOCATION */}
  <div className="shape-divider top soft-curve">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M0,40 Q600,80 1200,40 L1200,120 L0,120 Z" fill="#7A8B7F"></path>
    </svg>
  </div>
  
  <div className="container social-content">
    <!-- content -->
  </div>
</section>
```

**Why this breaks:** The curve appears INSIDE the social proof section instead of flowing FROM the previous section. Creates a sharp edge instead of smooth transition.

### Wrong Example #2: Using Same Fill Color for Both Dividers

```jsx
{/* WRONG - Don't do this! */}
<div className="shape-divider bottom soft-curve">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
    {/* ❌ USING SAGE GREEN FILL - WRONG COLOR */}
    <path d="M0,120 L1200,120 L1200,0 Q600,40 0,0 Z" fill="#7A8B7F"></path>
  </svg>
</div>
```

**Why this breaks:** Bottom divider is invisible because it's sage green on sage green background. No contrast = no visible curve.

### Wrong Example #3: Incorrect SVG Path Direction

```jsx
{/* WRONG - Don't do this! */}
<div className="shape-divider bottom soft-curve">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
    {/* ❌ WRONG PATH - Creates inward notch instead of outward curve */}
    <path d="M0,0 L1200,0 L1200,80 Q600,40 0,80 Z" fill="var(--warm-cream)"></path>
  </svg>
</div>
```

**Why this breaks:** Creates a "notch" or "gap" effect instead of a flowing curve. The quadratic curve goes the wrong direction.

### Wrong Example #4: Missing CSS Positioning

```jsx
{/* Services section WITHOUT position: relative */}
<section className="services-section">
  <div className="container">
    <h2>Our Services</h2>
  </div>
  
  {/* ❌ This divider won't position correctly */}
  <div className="shape-divider bottom soft-curve">
    <svg><!-- svg code --></svg>
  </div>
</section>
```

```css
/* ❌ WRONG - Missing position: relative */
.services-section {
  padding: 80px 0;
  background: var(--warm-cream);
  /* Missing: position: relative; */
}
```

**Why this breaks:** Shape divider can't position `absolute` relative to the section. Divider appears in wrong location or not at all.

### Wrong Example #5: Inconsistent Color Variables

```jsx
{/* Previous section */}
<section style={{background: '#F5F1E8'}}>
  <!-- content -->
  <div className="shape-divider bottom soft-curve">
    <svg>
      {/* ❌ Using CSS variable but section uses inline hex */}
      <path fill="var(--warm-cream)" />
    </svg>
  </div>
</section>
```

**Why this breaks:** If CSS variable `--warm-cream` is `#F4F0E7` but section background is `#F5F1E8`, colors don't match exactly. Creates visible seam.

## ✅ CORRECT WAY Examples (Do This!)

### Correct Implementation Pattern:

```jsx
{/* Section A - Correct setup */}
<section className="services-section" style={{position: 'relative'}}>
  <div className="container">
    <h2>Our Services</h2>
  </div>
  
  {/* ✅ CORRECT: Top divider on PREVIOUS section */}
  <div className="shape-divider bottom soft-curve">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      {/* ✅ CORRECT: Sage green fill creates flowing IN effect */}
      <path d="M0,40 Q600,80 1200,40 L1200,120 L0,120 Z" fill="#7A8B7F"></path>
    </svg>
  </div>
</section>

{/* SocialProofRibbon - Correct setup */}
<section className="social-proof">
  <div className="container social-content">
    <!-- content -->
  </div>
  
  {/* ✅ CORRECT: Bottom divider on THIS section */}
  <div className="shape-divider bottom soft-curve">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      {/* ✅ CORRECT: Next section's color creates flowing OUT effect */}
      <path d="M0,120 L1200,120 L1200,0 Q600,40 0,0 Z" fill="var(--warm-cream)"></path>
    </svg>
  </div>
</section>

{/* Section C - Correct background match */}
<section className="venue-showcase" style={{background: 'var(--warm-cream)'}}>
  <!-- content -->
</section>
```

## 🧠 Key Learning Points:

1. **Divider Placement:** Top divider goes on PREVIOUS section, not current section
2. **Color Matching:** Fill colors must create contrast - sage green flowing INTO, next section's color flowing OUT  
3. **SVG Paths:** Exact coordinates matter - copy precisely, don't modify
4. **CSS Positioning:** `position: relative` required on sections with dividers
5. **Color Consistency:** Use same color values (hex or CSS vars) across sections and dividers

**Effect:** Creates beautiful flowing ribbon section with seamless curved transitions on both ends!