const express = require("express");

const PORT = process.env.PORT || 3000;

const mongoose = require('mongoose');
const dbConfig = require('./config/database.js');
const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');

const skills = require('./models/queries/get_skills');
const portfolios = require('./models/queries/get_portfolios');
const articles = require('./models/queries/get_articles');

// database configuration
mongoose.connect(dbConfig.url);

// we only have one route - DO WE NEED THE ARRAY OF ROUTES? 
// we can have additional routes for each of the portofolios if you wish it to be that way
// but I was thinking that the only other routes that were going to be there would be 
// for the blog - articles
const routes = ['/', '/intro', '/about', '/skills', '/portfolio', '/contact']

app.get('/', async (req, res) =>  {
    const allSkills = await skills.getAllSkills()
    const allPortfolios = await portfolios.getAllPortfolio();
    const allArticles =  await articles.getAllArticles();

    res.render('layout', { skills : allSkills , blog: allArticles , portfolio : allPortfolios});
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});