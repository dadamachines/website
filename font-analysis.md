# dadamachines Website Typography Analysis

## Font Families

### Primary Font Stack
- **Primary (Bold)**: `$is-family-primary` = `"Lelo-Bold", "Helvetica Neue", "Helvetica", "Roboto", "Arial", sans-serif`
- **Secondary (Regular)**: `$is-family-secondary` = `"Lelo-Regular", "Helvetica Neue", "Helvetica", "Roboto", "Arial", sans-serif`
- **Sans-serif (Default)**: `$family-sans-serif` = `"Lelo-Regular", "Helvetica Neue", "Helvetica", "Roboto", "Arial", sans-serif`

### Custom Font Files
1. **Lelo-Bold** (weight: 700) - Primary font for headings and navigation
2. **Lelo-Regular** (weight: 400) - Secondary font for body text
3. ~~Neue Haas Unica W1G Bold~~ - Removed for consistency
4. ~~Neue Haas Unica W1G Regular~~ - Removed for consistency

## Standardized Typography Variables

### SCSS Variables for Consistency
- `$font-size-navigation: 1.25rem` (20px) - Standard for all navigation
- `$font-size-body-large: 1.25rem` (20px) - For readable body text (is-size-5)  
- `$font-size-body-medium: 1.125rem` (18px) - For medium body text
- `$font-size-body-standard: 1rem` (16px) - Default body text
- `$font-size-small: 0.75rem` (12px) - For disclaimers only (is-size-7)

## Font Size System (Bulma + Custom)

### Bulma Size Classes Used
- `is-size-1` - 3rem (48px)
- `is-size-2` - 2.5rem (40px)
- `is-size-3` - 2rem (32px)
- `is-size-4` - 1.5rem (24px)
- `is-size-5` - 1.25rem (20px)
- `is-size-7` - 0.75rem (12px)

### Desktop-Specific Sizes
- `is-size-1-desktop` - 3rem (48px) on desktop
- `is-size-2-desktop` - 2.5rem (40px) on desktop
- `is-size-3-desktop` - 2rem (32px) on desktop
- `is-size-5-desktop` - 1.25rem (20px) on desktop

### Mobile-Specific Sizes
- `is-size-3-mobile` - 2rem (32px) on mobile

### Custom Font Sizes (Now Standardized)
- **Navigation items**: `$font-size-navigation` (1.25rem/20px) - Used for all navigation
- **Footer navigation**: `$font-size-navigation` (1.25rem/20px) - Now matches header
- **Explore link large**: `1.5rem` (24px)
- **Explore link medium**: `$font-size-navigation` (1.25rem/20px) - Standardized

## Typography Usage by Component

### 1. Hero Sections (Consistent Pattern)
- **Title**: `title is-2` (2.5rem/40px) - Uses Lelo-Bold
- **Subtitle**: `subtitle is-3` (2rem/32px) - Uses Lelo-Regular
- **Font Family**: Lelo-Bold for titles, Lelo-Regular for subtitles

### 2. Page Headers (Now Matches Hero Pattern)
- **Main Title**: `title is-2` (2.5rem/40px) - Consistent with hero
- **Subtitle**: `subtitle is-3` (2rem/32px) - Consistent with hero
- **Font Family**: Lelo-Bold

### 3. Section Headers (Improved Hierarchy)
- **H1 Headings**: `is-size-2` (2.5rem/40px) - Matches hero title
- **H2 Headings**: `is-size-2` (2.5rem/40px) - For major sections
- **Font Family**: Lelo-Bold (via $is-family-primary)

### 4. Body Text
- **Standard paragraphs**: `is-size-5-desktop` (1.25rem/20px desktop)
- **Small text**: Default Bulma size (~1rem/16px)
- **Very small text**: `is-size-7` (0.75rem/12px) - Used for disclaimers
- **Font Family**: Lelo-Regular (via $is-family-secondary)

### 5. Navigation (Now Consistent)
- **Header Navigation**: 
  - Font Family: Lelo-Bold
  - Font Size: `$font-size-navigation` (1.25rem/20px)
  - Hover: Underline with 2px thickness, 4px offset
- **Footer Navigation**:
  - Font Family: Lelo-Bold  
  - Font Size: `$font-size-navigation` (1.25rem/20px) - Now matches header
  - Hover: White underline with 2px thickness, 4px offset

### 6. Buttons (Explore Links) - Improved Consistency
- **Large buttons**: `explore-link is-large` - 1.5rem (24px)
- **Medium buttons**: `explore-link is-medium` - 1.25rem (20px) - Now matches navigation
- **Standard buttons**: Default explore-link size (~1rem/16px)
- **Font Family**: Inherits from base (Lelo-Regular)

### 7. Contact Form (Now Consistent)
- **Main heading**: `title is-2` (2.5rem/40px) - Matches hero pattern
- **Section headings**: `subtitle is-3` (2rem/32px) - Matches hero pattern
- **Contact info**: `is-size-5-desktop` (1.25rem/20px desktop)
- **Font Family**: Lelo-Bold for headings, Lelo-Regular for body

