# Development Containers Website

[![Publish to GitHub Pages](https://github.com/devcontainers/devcontainers.github.io/actions/workflows/publish.yml/badge.svg)](https://github.com/devcontainers/devcontainers.github.io/actions/workflows/publish.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This repository contains the source code for [containers.dev](https://containers.dev), the official website and documentation for the [Development Containers Specification](https://github.com/devcontainers/spec).

**🌐 Live Site:** [containers.dev](https://containers.dev)

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Building and Running Locally](#building-and-running-locally)
  - [Using Dev Container (Recommended)](#using-dev-container-recommended)
  - [Manual Setup](#manual-setup)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Community](#community)
- [Troubleshooting](#troubleshooting)
- [Security](#security)
- [License](#license)

## Overview

This repository hosts the **website** for the Development Containers Specification, not the specification itself. The site is built with [Jekyll](https://jekyllrb.com/) and deployed to GitHub Pages.

**Key Resources:**
- 📖 [Dev Container Specification](https://github.com/devcontainers/spec) - The actual specification repository
- 🛠️ [Supporting Tools](https://containers.dev/supporting) - Tools and editors that support dev containers
- 📚 [Implementor Documentation](https://containers.dev/implementors/spec) - For tool developers

## Prerequisites

To build and run this site locally, you'll need one of the following:

**Option 1: Dev Container (Recommended)**
- [Docker Desktop](https://www.docker.com/products/docker-desktop) or a compatible container runtime
- A dev container-supporting editor:
  - [VS Code](https://code.visualstudio.com/) with the [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
  - [GitHub Codespaces](https://github.com/features/codespaces)
  - Or any other [supporting tool](https://containers.dev/supporting)

**Option 2: Manual Installation**
- [Ruby](https://www.ruby-lang.org/) (see `Gemfile` for version requirements)
- [Bundler](https://bundler.io/)
- [Jekyll](https://jekyllrb.com/) 3.9.3

## Building and Running Locally

### Using Dev Container (Recommended)

The easiest way to get started is using the included dev container configuration, which provides all the necessary tools pre-configured.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/devcontainers/devcontainers.github.io.git
   cd devcontainers.github.io
   ```

2. **Open in a dev container-supporting tool:**
   - Open the folder in VS Code and click "Reopen in Container" when prompted
   - Or, open in GitHub Codespaces
   - See [supporting tools](https://containers.dev/supporting) for other options

3. **Start the Jekyll server:**
   ```bash
   bundle exec jekyll serve
   ```

4. **View the site:**
   Open your browser to [http://localhost:4000/containers.dev/](http://localhost:4000/containers.dev/)

The dev container configuration is based on the [Jekyll Dev Container Template](https://github.com/devcontainers/templates/tree/main/src/jekyll) and can be found in the [`.devcontainer`](./.devcontainer) folder.

### Manual Setup

If you prefer not to use a dev container:

1. **Install dependencies:**
   ```bash
   gem install bundler
   bundle install
   ```

2. **Serve the site:**
   ```bash
   bundle exec jekyll serve
   ```

3. **View the site:**
   Open your browser to [http://localhost:4000/containers.dev/](http://localhost:4000/containers.dev/)

## Project Structure

```
.
├── _data/              # YAML data files for features, templates, and collections
├── _implementors/      # Documentation for tool implementors
├── _includes/          # Reusable HTML components
├── _layouts/           # Jekyll page layouts
├── _posts/             # Blog posts and guides
├── css/                # Stylesheets
├── img/                # Images and graphics
├── js/                 # JavaScript files
├── static/             # Static files (generated manifests, indexes)
├── .devcontainer/      # Dev container configuration
├── _config.yml         # Jekyll configuration
├── contributing.md     # Contribution guidelines
└── README.md           # This file
```

## Contributing

We welcome contributions to improve the dev containers website! 🎉

### Website vs. Specification

- **Website issues** (documentation, design, content): Open an issue or PR in [this repository](https://github.com/devcontainers/devcontainers.github.io)
- **Specification issues** (dev container features, format): Open an issue or PR in the [Dev Containers Spec repo](https://github.com/devcontainers/spec)

### How to Contribute

1. Read our [contributing guidelines](./contributing.md) for detailed information
2. Fork this repository
3. Create a feature branch (`git checkout -b feature/amazing-improvement`)
4. Make your changes and test locally
5. Commit your changes (`git commit -m 'Add amazing improvement'`)
6. Push to your branch (`git push origin feature/amazing-improvement`)
7. Open a Pull Request

Please ensure your changes:
- Follow the existing code style and formatting
- Include appropriate documentation updates
- Work correctly in both dev container and manual setups

## Community

Join the dev containers community:

- 💬 **[Community Slack](https://aka.ms/dev-container-community)** - Chat with the community and maintainers
- 💭 **[GitHub Discussions](https://github.com/devcontainers/spec/discussions)** - Ask questions and share feedback
- 📦 **[Community Collections](https://containers.dev/collections)** - Share your own Templates and Features
- 🐛 **[Issue Tracker](https://github.com/devcontainers/devcontainers.github.io/issues)** - Report website bugs or suggest improvements

## Troubleshooting

### Common Issues

**Jekyll won't start or shows errors:**
- Ensure you're using the correct Ruby version
- Try cleaning and reinstalling: `rm -rf _site Gemfile.lock && bundle install`
- In dev container: Rebuild the container

**Port 4000 already in use:**
- Stop any other Jekyll instances: `pkill -f jekyll`
- Or use a different port: `bundle exec jekyll serve --port 4001`

**Changes not appearing:**
- Jekyll caches content; try `bundle exec jekyll serve --incremental`
- Force a full rebuild: `bundle exec jekyll clean && bundle exec jekyll serve`

**Dev container build fails:**
- Ensure Docker is running
- Try rebuilding without cache: "Dev Containers: Rebuild Container Without Cache"

For more help, please [open an issue](https://github.com/devcontainers/devcontainers.github.io/issues) or ask in our [Slack channel](https://aka.ms/dev-container-community).

## Security

Microsoft takes the security of our software seriously. If you believe you have found a security vulnerability in this repository, please report it to us as described in our [SECURITY.md](./SECURITY.md) file.

**Please do not report security vulnerabilities through public GitHub issues.**

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

Copyright (c) Microsoft Corporation.
