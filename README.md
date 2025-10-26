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

**Every code change should be tested before committing.**

### Local Testing Process

Follow these steps to test your changes locally:

1. **Start the Jekyll server**: 
   - Run the VS Code task "Serve" (default test task), or
   - Execute `bundle exec jekyll serve --livereload` in the terminal
   
2. **View the site**: Navigate to `http://localhost:4000/` in a browser

3. **Verify your changes**: 
   - Check that your changes render correctly
   - Verify formatting, layout, and content appear as expected
   
4. **Check links**: 
   - Ensure all internal links work correctly
   - Test any new or modified links
   
5. **Validate navigation** (if applicable): 
   - Confirm new pages appear in navigation if expected
   - Check that navigation menu items work correctly

### Available Commands

- **Serve with live reload**: `bundle exec jekyll serve --livereload`
  - Starts dev server with automatic browser refresh on file changes
  - Access site at `http://localhost:4000/`
  
- **Build only**: `bundle exec jekyll build`
  - Generates static site files in the `_site/` directory
  - Useful for checking build errors without running a server

### VS Code Tasks

If using VS Code, the following tasks are pre-configured in `.vscode/tasks.json`:

- **Serve** (default test task): Runs Jekyll with live reload
- **Build** (default build task): Builds the static site

You can run these via:
- Command Palette: `Tasks: Run Task`
- Keyboard shortcut: `Ctrl+Shift+B` (Build) or `Ctrl+Shift+T` (Test)

## Feedback and contributing

If you'd like to provide feedback on or contribute to the dev containers website, please feel free to open an issue or PR in this repo.

For issues on and contributions to the dev container specification itself, please visit the [Dev Containers Spec repo](https://github.com/devcontainers/spec).

## License

License for this repository: https://github.com/devcontainers/containers.dev/blob/gh-pages/LICENSE.
