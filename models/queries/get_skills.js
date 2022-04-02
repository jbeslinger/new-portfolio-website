const skills = require('../skill_model');

const getAllSkills = () => {
    return skills.find();
}

module.exports.getAllSkills = getAllSkills;