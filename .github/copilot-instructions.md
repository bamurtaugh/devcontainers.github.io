# GitHub Copilot Instructions for containers.dev

This repository contains the official website for the [Development Container Specification](https://github.com/devcontainers/spec), accessible at [containers.dev](https://containers.dev). It's built with Jekyll and hosted on GitHub Pages.

> **Note**: Task-specific instructions are available in `.github/instructions/*.instructions.md` files. These are automatically applied based on the files you're working with.

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

### Project Technology Stack
- **Static Site Generator**: Jekyll
- **Hosting**: GitHub Pages
- **Styling**: Bootstrap (Cosmo theme), Font Awesome
- **JavaScript**: Custom scripts in `js/page.js`

## 📝 Content Types

### When Adding New Content, Choose the Right Type:

1. **Main site page** → Create `.html` file in repository root
   - Will appear in top navigation
   - See `.github/instructions/main-pages.instructions.md` for details

2. **Specification/implementor page** → Create `.md` file in `_implementors/`
   - For technical specification content
   - See `.github/instructions/specification-pages.instructions.md` for details

3. **Guide/tutorial** → Create `.md` file in `_posts/`
   - Use date-based naming: `YYYY-MM-DD-descriptive-title.md`
   - See `.github/instructions/guides.instructions.md` for details

> **Tip**: Content-specific instructions will be automatically applied based on the file location.

## 🛠️ Development Workflow

### Development Container
This repository includes a dev container configuration based on the [Jekyll Dev Container Template](https://github.com/devcontainers/templates/tree/main/src/jekyll).

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

## 🎯 Key Principles

- **Use proper terminology** from the style guide (see Markdown authoring instructions)
- **Update navigation files** when adding new pages
- **Verify internal links** work correctly after changes
- **Do not commit changes** — never run `git commit`, `git push`, or create pull requests. Leave all changes uncommitted for the user to review and commit manually.

## 📋 Task-Specific Instructions

Content-specific guidelines are organized in `.github/instructions/`:
- `main-pages.instructions.md` - For main site pages (`.html` files in root)
- `specification-pages.instructions.md` - For `_implementors/` documentation
- `guides.instructions.md` - For `_posts/` tutorials
- `markdown-authoring.instructions.md` - Terminology and formatting standards
- `jekyll-development.instructions.md` - Testing and build workflows

These files are automatically applied based on the files you're working with using the `applyTo` frontmatter property.
