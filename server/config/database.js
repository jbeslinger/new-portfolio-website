const cred = require('dotenv').config()

//databse configuration settings
module.exports = {
	'url' : cred.parsed.MONGO_URI
};
