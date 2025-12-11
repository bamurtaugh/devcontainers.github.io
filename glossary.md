---
title: Glossary
layout: singlePage
sectionid: glossary
---

## <a href="#glossary" name="glossary" class="anchor"> Development Container Glossary </a>

This glossary provides definitions for key terms related to development containers and the Development Container Specification.

### <a href="#dev-container" name="dev-container" class="anchor"> Dev Container </a>

A development container (or dev container for short) is a running container with a well-defined tool and runtime stack, along with the source code. It provides a consistent, reproducible development environment that can be used across different machines and team members.

### <a href="#devcontainer-json" name="devcontainer-json" class="anchor"> devcontainer.json </a>

A JSON with Comments (jsonc) metadata file that describes how to configure and create a development container. This file typically lives in a `.devcontainer` folder in your project and defines settings like the base image, features to install, ports to forward, and more.

### <a href="#feature" name="feature" class="anchor"> Feature </a>

A self-contained, shareable unit of installation code and dev container configuration. Features are designed to install tools and languages into a development container. They can be authored and distributed independently, and combined together in a `devcontainer.json` to create your desired development environment.

### <a href="#template" name="template" class="anchor"> Template </a>

A dev container Template is a pre-configured dev container setup that can be used as a starting point for a new project. Templates include a `devcontainer.json` file and any other necessary configuration files to quickly set up a development environment for specific languages or frameworks.

### <a href="#image-metadata" name="image-metadata" class="anchor"> Image Metadata </a>

Dev container metadata can be embedded in container image labels, allowing configuration to be stored directly in the image. This enables pre-built images to carry their own development environment configuration.

### <a href="#lifecycle-scripts" name="lifecycle-scripts" class="anchor"> Lifecycle Scripts </a>

Commands that run at specific points in a dev container's lifecycle, such as `postCreateCommand`, `postStartCommand`, and `postAttachCommand`. These allow you to automate setup tasks when a container is created, started, or attached to.

### <a href="#customizations" name="customizations" class="anchor"> Customizations </a>

Tool-specific configuration that can be included in `devcontainer.json` under the `customizations` property. For example, VS Code extensions and settings can be specified under `customizations.vscode`.

### <a href="#docker-compose" name="docker-compose" class="anchor"> Docker Compose </a>

A tool for defining and running multi-container Docker applications. Dev containers support using Docker Compose to orchestrate multiple containers, which is useful when your development environment requires multiple services (like a database and web server).

### <a href="#dockerfile" name="dockerfile" class="anchor"> Dockerfile </a>

A text file containing instructions for building a Docker image. In dev containers, you can reference an existing Dockerfile or have one generated automatically based on your `devcontainer.json` configuration.

### <a href="#container-registry" name="container-registry" class="anchor"> Container Registry </a>

A storage and distribution system for container images. Popular registries include Docker Hub, GitHub Container Registry (GHCR), and Azure Container Registry. Dev containers can pull base images from these registries.

### <a href="#port-forwarding" name="port-forwarding" class="anchor"> Port Forwarding </a>

The process of making ports inside a container accessible from the host machine. This is essential for accessing web servers, databases, and other services running in your dev container.

### <a href="#volume-mount" name="volume-mount" class="anchor"> Volume Mount </a>

A way to persist data and share files between the host and container. Dev containers typically mount your source code into the container so you can edit files on your host machine while running them in the container.

### <a href="#base-image" name="base-image" class="anchor"> Base Image </a>

The starting container image upon which a dev container is built. This could be a minimal OS image, a pre-configured image with languages and tools, or a custom image specific to your project needs.
