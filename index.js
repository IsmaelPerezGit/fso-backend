const express = require('express');

const app = express();

let notes = [
    {
        id: 1,
        content: 'HTML is easy',
        date: '2019-05-30T17:30:31.098Z',
        important: true
    },
    {
        id: 2,
        content: 'Browser can execute only Javascript',
        date: '2019-05-30T18:39:34.091Z',
        important: false
    },
    {
        id: 3,
        content: 'GET and POST are the most important methods of HTTP protocol',
        date: '2019-05-30T19:20:14.298Z',
        important: true
    }
];

app.get('/', (req, res) => {
    res.send('<h1>Hello API User</h1>');
});

app.get('/notes', (req, res) => {
    res.json(notes);
});

app.get('/notes/:id', (req, res) => {
    const id = +req.params.id;
    const note = notes.find(note => note.id === id);

    note ? res.json(note) : res.status(404).end();
});

app.delete('/notes/:id', (req, res) => {
    id = +req.params.id;
    notes = notes.filter(note => note.id !== id);

    res.status(204).end();
});

app.post('/notes', (req, res) => {
    const note = req.body;
    res.json(note);
});

const PORT = 3001;
app.listen(PORT);
console.log(`Server listening on port ${PORT}`);
