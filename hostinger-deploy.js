// Hostinger deployment configuration
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from trinity-website folder
app.use(express.static(path.join(__dirname, 'trinity-website-875b5b.webflow.io')));

// Import jobs API
const jobsHandler = require('./api/jobs');

// API Routes
app.get('/api/jobs', jobsHandler);

// Health check
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        service: 'Trinity Ceipal Integration'
    });
});

// Serve main pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'trinity-website-875b5b.webflow.io', 'index.html'));
});

app.get('/jobs', (req, res) => {
    res.sendFile(path.join(__dirname, 'trinity-website-875b5b.webflow.io', 'jobs.html'));
});

// Catch all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'trinity-website-875b5b.webflow.io', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Trinity website running on port ${PORT}`);
    console.log(`📡 Ceipal integration active`);
});

module.exports = app;