---
title: Glossary
layout: singlePage
sectionid: glossary
---

This page defines common terms used in development containers and the Development Container Specification.

## <a href="#dev-container" name="dev-container" class="anchor"> Dev Container </a>

A development container (or dev container for short) is a running container with a well-defined tool and runtime stack and its prerequisites. You can try out dev containers with **[GitHub Codespaces](https://github.com/features/codespaces)** or **[Visual Studio Code Dev Containers](https://aka.ms/vscode-remote/containers)**.

## <a href="#devcontainer-json" name="devcontainer-json" class="anchor"> devcontainer.json </a>

A `devcontainer.json` file in your project tells tools and services that support the dev container spec how to access (or create) a dev container with a well-defined tool and runtime stack. It is a structured JSON with Comments (jsonc) metadata format.

## <a href="#dev-container-features" name="dev-container-features" class="anchor"> Dev Container Features </a>

Dev Container Features are self-contained units of installation code and dev container configuration. Features are designed to install atop a wide-range of base container images. Learn more about [available features](/features).

## <a href="#dev-container-templates" name="dev-container-templates" class="anchor"> Dev Container Templates </a>

Dev Container Templates are source files packaged together that encode configuration for a complete development environment. A Template can be used in a new or existing project, and a [supporting tool](https://containers.dev/supporting) will use the configuration from the Template to build a dev container. Learn more about [available templates](/templates).

## <a href="#base-image" name="base-image" class="anchor"> Base Image </a>

A container image that serves as the starting point for a dev container. Base images typically contain an operating system and may include language runtimes and other tools.

## <a href="#dockerfile" name="dockerfile" class="anchor"> Dockerfile </a>

A text document that contains all the commands to assemble a container image. Docker builds images automatically by reading the instructions from a Dockerfile.

## <a href="#container-image" name="container-image" class="anchor"> Container Image </a>

A lightweight, standalone, executable package that includes everything needed to run a piece of software, including the code, runtime, system tools, system libraries, and settings.

## <a href="#lifecycle-scripts" name="lifecycle-scripts" class="anchor"> Lifecycle Scripts </a>

Scripts that run at specific points in the dev container lifecycle, such as `postCreateCommand`, `postStartCommand`, and `postAttachCommand`. These allow you to customize the container after it's created or started.

## <a href="#customizations" name="customizations" class="anchor"> Customizations </a>

Tool-specific configuration properties in `devcontainer.json`. For example, VS Code extensions and settings can be specified under `customizations.vscode`.

## <a href="#forward-ports" name="forward-ports" class="anchor"> Port Forwarding </a>

The ability to make a network port inside a dev container accessible from outside the container, typically on your local machine or through a public URL in cloud-based development environments.

## <a href="#remote-user" name="remote-user" class="anchor"> Remote User </a>

The user that tools should connect as in the container. This is typically a non-root user for security purposes.

## <a href="#docker-compose" name="docker-compose" class="anchor"> Docker Compose </a>

A tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application's services, making it possible to create complex dev container setups.

## <a href="#prebuild" name="prebuild" class="anchor"> Prebuild </a>

The process of building a dev container image ahead of time, typically in a CI/CD pipeline, to reduce the time it takes to create a new dev container environment.

## <a href="#workspace-folder" name="workspace-folder" class="anchor"> Workspace Folder </a>

The folder inside the dev container where your source code is located. This is typically mounted from your local filesystem or cloned from a repository.
