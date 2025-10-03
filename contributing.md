# How to Contribute to the Dev Container Specification

We're excited for your contributions to the Dev Container Specification! This document outlines how you can get involved. We also welcome you to join our [community Slack channel](https://aka.ms/dev-container-community).

## How to file an issue

We welcome feedback and contributions via issues! When filing an issue, please:

1. **Search existing issues** to avoid duplicates
2. **Choose the right repository**: 
   - [devcontainers/spec](https://github.com/devcontainers/spec/issues) for specification changes or proposals
   - [devcontainers/cli](https://github.com/devcontainers/cli/issues) for CLI-specific issues
   - [devcontainers/features](https://github.com/devcontainers/features/issues) for issues with official Features
   - [devcontainers/templates](https://github.com/devcontainers/templates/issues) for issues with official Templates
   - Tool-specific repos (like VS Code Dev Containers) for tool-specific issues
3. **Provide clear information**: Include steps to reproduce, expected vs. actual behavior, and relevant configuration details
4. **Label appropriately** (if you have permissions) - see the [Review process](#review-process) section below

If you're new to contributing and looking for a place to start, check for issues labeled `good first issue` in the relevant repositories!

## Spec contribution approaches

If you'd like to contribute a change or addition to the spec, you may follow the guidance below:
- Propose the change via an [issue](https://github.com/devcontainers/spec/issues) in this repository. Try to get early feedback before spending too much effort formalizing it.
- More formally document the proposed change in terms of properties and their semantics. Look to format your proposal like our [devcontainer.json reference](https://aka.ms/devcontainer.json).

Here is a sample:

| Property | Type | Description |
|----------|------|-------------|
| `image` | string | **Required** when [using an image](/docs/remote/create-dev-container.md#using-an-image-or-dockerfile). The name of an image in a container registry ([DockerHub](https://hub.docker.com), [GitHub Container Registry](https://docs.github.com/packages/guides/about-github-container-registry), [Azure Container Registry](https://azure.microsoft.com/services/container-registry/)) that VS Code and other `devcontainer.json` supporting services / tools should use to create the dev container. |

- PRs to the [schema](https://github.com/microsoft/vscode/blob/main/extensions/configuration-editing/schemas/devContainer.schema.src.json), i.e code or shell scripts demonstrating approaches for implementation.

Once there is discussion on your proposal, please also open and link a PR to update the [devcontainer.json reference doc](https://aka.ms/devcontainer.json). When your proposal is merged, the docs will be kept up-to-date with the latest spec.

### Contributing tool-specific support

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

## Formatting Guidelines

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

## Review process

We use the following [labels](https://github.com/devcontainers/spec/labels) in the spec repo:

- `proposal`: Issues under discussion, still collecting feedback.
- `finalization`: Proposals we intend to make part of the spec.
- `documentation`: Improvements or additions to documentation.
- `question`: Further information is requested.
- `good first issue`: Good for newcomers - we welcome your contributions!
- `help wanted`: Extra attention is needed from the community.
- `bug`: Something isn't working as expected.
- `enhancement`: New feature or request.

[Milestones](https://github.com/devcontainers/spec/milestones) use a "month year" pattern (i.e. January 2022). If a finalized proposal is added to a milestone, it is intended to be merged during that milestone.

## Community Engagement
There are several additional options to engage with the dev container community, such as asking questions, providing feedback, or engaging on how your team may use or contribute to dev containers:
- [GitHub Discussions](https://github.com/devcontainers/spec/discussions): This is a great opportunity to connect with the community and maintainers of this project, without the requirement of contributing a change to the actual spec (which we see more in issues and PRs)
- [Community Slack channel](https://aka.ms/dev-container-community): This is a great opportunity to connect with the community and maintainers
- You can always check out the issues and PRs (and contribute new ones) across the repos in the [Dev Containers GitHub org](https://github.com/devcontainers) too!
- Community collections: You can contribute your own [Templates](https://containers.dev/implementors/templates-distribution/#distribution) and [Features](https://containers.dev/implementors/features-distribution/#distribution) to our [community index](https://containers.dev/collections)!

## Publishing Features and Templates

If you'd like to create and share your own Features or Templates with the community, we provide comprehensive guides:

### Publishing Features
- **Quick start**: Check out our [feature-starter repository](https://github.com/devcontainers/feature-starter) for a template you can use
- **Step-by-step guide**: See our [Authoring a Dev Container Feature guide](/guide/author-a-feature) for a complete walkthrough
- **Detailed specification**: Review the [Features distribution specification](/implementors/features-distribution) for technical details
- **Publishing tools**: Use the [Dev Container CLI](https://github.com/devcontainers/cli) (`devcontainer features publish`) or the [Dev Container Publish GitHub Action](https://github.com/marketplace/actions/dev-container-publish)
- **Add to index**: Once published, you can add your Features to the [community index](/features) by opening a PR to modify [collection-index.yml](https://github.com/devcontainers/devcontainers.github.io/blob/gh-pages/_data/collection-index.yml)

### Publishing Templates
- **Quick start**: Check out our [template-starter repository](https://github.com/devcontainers/template-starter) for a template you can use
- **Detailed specification**: Review the [Templates distribution specification](/implementors/templates-distribution) for technical details
- **Publishing tools**: Use the [Dev Container CLI](https://github.com/devcontainers/cli) (`devcontainer templates publish`) or the [Dev Container Publish GitHub Action](https://github.com/marketplace/actions/dev-container-publish)
- **Add to index**: Once published, you can add your Templates to the [community index](/templates) by opening a PR to modify [collection-index.yml](https://github.com/devcontainers/devcontainers.github.io/blob/gh-pages/_data/collection-index.yml)

> **Note**: Both Features and Templates are published as OCI artifacts to container registries (like GitHub Container Registry). By default, GHCR packages are private. To make them publicly available (and stay within the free tier), you'll need to change the package visibility to `public` in your registry settings.