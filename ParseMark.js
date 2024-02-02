// markdown-utils.js

/**
 * Markdown Utils Library
 * A library for extracting metadata and content from Markdown text.
 */

const MarkdownUtils = {

    /**
     * Extracts metadata and content separately from Markdown text.
     * @param {string} markdown - The Markdown text.
     * @returns {Object} - An object containing metadata and content.
     */
    extractMetadataAndContent: function (markdown) {
        const frontMatter = this.extractFrontMatter(markdown);
        const metadata = this.parseMetadata(frontMatter);
        const content = this.extractContent(markdown);
        return { metadata, content };
    },

    /**
     * Extracts the front matter (metadata) from Markdown text.
     * @param {string} markdown - The Markdown text.
     * @returns {string} - The front matter as a string.
     */
    extractFrontMatter: function (markdown) {
        const frontMatterRegex = /^---([\s\S]*?)---/;
        const match = markdown.match(frontMatterRegex);
        return match ? match[1].trim() : '';
    },

    /**
     * Parses metadata from front matter string.
     * @param {string} frontMatter - The front matter string.
     * @returns {Object} - An object containing parsed metadata.
     */
    parseMetadata: function (frontMatter) {
        const metadata = {};
        const lines = frontMatter.split('\n').filter(line => line.trim() !== '');
        lines.forEach(line => {
            const [key, ...valueParts] = line.split(':').map(item => item.trim());
            metadata[key] = valueParts.join(':').replace(/(^"|"$)/g, '').trim();
        });
        return metadata;
    },

    /**
     * Extracts content (Markdown body) from Markdown text.
     * @param {string} markdown - The Markdown text.
     * @returns {string} - The content (Markdown body).
     */
    extractContent: function (markdown) {
        return markdown.replace(/^---([\s\S]*?)---/, '').trim();
    }

};
