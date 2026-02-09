# Development Containers Website

This repo holds the website for the [Development Containers Specification](https://github.com/devcontainers/spec).

You may view the site at [containers.dev](https://containers.dev).

## Prerequisites

This is a [Jekyll](https://jekyllrb.com/) static site, which requires:
- Ruby (version specified in `.ruby-version` or Gemfile)
- Bundler gem (`gem install bundler`)
- Jekyll and dependencies (installed via `bundle install`)

**Recommended**: Use the included dev container to avoid manual setup.

## Testing Your Changes

### Option 1: Using Dev Container (Recommended)

The dev container provides a pre-configured environment with all necessary dependencies.

1. **Open in a dev container-supporting tool**:
   - VS Code with the Dev Containers extension
   - GitHub Codespaces
   - Or any tool from [containers.dev/supporting](https://containers.dev/supporting)

2. **Reopen in container**: 
   - VS Code: Use command palette → "Dev Containers: Reopen in Container"
   - The container will build automatically using the config in [`.devcontainer`](https://github.com/devcontainers/containers.dev/tree/gh-pages/.devcontainer)

3. **Start the development server**:
   ```bash
   bundle exec jekyll serve
   ```
   
4. **Preview your changes**: Open http://localhost:4000/containers.dev/ in your browser

5. **Enable live reload** (optional):
   ```bash
   bundle exec jekyll serve --livereload
   ```
   Your browser will automatically refresh when you save changes.

### Option 2: Local Setup (Without Dev Container)

If you prefer working directly on your machine:

1. **Install Ruby**: Follow the [official Ruby installation guide](https://www.ruby-lang.org/en/documentation/installation/)

2. **Install Bundler**:
   ```bash
   gem install bundler
   ```

3. **Install project dependencies**:
   ```bash
   bundle install
   ```

4. **Serve the site locally**:
   ```bash
   bundle exec jekyll serve
   ```

5. **Access the site**: Open http://localhost:4000/containers.dev/ in your browser

### Verifying Your Changes

After making modifications, verify them by:

1. **Visual inspection**: Browse the affected pages at http://localhost:4000/containers.dev/
2. **Check for errors**: Monitor the terminal output for Jekyll build warnings or errors
3. **Test all links**: Click through navigation and internal links to ensure nothing is broken
4. **Review responsive design**: Test on different screen sizes if you modified layouts or styles
5. **Build without errors**:
   ```bash
   bundle exec jekyll build
   ```
   This generates the static site in `_site/` and validates that everything compiles correctly.

## Troubleshooting

**Port already in use**:
```bash
# Find and kill the process using port 4000
lsof -ti:4000 | xargs kill -9
```

**Bundler version mismatch**:
```bash
bundle update --bundler
```

**Gem installation failures**: Ensure you have the necessary build tools installed:
- macOS: `xcode-select --install`
- Ubuntu/Debian: `sudo apt-get install build-essential`
- Windows: Use [RubyInstaller with DevKit](https://rubyinstaller.org/)

**Changes not appearing**: 
- Try clearing Jekyll's cache: `bundle exec jekyll clean`
- Force a rebuild: `bundle exec jekyll serve --force_polling`

## Feedback and contributing

If you'd like to provide feedback on or contribute to the dev containers website, please feel free to open an issue or PR in this repo.

For issues on and contributions to the dev container specification itself, please visit the [Dev Containers Spec repo](https://github.com/devcontainers/spec).

## License

License for this repository: https://github.com/devcontainers/containers.dev/blob/gh-pages/LICENSE.
