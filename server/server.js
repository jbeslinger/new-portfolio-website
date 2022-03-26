const express = require("express");
const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose');
const dbConfig = require('./config/database.js')
const pageContent = require('./models/page_content_model')
const app = express();

// database configuration
mongoose.connect(dbConfig.url);

app.get('/', async (req, res) =>  {
  /*
    const newContent = new pageContent({
      title : 'Test Title',
      description : 'Testing save',
      tags : '123',
      skills_used: 'node and test',
      src_code : 'none yet',
    });

    await newContent.save();

    const grabbedNewContent = await pageContent.findOne();
    
    res.send('Hello....' + grabbedNewContent.title + ' ' + grabbedNewContent.description + ' ' + grabbedNewContent.skills_used + ' ' + grabbedNewContent.src_code);
  */
  res.send('Hello....');
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from the other side!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});