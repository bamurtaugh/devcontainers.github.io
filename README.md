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

We welcome contributions to the dev containers website! Whether you're fixing a typo, improving documentation, or adding new content, your help is appreciated.

### Contributing Best Practices

#### Opening Issues

- **Search existing issues** before creating a new one to avoid duplicates
- **Provide clear descriptions** with specific details about what you'd like to see changed or improved
- **Include context** such as which page or section you're referring to
- **Add screenshots** if reporting visual or layout issues

#### Submitting Pull Requests

- **Keep changes focused**: Each PR should address a single concern or feature
- **Test your changes locally**: Build and preview the site using the dev container (see [Building](#building) section above)
- **Follow existing patterns**: Match the style and structure of existing content
- **Write clear commit messages**: Describe what changed and why
- **Link related issues**: Reference any issues your PR addresses

#### Content Guidelines

- **Use clear, concise language**: Keep explanations simple and easy to follow
- **Follow formatting guidelines**: Refer to our [contributing.md](contributing.md) for formatting standards
- **Validate links**: Ensure all links work correctly and point to the right resources
- **Check spelling and grammar**: Proofread your content before submitting

#### Testing Your Changes

Before submitting a PR, please:
1. Build the site locally using `bundle exec jekyll serve`
2. Preview your changes at http://localhost:4000/containers.dev/
3. Test any links you've added or modified
4. Verify the site renders correctly in your browser

For more detailed contribution guidelines related to the dev container specification itself, please visit the [Dev Containers Spec repo](https://github.com/devcontainers/spec) or review our [contributing.md](contributing.md).

## License

License for this repository: https://github.com/devcontainers/containers.dev/blob/gh-pages/LICENSE.
