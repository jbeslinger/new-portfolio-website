const mongoose = require('mongoose')

// blog article schema definition
const articles = mongoose.Schema({
    
    title          :    String,
    
    description    :    String,
    
    /// CSV of every tag associated with the article
    tags           :    String,
    
    /// The markdown body of the article itself
    body           :    String,
    
    /// Date article was created
    create_date    :    { type : Date, default : Date.now() },
    
    /// Whether or not the article should be displayed in the list of articles
    hidden         :    Boolean
});

// expose it to our app
module.exports = mongoose.model('Articles', articles);
