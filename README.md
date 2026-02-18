# Development Containers Website

This repo holds the website for the [Development Containers Specification](https://github.com/devcontainers/spec).

You may view the site at [containers.dev](https://containers.dev).

## Development Setup

This website runs on Jekyll and can be developed either within a dev container (recommended) or directly on your local machine.

### Option 1: Using Dev Container (Recommended)

The simplest way to work on this site is using the included dev container configuration based on the [Jekyll Dev Container Template](https://github.com/devcontainers/templates/tree/main/src/jekyll).

**Setup Process:**
1. Open this repository in VS Code, GitHub Codespaces, or any [dev container-compatible tool](https://containers.dev/supporting)
2. When prompted, reopen the folder in the container (or use Command Palette: "Reopen in Container")
3. Wait for the container to build and install dependencies automatically
4. Start the development server: `bundle exec jekyll serve`
5. Navigate to http://localhost:4000/containers.dev/ in your browser

**For live-reload during development:** Use `bundle exec jekyll serve --livereload` instead. This automatically refreshes your browser when files change.

### Option 2: Local Installation

If you prefer working outside a container, ensure you have Ruby 2.7+ and Bundler installed first.

**Installation:**
```bash
gem install bundler
bundle install
```

**Running the site:**
```bash
bundle exec jekyll serve
```

Then visit http://localhost:4000/containers.dev/

## Testing Your Changes

After making modifications to the website, perform these validation steps to ensure everything works correctly:

### Visual Verification Checklist

When the site is running locally, systematically check these pages:

- **Homepage** (http://localhost:4000/containers.dev/)
  - Hero section displays properly
  - Navigation links are functional
  - Feature highlights render correctly
  
- **Features page** (http://localhost:4000/containers.dev/features.html)
  - Feature cards load and display
  - Search/filter functionality works
  - Links to individual features are valid

- **Templates page** (http://localhost:4000/containers.dev/templates.html)
  - Template listings appear
  - Categories are organized correctly
  - Download/usage instructions are clear

- **Implementors section** (http://localhost:4000/containers.dev/implementors/)
  - Documentation renders with proper formatting
  - Code examples have syntax highlighting
  - Internal navigation works

### Build Validation

To verify the site builds without errors (as it will in CI):

```bash
bundle exec jekyll build
```

Expected output: Site should generate successfully in the `_site` directory with no errors. Warnings about future posts or excluded files are normal.

### Automated Deployment Process

This repository uses GitHub Actions to automatically build and deploy the site:

1. **Data Fetching**: Downloads latest devcontainer-control-manifest.json and devcontainer-index.json
2. **Jekyll Build**: Compiles all markdown, HTML, and assets
3. **GitHub Pages Deploy**: Publishes to containers.dev

The workflow runs:
- On every push to the `gh-pages` branch
- Daily at 9:00 AM UTC (to fetch updated feature/template data)
- Manually via workflow dispatch

Check `.github/workflows/publish.yml` for the complete deployment configuration.

### Common Issues and Solutions

**Issue: Port 4000 already in use**
```bash
# Find and stop the conflicting process
lsof -ti:4000 | xargs kill -9
# Or use a different port
bundle exec jekyll serve --port 4001
```

**Issue: Bundle install fails**
- Verify Ruby version: `ruby --version` (needs 2.7+)
- Update bundler: `gem update bundler`
- Clear bundle cache: `bundle clean --force && bundle install`

**Issue: Changes not appearing in browser**
- Hard refresh: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)
- Clear Jekyll cache: `bundle exec jekyll clean`
- Restart server with `--livereload` flag

**Issue: Missing devcontainer-index.json or control-manifest.json**
These files are fetched during CI builds. For local development, create placeholder files:
```bash
echo '{}' > _data/devcontainer-index.json
echo '{}' > _data/devcontainer-control-manifest.json
```

### Making Contributions

Before submitting your changes:

1. **Verify all pages render**: Use the checklist above
2. **Test mobile responsiveness**: Resize browser to mobile width
3. **Check for broken links**: Click through navigation and internal links
4. **Build successfully**: Run `bundle exec jekyll build` with no errors
5. **Review your changes**: Use `git diff` to ensure only intended files changed

For questions or detailed contribution guidelines, see [contributing.md](contributing.md).

## Feedback and contributing

If you'd like to provide feedback on or contribute to the dev containers website, please feel free to open an issue or PR in this repo.

For issues on and contributions to the dev container specification itself, please visit the [Dev Containers Spec repo](https://github.com/devcontainers/spec).

## License

License for this repository: https://github.com/devcontainers/containers.dev/blob/gh-pages/LICENSE.
