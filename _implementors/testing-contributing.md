---
layout: implementors
title:  "Testing Guide for Development Containers"
shortTitle: "Testing"
author: Microsoft
index: 10
---

This guide provides best practices and guidance for testing Development Containers, Features, and Templates. Proper testing ensures your contributions work reliably across different environments and configurations.

## <a href="#testing-features" name="testing-features" class="anchor"> Testing Features </a>

### Using the `devcontainer features test` command

The [Dev Container CLI](https://github.com/devcontainers/cli) includes a `devcontainer features test` command specifically designed to help Feature authors test their Features in various scenarios. It is highly recommended to use this command before publishing Features.

- **Documentation**: [Feature testing documentation](https://github.com/devcontainers/cli/blob/main/docs/features/test.md)
- **Example**: [Feature quick start repository](https://github.com/devcontainers/feature-starter)

### Test structure

Feature tests should be placed in a `test` directory at the root of your Feature repository. Each test scenario should have its own subdirectory containing:
- A `devcontainer.json` file that uses your Feature
- A test script (typically `test.sh`) that validates the Feature installation

```
test/
├── scenario1/
│   ├── devcontainer.json
│   └── test.sh
└── scenario2/
    ├── devcontainer.json
    └── test.sh
```

### Testing with different base images

Features should be tested against multiple base images to ensure broad compatibility. Use the `--base-image` flag or create multiple scenarios:

```bash
devcontainer features test --base-image ubuntu:jammy
devcontainer features test --base-image debian:11
```

### Testing idempotency

Features should be idempotent, meaning they can be safely installed multiple times. The CLI supports testing this with the idempotency mode:

```bash
devcontainer features test --skip-scenarios -f myFeature
```

This is especially important for Features that:
- Install versioned tools
- May be used as dependencies by other Features
- Support multiple installation options

### Scenario testing

[Scenario tests](https://github.com/devcontainers/cli/blob/main/docs/features/test.md#scenarios) allow you to test Features with different option combinations and base images. This helps ensure your Feature handles various configurations correctly.

## <a href="#testing-templates" name="testing-templates" class="anchor"> Testing Templates </a>

Templates should be tested to ensure they:
- Build successfully
- Include all necessary tools and configurations
- Work across different supported platforms

You can test Templates using the Dev Container CLI:

```bash
devcontainer templates test -t mytemplate
```

## <a href="#ci-integration" name="ci-integration" class="anchor"> CI/CD Integration </a>

### GitHub Actions example

Integrate testing into your CI/CD pipeline to automatically validate Features and Templates. Here's a sample workflow:

```yaml
name: "Test Features"
on:
  push:
    branches:
      - main
  pull_request:
  workflow_dispatch:

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        baseImage:
          - ubuntu:jammy
          - ubuntu:focal
          - debian:11
          - debian:12
    steps:
      - uses: actions/checkout@v4

      - name: "Install Dev Container CLI"
        run: npm install -g @devcontainers/cli

      - name: "Run Feature tests"
        run: devcontainer features test -f myFeature -i ${{ matrix.baseImage }}
```

## <a href="#best-practices" name="best-practices" class="anchor"> Testing Best Practices </a>

### Write comprehensive test scripts

Your test scripts should verify:
- ✅ Tools are installed correctly
- ✅ Expected versions are present
- ✅ Commands work as expected
- ✅ Environment variables are set properly
- ✅ Configurations are applied correctly

Example test script:

```bash
#!/bin/bash
set -e

# Import test library
source dev-container-features-test-lib

# Feature-specific tests
check "tool-version" tool --version
check "command-works" tool test-command
check "environment-set" bash -c 'echo $MY_ENV_VAR | grep "expected_value"'

# Report results
reportResults
```

### Test across platforms

If your Feature supports multiple architectures or operating systems, test on each supported platform:
- Different Linux distributions (Debian, Ubuntu, Alpine, etc.)
- Different architectures (amd64, arm64)
- Different base image types (minimal, full-featured)

### Test error handling

Ensure your Features gracefully handle:
- Unsupported platforms
- Missing dependencies
- Network failures
- Invalid options

### Version compatibility

Test your Features with:
- Latest versions of base images
- LTS versions
- Different versions of tools being installed

## <a href="#debugging-tests" name="debugging-tests" class="anchor"> Debugging Failed Tests </a>

When tests fail:

1. **Review logs**: The CLI provides detailed output about what went wrong
2. **Test locally**: Run the same test on your local machine with the exact base image
3. **Inspect the container**: Use `docker exec` to explore the container state after a failed build
4. **Check permissions**: Ensure scripts have execute permissions and run with appropriate user privileges

```bash
# Run test with verbose output
devcontainer features test --log-level trace

# Build and keep container for inspection
devcontainer build --workspace-folder ./test/scenario1
```

## <a href="#test-coverage" name="test-coverage" class="anchor"> Test Coverage </a>

Aim to cover:
- ✅ Default options
- ✅ Each configurable option
- ✅ Option combinations
- ✅ Edge cases (empty values, special characters, etc.)
- ✅ Multiple installations (for idempotency)
- ✅ Different user contexts (root vs. non-root)

## <a href="#resources" name="resources" class="anchor"> Additional Resources </a>

- [Dev Container CLI Repository](https://github.com/devcontainers/cli)
- [Feature Authoring Best Practices](https://containers.dev/guide/author-a-feature)
- [Feature Testing Documentation](https://github.com/devcontainers/cli/blob/main/docs/features/test.md)
- [Template Testing Documentation](https://github.com/devcontainers/cli/blob/main/docs/templates/test.md)
- [Example Feature Repository](https://github.com/devcontainers/feature-starter)
- [Community Features Index](https://containers.dev/features)

## <a href="#getting-help" name="getting-help" class="anchor"> Getting Help </a>

If you encounter issues with testing:
- Check [GitHub Discussions](https://github.com/devcontainers/spec/discussions) for similar questions
- Join the [community Slack channel](https://aka.ms/dev-container-community)
- Open an issue in the relevant repository ([CLI](https://github.com/devcontainers/cli/issues), [Spec](https://github.com/devcontainers/spec/issues))
