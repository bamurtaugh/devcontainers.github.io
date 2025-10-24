# GitHub Copilot Instructions for containers.dev

This repository contains the official website for the [Development Container Specification](https://github.com/devcontainers/spec), accessible at [containers.dev](https://containers.dev). It's built with Jekyll and hosted on GitHub Pages.

## 🏗️ Repository Structure

### Site Architecture
- **Main pages** (`.html` files in root): Top-level navigation pages visible in the site's main nav bar
  - Examples: `index.html`, `features.html`, `templates.html`, `collections.html`, `guides.html`
- **Specification pages** (`.md` files in `_implementors/`): Technical documentation for implementors
  - Examples: `spec.md`, `features.md`, `templates.md`, `json_reference.md`, `features-distribution.md`
- **Guides** (`.md` files in `_posts/`): Tutorial and how-to content
  - Naming: `YYYY-MM-DD-title.md` format
  - Permalink: `/guide/title`
- **Layouts** (`_layouts/`): Template files controlling page structure
- **Data files** (`_data/`): YAML files for site configuration like navigation and TOC

### Key Collections
The site uses three Jekyll collections (defined in `_config.yml`):
1. **implementors**: Specification documentation (`_implementors/`)
2. **posts**: Guides and tutorials (`_posts/`)
3. **docs**: General documentation (if used)

## 📝 Adding New Content

### When a User Wants to Add a Page

**First, clarify what type of page they want:**

1. **Main site page** → Create `.html` file in repository root
   - Will appear in top navigation
   - Requires front matter with layout, title, etc.
   - May need to update navigation in `_includes/topnav.html`

2. **Specification/implementor page** → Create `.md` file in `_implementors/`
   - For technical specification content
   - Automatically gets `implementors` layout from defaults
   - May need to update `_data/specification-toc.yml` for navigation

3. **Guide/tutorial** → Create `.md` file in `_posts/`
   - Use date-based naming: `YYYY-MM-DD-descriptive-title.md`
   - Automatically gets `post` layout from defaults
   - Appears in guides section

### Front Matter Requirements

**For specification pages (`_implementors/*.md`):**
```yaml
---
layout: implementors
title: "Full Page Title"
shortTitle: "Nav Title"
author: Organization/Author
index: 1  # Order in navigation
---
```

**For guide posts (`_posts/*.md`):**
```yaml
---
layout: post
title: "Guide Title"
author:
  - "@githubusername"
authorUrl:
  - https://github.com/username
---
```

**For main HTML pages (root `*.html`):**
```yaml
---
layout: default
title: "Page Title"
---
```

## 🧪 Testing Requirements

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

### Agent Mode Behavior
If operating in agent mode, **automatically run `bundle exec jekyll serve`** after making changes so the user can test immediately. Don't wait to be asked.

## 📐 Content Guidelines

### Terminology Standards
Follow these conventions when writing content:

- **"Development Container Specification"** (proper noun, capitalized, singular "Container")
- **"dev container"** (lowercase unless part of an official tool name like "Dev Container CLI")
- **`devcontainer.json`** (always in backticks when referring to the file)
- **"Features"** and **"Templates"** (always capitalized)
- **"Dev Container CLI"** (official tool name, capitalized)

### Markdown Best Practices
- Use **bolding** sparingly for emphasis within sections
- Include code examples in appropriate language-tagged code blocks
- Add anchors for major headings in specification pages:
  ```markdown
  # <a href="#section" name="section" class="anchor"> Section Title </a>
  ```

### Property Documentation Format
When documenting specification properties, use this table format:

```markdown
| Property | Type | Description |
|----------|------|-------------|
| `propertyName` | string | Description including **Required** or **Optional** label |
```

## 🔧 Common Workflows

### Adding a New Feature to the Specification
1. Create/update the relevant `.md` file in `_implementors/`
2. Add property documentation in table format
3. Update `_data/specification-toc.yml` if adding a new page
4. Add code examples demonstrating usage
5. Test locally with Jekyll serve
6. Cross-reference related pages

### Creating a New Guide
1. Create `_posts/YYYY-MM-DD-descriptive-title.md`
2. Add proper front matter with author info
3. Write content following style guidelines
4. Test rendering locally
5. Verify it appears in the guides section

### Modifying Site Navigation
- **Top nav**: Edit `_includes/topnav.html`
- **Specification TOC**: Edit `_data/specification-toc.yml`
- **Collection index**: Edit `_data/collection-index.yml`

## 🛠️ Development Container Setup

This repository includes a dev container configuration (`.devcontainer/`) based on the [Jekyll Dev Container Template](https://github.com/devcontainers/templates/tree/main/src/jekyll).

**To use it:**
1. Open repo in a dev container-supporting editor
2. Reopen in container
3. Run `bundle exec jekyll serve`
4. Navigate to `http://localhost:4000/`

## 🎨 Styling and Assets

- **Main styles**: `css/main.scss`
- **Bootstrap theme**: `css/bootswatch/cosmo/bootstrap.min.css`
- **Font Awesome**: `css/fontawesome-all.min.css`
- **Custom JS**: `js/page.js`
- **Images**: `img/` directory

## 🔗 Related Resources

- [Dev Container Spec Repository](https://github.com/devcontainers/spec)
- [Contributing Guidelines](https://github.com/devcontainers/containers.dev/blob/gh-pages/contributing.md)
- [Community Slack](https://aka.ms/dev-container-community)
- [GitHub Discussions](https://github.com/devcontainers/spec/discussions)

## 🎯 Quick Reference for Copilot

- **Always test changes** before completing tasks
- **Use proper terminology** from the style guide
- **Check front matter** requirements for each content type
- **Update navigation files** when adding new pages
- **Preserve formatting** in specification tables and code examples
- **Run Jekyll serve** automatically in agent mode
- **Verify internal links** work correctly after changes