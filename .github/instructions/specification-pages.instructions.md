---
applyTo: "_implementors/**/*.md"
description: "Guidelines for specification documentation in _implementors/"
---

# Specification Page Guidelines

## Front Matter Requirements

Always include proper front matter:
```yaml
---
layout: implementors
title: "Full Page Title"
shortTitle: "Nav Title"
author: Organization/Author
index: 1  # Order in navigation
---
```

## Content Structure

### Heading Anchors
Add anchors for major headings to enable deep linking:
```markdown
# <a href="#section" name="section" class="anchor"> Section Title </a>
```

### Property Documentation Format
Document specification properties using this table format:

```markdown
| Property | Type | Description |
|----------|------|-------------|
| `propertyName` | string | Description including **Required** or **Optional** label |
```

## Best Practices

- Include code examples in appropriate language-tagged code blocks
- Cross-reference related specification pages
- Use **bolding** sparingly for emphasis within sections
- Ensure all property descriptions indicate whether they are **Required** or **Optional**

## Workflow for Adding/Updating Specification Pages

1. Create/update the relevant `.md` file in `_implementors/`
2. Add property documentation in table format
3. Update `_data/specification-toc.yml` if adding a new page
4. Add code examples demonstrating usage
5. Cross-reference related pages
