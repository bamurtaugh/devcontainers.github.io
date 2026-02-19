---
title: Glossary
layout: singlePage
sectionid: glossary
---

## <a href="#glossary" name="glossary" class="anchor"> Glossary </a>

This page defines common terms used in the Development Container Specification and related tooling.

### <a href="#dev-container" name="dev-container" class="anchor"> Dev Container </a>

A **development container** (or dev container) is a running container that provides a full-featured development environment. It includes the tools, runtimes, and settings needed to work on a project, defined by a [`devcontainer.json`](#devcontainer-json) file.

### <a href="#devcontainer-json" name="devcontainer-json" class="anchor"> devcontainer.json </a>

A structured JSON with Comments (jsonc) metadata file that specifies how to configure a dev container, including the base image or Dockerfile, tools, extensions, settings, and lifecycle scripts. It is the primary configuration artifact of the [Dev Container Specification](#dev-container-specification).

### <a href="#dev-container-specification" name="dev-container-specification" class="anchor"> Dev Container Specification </a>

An open standard that defines the format and behavior of development containers. It enables consistent, reproducible development environments across different tools and services that support the spec.

### <a href="#dev-container-feature" name="dev-container-feature" class="anchor"> Dev Container Feature </a>

A self-contained, reusable unit of installation code and dev container configuration that can be added to a dev container. Features allow you to install additional tools, runtimes, or libraries on top of a base image. They are referenced in `devcontainer.json` using the `features` property.

### <a href="#dev-container-template" name="dev-container-template" class="anchor"> Dev Container Template </a>

A pre-built, shareable starting configuration for a dev container. Templates provide a complete `devcontainer.json` and any associated files to quickly set up a development environment for a particular language or technology stack.

### <a href="#lifecycle-scripts" name="lifecycle-scripts" class="anchor"> Lifecycle Scripts </a>

Commands defined in `devcontainer.json` that run at specific points during the dev container lifecycle, such as `onCreateCommand`, `updateContentCommand`, `postCreateCommand`, `postStartCommand`, and `postAttachCommand`.

### <a href="#image-metadata" name="image-metadata" class="anchor"> Image Metadata </a>

Dev container configuration that is stored in OCI image labels rather than a `devcontainer.json` file. This allows tools to apply dev container settings from a pre-built image.

### <a href="#devcontainer-cli" name="devcontainer-cli" class="anchor"> Dev Container CLI </a>

The [open-source command line interface](https://github.com/devcontainers/cli) that serves as the reference implementation of the Dev Container Specification. It can build and run dev containers, apply features, and execute lifecycle scripts.

### <a href="#oci" name="oci" class="anchor"> OCI (Open Container Initiative) </a>

An open governance structure that defines industry standards for container formats and runtimes. Dev container image metadata is stored using OCI image label conventions.

### <a href="#collection" name="collection" class="anchor"> Collection </a>

A published set of [Dev Container Features](#dev-container-feature) and/or [Templates](#dev-container-template) distributed together from a single source, such as a GitHub repository registered with the Dev Container index.
