const mongoose = require('mongoose')


/// Blog article schema definition
const articleSchema = mongoose.Schema({
    
    title          :    { type: String, required: true },
    
    description    :    { type: String, required: true },
    
    /// The link to a cover image to represent the article card
    cover_image    :    { type: String, required: true },

    /// CSV of every tag associated with the article
    tags           :    { type: String, required: true },
    
    /// The markdown body of the article itself
    markdown       :    { type: String, required: true },
    
    /// Date article was created
    create_date    :    { type: Date, default: Date.now() },
    
    /// The article's title slugified for routing purposes
    slug           :    { type: String, required: true, unique: true },

    /// Whether or not the article should be displayed in the list of articles
    hidden         :    { type: Boolean, default: false }
});


module.exports = mongoose.model('Articles', articleSchema);