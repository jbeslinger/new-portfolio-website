/* EXPRESS CONFIG */
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json();
const methodOverride = require('method-override');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.engine('ejs', require('express-ejs-extend'));
app.set('view engine', 'ejs');

const blogRouter = require('./routes/blog');
const adminRouter = require('./routes/admin');
/* ************** */


/* STATIC FOLDERS */
app.use(express.static("public"));
/* ************* */


/* DATABASE CONFIG */
const mongoose = require('mongoose');
const dbConfig = require('./config/database.js');
mongoose.connect(dbConfig.url);

const skills = require('./models/queries/get_skills');
const portfolios = require('./models/queries/get_portfolios');
/* *************** */


/* MISC */
const navBar = require('./config/navbar');
const mailer = require('./config/nodemailer');
/* **** */


/* ROUTES */
app.get('/', async (req, res) => {
    const allSkills = await skills.getAllSkills();
    const allPortfolios = await portfolios.getAllPortfolio();
    res.render('partials/index', {
        path: '/',
        navBar: navBar.getnavBarItems,
        skills : allSkills,
        portfolio : allPortfolios
    });
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

app.use('/blog', blogRouter);
app.use('/admin', adminRouter);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
/* ****** */