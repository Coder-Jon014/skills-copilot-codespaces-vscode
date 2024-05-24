//Create a web server
const express = require('express');
const app = express();
const port = 3000;

// Import the comments module
const comments = require('./comments');

// Set up the body-parser middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Set up the GET /comments API
app.get('/comments', (req, res) => {
    res.json(comments.getComments());
});

// Set up the POST /comments API
app.post('/comments', (req, res) => {
    const { comment } = req.body;
    comments.addComment(comment);
    res.status(201).send('Comment added');
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

// Path: comments.js
// Create a module to manage comments
const comments = [];

function getComments() {
    return comments;
}

function addComment(comment) {
    comments.push(comment);
}

// Export the functions
module.exports = { getComments, addComment };