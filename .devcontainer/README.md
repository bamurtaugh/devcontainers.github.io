# Dev Container Configuration

This directory contains the development container configuration for the Development Containers website.

## Overview

This dev container provides a complete development environment for working on the containers.dev website using Jekyll. It eliminates the need to manually install Ruby, Jekyll, and other dependencies on your local machine.

## Configuration Details

### Base Image

The dev container uses the official Jekyll dev container image:
- **Image**: `mcr.microsoft.com/devcontainers/jekyll:1-bullseye`
- **Base OS**: Debian Bullseye
- **Included**: Ruby, Jekyll, and common Jekyll dependencies

### Features

The container includes the following additional features:

- **Node.js**: Latest version of Node.js, installed via the official devcontainers Node.js feature

### Port Forwarding

The following ports are automatically forwarded from the container to your local machine:

- **4000**: Jekyll development server
- **35729**: Jekyll live reload server

This allows you to access the running website at `http://localhost:4000/` while developing inside the container.

## Usage

1. **Open in Dev Container**: Open this repository in any dev container-supporting tool (VS Code, GitHub Codespaces, etc.)
2. **Wait for Build**: The container will automatically build with all necessary tools
3. **Start Jekyll**: Run `bundle exec jekyll serve` to start the development server
4. **View Site**: Navigate to `http://localhost:4000/containers.dev/` in your browser

## Scripts

### fetch-index.sh

This script downloads the latest devcontainer index from the GitHub Container Registry using ORAS (OCI Registry as Storage). It:

1. Installs the ORAS CLI tool
2. Pulls the latest `devcontainer-index.json` from `ghcr.io/devcontainers/index:latest`
3. Copies the index to the `static/` directory for use by the website

## More Information

For more details about dev containers, visit [containers.dev](https://containers.dev).

For information about the Jekyll dev container template used here, see the [template documentation](https://github.com/devcontainers/templates/tree/main/src/jekyll).
