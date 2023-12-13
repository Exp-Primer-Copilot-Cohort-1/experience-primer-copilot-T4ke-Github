//Create web server
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');   
const commentsPath = path.join(__dirname, 'comments.json'); 
const comments = require('./comments.json');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
//Get all comments  
app.get('/comments', (req, res) => {
    res.json(comments);
});
//Get comment by id
app.get('/comments/:id', (req, res) => {
    const id = req.params.id;
    const comment = comments.find(comment => comment.id === id);
    res.json(comment);
});
//Create new comment
app.post('/comments', (req, res) => {
    const comment = req.body;
    comment.id = uuidv4();
    comments.push(comment);
    fs.writeFile(commentsPath, JSON.stringify(comments), () => {
        res.json(comment);
    });
});

