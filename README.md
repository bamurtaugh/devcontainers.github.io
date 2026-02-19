# Development Containers Website

This repo holds the website for the [Development Containers Specification](https://github.com/devcontainers/spec).

You may view the live site at [containers.dev](https://containers.dev).

The site is built with [Jekyll](https://jekyllrb.com/) and hosted on [GitHub Pages](https://pages.github.com/).

## Repository structure

| Path | Description |
|------|-------------|
| `_config.yml` | Jekyll site configuration (title, plugins, collections, etc.) |
| `_data/` | JSON data files used to populate site content (e.g. the Features/Templates index) |
| `_implementors/` | Markdown source for the "Implementors" documentation section |
| `_includes/` | Reusable HTML partials (navigation, footer, etc.) |
| `_layouts/` | Page layout templates |
| `_posts/` | Blog/guide posts |
| `css/` | Site stylesheets |
| `js/` | Site JavaScript |
| `img/` | Images |
| `static/` | Static files served as-is |
| `.devcontainer/` | Dev container configuration for one-click setup |
| `.github/workflows/` | GitHub Actions CI/CD workflows |

## Building

If you'd like to build and preview the site yourself, the easiest path is to use the included dev container.

### Prerequisites

To build the site you need:

- [Ruby](https://www.ruby-lang.org/) (version specified in `Gemfile`)
- [Bundler](https://bundler.io/) (`gem install bundler`)

The quickest way to get everything set up is to use the included dev container (see below), which comes with all dependencies pre-installed.

### Option 1: Dev container (recommended)

The [`.devcontainer`](.devcontainer) folder contains a ready-to-use configuration based on the [Jekyll Dev Container Template](https://github.com/devcontainers/templates/tree/main/src/jekyll). It includes Ruby, Bundler, Jekyll, and Node.js — no local installation required.

**Steps:**

1. Clone or open this repo in a dev container-supporting editor. You may review supporting tools and services [here](https://containers.dev/supporting).
2. Reopen the repo in the dev container so that the container builds and you can develop inside it.
3. Once the dev container finishes building, start the site:
   ```bash
   bundle exec jekyll serve
   ```
4. Open the site in your browser at http://localhost:4000/

For automatic page reloading as you edit, add the `--livereload` flag:

```bash
bundle exec jekyll serve --livereload
```

### Option 2: Local setup

If you prefer to work without Docker:

1. Install Ruby and Bundler.
2. Install gem dependencies:
   ```bash
   bundle install
   ```
3. Start the development server:
   ```bash
   bundle exec jekyll serve
   ```
4. Open the site in your browser at http://localhost:4000/

To produce a static build without serving (useful for checking for build errors):

```bash
bundle exec jekyll build
```

The compiled output is written to the `_site/` directory.

### VS Code tasks

If you are using VS Code, two tasks are pre-configured in [`.vscode/tasks.json`](.vscode/tasks.json):

| Task | Command | Description |
|------|---------|-------------|
| **Serve** | `bundle exec jekyll serve --livereload` | Start a dev server with live reload (default test task) |
| **Build** | `bundle exec jekyll build` | Produce a static build (default build task) |

Run them via **Terminal → Run Task…** or with the default keyboard shortcuts for "Run Test Task" and "Run Build Task".

## CI/CD

Deployment is handled automatically by the [publish workflow](.github/workflows/publish.yml), which:

- Triggers on every push to the `gh-pages` branch.
- Also runs on a daily schedule at 09:00 UTC to pick up updates to the crawled Features/Templates index.
- Can also be triggered manually via `workflow_dispatch`.
- Fetches the latest `devcontainer-index.json` and `devcontainer-control-manifest.json` artifacts using [ORAS](https://oras.land/).
- Builds the site with Jekyll and deploys it to GitHub Pages.

## Feedback and contributing

If you'd like to provide feedback on or contribute to the dev containers website, please feel free to open an issue or PR in this repo. See [contributing.md](contributing.md) for formatting guidelines and contribution tips.

For issues on and contributions to the dev container specification itself, please visit the [Dev Containers Spec repo](https://github.com/devcontainers/spec).

You are also welcome to join the [community Slack channel](https://aka.ms/dev-container-community) or start a conversation in [GitHub Discussions](https://github.com/devcontainers/spec/discussions).

## License

License for this repository: [LICENSE](LICENSE).
