---
applyTo: "*.html"
description: "Guidelines for main site pages in repository root"
---

# Main Site Page Guidelines

## When to Create a Main Page

Main pages are top-level `.html` files in the repository root that appear in the site's main navigation bar.

Examples: `index.html`, `features.html`, `templates.html`, `collections.html`, `guides.html`

## Front Matter Requirements

```yaml
---
layout: default
title: "Page Title"
---
```

## Navigation Integration

When adding a new main page:
1. Create the `.html` file in the repository root
2. Update `_includes/topnav.html` to add the page to the navigation bar
3. Ensure the navigation link uses the correct path and styling

## Layout and Styling

### Available Layouts
- **default.html**: Standard layout for main pages (most common)
- Other layouts available in `_layouts/` if needed for specific purposes

### Styling Conventions
- Uses **Bootstrap 4** (Cosmo theme from `css/bootswatch/cosmo/bootstrap.min.css`)
- **Font Awesome** icons available (`css/fontawesome-all.min.css`)
- Custom styles in `css/main.scss`
- Custom JavaScript in `js/page.js`

### Common Bootstrap Components
- Container: `<div class="container">` or `<div class="container-fluid">`
- Grid system: `<div class="row">` with `<div class="col-*">` columns
- Cards: Use Bootstrap card components for feature sections
- Buttons: Use Bootstrap button classes for consistency

## Content Structure Best Practices

- Use semantic HTML5 elements (`<section>`, `<article>`, `<header>`, etc.)
- Maintain consistent spacing and layout patterns with existing pages
- Include descriptive page titles and meta information
- Ensure responsive design works on mobile devices

> **Important**: Do not commit changes. Never run `git commit`, `git push`, or create pull requests. Leave all changes uncommitted for the user to review and commit manually.


