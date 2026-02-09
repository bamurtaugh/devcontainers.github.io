# Development Containers Website

This repo holds the website for the [Development Containers Specification](https://github.com/devcontainers/spec).

You may view the site at [containers.dev](https://containers.dev).

## Table of Contents

- [Quick Start](#quick-start)
- [Prerequisites](#prerequisites)
- [Development Setup](#development-setup)
- [Testing Your Changes](#testing-your-changes)
- [Building the Site](#building-the-site)
- [Troubleshooting](#troubleshooting)
- [Contributing](#feedback-and-contributing)

## Quick Start

The fastest way to get started is using a dev container:

1. Clone this repository
2. Open in VS Code or another dev container-supporting tool
3. Reopen in the dev container when prompted
4. Run `bundle exec jekyll serve` in the terminal
5. Visit http://localhost:4000/containers.dev/

## Prerequisites

### Option 1: Dev Container (Recommended)

- Docker or compatible container runtime
- VS Code with the Dev Containers extension, or another [supporting tool](https://containers.dev/supporting)

### Option 2: Local Development

- Ruby (version specified in `.ruby-version` or Gemfile)
- Bundler (`gem install bundler`)
- Jekyll and dependencies (installed via Bundler)

## Development Setup

### Using Dev Containers (Recommended)

This repository includes a complete dev container configuration based on the [Jekyll Dev Container Template](https://github.com/devcontainers/templates/tree/main/src/jekyll).

**Setup steps:**

1. Clone this repository to your local machine
2. Open the folder in VS Code or your preferred dev container-supporting editor
3. When prompted, click "Reopen in Container" (or run the "Dev Containers: Reopen in Container" command)
4. Wait for the container to build and initialize
5. The development environment is now ready with all dependencies installed

**What's included in the dev container:**

- Jekyll and Ruby environment
- Node.js (for additional tooling)
- Bundler with all gem dependencies pre-installed
- Port forwarding for local preview (4000 for Jekyll, 35729 for live reload)

### Local Development Setup

If you prefer to develop locally without containers:

1. Install Ruby (check Gemfile for required version)
2. Install Bundler: `gem install bundler`
3. Install project dependencies: `bundle install`
4. You're ready to build and serve the site

## Testing Your Changes

### Running the Development Server

Start the local development server with live reload:

```bash
bundle exec jekyll serve --livereload
```

The site will be available at http://localhost:4000/containers.dev/

**What to verify:**

- [ ] Pages render correctly without errors
- [ ] Navigation links work properly
- [ ] Images and assets load correctly
- [ ] CSS styling appears as expected
- [ ] Changes auto-reload when you edit files (with `--livereload`)

### Running Without Live Reload

For a simpler development server without auto-reload:

```bash
bundle exec jekyll serve
```

### Testing Specific Pages

After starting the server, navigate to specific pages to verify your changes:

- Homepage: http://localhost:4000/containers.dev/
- Features: http://localhost:4000/containers.dev/features
- Templates: http://localhost:4000/containers.dev/templates
- Collections: http://localhost:4000/containers.dev/collections

### Verifying Build Output

Check that the site builds without errors:

```bash
bundle exec jekyll build
```

This generates the static site in the `_site` directory. Review the console output for any warnings or errors.

**Common things to check:**

- No build warnings or errors in terminal output
- Generated HTML files exist in `_site/` directory
- Asset files (CSS, JS, images) are copied to `_site/`

## Building the Site

### Development Build

```bash
bundle exec jekyll build
```

Output is generated in the `_site` directory.

### Production Build

The site is automatically built and deployed via GitHub Actions when changes are pushed to the `gh-pages` branch. See `.github/workflows/publish.yml` for the complete workflow.

**The automated build process:**

1. Fetches the latest devcontainer control manifest and index
2. Builds the site using Jekyll
3. Deploys to GitHub Pages
4. Runs daily at 9:00 AM UTC to pull updated Features

### Testing the Production Build Locally

To simulate the production build environment:

```bash
JEKYLL_ENV=production bundle exec jekyll build
```

## Troubleshooting

### Port Already in Use

If you see "Address already in use" errors:

```bash
# Find the process using port 4000
lsof -i :4000

# Kill the process (replace PID with actual process ID)
kill -9 PID
```

Or specify a different port:

```bash
bundle exec jekyll serve --port 4001
```

### Bundle Install Fails

If `bundle install` fails, try:

```bash
# Update bundler
gem update bundler

# Clear bundle cache
bundle clean --force

# Reinstall
bundle install
```

### Dev Container Won't Build

If the dev container fails to build:

1. Check Docker is running and has sufficient resources
2. Try rebuilding without cache: "Dev Containers: Rebuild Without Cache"
3. Check the devcontainer.json configuration is valid
4. Review the container build logs for specific errors

### Changes Not Appearing

If your changes don't show up:

1. Stop the Jekyll server (Ctrl+C)
2. Clear the Jekyll cache: `bundle exec jekyll clean`
3. Restart the server: `bundle exec jekyll serve --livereload`
4. Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)

### CSS or JavaScript Not Loading

Ensure asset paths are correct. Jekyll serves from `/containers.dev/` subdirectory:

- Correct: `/containers.dev/css/style.css`
- Incorrect: `/css/style.css`

## Feedback and contributing

If you'd like to provide feedback on or contribute to the dev containers website, please feel free to open an issue or PR in this repo.

For issues on and contributions to the dev container specification itself, please visit the [Dev Containers Spec repo](https://github.com/devcontainers/spec).

## License

License for this repository: https://github.com/devcontainers/containers.dev/blob/gh-pages/LICENSE.
