# Development Containers Website

This repo holds the website for the [Development Containers Specification](https://github.com/devcontainers/spec).

You may view the site at [containers.dev](https://containers.dev).

## Building

If you'd like to build and preview the site yourself, we make it as smooth as possible through a dev container in this repo!

### Dev container

You may build GitHub Pages sites with [Jekyll](https://jekyllrb.com/), which is a Ruby gem. You could manually install these tools on your machine, or you can easily get started with the setup you already need through a dev container!

You may review this repo's dev container in the [`.devcontainer`](https://github.com/devcontainers/containers.dev/tree/gh-pages/.devcontainer) folder.

It is from this [Jekyll Dev Container Template](https://github.com/devcontainers/templates/tree/main/src/jekyll).

### Steps to build and run

* Clone or open this repo in the dev container-supporting editor of your choosing.
     * You may review supporting tools and services [here](https://containers.dev/supporting).
* Reopen this repo in the dev container, so that the container builds and you may develop inside it using the included tools. 
* Once the dev container finishes building, execute the following command in your dev container to start the site: `bundle exec jekyll serve`
* Check out the site! http://localhost:4000/containers.dev/

## Testing

### Building the site

To verify that the site builds without errors, run:

```
bundle exec jekyll build
```

This outputs the generated site to the `_site` directory and will surface any build errors, such as invalid Liquid syntax or missing includes.

### Previewing the site locally

To start a local server with live reload, run:

```
bundle exec jekyll serve --livereload
```

This serves the site at [http://localhost:4000/](http://localhost:4000/) and automatically refreshes the page in your browser when you make changes to the source files.

### VS Code tasks

If you're using VS Code (recommended through the included dev container), two tasks are preconfigured in `.vscode/tasks.json`:

* **Serve** (default test task) – Runs `bundle exec jekyll serve --livereload` in the background. You can launch it via **Terminal > Run Test Task**.
* **Build** (default build task) – Runs `bundle exec jekyll build`. You can launch it via **Terminal > Run Build Task**.

### CI/CD pipeline

The [publish workflow](.github/workflows/publish.yml) automatically builds and deploys the site to GitHub Pages on every push to the `gh-pages` branch. It also runs on a daily schedule to pick up updates to the crawled Dev Container Features index. You can manually trigger a deploy via `workflow_dispatch` as well.

## Feedback and contributing

If you'd like to provide feedback on or contribute to the dev containers website, please feel free to open an issue or PR in this repo.

For issues on and contributions to the dev container specification itself, please visit the [Dev Containers Spec repo](https://github.com/devcontainers/spec).

## License

License for this repository: https://github.com/devcontainers/containers.dev/blob/gh-pages/LICENSE.
