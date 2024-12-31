const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'dist' folder where Webpack bundles the JS
app.use(express.static(path.join(__dirname, 'dist')));

// Serve the index.html file from the 'website' folder
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'website', 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
