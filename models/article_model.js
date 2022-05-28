const mongoose = require('mongoose')

const slugify = require('slugify')

var MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();

const createDomPurify = require('dompurify')
const { JSDOM } = require('jsdom')
const dompurify = createDomPurify(new JSDOM().window)

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

    // The parsed markdown to be rendered
    html           :    { type: String, required: true },
    
    /// Date article was created
    create_date    :    { type: Date, default: Date.now() },
    
    /// The article's title slugified for routing purposes
    slug           :    { type: String, required: true, unique: true },

    /// Whether or not the article should be displayed in the list of articles
    hidden         :    { type: Boolean, default: false }
});

articleSchema.pre('validate', function(next) {
    if (this.title) {
        this.slug = slugify(this.title, {
            lower       :       true,
            strict      :       true,
            locale      :       'en',
            remove      :       /[*+~.()'"!:@]/g,
        });
    }

    if (this.markdown) {
        this.html = dompurify.sanitize(md.render(this.markdown));
    }

    next();
});

module.exports = mongoose.model('Articles', articleSchema);
