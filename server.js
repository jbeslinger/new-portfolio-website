const express = require("express");

const PORT = process.env.PORT || 3000;

const mongoose = require('mongoose');
const dbConfig = require('./config/database.js')
const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');

const Skills = require('./models/skill_model')

// database configuration
mongoose.connect(dbConfig.url);

const routes = ['/', '/intro', '/about', '/skills', '/portfolio', '/contact']

app.get('/', async (req, res) =>  {
    const skills = await Skills.find()
    res.render('layout', { skills : skills })
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});