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

## Feedback and contributing

If you'd like to provide feedback on or contribute to the dev containers website, please feel free to open an issue or PR in this repo.

For issues on and contributions to the dev container specification itself, please visit the [Dev Containers Spec repo](https://github.com/devcontainers/spec).

### Good first issues

If you're looking to contribute to this website and aren't sure where to start, here are some examples of good first issues based on the [spec overview](https://containers.dev/implementors/spec):

#### Documentation improvements
- **Add examples for lifecycle scripts**: The spec describes various [lifecycle scripts](https://containers.dev/implementors/json_reference/#lifecycle-scripts) like `onCreateCommand`, `postCreateCommand`, `postStartCommand`, and `postAttachCommand`. Add practical examples showing how to use these scripts for common scenarios (installing dependencies, starting services, etc.).
- **Clarify Feature vs Template usage**: Create a guide or comparison table that helps users understand when to use [Features](https://containers.dev/implementors/features) vs [Templates](https://containers.dev/implementors/templates), with real-world use cases.
- **Expand environment variables documentation**: Add more examples showing how to use `remoteEnv` and `containerEnv` properties in different scenarios (accessing secrets, setting up paths, configuring tools).

#### Content additions
- **Create a "Common Patterns" guide**: Document common dev container patterns such as:
  - Setting up multi-container environments with Docker Compose
  - Configuring workspace mounts and folder structures
  - Managing user permissions with `remoteUser` and `containerUser`
- **Add troubleshooting section**: Create a troubleshooting guide for common issues developers face when setting up dev containers (port conflicts, permission issues, image build failures).
- **Document parallel lifecycle script execution**: The spec supports [parallel execution of lifecycle scripts](https://containers.dev/implementors/spec/#parallel-exec) using object notation. Add examples and use cases for this feature.

#### Website improvements
- **Improve navigation**: Enhance the website navigation to make it easier to find specific properties or features in the spec.
- **Add search functionality**: Implement or improve search to help users quickly find relevant documentation.
- **Create interactive examples**: Add interactive code samples or a playground where users can test devcontainer.json configurations.

#### Formatting and consistency
- **Apply formatting guidelines**: Review existing documentation against the [formatting guidelines](https://containers.dev/implementors/contributing/#formatting-guidelines) and fix any inconsistencies (proper capitalization of "Development Container Specification", Features, Templates, etc.).
- **Fix broken links**: Check for and update any broken or outdated links throughout the documentation.
- **Improve code sample formatting**: Ensure all JSON examples follow consistent formatting and include helpful comments.

When tackling any of these issues, remember to:
- Check the [contributing guidelines](https://containers.dev/implementors/contributing) first
- Look for similar existing content to maintain consistency
- Test any code examples you add
- Keep changes focused and well-documented

## License

License for this repository: https://github.com/devcontainers/containers.dev/blob/gh-pages/LICENSE.
