---
title: Glossary
layout: singlePage
sectionid: glossary
---

## <a href="#glossary" name="glossary" class="anchor"> Development Containers Glossary </a>

This glossary provides definitions for key terms used in the Development Container Specification and related tools.

### <a href="#development-container" name="development-container" class="anchor"> Development Container (Dev Container) </a>

A development container defines an environment in which you develop your application before you are ready to deploy. It provides a consistent and reproducible development environment using containerization.

### <a href="#devcontainer-json" name="devcontainer-json" class="anchor"> devcontainer.json </a>

A structured JSON with Comments (jsonc) metadata format that tools can use to store configuration required to develop inside of local or cloud-based containerized coding environments.

### <a href="#features" name="features" class="anchor"> Features </a>

Reusable chunks of metadata and install scripts that can be added to a development container to provide additional tools, languages, or runtime environments. Features are distributed as OCI artifacts or through other distribution mechanisms.

### <a href="#templates" name="templates" class="anchor"> Templates </a>

Pre-configured development container setups that provide a starting point for specific programming languages, frameworks, or project types. Templates include a devcontainer.json and associated files.

### <a href="#collections" name="collections" class="anchor"> Collections </a>

Groupings of Features and Templates that are published together, typically by the same maintainer or organization. Collections are indexed and discoverable through the dev containers registry.

### <a href="#base-image" name="base-image" class="anchor"> Base Image </a>

The container image specified in the devcontainer.json that serves as the foundation for the development container. It can be a pre-built image from a registry or built from a Dockerfile.

### <a href="#dockerfile" name="dockerfile" class="anchor"> Dockerfile </a>

A text file containing instructions for building a custom container image. Used when the development container needs specific customizations beyond what's available in pre-built images.

### <a href="#docker-compose" name="docker-compose" class="anchor"> Docker Compose </a>

A tool for defining and running multi-container applications. Development containers can use Docker Compose to orchestrate multiple services required for development.

### <a href="#lifecycle-scripts" name="lifecycle-scripts" class="anchor"> Lifecycle Scripts </a>

Scripts that run at different points in the development container lifecycle, such as:
- `postCreateCommand`: Runs after the container is created
- `postStartCommand`: Runs each time the container starts
- `postAttachCommand`: Runs when a tool attaches to the container

### <a href="#port-forwarding" name="port-forwarding" class="anchor"> Port Forwarding </a>

The process of making ports running inside the development container accessible from the host machine or external connections, configured through the `forwardPorts` property.

### <a href="#remote-user" name="remote-user" class="anchor"> Remote User </a>

The user account that tools should use when connecting to the development container, specified by the `remoteUser` property in devcontainer.json.

### <a href="#workspace-folder" name="workspace-folder" class="anchor"> Workspace Folder </a>

The path inside the development container where the source code is mounted or copied, specified by the `workspaceFolder` property.

### <a href="#customizations" name="customizations" class="anchor"> Customizations </a>

Tool-specific configurations stored in the `customizations` property of devcontainer.json, allowing different tools to store their specific settings.

### <a href="#oci-registry" name="oci-registry" class="anchor"> OCI Registry </a>

An Open Container Initiative (OCI) compliant registry used to distribute container images and artifacts, including development container Features and Templates.

### <a href="#dev-container-cli" name="dev-container-cli" class="anchor"> Dev Container CLI </a>

A reference implementation command-line tool for working with development containers, including building, running, and managing dev container configurations.

### <a href="#codespaces" name="codespaces" class="anchor"> GitHub Codespaces </a>

A cloud-based development environment service by GitHub that supports the Development Container Specification for creating consistent development environments.

### <a href="#volume-mounts" name="volume-mounts" class="anchor"> Volume Mounts </a>

A mechanism for persisting data between container runs or sharing data between the host and container, configured through the `mounts` property.

### <a href="#prebuild" name="prebuild" class="anchor"> Prebuild </a>

The process of creating a container image with all development dependencies pre-installed, reducing the time needed to start a development environment.