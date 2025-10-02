---
title: Glossary
layout: singlePage
sectionid: glossary
---

## <a href="#glossary" name="glossary" class="anchor"> Development Container Glossary </a>

This glossary provides definitions for the most commonly used terms in the Development Container Specification.

### <a href="#development-container" name="development-container" class="anchor"> Development Container </a>

A container in which a user can develop an application. Development containers provide a consistent, reproducible development environment that includes all the tools, libraries, and dependencies needed for development.

### <a href="#devcontainer-json" name="devcontainer-json" class="anchor"> devcontainer.json </a>

A JSON with Comments (jsonc) metadata file that contains configuration for creating and customizing a development container. This file can be located at `.devcontainer/devcontainer.json`, `.devcontainer.json`, or `.devcontainer/<folder>/devcontainer.json`.

### <a href="#environment" name="environment" class="anchor"> Environment </a>

A logical instance of one or more development containers, along with any needed side-car containers. An environment is based on one set of metadata that can be managed as a single unit.

### <a href="#features" name="features" class="anchor"> Features </a>

Self-contained, shareable units of installation code and development container configuration. Features are designed to install atop a base container image to add specific tools, runtimes, or libraries.

### <a href="#templates" name="templates" class="anchor"> Templates </a>

Pre-configured starter development container configurations for different technology stacks. Templates provide a quick way to get started with a development container for a specific programming language or framework.

### <a href="#image-metadata" name="image-metadata" class="anchor"> Image Metadata </a>

Dev container metadata properties that can be stored in an image label, allowing configuration to be embedded directly in container images. This makes images and their related configuration self-contained.

### <a href="#lifecycle-scripts" name="lifecycle-scripts" class="anchor"> Lifecycle Scripts </a>

Commands that run at specific points in the container lifecycle:
- **onCreateCommand**: Runs when the container is created
- **updateContentCommand**: Runs when the container's content is updated
- **postCreateCommand**: Runs after the container is created
- **postStartCommand**: Runs each time the container starts
- **postAttachCommand**: Runs each time a tool attaches to the container

### <a href="#workspace-folder" name="workspace-folder" class="anchor"> Workspace Folder </a>

The primary working directory inside the development container where the project source code is located. This is typically specified using the `workspaceFolder` property in devcontainer.json.

### <a href="#remote-user" name="remote-user" class="anchor"> Remote User </a>

The user account that will be used when executing commands inside the development container. Specified by the `remoteUser` property in devcontainer.json.

### <a href="#forward-ports" name="forward-ports" class="anchor"> Forward Ports </a>

A list of ports that should be automatically forwarded from the container to the local machine, making services running in the container accessible on the host.

### <a href="#customizations" name="customizations" class="anchor"> Customizations </a>

Tool-specific settings and extensions that should be installed or configured in the development container. For example, VS Code extensions, settings, and other editor-specific configurations.

### <a href="#mounts" name="mounts" class="anchor"> Mounts </a>

Volumes or bind mounts that make local files or directories available inside the container. Mounts preserve data and enable sharing files between the host and container.

### <a href="#dockerfile" name="dockerfile" class="anchor"> Dockerfile </a>

A text file containing instructions for building a Docker container image. Development containers can be based on a Dockerfile for customized image creation.

### <a href="#docker-compose" name="docker-compose" class="anchor"> Docker Compose </a>

A tool for defining and running multi-container Docker applications. Development containers can use Docker Compose for orchestrating multiple services.

### <a href="#orchestration" name="orchestration" class="anchor"> Orchestration Options </a>

Different approaches to running development containers:
- **Image-based**: Using a pre-built container image
- **Dockerfile-based**: Building from a Dockerfile
- **Docker Compose-based**: Using docker-compose.yml for multi-container setups
