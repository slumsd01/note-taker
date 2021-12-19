const express = require('express');
const { json } = require('express/lib/response');
const router = express.Router();
const fs = require('fs');
const path = require('path')
const notes = require('./db/db.json');

const PORT = process.env.PORT || 3001;
const app = express();

// html routes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

// api routes
app.get('/api/notes', (req, res) => {
    res.json(notes);
})

// port connection
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});