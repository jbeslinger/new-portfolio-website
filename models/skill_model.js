const mongoose = require('mongoose')

// skills schema definiton
const skillSchema = mongoose.Schema({
    
    name           :    { type: String, required: true },
    
    /// URL to the image representation of the skill
    logo           :    { type: String, required: true },
    
    /// A single-word type specifier that categorizes the skill
    type           :    { type: String, required: true },
    
    /// A number from 1 to 5 to denote proficiency
    proficiency    :    { type: Number, required: true }
})

// expose it to our app
module.exports = mongoose.model('Skills', skillSchema)
