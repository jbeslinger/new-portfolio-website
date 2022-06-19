const skills = require('../skill_model');

const getAllSkills = async () => {
    return await skills.find()
        .sort({ 'list_order' : 'ascending' });
}

module.exports.getAllSkills = getAllSkills;