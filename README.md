# ParseMark

# Markdown Utils Library

A JavaScript library for extracting metadata and content separately from Markdown text.

## Introduction

This library provides utility methods to parse and extract metadata and content from Markdown files. It's suitable for scenarios where you need to separate the front matter (metadata) and the content of a Markdown document.

## Features

- Extracts metadata and content separately.
- Parses metadata from front matter.
- Extracts the front matter (metadata) as a string.
- Extracts content (Markdown body) from the Markdown text.

## Usage

### Installation

Include the `markdown-utils.js` file in your project.

### Example

```javascript
// Example usage:
const markdownText = `
---
title: "Sample Post"
date: "2024-02-01"
tags: javascript, markdown
---

# Sample Post

This is a sample Markdown post.
`;

const result = MarkdownUtils.extractMetadataAndContent(markdownText);
console.log('Metadata:', result.metadata);
console.log('Content:', result.content);
```

### Methods

#### `extractMetadataAndContent(markdown)`

Extracts metadata and content separately from Markdown text.

#### `extractFrontMatter(markdown)`

Extracts the front matter (metadata) as a string.

#### `parseMetadata(frontMatter)`

Parses metadata from the front matter string.

#### `extractContent(markdown)`

Extracts content (Markdown body) from the Markdown text.

## License

This library is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
