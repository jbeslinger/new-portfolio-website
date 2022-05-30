const article = require('../article_model');

const getAllArticles = async () => {
    return await article.find()
        .sort({ 'create_date' : 'descending' });
};

const findOneArticle = async (slugToFind) => {
    return await article.findOne({ slug: slugToFind });
};

module.exports.getAllArticles = getAllArticles;
module.exports.findOneArticle = findOneArticle;