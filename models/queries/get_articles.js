const article = require('../article_model');

const getAllArticles = () => {
    return article.find();
};

module.exports.getAllArticle = getAllArticles;