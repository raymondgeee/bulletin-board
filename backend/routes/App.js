const express = require('express');
const fs = require('fs');
const router = express.Router();
const path = require('path');


// Home page - display list of articles
router.get('/', (req, res) => {
    const articlesFilePath = path.join(__dirname, '../articles.json');
    if (fs.existsSync(articlesFilePath)) {
        const articles = JSON.parse(fs.readFileSync(articlesFilePath, 'utf8'));
        res.render('index', { articles: articles });
    } else {
        console.error(`Error: File ${articlesFilePath} not found`);
    }
//  
});

// Create new article form
router.get('/articles/new', (req, res) => {
  res.render('new');
});

// Create new article
router.post('/articles', (req, res) => {
  // TODO: implement
});

// View article
router.get('/articles/:id', (req, res) => {
  // TODO: implement
});

// Edit article form
router.get('/articles/:id/edit', (req, res) => {
  // TODO: implement
});

// Edit article
router.put('/articles/:id', (req, res) => {
  // TODO: implement
});

// Delete article
router.delete('/articles/:id', (req, res) => {
  // TODO: implement
});

// Upvote article
router.post('/articles/:id/upvote', (req, res) => {
  // TODO: implement
});

// Comment on article
router.post('/articles/:id/comments', (req, res) => {
  // TODO: implement
});

module.exports = router;
