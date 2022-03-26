const mongoose = require('mongoose')

// page content schema definition
const pageContentSchema= mongoose.Schema({
    title : String,
    description : String,
    tags : String,
    skills_used: String,
    src_code : String,
    createDate       :{
        type         : Date,
        default      : Date.now()
    },
});

// expose it to our app
module.exports = mongoose.model('PageContent', pageContentSchema);