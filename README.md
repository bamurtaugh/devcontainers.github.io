# Development Containers Website

This repo holds the website for the [Development Containers Specification](https://github.com/devcontainers/spec).

You may view the site at [containers.dev](https://containers.dev).

## Development Setup

This website uses Jekyll, a static site generator that powers GitHub Pages. You have two options for setting up your development environment.

### Option 1: Using a Dev Container (Recommended)

The simplest way to get started is using the included dev container, which provides all necessary tools pre-configured.

**What you'll need:**
- A dev container supporting tool ([VS Code with Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers), [GitHub Codespaces](https://github.com/features/codespaces), etc.)
- See the full list of [supporting tools](https://containers.dev/supporting)

**Getting started:**
1. Clone this repository to your local machine or open it in GitHub Codespaces
2. When prompted, reopen the folder in the dev container
3. Wait for the container to build (this downloads and configures Ruby, Jekyll, and all dependencies)
4. You're ready to go! The dev container configuration is in [`.devcontainer/devcontainer.json`](.devcontainer/devcontainer.json)

### Option 2: Local Installation

If you prefer working directly on your machine without containers:

**What you'll need:**
- Ruby (version 2.5 or higher recommended)
- Bundler gem manager
- Git

**Installation steps:**
1. Install Ruby on your system (visit [ruby-lang.org](https://www.ruby-lang.org/en/documentation/installation/))
2. Install Bundler: `gem install bundler`
3. Clone this repository
4. Navigate to the project directory
5. Run `bundle install` to install all Ruby dependencies listed in the `Gemfile`

## Testing Your Changes

### Running the Development Server

To preview the website locally with your changes:

```bash
bundle exec jekyll serve
```

This command:
- Builds the complete static site from source files
- Starts a local web server on port 4000
- Watches for file changes and rebuilds automatically
- Serves the site at: **http://localhost:4000/containers.dev/**

**Note:** The `/containers.dev/` path in the URL is important due to the site's baseurl configuration.

### Running with Live Reload

For a better development experience with automatic browser refresh:

```bash
bundle exec jekyll serve --livereload
```

This adds live browser reloading whenever you save changes to files. The livereload server runs on port 35729.

### Building Without Serving

To generate the static site files without starting a server:

```bash
bundle exec jekyll build
```

This creates a `_site` directory containing the compiled static website. Useful for:
- Verifying the build completes without errors
- Inspecting generated HTML output
- Preparing for deployment

### What to Test

When making changes, verify:

1. **The site builds successfully** - No errors in the console output
2. **Your pages render correctly** - Check formatting, links, and layout
3. **Navigation works** - Verify menu links and page transitions
4. **Images display properly** - Confirm paths and rendering
5. **Mobile responsiveness** - Test different viewport sizes
6. **Cross-browser compatibility** - Check in multiple browsers if possible

### Troubleshooting

**Port already in use:**
If you see "Address already in use" errors, another Jekyll server may be running. Find and stop it, or use a different port:
```bash
bundle exec jekyll serve --port 4001
```

**Bundle install fails:**
Ensure you have the correct Ruby version installed. Check `Gemfile` for version requirements.

**Changes not appearing:**
- Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
- Check the console for build errors
- Restart the Jekyll server
- Some changes (like `_config.yml` modifications) require a server restart

## Feedback and contributing

If you'd like to provide feedback on or contribute to the dev containers website, please feel free to open an issue or PR in this repo.

For issues on and contributions to the dev container specification itself, please visit the [Dev Containers Spec repo](https://github.com/devcontainers/spec).

## License

License for this repository: https://github.com/devcontainers/containers.dev/blob/gh-pages/LICENSE.
