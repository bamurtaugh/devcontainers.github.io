---
title: Glossary
layout: singlePage
sectionid: glossary
---

## <a href="#glossary" name="glossary" class="anchor"> Development Container Glossary </a>

This glossary provides definitions for common terms used in the Development Container ecosystem.

### <a href="#core-concepts" name="core-concepts" class="anchor"> Core Concepts </a>

**Development Container (dev container)**  
A container that provides a full-featured development environment. It can be used to run an application, separate tools and libraries needed for working with a codebase, and aid in continuous integration and testing. Dev containers can run locally or remotely.

**Development Container Specification (Dev Container Spec)**  
An open specification that seeks to find ways to enrich existing container formats with metadata for common development-specific settings, tools, and configuration while providing a simplified, single-container option.

**devcontainer.json**  
A structured JSON with Comments (jsonc) metadata format that tools use to store configuration required to develop inside local or cloud-based containerized environments. This is the primary configuration file for dev containers.

### <a href="#components" name="components" class="anchor"> Components </a>

**Features**  
Self-contained, shareable units of installation code and development container configuration. Features allow you to quickly add tooling, runtime, or library "features" into your development container. Each Feature has a `devcontainer-feature.json` file and an `install.sh` script.

**Templates**  
Pre-built development container configurations for specific technology stacks and scenarios. Templates provide a starting point for new projects with common tools and settings already configured.

**Dev Container CLI**  
The official command-line interface and reference implementation for working with development containers. It supports integrating with Docker Compose and single-container scenarios.

**Collection**  
A group of related Features and/or Templates that are published and versioned together, making it easier to discover and use related development container assets.

### <a href="#configuration" name="configuration" class="anchor"> Configuration & Metadata </a>

**Image Labels**  
Metadata stored directly in container image labels using the `devcontainer.metadata` label. This allows dev container configuration to be embedded in the image itself.

**Base Image**  
The starting container image that Features, Templates, and other configuration are applied to. Features may be authored to work with specific base images or Linux distributions.

**Container Environment (`containerEnv`)**  
Environment variables set on the Docker container itself, making them available to all processes spawned in the container. These are static for the container's lifetime.

**Remote Environment (`remoteEnv`)**  
Environment variables set for the dev container supporting service/tool and sub-processes (like terminals) but not the container as a whole. These can be updated without rebuilding the container.

### <a href="#development-workflow" name="development-workflow" class="anchor"> Development Workflow </a>

**Inner Loop Development**  
The rapid, iterative development cycle where developers write code, test, and debug within the development container environment.

**Outer Loop Development**  
The broader development process that includes continuous integration, testing, and deployment - often using the same dev container configuration to ensure consistency.

**Prebuild**  
The process of pre-building development containers to reduce startup time. This involves creating and caching container images with all dependencies installed ahead of time.

**Container Orchestrator**  
Tools like Docker Compose that manage multiple containers and their lifecycles. The dev container spec can reference orchestrator formats when needed for multi-container scenarios.

### <a href="#networking-storage" name="networking-storage" class="anchor"> Networking & Storage </a>

**Port Forwarding**  
Making ports from inside the container accessible on the host machine. Can be configured with `forwardPorts` in devcontainer.json.

**Port Attributes**  
Configuration options for forwarded ports, such as labels, auto-forward behavior, and protocol settings.

**Mounts**  
Mapping host directories or volumes into the container to persist data or share files between the host and container.

**Volume Mounts**  
Persistent storage that survives container restarts, often used for source code, package caches, or data that needs to persist.

### <a href="#security-runtime" name="security-runtime" class="anchor"> Security & Runtime </a>

**Privileged Mode**  
Running a container with elevated privileges (`--privileged`), sometimes required for scenarios like Docker-in-Docker but with security implications.

**Capabilities**  
Linux kernel capabilities that can be added to containers, such as `SYS_PTRACE` for debugging languages like C++, Go, and Rust.

**Remote User vs Container User**  
- **Remote User**: The user that dev container tools run as inside the container for development activities
- **Container User**: The user that the container as a whole runs as (often `root`)

**Init Process**  
A minimal init process (like tini) that helps handle zombie processes and signal forwarding in containers.

### <a href="#tools-ecosystem" name="tools-ecosystem" class="anchor"> Tools & Ecosystem </a>

**Supporting Tools**  
Editors, IDEs, and services that implement the Development Container Specification, such as Visual Studio Code, GitHub Codespaces, and various cloud development environments.

**Dev Container Extensions**  
Editor-specific extensions that provide dev container functionality, like the VS Code Dev Containers extension.

**GitHub Codespaces**  
A cloud-based development environment service that uses dev containers to provide consistent, on-demand development environments.

**Continuous Integration (CI)**  
Using dev containers in automated build and test pipelines to ensure consistency between development and production environments.