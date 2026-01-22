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

## Site Pages

This site includes the following pages:

### Main Pages

* **Home** (`index.html`) - Landing page introducing development containers with links to key resources
* **Overview** (`overview.md`) - Detailed explanation of what development containers are and how they work
* **Features** (`features.html`) - Searchable table of all available Dev Container Features from official and community collections
* **Templates** (`templates.html`) - Searchable table of all available Dev Container Templates from official and community collections
* **Collections** (`collections.html`) - List of official and community-contributed dev container asset collections
* **Guides** (`guides.html`) - Collection of blog posts and guides about dev containers
* **Supporting Tools** (`supporting.md`) - Documentation of tools and services that support the Dev Container Specification
* **Contributing** (`contributing.md`) - Guidelines for contributing to the Dev Container Specification
* **404** (`404.html`) - Custom 404 error page

### Specification Pages

The `_implementors/` directory contains the technical specification documentation:

* `spec.md` - Core development container specification
* `json_reference.md` - Complete devcontainer.json reference documentation
* `json_schema.md` - JSON schema documentation
* `features.md` - Dev Container Features specification
* `features-distribution.md` - Features distribution documentation
* `templates.md` - Dev Container Templates specification
* `templates-distribution.md` - Templates distribution documentation
* `reference.md` - Additional reference documentation
* `contributing.md` - Contribution guidelines specific to the spec

## Testing Your Changes

### Local Testing

1. **Start the dev container** - Open this repository in a dev container-supporting tool (VS Code with Dev Containers extension, GitHub Codespaces, etc.)

2. **Install dependencies** (if not already installed):
   ```bash
   bundle install
   ```

3. **Run the Jekyll server**:
   ```bash
   bundle exec jekyll serve
   ```

4. **View the site** - Open your browser to http://localhost:4000/containers.dev/

5. **Make changes** - Edit any `.md` or `.html` files. Jekyll will automatically rebuild the site when you save changes.

6. **Test your changes**:
   * Navigate to all pages to ensure they render correctly
   * Check that links work properly
   * Test the search functionality on Features, Templates, and Collections pages
   * Verify responsive design on different screen sizes
   * Check for any console errors in the browser developer tools

### What to Test

* **Navigation** - Ensure all navigation links work and point to the correct pages
* **Content** - Verify that your changes display correctly
* **Layouts** - Check that pages use the correct layouts (default, singlePage, table, etc.)
* **Data files** - If modifying `_data/` files, ensure the data is displayed correctly on the relevant pages
* **Markdown rendering** - Verify that markdown content renders properly
* **Images and assets** - Ensure images and other assets load correctly from the `img/`, `css/`, and `js/` directories

## Feedback and contributing

If you'd like to provide feedback on or contribute to the dev containers website, please feel free to open an issue or PR in this repo.

For issues on and contributions to the dev container specification itself, please visit the [Dev Containers Spec repo](https://github.com/devcontainers/spec).

## License

License for this repository: https://github.com/devcontainers/containers.dev/blob/gh-pages/LICENSE.
