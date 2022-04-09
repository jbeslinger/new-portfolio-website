const express = require("express");

const PORT = process.env.PORT || 3000;

const mongoose = require('mongoose');
const dbConfig = require('./config/database.js');

const app = express();
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.engine('ejs', require('express-ejs-extend'));
app.set('view engine', 'ejs');

const skills = require('./models/queries/get_skills');
const portfolios = require('./models/queries/get_portfolios');
const articles = require('./models/queries/get_articles');
const navBar = require('./config/navbar');

const mailer = require('./config/nodemailer');

// database configuration
mongoose.connect(dbConfig.url);

app.get('/', async (req, res) =>  {
    const allSkills = await skills.getAllSkills()
    const allPortfolios = await portfolios.getAllPortfolio();
    const allArticles = await articles.getAllArticles();

    res.render('partials/index', { navBar: navBar.getnavBarItems, skills : allSkills , blog: allArticles , portfolio : allPortfolios});
});

app.post('/send', jsonParser, async (req, res) => {
    var error = await mailer.sendEmail(req.body);
    if (error) {
        console.log("Error: " + error);
        res.send('error');
    } else {
        console.log("New message sent successfully.");
        res.send('success');
    }
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});