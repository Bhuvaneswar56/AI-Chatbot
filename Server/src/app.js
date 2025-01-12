const express = require('express');
const chatRoutes = require('./routes/chatRoutes');



const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Basic test route
app.get('/test', (req, res) => {
    res.json({ message: 'Server is running!' });
});

app.use('/api', chatRoutes);

module.exports = app;