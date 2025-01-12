// src/config/ragConfig.js
module.exports = {
    modelConfig: {
        temperature: 0.7,
        model: 'gpt-3.5-turbo'
    },
    textSplitterConfig: {
        chunkSize: 1000,
        chunkOverlap: 200
    },
    dataFiles: {
        ramayana: '../data/ramayana.txt',
        mahabharata: '../data/mahabharata.txt'
    }
};
