// src/services/ragService.js
const { OpenAI } = require('@langchain/openai');
const { RetrievalQAChain } = require("langchain/chains");
const { MemoryVectorStore } = require("langchain/vectorstores/memory");
const { OpenAIEmbeddings } = require('@langchain/openai');
const { CharacterTextSplitter } = require("langchain/text_splitter");
const fs = require('fs').promises;
const path = require('path');

class RAGService {
    constructor() {
        this.vectorStore = null;
        this.qaChain = null;
    }

    async initialize() {
        try {
            // Load mythology texts
            const ramayana = await fs.readFile(
                path.join(__dirname, '../data/ramayana.txt'), 
                'utf8'
            );
            const mahabharata = await fs.readFile(
                path.join(__dirname, '../data/mahabharata.txt'), 
                'utf8'
            );

            // Create text splitter with smaller chunks
            const textSplitter = new CharacterTextSplitter({
                chunkSize: 1000,    
                chunkOverlap: 200,  
                separator: "\n",    
            });

            
            const ramayanaDocs = await textSplitter.createDocuments([ramayana], {
                metadata: { source: 'Ramayana' }
            });
            const mahabharataDocs = await textSplitter.createDocuments([mahabharata], {
                metadata: { source: 'Mahabharata' }
            });

            // Create embeddings
            const embeddings = new OpenAIEmbeddings({
                openAIApiKey: process.env.OPENAI_API_KEY,
            });

            // Create vector store
            this.vectorStore = await MemoryVectorStore.fromDocuments(
                [...ramayanaDocs, ...mahabharataDocs],
                embeddings
            );

            // Initialize OpenAI model with stricter limits
            const model = new OpenAI({
                openAIApiKey: process.env.OPENAI_API_KEY,
                modelName: "gpt-3.5-turbo",
                temperature: 0.7,
                maxTokens: 500  // Limit response length
            });

            // Create QA chain with specific configuration
            this.qaChain = RetrievalQAChain.fromLLM(
                model,
                this.vectorStore.asRetriever(4), 
                {
                    returnSourceDocuments: true,
                    verbose: true
                }
            );

            console.log('RAG system initialized successfully');
            return true;
        } catch (error) {
            console.error('Error initializing RAG:', error);
            throw error;
        }
    }

    async processQuery(message) {
        try {
            if (!this.qaChain) {
                await this.initialize();
            }

            const response = await this.qaChain.call({
                query: message,
            });

            return {
                answer: response.text,
                sources: response.sourceDocuments?.map(doc => ({
                    content: doc.pageContent.substring(0, 200) + '...',
                    source: doc.metadata.source
                }))
            };
        } catch (error) {
            console.error('Error processing query:', error);
            throw error;
        }
    }
}

module.exports = new RAGService();