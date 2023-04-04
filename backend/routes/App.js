const express = require('express');
const fs = require('fs');
const router = express.Router();
const path = require('path');
const nodeDate = require('date-and-time');

const articlesFilePath = path.join(__dirname, '../articles.json');

router.get('/', (req, res) => {
   
    if (fs.existsSync(articlesFilePath)) {
        const articles = JSON.parse(fs.readFileSync(articlesFilePath, 'utf8'));
        res.render('index', { articles: articles });
    } else {
        console.error(`Error: File ${articlesFilePath} not found`);
    }
});


router.get('/articles/new', (req, res) => {
  res.render('new');
});

router.post('/articles', (req, res) => {
    const { title, content } = req.body

    let articles = [];

    try {
        const articlesData = fs.readFileSync(articlesFilePath, 'utf8');
        articles = JSON.parse(articlesData);
    } catch (error) {
        console.error(`Error reading articles file: ${error}`);
    }

    let count = (articles.length) ? articles.length - 1 : 0;
    let idNew = (count > 0) ? Number(articles[count].id) + 1 : 1;
    let now = nodeDate.format(new Date(), 'YYYY-MM-DD HH:mm:ss');
    
    const newArticle = {
        id: idNew,
        title: title,
        content: content,
        comments: [
            {}
        ],
        author: `RG${idNew}`,
        votes: 0,
        created_at : now
    };

    articles.push(newArticle);

    try {
        fs.writeFileSync(articlesFilePath, JSON.stringify(articles, null, 2));
        res.redirect('/')

    } catch (error) {
        console.error(`Error writing articles file: ${error}`);
    }
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
router.get('/articles/delete/:id', (req, res) => {
    const { id } = req.params
    if (fs.existsSync(articlesFilePath)) {
        const articlesObj = JSON.parse(fs.readFileSync(articlesFilePath, 'utf8'));
        const updatedArticles = articlesObj.filter(article => article.id !== Number(id));

        const updatedJsonData = JSON.stringify(updatedArticles, null, 2);
        fs.writeFileSync(articlesFilePath, updatedJsonData);

        res.redirect('/')
    } else {
        console.error(`Error: File ${articlesFilePath} not found`);
    }

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
