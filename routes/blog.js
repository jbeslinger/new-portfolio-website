/* EXPRESS CONFIG */
const express = require('express');
const router = express.Router();
/* ************** */


/* STATIC FOLDERS */
router.use(express.static("public"));
/* ************* */


/* MISC */
const articles = require('../models/queries/get_articles');
const navBar = require('../config/navbar');
/* **** */


/* ROUTES */
router.get('/', async (req, res) => {
    const allArticles = await articles.getAllVisibleArticles();
    res.render('blog', {
        path: '/',
        navBar: navBar.getnavBarItems,
        articles : allArticles
    })
});

router.get('/:slug', async (req, res) => {
    const article = await articles.findOneArticle(req.params.slug);
    if (article == null) {
        res.redirect('/')
    } else {
        res.render('partials/read_article', {
            path: '/',
            navBar: navBar.getnavBarItems,
            article: article
        })
    }
})
/* ****** */

module.exports = router;