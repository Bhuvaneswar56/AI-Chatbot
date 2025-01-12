// src/routes/chatRoutes.js
const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');
const usageTracker = require('../utils/usageTracker');

// Initialize RAG system
router.post('/init', chatController.initializeRAG);

// Chat endpoint
router.post('/chat', chatController.handleChatMessage);

router.get('/usage', (req, res) => {
    res.json(usageTracker.getUsage());
});

module.exports = router;