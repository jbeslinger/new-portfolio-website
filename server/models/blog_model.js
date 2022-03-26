const mongoose = require('mongoose')

// projects schema definition
const projectsSchema= mongoose.Schema({
    title : String,
    description : String,
    cover : String,
    skills_used: String,
    src_code : String,
    dl_link : String
});

//skills schema definiton
const skills = mongoose.Schema({
    name : String,
    logo : String,
    type : String,
    proficiency : String
})

// expose it to our app
module.exports.projects = mongoose.model('Projects', projectsSchema);
module.exports.skills = mongoose.model('Skills', skills)