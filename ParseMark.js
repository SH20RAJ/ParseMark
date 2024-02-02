class ParseMark {
    constructor(markdown) {
        this.markdown = markdown;
        this.metadata = {};
        this.content = '';
        this.parse();
    }

    parse() {
        const [frontMatter, ...contentParts] = this.markdown.split('---');
        this.extractMetadata(frontMatter);
        this.content = contentParts.join('---').trim();
    }

    extractMetadata(frontMatter) {
        const metadataLines = frontMatter.split('\n').filter(line => line.trim() !== '');
        metadataLines.forEach(line => {
            const [key, ...valueParts] = line.split(':').map(item => item.trim());
            this.metadata[key] = valueParts.join(':').replace(/(^"|"$)/g, '').trim();
        });
        this.metadata.tags = this.metadata.tags ? this.metadata.tags.split(',').map(tag => tag.trim()) : [];
    }

    getMetadata() {
        return this.metadata;
    }

    getContent() {
        return this.content;
    }
}

// Example usage
const markdown = `---
title: "Sample Post"
tags: javascript, library, markdown
datePublished: Fri, 04 Feb 2024 12:00:00 GMT
---

# Sample Post

This is a sample post content.`;

const parser = new ParseMark(markdown);
const metadata = parser.getMetadata();
const content = parser.getContent();

console.log('Metadata:', metadata);
console.log('Content:', content);
