const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'website'))); // Serve static files

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'website', 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