### 8. Footer (Improved Consistency)
- **Brand name**: `is-size-3` (2rem/32px)
- **Navigation links**: `$font-size-navigation` (1.25rem/20px) - Now matches header
- **Copyright text**: Default paragraph size (~1rem/16px)
- **Font Family**: Lelo-Bold for brand, Lelo-Bold for navigation

### 9. Product Pages (Consistent with Hero)
- **Product titles**: `title is-2` (2.5rem/40px) - Matches hero
- **Product descriptions**: `subtitle is-3` (2rem/32px) - Matches hero
- **Section headers**: `is-size-2` (2.5rem/40px) - Consistent sizing
- **Body text**: `is-size-5-desktop` (1.25rem/20px desktop)
- **Price text**: `title is-5` (1.25rem/20px)
- **Small disclaimers**: `is-size-7` (0.75rem/12px)

### 10. Project Pages (with dada-a styling)
- **External links**: `dada-a is-size-3-desktop` (2rem/32px desktop)
- **Special link styling**: Black text with black underline border
- **Hover**: Blue text with blue underline

### 11. Newsletter Component
- **Heading**: `is-size-2 is-size-3-mobile` (2.5rem desktop/2rem mobile)
- **Font Family**: Lelo-Bold

## Font Weight Usage

### Bold (700) - Lelo-Bold
- All headings (h1, h2, etc.)
- Navigation items
- Button text
- Brand name in footer
- Section titles
- Form labels marked as `has-text-weight-bold`

### Regular (400) - Lelo-Regular  
- Body text
- Paragraph content
- Most general content
- Default font weight

## Responsive Behavior

### Desktop (1024px+)
- Uses `-desktop` size variants where specified
- Larger font sizes for better readability
- Navigation font size: 1.25rem

### Mobile/Tablet (<1024px)
- Falls back to standard Bulma sizes
- Uses `-mobile` variants where specified
- Smaller hero text on mobile
- Navigation font size: 1.25rem (same as desktop)

## Color Usage with Typography

### Standard Text Colors
- **Default**: Black (#111) 
- **White text**: `has-text-white` (#fff)
- **Grey text**: `has-text-grey-dark`

### Special Typography Colors
- **Navigation hover**: Black text with underline
- **Footer navigation hover**: White text with white underline  
- **dada-a links**: Black text (#111) with black border
- **dada-a links hover**: Blue text (#0000ee) with blue border
- **Hero text**: White on dark backgrounds, black on light backgrounds

## Special Typography Features

### Text Decorations
- **Navigation underlines**: 2px thickness, 4px offset
- **dada-a links**: 3px solid border-bottom (black normal, blue hover)
- **Footer navigation**: White underline on hover

### Transitions
- **Navigation**: 0.3s ease for text-decoration
- **dada-a links**: 0.4s for color transitions  
- **Footer navigation**: 0.3s ease for text-decoration

## Accessibility Considerations

### Font Size Minimums
- Smallest used: 0.75rem (12px) for disclaimers only
- Standard body: 1.25rem (20px) on desktop
- Good contrast with background colors
- Responsive scaling for different screen sizes

### Font Family Fallbacks
- Comprehensive fallback stack to system fonts
- Web-safe alternatives (Helvetica, Arial, sans-serif)
- Progressive enhancement approach

## Recent Typography Improvements (October 2025)

### Consistency Fixes Applied
1. **Standardized Navigation Sizes**: Footer navigation now matches header navigation (20px)
2. **Unified Font Variables**: Added SCSS variables for consistent font sizes across components
3. **Explore Link Standardization**: Medium explore links now use 20px to match navigation
4. **Removed Unused Fonts**: Eliminated Neue Haas Unica fonts for cleaner font stack
5. **Variable-Based Sizing**: All navigation components now use `$font-size-navigation` variable
6. **Hero-Based Typography Hierarchy**: All page headers now follow hero pattern (40px/32px)
7. **Consistent Section Headers**: All major sections use `is-size-2` (40px) for uniform hierarchy

### Benefits
- **Better Visual Hierarchy**: Consistent sizing creates clearer information hierarchy
- **Improved Maintainability**: SCSS variables make future changes easier
- **Cleaner Codebase**: Removed unused font files and inconsistent sizing
- **Enhanced User Experience**: More predictable and cohesive typography

## Usage Recommendations

### Consistency Patterns
1. **Page titles**: Use `is-size-1-desktop` for main page headers
2. **Section headers**: Use `is-size-2-desktop` for major sections  
3. **Body text**: Use `is-size-5-desktop` for readable content
4. **Small text**: Use `is-size-7` sparingly for disclaimers only
5. **Navigation**: Maintain current custom sizing for consistency

### Font Family Applications
1. **Headings/Emphasis**: Always use Lelo-Bold ($is-family-primary)
2. **Body text**: Use Lelo-Regular ($is-family-secondary)
3. **Navigation**: Use Lelo-Bold for prominence
4. **Buttons**: Inherit from context (usually Lelo-Regular)
