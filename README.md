
<!-- Add a title, description, and badges if needed -->
# ParseMark.js

A lightweight JavaScript library for parsing Markdown content with YAML front matter.

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Installation

Install the library using npm:

```bash
npm install parsemark
```

## Usage

### Constructor

```javascript
const ParseMark = require('parsemark');

const markdown = `
---
title: "Sample Post"
tags: javascript, library, markdown
datePublished: Fri, 04 Feb 2024 12:00:00 GMT
---

# Sample Post

This is a sample post content.
`;

const parser = new ParseMark(markdown);
```

### getMetadata()

```javascript
const metadata = parser.getMetadata();
console.log('Metadata:', metadata);
```

### getRawMetadata()

```javascript
const rawMetadata = parser.getRawMetadata();
console.log('Raw Metadata:', rawMetadata);
```

### getContent()

```javascript
const content = parser.getContent();
console.log('Content:', content);
```

#### Example Output

For the provided markdown:

```markdown
# Sample Post

This is a sample post content.
```

The output of `getContent()` will be:

```
Content: # Sample Post

This is a sample post content.
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

