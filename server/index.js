/**
 * Main server file for AI RAG Workshop
 * - Sets up the Express server
 * - Serves static frontend
 * - Mounts API routes: /api/chat and /api/search
 */

const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to handle JSON and static files
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Import and use API routes
const chatRoute = require('./routes/chat');
const searchRoute = require('./routes/search');

app.use('/api/chat', chatRoute);
app.use('/api/search', searchRoute);

// Simple test route
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from the AI RAG API!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
