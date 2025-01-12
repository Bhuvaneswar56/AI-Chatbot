// src/controllers/chatController.js
const ragService = require('../services/ragService');

const chatController = {
    async handleChatMessage(req, res) {
        try {
            const { message } = req.body;

            if (!message) {
                return res.status(400).json({ 
                    error: 'Message is required' 
                });
            }

            const response = await ragService.processQuery(message);
            
            res.json(response);
        } catch (error) {
            console.error('Error in chat controller:', error);
            res.status(500).json({ 
                error: 'Failed to process message',
                details: error.message 
            });
        }
    },

    async initializeRAG(req, res) {
        try {
            await ragService.initialize();
            res.json({ 
                message: 'RAG system initialized successfully' 
            });
        } catch (error) {
            console.error('Error initializing RAG:', error);
            res.status(500).json({ 
                error: 'Failed to initialize RAG system',
                details: error.message 
            });
        }
    }
};

module.exports = chatController;