---
title: Glossary
layout: singlePage
sectionid: glossary
---

## <a href="#dev-container" name="dev-container" class="anchor"> Development Container (Dev Container) </a>

A **development container** is a container in which a user can develop an application. It provides a consistent, reproducible development environment that includes all the tools, libraries, and dependencies needed for development work.

## <a href="#devcontainer-json" name="devcontainer-json" class="anchor"> devcontainer.json </a>

The `devcontainer.json` file is a structured JSON with Comments (jsonc) metadata format that tools can use to store configuration required to develop inside of local or cloud-based containerized coding environments. This file defines how to create and configure a development container.

## <a href="#development-container-specification" name="development-container-specification" class="anchor"> Development Container Specification </a>

The **Development Container Specification** (or Dev Container Spec for short) is an open specification that defines a way to enrich containers with the content and metadata necessary to enable development inside them. It seeks to find ways to enrich existing formats with metadata for common development specific settings, tools, and configuration.

## <a href="#features" name="features" class="anchor"> Features </a>

**Development Container Features** are self-contained, shareable units of installation code and development container configuration. The name comes from the idea that referencing one of them allows you to quickly and easily add more tooling, runtime, or library "features" into your development container for you or your collaborators to use.

## <a href="#templates" name="templates" class="anchor"> Templates </a>

**Development Container Templates** are source files packaged together that encode configuration for a complete development environment. They provide a way to share common development container configurations and can be used to quickly set up new projects with predefined development environments.

## <a href="#base-image" name="base-image" class="anchor"> Base Image </a>

A **base image** is the foundational container image that serves as the starting point for a development container. It typically includes an operating system and may include common development tools and runtime environments.

## <a href="#lifecycle-scripts" name="lifecycle-scripts" class="anchor"> Lifecycle Scripts </a>

**Lifecycle scripts** are commands that run at specific points in the development container's lifecycle, such as `postCreateCommand`, `postStartCommand`, and `postAttachCommand`. These scripts allow for customization and setup tasks to be performed automatically when the container is created, started, or attached to.

## <a href="#customizations" name="customizations" class="anchor"> Customizations </a>

**Customizations** are tool-specific properties that can be configured in the `devcontainer.json` file. These are contained in namespaces under the `customizations` property, such as VS Code-specific settings under `vscode`, GitHub Codespaces settings under `codespaces`, etc.

## <a href="#forwarded-ports" name="forwarded-ports" class="anchor"> Forwarded Ports </a>

**Forwarded ports** are network ports that are made accessible from the host machine to services running inside the development container. This allows developers to access web servers, APIs, and other services running in the container from their local machine or through a browser.

## <a href="#mounts" name="mounts" class="anchor"> Mounts </a>

**Mounts** allow containers to have access to the underlying machine, share data between containers, and persist information between development containers. They can be bind mounts (linking to host filesystem) or volume mounts (using Docker volumes).

## <a href="#remote-user" name="remote-user" class="anchor"> Remote User </a>

The **remote user** is the user account that will be used when connecting to the development container. This determines the permissions and environment that will be active during development work inside the container.

## <a href="#workspace-folder" name="workspace-folder" class="anchor"> Workspace Folder </a>

The **workspace folder** is the directory inside the development container where the source code and project files are located. This is typically where the development work takes place and where the IDE or editor will open by default.