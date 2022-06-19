const mongoose = require('mongoose')

// projects schema definition
const projectSchema = mongoose.Schema({

    title           :   { type: String, required: true },
    
    description     :   { type: String, required: true },
    
    /// The year of release / last worked on
    year            :   { type: Number, required: true },

    /// URL to the image to be displayed on the project
    cover_image     :   { type: String, required: true },
    
    /// CSV of each skill used for the project
    skills_used     :   { type: String, required: true },
    
    /// URL to the source code, typically on GitHub
    src_code        :   { type: String, required: false },
    
    /// URL to the download
    dl_link         :   { type: String, required: false },

    // The order which this should be listed when each record is pulled from the database
    list_order      :   { type: String, required: true },
});

// expose it to our app
module.exports = mongoose.model('Projects', projectSchema);
