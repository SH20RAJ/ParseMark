// Import the ParseMark class if you are using it as a module
import ParseMark from './ParseMark.module.js';

// If you are using ParseMark via CDN, it's already available in the global scope

// Sample Markdown content with front matter
const markdown = `
---
title: "Sample Post"
tags: javascript, library, markdown
datePublished: Fri, 04 Feb 2024 12:00:00 GMT
---

# Sample Post

This is a sample post content.
`;

// Create a new instance of ParseMark
const parser = new ParseMark(markdown);

// Get the metadata
const metadata = parser.getMetadata();
console.log('Metadata:', metadata);

// Get the raw metadata
const rawMetadata = parser.getRawMetadata();
console.log('Raw Metadata:', rawMetadata);

// Get the content
const content = parser.getContent();
console.log('Content:', content);
