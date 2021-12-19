const express = require('express');
const path = require('path')

const PORT = process.env.PORT || 3001;
const app = express();

// html routes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

// port connection
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});