# ParseMark.js

A lightweight JavaScript library for parsing Markdown metadata and content separately


 [Documentation](https://dev.to/sh20raj/parsemarkjs-a-lightweight-javascript-library-for-parsing-markdown-metadata-and-content-separately-1o6j) 

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/parsemarkjs.svg)](https://badge.fury.io/js/parsemarkjs)
[![Visitors](https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2FSH20RAJ%2FParseMark%2F&labelColor=%232ccce4&countColor=%23f47373&style=flat)](https://visitorbadge.io/status?path=https%3A%2F%2Fgithub.com%2FSH20RAJ%2FParseMark%2F)


## Installation

### Using npm

```bash
npm install parsemarkjs
```
Import

```js
// import ParseMark from './ParseMark.module.js'; // if you have downloaded the js file
import ParseMark from 'parsemarkjs';
```

### Using CDN
Include the following script tag in your HTML file:

```html
<script src="https://cdn.jsdelivr.net/gh/SH20RAJ/ParseMark@main/ParseMark.js"></script>
```

## Usage

### Constructor

```javascript
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

<img width="577" alt="Screenshot 2024-02-02 at 3 14 25 PM" src="https://github.com/SH20RAJ/ParseMark/assets/66713844/d1b845b1-2ae7-4d07-89ad-b60006e22165">


## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/license/mit/) file for details.

