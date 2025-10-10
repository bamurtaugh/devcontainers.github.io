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

## Contributing

### Website contributions

If you'd like to provide feedback on or contribute to the dev containers website, please feel free to open an issue or PR in this repo.

### Spec contributions

For issues on and contributions to the dev container specification itself, please visit the [Dev Containers Spec repo](https://github.com/devcontainers/spec).

We're excited for your contributions to the Dev Container Specification! This document outlines how you can get involved. We also welcome you to join our [community Slack channel](https://aka.ms/dev-container-community).

#### Spec contribution approaches

If you'd like to contribute a change or addition to the spec, you may follow the guidance below:
- Propose the change via an [issue](https://github.com/devcontainers/spec/issues) in this repository. Try to get early feedback before spending too much effort formalizing it.
- More formally document the proposed change in terms of properties and their semantics. Look to format your proposal like our [devcontainer.json reference](https://aka.ms/devcontainer.json).

Here is a sample:

| Property | Type | Description |
|----------|------|-------------|
| `image` | string | **Required** when [using an image](/docs/remote/create-dev-container.md#using-an-image-or-dockerfile). The name of an image in a container registry ([DockerHub](https://hub.docker.com), [GitHub Container Registry](https://docs.github.com/packages/guides/about-github-container-registry), [Azure Container Registry](https://azure.microsoft.com/services/container-registry/)) that VS Code and other `devcontainer.json` supporting services / tools should use to create the dev container. |

- PRs to the [schema](https://github.com/microsoft/vscode/blob/main/extensions/configuration-editing/schemas/devContainer.schema.src.json), i.e code or shell scripts demonstrating approaches for implementation.

Once there is discussion on your proposal, please also open and link a PR to update the [devcontainer.json reference doc](https://aka.ms/devcontainer.json). When your proposal is merged, the docs will be kept up-to-date with the latest spec.

##### Contributing tool-specific support

Tool-specific properties are contained in namespaces in the `"customizations"` property. For instance, VS Code specific properties are formated as:

```bash
// Configure tool-specific properties.
"customizations": {
     // Configure properties specific to VS Code.
     "vscode": {
          // Set *default* container specific settings.json values on container create.
          "settings": {},
			
          // Additional VS Code specific properties...
     }
},
```

You may propose adding a new namespace for a specific tool, and any properties specific to that tool.

#### Formatting Guidelines

When contributing an official doc or referencing dev containers in your projects, please consider the following guidelines:

- Refer to the spec as the "Development Container Specification"
     - All capital letters
     - Singular "Container" rather than plural "Containers"
- The term "dev container" shouldn't be capitalized on its own
     - It should only be capitalized when referring to an official tool title, like the VS Code Dev Containers extension 
- Signify `devcontainer.json` is a file type through backticks 
- Features and Templates should always be capitalized
- Refer to the CLI as the "Dev Container CLI" (note the caps)
- Use bolding for emphasis sprinkled throughout sections, rather than try to use it to always bold certain terms

#### Review process

We use the following [labels](https://github.com/devcontainers/spec/labels) in the spec repo:

- `proposal`: Issues under discussion, still collecting feedback.
- `finalization`: Proposals we intend to make part of the spec.

[Milestones](https://github.com/devcontainers/spec/milestones) use a "month year" pattern (i.e. January 2022). If a finalized proposal is added to a milestone, it is intended to be merged during that milestone.

#### Community Engagement

There are several additional options to engage with the dev container community, such as asking questions, providing feedback, or engaging on how your team may use or contribute to dev containers:
- [GitHub Discussions](https://github.com/devcontainers/spec/discussions): This is a great opportunity to connect with the community and maintainers of this project, without the requirement of contributing a change to the actual spec (which we see more in issues and PRs)
- [Community Slack channel](https://aka.ms/dev-container-community): This is a great opportunity to connect with the community and maintainers
- You can always check out the issues and PRs (and contribute new ones) across the repos in the [Dev Containers GitHub org](https://github.com/devcontainers) too!
- Community collections: You can contribute your own [Templates](https://containers.dev/implementors/templates-distribution/#distribution) and [Features](https://containers.dev/implementors/features-distribution/#distribution) to our [community index](https://containers.dev/collections)!

## License

License for this repository: https://github.com/devcontainers/containers.dev/blob/gh-pages/LICENSE.
