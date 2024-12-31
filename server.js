const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'dist' folder
app.use(express.static(path.join(__dirname, 'dist')));

// If you're using another folder for CSS, like 'website/css', you can explicitly serve that as well:
app.use('/css', express.static(path.join(__dirname, 'website', 'css')));
app.use('/images', express.static(path.join(__dirname, 'website')));


// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'website', 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
