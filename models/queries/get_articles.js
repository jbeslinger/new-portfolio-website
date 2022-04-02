const article = require('../article_model');

const getAllArticle = () => {
    return article.find();
};

module.exports.getAllArticle = getAllArticle;