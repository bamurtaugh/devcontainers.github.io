---
applyTo: "_posts/**/*.md"
description: "Guidelines for tutorial and guide content in _posts/"
---

# Guide & Tutorial Guidelines

## File Naming Convention

Use date-based naming: `YYYY-MM-DD-descriptive-title.md`

Example: `2024-10-24-my-new-guide.md`

## Front Matter Requirements

```yaml
---
layout: post
title: "Guide Title"
author:
  - "@githubusername"
authorUrl:
  - https://github.com/username
---
```

## Permalink Structure

Guides automatically get the permalink pattern: `/guide/title`

The date prefix is stripped from the URL.

## Content Guidelines

- Write clear, actionable tutorial content
- Include practical code examples
- Use step-by-step instructions where appropriate
- Add screenshots or diagrams when helpful (store in `img/` directory)

## Workflow for Creating a New Guide

1. Create `_posts/YYYY-MM-DD-descriptive-title.md`
2. Add proper front matter with author info
3. Write content following style guidelines
4. Test rendering locally with Jekyll serve
5. Verify it appears in the guides section at `http://localhost:4000/guides.html`
