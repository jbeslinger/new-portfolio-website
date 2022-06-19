/* EXPRESS CONFIG */
const express = require('express');
const router = express.Router();
/* ************** */


/* DATABASE CONFIG */
const mongoose = require('mongoose');
const dbConfig = require('../config/database.js');
mongoose.connect(dbConfig.url);

const skills = require('../models/queries/get_skills');
const portfolios = require('../models/queries/get_portfolios');
const articles = require('../models/queries/get_articles');

const Article = require('./../models/article_model');
const Project = require('./../models/project_model');
const Skill = require('./../models/skill_model');
/* *************** */


/* MISC */
const cred = require('dotenv').config()
/* **** */


/* FUNCTIONS */
const reject = (res) => {
    res.setHeader('www-authenticate', 'Basic');
    res.sendStatus(401);
};

function authorize(req, res) {
    const authorization = req.headers.authorization;
    if (!authorization) {
        return false;
    }

    const [username, password] = Buffer.from(authorization.replace('Basic ', ''), 'base64').toString().split(':');
    if (!(username === cred.parsed.ADMIN_USER && password === cred.parsed.ADMIN_PASS)) {
        return false;
    }

    return true;
}

async function saveModelThenRedirectHome(modelToSave, res) {
    try {
        await modelToSave.save();
    } catch (e) {
        console.error(e);
    }
    res.redirect('/admin');
}
/* ********* */


/* ROUTES */
router.get('/', async (req, res) => {
    if (!authorize(req, res)) return reject(res);

    res.render('../views/admin/index', {
        skills: await skills.getAllSkills(),
        projects: await portfolios.getAllPortfolio(),
        articles: await articles.getAllArticles()
    });
});



/* REDIR TO ADD NEW BLOG POST */
router.get('/article/new', async (req, res) => {
    if (!authorize(req, res)) return reject(res);
    
    res.render('../views/admin/add', {
       whatWeAreAdding: 'article',
       modelObject: new Article()
    });
});
/* SUBMIT NEW BLOG POST */
router.post('/article/add', async (req, res) => {
    if (!authorize(req, res)) return reject(res);

    const newArticle = new Article({
        title           :    req.body.title,
        description     :    req.body.description,
        cover_image     :    req.body.cover_image,
        tags            :    req.body.tags,
        markdown        :    req.body.markdown,
        create_date     :    req.body.create_date,
        hidden          :    req.body.hidden ? true : false,
    });
    await saveModelThenRedirectHome(newArticle, res);
});
/* REDIR TO EDIT BLOG POST */
router.get('/article/edit/:id', async (req, res) => {
    if (!authorize(req, res)) return reject(res);
    
    const article = await Article.findById(req.params.id);
    res.render('../views/admin/edit', {
        whatWeAreAdding: 'article',
        modelObject: article
     });
});
/* UPDATE BLOG POST */
router.put('/article/update/:id', async (req, res) => {
    if (!authorize(req, res)) return reject(res);

    const article = await Article.findById(req.params.id);
    
    article.title           =   req.body.title;
    article.description     =   req.body.description;
    article.cover_image     =   req.body.cover_image;
    article.tags            =   req.body.tags;
    article.markdown        =   req.body.markdown;
    article.create_date     =   req.body.create_date;
    article.hidden          =   req.body.hidden ? true : false;

    saveModelThenRedirectHome(article, res);
});
/* DELETE BLOG POST */
method = "DELETE"
router.delete('/article/delete/:id', async (req, res) => {
    if (!authorize(req, res)) return reject(res);
    
    await Article.findByIdAndDelete(req.params.id)
    res.redirect('/admin');
});



/* REDIR TO ADD NEW PORTFOLIO ENTRY */
router.get('/project/new', async (req, res) => {
    if (!authorize(req, res)) return reject(res);
    
    res.render('../views/admin/add', {
        whatWeAreAdding: 'project',
        modelObject: new Project()
     });
});
/* SUBMIT NEW PORTFOLIO ENTRY */
router.post('/project/add', async (req, res) => {
    if (!authorize(req, res)) return reject(res);

    const newProject = new Project({
        title           :   req.body.title,
        description     :   req.body.description,
        year            :   req.body.year,
        cover_image     :   req.body.cover_image,
        skills_used     :   req.body.skills_used,
        src_code        :   req.body.src_code,
        dl_link         :   req.body.dl_link,
        list_order      :   req.body.list_order,
    });
    await saveModelThenRedirectHome(newProject, res);
});
/* REDIR TO EDIT PORTFOLIO ENTRY */
router.get('/project/edit/:id', async (req, res) => {
    if (!authorize(req, res)) return reject(res);
    
    const project = await Project.findById(req.params.id);
    res.render('../views/admin/edit', {
        whatWeAreAdding: 'project',
        modelObject: project
     });
});
/* UPDATE PORTFOLIO ENTRY */
router.put('/project/update/:id', async (req, res) => {
    if (!authorize(req, res)) return reject(res);

    const project = await Project.findById(req.params.id);
    
    project.title           =   req.body.title;
    project.description     =   req.body.description;
    project.year            =   req.body.year;
    project.cover_image     =   req.body.cover_image;
    project.skills_used     =   req.body.skills_used;
    project.src_code        =   req.body.src_code;
    project.dl_link         =   req.body.dl_link;
    project.list_order      =   req.body.list_order;

    saveModelThenRedirectHome(project, res);
});
/* DELETE PORTFOLIO ENTRY */
method = "DELETE"
router.delete('/project/delete/:id', async (req, res) => {
    if (!authorize(req, res)) return reject(res);
    
    await Project.findByIdAndDelete(req.params.id);
    res.redirect('/admin');
});



/* REDIR TO ADD NEW SKILL ENTRY */
router.get('/skill/new', async (req, res) => {
    if (!authorize(req, res)) return reject(res);
    
    res.render('../views/admin/add', {
        whatWeAreAdding: 'skill',
        modelObject: new Skill()
     });
});
/* SUBMIT NEW SKILL ENTRY */
router.post('/skill/add', async (req, res) => {
    if (!authorize(req, res)) return reject(res);

    const newSkill = new Skill({
        name            :    req.body.name,
        logo            :    req.body.logo,
        type            :    req.body.type,
        proficiency     :    req.body.proficiency,
        list_order      :    req.body.list_order,
    });
    await saveModelThenRedirectHome(newSkill, res);
});
/* REDIR TO EDIT SKILL ENTRY */
router.get('/skill/edit/:id', async (req, res) => {
    if (!authorize(req, res)) return reject(res);
    
    const skill = await Skill.findById(req.params.id);
    res.render('../views/admin/edit', {
        whatWeAreAdding: 'skill',
        modelObject: skill
     });
});
/* UPDATE PORTFOLIO ENTRY */
router.put('/skill/update/:id', async (req, res) => {
    if (!authorize(req, res)) return reject(res);

    const skill = await Skill.findById(req.params.id);
    
    skill.name          =   req.body.name;
    skill.logo          =   req.body.logo;
    skill.type          =   req.body.type;
    skill.proficiency   =   req.body.proficiency;
    skill.list_order    =   req.body.list_order;

    saveModelThenRedirectHome(skill, res);
});
/* DELETE SKILL ENTRY */
method = "DELETE"
router.delete('/skill/delete/:id', async (req, res) => {
    if (!authorize(req, res)) return reject(res);
    
    await Skill.findByIdAndDelete(req.params.id);
    res.redirect('/admin');
});
/* ****** */

module.exports = router;