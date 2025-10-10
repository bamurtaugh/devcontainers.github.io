---
title: Glossary
layout: singlePage
sectionid: glossary
---

## <a href="#glossary" name="glossary" class="anchor"> Development Container Glossary </a>

This page provides definitions of key terms used in the Development Container Specification and ecosystem.

### <a href="#dev-container" name="dev-container" class="anchor"> Dev Container </a>

A development container (or dev container for short) is a container that provides a full-featured development environment. It can be used to run an application, separate tools, libraries, or runtimes needed for working with a codebase, and aid in continuous integration and testing.

### <a href="#devcontainer-json" name="devcontainer-json" class="anchor"> devcontainer.json </a>

A structured JSON with Comments (jsonc) metadata format that tools can use to store configuration required to develop inside of local or cloud-based containerized environments. This is the primary configuration file for dev containers.

### <a href="#features" name="features" class="anchor"> Features </a>

Reusable chunks of metadata and install scripts that can be referenced in a `devcontainer.json` to quickly add tools, runtimes, or libraries to a dev container. Features enable developers to share and reuse common setup steps.

### <a href="#templates" name="templates" class="anchor"> Templates </a>

Pre-configured dev container definitions that provide starting points for different technology stacks and development scenarios. Templates help developers quickly bootstrap new projects with appropriate development environments.

### <a href="#lifecycle-scripts" name="lifecycle-scripts" class="anchor"> Lifecycle Scripts </a>

Scripts that run at specific points during the dev container lifecycle, such as `postCreateCommand`, `postStartCommand`, and `postAttachCommand`. These allow customization of the container setup process.

### <a href="#image-metadata" name="image-metadata" class="anchor"> Image Metadata </a>

Development container metadata that can be stored in container image labels, providing an alternative to storing configuration in `devcontainer.json` files.

### <a href="#collections" name="collections" class="anchor"> Collections </a>

Repositories that contain multiple Features and/or Templates that are published together and can be consumed by dev container supporting tools.

### <a href="#specification" name="specification" class="anchor"> Development Container Specification </a>

The formal specification that defines the structure and semantics of development container metadata, including the `devcontainer.json` format, Features, Templates, and image metadata.

### <a href="#orchestration" name="orchestration" class="anchor"> Orchestration </a>

The method used to create and manage dev containers, such as Docker Compose or direct Docker commands. The spec supports multiple orchestration options.

### <a href="#workspace-folder" name="workspace-folder" class="anchor"> Workspace Folder </a>

The primary folder where source code is located within a dev container. This is typically set via the `workspaceFolder` property in `devcontainer.json`.
