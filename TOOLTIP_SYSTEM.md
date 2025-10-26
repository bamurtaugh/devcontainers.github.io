# Tooltip System Documentation

This site uses an in-context tooltip system to help visitors understand key development container terminology.

## Overview

The tooltip system consists of three main components:

1. **Glossary Data** (`_data/glossary.yml`) - Defines all terms and their definitions
2. **Tooltip Include** (`_includes/tooltip.html`) - Liquid template for rendering tooltips
3. **Styling & JavaScript** - CSS in `css/main.scss` and JS in `js/page.js`

## How to Use Tooltips

### Adding a Tooltip to a Page

To add a tooltip to any page, use the include syntax:

```liquid
{% include tooltip.html term="dev container" %}
```

This will render the term with a dotted underline. When users hover over it, they'll see the definition from the glossary.

### Example Usage in Markdown

```markdown
A {% include tooltip.html term="dev container" %} allows you to use a 
{% include tooltip.html term="container" %} as a development environment.
```

### Example Usage in HTML

```html
<p>
  The {% include tooltip.html term="Development Container Specification" %} 
  includes {% include tooltip.html term="Features" %} and 
  {% include tooltip.html term="Templates" %}.
</p>
```

## Adding New Terms to the Glossary

To add a new term to the glossary:

1. Open `_data/glossary.yml`
2. Add a new entry under the `terms` array:

```yaml
- term: "your new term"
  definition: "A clear, concise definition that will appear in the tooltip."
```

3. The term matching is case-insensitive, so "Dev Container" and "dev container" will match the same glossary entry.

## Current Glossary Terms

The following terms are currently defined in the glossary:

- dev container
- devcontainer.json
- Development Container Specification
- Features
- Templates
- container
- metadata
- image
- image metadata
- lifecycle scripts
- customizations
- remote development

## Styling

Tooltips have the following visual characteristics:

- **Underline**: Dotted blue line under terms (matches site theme color)
- **Tooltip appearance**: Dark background (#333) with white text
- **Position**: Appears above the term by default
- **Animation**: Smooth fade-in/fade-out (0.3s transition)
- **Max width**: 300px on desktop, 250px on mobile
- **Responsive**: Automatically adjusts position if it would go off-screen

## Accessibility

The tooltip system includes accessibility features:

- Keyboard accessible (can be focused with Tab key)
- ARIA labels for screen readers
- Works with keyboard navigation (focus triggers tooltip display)
- Semantic HTML structure

## Best Practices

### When to Add Tooltips

Add tooltips for:
- Technical terms specific to dev containers (e.g., "Features", "Templates")
- Terms that newcomers might not understand (e.g., "container", "image")
- Key concepts central to the specification (e.g., "metadata", "lifecycle scripts")

### When NOT to Add Tooltips

Avoid adding tooltips for:
- Common development terms (e.g., "code", "file", "directory")
- Terms that are thoroughly explained in context
- Every occurrence of a term on a page (use sparingly for best UX)

### Guidelines

1. **Be selective**: Add tooltips to the first or most important occurrence of a term on a page
2. **Keep definitions concise**: Aim for 1-2 sentences that explain the core concept
3. **Maintain consistency**: Use the same definition across all pages
4. **Test on mobile**: Ensure tooltips don't cover important content on small screens

## Technical Details

### CSS Classes

- `.glossary-term` - Applied to the term wrapper
- `.tooltip-content` - Applied to the tooltip popup

### JavaScript Functionality

The `initGlossaryTooltips()` function in `js/page.js`:
- Adjusts tooltip position to prevent overflow
- Adds keyboard accessibility attributes
- Runs on page load via jQuery's `$(function())`

## Testing

To test tooltips locally:

1. Start Jekyll server: `bundle exec jekyll serve`
2. Navigate to a page with tooltips
3. Hover over underlined terms to see tooltips
4. Test keyboard navigation (Tab to term, tooltip should appear on focus)
5. Test on different screen sizes for responsive behavior

## Troubleshooting

**Tooltip not appearing:**
- Check that the term exactly matches a term in `_data/glossary.yml` (case-insensitive)
- Verify the include syntax is correct: `{% include tooltip.html term="exact term" %}`
- Check browser console for JavaScript errors

**Tooltip appears in wrong position:**
- This is usually handled automatically, but check viewport size
- Verify CSS for `.tooltip-content` is loading correctly

**Term not styling correctly:**
- Check that `css/main.scss` has been compiled to `css/main.css`
- Verify the `.glossary-term` class is being applied in the rendered HTML
