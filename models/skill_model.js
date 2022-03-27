const mongoose = require('mongoose')

// skills schema definiton
const skillSchema = mongoose.Schema({
    
    name           :    String,
    
    /// URL to the image representation of the skill
    logo           :    String,
    
    /// A single-word type specifier that categorizes the skill
    type           :    String,
    
    /// A number from 1 to 5 to denote proficiency
    proficiency    :    Number
})

// expose it to our app
module.exports = mongoose.model('Skills', skillSchema)
