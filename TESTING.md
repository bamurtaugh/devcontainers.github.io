# Testing Guide

This document provides instructions for testing the Development Containers website.

## Overview

This is a Jekyll-based GitHub Pages site. Testing primarily involves:
- Building the site locally to verify Jekyll compilation
- Validating HTML output
- Checking for broken links
- Verifying responsive design

## Prerequisites

- Ruby (version specified in `.ruby-version` or Gemfile)
- Bundler gem
- Dev Container (recommended) or local Jekyll installation

## Running Tests Locally

### Using the Dev Container (Recommended)

1. Open this repository in a dev container-supporting editor
2. Reopen in the dev container
3. Run the build test:
   ```bash
   bundle install
   bundle exec jekyll build
   ```

### Manual Setup

If not using a dev container:

1. Install Ruby and Bundler:
   ```bash
   gem install bundler
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Build the site:
   ```bash
   bundle exec jekyll build
   ```

4. Serve locally for manual testing:
   ```bash
   bundle exec jekyll serve
   ```
   Then visit http://localhost:4000/containers.dev/

## Test Types

### Build Test

Verify the site builds without errors:
```bash
bundle exec jekyll build --verbose
```

Expected: Clean build with no errors in `_site/` directory.

### Link Validation

Check for broken links using html-proofer (if added to Gemfile):
```bash
bundle exec htmlproofer ./_site --disable-external
```

### Local Preview

Manual testing checklist:
- [ ] Navigation works across all pages
- [ ] All images load correctly
- [ ] Code syntax highlighting displays properly
- [ ] External links open correctly
- [ ] Responsive design works on mobile/tablet/desktop

## Continuous Integration

The site is automatically built and deployed via GitHub Actions when changes are pushed to the `gh-pages` branch.

See `.github/workflows/publish.yml` for the CI/CD configuration.

### CI Build Process

1. Checkout repository
2. Fetch devcontainer manifests from GHCR
3. Build with Jekyll
4. Deploy to GitHub Pages

## Common Issues

### Build Failures

- **Missing dependencies**: Run `bundle install`
- **Ruby version mismatch**: Check Ruby version matches Gemfile requirements
- **Port conflicts**: If port 4000 is in use, specify different port:
  ```bash
  bundle exec jekyll serve --port 4001
  ```

### Content Issues

- **Markdown rendering**: Ensure proper frontmatter in all `.md` files
- **Liquid syntax errors**: Check for proper template tag syntax
- **YAML errors**: Validate YAML in `_config.yml` and data files

## Adding Tests

To add automated testing:

1. Add `html-proofer` to Gemfile:
   ```ruby
   gem 'html-proofer'
   ```

2. Create a Rakefile with test tasks
3. Update CI workflow to run tests before deployment

## Resources

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Development Containers Specification](https://github.com/devcontainers/spec)
