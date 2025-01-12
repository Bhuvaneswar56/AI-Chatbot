// server/src/utils/downloadTexts.js
const fs = require('fs').promises;
const axios = require('axios');

async function downloadText(url, filename) {
    try {
        const response = await axios.get(url);
        await fs.writeFile(`src/data/${filename}`, response.data);
        console.log(`Successfully downloaded ${filename}`);
    } catch (error) {
        console.error(`Error downloading ${filename}:`, error);
    }
}

async function downloadAllTexts() {
    const texts = {
        'ramayana.txt': 'https://www.gutenberg.org/cache/epub/24869/pg24869.txt',
        'mahabharata.txt': 'https://www.gutenberg.org/files/15474/15474-0.txt'
    };

    for (const [filename, url] of Object.entries(texts)) {
        await downloadText(url, filename);
    }
}

downloadAllTexts();