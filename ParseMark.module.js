class ParseMark {
    constructor(markdown) {
        this.markdown = markdown;
        this.metadata = {};
        this.content = '';
        this.parse();
    }

    parse() {
        const match = this.markdown.match(/^---([\s\S]*?)\n---([\s\S]*)/);

        if (match) {
            this.extractMetadata(match[1]);
            this.content = match[2].trim();
        } else {
            // If no front matter found, consider the entire content as the content
            this.content = this.markdown.trim();
        }
    }

    extractMetadata(yamlString) {
        const metadataLines = yamlString.split('\n').filter(line => line.trim() !== '');
        this.metadata = {};
        metadataLines.forEach(line => {
            const [key, ...valueParts] = line.split(':').map(item => item.trim());
            this.metadata[key] = valueParts.join(':').replace(/(^"|"$)/g, '').trim();
        });
        this.metadata.tags = this.metadata.tags ? this.metadata.tags.split(',').map(tag => tag.trim()) : [];
    }

    getMetadata() {
        return this.metadata;
    }

    getRawMetadata() {
        const metadataString = `---${Object.entries(this.metadata).map(([key, value]) => `\n${key}: ${value}`).join('')}\n---`;
        return metadataString.trim();
    }

    getContent() {
        return this.content;
    }
}

export default ParseMark;
