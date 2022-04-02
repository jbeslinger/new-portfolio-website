const portfolio = require('../project_model');

const getAllPortfolio = () => {
    return portfolio.find();
}

module.exports.getAllPortfolio = getAllPortfolio;