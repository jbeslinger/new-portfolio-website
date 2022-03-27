const mongoose = require('mongoose')

// projects schema definition
const projectSchema = mongoose.Schema({
    title          :    String,
    
    description    :    String,
    
    /// The year of release / last worked on
    year           :    Number,

    /// URL to the image to be displayed on the project
    cover_image    :    String,
    
    /// CSV of each skill used for the project
    skills_used    :    String,
    
    /// URL to the source code, typically on GitHub
    src_code       :    String,
    
    /// URL to the download
    dl_link        :    String
});

// expose it to our app
module.exports = mongoose.model('Projects', projectSchema);
