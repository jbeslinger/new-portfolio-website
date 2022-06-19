const portfolio = require('../project_model');

const getAllPortfolio = async () => {
    return await portfolio.find()
        .sort({ 'list_order' : 'ascending' });
}

module.exports.getAllPortfolio = getAllPortfolio;