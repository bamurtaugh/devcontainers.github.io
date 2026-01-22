---
applyTo: "**"
description: "Jekyll development, testing, and build workflows"
---

# Jekyll Development Guidelines

## Testing Requirements

**CRITICAL**: Every code change must be tested before committing.

### Local Testing Process

1. **Start the Jekyll server**: Run the task "Serve" or execute `bundle exec jekyll serve --livereload`
2. **View the site**: Navigate to `http://localhost:4000/` in a browser
3. **Verify changes**: Check that your changes render correctly
4. **Check links**: Ensure all internal links work
5. **Validate navigation**: Confirm new pages appear in navigation if expected

### Available Tasks

- **Serve**: `bundle exec jekyll serve --livereload` (starts dev server with auto-reload)
- **Build**: `bundle exec jekyll build` (generates static site in `_site/`)

## Agent Mode Behavior

If operating in agent mode, **automatically run `bundle exec jekyll serve`** after making changes so the user can test immediately. Don't wait to be asked.

## Jekyll Collections

The site uses three Jekyll collections (defined in `_config.yml`):
1. **implementors**: Specification documentation (`_implementors/`)
2. **posts**: Guides and tutorials (`_posts/`)
3. **docs**: General documentation (if used)

## Layouts

- `default.html`: Base layout for main HTML pages
- `implementors.html`: Layout for specification pages
- `post.html`: Layout for guide posts
- `singlePage.html`: Single-page view layout
- `specification.html`: Alternative specification layout
- `table.html`: Table-based layout

Front matter defaults in `_config.yml` automatically assign layouts based on file location.

## Navigation Management

- **Top nav**: Edit `_includes/topnav.html`
- **Specification TOC**: Edit `_data/specification-toc.yml`
- **Collection index**: Edit `_data/collection-index.yml`

When adding new pages, verify they appear in the appropriate navigation structure.

## Development Container Setup

This repository includes a dev container configuration (`.devcontainer/`) based on the Jekyll Dev Container Template.

**To use it:**
1. Open repo in a dev container-supporting editor
2. Reopen in container
3. Run `bundle exec jekyll serve`
4. Navigate to `http://localhost:4000/`
