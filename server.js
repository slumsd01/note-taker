const express = require('express');
const { json } = require('express/lib/response');
const fs = require('fs');
const path = require('path');
const uniqid = require('uniqid'); 
const database = require('./db/db')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// html routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

// api routes
app.route('/api/notes')
    .get((req, res) => {
        res.json(database)
    })
    .post((req, res) => {
        let JSONfile = path.join(__dirname, './db/db.json')
        let newNote = req.body
        newNote.id = uniqid();

        database.push(newNote)

        fs.writeFile(JSONfile, JSON.stringify(database), (err) => {
            if (err) {
                return console.log(err)
            }
            console.log('New note was saved.')
        })
        res.json(newNote)
    })

// port connection
app.listen(PORT, () => {
    console.log('App listening on PORT ' + PORT);
});