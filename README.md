# Development Containers Website

This repo holds the website for the [Development Containers Specification](https://github.com/devcontainers/spec).

You may view the site at [containers.dev](https://containers.dev).

## Repository structure

| Path | Description |
|------|-------------|
| `_config.yml` | Jekyll site configuration (title, URL, plugins, collections, defaults) |
| `_data/` | Data files fetched at build time (devcontainer index, control manifest) |
| `_includes/` | Reusable HTML template fragments |
| `_layouts/` | Page layout templates |
| `_posts/` | Blog/guide posts (rendered under `/guide/`) |
| `_implementors/` | Implementor documentation collection |
| `css/` | Stylesheets (Sass/SCSS, compiled by Jekyll) |
| `js/` | Client-side JavaScript |
| `img/` | Images |
| `static/` | Static files served as-is (including fetched JSON data) |
| `Gemfile` / `Gemfile.lock` | Ruby gem dependencies |
| `.devcontainer/` | Dev container configuration |
| `.github/workflows/` | GitHub Actions CI/CD workflows |
| `.vscode/` | VS Code tasks and launch configurations |
| `.codesandbox/` | CodeSandbox environment configuration |

## Build tooling

The site is a static site built with [Jekyll](https://jekyllrb.com/) 3.9 and hosted on [GitHub Pages](https://pages.github.com/).

### Jekyll plugins

The following Jekyll plugins are included via the `Gemfile`:

| Plugin | Purpose |
|--------|---------|
| `github-pages` | GitHub Pages compatibility bundle (includes Jekyll 3.9, kramdown, rouge, and many other plugins) |
| `jemoji` | GitHub-style emoji support in Markdown |
| `jekyll-remote-theme` | Allows using a Jekyll theme hosted in a GitHub repository |
| `jekyll-feed` | Generates an Atom feed at `/feed.xml` |

### Markdown and syntax highlighting

- **Markdown parser**: [kramdown](https://kramdown.gettalong.org/) (configured in `_config.yml`)
- **Syntax highlighter**: [Rouge](https://rouge.jneen.net/)

### Data fetching with ORAS

Before building, the CI pipeline fetches live data from the [GitHub Container Registry](https://ghcr.io) using [ORAS](https://oras.land/) (OCI Registry As Storage):

- `ghcr.io/devcontainers/index:latest` → `_data/devcontainer-index.json` and `static/devcontainer-index.json`
- `ghcr.io/devcontainers/control-manifest:latest` → `_data/devcontainer-control-manifest.json` and `static/devcontainer-control-manifest.json`

This data powers the features, templates, and collections pages. When developing locally, you can run `.devcontainer/fetch-index.sh` to pull the latest data.

## Prerequisites (local setup)

To build the site locally without a dev container, you need:

- **Ruby** (version pinned in `Gemfile.lock`; currently 3.2.2 — run `ruby --version` to verify)
- **Bundler** (`gem install bundler`)
- **Node.js** (any current LTS version)

## Dev container (recommended)

The fastest way to get started is with the included [dev container](https://containers.dev/). It provides a fully pre-configured environment with Ruby, Jekyll, Bundler, and Node.js already installed — no manual setup required.

The configuration lives in [`.devcontainer/devcontainer.json`](.devcontainer/devcontainer.json). It is based on the [Jekyll Dev Container Template](https://github.com/devcontainers/templates/tree/main/src/jekyll) and uses the `mcr.microsoft.com/devcontainers/jekyll:1-bullseye` image with the Node.js dev container feature added.

The following ports are forwarded automatically inside the container:

| Port | Service |
|------|---------|
| 4000 | Jekyll development server |
| 35729 | LiveReload server |

### Steps

1. Clone or open this repo in a [dev container-supporting tool](https://containers.dev/supporting).
2. Reopen the repo in the dev container — the container will build automatically.
3. Once the container is ready, install dependencies (if not already installed):
   ```bash
   bundle install
   ```
4. Start the development server:
   ```bash
   bundle exec jekyll serve
   ```
5. Open the site at <http://localhost:4000/>.

## Local setup (without dev container)

1. Clone the repository.
2. Install Ruby gem dependencies:
   ```bash
   bundle install
   ```
3. Optionally, fetch the latest devcontainer index data:
   ```bash
   .devcontainer/fetch-index.sh
   ```
4. Start the development server:
   ```bash
   bundle exec jekyll serve
   ```
5. Open the site at <http://localhost:4000/>.

## Build and serve commands

| Command | Description |
|---------|-------------|
| `bundle exec jekyll build` | Build the site into `_site/` |
| `bundle exec jekyll serve` | Build and serve the site at <http://localhost:4000/> with automatic rebuilds on file changes |
| `bundle exec jekyll serve --livereload` | Same as above, plus automatic browser refresh via LiveReload (port 35729) |

## VS Code tasks

[`.vscode/tasks.json`](.vscode/tasks.json) defines two tasks, accessible from **Terminal → Run Task**:

| Task label | Command | Group |
|------------|---------|-------|
| **Serve** | `bundle exec jekyll serve --livereload` | Default test task (runs in background) |
| **Build** | `bundle exec jekyll build` | Default build task |

- Run the default build task with <kbd>Ctrl+Shift+B</kbd>.
- Run the default test task via **Terminal → Run Test Task**.

## CodeSandbox

[`.codesandbox/tasks.json`](.codesandbox/tasks.json) configures the project for [CodeSandbox](https://codesandbox.io/):

| Task | Command | Notes |
|------|---------|-------|
| Install dependencies | `bundle install` | Setup task; runs automatically on environment init |
| Serve | `bundle exec jekyll serve --host 0.0.0.0` | Starts automatically; preview on port 4000 |
| Typecheck | `solargraph typecheck` | Manual run |

## CI/CD pipeline

The GitHub Actions workflow in [`.github/workflows/publish.yml`](.github/workflows/publish.yml) builds and deploys the site to GitHub Pages.

### Triggers

| Event | Details |
|-------|---------|
| `push` | Runs on every push to the `gh-pages` branch |
| `workflow_dispatch` | Can be triggered manually from the Actions tab |
| `schedule` | Runs daily at 09:00 UTC to pick up updates to crawled Features and Templates data |

### Build job steps

1. **Checkout** — checks out the repository (`actions/checkout@v3`).
2. **Install ORAS** — downloads and installs the ORAS CLI.
3. **Fetch `devcontainer-control-manifest.json`** — pulls from `ghcr.io/devcontainers/control-manifest:latest` into `_data/` and copies to `static/`.
4. **Fetch `devcontainer-index.json`** — pulls from `ghcr.io/devcontainers/index:latest` into `_data/` and copies to `static/`.
5. **Setup Pages** — configures GitHub Pages metadata (`actions/configure-pages@v1`).
6. **Build with Jekyll** — builds the site from `./` into `./_site` (`actions/jekyll-build-pages@v1`).
7. **Upload artifact** — uploads the built site (`actions/upload-pages-artifact@v3`).

### Deploy job

After the build job succeeds, the deploy job publishes the artifact to GitHub Pages using `actions/deploy-pages@v4`. A `concurrency` group named `pages` ensures only one deployment runs at a time, cancelling any in-progress deployment when a new one starts.

## Feedback and contributing

If you'd like to provide feedback on or contribute to the dev containers website, please feel free to open an issue or PR in this repo.

For issues on and contributions to the dev container specification itself, please visit the [Dev Containers Spec repo](https://github.com/devcontainers/spec).

## License

License for this repository: https://github.com/devcontainers/containers.dev/blob/gh-pages/LICENSE.
