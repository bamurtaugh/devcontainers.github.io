---
layout: implementors
title:  "Dev Container Templates and Contributing"
shortTitle: "Templates & Contributing"
author: Microsoft
index: 7
---

## <a href="#templates" name="templates" class="anchor"> Dev Container Templates </a>

**Development Container Templates** are source files packaged together that encode configuration for a complete development environment. A Template can be used in a new or existing project, and a [supporting tool](/supporting) will use the configuration from the Template to build a development container.

The configuration is placed in a [`.devcontainer.json`](/implementors/json_reference#devcontainerjson) which can also reference other files within the Template. Alternatively, `.devcontainer/devcontainer.json` can also be used if the container needs to reference other files, such as a `Dockerfile` or `docker-compose.yml`. A Template can also provide additional source files (eg: boilerplate code or a [lifecycle script](/implementors/json_reference/#lifecycle-scripts)).

Template metadata is captured by a `devcontainer-template.json` file in the root folder of the Template.

### <a href="#folder-structure" name="folder-structure" class="anchor"> Folder Structure</a>

A single Template is a folder with at least a `devcontainer-template.json` and [`devcontainer.json`](/implementors/json_reference#devcontainerjson).  Additional files are permitted and are packaged along side the required files.

```
+-- template
|    +-- devcontainer-template.json
|    +-- .devcontainer.json
|    +-- (other files)
```

### <a href="#devcontainer-template-properties" name="devcontainer-template-properties" class="anchor">devcontainer-template.json properties</a>

The `devcontainer-template.json` file defines information about the Template to be used by any [supporting tools](/supporting#supporting-tools-and-services).

The properties of the file are as follows:

| Property | Type | Description |
| :--- | :--- | :--- |
| `id` | string | ID of the Template. The `id` should be unique in the context of the repository/published package where the Template exists and must match the name of the directory where the `devcontainer-template.json` resides. |
| `version` | string | The semantic version of the Template. |
| `name` | string | Name of the Template. |
| `description` | string | Description of the Template. |
| `documentationURL` | string | Url that points to the documentation of the Template. |
| `licenseURL` | string | Url that points to the license of the Template. |
| [`options`](#options) | object | A map of options that the supporting tools should use to populate different configuration options for the Template. |
| `platforms` | array | Languages and platforms supported by the Template. |
| `publisher` | string | Name of the publisher/maintainer of the Template. |
| `keywords` | array | List of strings relevant to a user that would search for this Template. |
| [`optionalPaths`](#optionalPaths) | array | An array of files or directories that tooling may consider "optional" when applying a Template. Directories are indicated with a trailing `/*`, (eg: `.github/*`).
{: .table .table-bordered}

### <a href="#options" name="options" class="anchor">  The `options` property</a>
The `options` property contains a map of option IDs and their related configuration settings. These `options` are used by the supporting tools to prompt the user to choose from different Template configuration options. The tools would replace the option ID with the selected value in all the files (within the sub-directory of the Template). This replacement would happen before dropping the `.devcontainer.json` (or `.devcontainer/devcontainer.json`) and other files (within the sub-directory of the Template) required to containerize your project. See [option resolution](#option-resolution) for more details. For example:

```json
{
  "options": {
    "optionId": {
      "type": "string",
      "description": "Description of the option",
      "proposals": ["value1", "value2"],
      "default": "value1"
    }
  }
}
```

| Property | Type | Description |
| :--- | :--- | :--- |
| `optionId` | string | ID of the option used by the supporting tools to replace the selected value in the files within the sub-directory of the Template. |
| `optionId.type` | string | Type of the option. Valid types are currently: `boolean`, `string` |
| `optionId.description` | string | Description for the option. |
| `optionId.proposals` | array | A list of suggested string values. Free-form values **are** allowed. Omit when using `optionId.enum`. |
| `optionId.enum` | array | A strict list of allowed string values. Free-form values are **not** allowed. Omit when using `optionId.proposals`. |
| `optionId.default` | string | Default value for the option. |
{: .table .table-bordered}

> `Note`: The `options` must be unique for every `devcontainer-template.json`

### <a href="#optionalPaths" name="optionalPaths" class="anchor">  The `optionalPaths` property</a>

Before applying a Template, tooling must inspect the `optionalPaths` property of a Template and prompt the user on whether each file or folder should be included in the resulting output workspace folder.  A path is relative to the root of the Template source directory.

- For a single file, provide the full relative path (without any leading or trailing path delimiters).  
- For a directory, provide the full relative path with a trailing slash and asterisk (`/*`) appended to the path.  The directory and its children will be recursively ignored.

Examples are shown below:

```jsonc
{
    "id": "cpp",
    "version": "3.0.0",
    "name": "C++",
    "description": "Develop C++ applications",
    "optionalPaths": [
         "GETTING-STARTED.md",                 // Single file
         "example-project-1/MyProject.csproj", // Single file in nested directory
         ".github/*"                           // Entire recursive contents of directory
     ]
}
```


### <a href="#referencing-a-template" name="referencing-a-template" class="anchor"> Referencing a Template </a>

The `id` format (`<oci-registry>/<namespace>/<template>[:<semantic-version>]`) dictates how a [supporting tool](/supporting) will locate and download a given Template from an OCI registry. For example:

- `ghcr.io/user/repo/go`
- `ghcr.io/user/repo/go:1`
- `ghcr.io/user/repo/go:latest`

The registry must implement the [OCI Artifact Distribution Specification](https://github.com/opencontainers/distribution-spec). Some implementors can be [found here](https://oras.land/implementors/).

### <a href="#versioning" name="versioning" class="anchor"> Versioning </a>

Each Template is individually [versioned according to the semver specification](https://semver.org/).  The `version` property in the respective `devcontainer-template.json` file is updated to increment the Template's version.

Tooling that handles releasing Templates will not republish Templates if that exact version has already been published; however, tooling must republish major and minor versions in accordance with the semver specification.

### <a href="#release" name="release" class="anchor"> Release </a>

_For information on distributing Templates, see the [Templates distribution section](#templates-distribution) below._

### <a href="#option-resolution" name="option-resolution" class="anchor"> Option Resolution </a>

A Template's `options` property is used by a supporting tool to prompt for different configuration options. A supporting tool will parse the `options` object provided by the user. If a value is selected for a Template, it will be replaced in the files (within the sub-directory of the Template).

### <a href="#option-resolution-example" name="option-resolution-example" class="anchor"> Option resolution example </a>

Consider a `java` Template with the following folder structure:

```
+-- java
|    +-- devcontainer-template.json
|    +-- .devcontainer.json
```

Suppose the `java` Template has the following `options` parameters declared in the `devcontainer-template.json` file:

```json
// ...
"options": {
    "imageVariant": {
        "type": "string",
        "description": "Specify version of java.",
        "proposals": [
          "17-bullseye",
          "17-buster",
          "11-bullseye",
          "11-buster",
          "17",
          "11"
        ],
    "default": "17-bullseye"
    },
    "nodeVersion": {
        "type": "string", 
        "proposals": [
          "latest",
          "16",
          "14",
          "10",
          "none"
        ],
        "default": "latest",
        "description": "Specify version of node, or 'none' to skip node installation."
    },
    "installMaven": {
        "type": "boolean", 
        "description": "Install Maven, a management tool for Java.",
        "default": "false"
    },
}
```

and it has the following `.devcontainer.json` file:

```json
{
     "name": "Java",
     "image": "mcr.microsoft.com/devcontainers/java:0-${templateOption:imageVariant}",
     "features": {
          "ghcr.io/devcontainers/features/node:1": {
               "version": "${templateOption:nodeVersion}",
               "installMaven": "${templateOption:installMaven}"
          }
     },
//	...
}
```

A user tries to add the `java` Template to their project using the [supporting tools](/supporting#supporting-tools-and-services) and selects `17-bullseye` when prompted for `"Specify version of Java"` and the `default` values when prompted for `"Specify version of node, or 'none' to skip node installation"` and `"Install Maven, a management tool for Java"`.

The supporting tool could then use a string replacer for all the files within the sub-directory of the Template. In this example, `.devcontainer.json` needs to be modified and hence, the inputs can provided to it as follows:

```json
{
  imageVariant:"17-bullseye",
  nodeVersion: "latest",
  installMaven: "false"
}
```

The modified `.devcontainer.json` will be as follows:

```json
{
     "name": "Java",
     "image": "mcr.microsoft.com/devcontainers/java:0-17-bullseye",
     "features": {
          "ghcr.io/devcontainers/features/node:1": {
               "version": "latest",
               "installMaven": "false"
	  }
     },
     ...
}
```

The modified `.devcontainer.json` would be dropped into any existing folder as a starting point for containerizing your project.

## <a href="#templates-distribution" name="templates-distribution" class="anchor"> Templates Distribution and Discovery </a>

**TL;DR Check out the [quick start repository](https://github.com/devcontainers/template-starter) to get started on distributing your own Dev Container Templates.**

This specification defines a pattern where community members and organizations can author and self-publish [Dev Container Templates](#templates). 

Goals include:

- For Template authors, create a "self-service" way to publish a Template, either publicly or privately, that is not centrally controlled.
- Provide the ability to standardize publishing such that supporting tools may implement their own mechanism to aid Template discoverability as they see fit.

### <a href="#source-code" name="source-code" class="anchor"> Source code </a>

A Template's source code is stored in a git repository.

For ease of authorship and maintenance, [1..n] Templates can share a single git repository. This set of Templates is referred to as a "collection," and will share the same [`devcontainer-collection.json`](#devcontainer-collection) file and "namespace" (eg. `<owner>/<repo>`).

> **Note:** Templates and [Features](/implementors/features) should be placed in different git repositories. 

Source code for a set of Templates follows the example file structure below:

```
.
├── README.md
├── src
│   ├── dotnet
│   │   ├── devcontainer-template.json
│   │   ├── .devcontainer.json
│   │   ├── ...
|   ├
│   ├── docker-from-docker
│   │   ├── devcontainer-template.json
│   │   ├── .devcontainer
│   │       ├── devcontainer.json
│   │       ├── Dockerfile
│   │       └── ...
│   │   ├── ...
|   ├
│   ├── go-postgres
│   │   ├── devcontainer-template.json
│   │   ├── .devcontainer
│   │       ├── devcontainer.json
│   │       ├── docker-compose.yml
│   │       ├── Dockerfile
│   │       └── ...
│   │   ├── ...
```

...where `src` is a directory containing a sub-folder with the name of the Template (e.g. `src/dotnet` or `src/docker-from-docker`) with at least a file named `devcontainer-template.json` that contains the Template metadata, and a `.devcontainer.json` (or `.devcontainer/devcontainer.json`) that the supporting tools will drop into an existing project or folder.

Each sub-directory should be named such that it matches the `id` field of the `devcontainer-template.json`.  Other files can also be included in the Templates's sub-directory, and will be included during the [packaging step](#packaging) alongside the two required files.  Any files that are not part of the Templates's sub-directory (e.g. outside of `src/dotnet`) will not included in the [packaging step](#packaging).

### <a href="#versioning-distribution" name="versioning-distribution" class="anchor">Versioning </a>

Each Template is individually [versioned according to the semver specification](https://semver.org/). The `version` property in the respective `devcontainer-template.json` file is parsed to determine if the Template should be republished.

Tooling that handles publishing Templates will not republish Templates if that exact version has already been published; however, tooling must republish major and minor versions in accordance with the semver specification.

### <a href="#packaging" name="packaging" class="anchor"> Packaging </a>

Templates are distributed as tarballs. The tarball contains the entire contents of the Template sub-directory, including the `devcontainer-template.json`, `.devcontainer.json` (or `.devcontainer/devcontainer.json`), and any other files in the directory.

The tarball is named `devcontainer-template-<id>.tgz`, where `<id>` is the Templates's `id` field.

A reference implementation for packaging and distributing Templates is provided as a [GitHub Action](https://github.com/devcontainers/action).

### <a href="#devcontainer-collection" name="devcontainer-collection" class="anchor"> devcontainer-collection.json </a>

The `devcontainer-collection.json` is an auto-generated metadata file.

| Property | Type | Description |
| :--- | :--- | :--- |
| `sourceInformation` | object | Metadata from the implementing packaging tool. |
| `templates` | array | The list of Templates that are contained in this collection.|
{: .table .table-bordered}

Each Template's `devcontainer-template.json` metadata file is appended into the `templates` top-level array.

### <a href="#distribution" name="distribution" class="anchor"> Distribution </a>

There are several supported ways to distribute Templates.  Distribution is handled by the implementing packaging tool such as the **[Dev Container CLI](https://github.com/devcontainers/cli)** or **[Dev Container Publish GitHub Action](https://github.com/marketplace/actions/dev-container-publish)**.

A user can add a Template in to their projects as defined by the [supporting tools](/supporting#supporting-tools-and-services).

### <a href="#oci-registry" name="oci-registry" class="anchor">OCI Registry</a>

An OCI registry that implements the [OCI Artifact Distribution Specification](https://github.com/opencontainers/distribution-spec) serves as the primary distribution mechanism for Templates.

Each packaged Template is pushed to the registry following the naming convention `<registry>/<namespace>/<id>[:version]`, where version is the major, minor, and patch version of the Template, according to the semver specification.

> **Note:** The `namespace` is a unique identifier for the collection of Templates and must be different than the collection of [Features](/implementors/features). There are no strict rules for the `namespace`; however, one pattern is to set `namespace` equal to source repository's `<owner>/<repo>`. 

A custom media type `application/vnd.devcontainers` and `application/vnd.devcontainers.layer.v1+tar` are used as demonstrated below.

For example, the `go` Template in the `devcontainers/templates` namespace at version `1.2.3` would be pushed to the ghcr.io OCI registry.

> **Note:** The example below uses [`oras`](https://oras.land/) for demonstration purposes.  A supporting tool should directly implement the required functionality from the aforementioned OCI artifact distribution specification.

```bash
# ghcr.io/devcontainers/templates/go:1
REGISTRY=ghcr.io
NAMESPACE=devcontainers/templates
TEMPLATE=go

ARTIFACT_PATH=devcontainer-template-go.tgz

for VERSION in 1  1.2  1.2.3  latest
do
        oras push ${REGISTRY}/${NAMESPACE}/${TEMPLATE}:${VERSION} \
                --config /dev/null:application/vnd.devcontainers \
                        ./${ARTIFACT_PATH}:application/vnd.devcontainers.layer.v1+tar
done

```

The "namespace" is the globally identifiable name for the collection of Templates. (eg: `owner/repo` for the source code's git repository).

The auto-generated `devcontainer-collection.json` is pushed to the registry with the same `namespace` as above and no accompanying `template` name. The collection file is always tagged as `latest`.

```bash
# ghcr.io/devcontainers/templates
REGISTRY=ghcr.io
NAMESPACE=devcontainers/templates

oras push ${REGISTRY}/${NAMESPACE}:latest \
        --config /dev/null:application/vnd.devcontainers \
                            ./devcontainer-collection.json:application/vnd.devcontainers.collection.layer.v1+json
```

### <a href="#guide-to-publishing-templates" name="guide-to-publishing-templates" class="anchor">Guide to publishing Templates</a>

The Dev Container CLI can be used to publish [Template](#templates) artifacts to an OCI registry (that supports the [artifacts specification](https://oras.land/implementors/)).

To see all the available options, run `devcontainers templates publish --help`.

### <a href="#example" name="example" class="anchor">Example</a>

Given a directory that is organized according to the [Templates distribution specification](#templates-distribution) - for example:

```
├── src
│   ├── color
│   │   ├── devcontainer-template.json
│   │   └──| .devcontainer
│   │      └── devcontainer.json
│   ├── hello
│   │   ├── devcontainer-template.json
│   │   └──| .devcontainer
│   │      ├── devcontainer.json
│   │      └── Dockerfile
|   ├── ...
│   │   ├── devcontainer-template.json
│   │   └──| .devcontainer
│   │      └── devcontainer.json
├── test
│   ├── color
│   │   └── test.sh
│   ├── hello
│   │   └── test.sh
│   └──test-utils
│      └── test-utils.sh
...
```

The following command will publish each Template above (`color,hello`) to the registry `ghcr.io` with the following namespace (prefix) `devcontainers/templates`.

```
[/tmp]$  GITHUB_TOKEN="$CR_PAT" devcontainer templates publish -r ghcr.io -n devcontainers/templates ./src
```

To later apply a published Template (in the example below, the `color` template) with the CLI, the following `apply` command would be used:

```
[/tmp]$  devcontainer templates apply \
                 -t 'ghcr.io/devcontainers/templates/color' \
                 -a '{"favorite": "red"}'
```

### <a href="#authentication-methods" name="authentication-methods" class="anchor">Authentication Methods</a>

> NOTE: OS-specific docker credential helpers (Docker Desktop credential helper) are not currently recognized by the CLI.  
- Adding a $HOME/.docker/config.json with your credentials following [this commonly defined format](https://www.systutorials.com/docs/linux/man/5-docker-config-json/).
   - Your `docker login` command may write this file for you depending on your operating system.
- Using our custom env variable DEVCONTAINERS_OCI_AUTH
    - eg: `DEVCONTAINERS_OCI_AUTH=service1|user1|token1,service2|user2|token2`

For publishing to `ghcr.io`
- Using the `devcontainers/action` GitHub action to handle the `GITHUB_TOKEN` credential for you.
- Providing a GITHUB_TOKEN with permission to `write:packages`.

## <a href="#contributing" name="contributing" class="anchor"> How to Contribute </a>

We're excited for your contributions to the Dev Container Specification! This document outlines how you can get involved. We also welcome you to join our [community Slack channel](https://aka.ms/dev-container-community).

### <a href="#contribution-approaches" name="contribution-approaches" class="anchor"> Spec Contribution approaches </a>

If you'd like to contribute a change or addition to the spec, you may follow the guidance below:
- Propose the change via an [issue](https://github.com/devcontainers/spec/issues) in this repository. Try to get early feedback before spending too much effort formalizing it.
- More formally document the proposed change in terms of properties and their semantics. Look to format your proposal like our [devcontainer.json reference](https://aka.ms/devcontainer.json).

Here is a sample:

| Property | Type  | Description |
|:------------------|:------------|:------------|
| `image`    | string      | **Required** when using an image. The name of an image in a container registry ([DockerHub](https://hub.docker.com), [GitHub Container Registry](https://docs.github.com/packages/guides/about-github-container-registry), [Azure Container Registry](https://azure.microsoft.com/services/container-registry/)) that VS Code and other `devcontainer.json` supporting services / tools should use to create the dev container. |
{: .table .table-bordered}

- PRs to the [schema](https://github.com/microsoft/vscode/blob/main/extensions/configuration-editing/schemas/devContainer.schema.src.json), i.e code or shell scripts demonstrating approaches for implementation.

Once there is discussion on your proposal, please also open and link a PR to update the [devcontainer.json reference doc](https://aka.ms/devcontainer.json). When your proposal is merged, the docs will be kept up-to-date with the latest spec.

### <a href="#tool-specific-support" name="tool-specific-support" class="anchor"> Contributing tool-specific support </a>

Tool-specific properties are contained in namespaces in the `"customizations"` property. For instance, VS Code specific properties are formated as:

```bash
// Configure tool-specific properties.
"customizations": {
     // Configure properties specific to VS Code.
     "vscode": {
          // Set *default* container specific settings.json values on container create.
          "settings": {},
			
          // Additional VS Code specific properties...
     }
},
```

You may propose adding a new namespace for a specific tool, and any properties specific to that tool.

### <a href="#formatting-guidelines" name="formatting-guidelines" class="anchor"> Formatting Guidelines </a>

When contributing an official doc or referencing dev containers in your projects, please consider the following guidelines:

- Refer to the spec as the "Development Container Specification"
     - All capital letters
     - Singular "Container" rather than plural "Containers"
- The term "dev container" shouldn't be capitalized on its own
     - It should only be capitalized when referring to an official tool title, like the VS Code Dev Containers extension 
- Signify `devcontainer.json` is a file type through backticks 
- Features and Templates should always be capitalized
- Refer to the CLI as the "Dev Container CLI" (note the caps)
- Use bolding for emphasis sprinkled throughout sections, rather than try to use it to always bold certain terms

### <a href="#review-process" name="review-process" class="anchor"> Review process </a>

We use the following [labels](https://github.com/devcontainers/spec/labels) in the spec repo:

- `proposal`: Issues under discussion, still collecting feedback.
- `finalization`: Proposals we intend to make part of the spec.

[Milestones](https://github.com/devcontainers/spec/milestones) use a "month year" pattern (i.e. January 2022). If a finalized proposal is added to a milestone, it is intended to be merged during that milestone.

### <a href="#community-engagement" name="community-engagement" class="anchor"> Community Engagement </a>

There are several additional options to engage with the dev container community, such as asking questions, providing feedback, or engaging on how your team may use or contribute to dev containers:
- [GitHub Discussions](https://github.com/devcontainers/spec/discussions): This is a great opportunity to connect with the community and maintainers of this project, without the requirement of contributing a change to the actual spec (which we see more in issues and PRs)
- [Community Slack channel](https://aka.ms/dev-container-community): This is a great opportunity to connect with the community and maintainers
- You can always check out the issues and PRs (and contribute new ones) across the repos in the [Dev Containers GitHub org](https://github.com/devcontainers) too!
- Community collections: You can contribute your own [Templates](#distribution) and [Features](https://containers.dev/implementors/features-distribution/#distribution) to our [community index](https://containers.dev/collections)!
