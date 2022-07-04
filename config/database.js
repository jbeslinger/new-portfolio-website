const cred = require('dotenv').config()

//databse configuration settings
module.exports = {
	'url' : process.env.MONGO_URI || cred.parsed.MONGO_URI
};
