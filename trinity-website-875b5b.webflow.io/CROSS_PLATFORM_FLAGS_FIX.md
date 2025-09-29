# Cross-Platform Flag Icons Fix

## Problem
The global offices map was using native emoji flags (🇮🇳, 🇳🇱, 🇴🇲, 🇺🇸) which don't display consistently across different operating systems:
- **Ubuntu**: Displays flags properly
- **Windows**: May show as separate characters or boxes
- **macOS**: May show as separate characters or not at all

## Solution
Replaced emoji flags with SVG-based flag icons that work consistently across all platforms.

## Files Modified/Created

### 1. `index.html`
- Replaced emoji flags with custom SVG flag representations
- Added CSS and JavaScript includes for cross-platform support

### 2. `cross-platform-flags.css` (NEW)
- Ensures consistent styling for flag icons
- Provides fallback styles for different scenarios
- Includes responsive design for mobile devices
- Supports accessibility features (high contrast, reduced motion)

### 3. `cross-platform-flags.js` (NEW)
- Detects SVG support in the browser
- Provides fallback to text-based flags if SVG fails
- Monitors flag rendering and switches to fallbacks if needed
- Includes manual update functionality

## Flag Implementations

### India 🇮🇳
```svg
<svg width="32" height="24" viewBox="0 0 32 24" class="flag-svg">
  <rect width="32" height="8" fill="#FF9933"/>
  <rect y="8" width="32" height="8" fill="#FFFFFF"/>
  <rect y="16" width="32" height="8" fill="#138808"/>
  <circle cx="16" cy="12" r="3" fill="#000080" stroke="#000080" stroke-width="0.5"/>
</svg>
```

### Netherlands 🇳🇱
```svg
<svg width="32" height="24" viewBox="0 0 32 24" class="flag-svg">
  <rect width="32" height="8" fill="#AE1C28"/>
  <rect y="8" width="32" height="8" fill="#FFFFFF"/>
  <rect y="16" width="32" height="8" fill="#21468B"/>
</svg>
```

### Oman 🇴🇲
```svg
<svg width="32" height="24" viewBox="0 0 32 24" class="flag-svg">
  <rect width="32" height="8" fill="#FFFFFF"/>
  <rect y="8" width="32" height="8" fill="#ED2939"/>
  <rect y="16" width="32" height="8" fill="#00A651"/>
  <rect width="10" height="24" fill="#ED2939"/>
</svg>
```

### USA 🇺🇸
```svg
<svg width="32" height="24" viewBox="0 0 32 24" class="flag-svg">
  <rect width="32" height="24" fill="#B22234"/>
  <rect y="2" width="32" height="2" fill="#FFFFFF"/>
  <!-- Additional stripes and stars -->
</svg>
```

## Fallback System

If SVG flags fail to render, the system automatically falls back to:
1. **Text-based flags**: Country codes (IN, NL, OM, US) with country-specific colors
2. **Colored backgrounds**: Gradient backgrounds matching flag colors
3. **Accessibility labels**: Proper ARIA labels for screen readers

## Browser Compatibility

✅ **Chrome/Chromium** (All platforms)
✅ **Firefox** (All platforms)  
✅ **Safari** (macOS/iOS)
✅ **Edge** (Windows)
✅ **Internet Explorer 11+**

## Testing

To test the fix:
1. Open the website on different operating systems
2. Check that flag icons display consistently
3. Verify fallbacks work by disabling SVG support in developer tools
4. Test with screen readers for accessibility

## Maintenance

- Flag SVGs are embedded directly in HTML for maximum compatibility
- CSS provides consistent styling across all browsers
- JavaScript handles edge cases and provides fallbacks
- No external dependencies required

## Performance Impact

- **Minimal**: SVG flags are lightweight and embedded
- **No external requests**: All resources are local
- **Fast fallback**: JavaScript detection is immediate
- **Cached**: CSS and JS files are cached by browsers

This solution ensures the global offices map displays correctly across Ubuntu, Windows, macOS, and all other platforms while maintaining accessibility and performance standards.