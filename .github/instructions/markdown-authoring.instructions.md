---
applyTo: "**/*.md"
description: "Markdown formatting and content style guidelines"
---

# Markdown Authoring Guidelines

## Terminology Standards

Follow these conventions when writing content:

- **"Development Container Specification"** (proper noun, capitalized, singular "Container")
- **"dev container"** (lowercase unless part of an official tool name like "Dev Container CLI")
- **`devcontainer.json`** (always in backticks when referring to the file)
- **"Features"** and **"Templates"** (always capitalized when referring to specification concepts)
- **"Dev Container CLI"** (official tool name, capitalized)

## Markdown Best Practices

- Use **bolding** sparingly for emphasis within sections
- Include code examples in appropriate language-tagged code blocks
- Use backticks for inline code, filenames, and technical terms
- Write descriptive link text (avoid "click here")
- Use proper heading hierarchy (don't skip levels)

## Code Block Formatting

Always specify the language for syntax highlighting:

````markdown
```json
{
  "name": "example"
}
```
````

````markdown
```bash
npm install
```
````

## Front Matter

Ensure all Markdown files include appropriate YAML front matter for the content type (see content-specific instruction files for details).
