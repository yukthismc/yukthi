const express = require('express');
const path = require('path');  // This module will help in resolving the path

const app = express();

// Serve the Google verification file
app.get("/googleb7dbc6e4ae341232.html", (req, res) => {
    res.sendFile(path.join(__dirname, "googleb7dbc6e4ae341232.html"));
  });

// Serve static files from the 'website' folder
app.use(express.static(path.join(__dirname, 'website')));

app.use(express.static(path.join(__dirname, 'public')));

// Default route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'website', 'index.html'));
});

// Start server
app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
