const mongoose = require('mongoose')

const slugify = require('slugify')

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
    
    var hljs = require('highlight.js');
    var md = require('markdown-it')({
        html            :       true,
        xhtmlOut        :       true,
        breaks          :       true,
        linkify         :       true,
        typographer     :       true,
        quotes          :       '“”‘’',
        highlight       :       
        function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(str, { language: lang }).value;
                } catch (__) {}
            }

            return ''; // use external default escaping
        }
    })
    .use(require('markdown-it-sub'))
    .use(require('markdown-it-sup'))
    .use(require('markdown-it-abbr'))

    if (this.markdown) {
        this.html = dompurify.sanitize(md.render(this.markdown));
    }

    next();
});

module.exports = mongoose.model('Articles', articleSchema);
